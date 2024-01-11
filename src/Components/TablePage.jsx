import React,{useState} from "react";
import { TableContainer,Table,TableBody,TableRow,TableCell,Paper,Box} from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditCalendarOutlined from "@mui/icons-material/EditCalendarOutlined";
import {FormControlLabel,Checkbox} from "@mui/material";

function TablePage({ arr, deleteTodo, editTodo ,checkChange}) {
  console.log(arr);
  return (
    <Box sx={{ m: "2%", wordBreak: "break-word" }}>
      <TableContainer component={Paper}>
        <Table id="todos">
          <TableBody>
            {arr.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "99%",
                    }}
                  >
                    <Box>
                   <FormControlLabel
                   control={<Checkbox />}
                    label={item.check ?  "Completed": "Incomplete"}
                    onClick={()=>checkChange(item.id)}/>
                 
                    {item.name}
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <DeleteOutlinedIcon onClick={() => deleteTodo(item.id)} />
                      <EditCalendarOutlined onClick={() => editTodo(item.id)} />
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
