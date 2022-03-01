import React, {useState} from 'react'
import TableCart from './TableCart/TableCart'
import SelectList from './SelectList/SelectList';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { AddressLv2Data,AddressLv3Data } from '../../Data/AddressData';
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

  const [isPayment,setIsPayment] = useState(false);
  const [donePayment, setDonePayment] = useState(false);
  const [paymentData,setPaymentData] = useState(undefined);
  const [addressLv2,setAddressLv2] = useState('');
  const [addressLv3,setAddressLv3] = useState('');
  const [checkError,setCheckError] = useState(false);

  const clickPayment = () =>{
    setCheckError(true);

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
            error = {checkError && location === ''}
            disabled = {isPayment}
            required
            label = "Vị trí"
            listData = {["Tại chỗ","Mang về"]}
            value = {location}
            setValue = {setLocation}
          />
          {location === 1 && <SelectList
            error = {checkError && table === '' }
            required
            label = "Bàn"
            listData = {UintTable}
            value = {table}
            setValue = {setTable}
          />}
          {location === 2 && <> 
            <SelectList
              error = {checkError && addressLv2 === ''}
              label = {"Huyện"}
              listData = {AddressLv2Data}
              value = {addressLv2}
              setValue = {setAddressLv2}
            />
            <SelectList
              error = {checkError && addressLv3 === ''}
              label = {"Xã"}
              listData = {AddressLv3Data[addressLv2-1]}
              value = {addressLv3}
              setValue = {setAddressLv3}
            />
          </>}
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
          <p>Thanh toán qua tài khoản ngân hàng hoặc Momo</p>
          <p>Nội dung thanh toán: MV-0000</p>
          <p>Momo: 00000000</p>
          <p>Ngân hàng Aribank: </p>
        </Alert>
      }
      </PaymentContainer>
  )
}
