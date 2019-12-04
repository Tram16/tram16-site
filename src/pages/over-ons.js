import React from 'react';
import Wrapper from '../components/Wrapper';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import { graphql, StaticQuery } from 'gatsby';
import Heading from '../components/Heading';
import Container from '../components/Container';
import Banner from '../components/Banner';
import Quote from '../components/Quote';

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
            blocks {
              ... on DatoCmsBanner {
                id
                title
                backgroundColor {
                  hex
                }
                image {
                  fluid(maxWidth: 900, imgixParams: { fm: "jpg", auto: "compress" }) {
                    ...GatsbyDatoCmsSizes
                  }
                }
              }
              ... on DatoCmsQuote {
                id
                title
                text
              }
            }
          }
        }
      `}
      render={
        data => {
          const { blocks, seoMetaTags, title } = data.datoCmsAbout;
          return (
            <>
              <HelmetDatoCms
                seo={seoMetaTags}
              />
              {blocks.map(({ __typename: typeName, ...block }) => {
                const type = typeName.replace('DatoCms', '').toLowerCase();
                if (type === 'banner') {
                  return (
                    <Banner {...block} />
                  )
                }
                if (type === 'quote') {
                  return (
                    <Quote {...block} />
                  )
                }
              })}
            </>
          )
        }
      }
    />
  );
};

export default OverOns;
