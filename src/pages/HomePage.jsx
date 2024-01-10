import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import TablePage from "../Components/TablePage";
import { Typography } from "@mui/material";
import { useId } from "react";

function Home() {
  const [data, setData] = useState("");
  const [arr, setArr] = useState([]);
  const id = uuidv4();

  const set_table = (data) => {
    if (data !== "") {
      if (editIndex !== null) {
        let updatedArr = [...arr];
        updatedArr[editIndex] = { id: updatedArr[editIndex].id, text: data }; 
        setArr(updatedArr);
        setEditIndex(null);
      } else {
        setArr([...arr, { id: id, text: data }]);
      }
      setData("");
    }
  };

  const delete_todo = (id) => {
    let reduced_todo = arr.filter((item) => item.id !== id);
    setArr(reduced_todo);
  };

  const set_todo = (id) => {
    setEditIndex(id);
    setData(arr[id].text);
  };
  const handleKeyEnter = (event) => {
    if (event.key === "Enter") {
      set_table();
    }
  };

  const handleCancel = () => {
    setData("");
    setToggle(true);
    setIsEditItem(null);
  };

  return (
    <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>

    <Box sx={{width:"60%",overflowX:"hidden"}}>
      <Typography
        variant="h3"
        sx={{ m: "20px", textAlign: "center" }}
        >
        ToDo App
      </Typography>
      <Box sx={{ display: "flex", m: "20px" }}>
        <TextField
          variant="filled"
          onChange={(e) => setData(e.target.value)}
          fullWidth
          label={"Enter your Todo"}
          value={data}
          onKeyDown={handleKeyEnter}
          />
        <Button
          variant="contained"
          sx={{ fontWeight: "bold", fontSize: "1em" }}
          onClick={() => set_table(data)}
          >
         Submit
        </Button>
      </Box>
      <TablePage arr={arr} deleteTodo={delete_todo} setTodo={set_todo} />
            </Box>
    </Box>
  );
}

export default Home;
