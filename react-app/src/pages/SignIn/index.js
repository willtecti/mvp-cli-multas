import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import {Container, Card, Form, Center, SubTitle} from './styles'
import IconLock from '../../assets/cadeado2.svg'

import Logo from '../../components/Logo'
import Error from '../../components/Error'
import Loading from '../../components/Loading'

import service from '../../services/api'

import {login, logout} from '../../services/auth'




const App = ({history}) => {

    logout()

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")

    const handleSubmit = async (event) => {
      event.preventDefault();
      setError('')
      
      if( username == '' || password == ''){
        setError('Por favor preencher todos os campos')
        return
      }
      const params = new URLSearchParams();
      params.append('username', username);
      params.append('password', password);
      
      
      try{
        setLoading(true)
        const res = await service.post('/api/auth/token/',params)

        const json = await res.json()
        setLoading(false)
        if( json.token == null){
          setError(json.non_field_errors)
        }else{
          setLoading(false)
          login(json.token)
          //console.log(res.data.token)
          history.push('/app');
        }

      }catch(e){
        setLoading(false)
        console.log(e)
        setError(`Erro ao conectar no servidor.
         Tente novamente ou <a href=#> clique aqui </a> e entre em contato com o suporte`)
         setUsername("")
         setPassword("")
        }    
 
     

  }
    return (
        <Container>
          <Card>
            <div className="row">
              <div className='col-12 col-sm-6'>
                  <Center>
                    <img src={IconLock} alt="Tela de Login" style={{width: 100}}/>  
                  </Center>
              </div>
              <div className='col-12 col-sm-6'>
                <Center>
                    <Logo></Logo>
                </Center>
                <SubTitle> Rastreamento Veicular</SubTitle>
              </div>
            </div>
              <div className="row">
                <div className='col-12 col-sm-6'>
            
                  <Form onSubmit={handleSubmit} >
                    
                    {error && <Error text={error}/>}
                    {loading && <Loading/>}



                    
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

              <div className="col-12 col-md-6">
                
              </div>
              </div>
          </Card>
          
        </Container>
      );
  
}

export default App