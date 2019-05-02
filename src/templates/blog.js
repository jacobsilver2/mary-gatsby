import React from 'react';
import PropType from 'prop-types';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import { graphql, Link } from 'gatsby';
import Layout from '../components/projectLayout';

// const stripHtml = (html) => {
//   if (typeof window !== 'undefined') {
//     const doc = new DOMParser().parseFromString(html, 'text/html');
//     return doc.body.textContent || '';
//   }
//   return html;
// };


const PostTemplate = (props) => {
  const { data: { wordpressPost: post } } = props;
  return (
    <Layout>
      <Helmet title={post.title} meta={[ { name: 'description', content: post.excerpt } ]} />
        <section dangerouslySetInnerHTML={{ __html: post.content }} />
        {/* <p>{post.content}</p> */}
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
    }
  }
`;