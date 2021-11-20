import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    }
})

function DayComponent(props) {
    const { classes, autoFocus, data,getData } = props;
    const [dayValue, setsetDayVaule] = useState(data.valueDay);

    useEffect(function () {
        if (getData) {
            getData({
                value: dayValue
            })
        }
    }, [dayValue])

    return (
        <>
            <TextField
                style={{ width: 46,height:10 }}
                label=""
                className={classes.textField}
                value={dayValue}
                onChange={(e) => setsetDayVaule(e.target.value)}
                margin="normal"
                variant="outlined"
                autoFocus={autoFocus}
            />
        </>
    )
}
export default withStyles(styles)(DayComponent);

