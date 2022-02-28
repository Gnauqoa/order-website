import React from 'react'
import {
    Select,
    FormHelperText,
    FormControl,
    MenuItem,
    InputLabel,
    Box, 
} from '@mui/material/';
export default function SelectList({
    value,
    setValue,
    minWidth,
    label,
    listData,
    required,
    error,
    disabled,
    onClick
}){
    const handleChange = (e) => {   
      setValue(e.target.value);
    }
    return(
      <Box onClick = {onClick} sx={{ minWidth: minWidth > 0 ? minWidth : 120 }}>
      <FormControl fullWidth disabled = {disabled} required = {required} error = {error}>
          <InputLabel>{label}</InputLabel>
          <Select
            label={label}
            value = {value}
            onChange = {handleChange}
            disabled = {disabled}
          >
            {listData && listData.map((text,index) => 
              <MenuItem
                key = {index + text + "list" + index}
                value = {index+1}
              >
                {text}
              </MenuItem>
            )}
          </Select>       
          {error && <FormHelperText>{"Nhập " + label}</FormHelperText>}
        </FormControl>
      </Box>
    )
}
