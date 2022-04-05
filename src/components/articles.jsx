import React, { Component } from 'react'
import axios from 'axios';
import ReactMarkdown from 'react-markdown'

export default class Articles extends Component {
    constructor(props) {
        super(props);
        // State of your application
        this.state = {
            loading: true,
            articles: [],
            error: null,
        };
    }

    // Fetch your articles immediately after the component is mounted
    componentDidMount = async () => {
        const token = process.env.REACT_APP_CMS_TOKEN;
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        try {
            const response = await axios.get('https://yusufk.herokuapp.com/api/articles', config);
            this.setState({ articles: response.data, loading: false });
        } catch (error) {
            this.setState({ error });
        }
    };

    render() {

        if (!this.state.loading) {
            return (
                <div>
                    {/* ======= Articles Section ======= */}
                    <section id="articles" className="articles">
                        <div className="container">
                            <div className="section-title">
                                <h2>Thoughts ({this.state.articles.data.length})</h2>
                            </div>
                            <div className="Articles">
                                <div className="ArticlesList-container">
                                    {this.state.articles.data.map((article, index) => {
                                        const pubDate = new Date(article.attributes.publishedAt);
                                        return (
                                            <div className="ArticlesList-article" key={article.id}>
                                                <h3>{article.attributes.Title}</h3>
                                                <ReactMarkdown children={article.attributes.Body} />
                                                <p>Published: {pubDate.toLocaleString()}</p>
                                                <hr/>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            );
        }
        return <div>Loading...</div>;
    }
}
