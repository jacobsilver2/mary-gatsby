import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react";
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Behance from '../assets/behance.svg';
import Linkedin from '../assets/linkedin.svg';
import Instagram from '../assets/instagram.svg';


const StyledHeader = styled.header`
  background: white;
  margin-bottom: 1.45rem;
  `;

const Container = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  max-width: 100%;
  padding: 1.45rem 1.0875rem;
`;

const Logo = styled.div`
  flex-grow: 1;
  margin: 0;
`;

const StyledLogoLink = styled(props => <Link {...props} />)`
  font-family: fertigo-pro, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  color: black;
  text-decoration: none;
  :hover {
    color: red;
  }
`;

const StyledNavLink = styled(props => <Link {...props}/>)`
  font-family: fertigo-pro, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-decoration: none;
  color: grey;
  margin: auto 10px;
  :hover {
    color: black;
  }

`;

const StyledBehance = styled(props => <Behance {...props}/>)`
  margin: auto 10px;
  :hover {
    fill: black;
  }
`;

const StyledLinkedIn = styled(props => <Linkedin {...props}/>)`
  margin: auto 10px;
  :hover {
    fill: black;
  }
`;

const StyledInstagram = styled(props => <Instagram {...props}/>)`
  margin: auto 10px;
  :hover {
    fill: black;
  }
`;

const Header = ({ siteTitle }) => (
  <>
  <Helmet>
    <link rel="stylesheet" href="https://use.typekit.net/vxc4zkr.css"></link>
  </Helmet>
  <StyledHeader>
    <Container>
      <Logo>
        <StyledLogoLink to="/" >
          {siteTitle}
        </StyledLogoLink>
      </Logo>
        <StyledNavLink to="/work">Work</StyledNavLink>
        <StyledNavLink to="/side-notes">Side Notes</StyledNavLink>
        <StyledNavLink to="/about">About</StyledNavLink>
        <a href="https://www.behance.net/MaryChoueiter"><StyledBehance fill="grey"/></a>
        <a href="https://www.instagram.com/tahhiyakaryoka/"><StyledLinkedIn fill="grey"/></a>
        <a href="https://www.linkedin.com/in/marychoueiter"><StyledInstagram fill="grey"/></a>
    </Container>
  </StyledHeader>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
