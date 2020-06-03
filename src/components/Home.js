import React from "react"
import { Typography } from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux';
import {
    selectPage,
} from '../stores/pageSlice';

export default function Home() {
    const page = useSelector(selectPage);
    console.log(page);
    return(
        <Typography>
            This is Home: state = {page}
        </Typography>
    );    
}