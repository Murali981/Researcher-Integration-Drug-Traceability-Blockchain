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

export default function ReportSideEffects({ account, supplyChain, web3 }) {
  console.log(account);
  const classes = useStyles();

  const [medicineId, setMedicineId] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [sideEffectsDescription, setSideEffectsDescription] = useState("");
  const [pastDiseases, setPastDiseases] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/reportSideEffects",
        {
          medicineId,
          age,
          gender,
          location,
          sideEffectsDescription,
          pastDiseases,
        },
        {
          headers: {
            researcher_unique_key:
              "f8c8bc31b2ffa4316bf40680a1a455d231cacc8cfbe8bba0938991a5cd74ded6", // Replace with actual unique key
          },
        }
      );

      console.log(response.data);

      // Reset form fields
      setMedicineId("");
      setAge("");
      setGender("");
      setLocation("");
      setSideEffectsDescription("");
      setPastDiseases("");
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
            Report Side Effects
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
