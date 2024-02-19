import React, { useState, useEffect, useCallback } from "react";

const GetDistributorLogs = ({ account, supplyChain, web3 }) => {
  console.log(account);
  const [logs, setLogs] = useState([]);

  const fetchLogs = useCallback(async () => {
    try {
      // Replace the URL with the endpoint where your server is hosted
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
    <div>
      <h1>Distributor Logs</h1>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>
            {/* Display log details here, use log.medicineId, log.distributorId, etc. */}
            <p>Medicine ID: {log.medicineId}</p>
            <p>Distributor ID: {log.distributorId}</p>
            <p>Received Quantity: {log.receivedQuantity}</p>
            <p>Issue Description: {log.issueDescription}</p>
            <p>Resolution: {log.resolution}</p>
            <p>Timestamp: {log.timestamp}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetDistributorLogs;
