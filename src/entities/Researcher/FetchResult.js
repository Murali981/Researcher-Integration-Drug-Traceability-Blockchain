// import React from "react";

// const FetchResult = () => {
//   return (
//     <div className="result-container">
//       <ul className="result-list">
//         <li>
//           <span>March 1, 2024</span>
//           <ul>
//             <li>
//               <a
//                 data-entity-substitution="canonical"
//                 data-entity-type="node"
//                 data-entity-uuid="d172ee23-8cb9-459d-9f60-8fc6d1eba71b"
//                 href="/drugs/resources-information-approved-drugs/fda-approves-amivantamab-vmjw-egfr-exon-20-insertion-mutated-non-small-cell-lung-cancer-indications"
//                 title="FDA approves amivantamab-vmjw for EGFR exon 20 insertion-mutated non-small cell lung cancer indications"
//               >
//                 FDA approves amivantamab-vmjw for EGFR exon 20 insertion-mutated
//                 non-small cell lung cancer indications
//               </a>
//             </li>
//             <li>
//               <a href="https://www.accessdata.fda.gov/scripts/drugshortages/default.cfm">
//                 FDA Drug Shortages
//               </a>
//               <ul>
//                 <li>
//                   <a href="https://www.accessdata.fda.gov/scripts/drugshortages/dsp_ActiveIngredientDetails.cfm?AI=Insulin+%28human%29+Injection&amp;st=d&amp;tab=tabs-4&amp;panels=0">
//                     Insulin (human) Injection
//                   </a>{" "}
//                   (New - Discontinuation)
//                 </li>
//               </ul>
//             </li>
//           </ul>
//         </li>

//         {/* Repeat the structure for each entry in your data */}

//         {/* Add more entries as needed */}
//       </ul>
//       <ul>
//         <li>
//           <a href="https://www.accessdata.fda.gov/scripts/drugshortages/default.cfm">
//             FDA Drug Shortages
//           </a>
//           &nbsp;
//           <ul>
//             <li>
//               <a href="https://www.accessdata.fda.gov/scripts/drugshortages/dsp_ActiveIngredientDetails.cfm?AI=Naltrexone+Hydrochloride+Tablet&amp;st=c&amp;tab=tabs-4&amp;panels=0">
//                 Naltrexone Hydrochloride Tablet
//               </a>{" "}
//               (New - Currently in Shortage)
//             </li>
//           </ul>
//         </li>
//         <li>
//           Public Notifications:
//           <ul>
//             <li>
//               <a
//                 data-entity-substitution="canonical"
//                 data-entity-type="node"
//                 data-entity-uuid="e7298fc3-378e-47b8-9ac2-4163112b847a"
//                 href="/drugs/medication-health-fraud/quick-rheumatism-capsule-tiger-wang-biaod-contains-hidden-drug-ingredient"
//                 title="QUICK Rheumatism Capsule, Tiger Wang Biaod contains hidden drug ingredient"
//               >
//                 QUICK Rheumatism Capsule, Tiger Wang Biaod contains hidden drug
//                 ingredient
//               </a>
//             </li>
//             <li>
//               <a
//                 data-entity-substitution="canonical"
//                 data-entity-type="node"
//                 data-entity-uuid="a5ca988b-b91a-4085-a1f1-f2c8f53da256"
//                 href="/drugs/medication-health-fraud/snake-bones-anti-rheumatic-capsules-contains-hidden-drug-ingredient"
//                 title="SNAKE BONES Anti-Rheumatic Capsules contains hidden drug ingredient"
//               >
//                 SNAKE BONES Anti-Rheumatic Capsules contains hidden drug
//                 ingredient
//               </a>
//             </li>
//           </ul>
//         </li>
//         <li>
//           Workshop:
//           <a
//             data-entity-substitution="canonical"
//             data-entity-type="node"
//             data-entity-uuid="5215b6e8-dbc8-47d7-84c7-91b38697b38a"
//             href="/drugs/news-events-human-drugs/natural-history-studies-and-registries-development-rare-disease-treatments-05132024"
//             title="Natural History Studies and Registries in the Development of Rare Disease Treatments - 05/13/2024"
//           >
//             Natural History Studies and Registries in the Development of Rare
//             Disease Treatments
//           </a>
//         </li>
//         <li>
//           Final Guidance:
//           <a
//             data-entity-substitution="canonical"
//             data-entity-type="node"
//             data-entity-uuid="72f3101a-ba88-400f-9c31-9d476af8153a"
//             href="/regulatory-information/search-fda-guidance-documents/clinical-pharmacology-considerations-antibody-drug-conjugates-guidance-industry"
//             title="Clinical Pharmacology Considerations for Antibody-Drug Conjugates  Guidance for Industry"
//           >
//             Clinical Pharmacology Considerations for Antibody-Drug Conjugates
//             Guidance for Industry
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default FetchResult;

