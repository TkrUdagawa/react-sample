import React from "react"
import { Typography } from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux';
import MUIDataTable from "mui-datatables";
import {
    selectPage,
} from '../stores/pageSlice';

import {
    useHistory
} from 'react-router-dom'


const columns = ["user id", "name", "status", "date"];

const data = [
    ["123456", "島村卯月", "Active", "2020-06-01"],
    ["abcdef", "渋谷凛", "Active", "2020-05-31"],
    ["abc123", "本田未央", "Inactive", ""],
    ["aaaddd", "双葉杏", "Active", "2020-06-01"],
];


export default function UserList() {
    const page = useSelector(selectPage);
    const history = useHistory();   
    console.log(page);

    const options = {
        onRowClick: (rowData, rowMeta) => {
            history.push(`/users/${rowData[0]}`);
        }
    };
    
    return(
        <div>
            <MUIDataTable title={"members"} data={data}  columns={columns} options={options} />
        </div> 
        
    );    
}