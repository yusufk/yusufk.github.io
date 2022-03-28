import React, { Component } from 'react'
import GitHubCalendar from 'react-github-calendar';


export default class Repositories extends Component {

    render() {
        return (
            <div>
                {/* ======= Repositories Section ======= */}
                <section id="repos" className="repos">
                    <div className="container">
                        <div className="section-title">
                            <h2>Repositories</h2>
                            <p>My Code repositories</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="icon-box">
                                    <a href="https://github.com/yusufk/Laser-Turret">
                                        <div className="icon">
                                            <i className="bx bxl-github" />
                                        </div>
                                        <h4>
                                            Laser-Turret
                                        </h4>
                                    </a>
                                    <p>
                                        Arduino and web2py code for remotely controlling a laser turret with a Leap Motion Controller
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                                <div className="icon-box">
                                    <a href="https://github.com/python-smpplib/python-smpplib">
                                        <div className="icon">
                                            <i className="bx bxl-github" />
                                        </div>
                                        <h4>
                                            Python SMPPLIB
                                        </h4>
                                    </a>
                                    <p>
                                        An SMPP Library for Python, forked and extended from an old Google Code project
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                                <div className="icon-box">
                                    <a href="https://github.com/yusufk/yusufk.github.io">
                                        <div className="icon">
                                            <i className="bx bxl-github" />
                                        </div>
                                        <h4>
                                            Github Pages resume
                                        </h4>
                                    </a>
                                    <p>
                                        Source code for this site! Developed as an excercise to get familiar with React development, 0-cost hosting and static websites.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                <div className="icon-box">
                                    <a href="https://bitbucket.org/mitpeople/ebilal/src">
                                        <div className="icon">
                                            <i className="bx bxl-git" />
                                        </div>
                                        <h4>
                                            eBilal
                                        </h4>
                                    </a>
                                    <p>
                                        A streaming online radio client for LiveMasjid deployed on Raspberry Pi
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                <div className="icon-box">
                                    <a href="https://gitlab.com/yusufkaka/tldr">
                                        <div className="icon">
                                            <i className="bx bxl-gitlab" />
                                        </div>
                                        <h4>
                                            Ayoba TLDR
                                        </h4>
                                    </a>
                                    <p>
                                        Too Long, Didn't Read. The microapp for people with low attention spans.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                <div className="icon-box">
                                    <a href="https://github.com/yusufk/ayoba-microapp-boilerplate">
                                        <div className="icon">
                                            <i className="bx bxl-github" />
                                        </div>
                                        <h4>
                                            Ayoba microapp boilerplate
                                        </h4>
                                    </a>
                                    <p>
                                        This project demonstrates the basic workflow and lifecyle of a microapp. It waits for an onNicknameChanged event to signal that the Ayoba object is ready to be called.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p>More source code repos can be found <a href="https://github.com/yusufk/">here</a>, <a href="https://bitbucket.org/mitpeople/">here</a> and <a href="https://gitlab.com/yusufk">here</a>.</p>
                        <p>Also, find me on <a href="https://stackoverflow.com/users/241449/yusufk">StackOverflow.</a></p>
                        <div className="section-title">
                            <h2>Contributions</h2>
                        </div>
                        <GitHubCalendar username="yusufk" />
                    </div>
                </section>
                {/* End Repositories Section */}
            </div>
        )
    }
}