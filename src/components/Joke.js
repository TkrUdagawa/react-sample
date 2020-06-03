import React, { useState, useEffect } from "react";
import axios from "axios";
import { Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectJoke, setJoke,
} from '../stores/jokeSlice';


export default function Joke() {
    const url = "https://api.adviceslip.com/advice";
    const joke = useSelector(selectJoke);

    const dispatch = useDispatch();

    function handleClick() {
         axios.get(url).then(response => {
                console.log(response.data);
                dispatch(setJoke({joke: response.data.slip.advice}));
            }).catch(error => {
                console.log(error);
            });
    }

    return (
        <div>
            <Typography>
                {joke}
            </Typography>
            <Button variant="contained" color="primary" onClick={() => handleClick()}>
                reload
            </Button>
        </div>
    )
}
