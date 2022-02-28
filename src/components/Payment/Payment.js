import React, {useState} from 'react'
import TableCart from './TableCart/TableCart'
import SelectList from './SelectList/SelectList';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import {
  CircularProgress,
  Alert 
} from '@mui/material/';
import { 
  PaymentContainer,
  PaymentWrapper,
  PaymentTitle,
  PaymentCard,
  PaymentBtn,
  PaymentBtnIcon
} from './PaymentStyle'
import {UintTable} from '../../Data/UintTable';

export default function Payment({
    id,
    data,
    clickResetItem
}){
  const [table,setTable] = useState('');
  const [location,setLocation] = useState('');
  const [errorTable,setErrorTable] = useState(false);
  const [errorLocation,setErrorLocation] = useState(false);
  const [isPayment,setIsPayment] = useState(false);
  const [donePayment, setDonePayment] = useState(false);
  const [paymentData,setPaymentData] = useState(undefined);
  const clickPayment = () =>{
    if(location === '') {
      setErrorLocation(true);
      setErrorTable(true);
      return;
    }else if(location === 1) {
      if(table === ''){
        setErrorTable(true);
        return;
      }
    }else if(location === 0){
      return;
    }
    setIsPayment(1);
    setTimeout(function (){
      setDonePayment(true);
      setIsPayment(false);
    }, 1000);

  }
  return (
    <PaymentContainer id = {id}>
      <PaymentTitle >Thanh toán</PaymentTitle>
      <PaymentWrapper>
        <PaymentCard>        
          <TableCart 
            dataRows = {data.data}
          />
        </PaymentCard>
        <PaymentCard>
          <SelectList
            error = {errorLocation}
            disabled = {isPayment}
            required
            label = "Vị trí"
            listData = {["Tại chỗ","Mang về"]}
            value = {location}
            setValue = {setLocation}
            onClick = {() => errorLocation && setErrorLocation(false)}
          />
          {location === 1 && <SelectList
            error = {errorTable}
            required
            label = "Bàn"
            listData = {UintTable}
            value = {table}
            setValue = {setTable}
            onClick = {() => errorTable && setErrorTable(false)}
          />}
        </PaymentCard>
        <PaymentCard>
          <PaymentBtn 
            onClick = {clickPayment} 
            startIcon = {<CheckIcon/>} 
            disabled = {data.price === 0 || isPayment} 
            variant="outlined" 
            color="success"
          >
            Đặt món
          </PaymentBtn>
          <PaymentBtn 
            onClick = {clickResetItem} 
            disabled = {data.price === 0 || isPayment} 
            variant="outlined" 
            color="error"
          >
            <DeleteIcon/>
            Hủy
          </PaymentBtn>
          <a href='#menu'>
            <PaymentBtnIcon>
            <RestaurantMenuIcon/>
            </PaymentBtnIcon>
          </a>
        </PaymentCard>
      </PaymentWrapper>
      {isPayment && <> 
        <CircularProgress/>    
        <p>Xin chờ</p> 
      </>}
      {donePayment && 
        <Alert 
          severity="success"
        >
          Đặt hàng thành công, vui lòng thanh toán theo hướng dẫn
          <h4>Thanh toán qua tài khoản ngân hàng hoặc Momo</h4>
          <h4>Nội dung thanh toán: MV-0000</h4>
          <h4>Momo: 00000000</h4>
          <h4>Ngân hàng Aribank: </h4>
        </Alert>
      }
      </PaymentContainer>
  )
}
