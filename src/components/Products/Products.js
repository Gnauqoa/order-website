import React, {useState} from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  IconPayment,
  ProductsBtnPayment,
  AlertUint
} from './ProductsStyle';
import ProductsItem from './ProductsItem/ProductsItem.js';

const Products = ({id,heading,data,uint,clickAddItem,clickDeleteItem}) => {
  const [active,setActive] = useState(0);
  return (
    <ProductsContainer 
      id = {id} 
      onPointerEnter = {() => setActive(1)} 
      onPointerLeave = {() => setActive(0)}
    >
      <ProductsHeading>{heading}</ProductsHeading>
      <PaymentButton active={active} uint = {uint}/>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductsItem
              key = {index}
              idItem = {index}
              name = {product.name}
              desc = {product.desc}
              price = {product.price}
              
              img = {product.img}
              uint = {product.uint}
              clickAddItem = {clickAddItem}
              clickDeleteItem = {clickDeleteItem}
            />
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};
const PaymentButton = ({active,uint}) => {
  return (
    <a href='#payment' >
      <ThemeProvider theme={theme}>
        <ProductsBtnPayment id="goPayment" variant='contained' color ="yellow" active = {active}>
          <IconPayment/>        
          {uint > 0 && <AlertUint activeEffect ={uint > 0 }>{uint} </AlertUint> }
        </ProductsBtnPayment>

      </ThemeProvider>
    </a>
  )
}
export default Products;
const theme = createTheme({
  palette: {
    yellow: {
      main: '#ffc500;',
      contrastText: '#000000',
    },
  },
});