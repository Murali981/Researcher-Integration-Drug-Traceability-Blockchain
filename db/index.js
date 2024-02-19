const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:C37qG4fpCsiu9oxv@subapp.8vlvon1.mongodb.net/Patient",
  {
    useNewUrlParser: true,
  }
);

const sideEffectsSchema = new mongoose.Schema({
  medicineId: String,
  age: Number,
  gender: String,
  location: String,
  sideEffectsDescription: String,
  pastDiseases: String,
});

const medicineProductionLogSchema = new mongoose.Schema({
  medicineId: {
    type: String,
    required: true,
  },
  medicineDescription: {
    type: String,
    required: true,
  },
  quantityProduced: {
    type: Number,
    required: true,
  },
  rawMaterialId: {
    type: String,
    required: true,
  },
  rawMaterialDescription: {
    type: String,
    required: true,
  },
  qualityAssuranceReports: {
    type: String,
    required: true,
  },
  testResults: {
    type: String,
    required: true,
  },
  manufacturerInfo: {
    type: String,
    required: true,
  },
  transactionLogs: {
    type: String,
    required: true,
  },
});

const distributorLogSchema = new mongoose.Schema({
  medicineId: {
    type: String,
    required: true,
  },
  distributorId: {
    type: String,
    required: true,
  },
  receivedQuantity: {
    type: Number,
    required: true,
  },
  issueDescription: {
    type: String,
    required: true,
  },
  resolution: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const DistributorLog = mongoose.model("DistributorLog", distributorLogSchema);

const MedicineProductionLog = mongoose.model(
  "MedicineProductionLog",
  medicineProductionLogSchema
);

const SideEffects = mongoose.model("SideEffects", sideEffectsSchema);

module.exports = { SideEffects, MedicineProductionLog, DistributorLog };
