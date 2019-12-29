import React,{useState} from 'react'
import { IconContext } from "react-icons";
import {FaCarSide} from 'react-icons/fa'
import {Container} from './styles'
import {danger} from '../../styles/colors'


const App = () =>{


    return(
        <Container>
            <IconContext.Provider value={{ color: danger(0.6), size: "2em" }}>
            
            <FaCarSide></FaCarSide>
            </IconContext.Provider>
            
        </Container>
    )

}

export default App