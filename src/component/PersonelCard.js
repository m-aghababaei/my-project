import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function PersonelCard(props) {
    const [yearOfBirth, setYearOfBirth] = useState(null);
    const [type, setType] = useState(null);
    const [open, setOpen] = useState(false);

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
    return (
        <Card sx={{ maxWidth: 300, paddingBottom: 1, textAlign: "center" }}>
            <CardContent >
                <Grid container style={{ paddingLeft: 20 }}>
                    <Grid item style={{ padding: 5 }}>
                        <TextField
                            required
                            id="yearOfBirth"
                            label="سال تولد"
                            defaultValue={yearOfBirth}
                            onChange={(e) => setYearOfBirth(e.target.value)}
                        />
                    </Grid>
                    <Grid item style={{ padding: 5 }}>
                        <TextField
                            required
                            id="type"
                            label="جنسیت"
                            defaultValue={type}
                            onChange={(e) => setType(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                        خطای اعتبار سنجی
                    </Alert>
                </Snackbar>
            </CardContent>
            <Button size="small" onClick={() => submitHandler()}>نهایی کردن ثبت نام با ارایه آدرس ایمیل</Button>
        </Card>
    );
}
export default PersonelCard