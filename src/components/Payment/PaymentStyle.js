import styled from 'styled-components';
import { styled as styledMui } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button'

export const PaymentContainer = styled.div`  
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
    margin: 3%;
`;
export const PaymentWrapper = styled.div`  
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;   
    width: 100%;
    > * {
        margin-left: 10px;
        margin-right: 10px;
    }
    
`;
export const PaymentCard = styled.div`  
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    width: 100%;
    > * {
        margin-bottom: 20px;
    }
   
`;
export const PaymentTitle = styled.div`  
    font-size: clamp(2rem, 2.5vw, 3rem);
    text-align: center;
    margin-bottom: 2rem;
`;
export const PaymentBtn = styledMui(Button)`
   width: 150px;
   margin-bottom: 15px;
`;
export const PaymentBtnIcon = styledMui(IconButton)`
   width: 150px;
   margin-bottom: 15px;
`;


