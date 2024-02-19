const { SideEffects, MedicineProductionLog, DistributorLog } = require("../db");

const express = require("express");

const bodyParser = require("body-parser");

const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/reportSideEffects", async (req, res) => {
  const {
    medicineId,
    age,
    gender,
    location,
    sideEffectsDescription,
    pastDiseases,
  } = req.body;

  const sideEffects = new SideEffects({
    medicineId,
    age,
    gender,
    location,
    sideEffectsDescription,
    pastDiseases,
  });

  try {
    await sideEffects.save();
    res
      .status(200)
      .json({ message: "Reported side effects stored in MongoDB." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/getSideEffectsReports", async (req, res) => {
  try {
    const reports = await SideEffects.find();
    res.status(200).json(reports);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/submitMedicineProductionLog", async (req, res) => {
  const {
    medicineId,
    medicineDescription,
    quantityProduced,
    rawMaterialId,
    rawMaterialDescription,
    qualityAssuranceReports,
    testResults,
    manufacturerInfo,
    transactionLogs,
  } = req.body;

  const medicineProductionLog = new MedicineProductionLog({
    medicineId,
    medicineDescription,
    quantityProduced,
    rawMaterialId,
    rawMaterialDescription,
    qualityAssuranceReports,
    testResults,
    manufacturerInfo,
    transactionLogs,
  });

  try {
    await medicineProductionLog.save();
    res
      .status(200)
      .json({ message: "Medicine production log stored in MongoDB." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/getMedicineProductionLogs", async (req, res) => {
  try {
    const Logs = await MedicineProductionLog.find();
    res.status(200).json(Logs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/submitDistributorLog", async (req, res) => {
  const {
    medicineId,
    distributorId,
    receivedQuantity,
    issueDescription,
    resolution,
  } = req.body;

  const distributorLog = new DistributorLog({
    medicineId,
    distributorId,
    receivedQuantity,
    issueDescription,
    resolution,
  });

  try {
    await distributorLog.save();
    res.status(200).json({ message: "Distributor log stored in MongoDB." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/getDistributorLogs", async (req, res) => {
  try {
    const logs = await DistributorLog.find();
    res.status(200).json(logs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
