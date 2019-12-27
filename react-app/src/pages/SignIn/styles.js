import styled from "styled-components";
import {primary, secondary, dark, white, danger} from '../../styles/colors'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: rgb(52,166,191);
  background: linear-gradient(180deg, rgba(52,166,191,1) 0%, rgba(45,91,204,1) 100%);

`;

export const SubTitle = styled.h2`
  font-size: 1.5em;
  text-align: center;
`;

export const Card = styled.div`
  background: ${white};
  border-radius: 15px;
  width: 1100px;
  min-height: 600px;
  min-width: 400px;
  padding : 30px;

  -webkit-box-shadow: 0px 5px 10px 3px rgba(0,0,0,0.53);
  -moz-box-shadow: 0px 5px 10px 3px rgba(0,0,0,0.53);
  box-shadow: 0px 5px 10px 3px rgba(0,0,0,0.53);
`;

export const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-Items: center;
  justify-Content: center;
  padding: 20px;
`;

export const Form = styled.form`
 

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3em;

  
  p {
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  input {
    flex: 1;
    min-height: 46px;
    margin-bottom: 15px;
    padding: 0 20px;
    color: #777;
    font-size: 15px;
    width: 100%;
    border: 1px solid #ddd;
    &::placeholder {
      color: #999;
    }
  }
  input:focus {
    
    &::placeholder {
      font-size: 17px;
    }

  }

  button {
    color: ${white};
    font-size: 16px;
    background: ${secondary};
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 100%;
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: #999;
    text-decoration: none;
  }
`;