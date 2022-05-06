import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState, useEffect }  from 'react';

export default function Dashboard() {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);


  
  const requestOptions = {
    method: 'POST',
    headers: { 'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAIoccQEAAAAAIEXr97ciGVEQ08r3x3tDXSlOhE8%3DybdN7YklP8Y98mJd0pVJ80JEhJZIxvIsFQsc9H8JdsM50TVMqn' },
};

  const fetching =  () => fetch("https://api.twitter.com/1.1/statuses/update.json?status=hello", requestOptions)
        .then(res => res.json())
        .then(
            (data) => {
                setIsLoaded(true);
                setUsers(data);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        );


  return (
    <div>
      <label> Bem vindos ao Spotted Unesp! </label>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: 500 },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
            value={value}
            onChange={handleChange}
          />
        </div>
      </Box>
      <Button variant="contained" onClick={fetching}>Contained</Button>
    </div>
  );
}
