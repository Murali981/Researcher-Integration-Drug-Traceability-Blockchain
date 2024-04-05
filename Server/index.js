const {
  SideEffects,
  MedicineProductionLog,
  DistributorLog,
  DrugRecall,
  Researcher,
} = require("../db");

const express = require("express");

const bodyParser = require("body-parser");

const cors = require("cors");

const crypto = require("crypto");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Route to register researcher
app.post("/registerResearcher", async (req, res) => {
  const { name, locationx, locationy, role, address } = req.body;

  // Generate a unique key (You can use any unique key generation mechanism here)
  const uniqueKey = generateUniqueKey(
    name,
    locationx,
    locationy,
    role,
    address
  );

  // Store researcher details in MongoDB
  const researcher = new Researcher({
    name,
    locationx,
    locationy,
    role,
    address,
    uniqueKey,
  });

  try {
    await researcher.save();
    res
      .status(200)
      .json({ message: "Researcher registered successfully.", uniqueKey });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

function generateUniqueKey(name, locationx, locationy, role, address) {
  // Concatenate researcher details
  const concatenatedString = `${name}${locationx}${locationy}${role}${address}`;

  // Hash the concatenated string using SHA256
  const uniqueKey = crypto
    .createHash("sha256")
    .update(concatenatedString)
    .digest("hex");

  return uniqueKey;
}

app.post("/getUniqueKey", async (req, res) => {
  const { name, locationx, locationy, role, address } = req.body;

  // Verify researcher's details and retrieve the unique key from the database
  try {
    const researcher = await Researcher.findOne({
      name,
      locationx,
      locationy,
      role,
      address,
    });
    if (!researcher) {
      return res.status(404).json({ error: "Researcher not found" });
    }
    const uniqueKey = researcher.uniqueKey;
    res.status(200).json({ uniqueKey });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// app.post("/reportSideEffects", async (req, res) => {
//   const {
//     medicineId,
//     age,
//     gender,
//     location,
//     sideEffectsDescription,
//     pastDiseases,
//   } = req.body;

//   const sideEffects = new SideEffects({
//     medicineId,
//     age,
//     gender,
//     location,
//     sideEffectsDescription,
//     pastDiseases,
//   });

//   try {
//     await sideEffects.save();
//     res
//       .status(200)
//       .json({ message: "Reported side effects stored in MongoDB." });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// Route to report side effects
// app.post("/reportSideEffects", async (req, res) => {
//   const {
//     medicineId,
//     age,
//     gender,
//     location,
//     sideEffectsDescription,
//     pastDiseases,
//   } = req.body;

//   // Retrieve researcher's unique key from the request header
//   const researcherUniqueKey = req.headers.researcher_unique_key;

//   console.log(researcherUniqueKey);

//   // Encrypt patient side effects using researcher's unique key
//   const encryptedSideEffects = encryptData(
//     sideEffectsDescription,
//     researcherUniqueKey
//   );

//   const sideEffects = new SideEffects({
//     medicineId,
//     age,
//     gender,
//     location,
//     sideEffectsDescription: encryptedSideEffects,
//     pastDiseases,
//   });

//   try {
//     await sideEffects.save();
//     res
//       .status(200)
//       .json({ message: "Reported side effects stored in MongoDB." });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

app.post("/reportSideEffects", async (req, res) => {
  const {
    medicineId,
    age,
    gender,
    location,
    sideEffectsDescription,
    pastDiseases,
  } = req.body;

  // Retrieve researcher's unique key from the request header
  const researcherUniqueKey = req.headers.researcher_unique_key;

  // Encrypt all patient side effects using researcher's unique key
  const encryptedData = encryptData(
    {
      medicineId,
      age,
      gender,
      location,
      sideEffectsDescription,
      pastDiseases,
    },
    researcherUniqueKey
  );

  console.log(encryptedData);

  // Create a new SideEffects document with encrypted data
  // const sideEffects = new SideEffects(encryptedData);
  const sideEffects = new SideEffects({
    iv: encryptedData.iv,
    encryptedData: encryptedData.encryptedData,
  });

  try {
    // Save the side effects document to MongoDB
    await sideEffects.save();
    res
      .status(200)
      .json({ message: "Reported side effects stored in MongoDB." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Function to encrypt data using a unique key
// const encryptData = (data, key) => {
//   const cipher = crypto.createCipheriv("aes-256-cbc", key);
//   let encrypted = cipher.update(data, "utf-8", "hex");
//   encrypted += cipher.final("hex");
//   return encrypted;
// };

// const encryptData = (data, key) => {
//   const iv = crypto.randomBytes(16); // Generate a random IV
//   const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
//   let encrypted = cipher.update(data, "utf-8", "hex");
//   encrypted += cipher.final("hex");
//   return {
//     iv: iv.toString("hex"), // Convert IV to string for storage/transfer
//     encryptedData: encrypted,
//   };
// };

// const encryptData = (data, key) => {
//   // Generate a random IV
//   const iv = crypto.randomBytes(16);

//   // Ensure key length is correct
//   const keyLength = 32; // 32 bytes = 256 bits (AES-256)
//   const adjustedKey = Buffer.alloc(keyLength);
//   const keyBuffer = Buffer.from(key, "hex");
//   keyBuffer.copy(adjustedKey);

//   // Create cipher with adjusted key and IV
//   const cipher = crypto.createCipheriv("aes-256-cbc", adjustedKey, iv);

//   // Perform encryption
//   let encrypted = cipher.update(data, "utf-8", "hex");
//   encrypted += cipher.final("hex");

//   // Concatenate IV and encrypted data into a single string
//   const encryptedData = iv.toString("hex") + encrypted;

//   return encryptedData;
// };

// Function to encrypt data using a unique key
// Function to ensure the key length is correct
const ensureKeyLength = (key) => {
  // Check if the key is a hexadecimal string
  if (/^[0-9a-fA-F]+$/.test(key)) {
    // If it's a hexadecimal string, convert it to bytes
    return Buffer.from(key, "hex");
  } else {
    // If it's a regular string, check its length
    if (key.length !== 32) {
      throw new Error(
        "Invalid key length. Key must be 32 bytes (256 bits) long."
      );
    }
    return key;
  }
};

// Function to encrypt data using a unique key
const encryptData = (data, key) => {
  // Ensure the key length is correct
  key = ensureKeyLength(key);

  // Generate a random IV
  const iv = crypto.randomBytes(16);

  // Create a cipher using the key and IV
  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);

  // Convert the data object to a JSON string
  const jsonData = JSON.stringify(data);

  // Encrypt the JSON data
  let encryptedData = cipher.update(jsonData, "utf-8", "hex");
  encryptedData += cipher.final("hex");

  // Return the encrypted data along with the IV
  return {
    iv: iv.toString("hex"),
    encryptedData: encryptedData,
  };
};

// // Function to decrypt data using a unique key
// const decryptData = (encryptedData, key) => {
//   const decipher = crypto.createDecipheriv("aes-256-cbc", key);
//   let decrypted = decipher.update(encryptedData, "hex", "utf-8");
//   decrypted += decipher.final("utf-8");
//   return decrypted;
// };

// app.get("/getSideEffectsReports", async (req, res) => {
//   try {
//     const reports = await SideEffects.find();
//     res.status(200).json(reports);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // Route to get side effects reports
// app.get("/getSideEffectsReports", async (req, res) => {
//   try {
//     // Retrieve researcher's unique key from the request header
//     const researcherUniqueKey = req.headers.researcher_unique_key;

//     // Fetch encrypted side effects from MongoDB
//     const reports = await SideEffects.find();

//     // Decrypt side effects using researcher's unique key
//     const decryptedReports = reports.map((report) => ({
//       ...report._doc,
//       sideEffectsDescription: decryptData(
//         report.sideEffectsDescription,
//         researcherUniqueKey
//       ),
//     }));

//     res.status(200).json(decryptedReports);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// Route to get side effects reports
// app.get("/getSideEffectsReports", async (req, res) => {
//   try {
//     // Retrieve researcher's unique key from the request header
//     const researcherUniqueKey = req.headers.researcher_unique_key;

//     // Fetch encrypted side effects from MongoDB
//     const reports = await SideEffects.find();

//     // Decrypt side effects using researcher's unique key
//     const decryptedReports = reports.map((report) => {
//       const decryptedData = {};

//       // Decrypt each field in the encryptedData object
//       Object.entries(report.encryptedData).forEach(([key, value]) => {
//         decryptedData[key] = decryptData(value, researcherUniqueKey);
//       });

//       // Construct the final decrypted report object
//       return {
//         medicineId: decryptData(
//           report.encryptedData.medicineId,
//           researcherUniqueKey
//         ),
//         age: decryptData(report.encryptedData.age, researcherUniqueKey),
//         gender: decryptData(report.encryptedData.gender, researcherUniqueKey),
//         location: decryptData(
//           report.encryptedData.location,
//           researcherUniqueKey
//         ),
//         sideEffectsDescription: decryptData(
//           report.encryptedData.sideEffectsDescription,
//           researcherUniqueKey
//         ),
//         pastDiseases: decryptData(
//           report.encryptedData.pastDiseases,
//           researcherUniqueKey
//         ),
//       };
//     });

//     res.status(200).json(decryptedReports);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// Route to get side effects reports
// app.get("/getSideEffectsReports", async (req, res) => {
//   try {
//     // Retrieve researcher's unique key from the request header
//     const researcherUniqueKey = req.headers.researcher_unique_key;

//     // Fetch encrypted side effects from MongoDB
//     const reports = await SideEffects.find();

//     // Decrypt side effects using researcher's unique key
//     const decryptedReports = reports.map((report) => ({
//       ...report._doc,
//       sideEffectsDescription: decryptData(
//         report.encryptedData,
//         researcherUniqueKey,
//         report.iv
//       ),
//     }));

//     res.status(200).json(decryptedReports);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// Route to get side effects reports
app.get("/getSideEffectsReports", async (req, res) => {
  try {
    // Retrieve researcher's unique key from the request header
    const researcherUniqueKey = req.headers.researcher_unique_key;

    // Fetch encrypted side effects from MongoDB
    const reports = await SideEffects.find();

    // Decrypt side effects using researcher's unique key
    const decryptedReports = reports.map((report) => {
      const iv = report.iv;
      const encryptedData = report.encryptedData;

      // Check if IV and encrypted data are present
      if (!iv || !encryptedData) {
        return {
          ...report._doc,
          sideEffectsDescription: "Error: IV or encrypted data missing",
        };
      }

      return {
        ...report._doc,
        sideEffectsDescription: decryptData(
          encryptedData,
          researcherUniqueKey,
          iv
        ),
      };
    });

    res.status(200).json(decryptedReports);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Function to decrypt data using a unique key
const decryptData = (encryptedData, key, iv) => {
  try {
    // Check if IV is provided
    if (!iv) {
      throw new Error("Initialization vector (IV) is missing.");
    }

    // Create a decipher object with the provided IV and key
    const decipher = crypto.createDecipheriv(
      "aes-256-cbc",
      key,
      Buffer.from(iv, "hex")
    );

    // Decrypt the data
    let decrypted = decipher.update(encryptedData, "hex", "utf-8");
    decrypted += decipher.final("utf-8");

    return decrypted;
  } catch (error) {
    console.error("Error decrypting data:", error);
    return null;
  }
};

// app.get("/getSideEffectsReports", async (req, res) => {
//   try {
//     const reports = await SideEffects.find();
//     res.status(200).json(reports);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

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

// Endpoint for Researcher to Submit Drug Recall Recommendation
app.post("/submitDrugRecall", async (req, res) => {
  const {
    researcherId,
    drugName,
    manufacturer,
    batchNumbers,
    reasonForRecall,
    evidence,
  } = req.body;

  // Create a new DrugRecall instance
  const drugRecall = new DrugRecall({
    researcherId,
    drugName,
    manufacturer,
    batchNumbers,
    reasonForRecall,
    evidence,
  });

  try {
    // Save the DrugRecall recommendation to the database
    await drugRecall.save();
    res
      .status(200)
      .json({ message: "Drug Recall Recommendation submitted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/getDrugRecalls", async (req, res) => {
  try {
    const recalls = await DrugRecall.find();
    res.status(200).json(recalls);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
