import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
// import { useStaticQuery, graphql } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faNpm, faSass, faWordpressSimple, faJs, faPhp, faGithub, faBootstrap, faJira } from '@fortawesome/free-brands-svg-icons'

function SkillsIcons({ description, title, children }) {
    return(
        <>
        <section className="skills-section" id="skills-section">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-header text-center">
                    <h2 className="section-title wow animate__animated animate__fadeInUp" data-wow-delay=".3s">My Skills & Tools</h2>
                    <p className="wow animate__animated animate__fadeInUp" data-wow-delay=".4s">
                        I take pride in creating web applications with WordPress for rock-solid flexibility and scalability, JavaScript for smooth interactivity, and React for cutting-edge features. Plus, I leverage NPM, SASS, GitHub, and Tailwind or Bootstrap to keep my workflow streamlined and efficient.
                    </p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="skills-widget d-flex flex-wrap justify-content-center align-items-center">
                        
                    <div className="skill-item wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                        <div className="skill-inner">
                            <div className="icon-box">
                                <FontAwesomeIcon icon={faWordpressSimple} className="fa-3x"/>
                            </div>
                            <p>WordPress</p>
                        </div>
                       
                    </div>
                    <div className="skill-item wow animate__animated animate__fadeInUp" data-wow-delay=".5s">
                        <div className="skill-inner">
                            <div className="icon-box">
                                <FontAwesomeIcon icon={faJs} className="fa-3x"/>
                            </div>
                            <p>JavaScript</p>
                        </div>
                        
                    </div>
                    <div className="skill-item wow animate__animated animate__fadeInUp" data-wow-delay=".5s">
                        <div className="skill-inner">
                            <div className="icon-box">
                                <FontAwesomeIcon icon={faGithub} className="fa-3x"/>
                            </div>
                            <p>GitHub</p>
                        </div>
                    </div>
                    <div className="skill-item wow animate__animated animate__fadeInUp" data-wow-delay=".7s">
                        <div className="skill-inner">
                            <div className="icon-box">
                                <FontAwesomeIcon icon={faSass} className="fa-3x"/>
                            </div>
                            <p>SASS</p>
                        </div>
                        
                    </div>
                    <div className="skill-item wow animate__animated animate__fadeInUp" data-wow-delay=".6s">
                        <div className="skill-inner">
                            <div className="icon-box">
                                <FontAwesomeIcon icon={faNpm} className="fa-3x"/>
                            </div>
                            <p>NPM</p>
                        </div>
                    </div>
                    <div className="skill-item wow animate__animated animate__fadeInUp" data-wow-delay=".4s">
                        <div className="skill-inner">
                            <div className="icon-box">
                                <FontAwesomeIcon icon={faReact} className="fa-3x"/>
                            </div>
                            <p>React</p>
                        </div>
                        
                    </div>
                    <div className="skill-item wow animate__animated animate__fadeInUp" data-wow-delay=".8s">
                        <div className="skill-inner">
                            <div className="icon-box">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" focusable="false">
                                    <title>
                                        Gatsby
                                    </title>
                                    <circle cx="14" cy="14" r="14" fill="transparent"/>
                                    <path fill="#fff" d="M6.2 21.8C4.1 19.7 3 16.9 3 14.2L13.9 25c-2.8-.1-5.6-1.1-7.7-3.2zm10.2 2.9L3.3 11.6C4.4 6.7 8.8 3 14 3c3.7 0 6.9 1.8 8.9 4.5l-1.5 1.3C19.7 6.5 17 5 14 5c-3.9 0-7.2 2.5-8.5 6L17 22.5c2.9-1 5.1-3.5 5.8-6.5H18v-2h7c0 5.2-3.7 9.6-8.6 10.7z"/>
                                </svg>
                            </div>
                            <p>Gatsby</p>
                        </div>
                        
                    </div>
                    <div className="skill-item wow animate__animated animate__fadeInUp" data-wow-delay=".8s">
                        <div className="skill-inner">
                            <div className="icon-box d-flex">
                                <StaticImage src={"../images/icons/tailwind.svg"} alt="" width={52} className="m-auto" />
                            </div>
                            <p>Tailwind</p>
                        </div>
                    </div>
                    <div className="skill-item wow animate__animated animate__fadeInUp" data-wow-delay=".5s">
                        <div className="skill-inner">
                            <div className="icon-box">
                                <FontAwesomeIcon icon={faBootstrap} className="fa-3x"/>
                            </div>
                            <p>Bootstrap</p>
                        </div>
                    </div>
                    <div className="skill-item wow animate__animated animate__fadeInUp" data-wow-delay=".8s">
                        <div className="skill-inner">
                            <div className="icon-box">
                                <FontAwesomeIcon icon={faPhp} className="fa-3x"/>
                            </div>
                            <p>PHP</p>
                        </div>
                    </div>
                    <div className="skill-item wow animate__animated animate__fadeInUp" data-wow-delay=".8s">
                        <div className="skill-inner">
                            <div className="icon-box">
                                <FontAwesomeIcon icon={faJira} className="fa-3x"/>
                            </div>
                            <p>Jira</p>
                        </div>
                    </div>
                    <div className="skill-item wow animate__animated animate__fadeInUp" data-wow-delay=".8s">
                        <div className="skill-inner">
                            <div className="icon-box">
                                <StaticImage src={"../images/vscode-alt.svg"} alt="" width={44} />
                            </div>
                            <p>VS Code</p>
                        </div>
                    </div>

                    

                    </div>
                </div>
            </div>
        </div>
        </section>
        </>
    )
}

export default SkillsIcons;