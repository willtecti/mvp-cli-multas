import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 50px;
    animation: move 10s infinite;

    @keyframes move {
        0%   {margin-left: 0%;}
       
        100% {margin-left: 100%;}
      }
`