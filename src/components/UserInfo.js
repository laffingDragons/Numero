
import '../App.css';
import  React, { useEffect, useState } from 'react';

export default function UserInfo({name, birthDate, gender}) {

  return (
    
        <div className="user-info">
          <p>{name}</p>
          <p>{gender}</p>
          <p>{birthDate}</p>
        </div>
      
  );
};


