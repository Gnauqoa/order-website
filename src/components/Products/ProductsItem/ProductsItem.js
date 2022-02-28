import React from 'react';
import {
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton,
  ProductBtnLeft,
  ProductBtnRight,
  ProductBtnDouble,
  ProductNumberItem
} from './ProductsItemStyle';

const ProductsItem = ({img,alt,name,desc,price,uint,idItem,clickAddItem,clickDeleteItem}) => {

  return (
    <ProductCard>
      <ProductImg src={img} alt={alt} />
      <ProductInfo>
        <ProductTitle>{name}</ProductTitle>
        <ProductDesc>{desc}</ProductDesc>
        <ProductPrice>{price/1000 + "k"}</ProductPrice>
        {uint === 0 ? (
          <ProductButton onClick = {() => clickAddItem(idItem)}>Mua</ProductButton>
        ) : (
          <ProductBtnDouble>          
            <ProductBtnLeft onClick = {() => clickDeleteItem(idItem)}>-</ProductBtnLeft>
            <ProductNumberItem>
              <ProductDesc>{uint}</ProductDesc>
            </ProductNumberItem>
            <ProductBtnRight onClick={() => clickAddItem(idItem)}>+</ProductBtnRight>
          </ProductBtnDouble>

        )
        }
        
      </ProductInfo>
    </ProductCard>
  );
};

export default ProductsItem;
  