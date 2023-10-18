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

async function importAllMarkdownFiles() {
    const context = require.context('/data/articles', false, /\.md$/);
    const keys = context.keys();
    const markdownFiles = await Promise.all(
        keys.map(async (key) => {
            const module = await import(`/data/articles/${key.slice(2)}`);
            return module.default;
        })
    );
    return markdownFiles;
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
        try {
            const markdownFiles = await importAllMarkdownFiles();
            const articles = await Promise.all(
                markdownFiles.map(async (file) => {
                    const response = await fetch(file);
                    const text = await response.text();
                    const metadata = parseMetadata(text);
                    return { text, metadata };
                })
            );
            const sortedArticles = articles.sort((a, b) => {
                const aDate = new Date(a.metadata.date);
                const bDate = new Date(b.metadata.date);
                if (aDate > bDate) {
                    return -1;
                } else if (aDate < bDate) {
                    return 1;
                } else {
                    return a.metadata.title.localeCompare(b.metadata.title);
                }
            });
            this.setState({ articles: sortedArticles, loading: false });
        } catch (error) {
            if (error.name === 'AbortError') {
                console.log('Fetch aborted');
            } else {
                this.setState({ error });
            }
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
                                                        <ReactMarkdown children={article.text} skipHtml={true}/>
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