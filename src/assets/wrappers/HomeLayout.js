import styled from 'styled-components'
export const Wrapper = styled.div`
  main {
    margin-left: 0;
    margin-top: 5rem;
    padding: 1.5rem 1.5rem;
  }
  @media (min-width: 992px) {
    main {
      margin-left: 16rem;
      padding: 2rem 3.5rem;
      transition: all 0.1s linear;
    }

    main.active {
      margin-left: 0rem;
    }
  }
`
