import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Wrapper from '../components/Wrapper';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import Container from '../components/Container/Container';
import Heading from '../components/Heading';

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query IndexQuery {
        datoCmsSite {
          faviconMetaTags {
            ...GatsbyDatoCmsFaviconMetaTags
          }
        }
        datoCmsHome {
          seoMetaTags {
            ...GatsbyDatoCmsSeoMetaTags
          }
        }
      }
    `}
    render={data => (
      <Wrapper>
        <Container>
          <HelmetDatoCms
            favicon={data.datoCmsSite.faviconMetaTags}
            seo={data.datoCmsHome.seoMetaTags}
          />
          <Heading variant="h1">home</Heading>

          <ul className="sidebar__menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/over-ons">About</Link>
            </li>
          </ul>
        </Container>
      </Wrapper>
    )}
  />
);

export default IndexPage

