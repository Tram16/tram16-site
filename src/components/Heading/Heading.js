import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Heading = ({ variant, color, component, align, children }) => {
  const StyledHeading = styled(variant)`
    font-weight: 300;
    ${align ? `text-align: ${align};` : null}
  `;

  return (
    <StyledHeading>
      {children}
    </StyledHeading>
  );
};

Heading.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
};

Heading.defaultProps = {
  variant: 'h1',
  color: 'default',
  align: null,
};

export default Heading;
