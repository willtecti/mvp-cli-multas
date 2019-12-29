import React from 'react'

import {Container} from './styles.js'


const App = ({text}) =>{
    return(
        <Container dangerouslySetInnerHTML={{__html: text}}>
            
        </Container>
    )
}


export default App