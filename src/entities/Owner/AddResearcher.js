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

export default function AddResearcher(props) {
  console.log("Its working");
  console.log(props);
  console.log(props.account);
  console.log("Try");
  const classes = useStyles();
  const [account] = useState(props.account);
  const [web3, setWeb3] = useState(props.web3);
  const [supplyChain] = useState(props.supplyChain);
  const [fullName, setFullName] = useState("");
  const [institution, setInstitution] = useState("");
  const [email, setEmail] = useState("");
  const [researchArea, setResearchArea] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [experience, setExperience] = useState("");
  const [role, setRole] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    if (e.target.id === "fullName") {
      setFullName(e.target.value);
    } else if (e.target.id === "institution") {
      setInstitution(e.target.value);
    } else if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "researchArea") {
      setResearchArea(e.target.value);
    } else if (e.target.id === "qualifications") {
      setQualifications(e.target.value);
    } else if (e.target.id === "experience") {
      setExperience(e.target.value);
    } else if (e.target.id === "role") {
      setRole(e.target.value);
    } else if (e.target.id === "walletAddress") {
      setWalletAddress(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const nameBytes32 = web3.utils.padRight(
        web3.utils.fromAscii(fullName),
        64
      );
      const institutionBytes32 = web3.utils.padRight(
        web3.utils.fromAscii(institution),
        64
      );
      const emailBytes32 = web3.utils.padRight(web3.utils.fromAscii(email), 64);
      const researchAreaBytes32 = web3.utils.padRight(
        web3.utils.fromAscii(researchArea),
        64
      );
      const qualificationsBytes32 = web3.utils.padRight(
        web3.utils.fromAscii(qualifications),
        64
      );
      const experienceBytes32 = web3.utils.padRight(
        web3.utils.fromAscii(experience),
        64
      );

      await supplyChain.methods
        .registerResearcher(
          nameBytes32,
          institutionBytes32,
          emailBytes32,
          researchAreaBytes32,
          qualificationsBytes32,
          experienceBytes32,
          role,
          walletAddress
        )
        .send({ from: account });

      console.log("Researcher registered successfully!");
      setLoading(false);
    } catch (error) {
      console.error("Error registering researcher:", error);
      setLoading(false);
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
          Register Researcher
        </Typography>
        <form className={classes.root} noValidate autoComplete="on">
          <TextField
            id="fullName"
            label="Full Name"
            variant="outlined"
            onChange={handleInputChange}
          />
          <br />
          <TextField
            id="institution"
            label="Institution/Organization"
            variant="outlined"
            onChange={handleInputChange}
          />
          <br />
          <TextField
            id="email"
            label="Email Address"
            variant="outlined"
            onChange={handleInputChange}
          />
          <br />
          <TextField
            id="researchArea"
            label="Research Area/Domain"
            variant="outlined"
            onChange={handleInputChange}
          />
          <br />
          <TextField
            id="qualifications"
            label="Highest Qualification"
            variant="outlined"
            onChange={handleInputChange}
          />
          <br />
          <TextField
            id="experience"
            label="Years of Experience"
            variant="outlined"
            onChange={handleInputChange}
          />
          <br />
          <TextField
            id="role"
            label="Role"
            variant="outlined"
            onChange={handleInputChange}
          />
          <br />
          <TextField
            id="walletAddress"
            label="Blockchain Wallet Address"
            variant="outlined"
            onChange={handleInputChange}
          />
          <br />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Register
          </Button>
        </form>
      </div>
    </Container>
  );
}
