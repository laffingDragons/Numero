import '../App.css';
import React, { useState } from 'react';
import { calculateWeightage } from '../helper/calculation';

export default function DCK({driver, conductor, kua}) {


    return (
        <div className='app-upper'>
       
                <div className='paper rotating-card '>
                    Driver
                    <br />
                    <span className='big-no'>{driver}</span> 
                    <p>{calculateWeightage(driver)}</p>
                </div>
          
                <div className='paper rotating-card '>
                    Conductor
                    <br />
                    <span className='big-no'>{conductor}</span> 
                    <p>{calculateWeightage(conductor)}</p>
                </div>
          
                <div className='paper rotating-card '>
                    Kua
                    <br />
                    <span className='big-no'>{kua}</span> 
                    <p>{calculateWeightage(kua)}</p>
                </div>
          
        </div>
    );
}
