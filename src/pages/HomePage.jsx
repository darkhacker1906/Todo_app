import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import TablePage from '../Components/TablePage';
import { Typography } from '@mui/material';

function Home() {
  const [data, setData] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [arr, setArr] = useState([]);

  const set_table = (data) => {
    if (data !== '') {
      if (editIndex !== null) {
        let updatedArr = [...arr];
        updatedArr[editIndex] = data;
        setArr(updatedArr);
        setEditIndex(null);
      } else {
        setArr([...arr, data]);
      }
      setData('');
    }
  };
 

  const delete_todo = (index) => {
    let reduced_todo = [...arr];
    reduced_todo.splice(index, 1);
    setArr(reduced_todo);
  };

  const set_todo = (index) => {
    setEditIndex(index);
    setData(arr[index]);
  };
  const handleKeyEnter = (event) => {
    if (event.key === 'Enter') {
      set_table(data);
    }
  };

  return (
    <Box>
      <Typography variant='h3' sx={{ m: '20px', textAlign: 'center',overflow:"hidden" }}>
        ToDo App
      </Typography>
      <Box sx={{ display: 'flex', m: '20px' }}>
        <TextField
          variant='filled'
          onChange={(e) => setData(e.target.value)}
          fullWidth
          label={'Enter your Todo'}
          value={data}
          onKeyDown={handleKeyEnter}
        />
        <Button
          variant='contained'
          sx={{ fontWeight: 'bold', fontSize: '1.5em' }}
          onClick={() => set_table(data)}
        >
          +
        </Button>
      </Box>
      <TablePage arr={arr} deleteTodo={delete_todo} setTodo={set_todo} />
    </Box>
  );
}

export default Home;