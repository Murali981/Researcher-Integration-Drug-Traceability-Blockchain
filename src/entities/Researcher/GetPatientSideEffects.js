// // React component to display side effects reports
// import React, { useState, useEffect } from "react";
// import { getSideEffectsReport } from "../../contracts/SupplyChain"; // Import the function to interact with the smart contract

// const GetPatientSideEffects = () => {
//   const [reports, setReports] = useState([]);

//   useEffect(() => {
//     // Implement logic to fetch side effects reports from the blockchain
//     const fetchReports = async () => {
//       const totalReports = await getTotalSideEffectsReports(); // Implement this function
//       const reportsArray = [];

//       for (let i = 0; i < totalReports; i++) {
//         const report = await getSideEffectsReport(i);
//         reportsArray.push(report);
//       }

//       setReports(reportsArray);
//     };

//     fetchReports();
//   }, []); // Run this effect only once

//   return (
//     <div>
//       <h1>Side Effects Reports</h1>
//       <ul>
//         {reports.map((report, index) => (
//           <li key={index}>
//             <p>Patient Address: {report.patientAddress}</p>
//             <p>Medicine ID: {report.medicineId}</p>
//             {/* Include other report details here */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default GetPatientSideEffects;

// React component to display side effects reports
// import React, { useState, useEffect } from "react";
// import {
//   getSideEffectsReports,
//   SideEffectsReportedEvent,
// } from "../../../testing"; // Import the function to interact with the smart contract

// const GetPatientSideEffects = () => {
//   const [reports, setReports] = useState([]);

//   useEffect(() => {
//     // Implement logic to fetch side effects reports from the blockchain
//     const fetchReports = async () => {
//       const sideEffectsReports = await getSideEffectsReports(); // Implement this function

//       // Listen for SideEffectsReported events to update the UI in real-time
//       const eventListener = SideEffectsReportedEvent().on("data", (event) => {
//         const newReport = event.returnValues;
//         setReports((prevReports) => [...prevReports, newReport]);
//       });

//       setReports(sideEffectsReports);

//       return () => {
//         // Cleanup event listener when component unmounts
//         eventListener.unsubscribe();
//       };
//     };

//     fetchReports();
//   }, []); // Run this effect only once

//   return (
//     <div style={{ margin: "20px" }}>
//       <h1>Side Effects Reports</h1>
//       <ul style={{ listStyle: "none", padding: 0 }}>
//         {reports.map((report, index) => (
//           <li
//             key={index}
//             style={{
//               border: "1px solid #ddd",
//               padding: "10px",
//               marginBottom: "10px",
//               borderRadius: "5px",
//             }}
//           >
//             <p>
//               <strong>Patient Address:</strong> {report.patientAddress}
//             </p>
//             <p>
//               <strong>Medicine ID:</strong> {report.medicineId}
//             </p>
//             <p>
//               <strong>Age:</strong> {report.age}
//             </p>
//             <p>
//               <strong>Gender:</strong> {report.gender}
//             </p>
//             <p>
//               <strong>Location:</strong> {report.location}
//             </p>
//             <p>
//               <strong>Side Effects Description:</strong>{" "}
//               {report.sideEffectsDescription}
//             </p>
//             <p>
//               <strong>Past Diseases:</strong> {report.pastDiseases}
//             </p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default GetPatientSideEffects;

// const GetPatientSideEffects = ({ account, supplyChain, web3 }) => {
//   const [reports, setReports] = useState([]);

//   // Wrap fetchReports in useCallback
//   const fetchReports = useCallback(async () => {
//     const totalReports = await supplyChain.methods.totalReports().call();
//     const reportsArray = [];
//     for (let i = 1; i <= totalReports; i++) {
//       const report = await supplyChain.methods.getSideEffectsReport(i).call();
//       reportsArray.push(report);
//     }
//     setReports(reportsArray);
//   }, [supplyChain.methods]);

//   useEffect(() => {
//     // Subscribe to SideEffectsReported events to update the UI in real-time
//     const eventListener = supplyChain.events
//       .SideEffectsReported({ fromBlock: "latest" })
//       .on("data", (event) => {
//         const newReport = event.returnValues;
//         setReports((prevReports) => [...prevReports, newReport]);
//       });

//     fetchReports();

//     return () => {
//       // Cleanup event listener when component unmounts
//       eventListener.unsubscribe();
//     };
//   }, [account, fetchReports, web3]);

//   const reportSideEffects = async (
//     medicineId,
//     age,
//     gender,
//     location,
//     sideEffectsDescription,
//     pastDiseases
//   ) => {
//     // Use web3 to send a transaction to report side effects
//     await supplyChain.methods
//       .reportSideEffects(
//         medicineId,
//         age,
//         gender,
//         location,
//         sideEffectsDescription,
//         pastDiseases
//       )
//       .send({ from: account });

//     // After reporting, fetch the updated reports
//     fetchReports();
//   };

