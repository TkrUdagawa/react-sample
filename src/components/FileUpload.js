import Papa from 'papaparse';
import React, {useState} from 'react';
import {DropzoneArea} from 'material-ui-dropzone'
import MUIDataTable from "mui-datatables";
import Container from '@material-ui/core/Container'
import axios from 'axios';
import Button from '@material-ui/core/Button';

export default function FileUpload () {
    const [uploadFile, setFile]  = useState(null);
    const [columns, setColumns] = useState([]);
    const [rows, setRows] = useState([]);
    const url = "";

    const onComplete = (result) => {
        console.log(result);
        const d = result.data;
        const columns = result.meta.fields;
        setColumns(columns);
        setRows(d);
    };

    const submit = () => {
        axios.post(url, {file: uploadFile}, {
            headers: {}
        }).then(response => {
            console.log("hoge");
        }).catch(error => {
            console.log("error");
        })
    };


    const handleChange = (files) => {
        console.log(files);
        if (files.length > 0) {
            console.log("parse");
            Papa.parse(files[0], {
             complete: (result) => onComplete(result),
             encoding: "utf-8",
             header: true,
         });
        } else {
            setColumns([]);
            setRows([]);
        }
    }
    return (
        <div>
            <Container>
            <DropzoneArea
                 onChange={(files) => handleChange(files)}
                 acceptedFiles={['application/*', 'text/*', "text/csv", "application/vnd.ms-excel"]}
                 showFileNames
                 filesLimit={1}
            />
            <Button color="primary" variant="contained">submit</Button>
            <MUIDataTable columns={columns} data={rows} />
            </Container>
        </div>
    );
}