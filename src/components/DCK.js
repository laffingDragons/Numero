import '../App.css';
import React, { useState } from 'react';

export default function DCK({driver, conductor, kua}) {


    return (
        <div className='app-upper'>
       
                <div className='paper rotating-card '>
                    Driver
                    <br />
                    <span className='big-no'>{driver}</span> 
                </div>
          
                <div className='paper rotating-card '>
                    Conductor
                    <br />
                    <span className='big-no'>{conductor}</span> 
                </div>
          
                <div className='paper rotating-card '>
                    Kua
                    <br />
                    <span className='big-no'>{kua}</span> 
                </div>
          
        </div>
    );
}