// const FetchResult = () => {
//   return (
//     <div className="result-container">
//       <h1>Researcher Results</h1>
//       <div>
//         <p>On March 1, 2024,</p>
//         <p>
//           Researcher published results on Amoxicillin based on patient side
//           effects collected from India:
//         </p>
//         <ul>
//           <li>
//             <b>Recommendations:</b>
//             <ul>
//               <li>
//                 Amoxicillin is effective for patients aged 18-60 and can be
//                 taken before meals.
//                 <a href="/medicine-details/amoxicillin">More details</a>
//               </li>
//               <li>
//                 Patients with a history of liver disease should avoid
//                 Amoxicillin. Alternative:
//                 <a href="/medicine-details/cephalexin">Cephalexin</a>.
//                 <a href="/medicine-details/cephalexin">More details</a>
//               </li>
//             </ul>
//           </li>
//           <li>
//             <b>Feedback to Manufacturers and Distributors:</b>
//             <ul>
//               <li>Improve packaging to maintain drug effectiveness.</li>
//               <li>
//                 Provide patient education materials on proper Amoxicillin usage.
//               </li>
//             </ul>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default FetchResult;
import React from "react";

const FetchResult = () => {
  return (
    <div className="result-container">
      <h1>Researcher Results</h1>
      <div>
        <b>On March 1, 2024</b>
        <p>
          Researcher published results on Amoxicillin based on patient side
          effects collected from India:
        </p>
        <ul>
          <li>
            <b>Personalized Recommendations:</b>
            <ul>
              <li>
                For patients aged 18-60 experiencing mild side effects, consider
                taking Amoxicillin 30 minutes before meals to improve
                absorption.{" "}
                <a href="/medicine-details/amoxicillin">More details</a>
              </li>
              <li>
                For patients with a history of liver disease, alternative
                medications like Cephalexin might be preferable. Discuss
                treatment options with your doctor.
                <a href="/medicine-details/cephalexin">
                  Cephalexin information
                </a>
                .
              </li>
              <li>
                Researchers are investigating the potential for genetic testing
                to predict individual responses to Amoxicillin. This could help
                tailor treatment in the future.
              </li>
            </ul>
          </li>
          <li>
            <b>Feedback to Manufacturers and Distributors:</b>
            <ul>
              <li>
                <b>Manufacturers:</b> Enhance manufacturing processes to
                minimize impurities, ensure consistent dosage, and improve drug
                stability. Implement quality control measures to verify the
                purity and potency of the active ingredients. Investigate
                advanced technologies such as continuous manufacturing to
                streamline production and reduce variability.
              </li>
              <li>
                <b>Distributors:</b> Maintain proper storage conditions within
                the recommended temperature range of 2°C to 8°C (36°F to 46°F)
                for Amoxicillin products to preserve drug potency. Utilize
                temperature monitoring devices to ensure compliance and prevent
                deviations. Implement secure handling practices to prevent
                exposure to light, moisture, and other environmental factors
                that may compromise drug integrity. Regularly audit storage
                facilities and transport vehicles to identify and address any
                potential risks to product quality.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FetchResult;