//   return (
//     <div>
//       <h1>Side Effects Reports</h1>
//       <button
//         onClick={() => reportSideEffects(/* pass necessary parameters */)}
//       >
//         Report Side Effects
//       </button>
//       <ul>
//         {reports.map((report, index) => (
//           <li key={index}>
//             <p>Patient Address: {report.patientAddress}</p>
//             <p>Medicine ID: {report.medicineId}</p>
//             <p>Age: {report.age}</p>
//             <p>Gender: {report.gender}</p>
//             <p>Location: {report.location}</p>
//             <p>Side Effects Description: {report.sideEffectsDescription}</p>
//             <p>Past Diseases: {report.pastDiseases}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default GetPatientSideEffects;

// const GetPatientSideEffects = ({ account, supplyChain, web3 }) => {
//   const [reports, setReports] = useState([]);

//   // Wrap fetchReports in useCallback
//   const fetchReports = useCallback(async () => {
//     // Use web3 to get the total reports from the smart contract
//     const totalReports = await supplyChain.methods.getTotalReports().call();

//     // Use web3 to fetch side effects reports from the blockchain
//     const reportsArray = [];
//     for (let i = 1; i <= totalReports; i++) {
//       const report = await supplyChain.methods.getSideEffectsReport(i).call();
//       reportsArray.push(report);
//     }

//     setReports(reportsArray);
//   }, [supplyChain.methods]); // Add supplyChain.methods as a dependency

//   useEffect(() => {
//     // Subscribe to SideEffectsReported events to update the UI in real-time
//     const eventListener = supplyChain.events
//       .SideEffectsReported({ fromBlock: "latest" })
//       .on("data", (event) => {
//         const newReport = event.returnValues;
//         setReports((prevReports) => [...prevReports, newReport]);
//       });

//     fetchReports();

//     return () => {
//       // Cleanup event listener when component unmounts
//       eventListener.unsubscribe();
//     };
//   }, [account, fetchReports, web3, supplyChain.events]); // Add account, fetchReports, and web3 as dependencies

//   return (
//     <div>
//       <h1>Side Effects Reports</h1>
//       <ul>
//         {reports.map((report, index) => (
//           <li key={index}>
//             <p>Patient Address: {report.patientAddress}</p>
//             <p>Medicine ID: {report.medicineId}</p>
//             <p>Age: {report.age}</p>
//             <p>Gender: {report.gender}</p>
//             <p>Location: {report.location}</p>
//             <p>Side Effects Description: {report.sideEffectsDescription}</p>
//             <p>Past Diseases: {report.pastDiseases}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default GetPatientSideEffects;

// const GetPatientSideEffects = ({ account, supplyChain, web3 }) => {
//   console.log(account);
//   const [reports, setReports] = useState([]);

//   const fetchReports = useCallback(async () => {
//     try {
//       const totalReports = await supplyChain.methods.getTotalReports().call();
//       console.log("Total Reports:", totalReports);

//       const reportsArray = [];
//       for (let i = 1; i <= totalReports; i++) {
//         const report = await supplyChain.methods.getSideEffectsReport(i).call();
//         reportsArray.push(report);
//       }
//       console.log("Fetched Reports:", reportsArray);

//       setReports(reportsArray);
//     } catch (error) {
//       console.error("Error fetching reports:", error);
//     }
//   }, [supplyChain.methods]);

//   useEffect(() => {
//     fetchReports();
//   }, [fetchReports]);

//   useEffect(() => {
//     const eventListener = supplyChain.events
//       .SideEffectsReported({ fromBlock: "latest" })
//       .on("data", (event) => {
//         const newReport = event.returnValues;
//         setReports((prevReports) => [...prevReports, newReport]);
//       });

//     return () => {
//       eventListener.unsubscribe();
//     };
//   }, [account, web3, supplyChain.events]);

//   console.log("Reports:", reports);

//   return (
//     <div>
//       <h1>Side Effects Reports</h1>
//       <ul>
//         {reports.map((report, index) => (
//           <li key={index}>{/* Display report details here */}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default GetPatientSideEffects;

import React, { useState, useEffect, useCallback } from "react";

const GetPatientSideEffects = ({ account, supplyChain, web3 }) => {
  const [reports, setReports] = useState([]);

  const fetchReports = useCallback(async () => {
    try {
      // Replace the URL with the endpoint where your server is hosted
      const response = await fetch(
        "http://localhost:5000/getSideEffectsReports"
      );
      const data = await response.json();

      console.log("Fetched Reports:", data);

      setReports(data);
    } catch (error) {
      console.error("Error fetching reports:", error);
    }
  }, []);

  useEffect(() => {
    fetchReports();
  }, [fetchReports]);

  console.log("Reports:", reports);

  return (
    <div>
      <h1>Side Effects Reports</h1>
      <ul>
        {reports.map((report, index) => (
          <li key={index}>
            {/* Display report details here, use report.medicineId, report.age, etc. */}
            <p>Medicine ID: {report.medicineId}</p>
            <p>Age: {report.age}</p>
            <p>Gender: {report.gender}</p>
            <p>Location: {report.location}</p>
            <p>Side Effects Description: {report.sideEffectsDescription}</p>
            <p>Past Diseases: {report.pastDiseases}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetPatientSideEffects;
