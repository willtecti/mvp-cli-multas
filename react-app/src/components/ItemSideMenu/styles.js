import styled from "styled-components";
import {dark, white, danger} from '../../styles/colors'

export const Container = styled.li`
  div {
      width: 100%;
      padding: 10px 40px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: ${white};
  }

  span {
      text-align: center;
      margin-left: 10px;
      
  }

  a: {
    text-decoration: none;
    color: ${white};
  }

  div:hover {
    background-color: ${dark(0.5)};
    cursor: pointer;
  }

  div.danger:hover {
    background-color: ${danger(0.5)};
    cursor: pointer;
  }

 

`;

