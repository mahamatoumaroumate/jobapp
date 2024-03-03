import styled from 'styled-components'
export const Wrapper = styled.div`
  .sidebar {
    display: none;
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
    height: calc(100vh - 70px);
    box-shadow: 2px 2px 2px var(--primary-gray);
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
      font-size: 1.5rem;
      color: var(--primary-gray);
    }
    .text {
      font-size: 1.2rem;
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
    background: #f1f5f9;
    margin-left: 0.5rem;
    color: var(--primary-color);
  }
  .link:hover .btn {
    color: var(--primary-color);
  }

  @media (min-width: 992px) {
    .sidebar {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: 16rem;
      background: white;

      transition: all 0.1s linear;
    }
    .sidebar.active {
      margin-left: -50rem;
    }
  }
`
