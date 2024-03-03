import styled from 'styled-components'
export const Wrapper = styled.article`
  background: white;
  */text-align: center;

  .profile-container {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  .btn-container {
    display: flex;
    padding: 1.5rem 3rem;
    justify-content: center;
    gap: 1rem;
  }
  a {
    text-decoration: none;
    text-align: center;
    color: black;
  }
  .btn {
    width: 40%;
    border: none;
    border-radius: 3px;
    padding: 0.65rem;
    transition: all 0.5s linear;
  }
  .btn-update {
    background: #99f6e4;
    font-size: 1.2rem;
  }
  .btn-update:hover {
    background: var(--primary-hover);
    color: white;
  }
  .btn-logout {
    background: #f9a8d4;
    font-size: 1.2rem;
  }
  .btn-logout:hover {
    background: #db2777;
    color: white;
  }
  .profile-container img {
    width: 300px;
    height: 12rem;
    border: 3px solid #cbd5e1;
    border-radius: 8px;
  }
`
