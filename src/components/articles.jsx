import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import ReactMarkdown from 'react-markdown';

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
        const markdownFiles = [];
        const dataDir = '/data/articles';

        try {
            // Fetch the index.json file
            const response = await fetch(`${dataDir}/index.json`);
            const files = await response.json();

            console.log('Files:', files); // Debug: Log the list of files

            for (const file of files) {
                const fileResponse = await fetch(`${dataDir}/${file}`);
                const markdownText = await fileResponse.text();
                const metadata = parseMetadata(markdownText);
                markdownFiles.push({
                    text: markdownText,
                    metadata: metadata,
                });
            }

            // Sort the markdownFiles array by date in descending order
            markdownFiles.sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date));
            console.log('Markdown Files:', markdownFiles); // Debug: Log the markdown files

            this.setState({ articles: markdownFiles, loading: false });
        } catch (error) {
            console.error('Error fetching markdown files:', error); // Debug: Log any errors
            this.setState({ error, loading: false });
        }
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