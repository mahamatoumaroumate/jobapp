import styled from 'styled-components'
export const Wrapper = styled.div`
  section {
    display: grid;
    place-items: center;
    gap: 1rem;
    text-align: center;
    margin-top: 10rem;
  }
  .img {
    width: 50%;
    max-width: 500px;
    object-fit: cover;
    margin: 0 auto;
  }
  a {
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    background: var(--primary-color);
    color: white;
    transition: all 0.5s linear;
  }
  a:hover {
    background: var(--primary-hover);
  }
  div {
    min-height: 100vh;
    display: grid;
    place-items: center;
  }
`
