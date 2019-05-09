import React from 'react';
import { StaticQuery, graphql, } from 'gatsby';
import Layout from '../components/layout';
import GridItem from '../components/GridItem';

const AllBlogPostQuery = graphql`
query AllBlogPostQuery {
      allWordpressPost(filter: { categories: { elemMatch: {name: {eq: "blog"}}}} sort: { fields: [date], order:ASC }) {
        edges {
          node {
            date(formatString: "DD, MMM YYYY")
            title
            id
            slug
            featured_media {
              localFile {
                publicURL
                childImageSharp {
                  id
                  fluid (maxWidth: 700) {
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
`;

const sideNotes = () => (
      <StaticQuery
        query={AllBlogPostQuery}
        render={data => (
          <div>
            <Layout>
              {data.allWordpressPost.edges.map(({ node }) => {
                let imageData = null;
                if (node.featured_media.localFile.childImageSharp !== null ) {
                  imageData = node.featured_media.localFile.childImageShar.fluid
                }
                return (
                  <GridItem 
                    key={node.id} 
                    slug={node.slug} 
                    imgData={imageData} 
                    publicURL={node.featured_media.localFile.publicURL}
                    title={node.title} 
                    category="side-notes"
                  />
                )})}
            </Layout>
          </div>
      )}/>
);

export default sideNotes;


    