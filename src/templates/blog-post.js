import * as React from "react"
import PageLayout from '../components/page-layout';
import Seo from "../components/seo"
import BlogHero from '../components/blog-hero';


const blogPostTemplate = ( data ) => {
    return(

        <PageLayout>
            <Seo title={data.pageContext.title} />

            <BlogHero featuredImage={data.pageContext.featuredImage} title={data.pageContext.title} />

            {data.pageContext.content && <div className={"blog-content-wrapper"}><div className={"container blog-content"} dangerouslySetInnerHTML={{ __html: data.pageContext.content }}></div></div>}
            
        </PageLayout>
    )
}

// export const Head = () => <body className="" />

export default blogPostTemplate
