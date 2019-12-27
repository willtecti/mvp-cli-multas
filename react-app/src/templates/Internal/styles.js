import styled from "styled-components";

import {primary, secondary, dark, white, gray} from '../../styles/colors'

export const Container = styled.div`
  background-color: ${gray};

  #sidebar, #navbar{
    margin: 0px;
    padding: 0px;
  }

  #content{  
  height: 100vh;
  margin: 0px;
  padding: 0px;
  }
`;



export const Navbar = styled.nav`
    width: 100vw;
    height: 5em;
    background-color: ${primary};
    display: flex;
    alignItems: center;

`;


export const SubNavbar = styled.nav`
    width: 100vw;
    height: 3.5em;
    background-color: ${secondary};

`;

