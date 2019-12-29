import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import { Container, Navbar, HeadSideBar } from './styles'
import Logo from '../../components/Logo'
import Title from '../../components/Title'
import Menu from '../../containers/Menu'
import logo from '../../assets/Logo_LW_Azul.png'




const App  = ({children}) => {
    const [ tooggled, setToggled] = useState(false)

    const navToggle = () => {
        setToggled(!tooggled)
    }

    return(
            <Container>
            <nav className="navbar">
                <a className="navbar-brand" href="#">
                    <HeadSideBar showOnlyIcon={tooggled} >
                        <img src={logo} alt='Logo LW Tecnologia'/>
                        SEEKCAR
                        
                    </HeadSideBar>
                    
                    </a>  
                    <Link className="nav-link" onClick={navToggle} >
                        <GiHamburgerMenu/>
                    </Link> 
                       
                          
                    
                    
            </nav>       
            <div className='container-fluid'>
                   
                 
                <div className='row'>
                    <div className={ tooggled ?'col-icon' :'col-7 col-sm-5 col-md-3 col-lg-4 col-xl-2'} id="sidebar">
                        <Menu showOnlyIcon={tooggled}></Menu>
                    </div>
                    <div className='col' id="navbar">
                        <div className='row'>
                            <div className='col'>
                        
                        </div>
                        </div>
                        <div className='row'>
                            <div className='col' id="content">
                                {children}
                            </div>
                        </div>
                        
                    </div>
                </div>    
                        
                
            </div>
            </Container>
    )
}

export default App;