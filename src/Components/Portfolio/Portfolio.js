import React from 'react';
import Footer from '../Footer';

export default function Portfolio() {
    return (
        <div>
            <section className="portfolio_header">
                <div className="portfolio_flex_container">
                    <div className="portfolio_box">
                        {/* target="_blank" has a vulnerability. Use rel="noopener noreferrer" to prevent phishing attacks / browser hijacking */}
                        <a className="project_link" href="https://codepen.io/ConnorN/project/full/XJbENa" target="_blank" rel="noopener noreferrer">
                            <div className="html_project">
                                <img className="project_logo" src="https://res.cloudinary.com/connorn/image/upload/v1575904333/Portfolio%20Images/html_logo_hh2uym.png" alt="project_logo" />
                            </div>
                        </a>
                        <span className="project_text">Gateway Travel Site</span>
                    </div>
                    {/* <div className="portfolio_box">
                        <a className="project_link" href="https://github.com/ConnorNicholson/MySQL-Cars-Database" target="_blank" rel="noopener noreferrer">
                            <div className="mysql_project">
                                <img className="mysql_logo" src="https://res.cloudinary.com/connorn/image/upload/v1575903509/Portfolio%20Images/mysql_dolphin_logo_ctzoip.png" alt="project_logo" />
                            </div>
                        </a>
                    </div> */}
                    <div className="portfolio_box">
                        <a className="project_link" href="https://github.com/ConnorNicholson/NodeJS-Employee-Endpoints" target="_blank" rel="noopener noreferrer">
                            <div className="nodeJS_project">
                                <img className="project_logo" src="https://res.cloudinary.com/connorn/image/upload/v1575900573/Portfolio%20Images/nodejs_logo_tepdl0.svg" alt="project_logo" />
                            </div>
                        </a>
                    </div>
                    <div className="portfolio_box">
                        <a className="project_link" href="https://cjn-portfolio.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <div className="react_project">
                                <img className="project_logo react_logo" src="https://res.cloudinary.com/connorn/image/upload/v1575901647/Portfolio%20Images/react_logo_mzolsv.png" alt="project_logo" />
                            </div>
                        </a>
                    </div>
                    <div className="portfolio_box">
                        <a className="project_link" href="https://github.com/Code2Hire/submit-weeklychallenges-r2h-2019-ConnorNicholson/blob/master/C%23Challenges/VeryHard/Program.cs" target="_blank" rel="noopener noreferrer">
                            <div className="csharp_project">
                                <img className="project_logo" src="https://res.cloudinary.com/connorn/image/upload/v1575993308/Portfolio%20Images/csharp_logo_crz6i7.png" alt="project logo" />
                            </div>
                        </a>
                    </div>
                    <div className="portfolio_box">
                        <a className="project_link" href="https://react-proj6-pwa.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <div className="pwa_project">
                                <img className="project_logo" src="https://res.cloudinary.com/connorn/image/upload/v1575904210/Portfolio%20Images/pwa_logo_nyecba.png" alt="project_logo" />
                            </div>
                        </a>
                    </div>
                </div>
                <Footer />
            </section>
        </div>
    );
};