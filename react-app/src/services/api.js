import axios from 'axios';
import { getToken } from "./auth";


const server = 'http://localhost:2000'

const post = (uri,obj) => {
  
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  }
return fetch(`${server}${uri}`,{
  headers,
  method : 'POST',
  body: obj
})

}



const get = (uri) =>{
  const token = getToken();
  const headers = new Headers()
  headers.append('Authorization', `Token ${token}`) 
  headers.append('Accept', 'application/json')
  headers.append("Content-Type", "text/plain");
  headers.append("Content-Length", "0".toString());
    

  console.log('headers',headers.get('Authorization'))
  console.log('token',token)

  return axios.get(`${server}${uri}`,{
   
    headers,
  

  })


}
  


export default { post, get,  }