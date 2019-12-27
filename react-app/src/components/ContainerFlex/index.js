import React from 'react';

import {Container, SubContainer} from './styles'

class App extends React.Component {

    render(){
        return (
        <>
         <Container>
             <SubContainer>
                {this.props.children}
             </SubContainer>
         </Container>
        </>
    )}

}

export default App