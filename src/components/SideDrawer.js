
import '../App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function SideDrawer({sideDraweOpen, setSideDraweOpen, drawerState, setDrawerState}) {

  const list = () => (
    <Box
      role="presentation"
      onClick={()=>setSideDraweOpen(false)}
      onKeyDown={()=>setSideDraweOpen(false)}
      className='primary-dark-sidebar'
    >
      <List >
        {['Lushu'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={()=>setDrawerState(text)}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['DataBase'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={()=>setDrawerState(text)}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {
        <React.Fragment>
          <Drawer
            anchor={'left'}
            open={sideDraweOpen}
            onClose={()=>setSideDraweOpen(false)}
          >
            {list()}
          </Drawer>
        </React.Fragment>
        }
    </div>
  );
}
