import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (

  <>
    <header className="tj-header-area header-absolute">
      <div className="container">
          <div className="row">
            <div className="col-12 d-flex flex-wrap align-items-center">
                <div className="logo-box">
                  <Link to="/">
                      <StaticImage
                        src="../images/rio_logo.png"
                        alt="randal.io logo"
                        height={40}
                        width={40}
                        placeholder="blurred"
                      />
                  </Link>
                </div>

                <div className="header-info-list d-none d-md-inline-block">
                  <ul className="ul-reset">
                    <li><a href="/">{siteTitle}</a></li>
                  </ul>
                </div>
                <div className="header-menu">
                  
                </div>
                <div className="header-button">
                  <a href="#contact-section" className="btn tj-btn-primary">Hire me!</a>
                </div>
            </div>
          </div>
      </div>
    </header>

  </>



)

export default Header
