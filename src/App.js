import './App.css';
import ButtonAppBar from './components/ButtonAppBar';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import Lushu from './pages/Lushu';
import DCK from './components/DCK';
import InfoModal from './components/InfoModal';
import dayjs from 'dayjs';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import {calcDriver , calcConductor, calcKua} from './helper/calculation';
function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};


function App(props) {

  const [sideDraweOpen, setSideDraweOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"))


  useEffect(() => {
    if (!userInfo) setOpenModal(true);
  }, []);

  useEffect(()=>{

  },[openModal]);


  return (
    <div className="App">
      <InfoModal openModal={openModal} setOpenModal={setOpenModal} />
      <ButtonAppBar sideDraweOpen={sideDraweOpen} setSideDraweOpen={setSideDraweOpen} userInfo={userInfo} setOpenModal={setOpenModal}/>
      
      <div className='color-bg'>
      {userInfo &&
        <DCK driver={calcDriver({userInfo})} conductor={calcConductor({userInfo})} kua={calcKua({userInfo})}/> }

      {
        userInfo &&
        <Lushu driver={calcDriver({userInfo})} conductor={calcConductor({userInfo})} kua={calcKua({userInfo})} birthDate={userInfo.birthDate}/>
      }
      </div>


      <Fab color="secondary" aria-label="edit" sx={{
        position: 'absolute',
        bottom: 16,
        right: 16,
        background : '#458705'
      }} 
      onClick={()=>setOpenModal(true)}>
        <EditIcon />
      </Fab>
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
}

export default App;
