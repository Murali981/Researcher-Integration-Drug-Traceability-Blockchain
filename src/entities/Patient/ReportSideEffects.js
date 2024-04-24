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
//     width: "100%", // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// export default function ReportSideEffects({ account, supplyChain, web3 }) {
//   console.log(account);
//   const classes = useStyles();

//   const [medicineId, setMedicineId] = useState("");
//   const [age, setAge] = useState("");
//   const [gender, setGender] = useState("");
//   const [location, setLocation] = useState("");
//   const [sideEffectsDescription, setSideEffectsDescription] = useState("");
//   const [pastDiseases, setPastDiseases] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/reportSideEffects",
//         {
//           medicineId,
//           age,
//           gender,
//           location,
//           sideEffectsDescription,
//           pastDiseases,
//         }
//       );

//       console.log(response.data);

//       // Reset form fields
//       setMedicineId("");
//       setAge("");
//       setGender("");
//       setLocation("");
//       setSideEffectsDescription("");
//       setPastDiseases("");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <Grid container className={classes.paper}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <div>
//           <Typography component="h1" variant="h5">
//             Report Side Effects
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
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   id="age"
//                   label="Age"
//                   type="number"
//                   value={age}
//                   onChange={(e) => setAge(e.target.value)}
//                   fullWidth
//                   variant="outlined"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   id="gender"
//                   label="Gender"
//                   value={gender}
//                   onChange={(e) => setGender(e.target.value)}
//                   fullWidth
//                   variant="outlined"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   id="location"
//                   label="Location"
//                   value={location}
//                   onChange={(e) => setLocation(e.target.value)}
//                   fullWidth
//                   variant="outlined"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   id="side-effects-description"
//                   label="Side Effects Description"
//                   multiline
//                   rows={4}
//                   value={sideEffectsDescription}
//                   onChange={(e) => setSideEffectsDescription(e.target.value)}
//                   fullWidth
//                   variant="outlined"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   id="past-diseases"
//                   label="Past Diseases"
//                   multiline
//                   rows={4}
//                   value={pastDiseases}
//                   onChange={(e) => setPastDiseases(e.target.value)}
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
//                   Report Side Effects
//                 </Button>
//               </Grid>
//             </Grid>
//           </form>
//         </div>
//       </Container>
//     </Grid>
//   );
// }

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
//     width: "100%", // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// export default function ReportSideEffects({ account, supplyChain, web3 }) {
//   console.log(account);
//   const classes = useStyles();

//   const [medicineId, setMedicineId] = useState("");
//   const [age, setAge] = useState("");
//   const [gender, setGender] = useState("");
//   const [location, setLocation] = useState("");
//   const [sideEffectsDescription, setSideEffectsDescription] = useState("");
//   const [pastDiseases, setPastDiseases] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/reportSideEffects",
//         {
//           medicineId,
//           age,
//           gender,
//           location,
//           sideEffectsDescription,
//           pastDiseases,
//         },
//         {
//           headers: {
//             researcher_unique_key:
//               "f8c8bc31b2ffa4316bf40680a1a455d231cacc8cfbe8bba0938991a5cd74ded6", // Replace with actual unique key
//           },
//         }
//       );

//       console.log(response.data);

//       // Reset form fields
//       setMedicineId("");
//       setAge("");
//       setGender("");
//       setLocation("");
//       setSideEffectsDescription("");
//       setPastDiseases("");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <Grid container className={classes.paper}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <div>
//           <Typography component="h1" variant="h5">
//             Report Side Effects
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
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   id="age"
//                   label="Age"
//                   type="number"
//                   value={age}
//                   onChange={(e) => setAge(e.target.value)}
//                   fullWidth
//                   variant="outlined"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   id="gender"
//                   label="Gender"
//                   value={gender}
//                   onChange={(e) => setGender(e.target.value)}
//                   fullWidth
//                   variant="outlined"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   id="location"
//                   label="Location"
//                   value={location}
//                   onChange={(e) => setLocation(e.target.value)}
//                   fullWidth
//                   variant="outlined"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   id="side-effects-description"
//                   label="Side Effects Description"
//                   multiline
//                   rows={4}
//                   value={sideEffectsDescription}
//                   onChange={(e) => setSideEffectsDescription(e.target.value)}
//                   fullWidth
//                   variant="outlined"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   id="past-diseases"
//                   label="Past Diseases"
//                   multiline
//                   rows={4}
//                   value={pastDiseases}
//                   onChange={(e) => setPastDiseases(e.target.value)}
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
//                   Report Side Effects
//                 </Button>
//               </Grid>
//             </Grid>
//           </form>
//         </div>
//       </Container>
//     </Grid>
//   );
// }

