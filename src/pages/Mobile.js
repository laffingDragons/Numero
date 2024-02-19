import '../App.css';
import React, { useState } from 'react';
import { addDigitsUntilSingle, calculateWeightage } from '../helper/calculation';

export default function Mobile({ birthDate, driver, conductor, kua }) {

  const mobileInfo = JSON.parse(localStorage.getItem("mobileInfo")).mobile;

  
  const calcMobile = () => {
      if (!mobileInfo) return '?';
      
      
      const digitArray = mobileInfo.split('').map(Number); // Result: [2, 3, 1, 1, 1, 9, 9, 5]
      
      const sum = digitArray.reduce((acc, digit) => acc + digit, 0); // Result: 31
      
      const singleDigitSum = mobileInfo.split('').map(Number).reduce((acc, digit) => acc + digit, 0); // Calculate initial sum
      
      const output = addDigitsUntilSingle(singleDigitSum);

    return `${output}/${sum}`;
}
    return (
        <>
            <h1 className='white-check'>Mobile no. OR Bank account Analysis</h1>

            <div className='paper rotating-card mx-auto'>
                    {mobileInfo}
                    <br />
                    <span className='big-no'>{calcMobile()}</span> 
                    <p>{calculateWeightage(calcMobile())}</p>
            </div>
        </>
    );
}
