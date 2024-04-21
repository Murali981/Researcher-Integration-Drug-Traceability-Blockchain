// import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
// import Grid from "@material-ui/core/Grid";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Typography from "@material-ui/core/Typography";
// import Container from "@material-ui/core/Container";
// import axios from "axios";

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
//     width: "100%",
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// export default function SubmitLogs({ account, supplyChain, web3 }) {
//   console.log(account);
//   const classes = useStyles();

//   const [medicineId, setMedicineId] = useState("");
//   const [medicineDescription, setMedicineDescription] = useState(""); // Added medicine description
//   const [quantityProduced, setQuantityProduced] = useState(""); // Added quantity produced
//   const [rawMaterialId, setRawMaterialId] = useState(""); // Added raw material ID
//   const [rawMaterialDescription, setRawMaterialDescription] = useState(""); // Added raw material description
//   const [qualityAssuranceReports, setQualityAssuranceReports] = useState(""); // Added quality assurance reports
//   const [testResults, setTestResults] = useState(""); // Added test results
//   const [manufacturerInfo, setManufacturerInfo] = useState(""); // Added manufacturer information
//   const [transactionLogs, setTransactionLogs] = useState(""); // Added transaction logs

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // // Store medicine production log directly on the blockchain
//     // await supplyChain.methods
//     //   .submitMedicineProductionLog(
//     //     medicineId,
//     //     medicineDescription,
//     //     quantityProduced,
//     //     rawMaterialId,
//     //     rawMaterialDescription,
//     //     qualityAssuranceReports,
//     //     testResults,
//     //     manufacturerInfo,
//     //     transactionLogs
//     //   )
//     //   .send({ from: account });

//     // // Reset form fields
//     // setMedicineId("");
//     // setMedicineDescription("");
//     // setQuantityProduced("");
//     // setRawMaterialId("");
//     // setRawMaterialDescription("");
//     // setQualityAssuranceReports("");
//     // setTestResults("");
//     // setManufacturerInfo("");
//     // setTransactionLogs("");

//     const data = {
//       medicineId,
//       medicineDescription,
//       quantityProduced,
//       rawMaterialId,
//       rawMaterialDescription,
//       qualityAssuranceReports,
//       testResults,
//       manufacturerInfo,
//       transactionLogs,
//     };

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/submitMedicineProductionLog",
//         data
//       );
//       console.log(response.data); // Log the response from the server
//     } catch (error) {
//       console.error("Error submitting medicine production log:", error);
//     }

//     // Reset form fields
//     setMedicineId("");
//     setMedicineDescription("");
//     setQuantityProduced("");
//     setRawMaterialId("");
//     setRawMaterialDescription("");
//     setQualityAssuranceReports("");
//     setTestResults("");
//     setManufacturerInfo("");
//     setTransactionLogs("");
//   };

