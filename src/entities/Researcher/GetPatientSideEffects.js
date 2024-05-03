// import React, { useState, useEffect, useCallback } from "react";
// import styled from "styled-components";

// const ReportsContainer = styled.div`
//   max-width: 800px;
//   margin: 50px auto;
//   background-color: #f5f5f5;
//   padding: 20px;
//   border-radius: 10px;
//   box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
// `;

// const ReportsList = styled.ul`
//   list-style: none;
//   padding: 0;
// `;

// const ReportItem = styled.li`
//   margin-bottom: 20px;
//   padding: 15px;
//   background-color: #ffffff;
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   transition: transform 0.3s ease-in-out;

//   &:hover {
//     transform: scale(1.02);
//   }
// `;

// const ReportText = styled.p`
//   margin: 0;
//   font-size: 16px;
//   color: #333;
//   line-height: 1.6;
// `;

// const GetPatientSideEffects = ({ account, supplyChain, web3 }) => {
//   const [reports, setReports] = useState([]);

//   const fetchReports = useCallback(async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:5000/getSideEffectsReports"
//       );
//       const data = await response.json();

//       console.log("Fetched Reports:", data);

//       setReports(data);
//     } catch (error) {
//       console.error("Error fetching reports:", error);
//     }
//   }, []);

//   useEffect(() => {
//     fetchReports();
//   }, [fetchReports]);

//   console.log("Reports:", reports);

//   return (
//     <ReportsContainer>
//       <h1>Side Effects Reports</h1>
//       <ReportsList>
//         {reports.map((report, index) => (
//           <ReportItem key={index}>
//             <ReportText>
//               <b>Medicine ID:</b> {report.medicineId}
//             </ReportText>
//             <ReportText>
//               <b>Age:</b> {report.age}
//             </ReportText>
//             <ReportText>
//               <b>Gender:</b> {report.gender}
//             </ReportText>
//             <ReportText>
//               <b>Location:</b> {report.location}
//             </ReportText>
//             <ReportText>
//               <b>Side Effects Description:</b> {report.sideEffectsDescription}
//             </ReportText>
//             <ReportText>
//               <b>Past Diseases:</b> {report.pastDiseases}
//             </ReportText>
//           </ReportItem>
//         ))}
//       </ReportsList>
//     </ReportsContainer>
//   );
// };

// export default GetPatientSideEffects;

// import React, { useState, useEffect, useCallback } from "react";
// import styled from "styled-components";

// const ReportsContainer = styled.div`
//   max-width: 800px;
//   margin: 50px auto;
//   background-color: #f5f5f5;
//   padding: 20px;
//   border-radius: 10px;
//   box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
// `;

// const ReportsList = styled.ul`
//   list-style: none;
//   padding: 0;
// `;

// const ReportItem = styled.li`
//   margin-bottom: 20px;
//   padding: 15px;
//   background-color: #ffffff;
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   transition: transform 0.3s ease-in-out;

//   &:hover {
//     transform: scale(1.02);
//   }
// `;

// const ReportText = styled.p`
//   margin: 0;
//   font-size: 16px;
//   color: #333;
//   line-height: 1.6;
// `;

// const GetPatientSideEffects = ({ account, supplyChain, web3 }) => {
//   const [reports, setReports] = useState([]);

//   const fetchReports = useCallback(async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:5000/getSideEffectsReports",
//         {
//           headers: {
//             researcher_unique_key:
//               "aece8fffc809e438e81d26ec3009c7cfa064103934aebe715213f37c9333c2de", // Provide the researcher's unique key here
//           },
//         }
//       );
//       const data = await response.json();

//       console.log("Fetched Reports:", data);

//       // // Decrypt side effects description
//       // const decryptedReports = data.map((report) => ({
//       //   _id: report._id,
//       //   sideEffectsDescription: JSON.parse(report.sideEffectsDescription),
//       // }));

//       setReports(data);
//     } catch (error) {
//       console.error("Error fetching reports:", error);
//     }
//   }, []);

//   useEffect(() => {
//     fetchReports();
//   }, [fetchReports]);

//   console.log("Reports:", reports);