// const [medicineId, setMedicineId] = useState("");
// const [age, setAge] = useState("");
// const [gender, setGender] = useState("");
// const [location, setLocation] = useState("");
// const [sideEffectsDescription, setSideEffectsDescription] = useState("");
// const [pastDiseases, setPastDiseases] = useState("");

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     const response = await axios.post(
//       "http://localhost:5000/reportSideEffects",
//       {
//         medicineId,
//         age,
//         gender,
//         location,
//         sideEffectsDescription,
//         pastDiseases,
//       },
//       {
//         headers: {
//           researcher_unique_key:
//             "aece8fffc809e438e81d26ec3009c7cfa064103934aebe715213f37c9333c2de", // Replace with actual unique key
//         },
//       }
//     );

//     console.log(response.data);

//     // Reset form fields
//     setMedicineId("");
//     setAge("");
//     setGender("");
//     setLocation("");
//     setSideEffectsDescription("");
//     setPastDiseases("");
//   } catch (error) {
//     console.error(error);
//   }
// };

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

export default function ReportSideEffects({ account, supplyChain, web3 }) {
  console.log(account);
  const classes = useStyles();

  const [medicineId, setMedicineId] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [sideEffectsDescription, setSideEffectsDescription] = useState("");
  const [pastDiseases, setPastDiseases] = useState("");

  const jwt =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJhNDM0N2YyNi1mMTcxLTRmNWQtYTRhZi0zNzIxNTlmZmQ2ZTIiLCJlbWFpbCI6Impvc2VwaHN0YWxpbjk4MUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiOTNkODRhODEyNTRmNWEzNDA1YTkiLCJzY29wZWRLZXlTZWNyZXQiOiI5MjFlNGY0MGU3Y2QwOWY2ZmVmYzk4OWRkYzE5MGEzNTVkNTg1MzA4Zjc0NzQwNzYwODBhMGJkYWQ0ZjA1NTdjIiwiaWF0IjoxNzEzMjYwMjM3fQ.HTHPkfcYP2tKxMGrh7tQrUmMUqzGahQfZJcOdTUWmPY";

  // const handleSubmission = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const folder = "report_side_effects"; // Specify the folder name

  //     const json = {
  //       medicineId,
  //       age,
  //       gender,
  //       location,
  //       sideEffectsDescription,
  //       pastDiseases,
  //     };

  //     const blob = new Blob([JSON.stringify(json, null, 2)], {
  //       type: "application/json",
  //     });
  //     const file = new File([blob], "report.json", {
  //       type: "application/json",
  //     });

  //     const formData = new FormData();
  //     formData.append("file", file, `${folder}/report.json`);

  //     const pinataMetadata = JSON.stringify({ name: `${folder}` });
  //     console.log(pinataMetadata);
  //     formData.append("pinataMetadata", pinataMetadata);

  //     const res = await fetch(
  //       "https://api.pinata.cloud/pinning/pinFileToIPFS",
  //       {
  //         method: "POST",
  //         headers: {
  //           Authorization: `Bearer ${jwt}`,
  //         },
  //         body: formData,
  //       }
  //     );

  //     const resData = await res.json();
  //     console.log(resData);

  //     //  you can call your blockchain function here

  //     // Store IPFS hash in blockchain
  //     const contract = new web3.eth.Contract(
  //       SupplyChain.abi,
  //       "0xEd2f4d104A9f91ccD4dA9380Ac3f0c5f48EBBf45"
  //     );
  //     const ipfsHash = resData.IpfsHash; // Assuming IpfsHash is the key in your resData JSON
  //     const accounts = await web3.eth.getAccounts();
  //     await contract.methods
  //       .storeIPFSHash(ipfsHash)
  //       .send({ from: accounts[0] });

  //     // Reset form fields
  //     setMedicineId("");
  //     setAge("");
  //     setGender("");
  //     setLocation("");
  //     setSideEffectsDescription("");
  //     setPastDiseases("");
  //   } catch (error) {
  //     console.error("Error sending file to IPFS:", error);
  //   }
  // };

  const handleSubmission = async (e) => {
    e.preventDefault();
    try {
      const folder = "report_side_effects"; // Specify the folder name

      const json = {
        medicineId,
        age,
        gender,
        location,
        sideEffectsDescription,
        pastDiseases,
      };

      const blob = new Blob([JSON.stringify(json, null, 2)], {
        type: "application/json",
      });
      const file = new File([blob], "report.json", {
        type: "application/json",
      });

      const formData = new FormData();
      formData.append("file", file, `${folder}/report.json`);

      const pinataMetadata = JSON.stringify({ name: `${folder}` });
      console.log(pinataMetadata);
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
        "0x41592d255eEaA94189F021c33790E9394c781139"
      );
      const ipfsHash = resData.IpfsHash; // Assuming IpfsHash is the key in your resData JSON
      const accounts = await web3.eth.getAccounts();
      await contract.methods
        .storeIPFSHash(ipfsHash)
        .send({ from: accounts[0] });

      // // Retrieve all stored IPFS hashes
      // const allHashes = await contract.methods.getAllIPFSHashes().call();
      // console.log("All IPFS Hashes:", allHashes);

      // Reset form fields
      setMedicineId("");
      setAge("");
      setGender("");
      setLocation("");
      setSideEffectsDescription("");
      setPastDiseases("");
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
            Report Side Effects
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
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="age"
                  label="Age"
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="gender"
                  label="Gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="location"
                  label="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="side-effects-description"
                  label="Side Effects Description"
                  multiline
                  rows={4}
                  value={sideEffectsDescription}
                  onChange={(e) => setSideEffectsDescription(e.target.value)}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="past-diseases"
                  label="Past Diseases"
                  multiline
                  rows={4}
                  value={pastDiseases}
                  onChange={(e) => setPastDiseases(e.target.value)}
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
                  Report Side Effects
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </Grid>
  );
}
