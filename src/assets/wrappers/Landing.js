import styled from 'styled-components'
export const Wrapper = styled.div`
  width: 90vw;
  max-width: 1230px;
  margin: 0 auto;
  nav {
    display: flex;
    margin-top: 2rem;
    column-gap: 1rem;
    align-items: center;
    h2 {
      font-weight: 700;
      letter-spacing: 1.2px;
      font-size: 2rem;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      color: #14b8a6;
    }
  }
  div {
    display: grid;
    grid-template-columns: 1fr;
    section {
      margin-top: 8rem;
      h1 {
        font-size: 2.5rem;
        letter-spacing: 1.2px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        margin: 1rem 0;
      }
      span {
        color: #14b8a6;
      }
      p {
        letter-spacing: 1.2px;
        line-height: 1.5rem;
        font-size: 1.2rem;
        color: #64748b;
      }
    }
  }
  .hero {
    display: none;
  }
  a {
    text-decoration: none;
    padding: 0.5rem;
    background: #14b8a6;
    display: block;
    width: 150px;
    margin-top: 2rem;
    text-align: center;
    border-radius: 8px;
    font-size: 1.2rem;
    color: white;
    letter-spacing: 2px;
    transition: all 0.5s linear;
  }
  a:hover {
    background: #115e59;
  }
  @media (min-width: 992px) {
    div {
      grid-template-columns: 1fr 1fr;
    }
    .hero {
      display: block;
      height: 32rem;
      width: 100%;
      object-fit: cover;
    }
  }
`
