import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'
import RebootStyles from './RebootStyles';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import MainNavigation from './MainNavigation/MainNavigation';

const duration = 0.3;

const variants = {
  initial: {
    opacity: 0,
    transform: 'translateY(-5px)',
  },
  enter: {
    opacity: 1,
    transform: 'translateY(0px)',
    transition: {
      duration: duration,
      delay: duration,
      when: 'beforeChildren',
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    transform: 'translatey(5px)',
    transition: {
      duration: duration,
      ease: 'easeOut',
    },
  },
};

const Wrapper = ({ children, location }) => {
  return (
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
                     <AnimatePresence>
                       <motion.main
                         key={location.pathname}
                         variants={variants}
                         initial="initial"
                         animate="enter"
                         exit="exit"
                       >
                         {children}
                       </motion.main>
                     </AnimatePresence>
                   </ThemeProvider>
                 )}
    />
  );
}

Wrapper.propTypes = {
  children: PropTypes.object,
};

export default Wrapper;
