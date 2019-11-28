import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from "gatsby"
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'
import Container from './Container';
import RebootStyles from './RebootStyles';

const Wrapper = ({ children }) => (
  <StaticQuery query={graphql`
    query LayoutQuery
    {
      datoCmsSite {
        globalSeo {
          siteName
        }
        faviconMetaTags {
          ...GatsbyDatoCmsFaviconMetaTags
        }
      }
      datoCmsHome {
        seoMetaTags {
          ...GatsbyDatoCmsSeoMetaTags
        }
        introTextNode {
          childMarkdownRemark {
            html
          }
        }
        copyright
      }
    }
  `}
  render={data => (
    <ThemeProvider theme={theme}>
      <RebootStyles />
      <Container>
        <HelmetDatoCms
          favicon={data.datoCmsSite.faviconMetaTags}
          seo={data.datoCmsHome.seoMetaTags}
        />
        <h6 className="sidebar__title">
          <Link to="/">{data.datoCmsSite.globalSeo.siteName}</Link>
        </h6>
        <div
          className="sidebar__intro"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsHome.introTextNode.childMarkdownRemark.html,
          }}
        />
        <ul className="sidebar__menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div className="sidebar__copyright">{data.datoCmsHome.copyright}</div>
        <Link to="/">{data.datoCmsSite.globalSeo.siteName}</Link>
        {children}
      </Container>
    </ThemeProvider>
    )}
  />
);

Wrapper.propTypes = {
  children: PropTypes.object,
};

export default Wrapper;
