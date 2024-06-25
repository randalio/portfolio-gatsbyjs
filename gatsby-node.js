const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {

  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)

  return graphql(`
      query {
        allWpPost {
            nodes {
                id
                slug
                title
                content
                excerpt
                featuredImage {
                  node {
                    altText
                    gatsbyImage(
                      breakpoints: 10
                      fit: CONTAIN
                      formats: AUTO
                      layout: CONSTRAINED
                      outputPixelDensities: 2
                      placeholder: BLURRED
                      sizes: ""
                      width: 1024
                    )
                  }
                }
            }
        }
    }
  `, {limit: 1000}).then(result => {
    console.log('result',result)
      if (result.errors) {
        throw result.errors
      }

      result.data.allWpPost.nodes.forEach(post => {

        createPage({
          path: post.slug,
          component: blogPostTemplate,
          context: post,
        })
      }
    )})
      

}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
          rules: [
          {
            test: /wowjs/,
            use: loaders.null(),
          },
         ],
      },
    })
  } 
}