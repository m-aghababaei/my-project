import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { tr } from 'date-fns/locale';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    }
})

function YearComponent(props) {
    const { classes, autoFocus, data, getData } = props;
    const [yearValue, setYearValue] = useState(data.valueYear);

    useEffect(function () {
        if (getData) {
            getData({
                value: yearValue
            })
        }
    }, [yearValue])

    return (
        <>
            <TextField
                style={{ width: 70 }}
                label=""
                className={classes.textField}
                value={yearValue}
                onChange={(e) => setYearValue(e.target.value)}
                margin="normal"
                variant="outlined"
                autoFocus={autoFocus}
            />
        </>
    )
}
export default withStyles(styles)(YearComponent);

