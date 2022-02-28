import React, { useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero';
import Products from './components/Products/Products';
import Payment from './components/Payment/Payment';
import Footer from './components/Footer';
import { productData } from './Data/Menu';

function App() {
  const [cart,setCart] = useState(productData);  

  const handledAddItemCart = (id) =>{
    let data =  [...cart.data]; 
    ++data[id].uint;
    
    const save = {
      price: cart.price + data[id].price,
      uint: ++cart.uint,
      data
    }
    setCart(save);
  }
  const handledDeleteItemCart = (id) =>{
    let data = [...cart.data]; 

    if(data[id].uint === 0) return;
    --data[id].uint;
    const save = {
      price: cart.price - data[id].price,
      uint: --cart.uint,
      data
    }
    setCart(save);
  }
  const handledResetItemCart = () =>{
    let save = productData; 

    save.data.map((a,index) => {
      save.data[index].uint = 0;
      return ({a:0})
    })

 
    setCart({...productData});
  }
  return (
    <Router>
    <Hero />
    <Products 
      data = {cart.data} 
      uint = {cart.uint}
      clickAddItem = {handledAddItemCart}
      clickDeleteItem = {handledDeleteItemCart}
      heading = "Gọi món bạn thích"
      id = "menu"
    />
    <Payment 
      data = {cart}
      clickResetItem = {handledResetItemCart}
      id = "payment"
    />
    <Footer />
  </Router>
  )

}

export default App;
