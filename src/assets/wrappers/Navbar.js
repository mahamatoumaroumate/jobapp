import styled from 'styled-components'
export const Wrapper = styled.div`
position:fixed;
top:0;
left:0;
width:100%;
  .nav {
    background: white;
    box-shadow: 1px 1px 1px var(--primary-gray);
    min-height: 70px;
    display: flex;
    justify-items: center;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    transition: all 0.1s linear;
  }
  .profile{
    display:flex;
    align-items:center;
    gap:1rem;
  }
  .profile h2{
    display:none;
  }
  .profile-img {
    width: 40px;
    height: 40px;
    border: 2px solid var(--primary-color);
    border-radius: 50%;
    cursor:pointer;
  }
  
  .logo-container {
    display: flex;
    gap: 0.75rem;
    h2 {
      text-align: center;
      font-size: 1.75rem;
      letter-spacing: 1.2px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
  }
  .dashboard {
    display: none;
  }
  .btn-toggle {
    background: transparent;
    border: none;
    font-size: 2rem;
    color: var(--primary-color);
    transition: all 0.5s linear;
    cursor: pointer;
  }
  .btn-toggle:hover {
    color: var(--primary-hover);
  }
  @media (min-width: 992px) {
    .logo-container {
      display: none;
    }
    .dashboard {
      display: block;
    }
    .nav {
      margin-left: 16rem;
      z-index: 5;
    }
    .nav.active {
      linear;
      margin-left: 0;
    }
    .profile h2{
    display:block;
  }
  }
`
