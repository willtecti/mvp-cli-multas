import styled from "styled-components";
import {primary, secondary, danger, gray, dark, white} from '../../styles/colors'
import { darken } from "polished";

export const Button = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 60px;
  border: none;
  background-color: ${({ color }) => color};
  margin-top: 10px;
  color: #fff;
  i {
    font-size: 18px;
  }
  &:hover {
    background-color: ${({ color }) => darken(0.05, color)};
  }
  &:active {
    background-color: ${({ color }) => darken(0.07, color)}
  }
`;

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 10px;
  display: flex;
  flex-direction: column;
`;

export const Pin = styled.div`
  padding: 5px;
  background: ${primary};
  border: 0;
  border-radius: 5px;
  a {
    color: #fff;
    font-size: 14px;
    text-decoration: none;
  }
`;


export const Container = styled.div`
position: absolute;
top: 0;
left: 0;
 
`;