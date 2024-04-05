const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:C37qG4fpCsiu9oxv@subapp.8vlvon1.mongodb.net/SideEffects",
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
  iv: String, // Add iv field to store the initialization vector
  encryptedData: Object, // Add encryptedData field to store the encrypted data
});

const researcherSchema = new mongoose.Schema({
  name: String,
  locationx: String,
  locationy: String,
  role: String,
  address: String, // Storing Ethereum address as a string
  uniqueKey: String,
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

// Schema for Drug Recall Recommendation
const drugRecallSchema = new mongoose.Schema({
  researcherId: {
    type: String,
    required: true,
  },
  drugName: {
    type: String,
    required: true,
  },
  manufacturer: {
    type: String,
    required: true,
  },
  batchNumbers: {
    type: [String],
    required: true,
  },
  reasonForRecall: {
    type: String,
    required: true,
  },
  evidence: {
    type: String,
    required: true,
  },
  recommendationDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"],
    default: "Pending",
  },
});

// Model for Drug Recall Recommendation
const DrugRecall = mongoose.model("DrugRecall", drugRecallSchema);

const DistributorLog = mongoose.model("DistributorLog", distributorLogSchema);

const MedicineProductionLog = mongoose.model(
  "MedicineProductionLog",
  medicineProductionLogSchema
);

const SideEffects = mongoose.model("SideEffects", sideEffectsSchema);

const Researcher = mongoose.model("Researcher", researcherSchema);

module.exports = {
  SideEffects,
  MedicineProductionLog,
  DistributorLog,
  DrugRecall,
  Researcher,
};
