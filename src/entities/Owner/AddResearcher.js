// AddNewUser.js

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Loader from "../../components/Loader";
import Grid from "@material-ui/core/Grid";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseLine";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "40ch",
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function AddResearcher(props) {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [locationx, setLocationX] = useState("");
  const [locationy, setLocationY] = useState("");
  const [role, setRole] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    if (e.target.id === "name") {
      setName(e.target.value);
    } else if (e.target.id === "locationx") {
      setLocationX(e.target.value);
    } else if (e.target.id === "locationy") {
      setLocationY(e.target.value);
    } else if (e.target.id === "role") {
      setRole(e.target.value);
    } else if (e.target.id === "address") {
      setAddress(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/registerResearcher",
        {
          name,
          locationx,
          locationy,
          role,
          address,
        }
      );
      console.log(response.data);
      setLoading(false);
      // Handle success, maybe show a success message to the user
    } catch (error) {
      console.error(error);
      setLoading(false);
      // Handle error, maybe show an error message to the user
    }
  };

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PersonAddIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add New User
        </Typography>
        <form className={classes.root} noValidate autoComplete="on">
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            onChange={handleInputChange}
          />
          <br></br>
          <TextField
            id="locationx"
            label="Locationx"
            variant="outlined"
            onChange={handleInputChange}
          />
          <br></br>
          <TextField
            id="locationy"
            label="Locationy"
            variant="outlined"
            onChange={handleInputChange}
          />
          <br></br>
          <TextField
            id="role"
            label="Role"
            variant="outlined"
            onChange={handleInputChange}
          />
          <br></br>
          <TextField
            id="address"
            label="Account"
            variant="outlined"
            onChange={handleInputChange}
          />
          <br></br>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default AddResearcher;
