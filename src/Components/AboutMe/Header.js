import React from 'react';

export default function Header() {
    return (
        <div>
            <header className="about_me_header">
                <div className="about_me_container">
                    <h1 className="about_me_name">Hi, I'm Connor.</h1>
                    <p className="about_me_text">I am a Software Developer</p>
                </div>
                <div className="about_me_link">
                    <p>Explore below</p>
                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                </div>
            </header>
        </div>
    )
}