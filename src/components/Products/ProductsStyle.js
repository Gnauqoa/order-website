import styled from 'styled-components';
import { styled as styledMui } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button'

export const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #150f0f;
  color: #fff;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;
export const IconPayment = styledMui(ShoppingCartIcon)`
  width: 100%;
  height: auto;

`;
export const ProductsBtnPayment = styledMui(Button)`
  display: flex;
  justify-content: center;
  algin-items: center;
  position: fixed;
  width: 62px;
  height: 60px;
  top: 30%;
  right: 40px;
  border-radius: 50%;


  transition: opacity 0.2s, top 0.2s ease-in-out;
  ${({ active }) => active ?
    `opacity: 1; top: 25%` : `opacity: 0; top: -15%`
    
  }
`;
export const AlertUint = styled.div`
  border-radius: 50%;
  color: #fff;
  background: red;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  algin-items: center;
  flex-direction: column;
  top: -20%;
  right: 60%;
  position: absolute;
  ${({ activeEffect }) => activeEffect ?
      `animation-name: example;
      animation-duration: 1s;
      @keyframes example {
        0% {
          width: 30px;
          height: 30px;
        }
        50% {
          width: 40px;
          height: 40px;
        }
        100% {
          width: 30px;
          height: 30px;
        }
      }`:``
    
  
  }
 
`
