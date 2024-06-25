import * as React from "react"
import ProjectCard from './project-card';
import { useStaticQuery, graphql } from "gatsby"

function PortfolioGrid({ description, title, children }) {


    const projects = useStaticQuery(
        graphql`
        {
            allWpPost(sort: {date: DESC}) {
              nodes {
                id
                title
                slug
                excerpt
                websiteUrl
                categories {
                    nodes {
                      id
                      name
                      slug
                    }
                }
                featuredImage {
                  node {
                    altText
                    sourceUrl
                    gatsbyImage(
                      aspectRatio: 1.5
                      backgroundColor: ""
                      breakpoints: 10
                      cropFocus: CENTER
                      fit: COVER
                      formats: AUTO
                      layout: FIXED
                      outputPixelDensities: 1.5
                      placeholder: DOMINANT_COLOR
                      quality: 50
                      sizes: ""
                      width: 440
                      height: 320
                      
                    )
                  }
                }
              }
            }
          }
        `
    )

    console.log(projects);
    let delay = 0;
    let index = 0;


    return(
        
    <>
    
        <section className="blog-section" id="project-section">
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    <div className="section-header text-center">
                        <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">Recent Projects</h2>
                        <p className="wow fadeInUp px-4" data-wow-delay=".4s">
                        This showcase features innovative applications of WordPress, along with cutting-edge development tools to tackle complex database structures and seamless integrations with CRMs and external platforms. 
                        </p>
                    </div>
                </div>
                </div>
                <div className="row">
                    
                    {projects.allWpPost.nodes.map((project) => (
                        
                        <ProjectCard key={project.id} object_data={project} wowDelayValue={delay += 0.1} cardIndex={index++} />

                    ))}


                </div>
            </div>
        </section>

    </>
    )
}

export default PortfolioGrid;