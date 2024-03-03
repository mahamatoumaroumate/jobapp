import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 2rem;
  background: white;
  border-radius: 6px;
  transition: all 0.2s linear;
  box-shadow: 1px 1px 2px var(--primary-gray);

  &:hover {
    box-shadow: 2px 2px 2px var(--primary-gray);
  }

  h3 {
    padding: 1rem 1rem;
    font-weight: bold;
    font-size: 1.5rem;
    letter-spacing: 1.2px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
      'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: rgba(0, 0, 0, 0.7);
  }

  .form {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }

  .form-row {
    padding: 0.2rem 1rem;
  }

  .form-input {
    display: block;
    background: #f1f5f9;
    border-radius: 5px;
    font-size: 1.1rem;
    margin: 0.5rem 0;
    padding: 0.3rem;
    padding-left: 1rem;
    border: 1px solid var(--primary-color);
    width: 100%;
  }
  .form-select {
    display: block;
    background: #f1f5f9;
    border-radius: 5px;
    font-size: 1.1rem;
    margin: 0.5rem 0;
    padding: 0.3rem;
    padding-left: 1rem;
    border: 1px solid var(--primary-color);
    width: 105%;
  }

  .form-label {
    font-size: 1.2rem;
    display: block;
  }

  .clear-btn {
    height: 25px;
    margin: 2.2rem 1rem;
    height: 30px;
    font-size: 1.1rem;
    border: transparent;
    background: #ec4899;
    border-radius: 5px;
    color: white;
    transition: all 0.3s linear;
    cursor: pointer;
  }
  .btn-container {
    width: 105%;
    display: flex;
  }
  .btn {
    width: 100%;
    margin: 2.2rem 1rem;
    height: 30px;
    font-size: 1.01rem;
    border: transparent;
    background: var(--primary-color);
    border-radius: 5px;
    color: white;
    transition: all 0.3s linear;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: all 0.5s linear;
  }
  .btn:hover {
    background: var(--primary-hover);
  }
  .btn-submit {
    background: #a855f7;
  }
  .btn-submit:hover {
    background: #7e22ce;
  }
  .clear-btn:hover {
    background: #f9a8d4;
    color: black;
  }
  .btn-save {
    width: 100%;
    margin: 2.2rem 1rem;
    height: 30px;
    font-size: 1.01rem;
    border: transparent;
    background: var(--primary-color);
    border-radius: 5px;
    color: white;
    transition: all 0.3s linear;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: all 0.5s linear;
  }
  h1 {
    padding: 1rem 1rem;
  }
  .btn-save:hover {
    background: var(--primary-hover);
  }
  @media (min-width: 650px) {
    .form {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 992px) {
    .form {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`
