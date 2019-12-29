import styled from "styled-components";

import {primary, secondary, dark, white, gray} from '../../styles/colors'

export const Container = styled.div`
  nav.navbar {
    background: ${primary};
    ;
  }
  nav.navbar a{
    color: ${white}
  }

  #sidebar, #navbar{
    margin: 0px;
    padding: 0px;
    
  }

  // #navbar{
  //   width: 100vw;
  // }

  // #sidebar{
  //   height: 100vh;
  // }

  // #content{  
  // height: 100%;
  // margin: 0px;
  // padding:  05px 20px;

  // }

  // .col-icon{
  //   margin-left: -250px;
  // }
`;



export const Navbar = styled.nav`
    
   

`;


export const SubNavbar = styled.nav`
    width: 100vw;
    height: 3.5em;
    background-color: ${secondary};

`;

export const HeadSideBar = styled.div`
  
  
 
`;

