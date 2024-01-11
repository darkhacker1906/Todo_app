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
  const [filterType, setFilterType] = useState("all");

  const set_table = () => {
    if (!data) {
    } else if (data && !toggle) {
      setArr((prevArr) =>
        prevArr.map((elem) => {
          if (elem.id === IsEditItem) {
            return { ...elem, name: data,check:false };
          }
          return elem;
        })
      );
      setToggle(true);
      setIsEditItem(null);
      setData("");
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
  const check_change = (id) => {
    setArr((prevTodos)=>
      prevTodos.map((e)=>e.id==id?{...e, check:!e.check}:e));
    // const checkData = arr.map((e) => {
    //   if (e.id == id) {
    //     return { ...e, check: !e.check };
    //   }
    //   else{
    //     return e;
    //   }
    // });
    // setArr(checkData);
  };

  const filterItems = () => {
    switch (filterType) {
      case "all":
        return arr;
      case "completed":
        return arr.filter((item) => item.check);
      case "incomplete":
        return arr.filter((item) => !item.check);
      default:
        return arr;
    }
  };
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box sx={{ width:{lg:"60%",sm:"80%",md:"100%"},  overflowX: "hidden" }}>
        <Typography sx={{m:"20px",textAlign:"center",fontSize:{lg:"3rem",sm:"2.5",md:"2.4rem"}}}>ToDo App</Typography>
        {/* ,fontSize:{lg:"1em",md:".8em",sm:".7em"} */}
        <Box sx={{ display: "flex", mb: "20px" }}>
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
              sx={{ fontWeight: "500",fontSize:{xs:".6em",sm:".7em",md:".8em",lg:"1em"}  }}
              onClick={set_table}
            >
              Submit
            </Button>
          ) : (
            <>
              <Button
                variant="contained"
                sx={{ fontWeight: "bold",fontSize:{xs:".6em",sm:".7em",md:".8em",lg:"1em"} }}
                onClick={set_table}
              >
                Update
              </Button>
              <Button
                variant="contained"
                sx={{ fontWeight: "bold", fontSize:{xs:".6em",sm:".7em",md:".8em",lg:"1em"} }}
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </>
          )}
        </Box>
        <Box sx={{ display: "inline-block" }}>
          <Button
            variant="contained"
            sx={{ fontSize:{xs:".6em",sm:".7em",md:".8em",lg:"1em"}, mr: "10px" }}
            onClick={() => {
              setFilterType("all");
            }}
          >
            All
          </Button>

          <Button
            variant="contained"
            sx={{  fontSize:{xs:".6em",sm:".7em",md:".8em",lg:"1em"}, mr: "10px" }}
            onClick={() => {
              setFilterType("completed");
            }}
          >
            Completed
          </Button>
          <Button
            variant="contained"
            sx={{fontSize:{xs:".6em",sm:".7em",md:".8em",lg:"1em"}, mr: "10px" }}
            onClick={() => {
              setFilterType("incomplete");
            }}
          >
            Incomplete
          </Button>
        </Box>

        <TablePage
          arr={filterItems()}
          deleteTodo={delete_todo}
          editTodo={editItem}
          checkChange={check_change}
        />
      </Box>
    </Box>
  );
}

export default Home;
