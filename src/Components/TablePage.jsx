import React, { useState } from "react";
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Box,
  Stack
} from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditCalendarOutlined from "@mui/icons-material/EditCalendarOutlined";
import { FormControlLabel, Checkbox } from "@mui/material";

function TablePage({ toDoList, deleteTodo, editTodo, checkChange }) {
  return (
    <Stack sx={{ mt: "2%", wordBreak: "break-word" }} spacing={2}>
      <TableContainer component={Paper}>
        <Table id="todos">
          <TableBody>
            {toDoList.map((item) => (
              <TableRow
                sx={{
                  "&:hover": {
                    backgroundColor: "#d9d9d9",
                  },
                }}
                key={item.id}
              >
                <TableCell padding="none">
                <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                alignItems={{ xs: "flex-start", sm: "center" }}
                spacing={{ xs: 1, sm: 0 }}
>
<Stack
  direction="row"
  justifyContent="space-between"
  alignItems="center"
  width="99%"     
/>
<Stack direction="row" alignItems="center">
                      <FormControlLabel
                        control={<Checkbox checked={item.check} />}
                        onClick={() => checkChange(item.id)}
                      />

                      {item.name}
                    </Stack>
                    <Stack sx={{ display: "flex", alignItems: "center" }}>
                      <DeleteOutlinedIcon
                        onClick={() => deleteTodo(item.id)}
                        sx={{
                          "&:hover": {
                            cursor: "pointer",
                            color: "#FF0000",
                          },
                        }}
                      />
                      <EditCalendarOutlined
                        onClick={() => editTodo(item.id)}
                        sx={{
                          "&:hover": {
                            cursor: "pointer",
                            color: "#6969e5",
                          },
                          mr: "10px",
                        }}
                      />
                      {item.check && (
                        <Box
                          sx={{
                            background: "#a5dc86",
                            color: "black",
                            fontWeight: "border",
                            borderRadius: "10px",
                            p: "2px 3px 2px 3px",
                          }}
                        >
                          Completed
                        </Box>
                      ) }
                    </Stack>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}

export default TablePage;
