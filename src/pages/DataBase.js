import '../App.css';
import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import dayjs from 'dayjs';

export default function DataBase() {

    const userInfoArray = JSON.parse(localStorage.getItem("userInfo"));
    
    if(!userInfoArray.length) return;

    return (
        <>
         <div class="table100 ver6 m-b-110">
<table data-vertable="ver6">
<thead>
<tr class="row100 head">
<th class="column100 column1" data-column="column1">Name</th>
<th class="column100 column2" data-column="column2">Brith Date</th>
<th class="column100 column3" data-column="column3">Gender</th>
<th class="column100 column4" data-column="column4">Phone</th>
<th class="column100 column5" data-column="column5"></th>
</tr>
</thead>
<tbody>
    
{userInfoArray.map((user, index)=>( <tr class="row100" key={index}>
<td class="column100 column1" data-column="column1">{user.name}</td>
<td class="column100 column2" data-column="column2">{dayjs(user.birthDate).format("DD/MM/YYYY")}</td>
<td class="column100 column3" data-column="column3">{user.gender}</td>
<td class="column100 column4" data-column="column4">{user.mobile}</td>
<td class="column100 column4" data-column="column4"><EditIcon title='Edit' /> &nbsp; <DeleteIcon /></td>
</tr>))}

</tbody>
</table>
</div>
        </>
    );
}
