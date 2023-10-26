import React, { Component } from 'react'
const channelId = 'yusufkaka'; // Replace with your channel ID
const from = 150; // First post
const to = 140; // Last post

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

    componentDidMount() {
        const portfolioContainer = document.querySelector('.portfolio-container');
        for (let i = from; i > to; i--) {
            const script = document.createElement('script');
            script.src = 'https://telegram.org/js/telegram-widget.js?22';
            script.async = true;
            script.setAttribute('data-telegram-post', `${channelId}/${i}`);
            script.setAttribute('data-width', '100%');
            script.setAttribute('data-color', '343638');
            script.setAttribute('data-dark', '1');
            script.setAttribute('data-dark-color', 'FFFFFF');
            const itemContainer = document.createElement('div');
            itemContainer.appendChild(script);
            itemContainer.className = 'col-lg-4 col-md-6 portfolio-item filter-app';
            itemContainer.id = `portfolio-item-${i}`;
            portfolioContainer.appendChild(itemContainer);
        }
        this.setState({ artloading: false });
    }

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
                        <div id="portfolio-container" className="row portfolio-container">
                        </div>
                    </div>
                </section>
                {/* End Portfolio Section */}
            </div>
        )
    }
}