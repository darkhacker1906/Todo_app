import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import TablePage from "../Components/TablePage";
import { Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

function Home() {
  const [data, setData] = useState("");
  const [arr, setArr] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [IsEditItem, setIsEditItem] = useState(null);

  const set_table = () => {
    if (!data) {
    }
     else if (data && !toggle) {
      setArr((prevArr) =>
        prevArr.map((elem) => {
          if (elem.id === IsEditItem) {
            return { ...elem, name: data };
          }
          return elem;
        })
      );
      setToggle(true);
      setIsEditItem(null);
    } else {
      if (data != "") {
        const allInputData = { id: uuidv4(), name: data };
        setArr([...arr, allInputData]);
        setData("");
      }
    }
  };

  const delete_todo = (index) => {
    const updateditems = arr.filter((item) => {
      return index !== item.id;
    });
    setArr(updateditems);
  };

  const editItem = (id) => {
    let newEditItem = arr.find((item) => {
      return item.id === id;
    });
    setToggle(false);
    console.log(newEditItem);
    setData(newEditItem.name);
    setIsEditItem(id);
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
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box sx={{ width: "60%", overflowX: "hidden" }}>
        <Typography variant="h3" sx={{ m: "20px", textAlign: "center" }}>
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

          {toggle ? (
            <Button
              variant="contained"
              sx={{ fontWeight: "bold", fontSize: "1em" }}
              onClick={set_table}
            >
              Submit
            </Button>
          ) : (
            <>
              <Button
                variant="contained"
                sx={{ fontWeight: "bold", fontSize: ".8em", mr: "2px" }}
                onClick={set_table}
              >
                Update
              </Button>
              <Button
                variant="contained"
                sx={{ fontWeight: "bold", fontSize: ".8em" }}
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </>
          )}
        </Box>
        <TablePage arr={arr} deleteTodo={delete_todo} editTodo={editItem} />
      </Box>
    </Box>
  );
}

export default Home;
