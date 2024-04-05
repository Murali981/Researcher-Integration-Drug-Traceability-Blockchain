// import React, { useState, useEffect, useCallback } from "react";

// const GetManufacturerLogs = ({ account, supplyChain, web3 }) => {
//   const [logs, setLogs] = useState([]);

//   const fetchLogs = useCallback(async () => {
//     try {
//       // Replace the URL with the endpoint where your server is hosted
//       const response = await fetch(
//         "http://localhost:5000/getMedicineProductionLogs"
//       );
//       const data = await response.json();

//       console.log("Fetched Medicine Production Logs:", data);

//       setLogs(data);
//     } catch (error) {
//       console.error("Error fetching logs:", error);
//     }
//   }, []);

//   useEffect(() => {
//     fetchLogs();
//   }, [fetchLogs]);

//   console.log("Medicine Production Logs:", logs);

//   return (
//     <div>
//       <h1>Medicine Production Logs</h1>
//       <ul>
//         {logs.map((log, index) => (
//           <li key={index}>
//             {/* Display log details here, use log.medicineId, log.medicineDescription, etc. */}
//             <p>Medicine ID: {log.medicineId}</p>
//             <p>Description: {log.medicineDescription}</p>
//             <p>Quantity Produced: {log.quantityProduced}</p>
//             <p>Raw Material ID: {log.rawMaterialId}</p>
//             <p>Raw Material Description: {log.rawMaterialDescription}</p>
//             <p>Quality Assurance Reports: {log.qualityAssuranceReports}</p>
//             <p>Test Results: {log.testResults}</p>
//             <p>Manufacturer Info: {log.manufacturerInfo}</p>
//             <p>Transaction Logs: {log.transactionLogs}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default GetManufacturerLogs;

import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

const LogsContainer = styled.div`
  max-width: 800px;
  margin: 50px auto;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const LogsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const LogItem = styled.li`
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

const LogText = styled.p`
  margin: 0;
  font-size: 16px;
  color: #333;
  line-height: 1.6;
`;

const GetManufacturerLogs = ({ account, supplyChain, web3 }) => {
  const [logs, setLogs] = useState([]);

  const fetchLogs = useCallback(async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/getMedicineProductionLogs"
      );
      const data = await response.json();

      console.log("Fetched Medicine Production Logs:", data);

      setLogs(data);
    } catch (error) {
      console.error("Error fetching logs:", error);
    }
  }, []);

  useEffect(() => {
    fetchLogs();
  }, [fetchLogs]);

  console.log("Medicine Production Logs:", logs);

  return (
    <LogsContainer>
      <h1>Medicine Production Logs</h1>
      <LogsList>
        {logs.map((log, index) => (
          <LogItem key={index}>
            <LogText>
              <b>Medicine ID:</b> {log.medicineId}
            </LogText>
            <LogText>
              <b>Description:</b> {log.medicineDescription}
            </LogText>
            <LogText>
              <b>Quantity Produced:</b> {log.quantityProduced}
            </LogText>
            <LogText>
              <b>Raw Material ID:</b> {log.rawMaterialId}
            </LogText>
            <LogText>
              <b>Raw Material Description:</b> {log.rawMaterialDescription}
            </LogText>
            <LogText>
              <b>Quality Assurance Reports:</b> {log.qualityAssuranceReports}
            </LogText>
            <LogText>
              <b>Test Results:</b> {log.testResults}
            </LogText>
            <LogText>
              <b>Manufacturer Info:</b> {log.manufacturerInfo}
            </LogText>
            <LogText>
              <b>Transaction Logs:</b> {log.transactionLogs}
            </LogText>
          </LogItem>
        ))}
      </LogsList>
    </LogsContainer>
  );
};

export default GetManufacturerLogs;
