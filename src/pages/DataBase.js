import '../App.css';
import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import dayjs from 'dayjs';
import DialogBox from '../components/DailogBox';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';


export default function DataBase() {

    const [openDialog, setOpenDialog] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState();
    const [dialogTitle, setDialogTitle] = useState('');
    const [dialogDesc, setDialogDesc] = useState('');
    const [deleteUser, setDeleteUser] = useState();

    let userInfoArray = JSON.parse(localStorage.getItem("userInfo"));

    if (!userInfoArray.length) return;

    const deleteUserAlert = (user) => {
        setDialogTitle(`Do you want to delete ${user.name}`);
        setDialogDesc(` ${user.name}    ${user.mobile}`);
        setDeleteUser(user);
        setOpenDialog(true);
    }

    const agree = () => {
        let newArray = userInfoArray.filter(x => x.mobile !== deleteUser.mobile)
        localStorage.setItem('userInfo', JSON.stringify(newArray))
        setOpenSnackbar(`${deleteUser.name} deleted successfully!`)
        setTimeout(() => {
            setOpenSnackbar('')
        }, 2000);
    }

    return (
        <>
            <DialogBox title={dialogTitle} desc={dialogDesc} setOpen={setOpenDialog} open={openDialog} agree={agree} />

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

                        {userInfoArray.map((user, index) => (<tr class="row100" key={index}>
                            <td class="column100 column1" data-column="column1">{user.name}</td>
                            <td class="column100 column2" data-column="column2">{dayjs(user.birthDate).format("DD/MM/YYYY")}</td>
                            <td class="column100 column3" data-column="column3">{user.gender}</td>
                            <td class="column100 column4" data-column="column4">{user.mobile}</td>
                            <td class="column100 column4" data-column="column4">
                                <IconButton title={`Edit ${user.name}`}><EditIcon /></IconButton> &nbsp; <IconButton><DeleteIcon onClick={() => deleteUserAlert(user)} /></IconButton></td>
                        </tr>))}

                    </tbody>
                </table>
            </div>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={2000}
                message={openSnackbar}
                color="success"
                TransitionComponent={Slide}
            />
        </>
    );
}
