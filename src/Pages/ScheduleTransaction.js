import React from 'react'
import {useState} from 'react'
import NavBar1 from '../Components/NavBars/NavBar1'
import dayjs, { Dayjs } from 'dayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
// import View from "react-bootstrap/View";
import Row from "react-bootstrap/Row";
import {Link, Routes, Route, useNavigate} from 'react-router-dom';

const ScheduleTransaction = () => {
  // const {setDebug, clearScheduler, createScheduler, saturday, sunday} = require('datetime-scheduler');
  // const name = "weekend at 12:15:30.500";
  // const configuration = {
  //   "days": {saturday, sunday},
  //   "time": {
  //       "hours": 12,
  //       "minutes": 15,
  //       "seconds": 30,
  //       "millis": 500
  //     }
  // };
  const navigate = useNavigate();

  // const options = {
  //     asyncTask: async () => {
  //         console.log("Doing staff");
  //         await new Promise(resolve => setTimeout(resolve, 10000));
  //         console.log("Finishing staff");
  //     }
  // };

  // setDebug(message => console.log("My logger " + message));

  // clearScheduler(name, configuration, options);

  // createScheduler(name, configuration, options);   

  const [inputs, setInputs] = useState({});
  const [error, setError] = useState("");
  const [time, setTime] = useState(
    dayjs('2012-08-18T21:11:54'));
  let response;

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    // console.log("name", name)
    // console.log("value", value)

    // TODO: add account ID 
    setInputs(values => ({...values, [name]: value}))
  }

  const handleDateChange = (newValue) => {
    console.log(dayjs(time.$d).format('YYYY-MM-DDTHH:mm:ssZ[Z]'))
    const name = 'Date';
    setInputs(values => ({...values, [name]: dayjs(time.$d).format('YYYY-MM-DDTHH:mm:ssZ[Z]')}))
  };

  
  const handleTrxSubmit = async (e) => {
    e.preventDefault();

    console.log("HANDLE TRX SUBMIT:", inputs);
    try {
      const { data: scheduleTransactionData } = await axios.post(
        "http://localhost:4001/v1/addTransactions",
        {inputs}
      );
      response = scheduleTransactionData;
    } catch (error) {
      console.log(error.message);
    }

    // If response has errors, update Error State
    if (response.errors) {
      setError(response.errors);
    }
  };
  return (
    <div>
      <NavBar1 />
      <Container style={{ paddingTop: "1rem" }}>
        <Form onSubmit={handleTrxSubmit}>
          <Row>
            <Form.Group className="mb-3">
              <Form.Label>
                Enter Receiving Account ID:
              </Form.Label>
              <Form.Control
                type="text" 
                name="ReceivingAccountID" 
                value={inputs.ReceivingAccountID || ""} 
                onChange={handleChange}/>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-3">
              <Form.Label>
                Enter Amount:
              </Form.Label>
              <Form.Control
                type="integer" 
                name="TransactionAmount" 
                value={inputs.TransactionAmount || ""} 
                onChange={handleChange}/>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-3">
              <Form.Label>
                Enter Comments:
              </Form.Label>
              <Form.Control
                type="text" 
                name="Comment" 
                value={inputs.Comment || ""} 
                onChange={handleChange}/>
            </Form.Group>
          </Row>
            <Row>
            <Form.Group className="mb-3">
              <Form.Label>
                Schedule Transaction:
              </Form.Label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                    label="Date &Time picker"
                    value={time}
                    onChange={handleDateChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
              </LocalizationProvider>
            </Form.Group>
          </Row>
          <div style={{margin: "0 auto"}}>
            <Button variant="danger" type="submit" >
                  Schedule Transaction 
            </Button>
            {/* <Button
              title="Back to Transaction Details"
              onPress={() => navigation.navigate('TransactionDetails')}
            /> */}
          </div>
        </Form>
      </Container>

    </div>
  )
}

export default ScheduleTransaction