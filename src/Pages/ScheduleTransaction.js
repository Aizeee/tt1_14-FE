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
  // const [value, setValue] = useState<Dayjs | null>(
  //   dayjs('2014-08-18T21:11:54'));

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log("name", name)
    console.log("value", value)
    setInputs(values => ({...values, [name]: value}))
    // setValue(newValue);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }
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
        <input type="submit" />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
              label="Date&Time picker"
              value={1}
              onChange={()=>{}}
              renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>

      </form>
    </div>
  )
}

export default ScheduleTransaction