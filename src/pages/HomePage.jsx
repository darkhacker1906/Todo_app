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
  const [errors, setErrors] = useState("");

  const set_table = () => {
    if (!data) {
      setErrors({ data: "Please enter data in this field" });
      return;
    } else {
      setErrors("");
    }
    if (data.trim() !== "" && !toggle) {
      setArr((prevArr) =>
        prevArr.map((elem) => {
          if (elem.id === IsEditItem && data !== "") {
            return { ...elem, name: data };
          }
          setData("");
          return elem;
        })
      );
      setToggle(true);
      setIsEditItem(null);
      setData("");
    } else {
      if (data && data.trim() !== "") {
        const allInputData = { id: uuidv4(), name: data };
        setArr([...arr, allInputData]);
        setData("");
      } else {
        setErrors({ data: "Please enter  data in this field" });
        setData("");
      }
    }
  };

  const delete_todo = (index) => {
    const updateditems = arr.filter((item) => {
      return index !== item.id;
    });
    setArr(updateditems);
    setErrors("");
  };

  const editItem = (id) => {
    let newEditItem = arr.find((item) => {
      return item.id === id;
    });
    setToggle(false);
    setData(newEditItem.name);
    setIsEditItem(id);
    setErrors("");
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
    setErrors("");
  };
  const check_change = (id) => {
    setArr((prevTodos) =>
      prevTodos.map((e) => (e.id == id ? { ...e, check: !e.check } : e))
    );
  };

  const filterItems = () => {
    switch (filterType) {
      case "all":
        return arr;
      case "completed":
        const checked_data = arr.filter((item) => item.check);
        return checked_data;
      case "incomplete":
        const unchecked_data = arr.filter((item) => !item.check);
        return unchecked_data;

      default:
        return arr;
    }
  };
  const delete_check = () => {
    const checkedData = arr.filter((item) => {
      return !item.check;
    });
    setArr(checkedData);
  };
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box
        sx={{
          width: {
            xs: "98%",
            lg: "60%",
            sm: "86%",
            md: "90%",
          },
          overflowX: "hidden",
        }}
      >
        <Typography
          sx={{
            m: "20px",
            textAlign: "center",
            color: "#56676d",
            fontSize: { xs: "2rem", lg: "3rem", sm: "2.5", md: "2.4rem" },
          }}
        >
          ToDo App
        </Typography>
        <Box sx={{ display: "flex", mb: "20px" }}>
          <TextField
            size="small"
            variant="filled"
            onChange={(e) => setData(e.target.value)}
            fullWidth
            label={"Enter your Todo"}
            value={data}
            onKeyDown={handleKeyEnter}
            error={errors.data}
            helperText={errors.data}
          />

          {toggle ? (
            <Button
              variant="contained"
              sx={{
                fontWeight: "500",
                fontSize: { xs: ".6em", sm: ".7em", md: ".8em", lg: "1em" },
                height: "48px",
              }}
              onClick={set_table}
            >
              Submit
            </Button>
          ) : (
            <>
              <Button
                variant="contained"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: ".6em", sm: ".7em", md: ".8em", lg: "1em" },
                  mr: "4px",
                  height: "48px",
                }}
                onClick={set_table}
              >
                Update
              </Button>
              <Button
                variant="contained"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: ".6em", sm: ".7em", md: ".8em", lg: "1em" },
                  height: "48px",
                }}
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </>
          )}
        </Box>

        {arr.length > 0 && (
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                variant="contained"
                sx={{
                  fontSize: { xs: ".6em", sm: ".8em", md: ".9em", lg: "1em" },
                  mr: { lg: "10px", xs: "3px" },
                }}
                onClick={() => {
                  setFilterType("all");
                }}
              >
                All
              </Button>
              <Button
                variant="contained"
                sx={{
                  fontSize: { xs: ".6em", sm: ".8em", md: ".9em", lg: "1em" },
                  mr: { lg: "10px", xs: "3px" },
                  width: "120px",
                }}
                onClick={() => {
                  setFilterType("completed");
                }}
              >
                Completed
              </Button>
              <Button
                variant="contained"
                sx={{
                  fontSize: { xs: ".6em", sm: ".8em", md: ".9em", lg: "1em" },
                  mr: { lg: "10px", xs: "3px" },
                  width: "120px",
                }}
                onClick={() => {
                  setFilterType("incomplete");
                }}
              >
                Incomplete
              </Button>
            </Box>
            <Box>
              <Button
                sx={{
                  fontSize: { xs: ".5em", sm: ".8em", md: ".9em", lg: "1em" },
                  mt: { xs: "10px", sm: "0px", md: "0px" },
                }}
                variant="contained"
                onClick={delete_check}
              >
                Delete All
              </Button>
            </Box>
          </Box>
        )}

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
