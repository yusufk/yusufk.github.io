import React, { Component } from 'react';

// Curated projects — hand-picked highlights, distinct from the auto-listed
// GitHub repos on the Repositories tab. Card style inspired by tinytooltown.com.
const PROJECTS = [
    {
        name: 'Recipo',
        tagline: 'Recipes, version controlled.',
        description: 'A git-based recipe site for devs who cook. Everything lives in Git — markdown files, PRs for contributions, GitHub OAuth. No database, no CMS.',
        tags: ['react', 'typescript', 'github-api'],
        stack: 'TypeScript',
        image: 'data/projects/recipo.png',
        repo: 'https://github.com/yusufk/recipo',
        demo: 'https://yusuf.kaka.co.za/recipo/',
    },
    {
        name: 'DHA Slot Sniper',
        tagline: 'Never miss a passport booking slot.',
        description: 'Multi-branch poller for the South African DHA booking system with auto-booking and Telegram alerts. CLI plus a web frontend backed by a Cloudflare Worker CORS proxy.',
        tags: ['python', 'cloudflare-worker', 'automation'],
        stack: 'Python',
        image: 'data/projects/dha-slot-sniper.png',
        repo: 'https://github.com/yusufk/dha-slot-sniper',
        demo: 'https://yusuf.kaka.co.za/dha-slot-sniper/',
    },
    {
        name: 'ZoomacIt',
        tagline: 'ZoomIt-style screen zoom for macOS.',
        description: 'A macOS screen zoom and annotation tool. Continued fork after the original was "Sherlocked" by Microsoft. Distributed via Homebrew.',
        tags: ['swift', 'macos', 'homebrew'],
        stack: 'Swift',
        image: 'data/projects/zoomacit.png',
        repo: 'https://github.com/yusufk/ZoomacIt',
        demo: 'https://yusuf.kaka.co.za/ZoomacIt/',
    },
    {
        name: 'Kiro-Claw',
        tagline: 'Telegram ↔ AI agent bridge.',
        description: 'A containerised Python bridge that lets a Telegram bot drive an AI CLI agent, with task scheduling, proactive messaging, and an event bus for smart-home integration.',
        tags: ['python', 'docker', 'telegram'],
        stack: 'Python',
        image: null,
        repo: 'https://github.com/yusufk/kiro-claw',
        demo: null,
    },
    {
        name: 'TourneyPool',
        tagline: 'My gut feeling has a losing record.',
        description: 'An open-source tournament prediction pool — pick winners, score points, climb the leaderboard. Built for the World Cup with React, Vite, and Cloudflare Workers.',
        tags: ['react', 'vite', 'cloudflare-worker'],
        stack: 'TypeScript',
        image: 'data/projects/tourneypool.png',
        repo: 'https://github.com/yusufk/tourneypool',
        demo: 'https://yusuf.kaka.co.za/tourneypool/',
    },
    {
        name: 'Gautrain Journey Planner',
        tagline: 'Smart journey planning for commuters.',
        description: 'A modern journey planner for the Gautrain, with reverse-trip planning and live schedule data. Works offline as a PWA. Built with React on the live Gautrain API.',
        tags: ['react', 'pwa', 'transit'],
        stack: 'JavaScript',
        image: 'data/projects/gautrain-schedule.png',
        repo: 'https://github.com/yusufk/gautrain-schedule',
        demo: 'https://yusuf.kaka.co.za/gautrain-schedule/',
    },
    {
        name: 'Ayoble',
        tagline: 'The word game we all know and love.',
        description: 'A Wordle clone built for the Ayoba messaging platform. React, TypeScript, and Tailwind — guess the word in six tries.',
        tags: ['react', 'typescript', 'game'],
        stack: 'TypeScript',
        image: 'data/projects/ayoble.png',
        repo: 'https://github.com/yusufk/ayoble',
        demo: 'https://yusuf.kaka.co.za/ayoble/',
    },
    {
        name: 'Magic 8-Ball',
        tagline: 'Ask me anything.',
        description: 'A classic Magic 8-Ball fortune teller, reimagined as an Ayoba microapp. Ask a question, shake, and let fate decide.',
        tags: ['javascript', 'game', 'ayoba'],
        stack: 'JavaScript',
        image: 'data/projects/ayoba-8ball.png',
        repo: 'https://github.com/yusufk/ayoba-8ball',
        demo: 'https://yusuf.kaka.co.za/ayoba-8ball/',
    },
    {
        name: 'AI Mirror (Viki)',
        tagline: 'A holographic face that mirrors you.',
        description: 'An experimental holographic face mirror — camera-tracked or keyboard-driven expressions (smile, brow, talk). A playful exploration of real-time face animation in the browser.',
        tags: ['javascript', 'webgl', 'face-tracking'],
        stack: 'JavaScript',
        image: 'data/projects/ai_mirror.png',
        repo: 'https://github.com/yusufk/ai_mirror',
        demo: 'https://yusuf.kaka.co.za/ai_mirror/',
    },
    {
        name: 'Furnisher',
        tagline: 'Lay out a 3D room with AI.',
        description: 'A proof-of-concept front-end for an Azure OpenAI service that arranges objects in a 3D room. Describe furniture and watch it place them in a live 3D scene.',
        tags: ['azure-openai', '3d', 'poc'],
        stack: 'JavaScript',
        image: 'data/projects/furnish_ui.png',
        repo: 'https://github.com/yusufk/furnish_ui',
        demo: 'https://yusuf.kaka.co.za/furnish_ui/',
    },
    {
        name: 'Buy Me a Coffee (Eth)',
        tagline: 'Soliciting coffee bribes, on-chain.',
        description: 'A simple page for accepting Ethereum tips via MetaMask or a QR code. A tiny experiment in web3 wallet integration.',
        tags: ['ethereum', 'metamask', 'web3'],
        stack: 'JavaScript',
        image: 'data/projects/eth.png',
        repo: 'https://github.com/yusufk/eth',
        demo: 'https://eth.yusufk.co.za/',
    },
];

export default class Projects extends Component {
    render() {
        return (
            <section id="projects" className="repos section-show">
                <div className="container">
                    <div className="section-title">
                        <h2>Projects</h2>
                        <p>A few things I've built for fun and function. For everything else, see the Repositories tab.</p>
                    </div>
                    <div className="row">
                        {PROJECTS.map((project) => (
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" key={project.name}>
                                <div className="icon-box">
                                    {project.image ? (
                                        <a href={project.demo || project.repo} target="_blank" rel="noopener noreferrer" className="project-thumb">
                                            <img src={project.image} alt={`${project.name} screenshot`} loading="lazy" />
                                        </a>
                                    ) : (
                                        <div className="project-thumb project-thumb-placeholder">
                                            <i className="bx bx-cube-alt" />
                                        </div>
                                    )}
                                    <h4>{project.name}</h4>
                                    {project.tagline && <p className="project-tagline"><em>{project.tagline}</em></p>}
                                    <p className="card-text">{project.description}</p>
                                    <div className="project-tags">
                                        {project.stack && <span className="project-stack">{project.stack}</span>}
                                        {project.tags.map((tag) => (
                                            <span className="project-tag" key={tag}>{tag}</span>
                                        ))}
                                    </div>
                                    <div className="project-links">
                                        {project.repo && (
                                            <a href={project.repo} target="_blank" rel="noopener noreferrer">
                                                <i className="bx bxl-github" /> Code
                                            </a>
                                        )}
                                        {project.demo && (
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                                <i className="bx bx-link-external" /> Live
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}