//   return (
//     <ReportsContainer>
//       <h1>Side Effects Reports</h1>
//       <ReportsList>
//         {reports.map((report, index) => (
//           <ReportItem key={index}>
//             <ReportText>
//               <b>Medicine ID:</b> {report.sideEffectsDescription.medicineId}
//             </ReportText>
//             <ReportText>
//               <b>Age:</b> {report.sideEffectsDescription.age}
//             </ReportText>
//             <ReportText>
//               <b>Gender:</b> {report.sideEffectsDescription.gender}
//             </ReportText>
//             <ReportText>
//               <b>Location:</b> {report.sideEffectsDescription.location}
//             </ReportText>
//             <ReportText>
//               <b>Side Effects Description:</b>{" "}
//               {report.sideEffectsDescription.sideEffectsDescription}
//             </ReportText>
//             <ReportText>
//               <b>Past Diseases:</b> {report.sideEffectsDescription.pastDiseases}
//             </ReportText>
//           </ReportItem>
//         ))}
//       </ReportsList>
//     </ReportsContainer>
//   );
// };

// export default GetPatientSideEffects;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SupplyChain from "../../build/SupplyChain.json";

const ReportsContainer = styled.div`
  max-width: 800px;
  margin: 50px auto;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const ReportsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ReportItem = styled.li`
  margin-bottom: 20px;
  padding: 15px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

const ReportText = styled.p`
  margin: 0;
  font-size: 16px;
  color: #333;
  line-height: 1.6;
`;

const GetPatientSideEffects = ({ account, supplyChain, web3 }) => {
  const [ipfsHashes, setIpfsHashes] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Call the smart contract function to get all IPFS hashes
  //       const contract = new web3.eth.Contract(
  //         SupplyChain.abi,
  //         "0x481647f56B8C80F22edbDa90f431a711327c90D0"
  //       );

  //       const accounts = await web3.eth.getAccounts();
  //       console.log(accounts[0]);
  //       const allHashes = await contract.methods
  //         .getAllIPFSHashes()
  //         .send({ from: accounts[0] });
  //       console.log("All IPFS Hashes:", allHashes);
  //       setIpfsHashes(allHashes);
  //     } catch (error) {
  //       console.error("Error fetching IPFS hashes:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Call the smart contract function to get all IPFS hashes
  //       const contract = new web3.eth.Contract(
  //         SupplyChain.abi,
  //         "0x1FF59D33689fF46A3d8cbB0dAdA1015eccf92F89"
  //       );

  //       const accounts = await web3.eth.getAccounts();
  //       console.log(accounts[0]);

  //       // Sign the message with the researcher's private key
  //       const messageHash = web3.utils.keccak256(
  //         web3.utils.encodePacked(
  //           0x22196e3a193b7248603a1da62d9995ee397b199294964de9e3fec78526a3a4ce,
  //           "AccessRequest"
  //         )
  //       );
  //       const signature = await web3.eth.sign(messageHash, accounts[0]);

  //       // Use call() instead of send()
  //       const allHashes = await contract.methods
  //         .getAllIPFSHashes(signature)
  //         .call({ from: accounts[0] });

  //       console.log("All IPFS Hashes:", allHashes);
  //       setIpfsHashes(allHashes);
  //     } catch (error) {
  //       console.error("Error fetching IPFS hashes:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Call the smart contract function to get all IPFS hashes
        const contract = new web3.eth.Contract(
          SupplyChain.abi,
          "0x1FF59D33689fF46A3d8cbB0dAdA1015eccf92F89"
        );

        const accounts = await web3.eth.getAccounts();
        console.log(accounts[0]);

        // Convert the private key to a hex string
        const researcherPrivateKey =
          "0xd5a8B720640c6F4866B131e89fabb8f64CDc0b56";
        const researcherPrivateKeyHex = web3.utils.isHexStrict(
          researcherPrivateKey
        )
          ? researcherPrivateKey
          : web3.utils.toHex(researcherPrivateKey);

        // Sign the message with the researcher's private key
        const messageHash = web3.utils.keccak256(
          web3.utils.encodePacked(researcherPrivateKeyHex, "AccessRequest")
        );
        const signature = await web3.eth.sign(messageHash, accounts[0]);

        // Use call() instead of send()
        const allHashes = await contract.methods
          .getAllIPFSHashes(signature)
          .call({ from: accounts[0] });

        console.log("All IPFS Hashes:", allHashes);
        setIpfsHashes(allHashes);
      } catch (error) {
        console.error("Error fetching IPFS hashes:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ReportsContainer>
      <h1>IPFS Hashes</h1>
      <ReportsList>
        {ipfsHashes.map((hash, index) => (
          <ReportItem key={index}>
            <ReportText>{hash}</ReportText>
          </ReportItem>
        ))}
      </ReportsList>
    </ReportsContainer>
  );
};

export default GetPatientSideEffects;
