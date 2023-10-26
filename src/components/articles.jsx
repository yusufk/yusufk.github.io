import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import ReactMarkdown from 'react-markdown';
import { BlobServiceClient } from '@azure/storage-blob';

function parseMetadata(text) {
    const metadata = {};
    const lines = text.split('\n');
    let i = 0;
    try {
        while (i < lines.length && lines[i].startsWith('<!--')) {
            i++;
            while (i < lines.length && !lines[i].startsWith('-->')) {
                const [key, value] = lines[i].split(':');
                if (key && value) {
                    metadata[key.trim()] = value.trim();
                }
                i++;
            }
        }
    } catch (error) {
        console.error('Error parsing metadata:', error);
    }
    return metadata;
}

export default class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            articles: [],
            error: null,
        };
        this.abortController = new AbortController();
    }

    componentDidMount = async () => {
        const containerUrl = 'https://yusufkakacozastorageacc.blob.core.windows.net/';
        const blobServiceClient = new BlobServiceClient(containerUrl);
        const containerClient = blobServiceClient.getContainerClient("yusufkakacoza");
        const blobItems = containerClient.listBlobsFlat();

        const markdownFiles = [];
        try {
            for await (const blobItem of blobItems) {
                if (blobItem.name.endsWith('.md')) {
                    const blobClient = containerClient.getBlobClient(blobItem.name);
                    // Get the file from Azure Storage from URL
                    const blobDownloadResponse = await blobClient.download(this.abortController.signal);
                    const blob = await blobDownloadResponse.blobBody;
                    const markdownText = await blob.text();
                    const metadata = parseMetadata(markdownText.toString('utf8'));
                    markdownFiles.push({
                        text: markdownText,
                        metadata: metadata,
                    });
                }
            }
            // Sort the markdownFiles array by date in descending order
            markdownFiles.sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date));
        } catch (error) {
            markdownFiles.push({
                text: "Error loading articles...",
                metadata: {
                    title: "Error loading articles...",
                    date: new Date().toISOString().slice(0, 10),
                },
            });
        }
        this.setState({ articles: markdownFiles, loading: false });
    };

    componentWillUnmount() {
        this.abortController.abort();
    }

    render() {
        const { articles } = this.state;

        if (!this.state.loading) {
            return (
                <div>
                    {/* ======= Articles Section ======= */}
                    <section id="articles" className="articles">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="section-title">
                                        <h2>Articles</h2>
                                    </div>
                                    <div className="articles-container">
                                        {articles.map((article, index) => (
                                            <LazyLoad key={index} height={200}>
                                                <div id={`article-${index}`} className="article" key={index}>
                                                    <div className="article-header">
                                                        <h1> {article.metadata.title}</h1>
                                                    </div>
                                                    <div className='article-body'>
                                                        <ReactMarkdown children={article.text} skipHtml={true} />
                                                        <p>Published: {article.metadata.date}</p>
                                                    </div>
                                                </div>
                                            </LazyLoad>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="section-title">
                                        <h2>Article List</h2>
                                    </div>
                                    <div className="article-list">
                                        <ul>
                                            {articles.map((article, index) => (
                                                <li key={index}>
                                                    <a href={`#article-${index}`}>{article.metadata.title}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            );
        } else {
            return <div>Loading...</div>;
        }
    }
}