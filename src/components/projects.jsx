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
        repo: 'https://github.com/yusufk/recipo',
        demo: 'https://yusuf.kaka.co.za/recipo/',
    },
    {
        name: 'DHA Slot Sniper',
        tagline: 'Never miss a passport booking slot.',
        description: 'Multi-branch poller for the South African DHA booking system with auto-booking and Telegram alerts. CLI plus a web frontend backed by a Cloudflare Worker CORS proxy.',
        tags: ['python', 'cloudflare-worker', 'automation'],
        stack: 'Python',
        repo: 'https://github.com/yusufk/dha-slot-sniper',
        demo: 'https://yusuf.kaka.co.za/dha-slot-sniper/',
    },
    {
        name: 'ZoomacIt',
        tagline: 'ZoomIt-style screen zoom for macOS.',
        description: 'A macOS screen zoom and annotation tool. Continued fork after the original was "Sherlocked" by Microsoft. Distributed via Homebrew.',
        tags: ['swift', 'macos', 'homebrew'],
        stack: 'Swift',
        repo: 'https://github.com/yusufk/ZoomacIt',
        demo: 'https://yusuf.kaka.co.za/ZoomacIt/',
    },
    {
        name: 'Kiro-Claw',
        tagline: 'Telegram ↔ AI agent bridge.',
        description: 'A containerised Python bridge that lets a Telegram bot drive an AI CLI agent, with task scheduling, proactive messaging, and an event bus for smart-home integration.',
        tags: ['python', 'docker', 'telegram'],
        stack: 'Python',
        repo: 'https://github.com/yusufk/kiro-claw',
        demo: null,
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
                                    <div className="icon">
                                        <i className="bx bx-cube-alt" />
                                    </div>
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
