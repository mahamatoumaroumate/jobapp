import styled from 'styled-components'
export const Wrapper = styled.div`
  .logo-container {
    margin-top: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    h1 {
      font-size: 2rem;
      letter-spacing: 1.2px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      color: var(--primary-color);
    }
  }
  h2 {
    text-align: center;
    margin-top: 1rem;
    font-size: 1.75rem;
    letter-spacing: 1.2px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  .form {
    width: 400px;
    border-top: 5px solid var(--primary-color);
    border-radius: 8px;
    background: white;
    margin: 0 auto;
    margin-top: 5rem;
    min-height: 10rem;
    padding-bottom: 1rem;
    box-shadow: 2px 2px 2px#64748b;
  }
  .form-row {
    padding: 0.2rem 2.5rem;
  }
  .form-input {
    display: block;
    width: 95%;
    background: var(--input-color);
    border-radius: 5px;
    font-size: 1.1rem;
    margin: 0.5rem 0;
    padding: 0.3rem;
    padding-left: 1rem;
    border: 1px solid var(--primary-gray);
  }
  .form-label {
    font-size: 1.2rem;
    display: block;
  }
  .btn {
    display: block;
    width: 81%;
    margin: 0 auto;
    text-align: center;
    padding: 5px;
    font-size: 1.2rem;
    background: var(--primary-color);
    border-radius: 5px;
    color: white;
    border: transparent;
    margin-top: 1rem;
    transition: all 0.5s linear;
    cursor: pointer;
  }
  .btn-demo {
    background: #ccfbf1;
    color: black;
    margin-top: 1.5rem;
  }
  .btn-demo:hover {
    background: var(--primary-hover);
    color: white;
  }
  .btn-submit:hover {
    background: var(--primary-hover);
  }
  .btn-toggle {
    background: transparent;
    border: none;
    color: var(--primary-color);
    font-size: 1.2rem;
  }
  p {
    text-align: center;
    margin-top: 1rem;
    font-size: 1.1rem;
  }
`
