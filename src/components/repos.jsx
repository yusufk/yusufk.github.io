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
        //const token = process.env.REACT_APP_GITHUB_TOKEN;
        const config = {
            //headers: { Authorization: `Bearer ${token}` }
        };
    
        fetch('https://api.github.com/users/yusufk/repos?per_page=100', config)
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    data.sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));
                }
                this.setState({ repos: data, loading: false });
            })
            .catch(error => {
                this.setState({ error: error.message, loading: false });
            });
    }

    render() {
        const { repos, loading, error } = this.state;

        if (error) {
            return <div>Error: {error}</div>;
        }

        return (
            <section id="repos" className="repos">
                <div className="container">
                    <div className="section-title">
                        <h2>Repositories</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 calrow">
                            <GitHubCalendar username="yusufk" />
                        </div>
                    </div>
                    <div className="row">
                        {loading && <div>Loading...</div>}
                        {Array.isArray(repos) && repos.map(repo => (
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" key={repo.id}>
                                <div className="icon-box">
                                    <a href={repo.html_url}>
                                        <div className="icon">
                                            <i className="bx bxl-github" />
                                        </div>
                                        <h4>{repo.name}</h4>
                                    </a>
                                    <p className="card-text">{repo.description}</p>
                                    {repo.homepage && (
                                        <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                                            View Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <p>More source code repos can be found <a href="https://github.com/yusufk/">here</a>, <a href="https://bitbucket.org/mitpeople/">here</a> and <a href="https://gitlab.com/yusufk">here</a>.</p>
                    <p>Also, find me on <a href="https://stackoverflow.com/users/241449/yusufk">StackOverflow.</a></p>

                </div>
            </section>
        );
    }
}