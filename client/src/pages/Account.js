import React, { useState } from 'react';
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const useStyles = makeStyles((theme) => ({
  message: {
    color: "white",
    fontWeight: "bold"
  }
}));

const Account = () => {
  const classes = useStyles();
  const [value, onChange] = useState(new Date());

  return (
    <div>
    <Box >
    <Calendar
        onChange={onChange}
        value={value}
      />
    </Box>
    </div>
    
  );
};

export default Account;
