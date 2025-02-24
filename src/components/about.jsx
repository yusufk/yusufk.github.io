import React, { Component } from 'react'
// Use an image
import me from '../img/cappuccino_yusuf.png'

export default class About extends Component {

    render() {
        return (
            <div>
                {/* ======= About Section ======= */}
                <section id="about" className="about">
                    {/* ======= About Me ======= */}
                    <div className="about-me container">
                        <div className="section-title">
                            <h2>whoami</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-4" data-aos="fade-right">
                                <img src={me} className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                                <h3>Technology Leadership | Product Development | Innovation Management</h3>
                                <p className="fst-italic">
                                    Accomplished technologist with 20+ years of experience in co-creating and delivering large-scale products, services, and systems. Recognised for driving innovation through strategic programs and finding creative solutions to complex technical challenges.
                                </p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul>
                                            <li>
                                                <i className="bi bi-chevron-right" />{" "}
                                                <strong>Web:</strong> <a href="https://yusuf.kaka.co.za">You're here</a>
                                            </li>
                                            <li>
                                                <i className="bi bi-chevron-right" /> <strong>City:</strong>{" "}
                                                <span>Johannesburg, ZA</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul>
                                            <li>
                                                <i className="bi bi-chevron-right" /> <strong>Age:</strong>{" "}
                                                <del><span>45</span></del>&nbsp;&nbsp;&nbsp;&nbsp;18
                                            </li>
                                            <li>
                                                <i className="bi bi-chevron-right" /> <strong>Qualification:</strong>{" "}
                                                <span>B.Sc. Engineering <a href="https://www.wits.ac.za">@wits</a></span>
                                            </li>
                                            <li>
                                                <i className="bi bi-chevron-right" />{" "}
                                                <strong>Email:</strong> <span>yusufk-at-outlook.com</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <p>
                                    My mission is to harness technology for the benefit of humanity. I am passionate about technology and its ability to positively impact lives.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* End About Me */}
                    {/* ======= Skills  ======= */}
                    <div className="skills container">
                        <div className="section-title">
                            <h2>Skills</h2>
                        </div>
                        <div className="row skills-content">
                            <div className="col-lg-6">
                                <div className="progress">
                                    <span className="skill">
                                        Technology Leadership <i className="val">15 years</i>
                                    </span>
                                    <div className="progress-bar-wrap">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            aria-valuenow={90}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                            style={{ "width": "90%" }}
                                        />
                                    </div>
                                </div>
                                <div className="progress">
                                    <span className="skill">
                                        Mobile app and Web development <i className="val">20 years</i>
                                    </span>
                                    <div className="progress-bar-wrap">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            aria-valuenow={90}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                            style={{ "width": "100%" }}
                                        />
                                    </div>
                                </div>
                                <div className="progress">
                                    <span className="skill">
                                        Innovation management <i className="val">10 years</i>
                                    </span>
                                    <div className="progress-bar-wrap">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            aria-valuenow={75}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                            style={{ "width": "75%" }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="progress">
                                    <span className="skill">
                                        API and Microservices <i className="val">10 years</i>
                                    </span>
                                    <div className="progress-bar-wrap">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            aria-valuenow={75}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                            style={{ "width": "75%" }}
                                        />
                                    </div>
                                </div>
                                <div className="progress">
                                    <span className="skill">
                                        Product Development <i className="val">15 years</i>
                                    </span>
                                    <div className="progress-bar-wrap">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            aria-valuenow={90}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                            style={{ "width": "90%" }}
                                        />
                                    </div>
                                </div>
                                <div className="progress">
                                    <span className="skill">
                                        React Progress bars <i className="val">1 week</i>
                                    </span>
                                    <div className="progress-bar-wrap">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            aria-valuenow={5}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                            style={{ "width": "5%" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Skills */}
                    {/* ======= Interests ======= */}
                    <div className="interests container">
                        <div className="section-title">
                            <h2>Interests</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-4">
                                <div className="icon-box">
                                    <i className="ri-robot-line" style={{ color: "#ffbb2c" }} />
                                    <h3>Technology</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                                <div className="icon-box">
                                    <i className="ri-suitcase-line" style={{ color: "#5578ff" }} />
                                    <h3>Travel</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                                <div className="icon-box">
                                    <i className="ri-riding-line" style={{ color: "#e80368" }} />
                                    <h3>Mountain Biking</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                                <div className="icon-box">
                                    <i className="ri-flask-line" style={{ color: "#e361ff" }} />
                                    <h3>Science</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <i className="ri-database-2-line" style={{ color: "#47aeff" }} />
                                    <h3>Nature</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <i className="ri-space-ship-line" style={{ color: "#ffa76e" }} />
                                    <h3>Space</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <i className="ri-home-gear-line" style={{ color: "#11dbcf" }} />
                                    <h3>IoT and Home automation</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <i className="ri-leaf-line" style={{ color: "#4233ff" }} />
                                    <h3>Outdoors</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Interests */}
                    {/* ======= Testimonials ======= */}
                    <div className="testimonials container">
                        <div className="section-title">
                            <h2>Testimonials</h2>
                        </div>
                        <div
                            className="testimonials-slider swiper"
                            data-aos="fade-up"
                            data-aos-delay={100}
                        >
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left" />
                                            Yusuf brings a wealth of experience and a customer-centric view to technology. Yusuf has a unique combination of skills: Not only is he incredibly knowledgeable about anything tech-related but he is also ready to switch between high-level strategy and getting his hands dirty writing code – whatever it takes to get the job done. Yusuf is an impressive team leader and understands how best to support his team and deliver results.
                                            <i className="bx bxs-quote-alt-right quote-icon-right" />
                                        </p>
                                        <img
                                            src={require("../img/testimonials/testimonials-1.jpg")}
                                            className="testimonial-img"
                                            alt=""
                                        />
                                        <h3>Nolan Wolff</h3>
                                        <h4>Product Managment Specialist</h4>
                                    </div>
                                </div>
                                {/* End testimonial item */}
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left" />
                                            I have had the pleasure of working with Yusuf for over 10 years, both at MTN Group and at ayoba.
                                            Yusuf combines engineering and hacking wizardry with humility and integrity like no one else. And to top it off, he makes a superb team member or a leader in any organisation.
                                            I highly recommend Yusuf!
                                            <i className="bx bxs-quote-alt-right quote-icon-right" />
                                        </p>
                                        <img
                                            src={require("../img/testimonials/testimonials-2.jpg")}
                                            className="testimonial-img"
                                            alt=""
                                        />
                                        <h3>Eero Tarjanne</h3>
                                        <h4>Head of Partnerships and Ecosystem development</h4>
                                    </div>
                                </div>
                                {/* End testimonial item */}
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left" />
                                            Yusuf is a highly skilled and dedicated engineer. He is innovative and creative, with a broad technical knowledge that allows him to make his ideas a reality.
                                            <i className="bx bxs-quote-alt-right quote-icon-right" />
                                        </p>
                                        <img
                                            src={require("../img/testimonials/testimonials-3.jpg")}
                                            className="testimonial-img"
                                            alt=""
                                        />
                                        <h3>Trevor Woollacott</h3>
                                        <h4>Development Manager and Senior R&D Developer</h4>
                                    </div>
                                </div>
                                {/* End testimonial item */}
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left" />
                                            Yusuf was a pleasure to work with, he became more than a colleague but a dear friend. His attention to detail, innovative ideas and passion for his work was an encouragement and motivational force in MTN. Yusuf has a depth of knowledge and the ability to always see a solution, no matter what the problem may be.
                                            His positive attitude, talent and understanding of telecommunications and the internet world makes him an asset to any company.
                                            <i className="bx bxs-quote-alt-right quote-icon-right" />
                                        </p>
                                        <img
                                            src={require("../img/testimonials/testimonials-4.jpg")}
                                            className="testimonial-img"
                                            alt=""
                                        />
                                        <h3>Wouda Du Plessis</h3>
                                        <h4>Mobile Products and Services Developer</h4>
                                    </div>
                                </div>
                                {/* End testimonial item */}
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left" />
                                            Yusuf is bright, innovative, dedicated individual and always has a friendly, positive and willing attitude. A definite bonus to have on the team. He will go far in his career.
                                            <i className="bx bxs-quote-alt-right quote-icon-right" />
                                        </p>
                                        <img
                                            src={require("../img/testimonials/testimonials-5.jpg")}
                                            className="testimonial-img"
                                            alt=""
                                        />
                                        <h3>Kobus Roux</h3>
                                        <h4>AI/ML and automation Specialist</h4>
                                    </div>
                                </div>
                                {/* End testimonial item */}
                            </div>
                            <div className="swiper-pagination" />
                        </div>
                        <div className="owl-carousel testimonials-carousel"></div>
                    </div>
                    {/* End Testimonials  */}
                </section>
                {/* End About Section */}
            </div>
        )
    }
}