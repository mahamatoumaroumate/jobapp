import styled from 'styled-components'
export const Wrapper = styled.div`
  margin-top: 2rem;
  .totalJobs {
    font-weight: bold;
    letter-spacing: 1px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  .jobs-container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
    margin-top: 2rem;
  }
  .job {
    background: white;
    border-radius: 5px;
    box-shadow: 1px 1px 2px #334155;
  }
  .job-info {
    padding: 0.75rem;
    display: flex;
    gap: 2rem;
    border-bottom: 1px solid #cbd5e1;
  }
  .job-info h1 {
    text-transform: capitalize;
    width: 60px;
    height: 60px;
    text-align: center;
    background: var(--primary-color);
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    border-radius: 5px;
    display: grid;
    place-items: center;
  }
  .job-info h3 {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-transform: capitalize;
    font-size: 1.25rem;
  }
  .job-info h4 {
    font-size: 1.1rem;
    text-transform: capitalize;
    padding: 0.5rem 0;
    color: rgba(0, 0, 0, 0.5);
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
      sans-serif;
  }
  .job-detail {
    padding: 0.5rem 2rem;
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
  }
  .job-detail h4 {
    font-size: 1.2rem;
    margin-top: 0.5rem;
    color: #64748b;
    text-transform: capitalize;
    span {
      padding-left: 1rem;
      color: #334155;
      font-size: 1.056rem;
    }
  }
  .btn-container {
    padding: 0.5rem 1.5rem;
    padding-bottom: 1.5rem;
  }
  .btn {
    border-radius: 5px;
    padding: 0.3rem 1rem;
    font-size: 1.01rem;
    border: transparent;
    box-shadow: 2px 2px 2px#64748b;
    cursor: pointer;
    transition: all 0.3s linear;
    color: #475569;
  }
  .btn-edit {
    margin-right: 0.75rem;
    background: #ccfbf1;
  }
  .btn-delete {
    background: #fbcfe8;
  }
  .btn-delete:hover {
    background: #ec4899;
    color: white;
  }
  .btn-edit:hover {
    background: var(--primary-color);
    color: white;
  }
  .pending {
    color: #475569;
    background: #fde68a;
    width: 6rem;
    padding: 0.2rem;
    text-align: center;
    border-radius: 5px;
    margin-top: 0.5rem;
  }
  .interview {
    color: #475569;
    background: #99f6e4;
    width: 6rem;
    padding: 0.2rem;
    text-align: center;
    border-radius: 5px;
    margin-top: 0.5rem;
  }
  .declined {
    color: #475569;
    background: #d8b4fe;
    width: 6rem;
    padding: 0.2rem;
    text-align: center;
    border-radius: 5px;
    margin-top: 0.5rem;
  }

  a {
    text-decoration: none;
    color: black;
  }
  @keyframes myanimation {
    to {
      transform: rotate(360deg);
    }
  }
  @media (min-width: 650px) {
    .job-detail {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 992px) {
    .jobs-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`
