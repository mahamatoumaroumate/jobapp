import styled from 'styled-components'
export const Wrapper = styled.section`
  margin: 1rem 0;
  width: 90vw;
  display: flex;
  align-items: center;
  .btn-container {
    padding: 1rem;

    .pageBtn {
      padding: 0.2rem 1.01rem;
      border: transparent;
      font-size: 1.1rem;
      background: #ccfbf1;
      cursor: pointer;
      border-radius: 8px;
      margin: 0.2rem 0.2rem;
    }
    margin: 0 0.75rem;
    border-radius: 8px;
  }
  .btn {
    display: flex;
    padding: 0.2rem;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    background: white;

    transition: all 0.2s linear;
  }
  .btn:hover {
    background: var(--primary-color);
    color: white;
  }
  .pageBtn.active {
    border-radius: 8px;
    color: white;
    background: var(--primary-color);
  }
  @media (min-width: 650px) {
    & {
      width: 100%;
      display: flex;
      justify-content: end;
      align-items: center;
    }
    .btn {
      padding: 0.65rem;
    }

    .btn-container {
      display: flex;
      .pageBtn {
        padding: 0.55rem 1.01rem;
      }
    }
  }
`
