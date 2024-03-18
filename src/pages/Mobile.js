import '../App.css';
import React, { useState } from 'react';
import { addDigitsUntilSingle, calculateWeightage } from '../helper/calculation';

export default function Mobile({ userInfo, birthDate, driver, conductor, kua }) {

  const mobileInfo = userInfo?.mobile;

  
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

            <div className='paper rotating-card'>
            <h1 className='white-check'>Mobile no. OR Bank account Analysis</h1>
                    {mobileInfo}
                    <br />
                    <span className='big-no'>{calcMobile()}</span> 
                    <p>{calculateWeightage(calcMobile())}</p>
            </div>
        </>
    );
}
