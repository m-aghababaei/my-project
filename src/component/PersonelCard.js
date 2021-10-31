import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
    DatePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import JalaliUtils from 'material-ui-pickers-jalali-utils';
import jMoment from 'moment-jalaali';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 220,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },

}));


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



function PersonelCard(props) {
    const classes = useStyles();
    const [yearOfBirth, setYearOfBirth] = useState(null);
    const [type, setType] = useState(null);
    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());

    function submitHandler() {
        console.log("yearOfBirth: ", yearOfBirth)
        console.log("type: ", type)
        if (yearOfBirth === null || type === null) {
            setOpen(true);
        } else { }
    }

    function handleClose(event, reason) {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    function handleChangeSelect(e) {
        setType(e.target.value)
    }



    return (
        <Card style={{ width: 270, paddingBottom: 10, textAlign: "center" }}>
            <CardContent >
                <Grid container >
                    <Grid item style={{ padding: 5 }}>


                        <MuiPickersUtilsProvider utils={DateFnsUtils} >
                            <DatePicker
                                // labelFunc={date => (date ? date.format('jYYYY/jMM/jDD') : '')}
                                value={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                            />
                        </MuiPickersUtilsProvider>



                    </Grid>
                    <Grid item style={{ padding: 5 }}>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">جنسیت</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={type}
                                onChange={handleChangeSelect}
                                label="type"
                            >
                                <MenuItem value={"female"}>زن</MenuItem>
                                <MenuItem value={"man"}>مرد</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                        خطای اعتبار سنجی
                    </Alert>
                </Snackbar>
            </CardContent>
            <Button variant="contained" color="primary" onClick={() => submitHandler()}>
                نهایی کردن ثبت نام با ارایه آدرس ایمیل
            </Button>
        </Card>
    );
}
export default PersonelCard