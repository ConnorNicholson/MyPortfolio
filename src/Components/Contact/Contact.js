import React from 'react';
import Footer from '../Footer';

export default function Contact() {


    return (
        <div>
            <section className="contact_header">
                <p className="contact_form_title">Contact Form</p>
                <form className="contact_form" name="contact_form" method="POST" data-netlify="true">
                    <input type="hidden" name="form-name" value="contact" />
                    <p>
                        <label>
                            <span className="form_text_name">Name:</span><br />
                            <input className="contact_form_name" type="text" name="name" placeholder="Name..." required />
                        </label>   
                    </p>
                    <p>
                        <label>
                            <span className="form_text_email">Email:</span><br />
                            <input className="contact_form_email" type="email" name="email"  placeholder="Email..." required />
                        </label>
                    </p>
                    <p>
                        <label>
                            <span className="form_text_message">Message:</span><br />
                            <textarea className="contact_form_message" name="message" placeholder="Leave a message..." rows="7" required ></textarea>
                        </label>
                    </p>
                    <p>
                        <button className="contact_form_submit" type="submit">Send</button>
                    </p>
                </form>
            </section>
            <Footer />
        </div>
    );
};