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

export default function InfoModal({ openModal, setOpenModal, drawerState, userInfo }) {
  const [formData, setFormData] = useState({
    name: userInfo?.name || '',
    birthDate: userInfo?.birthDate || '',
    gender: userInfo?.gender || '',
    mobile: userInfo?.mobile || '',
  });
  const [showWarning, setShowWarning] = useState('');

  useEffect(() => {
    if (openModal) setFormData({ ...formData, ...userInfo });
  }, [openModal]);

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const saveInfo = () => {
    const { name, birthDate, gender, mobile } = formData;
    if (!name || !birthDate || !gender || !mobile) {
      setShowWarning('Please fill in all fields');
      return;
    }

    const obj = { ...formData, date: Date.now() };
    const data = JSON.parse(localStorage.getItem('userInfo')) || [];
    const indexToReplace = data.findIndex(x => x.mobile === obj.mobile);
    if (indexToReplace !== -1) data[indexToReplace] = obj;
    else data.unshift(obj);
    localStorage.setItem("userInfo", JSON.stringify(data));
    setOpenModal(false);
    window.location.reload();
  };

  useEffect(() => setShowWarning(''), [formData]);

  return (
    <div>
      {drawerState === 'Lushu' && 
        <Modal
          open={openModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div>
              <p className='modal-title'>User Details</p>
            </div>
            <TextField
              required
              label="Name"
              fullWidth
              value={formData.name}
              onChange={(event) => handleInputChange('name', event.target.value)}
              sx={{ marginBottom: '10px' }}
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                required
                format="DD/MM/YYYY"
                value={dayjs(formData.birthDate)}
                onChange={(event) => handleInputChange('birthDate', dayjs(event))}
                sx={{ marginBottom: '10px' }}
              />
            </LocalizationProvider>

            <FormControl sx={{ marginBottom: '10px' }} fullWidth>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                required
                labelId="demo-simple-select-label"
                value={formData.gender}
                onChange={(event) => handleInputChange('gender', event.target.value)}
              >
                <MenuItem value={'male'}>Male</MenuItem>
                <MenuItem value={'female'}>Female</MenuItem>
                <MenuItem value={'na'}>Transgender</MenuItem>
              </Select>
            </FormControl>

            <TextField
              required
              label="Mobile OR Bank Account"
              fullWidth
              value={formData.mobile}
              type='number'
              onChange={(event) => handleInputChange('mobile', event.target.value)}
              sx={{ marginBottom: '10px' }}
            />

            <div className='button-allign'>
              <Button
                variant="contained"
                color="warning"
                sx={{ marginTop: '10px', padding: '10px 24px' }}
                onClick={() => setOpenModal(false)}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="success"
                sx={{ marginTop: '10px', padding: '10px 24px' }}
                onClick={saveInfo}
              >
                Save
              </Button>
            </div>
          </Box>
        </Modal>
      }

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
