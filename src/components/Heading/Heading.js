import React from 'react';
import styled from 'styled-components';

const Heading = ({ variant, color, component, children }) => {
  const ComponentTag = variant;

  const StyledHeading = styled(ComponentTag)`
    font-weight: 300;
  `;

  return (
    <StyledHeading>
      {children}
    </StyledHeading>
  );
};

export default Heading;
