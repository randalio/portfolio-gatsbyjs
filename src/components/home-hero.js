import * as React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import '../styles/animate.min.css';



function HomeHero({ description, title, children }) {
    return(
        <>
        
        <section className="hero-section d-flex align-items-center" id="intro">
            
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-lg-7 col-xl-6">
                        <div className="hero-content-box">
                            <span className="hero-sub-title">Hi, I am Randal</span>
                            <h1 className="hero-title">Full-Stack <br /> Web Developer</h1>
        
                            <div className="hero-image-box d-md-none text-center">
                                {/* <StaticImage src={"../images/me.png"} alt="" /> */}
                            </div>
        
                            <p className="lead">
                            As a skilled Full-Stack WordPress Developer, I specialize in creating dynamic, responsive, and user-friendly websites that seamlessly integrate design and functionality to enhance user experience and drive digital success.
                            </p>

                            <div className="button-box d-flex flex-wrap align-items-center">
                                <a href="https://docs.google.com/document/d/1MvsVzw5VBn_4rEfshtD_eGFcRK7k3n_trwdWBPGuZTU/edit?usp=sharing" className="btn tj-btn-secondary" target="_blank" rel="noreferrer">Download CV <FontAwesomeIcon icon={faDownload} className="fa-1x"/></a>
                                <ul className="ul-reset social-icons">
                                    <li>
                                        <a href="https://www.linkedin.com/in/randalpope/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} className="fa-2x"/></a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/randalio" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className="fa-2x"/></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-none d-md-block">
                        <div className="hero-image-box text-center">
                            {/* <StaticImage src={"../images/me.png"} alt="" /> */}
                        </div>
                    </div>
                </div>

                <div className="funfact-area">
                    <div className="row">
                        <div className="col-12 col-lg-4 mb-4">
                            <div className="funfact-item d-flex flex-column flex-sm-row flex-wrap align-items-center">
                            <div className="number"><span className="odometer" data-count="14">14+</span></div>
                            <div className="text">Years of <br />Experience</div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 mb-4">
                            <div className="funfact-item d-flex flex-column flex-sm-row flex-wrap align-items-center">
                            <div className="number"><span className="odometer" data-count="50">50</span>+</div>
                            <div className="text">Projects<br />Completed</div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 mb-4">
                            <div className="funfact-item d-flex flex-column flex-sm-row flex-wrap align-items-center">
                            <div className="number"><span className="odometer" data-count="2.4">2.4</span>K+</div>
                            <div className="text">GitHub Commits<br />Last Year</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        
        </>
    )

    
}

// const script = document.createElement('script');
// script.src = './home-hero.module.js'; // The file will be served at the root URL
// script.async = true;
// document.body.appendChild(script);

export default HomeHero;