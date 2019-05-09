import React from 'react';
import { StaticQuery, graphql, } from 'gatsby';
import Layout from '../components/layout';
import GridItem from '../components/GridItem';

const WorkAllPostQuery = graphql`
query WorkAllPostQuery {
      allWordpressPost(filter: { categories: { elemMatch: {name: {eq: "project"}}}} sort: { fields: [date], order:ASC }) {
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

const Work = () => (
      <StaticQuery
        query={WorkAllPostQuery}
        render={data => (
          <div>
            <Layout>
              {data.allWordpressPost.edges.map(({ node }) => (
                <GridItem 
                  key={node.id} 
                  slug={node.slug} 
                  imgData={!!node.featured_media.localFile.childImageSharp ? node.featured_media.localFile.childImageSharp.fluid : null} 
                  publicURL={node.featured_media.localFile.publicURL}
                  title={node.title} 
                  category="work"
                />
              ))}
            </Layout>
          </div>
      )}/>
);

export default Work;


    