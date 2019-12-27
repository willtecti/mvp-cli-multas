import React from 'react'

import { Container, Navbar, SubNavbar } from './styles'
import Logo from '../../components/Logo'
import Title from '../../components/Title'
import Menu from '../../containers/Menu'


const App  = ({children}) => {

    return(
 
            <Container>          
                 
                <div className='row'>
                    <div className='col-2' id="sidebar">
                        <Menu></Menu>
                    </div>
                    <div className='col-10' id="navbar">
                        
                        <Navbar>
                        
                        </Navbar>
                        <div className='row'>
                            <div className='col' id="content">
                                {children}
                            </div>
                        </div>
                        
                    </div>
                </div>    
                        
                
            </Container>
    )
}

export default App;