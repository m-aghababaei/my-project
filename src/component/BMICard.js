import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '25ch',
    },
}));


function BMICard(props) {
    const classes = useStyles();


    function submitHandler() {

    }


    return (
        <Card style={{ width: 270, paddingBottom: 10, textAlign: "center" }}>
            <CardContent >
                <Grid container >
                    <Grid item style={{ padding: 5 }}>
                        <TextField
                            label="قد خود را به سانتی متر وارد کنید"
                            id=""
                            className={clsx(classes.margin, classes.textField)}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">Cm</InputAdornment>,
                            }}
                            variant="outlined"
                            type="number"
                            onInput={(e) => {
                                e.target.value = Math.max(0, parseFloat(e.target.value)).toString().slice(0, 12)
                            }}
                        />
                    </Grid>
                    <Grid item style={{ padding: 5 }}>
                        <TextField
                            label="وزن خود را به کیلوگرم وارد کنید"
                            id=""
                            className={clsx(classes.margin, classes.textField)}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                            }}
                            variant="outlined"
                            required={true}
                            type="number"
                            onInput={(e) => {
                                e.target.value = Math.max(0, parseFloat(e.target.value)).toString().slice(0, 12)
                            }}
                        />
                    </Grid>
                </Grid>

            </CardContent>
            <Button variant="contained" color="primary" onClick={() => submitHandler()}>
                ذخیره کن
            </Button>
        </Card>
    );
}
export default BMICard