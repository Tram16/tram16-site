import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

import { ThemeProvider } from 'styled-components'
import theme from '../theme'
import RebootStyles from './RebootStyles';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import MainNavigation from './MainNavigation/MainNavigation';

const Wrapper = ({ children }) => (
  <StaticQuery query={graphql`
    query LayoutQuery
    {
      datoCmsSite {
        faviconMetaTags {
          ...GatsbyDatoCmsFaviconMetaTags
        }
      }
    }
  `}
  render={data => (
    <ThemeProvider theme={theme}>
      <RebootStyles />
      <HelmetDatoCms
        favicon={data.datoCmsSite.faviconMetaTags}
      />
      <MainNavigation />
      {children}
    </ThemeProvider>
    )}
  />
);

Wrapper.propTypes = {
  children: PropTypes.object,
};

export default Wrapper;
