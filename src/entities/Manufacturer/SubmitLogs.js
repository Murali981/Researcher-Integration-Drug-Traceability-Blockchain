// import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
// import Grid from "@material-ui/core/Grid";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Typography from "@material-ui/core/Typography";
// import Container from "@material-ui/core/Container";

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: "100%", // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// export default function SubmitLogs({ account, supplyChain, web3 }) {
//   return (
//     <Grid container className={classes.paper}>
//       <Container component="main" maxWidth="md">
//         <CssBaseline />
//         <div>
//           <Typography component="h1" variant="h5">
//             Researcher Analysis Form
//           </Typography>
//           <form className={classes.form} noValidate onSubmit={handleSubmit}>
//             <Grid container spacing={2}>
//               {/* Medicine Production Details */}
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   id="medicine-id"
//                   label="Medicine ID"
//                   fullWidth
//                   variant="outlined"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   id="medicine-description"
//                   label="Description of the medicine"
//                   fullWidth
//                   variant="outlined"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   id="quantity-produced"
//                   label="Quantity produced"
//                   type="number"
//                   fullWidth
//                   variant="outlined"
//                 />
//               </Grid>

//               {/* Raw Material Details */}
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   id="raw-material-id"
//                   label="Raw material ID"
//                   fullWidth
//                   variant="outlined"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   id="raw-material-description"
//                   label="Description of the raw material"
//                   fullWidth
//                   variant="outlined"
//                 />
//               </Grid>

//               {/* Quality Control Information */}
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   id="quality-assurance-reports"
//                   label="Quality assurance reports"
//                   fullWidth
//                   variant="outlined"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   id="test-results"
//                   label="Test results for the produced medicine"
//                   fullWidth
//                   variant="outlined"
//                 />
//               </Grid>

//               {/* Manufacturer Information */}
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   id="manufacturer-name-address"
//                   label="Manufacturer's name and address"
//                   fullWidth
//                   variant="outlined"
//                 />
//               </Grid>

//               {/* Smart Contract Interaction Logs */}
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   id="transaction-logs"
//                   label="Transactions related to medicine creation and transfer"
//                   fullWidth
//                   variant="outlined"
//                 />
//               </Grid>

//               <Grid item xs={12}>
//                 <Button
//                   type="submit"
//                   fullWidth
//                   variant="contained"
//                   color="primary"
//                   className={classes.submit}
//                 >
//                   Submit
//                 </Button>
//               </Grid>
//             </Grid>
//           </form>
//         </div>
//       </Container>
//     </Grid>
//   );
// }

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
  const [medicineDescription, setMedicineDescription] = useState(""); // Added medicine description
  const [quantityProduced, setQuantityProduced] = useState(""); // Added quantity produced
  const [rawMaterialId, setRawMaterialId] = useState(""); // Added raw material ID
  const [rawMaterialDescription, setRawMaterialDescription] = useState(""); // Added raw material description
  const [qualityAssuranceReports, setQualityAssuranceReports] = useState(""); // Added quality assurance reports
  const [testResults, setTestResults] = useState(""); // Added test results
  const [manufacturerInfo, setManufacturerInfo] = useState(""); // Added manufacturer information
  const [transactionLogs, setTransactionLogs] = useState(""); // Added transaction logs

  const handleSubmit = async (e) => {
    e.preventDefault();

    // // Store medicine production log directly on the blockchain
    // await supplyChain.methods
    //   .submitMedicineProductionLog(
    //     medicineId,
    //     medicineDescription,
    //     quantityProduced,
    //     rawMaterialId,
    //     rawMaterialDescription,
    //     qualityAssuranceReports,
    //     testResults,
    //     manufacturerInfo,
    //     transactionLogs
    //   )
    //   .send({ from: account });

    // // Reset form fields
    // setMedicineId("");
    // setMedicineDescription("");
    // setQuantityProduced("");
    // setRawMaterialId("");
    // setRawMaterialDescription("");
    // setQualityAssuranceReports("");
    // setTestResults("");
    // setManufacturerInfo("");
    // setTransactionLogs("");

    const data = {
      medicineId,
      medicineDescription,
      quantityProduced,
      rawMaterialId,
      rawMaterialDescription,
      qualityAssuranceReports,
      testResults,
      manufacturerInfo,
      transactionLogs,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/submitMedicineProductionLog",
        data
      );
      console.log(response.data); // Log the response from the server
    } catch (error) {
      console.error("Error submitting medicine production log:", error);
    }

    // Reset form fields
    setMedicineId("");
    setMedicineDescription("");
    setQuantityProduced("");
    setRawMaterialId("");
    setRawMaterialDescription("");
    setQualityAssuranceReports("");
    setTestResults("");
    setManufacturerInfo("");
    setTransactionLogs("");
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
              {/* Add new fields for the medicine production log */}
              <Grid item xs={12}>
                <TextField
                  required
                  id="medicine-description"
                  label="Description of the medicine"
                  value={medicineDescription}
                  onChange={(e) => setMedicineDescription(e.target.value)}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="quantity-produced"
                  label="Quantity produced"
                  type="number"
                  value={quantityProduced}
                  onChange={(e) => setQuantityProduced(e.target.value)}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="raw-material-id"
                  label="Raw material ID"
                  value={rawMaterialId}
                  onChange={(e) => setRawMaterialId(e.target.value)}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="raw-material-description"
                  label="Description of the raw material"
                  value={rawMaterialDescription}
                  onChange={(e) => setRawMaterialDescription(e.target.value)}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="quality-assurance-reports"
                  label="Quality assurance reports"
                  value={qualityAssuranceReports}
                  onChange={(e) => setQualityAssuranceReports(e.target.value)}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="test-results"
                  label="Test results for the produced medicine"
                  value={testResults}
                  onChange={(e) => setTestResults(e.target.value)}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="manufacturer-info"
                  label="Manufacturer's information"
                  value={manufacturerInfo}
                  onChange={(e) => setManufacturerInfo(e.target.value)}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="transaction-logs"
                  label="Transaction logs"
                  value={transactionLogs}
                  onChange={(e) => setTransactionLogs(e.target.value)}
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
                  Submit Medicine Production Log
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </Grid>
  );
}
