import React from "react";
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Box,
  Hidden,
} from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditCalendarOutlined from "@mui/icons-material/EditCalendarOutlined";

function TablePage({ arr, deleteTodo, setTodo }) {
  return (
    <Box sx={{ m: "2%",wordBreak:'break-word' }}>
      <TableContainer component={Paper}>
        <Table id="todos">
          <TableBody>
            {arr.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "99%",
                    }}
                  >
                    {item.text}
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <DeleteOutlinedIcon onClick={() => deleteTodo(item.id)} />
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
