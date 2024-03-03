import styled from 'styled-components'
export const Wrapper = styled.div`
  position: fixed;
  top: 75px;
  right: 20px;
  background: white;
  border-radius: 8px;
  width: 200px;
  .user {
    display: flex;
    gap: 1rem;
    margin: 0.5rem 1rem;
    text-decoration: none;
    margin-top: 1rem;
    color: var(--primary-color);
  }
  .logout {
    color: red;
  }
`
