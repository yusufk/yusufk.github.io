import React, { Component } from 'react';
import GitHubCalendar from 'react-github-calendar';

export default class Repositories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repos: [],
            loading: true,
            error: null
        };
    }

    componentDidMount() {
        const token = process.env.REACT_APP_GITHUB_TOKEN;
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        fetch('https://api.github.com/users/yusufk/repos', config)
            .then(response => response.json())
            .then(data => {
                this.setState({ repos: data, loading: false });
            })
            .catch(error => {
                this.setState({ error: error.message, loading: false });
            });
    }

    render() {
        const { repos, loading, error } = this.state;

        return (
            <section id="repos" className="repos">
                <div className="container">
                    <div className="section-title">
                        <h2>Repositories</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <GitHubCalendar username="yusufk" />
                        </div>
                    </div>
                    <div className="row">
                        {loading && <div>Loading...</div>}
                        {error && <div>Error: {error}</div>}
                        {repos.map(repo => (
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" key={repo.id}>
                                <div className="icon-box">
                                    <a href={repo.html_url}>
                                        <div className="icon">
                                            <i className="bx bxl-github" />
                                        </div>
                                        <h4>{repo.name}</h4>
                                    </a>
                                    <p>{repo.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}