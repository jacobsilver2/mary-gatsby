import React, {useState} from 'react';
import {Link} from 'gatsby';
import Img from 'gatsby-image';
import {spring, Motion} from 'react-motion';
import styled from 'styled-components';

const StyledGridItem = styled.div`

.container {
    display: table;
    cursor: pointer;
    width: 100%;
  }
  .subcontainer {
    position: relative;
    background-color: #2f3238;
    overflow:hidden;
  }
  .containerImage {
    position: relative;
    background-color: #17819c;
  }
  .title {
    text-align: center;
    font-size: 18px;
    color: white;
    position: absolute;
    top: 5%;
    left: 5%;
  }
  .titleText {
    font-size: 30px;
    position: relative;
    font-family: fertigo-pro, serif;
    font-style: normal;
    font-weight: 400;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .img {
    width: 100%;
    cursor: pointer;
    position: relative;
    vertical-align: middle;
  }
`;

const GridItem = ({slug, imgData, title, category, publicURL, tag}) => {
  const [isHovering, setIsHovering] = useState(false);
  const getSpringProps = () => {
    return {
      defaultStyle: {
        scale: 1.15,
        marginTop: 25,
        imageOpacity: 0.7,
        opacity: 0,             
      },
      style:{
        scale: spring(isHovering ? 1 : 1),
        marginTop: spring(isHovering ? 22 : 25),
        imageOpacity: spring(isHovering ? 0.4 : 0.7),
        opacity: spring(isHovering ? 1 : 0)    
      },
    };
  }

  return (
    <Motion {...getSpringProps()}>
      {motionStyle => {
        let styleImage = {
        transform: 'scale(' + motionStyle.scale + ')',
        opacity: motionStyle.imageOpacity, 
      };
      let styleSubtitle = { opacity: motionStyle.opacity, };
      const urlString = tag === 'protected' ? `/${category}/private/${slug}` : `/${category}/${slug}`
        return (
          <StyledGridItem onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            <Link to={urlString}>
              <div className="container">
                <div className="subcontainer">
                  <div className="conatainerImage" >
                  {!!imgData
                    ? <Img fluid={imgData} alt={title} style={styleImage}/>
                    : <img src={publicURL} alt={title} />
                  }
                  </div>
                  <div className="overlay" >
                    <div className="title" style={styleSubtitle}>
                      <div className="titleText">
                        <p dangerouslySetInnerHTML={{__html: title}}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </StyledGridItem>
        )
      }}
    </Motion>
  )
}

export default GridItem;