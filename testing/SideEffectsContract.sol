// pragma solidity ^0.6.6;

// pragma experimental ABIEncoderV2;

// import "./Testing.sol";

// contract InterfaceSideEffects {
//     function reportSideEffects(uint _medicineId,
//         uint _age,
//         string memory _gender,
//         string memory _location,
//         string memory _sideEffectsDescription,
//         string memory _pastDiseases) public;
// }


// contract SideEffectsContract{
//     struct SideEffectsReport {
//         address patientAddress;
//         uint medicineId;
//         uint age;
//         string gender;
//         string location;
//         string sideEffectsDescription;
//         string pastDiseases;
//     }

//     mapping(uint => SideEffectsReport) public sideEffectsReports;
//     uint public totalReports;

//     event SideEffectsReported(
//         address indexed PatientAddress,
//         uint indexed MedicineId,
//         uint Age,
//         string Gender,
//         string Location,
//         string SideEffectsDescription,
//         string PastDiseases
//     );

//     function reportSideEffects(
//         uint _medicineId,
//         uint _age,
//         string memory _gender,
//         string memory _location,
//         string memory _sideEffectsDescription,
//         string memory _pastDiseases
//     ) public {
//         totalReports++;
//         sideEffectsReports[totalReports] = SideEffectsReport({
//             patientAddress: msg.sender,
//             medicineId: _medicineId,
//             age: _age,
//             gender: _gender,
//             location: _location,
//             sideEffectsDescription: _sideEffectsDescription,
//             pastDiseases: _pastDiseases
//         });

//         emit SideEffectsReported(
//             msg.sender,
//             _medicineId,
//             _age,
//             _gender,
//             _location,
//             _sideEffectsDescription,
//             _pastDiseases
//         );
//     }
// }