//   return (
//     <Grid container className={classes.paper}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <div>
//           <Typography component="h1" variant="h5">
//             Submit Logs
//           </Typography>
//           <form className={classes.form} noValidate onSubmit={handleSubmit}>
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   id="medicine-id"
//                   label="Medicine ID"
//                   value={medicineId}
//                   onChange={(e) => setMedicineId(e.target.value)}
//                   fullWidth
//                   variant="outlined"
//                 />
//               </Grid>
//               {/* Add new fields for the medicine production log */}
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   id="medicine-description"
//                   label="Description of the medicine"
//                   value={medicineDescription}
//                   onChange={(e) => setMedicineDescription(e.target.value)}
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
//                   value={quantityProduced}
//                   onChange={(e) => setQuantityProduced(e.target.value)}
//                   fullWidth
//                   variant="outlined"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   id="raw-material-id"
//                   label="Raw material ID"
//                   value={rawMaterialId}
//                   onChange={(e) => setRawMaterialId(e.target.value)}
//                   fullWidth
//                   variant="outlined"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   id="raw-material-description"
//                   label="Description of the raw material"
//                   value={rawMaterialDescription}
//                   onChange={(e) => setRawMaterialDescription(e.target.value)}
//                   fullWidth
//                   variant="outlined"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   id="quality-assurance-reports"
//                   label="Quality assurance reports"
//                   value={qualityAssuranceReports}
//                   onChange={(e) => setQualityAssuranceReports(e.target.value)}
//                   fullWidth
//                   variant="outlined"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   id="test-results"
//                   label="Test results for the produced medicine"
//                   value={testResults}
//                   onChange={(e) => setTestResults(e.target.value)}
//                   fullWidth
//                   variant="outlined"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   id="manufacturer-info"
//                   label="Manufacturer's information"
//                   value={manufacturerInfo}
//                   onChange={(e) => setManufacturerInfo(e.target.value)}
//                   fullWidth
//                   variant="outlined"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   id="transaction-logs"
//                   label="Transaction logs"
//                   value={transactionLogs}
//                   onChange={(e) => setTransactionLogs(e.target.value)}
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
//                   Submit Medicine Production Log
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
import SupplyChain from "../../build/SupplyChain.json";

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

  const jwt =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJhNDM0N2YyNi1mMTcxLTRmNWQtYTRhZi0zNzIxNTlmZmQ2ZTIiLCJlbWFpbCI6Impvc2VwaHN0YWxpbjk4MUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiNDU5YTRhNWIwOTU0YWFkNzAxNmEiLCJzY29wZWRLZXlTZWNyZXQiOiJhZjBjODA0ZGY5NGJmNWVmNTVjMzkxNGZlMjZmYTVlMmJkMmMyMTJiODkzZTY3Yzg3ZmE3NGE4YjRmYTdlZjNhIiwiaWF0IjoxNzEzNzEyNDQ4fQ.7zRr4C37G-e2kGtLqAs0TFK18dbJMjH54AJRIfLPao8";

  const handleSubmission = async (e) => {
    e.preventDefault();
    try {
      const folder = "submit_logs"; // Specify the folder name

      const json = {
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

      const blob = new Blob([JSON.stringify(json, null, 2)], {
        type: "application/json",
      });
      const file = new File([blob], "log.json", {
        type: "application/json",
      });

      const formData = new FormData();
      formData.append("file", file, `${folder}/log.json`);

      const pinataMetadata = JSON.stringify({ name: `${folder}` });
      formData.append("pinataMetadata", pinataMetadata);

      const res = await fetch(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
          body: formData,
        }
      );

      const resData = await res.json();
      console.log(resData);

      // Store IPFS hash in blockchain
      const contract = new web3.eth.Contract(
        SupplyChain.abi,
        "0x4668b365cD3CEf8824AF47F9D02Ea7dB282f96a7"
      );
      const ipfsHash = resData.IpfsHash; // Assuming IpfsHash is the key in your resData JSON
      const accounts = await web3.eth.getAccounts();
      await contract.methods.storeMLogs(ipfsHash).send({ from: accounts[0] });

      // Retrieve all stored IPFS hashes
      const allHashes = await contract.methods.getAllMLogs().call();
      console.log("All mLog Hashes:", allHashes);

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
    } catch (error) {
      console.error("Error sending file to IPFS:", error);
    }
  };

  return (
    <Grid container className={classes.paper}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          <Typography component="h1" variant="h5">
            Submit Logs
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmission}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  id="medicine-id"
                  label="Medicine ID"
                  value={medicineId}
                  onChange={(e) => setMedicineId(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="medicine-description"
                  label="Medicine Description"
                  value={medicineDescription}
                  onChange={(e) => setMedicineDescription(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="quantity-produced"
                  label="Quantity Produced"
                  value={quantityProduced}
                  onChange={(e) => setQuantityProduced(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="raw-material-id"
                  label="Raw Material ID"
                  value={rawMaterialId}
                  onChange={(e) => setRawMaterialId(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="raw-material-description"
                  label="Raw Material Description"
                  value={rawMaterialDescription}
                  onChange={(e) => setRawMaterialDescription(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="quality-assurance-reports"
                  label="Quality Assurance Reports"
                  value={qualityAssuranceReports}
                  onChange={(e) => setQualityAssuranceReports(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="test-results"
                  label="Test Results"
                  value={testResults}
                  onChange={(e) => setTestResults(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="manufacturer-info"
                  label="Manufacturer Information"
                  value={manufacturerInfo}
                  onChange={(e) => setManufacturerInfo(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="transaction-logs"
                  label="Transaction Logs"
                  value={transactionLogs}
                  onChange={(e) => setTransactionLogs(e.target.value)}
                  fullWidth
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Submit
            </Button>
          </form>
        </div>
      </Container>
    </Grid>
  );
}
