import React from 'react';

export default function Footer() {

    return (
        <div>
            <footer className="page_footer">
                <div className="footer_container">
                    <div className="footer_info footer_social_media_links">
                        <a href="https://www.linkedin.com/in/connor-nicholson-907797189" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                        <a href="https://github.com/ConnorNicholson" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" aria-hidden="true"></i></a>
                    </div>
                    <div className="footer_info">
                        <p className="footer_copyright"><i className="fa fa-copyright" aria-hidden="true"></i> 2019</p>
                        <p className="footer_last_updated">Last Updated: 10/10/2019</p>
                    </div>
                    <div className="footer_info footer_contact_info">
                        <p className="footer_email">connorjnicholson1@gmail.com</p>
                    </div>
                </div>
            </footer>

        </div>
    );
};