import React, { Component } from 'react'
const channelId = 'yusufkaka'; // Replace with your channel ID
const from = 155; // First post
const imagesToShow = 9; // Last post

export default class Portfolio extends Component {
    constructor(props) {
        super(props);
        // State of your application
        this.state = {
            from: from,
            imagesToShow: imagesToShow,
            channelId: channelId,
            artloading: true,
            artworks: [],
            error: null,
        };
        this.observer = null;
        this.lastItemRef = React.createRef();
    }

    populateArt = (prevState) => {
        const { from, imagesToShow, channelId } = prevState;
        const portfolioContainer = document.querySelector('.portfolio-container');
        if (this.lastItemRef.current) {
            this.observer.unobserve(this.lastItemRef.current); // Stop observing the last item
        }
        for (let i = from; i > from - imagesToShow; i--) {
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
            this.lastItemRef.current = itemContainer;
        }
        if (this.lastItemRef.current) {
            this.observer.observe(this.lastItemRef.current); // Start observing the new last item
        }
        this.forceUpdate(); 
    };

    handleObserver = (entries) => {
        console.log('handleObserver called');
        const lastEntry = entries[entries.length - 1];
        if (lastEntry.isIntersecting) {
            this.setState(
                (prevState) => ({
                    from: prevState.from - 9,
                }),
                () => {
                    this.populateArt(this.state);
                }
            );
        }
    };

    componentDidMount() {
        this.observer = new IntersectionObserver(this.handleObserver, {
            root: null,
            rootMargin: '0px',
            threshold: 1.0,
        });
        if (this.lastItemRef.current) {
            this.observer.observe(this.lastItemRef.current);
        }
        this.setState({ artloading: false });
        this.populateArt(this.state);
    }

    render() {

        return (

            <div>
                {/* ======= Portfolio Section ======= */}
                <section id="portfolio" className="portfolio">
                    <div className="container">
                        <div className="section-title">
                            <h2>Art</h2>
                            <h3>Curated art and my own pics</h3>
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