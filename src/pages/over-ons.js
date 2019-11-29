import React from 'react';
import Wrapper from '../components/Wrapper';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import { graphql, StaticQuery } from 'gatsby';
import Heading from '../components/Heading';
import Container from '../components/Container';

const OverOns = () => {
  return (
    <StaticQuery
      query={graphql`
        query AboutQuery {
          datoCmsAbout {
            seoMetaTags {
              ...GatsbyDatoCmsSeoMetaTags
            }
            title
          }
        }
      `}
      render={data => {

        return (
          <Wrapper>
            <Container>
              <HelmetDatoCms
                seo={data.datoCmsAbout.seoMetaTags}
              />
              <Heading variant="h2">
                {data.datoCmsAbout.title}
              </Heading>
            </Container>
          </Wrapper>
        )
      }}
    />
  );
};

export default OverOns;
