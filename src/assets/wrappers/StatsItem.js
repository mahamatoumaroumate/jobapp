import styled from 'styled-components'
export const Wrapper = styled.section`
  .stats {
    border-bottom: 5px solid ${({ color }) => color || black};
    border-radius: 8px;
    background: white;
    height: 170px;
    h2{
    padding:.5rem 2rem;
    }
  }
  .icon-container {
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding: 0 2rem;
    padding-top: 3rem;
    span {
      font-size: 2rem;
      color:${({ color }) => color || black};
      background:${({ bcg }) => bcg || black};
      padding:.5rem;
      border-radius:5px;
  }
  h1{
   font-size:3rem;
   font-weight:bold;
   font-family:  'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
 color:${({ color }) => color || black};
  }
  
`
