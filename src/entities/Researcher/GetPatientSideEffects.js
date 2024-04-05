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

// Import necessary libraries
import React, { useState, useEffect, useCallback } from "react";
import crypto from "crypto";
import styled from "styled-components";

// Styled components for styling the UI
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

// Functional component to fetch and display side effects
const GetPatientSideEffects = ({ account, supplyChain, web3 }) => {
  // State to store fetched reports
  const [reports, setReports] = useState([]);

  // Function to fetch side effects reports from the backend
  const fetchReports = useCallback(async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/getSideEffectsReports",
        {
          headers: {
            researcher_unique_key: "RESEARCHER_UNIQUE_KEY_HERE", // Replace with actual unique key provided by the researcher
          },
        }
      );
      const data = await response.json();

      console.log("Fetched Reports:", data);

      setReports(data);
    } catch (error) {
      console.error("Error fetching reports:", error);
    }
  }, []);

  // Effect hook to fetch reports when component mounts
  useEffect(() => {
    fetchReports();
  }, [fetchReports]);

  // Render the UI with fetched reports
  return (
    <ReportsContainer>
      <h1>Side Effects Reports</h1>
      <ReportsList>
        {reports.map((report, index) => (
          <ReportItem key={index}>
            <ReportText>
              <b>Medicine ID:</b> {report.medicineId}
            </ReportText>
            <ReportText>
              <b>Age:</b> {report.age}
            </ReportText>
            <ReportText>
              <b>Gender:</b> {report.gender}
            </ReportText>
            <ReportText>
              <b>Location:</b> {report.location}
            </ReportText>
            <ReportText>
              <b>Side Effects Description:</b>{" "}
              {decryptData(
                report.sideEffectsDescription,
                "RESEARCHER_UNIQUE_KEY_HERE"
              )}{" "}
              {/* Decrypt side effects */}
            </ReportText>
            <ReportText>
              <b>Past Diseases:</b> {report.pastDiseases}
            </ReportText>
          </ReportItem>
        ))}
      </ReportsList>
    </ReportsContainer>
  );
};

// // Function to decrypt side effects data
// const decryptData = (encryptedData, key) => {
//   try {
//     // Create a decipher object with the same algorithm and key
//     const decipher = crypto.createDecipheriv("aes-256-cbc", key);

//     // Decrypt the data
//     let decrypted = decipher.update(encryptedData, "hex", "utf-8");
//     decrypted += decipher.final("utf-8");

//     return decrypted;
//   } catch (error) {
//     console.error("Error decrypting data:", error);
//     return null;
//   }
//   // Decrypt data using the provided key
//   // Implement decryption logic here
//   // For example, you can use the same decryption logic used on the server side
// };

export default GetPatientSideEffects;
