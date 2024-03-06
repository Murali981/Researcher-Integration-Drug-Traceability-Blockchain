// import React, { useState, useEffect, useCallback } from "react";

// const ViewDrugRecalls = ({ account, supplyChain, web3 }) => {
//   console.log(account);
//   const [recalls, setRecalls] = useState([]);

//   const fetchRecalls = useCallback(async () => {
//     try {
//       // Replace the URL with the endpoint where your server is hosted
//       const response = await fetch("http://localhost:5000/getDrugRecalls");
//       const data = await response.json();

//       console.log("Fetched Drug Recalls:", data);

//       setRecalls(data);
//     } catch (error) {
//       console.error("Error fetching recalls:", error);
//     }
//   }, []);

//   useEffect(() => {
//     fetchRecalls();
//   }, [fetchRecalls]);

//   console.log("Drug Recalls:", recalls);

//   return (
//     <div>
//       <h1>Drug Recalls</h1>
//       <ul>
//         {recalls.map((recall, index) => (
//           <li key={index}>
//             {/* Display recall details here, use recall.researcherId, recall.drugName, etc. */}
//             <p>Researcher ID: {recall.researcherId}</p>
//             <p>Drug Name: {recall.drugName}</p>
//             <p>Manufacturer: {recall.manufacturer}</p>
//             <p>Batch Numbers: {recall.batchNumbers.join(", ")}</p>
//             <p>Reason for Recall: {recall.reasonForRecall}</p>
//             <p>Evidence: {recall.evidence}</p>
//             <p>Timestamp: {recall.timestamp}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ViewDrugRecalls;

import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

// const RecallsContainer = styled.div`
//   max-width: 800px;
//   margin: 50px auto;
//   background-color: #fff;
//   padding: 20px;
//   border-radius: 8px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
// `;

// const RecallsList = styled.ul`
//   list-style: none;
//   padding: 0;
// `;

// const RecallItem = styled.li`
//   margin-bottom: 20px;
//   padding: 15px;
//   background-color: #fff;
//   border-radius: 8px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// `;

// const RecallText = styled.p`
//   margin: 0;
//   font-size: 16px;
//   color: #333;
// `;

const RecallsContainer = styled.div`
  max-width: 800px;
  margin: 50px auto;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const RecallsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const RecallItem = styled.li`
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

const RecallText = styled.p`
  margin: 0;
  font-size: 16px;
  color: #333;
  line-height: 1.6;
`;

const ViewDrugRecalls = ({ account, supplyChain, web3 }) => {
  console.log(account);
  const [recalls, setRecalls] = useState([]);

  const fetchRecalls = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:5000/getDrugRecalls");
      const data = await response.json();

      console.log("Fetched Drug Recalls:", data);

      setRecalls(data);
    } catch (error) {
      console.error("Error fetching recalls:", error);
    }
  }, []);

  useEffect(() => {
    fetchRecalls();
  }, [fetchRecalls]);

  console.log("Drug Recalls:", recalls);

  return (
    <RecallsContainer>
      <h1>Drug Recalls</h1>
      <RecallsList>
        {recalls.map((recall, index) => (
          <RecallItem key={index}>
            <RecallText>
              <b>Researcher ID:</b> {recall.researcherId}
            </RecallText>
            <RecallText>
              <b>Drug Name:</b> {recall.drugName}
            </RecallText>
            <RecallText>
              <b>Manufacturer: </b>
              {recall.manufacturer}
            </RecallText>
            <RecallText>
              <b> Batch Numbers:</b> {recall.batchNumbers.join(", ")}
            </RecallText>
            <RecallText>
              <b>Reason for Recall: </b> {recall.reasonForRecall}
            </RecallText>
            <RecallText>
              <b>Evidence:</b> {recall.evidence}
            </RecallText>
            <RecallText>
              <b>Timestamp: </b>
              {recall.recommendationDate}
            </RecallText>
          </RecallItem>
        ))}
      </RecallsList>
    </RecallsContainer>
  );
};

export default ViewDrugRecalls;
