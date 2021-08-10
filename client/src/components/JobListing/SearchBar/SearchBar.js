import React from 'react';
import {Box,Button,Select,MenuItem,makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: 'fff',
        display: 'flex',    
        boxShadow: ' 0px 1px 5px rgba(0,0,0,0.1)',
        borderRadius:'5px',

    },
});


export default (props) =>{
    const classes = useStyles();
    return (
        
        <Box p={2} mt={-5} mb={2} className={classes.wrapper}>
            <Select varient='filled' defaultValue='Full time'>
                <MenuItem value='Full Time'>Full Time</MenuItem>
                <MenuItem value='Part Time'>Part Time</MenuItem>
                <MenuItem value='Contract'>Contract</MenuItem>
            </Select>
            <Select varient='filled' defaultValue='Remote'>
                <MenuItem value='Remote'>Remote</MenuItem>
                <MenuItem value='In-Office'>In-Office</MenuItem>
            </Select>
            <Button variant='contained' color='primary' disableElevation>Search</Button>
        </Box>
    )

}