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
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SubmitDrugRecall({ account, supplyChain, web3 }) {
  const classes = useStyles();

  const [researcherId, setResearcherId] = useState("");
  const [drugName, setDrugName] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [batchNumbers, setBatchNumbers] = useState("");
  const [reasonForRecall, setReasonForRecall] = useState("");
  const [evidence, setEvidence] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/submitDrugRecall",
        {
          researcherId,
          drugName,
          manufacturer,
          batchNumbers: batchNumbers.split(","), // Assuming batchNumbers are comma-separated
          reasonForRecall,
          evidence,
        }
      );

      console.log(response.data);

      // Reset form fields
      setResearcherId("");
      setDrugName("");
      setManufacturer("");
      setBatchNumbers("");
      setReasonForRecall("");
      setEvidence("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Grid container className={classes.paper}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          <Typography component="h1" variant="h5">
            Submit Drug Recall
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  id="researcher-id"
                  label="Researcher ID"
                  value={researcherId}
                  onChange={(e) => setResearcherId(e.target.value)}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="drug-name"
                  label="Drug Name"
                  value={drugName}
                  onChange={(e) => setDrugName(e.target.value)}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="manufacturer"
                  label="Manufacturer"
                  value={manufacturer}
                  onChange={(e) => setManufacturer(e.target.value)}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="batch-numbers"
                  label="Batch Numbers (Comma-separated)"
                  value={batchNumbers}
                  onChange={(e) => setBatchNumbers(e.target.value)}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="reason-for-recall"
                  label="Reason for Recall"
                  multiline
                  rows={4}
                  value={reasonForRecall}
                  onChange={(e) => setReasonForRecall(e.target.value)}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="evidence"
                  label="Evidence"
                  multiline
                  rows={4}
                  value={evidence}
                  onChange={(e) => setEvidence(e.target.value)}
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
                  Submit Drug Recall
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </Grid>
  );
}
