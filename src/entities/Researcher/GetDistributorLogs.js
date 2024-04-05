// import React, { useState, useEffect, useCallback } from "react";

// const GetDistributorLogs = ({ account, supplyChain, web3 }) => {
//   console.log(account);
//   const [logs, setLogs] = useState([]);

//   const fetchLogs = useCallback(async () => {
//     try {
//       // Replace the URL with the endpoint where your server is hosted
//       const response = await fetch("http://localhost:5000/getDistributorLogs");
//       const data = await response.json();

//       console.log("Fetched Distributor Logs:", data);

//       setLogs(data);
//     } catch (error) {
//       console.error("Error fetching logs:", error);
//     }
//   }, []);

//   useEffect(() => {
//     fetchLogs();
//   }, [fetchLogs]);

//   console.log("Distributor Logs:", logs);

//   return (
//     <div>
//       <h1>Distributor Logs</h1>
//       <ul>
//         {logs.map((log, index) => (
//           <li key={index}>
//             {/* Display log details here, use log.medicineId, log.distributorId, etc. */}
//             <p>Medicine ID: {log.medicineId}</p>
//             <p>Distributor ID: {log.distributorId}</p>
//             <p>Received Quantity: {log.receivedQuantity}</p>
//             <p>Issue Description: {log.issueDescription}</p>
//             <p>Resolution: {log.resolution}</p>
//             <p>Timestamp: {log.timestamp}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default GetDistributorLogs;

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

const GetDistributorLogs = ({ account, supplyChain, web3 }) => {
  const [logs, setLogs] = useState([]);

  const fetchLogs = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:5000/getDistributorLogs");
      const data = await response.json();

      console.log("Fetched Distributor Logs:", data);

      setLogs(data);
    } catch (error) {
      console.error("Error fetching logs:", error);
    }
  }, []);

  useEffect(() => {
    fetchLogs();
  }, [fetchLogs]);

  console.log("Distributor Logs:", logs);

  return (
    <LogsContainer>
      <h1>Distributor Logs</h1>
      <LogsList>
        {logs.map((log, index) => (
          <LogItem key={index}>
            <LogText>
              <b>Medicine ID:</b> {log.medicineId}
            </LogText>
            <LogText>
              <b>Distributor ID:</b> {log.distributorId}
            </LogText>
            <LogText>
              <b>Received Quantity:</b> {log.receivedQuantity}
            </LogText>
            <LogText>
              <b>Issue Description:</b> {log.issueDescription}
            </LogText>
            <LogText>
              <b>Resolution:</b> {log.resolution}
            </LogText>
            <LogText>
              <b>Timestamp:</b> {log.timestamp}
            </LogText>
          </LogItem>
        ))}
      </LogsList>
    </LogsContainer>
  );
};

export default GetDistributorLogs;
