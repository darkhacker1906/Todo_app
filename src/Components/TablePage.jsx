import React, { useState } from "react";
import {TableContainer,Table,TableBody,TableRow,TableCell,Paper,Box} from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditCalendarOutlined from "@mui/icons-material/EditCalendarOutlined";
import { FormControlLabel, Checkbox } from "@mui/material";

function TablePage({ arr, deleteTodo, editTodo, checkChange }) {
  return (
    <Box sx={{ mt: "2%", wordBreak: "break-word" }}>
      <TableContainer component={Paper}>
        <Table id="todos">
          <TableBody>
            {arr.map((item) => (
              <TableRow
              sx={{
                "&:hover": {
                  backgroundColor: "#d9d9d9"
                }
              }
              }
              key={item.id}>
                <TableCell padding="none">
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "99%",
                    }}
                  >
                    <Box>
                      <FormControlLabel
                        control={<Checkbox checked={item.check} />}
                        
                        onClick={() => checkChange(item.id)}
                      />

                      {item.name}
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <DeleteOutlinedIcon onClick={() => deleteTodo(item.id)}
                       sx={{
                         "&:hover": {
                          cursor:"pointer",
                          color:"#FF0000"
                         }
                       }
                       }
                      />
                      <EditCalendarOutlined
                        onClick={() => editTodo(item.id)}
                        sx={{
                          "&:hover": {
                           cursor:"pointer",color:'#6969e5'
                          },
                          mr: "10px"
                        }
                        }
                      />
                      {item.check ? (
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
                      ) : (
                        ""
                      )}
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
