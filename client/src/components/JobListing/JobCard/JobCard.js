import React from'react';
import { Box,Grid,Typography, Button, makeStyles, ThemeProvider } from '@material-ui/core';
import Header from '../Header/Header';
import {differenceInMinutes} from 'date-fns';

const skills = ["Javascript", "React.js", "Node.js"];

const useStyles = makeStyles((theme)({
    wrapper:{
        border: '1px solid #e8e8e8',
        cursor: 'pointer',

        '&:hover':{
            boxShadow: '0px 5px 25px rgba(0, 0, 0, 0.1)',
            borderLeft: '1px solid #e8e8e8',

        }
    },
    companyName: {
        fontSize: '13px',
        borderColor: theme.palette.primary.main,
        padding: theme.spacing(0.75),
        borderRadius:'5px',
        display:'inline-block',
        fontWeight: 600,

    },
    skillChip: { 
    margin: theme.spacing(0.5),
    padding: theme.spacing(0.75),
    fontSize: '14.5px',
    borderRadius:'5px',
    transition: '3s',
    cursor:'pointer',
    fontWeight: 600,
    backgroundColor:theme.palette.secondary.main,
    color: '#fff',

    }
}));
export default (props) =>{
    const classes = useStyles()
return (
    <div>
        <Header></Header>
    <Box p={2} className={classes.wrapper} >
        <Grid container alignItems='center'>
            <Grid items xs ></Grid>
                <Typography variant='subtitle1'>{props.title}</Typography>
                <Typography className={classes.companyName} variant='subtitle1'>{props.companyName}</Typography>
            <Grid items container xs >
                {skills.map((skill) =>( <Grid key={skill} item>{skill}</Grid>))}

            </Grid>
            <Grid items container direction='column' alignItems='flex-end' xs >
                <Grid item>
                <Typography>
                    {differenceInMinutes(Date.now(),props.postedOn)} | {props.type} | {props.location}
                </Typography>
                </Grid>
                <Grid item>
                    <Box>
                <Button variant="outlined">
                See details
                </Button>
                </Box>
                </Grid>
            </Grid>
        </Grid>
    </Box>
    </div>
)


}