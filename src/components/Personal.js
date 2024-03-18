import '../App.css';
import React, { useState } from 'react';
import { calcPY } from '../helper/calculation';

export default function Personal({ userInfo }) {

    return (

            <div className='paper rotating-card '>
                <div>
                    Personal year
                    <br />
                    <span className='big-no'>{calcPY({ userInfo }).py}</span>
                </div>

                <div>
                    Personal month
                    <br />
                    <span className='big-no'>{calcPY({ userInfo }).pm}</span>
                </div>

                <div>
                    Personal day
                    <br />
                    <span className='big-no'>{calcPY({ userInfo }).pd}</span>
                </div>
            </div>

    );
}