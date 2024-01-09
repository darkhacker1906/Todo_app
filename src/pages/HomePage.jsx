import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import TablePage from "../Components/TablePage";
import { Typography } from "@mui/material";
import { useId } from "react";

function Home() {
  const [data, setData] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [arr, setArr] = useState([]);
  const id = useId();

  const set_table = (data) => {
    if (data !== "") {
      if (editIndex !== null) {
        let updatedArr = [...arr];
        updatedArr[editIndex] = data;
        setArr(updatedArr);
        setEditIndex(null);
      } else {
        setArr([...arr, data]);
      }
      setData("");
    }
  };

  const delete_todo = (id) => {
    let reduced_todo = [...arr];
    reduced_todo.splice(id, 1);
    setArr(reduced_todo);
  };

  const set_todo = (id) => {
    setEditIndex(id);
    setData(arr[id]);
  };
  const handleKeyEnter = (event) => {
    if (event.key === "Enter") {
      set_table(data);
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "60%" }}>
        <Typography
          variant="h3"
          sx={{ m: "20px", textAlign: "center", overflow: "hidden" }}
        >
          ToDo App
        </Typography>
        <Box sx={{ display: "flex", m: "20px" }}>
          <TextField
            id={id}
            variant="filled"
            onChange={(e) => setData(e.target.value)}
            fullWidth
            label={"Enter your Todo"}
            value={data}
            onKeyDown={handleKeyEnter}
          />
          {editIndex !== null ? (
            <>
              <Button
                variant="contained"
                sx={{ fontWeight: "bold", fontSize: ".8em" }}
                onClick={() => set_table(data)}
              >
                Update
              </Button>
              <Button
                variant="contained"
                sx={{
                  fontWeight: "bold",
                  fontSize: ".8em",
                  marginLeft: "10px",
                }}
                onClick={() => {
                  setEditIndex(null);
                  setData("");
                }}
              >
                Cancel
              </Button>
            </>
          ) : (
            <Button
              variant="contained"
              sx={{ fontWeight: "bold", fontSize: "1em" }}
              onClick={() => set_table(data)}
            >
              Submit
            </Button>
          )}
        </Box>

        <TablePage arr={arr} deleteTodo={delete_todo} setTodo={set_todo} />
      </Box>
    </Box>
  );
}

export default Home;
