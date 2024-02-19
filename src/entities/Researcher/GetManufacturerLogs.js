import React, { useState, useEffect, useCallback } from "react";

const GetManufacturerLogs = ({ account, supplyChain, web3 }) => {
  const [logs, setLogs] = useState([]);

  const fetchLogs = useCallback(async () => {
    try {
      // Replace the URL with the endpoint where your server is hosted
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
    <div>
      <h1>Medicine Production Logs</h1>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>
            {/* Display log details here, use log.medicineId, log.medicineDescription, etc. */}
            <p>Medicine ID: {log.medicineId}</p>
            <p>Description: {log.medicineDescription}</p>
            <p>Quantity Produced: {log.quantityProduced}</p>
            <p>Raw Material ID: {log.rawMaterialId}</p>
            <p>Raw Material Description: {log.rawMaterialDescription}</p>
            <p>Quality Assurance Reports: {log.qualityAssuranceReports}</p>
            <p>Test Results: {log.testResults}</p>
            <p>Manufacturer Info: {log.manufacturerInfo}</p>
            <p>Transaction Logs: {log.transactionLogs}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetManufacturerLogs;
