import React, { Component } from 'react'


export default class Portfolio extends Component {

    render() {
        return (
            <div>
                {/* ======= Portfolio Section ======= */}
                <section id="portfolio" className="portfolio">
                    <div className="container">
                        <div className="section-title">
                            <h2>Gallery</h2>
                            <p>My portfolio</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 d-flex justify-content-center">
                                <ul id="portfolio-flters">
                                    <li data-filter="*" className="filter-active">
                                        All
                                    </li>
                                    <li data-filter=".filter-app">Photos</li>
                                    <li data-filter=".filter-card">Art</li>
                                    <li data-filter=".filter-web">NFT</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row portfolio-container">
                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img
                                        src={require("../img/portfolio/portfolio-1.jpg")}
                                        className="img-fluid"
                                        alt=""
                                    />
                                    <div className="portfolio-info">
                                        <h4>The Bee</h4>
                                        <p>﷽ </p>
                                        <p>Then eat from all the fruits and follow the ways of your Lord laid down [for you]. There emerges from their bellies a drink, varying in colors, in which there is healing for people. Indeed in that is a sign for a people who give thought.</p>
                                        <p>Surah An-Nahl [16:69]</p>
                                        <div className="portfolio-links">
                                            <a href="https://quran.com/16/69"><i className="bx bx-link" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img
                                        src={require("../img/portfolio/portfolio-2.jpg")}
                                        className="img-fluid"
                                        alt=""
                                    />
                                    <div className="portfolio-info">
                                        <h4>The Rapture</h4>
                                        <p>﷽ </p>
                                        <p>When the sky ruptures,</p>
                                        <p>And when the stars fall, scattering...</p>
                                        <p>Surah Al-Infitar [82:1]</p>
                                        <div className="portfolio-links">
                                            <a href="https://quran.com/82/1/">
                                                <i className="bx bx-link" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img
                                        src={require("../img/portfolio/portfolio-3.jpg")}
                                        className="img-fluid"
                                        alt=""
                                    />
                                    <div className="portfolio-info">
                                        <h4>Parents</h4>
                                        <p>﷽ </p>
                                        <p>For your Lord has decreed that you worship none but Him. And honour your parents. If one or both of them reach old age in your care, never say to them ˹even˺ ‘ugh,’ nor yell at them.</p>
                                        <p>Rather, address them respectfully.</p>
                                        <p>Surah An-Isra [17:23]</p>
                                        <div className="portfolio-links">
                                            <a href="https://quran.com/17/23/">
                                                <i className="bx bx-link" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                    <img
                                        src="https://lh3.googleusercontent.com/qefGyHru463Cdh3Jsob8UrA5oJIhLd5z9yUowMTgHglZyqjnLUqQiNk7POPiqiqjn3jGWnFU2YRfpJyXhT7tHoDh0P6nhiw1dBxzyA=s0"
                                        className="img-fluid"
                                        alt=""
                                    />
                                    <div className="portfolio-info">
                                        <h4>Bobot Starsky</h4>
                                        <p>NFT</p>
                                        <div className="portfolio-links">
                                            <a href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/96575051771539935017186713945733009438682784717990966492482054549980265316353/">
                                                <i className="bx bx-link" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                    <img
                                        src="https://lh3.googleusercontent.com/DsSMIDNmkMBTxTpD1ZD2Qtu_0Nxi5VBVUi7VzFwwcGXAXMHFzlGPFhuHQ81JzexfBsspF7IC0nDTFTYOEwiMxGSG6BLPjKTMdUBHfA=s0"
                                        className="img-fluid"
                                        alt=""
                                    />
                                    <div className="portfolio-info">
                                        <h4>Bobot pink googly</h4>
                                        <div className="portfolio-links">
                                            <a href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/96575051771539935017186713945733009438682784717990966492482054554378311827457/">
                                                <i className="bx bx-link" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                    <img
                                        src="https://lh3.googleusercontent.com/ISYww5WlsHVxKwntWk6vqykLQ7BzURQvXGFH8agkYRmm1jsbOsYwqaJMldIVFnP_cw6tsDxblQ1ybQeWzSHwKxuNJBWF6kDoz5bSww=s0"
                                        className="img-fluid"
                                        alt=""
                                    />
                                    <div className="portfolio-info">
                                        <h4>Bobot neon-cheese-head</h4>
                                        <div className="portfolio-links">
                                            <a href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/96575051771539935017186713945733009438682784717990966492482054555477823455233/">
                                                <i className="bx bx-link" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div className="portfolio-wrap">
                                    <img
                                        src="https://lh3.googleusercontent.com/FsAwmNMdAjhCAjKBsZEwWveRMrQ-3FC8ZA0XSrBZ7AN0uSDP_gWf2qr24NA-UsCcObxdvmC8icVhvnfHff44HvzipfMwBFDo9MAP=s0"
                                        className="img-fluid"
                                        alt=""
                                    />
                                    <div className="portfolio-info">
                                        <h4>Fire and Water</h4>
                                        <div className="portfolio-links">
                                            <a href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/96575051771539935017186713945733009438682784717990966492482054547781242060801/">
                                                <i className="bx bx-link" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Portfolio Section */}
            </div>
        )
    }
}