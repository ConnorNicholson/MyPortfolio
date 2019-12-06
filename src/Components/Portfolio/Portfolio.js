import React from 'react';
import Footer from '../Footer';

export default function Portfolio() {
    return (
        <div>
            <section className="portfolio_header">
                <div className="portfolio_flex_container">
                    <div className="portfolio_box">
                        <a className="project_link" href="https://github.com/ConnorNicholson/JS-Calculator" target="_blank" rel="noopener noreferrer">
                            <div className="javascript_project">
                                <p className="language_icon">JS</p>
                                <p className="project_name">Calculator</p>
                            </div>
                        </a>
                    </div>
                    <div className="portfolio_box">
                        <a className="project_link" href="https://github.com/ConnorNicholson/NodeJS-Employee-Endpoints" target="_blank" rel="noopener noreferrer">
                            <div className="nodeJS_project">
                                <p className="language_icon">NodeJS</p>
                                <p className="project_name">Employee Endpoints</p>
                            </div>
                        </a>
                    </div>
                    <div className="portfolio_box">
                        <a className="project_link" href="https://github.com/ConnorNicholson/React-State-and-Components" target="_blank" rel="noopener noreferrer">
                            <div className="react_project">
                                <p className="language_icon">React</p>
                                <p className="project_name">State and Components</p>
                            </div>
                        </a>
                    </div>
                    <div className="portfolio_box">
                        <a className="project_link" href="https://github.com/ConnorNicholson/MySQL-Cars-Database" target="_blank" rel="noopener noreferrer">
                            <div className="mysql_project">
                                <p className="language_icon">MySQL</p>
                                <p className="project_name">Cars Database</p>
                            </div>
                        </a>
                    </div>
                </div>
                <Footer />
            </section>
        </div>
    );
};