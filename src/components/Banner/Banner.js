import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Heading from '../Heading';

const BannerBase = styled.div`
  display: grid;
  grid-template-areas: 'base';
  position: relative;
  min-height: 50px;
  color: #fff;
`;

const BannerImage = styled(Img)`
  height: 30rem;
  grid-area: base;
  
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    background-color: rgba(20, 20, 20, .7);
  }
  
  img {
    object-position: center;
  }
`;

const BannerOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: base;
  z-index: 1;
`;

const Banner = ({ title, image, backgroundColor, ...rest }) => {
  return (
    <BannerBase>
      <BannerImage fluid={image.fluid} backgroundColor={backgroundColor.hex} objectFit="cover" />
      <BannerOverlay>
        <Heading variant="h1" component="div" align="center">{title}</Heading>
      </BannerOverlay>
    </BannerBase>
  );
};

export default Banner;
