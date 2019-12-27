import styled from "styled-components";
import {primary, secondary, gold, gray, dark, white, danger} from '../../styles/colors'




export const Container = styled.div`

background-color: ${secondary}
 width: 100%;
 height: 100vh;
 display: flex;
 flex-direction: column;
 justify-content: flex-start;

`;

export const HeadSideBar = styled.div`
  width: 100%;
  height: 5em
  background-color: ${white};
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const Ul = styled.ul`
    padding: 20px;

`;



export const Li = styled.li`
    
    font-size: 1em;
    font-weight: 1.2em;
    text-transform: uppercase;
    color: ${white};
    padding: 5px;
    margin-bottom: 2px;
    border-bottom: 1px solid ${gray};
    border-radius: 2px;
    

`;