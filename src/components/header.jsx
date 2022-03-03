import React, { Component } from 'react'


export default class Header extends Component {

    render() {
        return (
            <div>
                {/* ======= Header ======= */}
                <header id="header">
                    <div className="container">
                        <h1>
                            <a href="index.html">Yusuf Kaka</a>
                        </h1>
                        {/* Uncomment below if you prefer to use an image logo */}
                        {/* <a href="index.html" class="mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a> */}
                        <h2>
                            I'm a passionate&nbsp;
                            <div className="ms-slider">
                                <ul className="ms-slider__words">
                                        <li className="ms-slider__word">Engineer</li>
                                        <li className="ms-slider__word">Tech-leader</li>
                                        <li className="ms-slider__word">Father</li>
                                        <li className="ms-slider__word">Engineer</li>
                                </ul>
                            </div>
                        </h2>
                        <nav id="navbar" className="navbar">
                            <ul>
                                <li>
                                    <a className="nav-link active" href="#header">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="#about">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="#resume">
                                        Resume
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="#repos">
                                        Repositories
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="#portfolio">
                                        Gallery
                                    </a>
                                </li>
                                {/*<li>
                                    <a className="nav-link" href="#contact">
                                        Contact
                                    </a>
                                </li>*/}
                            </ul>
                            <i className="bi bi-list mobile-nav-toggle" />
                        </nav>
                        {/* .navbar */}
                        <div className="social-links">
                            <a href="https://twitter.com/yusufkza" className="twitter">
                                <i className="bi bi-twitter" />
                            </a>
                            <a href="https://github.com/yusufk" className="github">
                                <i className="bi bi-github" />
                            </a>
                            <a href="https://www.instagram.com/profoundlyperplexed/" className="instagram">
                                <i className="bi bi-instagram" />
                            </a>
                            <a href="https://www.linkedin.com/in/yusufkaka/" className="linkedin">
                                <i className="bi bi-linkedin" />
                            </a>
                        </div>
                    </div>
                </header>
                {/* End Header */}
            </div>
        )
    }
}
