import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import GridItem from "../components/GridItem"

export const WorkAllPostQuery = graphql`
  query WorkAllPostQuery {
    allWordpressPost(
      filter: { categories: { elemMatch: { name: { eq: "project" } } } }
      sort: { fields: [date], order: ASC }
    ) {
      edges {
        node {
          date(formatString: "DD, MMM YYYY")
          title
          id
          slug
          tags {
            name
          }
          featured_media {
            localFile {
              publicURL
              childImageSharp {
                id
                fluid(maxWidth: 700) {
                  srcSet
                  src
                  aspectRatio
                  sizes
                }
              }
            }
          }
        }
      }
    }
  }
`

const Work = ({ data }) => (
    <>
      <Layout>
        {data.allWordpressPost.edges.map(({ node }) => {
          let imageData = null
          if (node.featured_media.localFile.childImageSharp !== null) {
            imageData = node.featured_media.localFile.childImageSharp.fluid
          }
          return (
            <GridItem
              key={node.id}
              slug={node.slug}
              imgData={imageData}
              publicURL={node.featured_media.localFile.publicURL}
              title={node.title}
              category="work"
              tag={node.tags ? node.tags[0].name : null}
            />
          )
        })}
      </Layout>
    </>
)

export default Work
