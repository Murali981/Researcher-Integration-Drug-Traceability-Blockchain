import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
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
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SubmitLogs({ account, supplyChain, web3 }) {
  console.log(account);
  const classes = useStyles();

  const [medicineId, setMedicineId] = useState("");
  const [distributorId, setDistributorId] = useState("");
  const [receivedQuantity, setReceivedQuantity] = useState("");
  const [issueDescription, setIssueDescription] = useState("");
  const [resolution, setResolution] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      medicineId,
      distributorId,
      receivedQuantity,
      issueDescription,
      resolution,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/submitDistributorLog",
        data
      );
      console.log(response.data); // Log the response from the server
    } catch (error) {
      console.error("Error submitting distributor log:", error);
    }

    // Reset form fields
    setMedicineId("");
    setDistributorId("");
    setReceivedQuantity("");
    setIssueDescription("");
    setResolution("");
  };

  return (
    <Grid container className={classes.paper}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          <Typography component="h1" variant="h5">
            Submit Logs
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  id="medicine-id"
                  label="Medicine ID"
                  value={medicineId}
                  onChange={(e) => setMedicineId(e.target.value)}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="distributor-id"
                  label="Distributor ID"
                  value={distributorId}
                  onChange={(e) => setDistributorId(e.target.value)}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="received-quantity"
                  label="Received Quantity"
                  type="number"
                  value={receivedQuantity}
                  onChange={(e) => setReceivedQuantity(e.target.value)}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="issue-description"
                  label="Issue Description"
                  value={issueDescription}
                  onChange={(e) => setIssueDescription(e.target.value)}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="resolution"
                  label="Resolution"
                  value={resolution}
                  onChange={(e) => setResolution(e.target.value)}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Submit Distributor Log
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </Grid>
  );
}
