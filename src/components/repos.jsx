import React, { Component } from 'react'


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
                                    <div className="icon">
                                        <i className="bx bxl-github" />
                                    </div>
                                    <h4>
                                        <a href="https://github.com/yusufk/Laser-Turret">Laser-Turret</a>
                                    </h4>
                                    <p>
                                        Arduino and web2py code for remotely controlling a laser turret with a Leap Motion Controller
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                                <div className="icon-box">
                                    <div className="icon">
                                        <i className="bx bxl-github" />
                                    </div>
                                    <h4>
                                        <a href="https://github.com/python-smpplib/python-smpplib">Python SMPPLIB</a>
                                    </h4>
                                    <p>
                                        An SMPP Library for Python, forked and extended from an old Google Code project
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                                <div className="icon-box">
                                    <div className="icon">
                                        <i className="bx bxl-github" />
                                    </div>
                                    <h4>
                                        <a href="https://github.com/yusufk/yusufk.github.io">Github Pages resume</a>
                                    </h4>
                                    <p>
                                        Source code for this site, as an excercise to get familiar with React development and static websites
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                <div className="icon-box">
                                    <div className="icon">
                                        <i className="bx bxl-git" />
                                    </div>
                                    <h4>
                                        <a href="https://bitbucket.org/mitpeople/ebilal/src">eBilal</a>
                                    </h4>
                                    <p>
                                        A streaming online radio client for LiveMasjid deployed on Raspberry Pi
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                <div className="icon-box">
                                    <div className="icon">
                                        <i className="bx bxl-gitlab" />
                                    </div>
                                    <h4>
                                        <a href="https://gitlab.com/yusufkaka/tldr">Ayoba TLDR</a>
                                    </h4>
                                    <p>
                                        Too Long, Didn't Read. The microapp for people with low attention spans.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                <div className="icon-box">
                                    <div className="icon">
                                        <i className="bx bxl-github" />
                                    </div>
                                    <h4>
                                        <a href="https://github.com/yusufk/ayoba-microapp-boilerplate">Ayoba microapp boilerplate</a>
                                    </h4>
                                    <p>
                                        This project demonstrates the basic workflow and lifecyle of a microapp. It waits for an onNicknameChanged event to signal that the Ayoba object is ready to be called.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Repositories Section */}
            </div>
        )
    }
}