import React, { Component } from 'react';
import thoughts from '../data/thoughts.md';
import ReactMarkdown from "react-markdown";


export default class Articles extends Component {
    constructor(props) {
        super(props);
        // State of your application
        this.state = {
            loading: true,
            markdown: "",
            articles: [],
            error: null,
        };
        this.abortController = new AbortController();
    }

    // Fetch your articles immediately after the component is mounted
    componentDidMount = async () => {
        try {
            const response = await fetch(thoughts, { signal: this.abortController.signal });
            const text = await response.text();
            this.setState({ markdown: text, loading: false });
        } catch (error) {
            if (error.name === 'AbortError') {
                console.log('Fetch aborted');
            } else {
                this.setState({ error });
            }
        }
    }

    componentWillUnmount() {
        this.abortController.abort();
    }

    render() {

        if (!this.state.loading) {
            return (
                <div>
                    {/* ======= Articles Section ======= */}
                    <section id="articles" className="articles">
                        <div className="container">
                            <div className="section-title">
                                <h2>Thoughts</h2>
                            </div>
                            <div className="Articles">
                                <div className="ArticlesList-container">
                                    <div className="ArticlesList-article">
                                        <ReactMarkdown children={this.state.markdown} />
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