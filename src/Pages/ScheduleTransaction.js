import React from 'react'
import NavBar1 from '../Components/NavBars/NavBar1'

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

  setDebug(message => console.log("My logger " + message));

  clearScheduler(name, configuration, options);

  createScheduler(name, configuration, options);   
  return (
    <div>
      <NavBar1 />
      <p>Schedule Transaction</p>
      
   

    </div>
  )
}

export default ScheduleTransaction