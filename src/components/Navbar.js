import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';
import {useStyles} from '../styles';
import Link from '@material-ui/core/Link';
import {Link as RouterLink, BrowserRouter as Router} from "react-router-dom"
import { useDispatch } from 'react-redux';
import {setPage} from "../stores/pageSlice";

export default function Navbar(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <AppBar position="static">
            <Toolbar>

                    <Link component={RouterLink} to="/" color="inherit" className={classes.title}
                     onClick={() => dispatch(setPage({page: "home"}))}>
                        home
                    </Link>
                    <Link component={RouterLink} to="/about" color="inherit" className={classes.title}
                    onClick= {() => dispatch(setPage({page: "about"}))}
                    >
                        about
                    </Link>
                    <Link component={RouterLink} to="/users" color="inherit" className={classes.title}
                    onClick= {() => dispatch(setPage({page: "users"}))}
                    >
                        users
                    </Link>
                    <Link component={RouterLink} to="/joke" color="inherit" className={classes.title}
                    onClick= {() => dispatch(setPage({page: "joke"}))}
                    >
                        joke
                    </Link>
                    <Link component={RouterLink} to="/file" color="inherit" className={classes.title}
                    onClick= {() => dispatch(setPage({page: "file"}))}
                    >
                        file
                    </Link>                    
            </Toolbar>
        </AppBar>
    );
}
