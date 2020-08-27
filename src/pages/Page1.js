import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import axios from 'axios'
import Select from '@material-ui/core/Select';
import MaterialTable from 'material-table';


import {
    FormControl,
    InputLabel,
    Input,
    Button,
    TextField
} from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        marginTop: 30
    }

}

const useStyles = makeStyles((theme) => ({


}));




export function Page1() {
    const [env, setEnv] = React.useState("");
    const [featureFileText, setFeatureFileText] = React.useState('');

    const handleChange = (event) => {
        setEnv(event.target.value);
    };
    const handleFFChange = (event) => {
        setFeatureFileText(event.target.value);
    };

    const [state, setState] = React.useState({
        columns: [
            { title: 'Name', field: 'name' },
            { title: 'Surname', field: 'surname' },
            { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
            {
                title: 'Birth Place',
                field: 'birthCity',
                lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
            },
        ],
        data: [
            { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
            {
                name: 'Zerya Betül',
                surname: 'Baran',
                birthYear: 2017,
                birthCity: 34,
            },
        ],
    });

    function doSubmit() {
        let payload = {
            env: env,
            featureFileText, featureFileText
        }
        console.log(payload);
        axios({
            method: 'post',
            url: '/login',
            data: payload
        });
    }

    return (
        <div style={styles.root}>
            <Container>
                <Row>
                    <Col md={4}>
                        <form style={{ width: "100%" }}>
                            <h1>Write Feature File</h1>

                            <FormControl margin="normal" fullWidth>
                                <InputLabel htmlFor="email">Email</InputLabel>
                                <Select
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled"
                                    value={env}
                                    onChange={handleChange}>
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>

                            <FormControl margin="normal" fullWidth>
                                <InputLabel htmlFor="wff">Write Feature File</InputLabel>
                                <Input id="wff" multiline rows={10} value={featureFileText} onChange={handleFFChange} />
                            </FormControl>

                            <Button variant="contained" color="secondary" href="#contained-buttons" onClick={doSubmit}>
                                Create
                            </Button>
                        </form>
                    </Col>
                    <Col md={8}>
                        <MaterialTable
                            title="Editable Example"
                            columns={state.columns}
                            data={state.data}
                            editable={{
                                onRowAdd: (newData) =>
                                    new Promise((resolve) => {
                                        setTimeout(() => {
                                            resolve();
                                            setState((prevState) => {
                                                const data = [...prevState.data];
                                                data.push(newData);
                                                return { ...prevState, data };
                                            });
                                        }, 600);
                                    }),
                                onRowUpdate: (newData, oldData) =>
                                    new Promise((resolve) => {
                                        setTimeout(() => {
                                            resolve();
                                            if (oldData) {
                                                setState((prevState) => {
                                                    const data = [...prevState.data];
                                                    data[data.indexOf(oldData)] = newData;
                                                    return { ...prevState, data };
                                                });
                                            }
                                        }, 600);
                                    }),
                                onRowDelete: (oldData) =>
                                    new Promise((resolve) => {
                                        setTimeout(() => {
                                            resolve();
                                            setState((prevState) => {
                                                const data = [...prevState.data];
                                                data.splice(data.indexOf(oldData), 1);
                                                return { ...prevState, data };
                                            });
                                        }, 600);
                                    }),
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Page1;