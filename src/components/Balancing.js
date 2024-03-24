import '../BorderedCard.css';
import React from 'react';
import { addAllNo, nameToNumber } from '../helper/balancing';
import { addDigitsUntilSingle } from '../helper/calculation';

export default function Balancing({ userInfo }) {

    return (
            <>
            <div className='bordered-card-container'>
                <div className='bordered-card'>
                    First name
                    <br />
                    <span className='big-no'>{addDigitsUntilSingle(nameToNumber(userInfo?.name)[0])}/{nameToNumber(userInfo?.name)[0]}</span>

                </div>

               {nameToNumber(userInfo?.name).length >= 3 &&  nameToNumber(userInfo?.name).slice(1, -1).map((x,index)=>{
                        return(
                            <div className='bordered-card'>
                            Middle name
                                                <br />
                            <span className='big-no'>{addDigitsUntilSingle(nameToNumber(userInfo?.name)[index+1])}/{nameToNumber(userInfo?.name)[index+1]}</span>
                            </div>
                        )
                    })
                }


                <div className='bordered-card'>
                    Last name
                    <br />
                    <span className='big-no'>{addDigitsUntilSingle(nameToNumber(userInfo?.name)[nameToNumber(userInfo?.name).length - 1])}/{nameToNumber(userInfo?.name)[nameToNumber(userInfo?.name).length - 1]}</span>

                </div>

            </div>

            <div className='bordered-card-container'>
            <div className='bordered-card-blue'>
                    Overall name
                    <br />
                    <span className='big-no'>{addDigitsUntilSingle(addAllNo(nameToNumber(userInfo?.name))[0])}/{addAllNo(nameToNumber(userInfo?.name))[0]}</span>

                </div>

                <div className='bordered-card-blue'>
                    Overall name (without Middle name)
                    <br />
                    <span className='big-no'>{addDigitsUntilSingle(addAllNo(nameToNumber(userInfo?.name))[1])}/{addAllNo(nameToNumber(userInfo?.name))[1]}</span>
                </div>
            </div>

            </>
    );
}