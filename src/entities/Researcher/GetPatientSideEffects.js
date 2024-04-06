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

import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

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
  const [reports, setReports] = useState([]);

  const fetchReports = useCallback(async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/getSideEffectsReports",
        {
          headers: {
            researcher_unique_key:
              "aece8fffc809e438e81d26ec3009c7cfa064103934aebe715213f37c9333c2de", // Provide the researcher's unique key here
          },
        }
      );
      const data = await response.json();

      console.log("Fetched Reports:", data);

      // // Decrypt side effects description
      // const decryptedReports = data.map((report) => ({
      //   _id: report._id,
      //   sideEffectsDescription: JSON.parse(report.sideEffectsDescription),
      // }));

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
    <ReportsContainer>
      <h1>Side Effects Reports</h1>
      <ReportsList>
        {reports.map((report, index) => (
          <ReportItem key={index}>
            <ReportText>
              <b>Medicine ID:</b> {report.sideEffectsDescription.medicineId}
            </ReportText>
            <ReportText>
              <b>Age:</b> {report.sideEffectsDescription.age}
            </ReportText>
            <ReportText>
              <b>Gender:</b> {report.sideEffectsDescription.gender}
            </ReportText>
            <ReportText>
              <b>Location:</b> {report.sideEffectsDescription.location}
            </ReportText>
            <ReportText>
              <b>Side Effects Description:</b>{" "}
              {report.sideEffectsDescription.sideEffectsDescription}
            </ReportText>
            <ReportText>
              <b>Past Diseases:</b> {report.sideEffectsDescription.pastDiseases}
            </ReportText>
          </ReportItem>
        ))}
      </ReportsList>
    </ReportsContainer>
  );
};

export default GetPatientSideEffects;
