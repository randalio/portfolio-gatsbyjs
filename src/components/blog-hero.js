import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import CanvasComponent from "../components/circuits-canvas";


function BlogHero({ featuredImage }) {
    console.log(featuredImage);
    return(
        <>
            <CanvasComponent />
            <section className="blog-hero-section d-flex align-items-center" id="intro">
                <div className="container wow backInUp">

                    <GatsbyImage image={featuredImage.node.gatsbyImage} alt="hero image" placeholder="blurred" className="wow animate__animated animate__fadeIn"/>
                    
                </div>
            </section>
            <div className="section-divider"></div>
        </>
    )

    
}


export default BlogHero;