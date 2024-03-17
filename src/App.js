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
import EditIcon from '@mui/icons-material/Edit';
import { calcDriver, calcConductor, calcKua } from './helper/calculation';
import Mobile from './pages/Mobile';
import DataBase from './pages/DataBase';
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
  const userInfoArray = JSON.parse(localStorage.getItem("userInfo"));
  const [drawerState, setDrawerState] = useState('Lushu');
  const [userInfo, setUserInfo] = useState(userInfoArray.length ? userInfoArray[0] : '')
  console.log('🚀___ ~ userInfo_______ :', userInfoArray);

  useEffect(() => {
    if (drawerState === 'Lushu') {
      if (!userInfo) setOpenModal(true);
    }
  }, []);

  useEffect(() => {

  }, [openModal]);


  return (
    <div className="App" id='back-to-top-anchor'>
      <ButtonAppBar sideDraweOpen={sideDraweOpen} setSideDraweOpen={setSideDraweOpen} userInfo={userInfo} setOpenModal={setOpenModal} drawerState={drawerState} setDrawerState={setDrawerState} />

      <div className='color-bg'>
        {userInfo &&
          <DCK driver={calcDriver({ userInfo })} conductor={calcConductor({ userInfo })} kua={calcKua({ userInfo })} />}

        {
          userInfo && drawerState === 'Lushu' && (<>
          <Lushu driver={calcDriver({ userInfo })} conductor={calcConductor({ userInfo })} kua={calcKua({ userInfo })} birthDate={userInfo.birthDate} />
          <Mobile userInfo={userInfo} driver={calcDriver({ userInfo })} conductor={calcConductor({ userInfo })} kua={calcKua({ userInfo })} birthDate={userInfo.birthDate} />
          </>)
          }


        {
          userInfo && drawerState === 'DataBase' && <DataBase />
        }
      </div>



      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>

      <Fab color="secondary" aria-label="edit" sx={{
        background: '#458705',
        position: 'fixed', bottom: 8, right: 16
      }}
        onClick={() => setOpenModal(true)}>
        <EditIcon />
      </Fab>
      <InfoModal openModal={openModal} setOpenModal={setOpenModal} drawerState={drawerState} />

    </div>
  );
}

export default App;
