# My Learning Ground and Source Code for [https://yusuf.kaka.co.za](https://yusuf.kaka.co.za)

Personal websites have always been a good opportunity for me to learn new technologies and frameworks. My first encounter with HTML was in the late 90's with my site on Angelfire.com, which was then replaced by a blog on Blogger.com. I then moved to WordPress for a while, and at some point experimented with a slew of different frameworks.

This latest iteration was inspired by a need to get familiar with Node.js and newer JavaScript frameworks like React and Next.js. I also wanted to test the limits of static sites while experimenting with hosting options on Heroku, Digital Ocean, Azure, and AWS. In the end, I found it perfectly acceptable to host my site on GitHub Pages, with the source code on GitHub and the DNS managed by Cloudflare.

## Table of Contents
- [My Learning Ground and Source Code for https://yusuf.kaka.co.za](#my-learning-ground-and-source-code-for-httpsyusufkakacoza)
  - [Table of Contents](#table-of-contents)
  - [Stack](#stack)
  - [Development Requirements](#development-requirements)
  - [Installation](#installation)
  - [Development Commands](#development-commands)
  - [Usage](#usage)
  - [Features](#features)
  - [Changes](#changes)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact](#contact)

## Stack
- **Frontend Framework**
  - React 17
  - Bootstrap 5
  - Bootstrap Icons
  - Boxicons
  - Remixicon
  - GLightbox

- **Performance & Loading**
  - React Lazyload
  - React Waypoint
  - Isotope Layout
  - Swiper

- **Content & Data**
  - React Markdown
  - Rehype Raw (HTML in markdown)
  - Axios (HTTP client)

- **Analytics & Tracking**
  - React GA (Google Analytics)

- **Development & Build**
  - React Scripts (Create React App)
  - Webpack
  - Babel
  - Jest (Testing)

- **Infrastructure**
  - GitHub Pages (Hosting)
  - Cloudflare (DNS & CDN)

## Development Requirements
- Node.js v14 or higher
- npm v6 or higher
- Git

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/yusufk/yusufk.github.io.git
    ```
2. Navigate to the project directory:
    ```sh
    cd yusufk.github.io
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Development Commands
```sh
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

## Usage
To use the project, follow these steps:

1. Open your browser and navigate to `http://localhost:3000`.
2. Explore the website and its features.

## Features
- Responsive design
- Markdown-based articles
- Lazy loading of images and content
- Deployment via GitHub Actions

## Changes
- 2024-12-31: Removed all dependency on Azure, moving markdown files for articles to GitHub Pages as well
- 2023-10-26: Load portfolio items from Telegram channel
- 2023-10-23: Moved articles to Azure blob
- 2023-10-18: Dynamically fetch github repos
- 2023-10-16: Added an Article list
- 2022-01-31: Added resume, repos and gallery
- 2022-01-28: Deployed to github pages
- 2022-01-27: Initialize project using Create React App

## Contributing
Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
    ```sh
    git checkout -b feature/your-feature-name
    ```
3. Make your changes and commit them:
    ```sh
    git commit -m "Add some feature"
    ```
4. Push to the branch:
    ```sh
    git push origin feature/your-feature-name
    ```
5. Open a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For any inquiries, please contact me at [yusufk@gmail.com](mailto:yusufk@gmail.com).