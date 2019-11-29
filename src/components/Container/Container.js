import styled from 'styled-components'

export default styled.div`
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
  
  
  ${props => Object.keys(props.theme.gridBreakpoints).map(key => {
    if (props.theme.containerMaxWidths[key]) {
      return `@media (min-width: ${props.theme.gridBreakpoints[key]}) {max-width: ${props.theme.containerMaxWidths[key]}}`;
    }
    
    return null;
  })}
`;
