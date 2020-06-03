import React from "react"
import { Typography } from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux';
import MUIDataTable from "mui-datatables";
import {
    selectPage,
} from '../stores/pageSlice';

import {
    useRouteMatch
} from 'react-router-dom'


const columns = ["user id", "name", "status", "date"];


const data = {
    "123456": {name: "島村卯月", type: "Cute", height: 159},
    "abcdef": {name: "渋谷凛", type: "Cool", height: 165},
    "abc123":　{name: "本田未央", type: "Passion", height: 161},
    "aaaddd": {name: "双葉杏", type: "Cute", height: 139}
};

export default function User() {
    const page = useSelector(selectPage);
    const match = useRouteMatch("/users/:id");
    console.log("match", match.params.id);
    console.log(Object.keys(data[match.params.id]));
    const l = [];
    Object.keys(data[match.params.id]).forEach(k => {
        l.push(
            <Typography>
                {k} : {data[match.params.id][k]}
            </Typography>
        )});
 
    return(
        <div>
            {l}
        </div> 
    );
}