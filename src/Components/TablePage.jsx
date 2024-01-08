import React from 'react';
import { TableContainer, Table, TableBody, TableRow, TableCell, Paper, Box } from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditCalendarOutlined from '@mui/icons-material/EditCalendarOutlined';

function TablePage({ arr, deleteTodo, setTodo }) {
  return (
    <Box sx={{ m: '2%' }}>
      <TableContainer component={Paper}>
        <Table id='todos'>
          <TableBody>
            {arr.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '99%' }}>
                    {item}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <DeleteOutlinedIcon onClick={() => deleteTodo(index)} />
                      <EditCalendarOutlined onClick={() => setTodo(index)} />
                    </Box>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default TablePage;