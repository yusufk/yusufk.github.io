import React, { Component } from 'react'


export default class Resume extends Component {

    render() {
        return (
            <div>
                {/* ======= Resume Section ======= */}
                <section id="resume" className="resume">
                    <div className="container">
                        <div className="section-title">
                            <h2>Resume</h2>
                            <p>Check My Resume</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <h3 className="resume-title">Summary</h3>
                                <div className="resume-item pb-0">
                                    <h4>Yusuf Kaka</h4>
                                    <p>
                                        <em>
                                            Innovative and experienced technologists with over 20 years of experience in GSM, App Development, Innovation strategy and technology leadership.
                                        </em>
                                    </p>
                                    <p></p>
                                    <ul>
                                        <li>Johannesburg, ZA</li>
                                        <li>yusufk -at- gmail.com</li>
                                    </ul>
                                    <p />
                                </div>
                                <h3 className="resume-title">Education</h3>
                                <div className="resume-item">
                                    <h4>B.Eng Engineering (Computers)</h4>
                                    <h5>2003 - 2005</h5>
                                    <p>
                                        <em>Univeristy of Pretoria, Pretoria</em>
                                    </p>
                                    <p>
                                        Additional Honours Degree obtained as part of the Masters Program at University of Pretoria.
                                    </p>
                                </div>
                                <div className="resume-item">
                                    <h4>B.Sc. Engineering (Electrical)</h4>
                                    <h5>1997 - 2002</h5>
                                    <p>
                                        <em>University of Witwatersrand, Johannesburg</em>
                                    </p>
                                    <p>
                                        Undergrad degree in Electrical Engineering, specialising in RF and Software Engineering, obtained as part of the Bachelor of Science Program at University of Witwatersrand.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h3 className="resume-title">Professional Experience</h3>
                                <div className="resume-item">
                                    <h4>Head of Technology</h4>
                                    <h5>2021 - 2022</h5>
                                    <p>
                                        <em>ayoba, ZA</em>
                                    </p>
                                    <p>
                                        <em>As Head of Technology I lead all technical development and operations at ayoba, acting as both a technology and operations expert, making decisions impacting current and future plans for a highly scalable digital communication platform. I oversee all technology and technological resources, establish the technology vision, strategies, and growth plans and I'm responsible for managing the technology roadmap.
                                        </em>
                                    </p>
                                    <ul>
                                        <li>
                                            Built a high-performance technical team to deliver a high-quality product and service.
                                        </li>
                                        <li>
                                            Responsible for managing the technology architecture and design authority function
                                        </li>
                                        <li>
                                            Maintaining technical operations and related systems
                                        </li>
                                        <li>
                                            Delivery of Technical initiatives in an iterative, agile, and fast-paced environment
                                        </li>
                                        <li>
                                            Building strategic relationships with key technical and business leaders to ensure successful delivery of the technology vision
                                        </li>
                                    </ul>
                                    <p />
                                </div>
                                <div className="resume-item">
                                    <h4>General Manager: Product Development and Innovation</h4>
                                    <h5>2018 - Present</h5>
                                    <p>
                                        <em>MTN Group, ZA</em>
                                    </p>
                                    <p>
                                        <em>As the General Manager for Product Development and Innovation, my role was to execute on a new centralised product developement strategy, in which MTN Group would invest into software development of key channels and products that could benefit from centralised development and deployment. This included the "Next Generation" myMTN App, which was re-imagined and designed from scratch using modern cloud-native architecture and modern development frameworks.
                                        </em>
                                    </p>
                                    <ul>
                                        <li>
                                            Motivate the technical and business case for central development "build vs buy" for digital channels and key products.
                                        </li>
                                        <li>
                                            Build a high-performance team to execute on the strategy
                                        </li>
                                        <li>
                                            Identify and work with key stakeholders in selected Opcos
                                        </li>
                                        <li>
                                            Gain support and trust with Opcos in order to move from vendor-built solutions to internally developed platforms
                                        </li>
                                        <li>
                                            Establish a decoupled, layered channel platform architecture
                                        </li>
                                        <li>
                                            Select and procure key SaaS and PaaS solutions required to establish the platform
                                        </li>
                                    </ul>
                                    <p />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Resume Section */}
            </div>
        )
    }
}