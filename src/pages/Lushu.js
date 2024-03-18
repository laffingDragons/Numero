import '../Lushu.css';
import React, { useState } from 'react';
import { countOccurrences } from '../helper/calculation';

import dayjs from 'dayjs';


export default function Lushu({ birthDate, driver, conductor, kua }) {

    const checkForNoExistance = (no) => {
        no = "" + no;
        let tempArray = [];

        if (driver[0] === (no)) tempArray.push(no);
        if (conductor[0] === (no)) tempArray.push(no);
        if (kua[0] === (no)) tempArray.push(no);

        const birthdate = dayjs(birthDate).format('DD/MM/YYYY');
        
        const numericString = birthdate.replace(/\D/g, '');
        
        let occurrences = countOccurrences(numericString, no);

        let obj = {
            birthDate: Array(occurrences).fill(no).join(''),
            numbersDerive: tempArray.join(''),
            combine : [...Array(occurrences).fill(no), ...tempArray]
        }

        if (!obj.birthDate.length && !obj.numbersDerive.length) return null
        else return obj;
    };

    const planePercentages = (planeArray) => {
        let percent = 0;
    
        if (checkForNoExistance(planeArray[0])?.combine?.length) percent += 33;
        if (checkForNoExistance(planeArray[1])?.combine?.length) percent += 33;
        if (checkForNoExistance(planeArray[2])?.combine?.length) percent += 33;
    
        return (percent === 99 ? 100 : percent) + '%';
    };
    

    return (
        <>
            <div >
            <h1 className='white-check'>Lushu Grid</h1>

                <table>

                    <tr>
                        <td className='small-f white-check'>{planePercentages([4,5,6])}</td>
                        <td className='small-f'>{planePercentages([4,3,8])}</td>
                        <td className='small-f'>{planePercentages([9,5,1])}</td>
                        <td className='small-f'>{planePercentages([2,7,6])}</td>
                        <td className='small-f white-check'>{planePercentages([2,5,8])}</td>
                    </tr>

                    <tr>
                        <td className='small-f'>{planePercentages([4,9,2])}</td>
                        <td className='big-f'>
                            {checkForNoExistance(4) === null && <span className="dark-green-check">X</span>}
                            <span className="white-check">{checkForNoExistance(4)?.['numbersDerive']}</span>
                            <span className="black-check">{checkForNoExistance(4)?.['birthDate']}</span>
                        </td>
                        <td className='big-f'>
                            {checkForNoExistance(9) === null && <span className="dark-green-check">X</span>}
                            <span className="white-check">{checkForNoExistance(9)?.['numbersDerive']}</span>
                            <span className="black-check">{checkForNoExistance(9)?.['birthDate']}</span>
                        </td>
                        <td className='big-f'>
                            {checkForNoExistance(2) === null && <span className="dark-green-check">X</span>}
                            <span className="white-check">{checkForNoExistance(2)?.['numbersDerive']}</span>
                            <span className="black-check">{checkForNoExistance(2)?.['birthDate']}</span>
                        </td>
                    </tr>

                    <tr>
                        <td className='small-f'>{planePercentages([3,5,7])}</td>
                        <td className='big-f'>
                            {checkForNoExistance(3) === null && <span className="dark-green-check">X</span>}
                            <span className="white-check">{checkForNoExistance(3)?.['numbersDerive']}</span>
                            <span className="black-check">{checkForNoExistance(3)?.['birthDate']}</span>
                        </td>
                        <td className='big-f'>
                            {checkForNoExistance(5) === null && <span className="dark-green-check">X</span>}
                            <span className="white-check">{checkForNoExistance(5)?.['numbersDerive']}</span>
                            <span className="black-check">{checkForNoExistance(5)?.['birthDate']}</span>
                        </td>
                        <td className='big-f'>
                            {checkForNoExistance(7) === null && <span className="dark-green-check">X</span>}
                            <span className="white-check">{checkForNoExistance(7)?.['numbersDerive']}</span>
                            <span className="black-check">{checkForNoExistance(7)?.['birthDate']}</span>
                        </td>
                    </tr>

                    <tr>
                        <td className='small-f'>{planePercentages([8,1,6])}</td>
                        <td className='big-f'>
                            {checkForNoExistance(8) === null && <span className="dark-green-check">X</span>}
                            <span className="white-check">{checkForNoExistance(8)?.['numbersDerive']}</span>
                            <span className="black-check">{checkForNoExistance(8)?.['birthDate']}</span>
                        </td>
                        <td className='big-f'>
                            {checkForNoExistance(1) === null && <span className="dark-green-check">X</span>}
                            <span className="white-check">{checkForNoExistance(1)?.['numbersDerive']}</span>
                            <span className="black-check">{checkForNoExistance(1)?.['birthDate']}</span>
                        </td>
                        <td className='big-f'>
                            {checkForNoExistance(6) === null && <span className="dark-green-check">X</span>}
                            <span className="white-check">{checkForNoExistance(6)?.['numbersDerive']}</span>
                            <span className="black-check">{checkForNoExistance(6)?.['birthDate']}</span>
                        </td>
                    </tr>
                </table>
            </div>
        </>
    );
}
