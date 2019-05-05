import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql, } from 'gatsby';
import Layout from '../components/projectLayout';
import ContactForm from '../components/ContactForm';
import {about1, about2, about3} from '../assets/aboutText';

const aboutQuery = graphql`
  query aboutQuery {
	  file (relativePath: { eq: "about.jpg"}) {
      childImageSharp {
        fluid (maxWidth: 700){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const about = () => (
  <StaticQuery 
    query={aboutQuery}
    render={data => {
      return (
        <Layout>
          <Img fluid={data.file.childImageSharp.fluid} />
            <p>{about1}</p>
            <p>{about2}</p>
            <p>{about3}</p>
            <ContactForm />
        </Layout>
      )
    }}
  />
);

export default about;

