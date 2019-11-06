import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Dialog, Toolbar, FormLabel, InputLabel } from '@material-ui/core';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
    },
    paper: {
      marginTop: theme.spacing(3),
      width: '100%',
      overflowX: 'auto',
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 650,
    },
  }));


export class PreSalesFeedbackForm extends Component {
           
    state = {
        firstname: '',
        lastname:'',
        contactnumber: ''
      };
    
    handleChange = e => {
        //this.props.onChange({ [e.target.name]: e.target.value });
        this.setState({
        [e.target.name]: e.target.value
    });
    };
    onSubmit = async e => {
        e.preventDefault();
        alert(JSON.stringify(this.state));
        const res = await fetch(process.env.REACT_APP_API_URL_CREATE,{
            method:"POST",
            //mode:"no-cors",
            body:JSON.stringify(this.state),
            headers:{"Content-Type":"application/json"}
        });
    };

    render() {
        //const {values,handleChange} = this.props;
      
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar position="static">
                        <Toolbar>
                             <Typography variant="h6">
                                Customer Feedback Form
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <br />
  
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <TextField
                                        placeholder="Enter Your First Name"
                                        label="First Name"
                                        name="firstname"
                                        defaultValue={this.state.firstname}
                                        onChange={e=>this.handleChange(e)}
                                        margin="normal"
                                    />
                                </TableCell>
                                <TableCell>
                                <TextField
                                    placeholder="Enter Your Last Name"
                                    label="Last Name"
                                    name="lastname"
                                    defaultValue={this.state.lastname}
                                    onChange={e=>this.handleChange(e)}
                                    margin="normal"
                                />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <TextField
                                        placeholder="Enter Contact Number"
                                        label="Contact Number"
                                        name="contactnumber"
                                        defaultValue={this.state.contactnumber}
                                        onChange={e=>this.handleChange(e)}
                                        margin="normal"
                                    />
                                </TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
 
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <InputLabel>Rating</InputLabel>
                                </TableCell>
                                <TableCell>
                                <RadioGroup aria-label="position" name="servicerating"  onChange={e=>this.handleChange(e)} row>
                                    <FormControlLabel
                                        value="verygood"
                                        control={<Radio color="primary" />}
                                        label="Very Good"
                                        labelPlacement="top"
                                        />
                                        <FormControlLabel
                                        value="good"
                                        control={<Radio color="primary" />}
                                        label="Good"
                                        labelPlacement="top"
                                        />
                                        <FormControlLabel
                                        value="fair"
                                        control={<Radio color="primary" />}
                                        label="Fair"
                                        labelPlacement="top"
                                        />
                                        <FormControlLabel
                                        value="poor"
                                        control={<Radio color="primary" />}
                                        label="Poor"
                                        labelPlacement="top"
                                    />
                                </RadioGroup>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                      <Button 
                        color="primary"
                        variant="contained"
                        onClick={this.onSubmit}
                        >Submit
                    </Button>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default PreSalesFeedbackForm
