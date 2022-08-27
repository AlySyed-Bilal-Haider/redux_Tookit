import React, { useEffect } from "react";
import {
  Container,
  Button,
  Grid,
  Box,
  Typography,
  Divider,
} from "@mui/material";
import { useState } from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import { styled } from "@mui/system";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Add } from "../toolkit/Reducer";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const inputstyle = {
  width: "100%",
  padding: "1rem",
  margin: "5px",
  borderRadius: "4px",
  border: "none",
};

const AutocompleteStyle = styled(Autocomplete)(() => ({
  "&.MuiAutocomplete-root": {
    borderRadius: "10px",
    color: "#fff",
    backgroundColor: "#fff",
  },
  "&.Mui-focused": {
    color: "red",
    backgroundColor: "#fafafa",
  },
}));

const TextFieldStyle = styled(TextField)(() => ({
  ".MuiFilledInput-root": {
    color: "black !important",
  },
  "&.MuiTextField": {
    color: "black !important",
  },
}));

// ......main component start Headers........
function Login() {
  const fetchId = useSelector((state) => state.userid.userid);
  const fetchdata = useSelector((state) => state.fetchvalue.todoslice);
  console.log("fetchId", fetchId);
  const usedispatch = useDispatch();

  const [formvalues, setformvalues] = useState({
    name: "",
    description: "",
    file: "",
    tages: [],
  });

  const onChangeHandlerModule = (value) => {
    setformvalues({ ...formvalues, tages: value });
  };

  const OnsubmitHandler = (e) => {
    e.preventDefault();
    usedispatch(Add(formvalues));
    toast.success("Post save successfully");
  };
  useEffect(() => {
    const newdata = fetchdata.map((items, index) => {
      return index == fetchId;
    });
    console.log("newdata");
  }, [fetchId]);
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        py: 2,
        backgroundColor: "lightgray",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            py: 12,
            mt: 6,
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              width: "50%",
              backgroundColor: "rgba(0,0,0,0.5)",
              p: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              boxShadow: "#F4AA05 5px 5px 50px 2px",
            }}
          >
            <Typography
              sx={{
                color: "white",
                py: 2,
                fontSize: "26px",
                fontWeight: "bold",
              }}
            >
              Add{" "}
            </Typography>
            <form
              onSubmit={OnsubmitHandler}
              style={{
                width: "70%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <input
                type="text"
                style={inputstyle}
                placeholder="Enter Name"
                name="name"
                value={formvalues.name}
                onChange={(e) => {
                  setformvalues({
                    ...formvalues,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
              <Box
                sx={{
                  width: "100%",
                  backgroundColor: "white",
                  padding: "1rem",
                  margin: "5px",
                  borderRadius: "4px",
                  border: "none",
                }}
              >
                <input
                  style={{ marginRight: "30%", color: "black" }}
                  type="file"
                  name="file"
                  onChange={(e) => {
                    setformvalues({
                      ...formvalues,
                      [e.target.name]: e.target.files[0],
                    });
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: "100%",
                  backgroundColor: "white",
                  padding: "1rem",
                  margin: "5px",
                  borderRadius: "4px",
                  border: "none",
                }}
              >
                <AutocompleteStyle
                  multiple
                  id="tags-filled"
                  options={
                    // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
                    top100Films.map((option) => option.title)
                  }
                  freeSolo
                  onChange={(event, value) => onChangeHandlerModule(value)}
                  renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                      <Chip
                        color="primary"
                        variant="outlined"
                        label={option}
                        {...getTagProps({ index })}
                      />
                    ))
                  }
                  renderInput={(params) => (
                    <TextFieldStyle
                      {...params}
                      variant="filled"
                      label="Enter Tages of post*"
                      name="list"
                    />
                  )}
                />
              </Box>
              <textarea
                style={inputstyle}
                id="w3review"
                name="description"
                placeholder="write descriptions"
                rows="4"
                cols="50"
                value={formvalues.description}
                onChange={(e) => {
                  setformvalues({
                    ...formvalues,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
              <Button
                type="submit"
                sx={{
                  width: "100%",
                  height: "40px",
                  border: "none",
                  backgroundColor: "red",
                  borderRadius: "4px",
                  m: 1,
                  color: "white",
                  "&:hover": {
                    backgroundColor: "red",
                  },
                }}
              >
                Submit
              </Button>
            </form>
          </Box>
        </Box>
      </Container>
      <Divider
        style={{
          background: "linear-gradient(90deg,#C1BFBA, #F4AA05,#ffffff)",
          width: "100%",
          height: "20px",
        }}
      />
    </Box>
  );
}

export default React.memo(Login);

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
];
