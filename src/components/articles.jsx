import React, { Component } from 'react';
import { useParams, Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

// Wrapper component to access URL parameters
const ArticlesWrapper = (props) => {
  const params = useParams();
  return <Articles {...props} slug={params.slug} />;
};

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
    // Add slug based on title if not provided
    if (!metadata.slug && metadata.title) {
        metadata.slug = metadata.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
    }
    return metadata;
}

class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            articles: [],
            currentPage: 1,
            articlesPerPage: 5,
            error: null,
        };
        this.abortController = new AbortController();
    }

    componentDidMount = async () => {
        await this.fetchArticles();
    };

    componentDidUpdate(prevProps) {
        if (prevProps.slug !== this.props.slug) {
            // Reset page when slug changes
            this.setState({ currentPage: 1 });
        }
    }

    componentWillUnmount() {
        this.abortController.abort();
    }

    fetchArticles = async () => {
        const markdownFiles = [];
        const dataDir = '/data/articles';

        try {
            const response = await fetch(`${dataDir}/index.json`);
            const files = await response.json();

            for (const file of files) {
                const fileResponse = await fetch(`${dataDir}/${file}`);
                const markdownText = await fileResponse.text();
                const metadata = parseMetadata(markdownText);
                markdownFiles.push({
                    text: markdownText,
                    metadata: metadata,
                });
            }

            markdownFiles.sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date));
            this.setState({ articles: markdownFiles, loading: false });
        } catch (error) {
            console.error('Error fetching markdown files:', error);
            this.setState({ error, loading: false });
        }
    };

    handlePageChange = (pageNumber) => {
        this.setState({ currentPage: pageNumber });
    };

    renderPagination = (totalPages) => {
        const { currentPage } = this.state;
        const pages = [];

        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => this.handlePageChange(i)}
                    className={`px-3 py-1 mx-1 rounded ${
                        currentPage === i
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                >
                    {i}
                </button>
            );
        }

        return (
            <div className="flex justify-center mt-4 mb-8">
                {pages}
            </div>
        );
    };

    render() {
        const { articles, currentPage, articlesPerPage, loading } = this.state;
        const { slug } = this.props;

        if (loading) {
            return <div>Loading...</div>;
        }

        // If slug is provided, show single article
        if (slug) {
            const article = articles.find(a => a.metadata.slug === slug);
            if (!article) {
                return <div>Article not found</div>;
            }

            return (
                <section id="articles" className="articles section-show">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="article">
                                    <div className="article-header">
                                        <h1>{article.metadata.title}</h1>
                                    </div>
                                    <div className="article-body">
                                        <ReactMarkdown children={article.text} skipHtml={false} rehypePlugins={[rehypeRaw]} />
                                        <p>Published: {article.metadata.date}</p>
                                    </div>
                                    <Link to="/articles" className="btn btn-primary mt-4">
                                        Back to Articles
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                            <div className="section-title">
                                <h2>Article List</h2>
                            </div>
                            <div className="article-list">
                                <ul>
                                    {articles.map((article) => (
                                        <li key={article.metadata.slug}>
                                            <Link to={`/articles/${article.metadata.slug}`}>
                                                {article.metadata.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            );
        }

        // Calculate pagination
        const indexOfLastArticle = currentPage * articlesPerPage;
        const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
        const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);
        const totalPages = Math.ceil(articles.length / articlesPerPage);

        return (
            <section id="articles" className="articles section-show">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="section-title">
                                <h2>Articles</h2>
                            </div>
                            <div className="articles-container">
                                {currentArticles.map((article, index) => (
                                    <LazyLoad key={article.metadata.slug} height={200}>
                                        <div className="article">
                                            <div className="article-header">
                                                <Link to={`/articles/${article.metadata.slug}`}>
                                                    <h1>{article.metadata.title}</h1>
                                                </Link>
                                            </div>
                                            <div className="article-body">
                                                <ReactMarkdown children={article.text} skipHtml={false} rehypePlugins={[rehypeRaw]} />
                                                <p>Published: {article.metadata.date}</p>
                                            </div>
                                        </div>
                                    </LazyLoad>
                                ))}
                            </div>
                            {this.renderPagination(totalPages)}
                        </div>
                        <div className="col-md-4">
                            <div className="section-title">
                                <h2>Article List</h2>
                            </div>
                            <div className="article-list">
                                <ul>
                                    {articles.map((article) => (
                                        <li key={article.metadata.slug}>
                                            <Link to={`/articles/${article.metadata.slug}`}>
                                                {article.metadata.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ArticlesWrapper;