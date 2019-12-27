import React from 'react'
import { IconContext } from "react-icons";
import {primary, secondary, gold, gray, dark, white, danger} from '../../styles/colors'
import {Container} from './styles'
const App = ({Icon,Text,To}) =>{
    return(
        <Container>
            <IconContext.Provider value={{ color: white, size: "2em" }}>
                <div>
                    <Icon />
                    <a href={To}>{ Text}</a>
                </div>
            </IconContext.Provider>
        </Container>
         
            
        
    )
}

export default App