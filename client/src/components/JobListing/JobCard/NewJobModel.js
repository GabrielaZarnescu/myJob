import React from 'react';
import {IconButton,Box,makeStyles, Grid, Select, MenuItem, Dialog, FilledInput,DialogTitle,DialogContent, DialogActions,Button} from '@material-ui/core';
import {Close as CloseIcon} from '@material-ui/icons'

const useStyles = makeStyles((theme) =>({
    skillChip: { 
        margin: theme.spacing(0.5),
        padding: theme.spacing(0.75),
        fontSize: '14.5px',
        borderRadius:'5px',
        transition: '3s',
        cursor:'pointer',
        fontWeight: 600,
        border: '1px solid ${theme.palette.secondary.main}',
        color: theme.palette.secondary.main,
        cursor:'pointer',
        
    '&:hover':{
            backgroudcolor: theme.palette.secondary.main,
            color :'#fff',
        }
        },

}));
export default (props) => {
    const classes = useStyles();
    const skills = [
        'Javascript',
        'React',
        'C++',
        'Python',
        'MongoDB',
        'Java',
        'Php',
        'HTML&CSS',
        'SWIFT',
        'RUBY',
    ]
return(
    <Dialog open={true} fullWidth>
        <DialogTitle>
            <Box display='flex' justifyContent='space-between' alignItems='center'>
            Post a job
            <IconButton>
            <CloseIcon></CloseIcon>
            </IconButton>
            </Box>
        </DialogTitle>
        <DialogContent>
            <Grid container spacing = {2}>
                <Grid item xs={6}>
                <FilledInput placeholder="Job Title *" disableUnderline fullwidth></FilledInput>
                </Grid>
                <Grid item xs={6}>
                <Select fullWidth disableUnderline varient='filled' defaultValue='Full time'>
                    <MenuItem value='Full Time'>Full Time</MenuItem>
                    <MenuItem value='Part Time'>Part Time</MenuItem>
                    <MenuItem value='Contract'>Contract</MenuItem>
                </Select>
                </Grid>
                <Grid item xs={6}>
                    <FilledInput placeholder="Company name *" disableUnderline fullwidth></FilledInput>
                </Grid>
                <Grid item xs={6}>
                    <FilledInput placeholder="Company URL *" disableUnderline fullwidth></FilledInput>
                </Grid>
                <Grid item xs={6}>
                <Select  fullWidth disableUnderline varient='filled' defaultValue='Full time Remote'>
                    <MenuItem value='Remote'>Remote</MenuItem>
                    <MenuItem value='In-Office'>In-Office</MenuItem>
                </Select>
                <Grid item xs={6}>
                    <FilledInput placeholder="Job link *" disableUnderline fullwidth></FilledInput>
                </Grid>
                <Grid item xs={12}>
                    <FilledInput placeholder="Job Description *" disableUnderline fullwidth multiline rows={4}></FilledInput>
                </Grid>
                </Grid>
            </Grid>
            <Box mt={2}>
                <Typography>Skills</Typography>
                <Box display='flex'>
                    {skills.map((skill) => ( 
                    <Box className={classes.skillChip} key={skill}>{skill}</Box>
                    ))}
                </Box>
            </Box>
        </DialogContent>
        <DialogActions>
            <Box color='red' width='100%' display='flex' justifyContent='space-between' alignItems='center'>
                <Typography variant='cation'>
                Required field
                </Typography>
                <Button varient='contained' disableElevation color='primary'>Post job</Button>
            </Box>
        </DialogActions>
    </Dialog>

);

};