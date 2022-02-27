import React, { Component } from 'react'


export default class Portfolio_Details extends Component {

    render() {
        return (
            <div>
                {/* ======= Portfolio Details ======= */}
                <div id="portfolio-details" className="portfolio-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <h2 className="portfolio-title">
                                    This is an example of portfolio detail
                                </h2>
                                <div className="portfolio-details-slider swiper">
                                    <div className="swiper-wrapper align-items-center">
                                        <div className="swiper-slide">
                                            <img
                                                src="../img/portfolio/portfolio-details-1.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="swiper-slide">
                                            <img
                                                src="../img/portfolio/portfolio-details-2.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="swiper-slide">
                                            <img
                                                src="../img/portfolio/portfolio-details-3.jpg"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="swiper-pagination" />
                                </div>
                            </div>
                            <div className="col-lg-4 portfolio-info">
                                <h3>Project information</h3>
                                <ul>
                                    <li>
                                        <strong>Category</strong>: Web design
                                    </li>
                                    <li>
                                        <strong>Client</strong>: ASU Company
                                    </li>
                                    <li>
                                        <strong>Project date</strong>: 01 March, 2020
                                    </li>
                                    <li>
                                        <strong>Project URL</strong>: <a href="#">www.example.com</a>
                                    </li>
                                </ul>
                                <p>
                                    Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque
                                    inventore commodi labore quia quia. Exercitationem repudiandae
                                    officiis neque suscipit non officia eaque itaque enim. Voluptatem
                                    officia accusantium nesciunt est omnis tempora consectetur
                                    dignissimos. Sequi nulla at esse enim cum deserunt eius.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

