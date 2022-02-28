import styled from 'styled-components';

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #fdc500;
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;
  border-radius: 5rem;
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
export const ProductBtnDouble= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: transparent;
    height: 3rem;
`;
export const ProductNumberItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #ffc500;
    height: 100%;
    width: 3rem;
`;
export const ProductBtnRight= styled.button`
  font-size: 1rem;
  height: 3rem;
  width: 3rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;
  border-radius: 0 5rem 5rem 0;
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
export const ProductBtnLeft= styled.button`
  font-size: 1rem;
  border: none;
  height: 3rem;
  width: 3rem;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;
  border-radius: 5rem 0 0 5rem ;
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;