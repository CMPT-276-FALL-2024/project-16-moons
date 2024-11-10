import React from 'react';
import "../index.css";

const AboutTheProject = () => {
    return (
        <section className="about" id="about">
            <div className="horizontal-flex-container">
                <div className="vertical-flex-container">
                <h1 className="main-header">About Dish-It</h1>
                <p className="text">
                    Dish-It is a project developed by a team of four students from Simon
                    Fraser University. This project was created as a part of the CMPT
                    276 Final Project.
                </p>
                <br />
                <br />
                <p className="text">
                    Our design hopes to help individuals looking to eat healthier by
                    understanding what goes into their food, explore new cuisines or
                    cooking techniques, and simplify meal planning.
                </p>
                <br /><br /><br />
                <p className="text">
                    Special thanks to <strong>Spoonacular</strong> and
                    <strong>Edamam </strong>for providing access to their APIs for this
                    project.
                </p>
                </div>
                <img
                src="/images/about-project.png"
                className="about-image"
                alt="a collage of different types of foods."
                />
                <div className="vertical-flex-container">
                <h1 className="sub-header">Meet The Team</h1>
                <div className="horizontal-flex-container">
                    <div className="vertical-flex-container">
                    <div className="photo-name">
                        <img src="/images/faceless.jpg" className="face-photo" alt="Gabriel Bello"/>
                        <p>Gabriel Bello</p>
                    </div>
                    </div>
                    <div className="vertical-flex-container">
                    <div className="photo-name">
                        <img src="/images/faceless.jpg" className="face-photo" alt="Tyler Ho" />
                        <p>Tyler Ho</p>
                    </div>
                    </div>
                </div>
                <div className="horizontal-flex-container">
                    <div className="vertical-flex-container">
                    <div className="photo-name">
                        <img src="/images/faceless.jpg" className="face-photo" alt="Kevin Tan" />
                        <p>Kevin Tan</p>
                    </div>
                    </div>
                    <div className="vertical-flex-container">
                    <div className="photo-name">
                        <img src="/images/faceless.jpg" className="face-photo" alt="Quang Anh Pham"/>
                        <p>Quang Anh Pham</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default AboutTheProject;