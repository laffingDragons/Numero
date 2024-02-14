import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { Button } from '@material-ui/core';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "80%",
  bgcolor: '#78c729',
  boxShadow: "24",
  color: '#282c34',
  p: "4",
  padding: '30px',
  borderRadius: '10px',
};

export default function InfoModal({ openModal, setOpenModal }) {

  const userInfo =  JSON.parse(localStorage.getItem("userInfo"))

  const [name, setName] = useState(userInfo?.name || '');
  const [birthDate, setBirthDate] = useState(userInfo?.birthDate || '');
  const [gender, setGender] = useState(userInfo?.gender || '');
  const [showWarning, setShowWarning] = useState('');
  

  const save = () =>{
    if(!name) setShowWarning('Please enter a valid name');
    else if(!birthDate) setShowWarning('Please select a valid Birthdate');
    else if(!gender) setShowWarning('Please select a valid gender');
    else{
      let obj = {
        name,
        gender,
        birthDate
      }
      localStorage.setItem("userInfo", JSON.stringify(obj));
      setOpenModal(false);
      console.log(name, gender, birthDate);
    }
  }

  useEffect(()=>setShowWarning(''),[name, gender, birthDate]);

  return (
    <div>
      <Modal
        open={openModal}
        // onClose={setOpenModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div>
          <p className='modal-title'>User Details</p>
        </div>
          <TextField
            required
            id="outlined-required"
            label="Name"
            fullWidth
            value={name}
            onChange={(event)=>setName(event.target.value)}
            sx={{marginBottom : '10px'}}
          />

          <LocalizationProvider dateAdapter={AdapterDayjs} >
            <DatePicker required format="DD/MM/YYYY" value={dayjs(birthDate)} onChange={(event)=>setBirthDate(dayjs(event))} sx={{marginBottom : '10px'}}/>
          </LocalizationProvider>


          <FormControl sx={{marginBottom : '10px'}} fullWidth>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              required
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={gender}
              label="Gender"
              onChange={(event)=>setGender(event.target.value)}
            >
              <MenuItem value={'male'}>Male</MenuItem>
              <MenuItem value={'female'}>Female</MenuItem>
              <MenuItem value={'na'}>Transgender</MenuItem>
            </Select>
          </FormControl>

          <Button variant="contained"  color="success" sx={{marginTop:'10px', padding : '10px 24px', marginLeft : 'auto', display: 'block'}} onClick={save}>Save</Button>
        </Box>
      </Modal>
      <Snackbar
        open={showWarning}
        autoHideDuration={6000}
        message={showWarning}
        color="success"
        TransitionComponent={Slide}
      />
    </div>
  );
}
