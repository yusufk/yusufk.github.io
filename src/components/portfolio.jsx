import React, { Component } from 'react'
import axios from 'axios';

export default class Portfolio extends Component {
    constructor(props) {
        super(props);
        // State of your application
        this.state = {
            artloading: true,
            artworks: [],
            error: null,
        };
    }

    // Fetch your articles immediately after the component is mounted
    componentDidMount = async () => {
        const token = process.env.REACT_APP_CMS_TOKEN;
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        try {
            const response = await axios.get('https://cms.kaka.co.za/api/artworks?populate=*', config);
            this.setState({ artworks: response.data, artloading: false });
        } catch (error) {
            this.setState({ error });
        }
    };

    render() {
        if (!this.state.artloading) {
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
                                        <li data-filter=".filter-photo">Photos</li>
                                        <li data-filter=".filter-art">Art</li>
                                        <li data-filter=".filter-nft">NFT</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="row portfolio-container">
                                {this.state.artworks.data.map((artwork, index) => {
                                    var filterType = "col-lg-4 col-md-6 portfolio-item";
                                    var imgURL = artwork.attributes.MediaURL;
                                    if (artwork.attributes.categories.data.length > 0) {
                                        filterType = "col-lg-4 col-md-6 portfolio-item filter-" + artwork.attributes.categories.data[0].attributes.Category.toLowerCase();
                                    } 
                                    if (artwork.attributes.Media.data !== null) {
                                        imgURL = artwork.attributes.Media.data.attributes.url;
                                    }
                                    return (
                                        <div className={filterType}  key={artwork.id}>
                                            <div className="portfolio-wrap">
                                                <img src={imgURL} className="img-fluid" alt={artwork.attributes.Title} />
                                                <div className="portfolio-info">
                                                    <h4>{artwork.attributes.Title}</h4>
                                                    <p>{artwork.attributes.Description}</p>
                                                    <div className="portfolio-links">
                                                        <a href={artwork.attributes.URL}>
                                                    <i className="bx bx-link" />
                                                </a>
                                            </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                    {/* End Portfolio Section */}
                </div>
            )
        }
        return <div>Loading...</div>;
    }
}