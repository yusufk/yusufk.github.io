import React, { Component } from 'react'
//import { Waypoint } from 'react-waypoint';

export default class About extends Component {

    render() {
        return (
            <div>
                {/* ======= About Section ======= */}
                <section id="about" className="about">
                    {/* ======= About Me ======= */}
                    <div className="about-me container">
                        <div className="section-title">
                            <h2>About</h2>
                            <p>Learn more about me</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-4" data-aos="fade-right">
                                <img src={require("../img/me.jpg")} className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                                <h3>Specialist: Digital | Telco | Messaging </h3>
                                <p className="fst-italic">
                                    More than 20 years of experience in the technology, including software devlopment, digital channels, telco and messaging.
                                </p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul>
                                            <li>
                                                <i className="bi bi-chevron-right" />{" "}
                                                <strong>Website:</strong> <span>yusuf.kaka.co.za</span>
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
                                                <span>43</span>
                                            </li>
                                            <li>
                                                <i className="bi bi-chevron-right" /> <strong>Degree:</strong>{" "}
                                                <span>Engineering</span>
                                            </li>
                                            <li>
                                                <i className="bi bi-chevron-right" />{" "}
                                                <strong>Email:</strong> <span>yusufk-at-gmail.com</span>
                                            </li>
                                            <li>
                                                <i className="bi bi-chevron-right" />{" "}
                                                <strong>Freelance:</strong> <span>Available</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <p>
                                    Officiis eligendi itaque labore et dolorum mollitia officiis optio
                                    vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
                                    incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime
                                    officiis quidem quia. Sed et consectetur qui quia repellendus itaque
                                    neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui
                                    repellendus omnis culpa magni laudantium dolores.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* End About Me */}
                    {/* ======= Counts ======= */}
                    <div className="counts container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="count-box">
                                    <i className="bi bi-emoji-smile" />
                                    <span
                                        data-purecounter-start={0}
                                        data-purecounter-end={232}
                                        data-purecounter-duration={1}
                                        className="purecounter"
                                    />
                                    <p>Happy Clients</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                                <div className="count-box">
                                    <i className="bi bi-journal-richtext" />
                                    <span
                                        data-purecounter-start={0}
                                        data-purecounter-end={521}
                                        data-purecounter-duration={1}
                                        className="purecounter"
                                    />
                                    <p>Projects</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                                <div className="count-box">
                                    <i className="bi bi-headset" />
                                    <span
                                        data-purecounter-start={0}
                                        data-purecounter-end={1463}
                                        data-purecounter-duration={1}
                                        className="purecounter"
                                    />
                                    <p>Hours Of Support</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                                <div className="count-box">
                                    <i className="bi bi-award" />
                                    <span
                                        data-purecounter-start={0}
                                        data-purecounter-end={24}
                                        data-purecounter-duration={1}
                                        className="purecounter"
                                    />
                                    <p>Awards</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Counts */}
                    {/* ======= Skills  ======= */}
                    <div className="skills container">
                        <div className="section-title">
                            <h2>Skills</h2>
                        </div>
                        <div className="row skills-content">
                            <div className="col-lg-6">
                                <div className="progress">
                                    <span className="skill">
                                        HTML <i className="val">100%</i>
                                    </span>
                                    <div className="progress-bar-wrap">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            aria-valuenow={100}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                            style={{"width" : "100%"}}
                                        />
                                    </div>       
                                </div>
                                <div className="progress">
                                    <span className="skill">
                                        CSS <i className="val">90%</i>
                                    </span>
                                    <div className="progress-bar-wrap">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            aria-valuenow={90}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                            style={{"width" : "90%"}}
                                        />
                                    </div>
                                </div>
                                <div className="progress">
                                    <span className="skill">
                                        JavaScript <i className="val">75%</i>
                                    </span>
                                    <div className="progress-bar-wrap">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            aria-valuenow={75}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                            style={{"width" : "75%"}}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="progress">
                                    <span className="skill">
                                        PHP <i className="val">80%</i>
                                    </span>
                                    <div className="progress-bar-wrap">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            aria-valuenow={80}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                            style={{"width" : "80%"}}
                                        />
                                    </div>
                                </div>
                                <div className="progress">
                                    <span className="skill">
                                        WordPress/CMS <i className="val">90%</i>
                                    </span>
                                    <div className="progress-bar-wrap">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            aria-valuenow={90}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                            style={{"width" : "90%"}}
                                        />
                                    </div>
                                </div>
                                <div className="progress">
                                    <span className="skill">
                                        Photoshop <i className="val">55%</i>
                                    </span>
                                    <div className="progress-bar-wrap">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            aria-valuenow={55}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                            style={{"width" : "55%"}}
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
                                    <i className="ri-store-line" style={{ color: "#ffbb2c" }} />
                                    <h3>Lorem Ipsum</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                                <div className="icon-box">
                                    <i className="ri-bar-chart-box-line" style={{ color: "#5578ff" }} />
                                    <h3>Dolor Sitema</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                                <div className="icon-box">
                                    <i className="ri-calendar-todo-line" style={{ color: "#e80368" }} />
                                    <h3>Sed perspiciatis</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                                <div className="icon-box">
                                    <i className="ri-paint-brush-line" style={{ color: "#e361ff" }} />
                                    <h3>Magni Dolores</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <i className="ri-database-2-line" style={{ color: "#47aeff" }} />
                                    <h3>Nemo Enim</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <i className="ri-gradienter-line" style={{ color: "#ffa76e" }} />
                                    <h3>Eiusmod Tempor</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <i className="ri-file-list-3-line" style={{ color: "#11dbcf" }} />
                                    <h3>Midela Teren</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <i className="ri-price-tag-2-line" style={{ color: "#4233ff" }} />
                                    <h3>Pira Neve</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <i className="ri-anchor-line" style={{ color: "#b2904f" }} />
                                    <h3>Dirada Pack</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <i className="ri-disc-line" style={{ color: "#b20969" }} />
                                    <h3>Moton Ideal</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <i className="ri-base-station-line" style={{ color: "#ff5828" }} />
                                    <h3>Verdo Park</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <i className="ri-fingerprint-line" style={{ color: "#29cc61" }} />
                                    <h3>Flavor Nivelanda</h3>
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
                                            Proin iaculis purus consequat sem cure digni ssim donec
                                            porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                                            eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                            <i className="bx bxs-quote-alt-right quote-icon-right" />
                                        </p>
                                        <img
                                            src={require("../img/testimonials/testimonials-1.jpg")}
                                            className="testimonial-img"
                                            alt=""
                                        />
                                        <h3>Saul Goodman</h3>
                                        <h4>Ceo &amp; Founder</h4>
                                    </div>
                                </div>
                                {/* End testimonial item */}
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left" />
                                            Export tempor illum tamen malis malis eram quae irure esse
                                            labore quem cillum quid cillum eram malis quorum velit fore eram
                                            velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                            <i className="bx bxs-quote-alt-right quote-icon-right" />
                                        </p>
                                        <img
                                            src={require("../img/testimonials/testimonials-2.jpg")}
                                            className="testimonial-img"
                                            alt=""
                                        />
                                        <h3>Sara Wilsson</h3>
                                        <h4>Designer</h4>
                                    </div>
                                </div>
                                {/* End testimonial item */}
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left" />
                                            Enim nisi quem export duis labore cillum quae magna enim sint
                                            quorum nulla quem veniam duis minim tempor labore quem eram duis
                                            noster aute amet eram fore quis sint minim.
                                            <i className="bx bxs-quote-alt-right quote-icon-right" />
                                        </p>
                                        <img
                                            src={require("../img/testimonials/testimonials-3.jpg")}
                                            className="testimonial-img"
                                            alt=""
                                        />
                                        <h3>Jena Karlis</h3>
                                        <h4>Store Owner</h4>
                                    </div>
                                </div>
                                {/* End testimonial item */}
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left" />
                                            Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                                            multos export minim fugiat minim velit minim dolor enim duis
                                            veniam ipsum anim magna sunt elit fore quem dolore labore illum
                                            veniam.
                                            <i className="bx bxs-quote-alt-right quote-icon-right" />
                                        </p>
                                        <img
                                            src={require("../img/testimonials/testimonials-4.jpg")}
                                            className="testimonial-img"
                                            alt=""
                                        />
                                        <h3>Matt Brandon</h3>
                                        <h4>Freelancer</h4>
                                    </div>
                                </div>
                                {/* End testimonial item */}
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left" />
                                            Quis quorum aliqua sint quem legam fore sunt eram irure aliqua
                                            veniam tempor noster veniam enim culpa labore duis sunt culpa
                                            nulla illum cillum fugiat legam esse veniam culpa fore nisi
                                            cillum quid.
                                            <i className="bx bxs-quote-alt-right quote-icon-right" />
                                        </p>
                                        <img
                                            src={require("../img/testimonials/testimonials-5.jpg")}
                                            className="testimonial-img"
                                            alt=""
                                        />
                                        <h3>John Larson</h3>
                                        <h4>Entrepreneur</h4>
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