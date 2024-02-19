import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import '../App.css';
import SideDrawer from './SideDrawer';
import dayjs from 'dayjs';

export default function ButtonAppBar({sideDraweOpen, setSideDraweOpen, userInfo, setOpenModal, drawerState, setDrawerState}) {

  return (
    <Box sx={{ flexGrow: 1 , zIndex: 99}} >
      <AppBar position="sticky" class='primary-appBar'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={()=>setSideDraweOpen(!sideDraweOpen)}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {userInfo ? userInfo.name : 'Numero'}
          </Typography>
          <Button onClick={()=>setOpenModal(true)} color="inherit">{userInfo ? dayjs(userInfo.birthDate).format("DD/MM/YYYY") : 'Login'}</Button>
        </Toolbar>
      </AppBar>
      <SideDrawer sideDraweOpen={sideDraweOpen} setSideDraweOpen={setSideDraweOpen} drawerState={drawerState} setDrawerState={setDrawerState}/>
    </Box>
  );
}