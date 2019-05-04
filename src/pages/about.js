import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { StaticQuery, graphql, } from 'gatsby';
import Layout from '../components/projectLayout';
import ContactForm from '../components/ContactForm';

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
            <p>Mary is a freelance creative who does her best work collaboratively. Some projects in her position as an art director at Ralph Appelbaum Associates include exhibition and media design for the Canadian Museum for Human Rights, Patricia and Phillip Frost Museum of Science, Moody Gardens, as well as an art museum in Beirut.</p>
            <p>Early on, she discovered that scissors can do magic and engaged in a career of perfecting cut out techniques in bright colors. Her love for paper is only equaled by her love for what is on the paper; stories, images, typography, and all the white space in between. Her typography work for the Beirut Exhibition Center signage was a Professional Runner-Up at the Core77 Design Awards. Her design work in print, branding, web and exhibition design has taken her to Lebanon, Amsterdam, and New York where she worked on the branding of Mathaf, the Museum of Modern Arab Art in Qatar with Wolff Olins.</p>
            <p>She would love to hear from you!</p>
            <ContactForm />
        </Layout>
      )
    }}
  />
);

export default about;

