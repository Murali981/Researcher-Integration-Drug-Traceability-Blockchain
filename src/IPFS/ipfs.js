import React, { useState, useEffect } from "react";
import {
  Grid,
  Container,
  CssBaseline,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import ipfsClient from "ipfs-http-client";
import Web3 from "web3";

const PatientSideEffectsDisplay = () => {
  const [ipfsHash, setIpfsHash] = useState("");
  const [patientData, setPatientData] = useState({});
  const [loading, setLoading] = useState(false);

  const ipfs = ipfsClient({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
  });
  const web3 = new Web3(Web3.givenProvider || "http://localhost:8545"); // Use the correct provider

  useEffect(() => {
    // Replace '0x...' with the actual patient's IPFS hash from the blockchain
    const patientIpfsHashFromBlockchain = "0x...";

    setIpfsHash(patientIpfsHashFromBlockchain);
    fetchPatientData(patientIpfsHashFromBlockchain);
  }, []);

  const fetchPatientData = async (hash) => {
    try {
      setLoading(true);
      const ipfsResponse = await ipfs.cat(hash);
      const data = JSON.parse(ipfsResponse.toString());
      setPatientData(data);
    } catch (error) {
      console.error("Error fetching patient data from IPFS:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Grid container>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          <Typography component="h1" variant="h5">
            Patient Side Effects Data
          </Typography>
          {loading ? (
            <Typography>Loading...</Typography>
          ) : (
            <div>
              <Typography>Medicine ID: {patientData.medicineId}</Typography>
              <Typography>Age: {patientData.age}</Typography>
              <Typography>Gender: {patientData.gender}</Typography>
              <Typography>Location: {patientData.location}</Typography>
              <Typography>
                Side Effects Description: {patientData.sideEffectsDescription}
              </Typography>
              <Typography>Past Diseases: {patientData.pastDiseases}</Typography>
            </div>
          )}
        </div>
      </Container>
    </Grid>
  );
};

export default PatientSideEffectsDisplay;
