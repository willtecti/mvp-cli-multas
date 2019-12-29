import React from 'react'
import { IconContext } from "react-icons";
import {dark, white} from '../../styles/colors'
import {Container} from './styles'
import {Link} from 'react-router-dom'
const App = ({Icon,Text,To, showOnlyIcon}) =>{
    return(
        <Container>
            <Link to={To}>
            <IconContext.Provider value={{ color: white, size: "2em" }}>
                <div>
                    <Icon />
                    <span style={ showOnlyIcon ? {display: 'none'}: {display: 'block'}}>{Text}</span>
                </div>
            </IconContext.Provider>
            </Link>
        </Container>
         
            
        
    )
}

export default App