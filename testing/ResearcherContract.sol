// pragma solidity ^0.6.6;

// pragma experimental ABIEncoderV2;


// import './SideEffectsContract.sol';

// contract ResearcherContract {
//     function getSideEffectsReports() public view returns (SideEffectsContract.SideEffectsReport[] memory) {

//    require(
//             userInfo[msg.sender].role == roles.Researcher,
//             "Only Researcher can call this function"
//         );

//     SideEffectsReport[] memory reports = new SideEffectsReport[](totalReports);

//     for (uint i = 1; i <= totalReports; i++) {
//         reports[i - 1] = sideEffectsReports[i];
//     }

//     return reports;
// }

// function getTotalReports() public view returns (uint) {
//     return totalReports;
// }
// }

// import './SideEffectsContract.sol';
// import "./Testing.sol";

// contract ResearcherContract is SupplyChain {
//     // Reference to the SideEffectsContract
//     SideEffectsContract.SideEffectsReport[] public sideEffectsReports;
//     uint public totalReports;

//     function getSideEffectsReports() public view returns (SideEffectsContract.SideEffectsReport[] memory) {
//         require(
//             SideEffectsContract.userInfo[msg.sender].role == SideEffectsContract.roles.Researcher,
//             "Only Researcher can call this function"
//         );

//         SideEffectsContract.SideEffectsReport[] memory reports = new SideEffectsContract.SideEffectsReport[](totalReports);

//         for (uint i = 1; i <= totalReports; i++) {
//             reports[i - 1] = sideEffectsReports[i];
//         }

//         return reports;
//     }

//     function getTotalReports() public view returns (uint) {
//         return totalReports;
//     }
// }