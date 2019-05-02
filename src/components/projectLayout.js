import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Header from "./header"
import Footer from './footer';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  h1 {
    font-family: fertigo-pro, serif;
    font-weight: 400;
    font-style: normal;
    font-size: 70px;
    text-align: left;
    width: 49%;
    margin-bottom: .1em;
    padding-left: 25%;
    line-height: 70px;
  }

  h2 {
    font-family: ff-tisa-web-pro, serif;
    font-weight: 400;
    font-style: normal;
    font-size: 26px;
    line-height: 34px;
    text-align: left;
    width: 50%;
    padding-left: 25%;
  }

  p {
    font-family: ff-tisa-sans-web-pro, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 20px;
    color: grey;
    line-height: 28px;
    text-align: left;
    width: 50%;
    padding-left: 25%;
  }

  p a {
    color: grey;
  }

  figcaption {
    font-family: ff-tisa-sans-web-pro, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    color: grey;
    text-align: center;
    padding-left: 10%;
    width: 50%
  }

  figcaption a {
    color: grey;
  }


  figure img {
    width: 100%;
  }

  .small img {
    width: 10%;
  }

  .small figcaption {
    text-align: center;
    padding-left: 0;
    width: 100%;
  }

  iframe figcaption {
    text-align: center;
    padding-left: 0;
    width: 100%;
  }

`;

export const siteTitleQueryTwo = graphql`
  query SiteTitleQueryTwo {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const ProjectLayout = ({ children }) => (
  <StaticQuery
    query={siteTitleQueryTwo}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Helmet>
          <link rel="stylesheet" href="https://use.typekit.net/vxc4zkr.css" />
        </Helmet>
        <PageContainer>
          {children}
        </PageContainer>
        <Footer />
      </>
    )}
  />
)

export default ProjectLayout;