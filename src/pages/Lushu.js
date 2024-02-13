import Paper from '@mui/material/Paper';
import '../App.css';
import React, { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

export default function Lushu() {


    return (
        <Grid container spacing={10}>
            <Grid xs={8} md={4}>
                <Paper elevation={3}>
                    Driver
                </Paper>
            </Grid>
            <Grid xs={8} md={4}>
                <Paper elevation={3}>
                    Conductor
                </Paper>
            </Grid>
            <Grid xs={8} md={4}>
                <Paper elevation={3}>
                    Kua
                </Paper>
            </Grid>
        </Grid>
    );
}
