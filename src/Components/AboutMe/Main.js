import React from 'react';
import { Route, Link } from 'react-router-dom';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Footer from '../Footer';

export default function Main() {

    return (
        <div id="info-section">
            <main className="about_me_main">
                <div className="flex-container">
                    <div className="box">
                        <p className="box_title">About Me</p>
                        <img className="box_img" src="https://res.cloudinary.com/connorn/image/upload/v1570716569/Portfolio%20Images/picture_of_me_rfrkhs.jpg" alt="Connor Nicholson" />
                        <p className="box_info">My name is Connor Nicholson. I am a Software Developer who is passionate about coding.</p>
                    </div>
                    <div className="box">
                        <p className="box_title">Portfolio</p>
                        <img className="box_img" src="https://res.cloudinary.com/connorn/image/upload/v1570567392/Portfolio%20Images/code_image_sbc2ig.jpg" alt="Multiple lines of a coding language on a computer screen" />
                        <p className="box_info">View my <Link className="link_to_portfolio" to="portfolio">Portfolio</Link> to see my completed projects.</p>
                    </div>
                    <div className="box">
                        <p className="box_title">Contact Me</p>
                        <img className="box_img" src="https://res.cloudinary.com/connorn/image/upload/v1570574477/Portfolio%20Images/stack_of_envelopes_jukxgc.jpg" alt="Multiple stacks of empty envelopes" />
                        <p className="box_info">Would you like to get in touch? See the <Link className="link_to_contact" to="contact">Contact Me</Link> page for further details.</p>
                    </div>
                </div>
                <Footer />
            </main>
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />

        </div>
    )
};