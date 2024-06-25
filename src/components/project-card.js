import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"




function ProjectCard({ object_data, wowDelayValue }) {

    const imageData = getImage(object_data.featuredImage.node.gatsbyImage);

    let categories = object_data.categories.nodes;
    let categoryList = categories.sort(() => Math.random() - 1);


    // console.log(object_data.featuredImage.node);
    return(
        <div className="col-md-6 col-xl-4 ">
            <div className={"blog-item wow animate__animated animate__fadeInUp "} data-wow-delay={wowDelayValue +"s"}>
                
                    <div className="blog-thumb" style={{backgroundImage: object_data.featuredImage.sourceURL}}>
                        <a href={object_data.websiteUrl} target="_blank">
                            <GatsbyImage image={imageData} alt={object_data.featuredImage.node.altText} placeholder="blurred"/>
                        </a>
                        <div className="blog-categories">
                        {/* loop through categories */
                        

                            categoryList.map((category, index) => {
                                return(
                                    <span key={index} href="#" className="category">{category.name}</span>
                                    )
                                
                                }

                            )}
                        </div>
                        
                    </div>

                    <div className="blog-content">
                        <h3 className="blog-title">
                            <a href={object_data.websiteUrl} target="_blank">
                                {object_data.title}
                            </a>
                        </h3>
                        <div className="blog-meta" dangerouslySetInnerHTML={ {__html: object_data.excerpt} }></div>
                    </div>
                
            </div>
        </div>
    )
}

export default ProjectCard;