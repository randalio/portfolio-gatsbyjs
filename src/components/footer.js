import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Footer = ({ siteTitle }) => (

  <>
   <footer className="tj-footer-area">
      <div className="container">
         <div className="row">
            <div className="col-md-12 text-center">
               <div className="footer-logo-box">
                  <Link to="/">
                      <StaticImage src="../images/rio_logo.png" alt="" height={40} width={40} />
                  </Link>
               </div>
               <div className="footer-menu">
                  <nav>
                     <ul>
                        <li><a href="https://docs.google.com/document/d/1MvsVzw5VBn_4rEfshtD_eGFcRK7k3n_trwdWBPGuZTU/edit?usp=sharing" target="_blank" rel="noreferrer">Download CV</a></li>
                        <li><a href="https://www.linkedin.com/in/randalpope/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                        <li><a href="https://github.com/randalio" target="_blank" rel="noreferrer">GitHub</a></li>
                        <li><a href="mailto:me@randal.io">me@randal.io</a></li>
                        {/* <li><a href="#">Credits</a></li> */}
                     </ul>
                  </nav>
               </div>
               <div className="copy-text">
                  {/* <p>&copy; 2024 All rights reserved by <a href="#" target="_blank">ThemeJunction</a></p> */}
               </div>
            </div>
         </div>
      </div>
   </footer>
  </>



)

export default Footer
