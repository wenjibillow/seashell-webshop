import styled from 'styled-components'

export const Wrapper = styled.aside`
font-family: Arial, Helvetica, sans-serif;
width: 500px;
padding:20px;

  .checkout {
    display: block;
    border-radius: 5px 5px;
    background-color: #D6684F;
    color: white;
    transition: all 0.5s;
  }

  .checkout {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
  }
  
  .checkout:after {
    content: '»';
    position: absolute;
    opacity: 0;  
    top: 8px;
    right: -10px;
    transition: 0.5s;
  }
  
  .checkout:hover {
    padding-right: 18px;
    padding-left:4px;
  }
  
  .checkout:hover:after {
    opacity: 1;
    right: 45px;
  }

  h2 {
    background-color: #3E6C3D;
    color: white;
    text-align: center;
    padding: 5px 0px;
  }
`