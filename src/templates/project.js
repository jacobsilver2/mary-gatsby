import React from 'react';
import PropType from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/projectLayout';

const PostTemplate = (props) => {
  const { data: { wordpressPost: post } } = props;
  return (
    <Layout>
      <Helmet title={post.title} meta={[ { name: 'description', content: post.excerpt } ]} />
        <section dangerouslySetInnerHTML={{ __html: post.content }} />
    </Layout>            
  );
};

PostTemplate.propTypes = {
  data: PropType.shape({}).isRequired,
};

export default PostTemplate;

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
        title
        content
        excerpt
        date(formatString: "DD, MMM YYYY")
        categories {
            id
            name
        }
        slug
        featured_media {
          localFile {
            publicURL
            childImageSharp {
              id
              fixed {
                srcSet
                src
              }
            }
          }
        }
    }
  }
`;
