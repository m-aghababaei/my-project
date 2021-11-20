import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    }
})

function MonthComponent(props) {
    const { classes, autoFocus, data,getData } = props;
    const [monthValue, setMonthValue] = useState(data.valueMonth);

    useEffect(function () {
        if (getData) {
            getData({
                value: monthValue
            })
        }
    }, [monthValue])

    return (
        <>
            <TextField
                style={{ width: 46 }}
                label=""
                className={classes.textField}
                value={monthValue}
                onChange={(e) => setMonthValue(e.target.value)}
                margin="normal"
                variant="outlined"
                autoFocus={autoFocus}
            />
        </>
    )
}
export default withStyles(styles)(MonthComponent);

