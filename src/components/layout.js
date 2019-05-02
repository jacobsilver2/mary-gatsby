import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 10px;
  margin: 0 auto;
  max-width: 1620px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`;

 const siteTitleQuery = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;


const Layout = ({ children }) => (
  <StaticQuery
    query={siteTitleQuery}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <GridContainer>
          {children}
        </GridContainer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
