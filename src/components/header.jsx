import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
                <header id="header">
                    <div className="container">
                        <h1>
                            <Link to="/">Yusuf Kaka</Link>
                        </h1>
                        <h2>
                            I'm a passionate&nbsp;
                            <div className="ms-slider">
                                <ul className="ms-slider__words">
                                        <li className="ms-slider__word">Engineer</li>
                                        <li className="ms-slider__word">Husband</li>
                                        <li className="ms-slider__word">Product Manager</li>
                                        <li className="ms-slider__word">Wanderer</li>
                                        <li className="ms-slider__word">Father</li>
                                        <li className="ms-slider__word">Mountain Biker</li>
                                        <li className="ms-slider__word">Tinkerer</li>
                                        <li className="ms-slider__word">Muslim</li>
                                        <li className="ms-slider__word">Technologist</li>
                                        <li className="ms-slider__word">Engineer</li>
                                </ul>
                            </div>
                        </h2>
                        <nav id="navbar" className="navbar">
                            <ul>
                                <li>
                                    <Link to="/" className="nav-link active">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="nav-link">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/resume" className="nav-link">
                                        Resume
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/articles" className="nav-link">
                                        Articles
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/repos" className="nav-link">
                                        Repositories
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/portfolio" className="nav-link">
                                        Digital Art
                                    </Link>
                                </li>
                            </ul>
                            <i className="bi bi-list mobile-nav-toggle" />
                        </nav>
                        <div className="social-links">
                            <a href="https://bsky.app/profile/yusufk.co.za" className="bluesky" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-twitter" />
                            </a>
                            <a href="https://github.com/yusufk" className="github" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-github" />
                            </a>
                            <a href="https://t.me/yusufkaka" className="telegram" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-telegram" />
                            </a>
                            <a href="https://www.linkedin.com/in/yusufkaka/" className="linkedin" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-linkedin" />
                            </a>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}
