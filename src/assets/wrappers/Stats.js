import styled from 'styled-components'
export const Wrapper = styled.div`
  div {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
  }
  div :last-child {
    border-radius: 8px;
  }
  @media (min-width: 992px) {
    div {
      grid-template-columns: repeat(3, 1fr);
    }
    div :nth-child(3) {
      grid-column: 1 / span 2;
    }
    div :last-child {
      grid-row: 1 / span 2;
      grid-column-start: 3;
      grid-column-end: 3;
    }
  }
`
