import React, { Component } from 'react'
const channelId = 'yusufkaka'; // Replace with your channel ID
const from = 166; // First post
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

    getSettings = () => {
        // Get the ID of the last message in your channel from the JSON settings file in the local data directory
        fetch('/data/settings.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                const lastMessageId = data.lastMessageId;
                this.setState({ from: lastMessageId }); // Set the from state to the ID of the last message
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                this.setState({ error });
            });
    };

    populateArt = (prevState) => {
        const { from, imagesToShow, channelId } = prevState;
        const portfolioContainer = document.querySelector('.portfolio-container');
        if (this.lastItemRef.current) {
            this.observer.unobserve(this.lastItemRef.current); // Stop observing the last item
        }
        for (let i = from; ((i > (from - imagesToShow)) && i > 1); i--) {
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
        // Set the container's height
        portfolioContainer.style.height = `100%`; 
        if (this.lastItemRef.current) {
            this.observer.observe(this.lastItemRef.current); // Start observing the new last item
        }
        this.forceUpdate();
    };

    handleObserver = (entries) => {
        const lastEntry = entries[entries.length - 1];
        if (lastEntry.isIntersecting) {
            this.setState(
                (prevState) => ({
                    from: prevState.from - imagesToShow,
                }),
                () => {
                    this.populateArt(this.state);
                }
            );
        }
    };

    componentDidMount() {
        this.getSettings();
        this.observer = new IntersectionObserver(this.handleObserver, {
            root: null,
            rootMargin: '0px',
            threshold: 1.0,
        });
        if (this.lastItemRef.current) {
            this.observer.observe(this.lastItemRef.current);
        }
        this.setState({ artloading: false });
        setTimeout(() => { // Use setTimeout to delay the populateArt function call
            this.populateArt(this.state);
        }, 1000); // Delay the function call by 1 second (adjust as needed)

        // Suppress ResizeObserver error
        const resizeObserverErrDiv = document.createElement('div');
        resizeObserverErrDiv.id = 'resize-observer-error';
        document.body.appendChild(resizeObserverErrDiv);
        const resizeObserverErrStyle = document.createElement('style');
        resizeObserverErrStyle.innerHTML = `
        #resize-observer-error {
            display: none;
        }
    `;
        document.head.appendChild(resizeObserverErrStyle);
    }

    render() {

        return (

            <div>
                {/* ======= Portfolio Section ======= */}
                <section id="portfolio" className="portfolio">
                    <div className="container">
                        <div className="section-title">
                            <h2>Art</h2>
                            <h3>Curated art and photos</h3>
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