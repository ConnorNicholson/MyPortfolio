import React from 'react';

export default function Main() {

    return (
        <div>
            <main className="about_me_main">
                <div className="flex-container">
                    <div className="box">
                        <p className="box_title">About Me</p>
                        <img className="box_img" src="https://res.cloudinary.com/connorn/image/upload/v1570716569/Portfolio%20Images/picture_of_me_rfrkhs.jpg" alt="Connor Nicholson" />
                        <p className="box_info">My name is Connor Nicholson. I am a Software Developer who is passionate about coding. I am always eager to take on a new challenge and learn new concepts.</p>
                    </div>
                    <div className="box">
                        <p className="box_title">Portfolio</p>
                        <img className="box_img" src="https://res.cloudinary.com/connorn/image/upload/v1570567392/Portfolio%20Images/code_image_sbc2ig.jpg" alt="Multiple lines of a coding language on a computer screen" />
                        <p className="box_info">View my Portfolio to see my completed projects. This also displays my unique technological skillset.</p>
                    </div>
                    <div className="box">
                        <p className="box_title">Contact Me</p>
                        <img className="box_img" src="https://res.cloudinary.com/connorn/image/upload/v1570574477/Portfolio%20Images/stack_of_envelopes_jukxgc.jpg" alt="Multiple stacks of empty envelopes" />
                        <p className="box_info">Would you like to leave a message? Please use the Contact Me page to do so.</p>
                    </div>
                </div>
            </main>
        </div>
    )
};