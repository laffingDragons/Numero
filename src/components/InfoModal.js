import React, { useState } from 'react';
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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "400",
  bgcolor: '#78c729',
  boxShadow: "24",
  color: '#282c34',
  p: "4",
  padding: '30px',
  borderRadius: '10px',
};

export default function InfoModal({ openModal, setOpenModal }) {

  const [name, setName] = useState('');
  const [birthDate, seBirthDate] = useState('');
  const [gender, setGender] = useState('');

  const handleChange = () => {

  }

  return (
    <div>
      <Modal
        open={openModal}
        // onClose={setOpenModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

          <TextField
            required
            id="outlined-required"
            label="Name"
            fullWidth
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker />
          </LocalizationProvider>


          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={gender}
              label="Gender"
              onChange={handleChange}
            >
              <MenuItem value={'male'}>Male</MenuItem>
              <MenuItem value={'female'}>Female</MenuItem>
              <MenuItem value={'na'}>Transgender</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
}
