import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import {Container, Card, Form, Center, SubTitle} from './styles'
import IconLock from '../../assets/cadeado2.svg'

import Logo from '../../components/Logo'

import service from '../../services/api'

import axios from 'axios'


const App = () => {

    const [error, setError] = useState(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const handleSubmit = async (event) => {
      event.preventDefault();
      const params = new URLSearchParams();
      params.append('username', username);
      params.append('password', password);
      const token = await axios.post('https://www.seekcar.com.br/api/auth/token/',params,{
        headers:{
        'Content-type': 'application/json',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': '*',
        
        
      },
    })
 
     setError('Usuário ou senha incorreto')

  }
    return (
        <Container>
          <Card>
            <div className="row">
              <div className='col'>
                  <Center>
                    <img src={IconLock} alt="Tela de Login" style={{width: 100}}/>  
                  </Center>
              </div>
              <div className='col'>
                <Center>
                    <Logo></Logo>
                </Center>
              </div>
            </div>
              <div className="row">
                <div className='col'>
            
                  <Form onSubmit={handleSubmit} >
                    
                    {error && <p>{error}</p>}
                    <input
                      type="text"
                      placeholder="Nome de usuário"
                      onChange={e => setUsername( e.target.value )}
                      value={username}
                    />
                    <input
                      type="password"
                      placeholder="Senha"
                      onChange={e => setPassword( e.target.value )}
                      value={password}
                    />
                  
                    <button type="submit">Login</button>
                    <hr />
                    <a>Esqueci a senha</a>
                  </Form>
                </div>

              <div className="col">
                <SubTitle> Rastreamento Veicular</SubTitle>
              </div>
              </div>
          </Card>
          
        </Container>
      );
  
}

export default App