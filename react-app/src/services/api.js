import axios from "axios";
import { getToken } from "./auth";
const server = 'http://localhost:2000'

const post = (uri,obj) => {
  
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  }

// if (token) {
//   headers.Autorization = `Token ${token}`  
// }

return fetch(`${server}${uri}`,{
  headers,
  method : 'POST',
  body: obj
})

}


const get = (uri) =>{
  const token = getToken();
  const headers = {
    'Accept': 'application/json',
    'Autorization': `Token ${token}`
  }

  return fetch(`${server}${uri}`,{
    
    method: 'GET'
  })


}
  


export default { post, get }