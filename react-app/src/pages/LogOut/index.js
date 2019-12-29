import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import {Container, Card, Form, Center, SubTitle} from './styles'
import Logo from '../../components/Logo'
import {logout} from '../../services/auth'





const App = ({history}) => {

useEffect( ()=>{

  logout()

},[])
     

 
    return (
        <Container>
          <Card>
            <div className="row">
              <div className='container'>
                <Logo></Logo>
                <SubTitle> Você foi deslogado </SubTitle>
                <SubTitle> Volte Sempre </SubTitle>
                <SubTitle> Clique <Link to={'/login'}>aqui </Link> para a página de Login </SubTitle>
            
                
              </div>
              </div>
          </Card>
          
        </Container>
      );
  
}

export default App