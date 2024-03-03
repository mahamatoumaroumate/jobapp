import styled from 'styled-components'
export const Wrapper = styled.div`
  &.active {
    position: fixed;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
    z-index: 2;
  }
  &.active main {
    display: block;
  }
  .section-center {
    display: grid;
    place-items: center;
  }
  .logo-container {
    display: flex;
    margin-top: 1rem;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    h1 {
      font-size: 1.75rem;
      letter-spacing: 1.2px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      color: var(--primary-color);
    }
  }
  .links-container {
    margin-top: 1rem;

    padding-top: 3rem;
  }
  .link {
    display: flex;
    gap: 0.5rem;
    padding: 0.5rem 2rem;
    text-decoration: none;
    align-items: center;
    color: var(--primary-gray);
    .btn {
      background: transparent;
      border: transparent;
      font-size: 1.75rem;
      color: var(--primary-gray);
    }
    .text {
      font-size: 1.5rem;
    }
    transition: all 0.5s linear;
  }
  .active {
    color: var(--primary-color);
  }
  .active .btn {
    color: var(--primary-color);
  }
  .link:hover {
    color: var(--primary-color);
  }
  .link:hover .btn {
    color: var(--primary-color);
  }
  main {
    display: none;
    position: sticky;
    top: 2rem;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 90vw;
    background: white;
    height: 90vh;
    border-radius: 8px;
    transition: all 0.1s linear;
  }
  .btn-close {
    font-size: 2rem;
    background: transparent;
    border: transparent;
    padding: 0.5rem;
    color: maroon;
    cursor: pointer;
  }
  @media (min-width: 992px) {
    & {
      display: none;
    }
    &.active {
      display: none;
    }
  }
`
