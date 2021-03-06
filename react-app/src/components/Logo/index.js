import React from 'react';
import logo from '../../assets/Logo_LW_Azul.png'
import {Image, Container, Text} from './stylus'
const App = ({showOnlyIcon}) =>{
 return(
     <Container>
        <Image src={logo} alt='Logo LW Tecnologia'/>
        <Text style={ showOnlyIcon ? {display: 'none'}: {display: 'block'} }>Seek Car</Text>
     </Container>
 )
}

export default App