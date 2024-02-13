import Paper from '@mui/material/Paper';
import '../App.css';
import React, { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

export default function DCK() {


    return (
        <div className='app-upper'>
       
                <div className='paper'>
                    Driver
                    <br />
                    <span className='big-no'>5</span> 
                </div>
          
                <div className='paper'>
                    Conductor
                    <br />
                    <span className='big-no'>5</span> 

                </div>
          
                <div className='paper'>
                    Kua
                    <br />
                    <span className='big-no'>5</span> 

                </div>
          
        </div>
    );
}
