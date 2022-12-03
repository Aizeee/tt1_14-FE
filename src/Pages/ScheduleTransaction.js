import React from 'react'
import {useState} from 'react'
import NavBar1 from '../Components/NavBars/NavBar1'
import dayjs, { Dayjs } from 'dayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const ScheduleTransaction = () => {
  const {setDebug, clearScheduler, createScheduler, saturday, sunday} = require('datetime-scheduler');
  const name = "weekend at 12:15:30.500";
  const configuration = {
    "days": {saturday, sunday},
    "time": {
        "hours": 12,
        "minutes": 15,
        "seconds": 30,
        "millis": 500
      }
  };

  const options = {
      asyncTask: async () => {
          console.log("Doing staff");
          await new Promise(resolve => setTimeout(resolve, 10000));
          console.log("Finishing staff");
      }
  };

  // setDebug(message => console.log("My logger " + message));

  // clearScheduler(name, configuration, options);

  // createScheduler(name, configuration, options);   

  const [inputs, setInputs] = useState({});
  const [time, setTime] = useState(
    dayjs('2014-08-18T21:11:54'));

  const handleChange = (event) => {
    console.log("event: ", event)
    const name = event.target.name;
    const value = event.target.value;
    // console.log("name", name)
    // console.log("value", value)

    // add the input 
    setInputs(values => ({...values, [name]: value}))
    // setValue(newValue);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  const handleDateChange = (newValue) => {
    // setTime(newValue);
    // console.log("this is date value", value.$d)
    console.log(dayjs(time.$d).format('YYYY-MM-DDTHH:mm:ssZ[Z]'))
    const name = 'time';
    setInputs(values => ({...values, [name]: dayjs(time.$d).format('YYYY-MM-DDTHH:mm:ssZ[Z]')}))
  };
  return (
    <div>
      <NavBar1 />

      <p>Schedule Transaction</p>
      <form onSubmit={handleSubmit}>
      <label>Enter Receiving Account ID:
        <input 
          type="text" 
          name="receiving_acc" 
          value={inputs.receiving_acc || ""} 
          onChange={handleChange}
        />
        </label>
      <label>Enter your amount:
        <input 
          type="integer" 
          name="amount" 
          value={inputs.amount || ""} 
          onChange={handleChange}
        />
        </label>

        <label>Enter comments:
        <input 
          type="text" 
          name="comment" 
          value={inputs.comment || ""} 
          onChange={handleChange}
        />
        </label>
        
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
              label="Date&Time picker"
              value={time}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
        <input type="submit" />
      </form>
    </div>
  )
}

export default ScheduleTransaction