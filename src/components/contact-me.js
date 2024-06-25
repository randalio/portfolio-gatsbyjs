import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileRetro, faEarthAmericas, faBell } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import CanvasComponent from "../components/circuits-canvas";

function ContactMe({ description, title, children }) {
    return(
        <section className="contact-section" id="contact-section">
         <CanvasComponent />
           <div className="container">
              <div className="row">
                 <div className="col-lg-6 col-md-7 order-2 order-md-1">
                    <div className="contact-form-box wow animate__animated animate__fadeInLeft" data-wow-delay=".3s">
                       <div className="section-header">
                          <h2 className="section-title">Let’s work together!</h2>
                          <p>I craft beautiful, user-friendly WordPress experiences with seamless integrations to CRMs, external tools, and solutions for complex databases. My focus on clean code ensures a scalable and reliable foundation, while best practices guarantee a website that streamlines your workflow, strengthens customer relationships, and drives growth.</p>
                          <p><strong>Ready to take the next step?</strong> Let's chat about your needs.</p>
                       </div>
  
                       {/* <div className="tj-contact-form">
                          <form id="contact-form">
                             <div className="row gx-3">
                                <div className="col-sm-6">
                                   <div className="form_group">
                                      <input type="text" name="conName" id="conName" placeholder="First name"
                                         autoComplete="off" />
                                   </div>
                                </div>
                                <div className="col-sm-6">
                                   <div className="form_group">
                                      <input type="text" name="conLName" id="conLName" placeholder="Last name"
                                         autoComplete="off" />
                                   </div>
                                </div>
                                <div className="col-sm-6">
                                   <div className="form_group">
                                      <input type="email" name="conEmail" id="conEmail" placeholder="Email address"
                                         autoComplete="off" />
                                   </div>
                                </div>
                                <div className="col-sm-6">
                                   <div className="form_group">
                                      <input type="tel" name="conPhone" id="conPhone" placeholder="Phone number"
                                         autoComplete="off" />
                                   </div>
                                </div>
                                <div className="col-12">
                                   <div className="form_group">
                                      <select name="conService" id="conService" className="tj-nice-select">
                                         <option value="" defaultValue disabled>I am a...</option>
                                         <option value="hiring_manager">Hiring Manager</option>
                                         <option value="recruiter">Recruiter</option>
                                         <option value="agency">Agency</option>
                                      </select>
                                   </div>
                                </div>
                                <div className="col-12">
                                   <div className="form_group">
                                      <textarea name="conMessage" id="conMessage" placeholder="Message"></textarea>
                                   </div>
                                </div>
                                <div className="col-12">
                                   <div className="form_btn">
                                      <button type="submit" className="btn tj-btn-primary">Send Message</button>
                                   </div>
                                </div>
                             </div>
                          </form>
                       </div> */}

                    </div>
                 </div>
  
                 <div className="col-lg-5 offset-lg-1 col-md-5 d-flex flex-wrap align-items-center order-1 order-md-2">
                    <div className="contact-info-list">
                       <ul className="ul-reset mb-5 mb-lg-0">
                          <li className="d-flex flex-wrap align-items-center position-relative wow animate__animated animate__fadeInRight"
                             data-wow-delay=".4s">
                             <div className="icon-box">
                                 <FontAwesomeIcon icon={faMobileRetro} />
                             </div>
                             <div className="text-box">
                                <p>Phone</p>
                                <a href="tel:3305753047">(330) 575-3047</a>
                             </div>
                          </li>
                          <li className="d-flex flex-wrap align-items-center position-relative wow animate__animated animate__fadeInRight"
                             data-wow-delay=".5s">
                             <div className="icon-box">
                                 <FontAwesomeIcon icon={faEnvelope} />
                             </div>
                             <div className="text-box">
                                <p>Email</p>
                                <a href="mailto:mail@mail.com">me@randal.io</a>
                             </div>
                          </li>
                          <li className="d-flex flex-wrap align-items-center position-relative wow animate__animated animate__fadeInRight"
                             data-wow-delay=".6s">
                             <div className="icon-box">
                              <FontAwesomeIcon icon={faBell} />
                             </div>
                             <div className="text-box">
                                <p>Location</p>
                                <a href="#">Philadelphia, PA</a>
                             </div>
                          </li>
                       </ul>
                    </div>
                 </div>
              </div>
           </div>
        </section>
    )
}

export default ContactMe;