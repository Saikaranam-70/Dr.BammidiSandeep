import React, { useEffect, useRef, useState } from "react";
import {
  FaTooth,
  FaLungs,
  FaHeartbeat,
  FaDna,
  FaStethoscope,
  FaFlask,
  FaUserNurse,
  FaUserMd,
  FaMicroscope,
  FaTint,
  FaBone,
  FaAppleAlt,
  FaAllergies,
  FaFish,
  FaSmoking,
  FaSun,
  FaVial,
} from "react-icons/fa";
import { GiKidneys, GiLiver, GiStomach, GiFemale, GiBrain, GiRibbon } from "react-icons/gi";
import "./CancerInfo.css";
import { useTranslation } from "react-i18next";


// const cancerData = [
//   {
//     name: "Breast Cancer",
//     icon: <GiRibbon color="#e91e63" size={48} />,
//     riskFactors: "Age, Family history, BRCA mutations, obesity, hormonal therapy, late pregnancy, radiation exposure",
//     investigations: [
//       "Mammography for women older than 35 years",
//       "Ultrasound for younger women than 35 years",
//       "MRI case on case basis",
//       "Core biopsy and IHC for receptor status of ER, PR, HER2",
//       "Staging with PET–CT/CECT TAP & bone scan",
//       "Locally advanced cases require staging",
//     ],
//     treatment: [
//       "Individualized as per IHC receptor status",
//       "ER/PR positive – Hormonal therapy as an adjuvant",
//       "HER2 positive – anti-HER2 targeted therapy (Trastuzumab) as adjuvant & maintenance + Chemotherapy",
//       "Triple negative – Neoadjuvant or adjuvant (early) Chemotherapy",
//       "Early Stage: Surgery (lumpectomy + radiation/mastectomy), axillary lymph node dissection or sentinel node biopsy",
//       "Locally Advanced Stage: Neoadjuvant treatment then surgery + radiation",
//     ],
//   },
//   { 
//     name: "Oral Cavity Cancer", 
//     icon: <FaTooth color="#8e44ad" size={48} />, 
//     riskFactors: "Tobacco use, alcohol consumption, HPV infection, poor oral hygiene, betel quid chewing, UV light exposure (for lip cancer)",
//     investigations: [
//       "Clinical examination and biopsy",
//       "CT/MRI for local extent and nodal involvement",
//       "Panendoscopy to rule out second primary tumors",
//       "PET-CT for advanced cases to detect metastases",
//       "Dental evaluation before treatment"
//     ],
//     treatment: [
//       "Early stage: Surgery or radiation therapy",
//       "Advanced stage: Combination of surgery, radiation, and chemotherapy",
//       "Reconstruction after extensive resections",
//       "Neck dissection for nodal involvement",
//       "Targeted therapy (Cetuximab) for recurrent/metastatic cases"
//     ]
//   },
//   { 
//     name: "Colon Cancer", 
//     icon: <GiStomach color="#27ae60" size={48} />, 
//     riskFactors: "Age, family history, polyps, inflammatory bowel disease, low-fiber diet, obesity, smoking, Lynch syndrome, FAP",
//     investigations: [
//       "Colonoscopy with biopsy",
//       "CT colonography if colonoscopy incomplete",
//       "CEA level (tumor marker)",
//       "CT chest/abdomen/pelvis for staging",
//       "MRI for rectal cancer evaluation",
//       "Genetic testing for hereditary syndromes"
//     ],
//     treatment: [
//       "Surgical resection (colectomy) with lymph node removal",
//       "Adjuvant chemotherapy for stage III and high-risk stage II",
//       "Radiation therapy for rectal cancer",
//       "Targeted therapies (bevacizumab, cetuximab) for metastatic disease",
//       "Immunotherapy for MSI-H tumors",
//       "Regular surveillance after treatment"
//     ]
//   },
//   { 
//     name: "Rectal Cancer", 
//     icon: <FaHeartbeat color="#c0392b" size={48} />, 
//     riskFactors: "Similar to colon cancer plus pelvic radiation exposure, high-fat diet, sedentary lifestyle",
//     investigations: [
//       "Digital rectal exam",
//       "Colonoscopy with biopsy",
//       "Endorectal ultrasound for local staging",
//       "Pelvic MRI for detailed assessment",
//       "CT chest/abdomen/pelvis for distant metastases",
//       "PET-CT in selected cases"
//     ],
//     treatment: [
//       "Neoadjuvant chemoradiation for locally advanced cases",
//       "Total mesorectal excision surgery",
//       "Adjuvant chemotherapy",
//       "Local excision for very early tumors",
//       "Sphincter-sparing techniques when possible",
//       "Palliative therapies for metastatic disease"
//     ]
//   },
//   { 
//     name: "Cervical Cancer", 
//     icon: <GiFemale color="#9b59b6" size={48} />, 
//     riskFactors: "HPV infection, multiple sexual partners, early sexual activity, smoking, immunosuppression, long-term oral contraceptive use",
//     investigations: [
//       "Pap smear screening",
//       "Colposcopy with biopsy",
//       "HPV DNA testing",
//       "Pelvic exam under anesthesia",
//       "MRI for local staging",
//       "CT/PET-CT for advanced disease"
//     ],
//     treatment: [
//       "Early stage: Cone biopsy or hysterectomy",
//       "Radical hysterectomy with lymph node dissection",
//       "Chemoradiation for locally advanced disease",
//       "Brachytherapy (internal radiation)",
//       "Palliative chemotherapy for metastatic disease",
//       "HPV vaccination for prevention"
//     ]
//   },
//   { 
//     name: "Ovarian Cancer", 
//     icon: <FaDna color="#2980b9" size={48} />, 
//     riskFactors: "Age, family history, BRCA mutations, nulliparity, endometriosis, hormone replacement therapy, obesity",
//     investigations: [
//       "Pelvic exam and transvaginal ultrasound",
//       "CA-125 tumor marker",
//       "CT abdomen/pelvis",
//       "Paracentesis if ascites present",
//       "Genetic testing for BRCA mutations",
//       "Exploratory laparotomy/laparoscopy for diagnosis"
//     ],
//     treatment: [
//       "Surgical debulking (optimal cytoreduction)",
//       "Platinum-based chemotherapy",
//       "PARP inhibitors for BRCA-mutated cancers",
//       "Anti-angiogenic therapy (bevacizumab)",
//       "Secondary cytoreduction in selected cases",
//       "Prophylactic surgery for high-risk patients"
//     ]
//   },
//   { 
//     name: "Uterine Cancer", 
//     icon: <FaUserNurse color="#d35400" size={48} />, 
//     riskFactors: "Obesity, unopposed estrogen exposure, tamoxifen use, nulliparity, late menopause, Lynch syndrome",
//     investigations: [
//       "Endometrial biopsy",
//       "Dilation and curettage (D&C)",
//       "Transvaginal ultrasound",
//       "MRI for local staging",
//       "CT for advanced disease",
//       "Genetic testing for hereditary syndromes"
//     ],
//     treatment: [
//       "Total hysterectomy with bilateral salpingo-oophorectomy",
//       "Lymph node dissection",
//       "Radiation therapy for high-risk cases",
//       "Hormonal therapy for early-stage or recurrent disease",
//       "Chemotherapy for advanced/metastatic disease",
//       "Immunotherapy for MSI-H tumors"
//     ]
//   },
//   { 
//     name: "Esophageal Cancer", 
//     icon: <FaStethoscope color="#34495e" size={48} />, 
//     riskFactors: "Smoking, alcohol, GERD, Barrett's esophagus, obesity, achalasia, hot beverage consumption, low fruit/vegetable diet",
//     investigations: [
//       "Upper endoscopy with biopsy",
//       "Endoscopic ultrasound for staging",
//       "CT chest/abdomen/pelvis",
//       "PET-CT for metastatic evaluation",
//       "Bronchoscopy for proximal tumors",
//       "Laparoscopy for selected cases"
//     ],
//     treatment: [
//       "Early stage: Endoscopic resection",
//       "Surgery (esophagectomy) for resectable tumors",
//       "Neoadjuvant chemoradiation",
//       "Definitive chemoradiation for unresectable cases",
//       "Palliative stenting or radiation",
//       "Immunotherapy for advanced disease"
//     ]
//   },
//   { 
//     name: "Stomach Cancer", 
//     icon: <GiStomach color="#16a085" size={48} />, 
//     riskFactors: "H. pylori infection, smoked/salted food diet, smoking, pernicious anemia, family history, previous stomach surgery",
//     investigations: [
//       "Upper endoscopy with biopsy",
//       "Endoscopic ultrasound",
//       "CT chest/abdomen/pelvis",
//       "Laparoscopy for peritoneal evaluation",
//       "HER2 testing for advanced disease",
//       "Tumor markers (CEA, CA19-9)"
//     ],
//     treatment: [
//       "Surgical resection (gastrectomy) with lymph node dissection",
//       "Adjuvant chemoradiation or chemotherapy",
//       "Perioperative chemotherapy",
//       "Targeted therapy (Trastuzumab for HER2+)",
//       "Palliative chemotherapy",
//       "Immunotherapy for PD-L1 positive tumors"
//     ]
//   },
//   { 
//     name: "Sarcoma", 
//     icon: <FaBone color="#7f8c8d" size={48} />, 
//     riskFactors: "Previous radiation exposure, certain genetic syndromes (Li-Fraumeni, NF1), chemical exposure (vinyl chloride, dioxins), chronic lymphedema",
//     investigations: [
//       "MRI for local extent (soft tissue sarcoma)",
//       "CT for bone sarcomas",
//       "Biopsy with molecular testing",
//       "PET-CT for staging",
//       "Chest CT (common metastasis site)",
//       "Genetic counseling for hereditary syndromes"
//     ],
//     treatment: [
//       "Wide local excision with negative margins",
//       "Limb-sparing surgery when possible",
//       "Radiation therapy for local control",
//       "Neoadjuvant/adjuvant chemotherapy for high-grade tumors",
//       "Targeted therapies for specific subtypes",
//       "Amputation in selected cases"
//     ]
//   },
//   { 
//     name: "Urinary Bladder Cancer", 
//     icon: <FaTint color="#1abc9c" size={48} />, 
//     riskFactors: "Smoking, occupational chemical exposure (dyes, rubber, paint), chronic bladder inflammation, cyclophosphamide use, arsenic exposure",
//     investigations: [
//       "Cystoscopy with biopsy",
//       "Urine cytology",
//       "CT urogram",
//       "MRI for muscle-invasive disease",
//       "Transurethral resection for staging",
//       "PD-L1 testing for advanced disease"
//     ],
//     treatment: [
//       "Non-muscle invasive: TURBT + intravesical BCG/chemotherapy",
//       "Muscle-invasive: Radical cystectomy with urinary diversion",
//       "Neoadjuvant chemotherapy",
//       "Bladder preservation protocols (chemo-radiation)",
//       "Immunotherapy for advanced disease",
//       "Surveillance cystoscopies"
//     ]
//   },
//   { 
//     name: "Kidney Cancer", 
//     icon: <GiKidneys color="#2ecc71" size={48} />, 
//     riskFactors: "Smoking, obesity, hypertension, acquired cystic kidney disease, Von Hippel-Lindau syndrome, long-term dialysis",
//     investigations: [
//       "CT abdomen with contrast",
//       "MRI for complex cases",
//       "Chest imaging for staging",
//       "Biopsy for small/indeterminate masses",
//       "Bone scan if symptomatic",
//       "Genetic testing for hereditary cases"
//     ],
//     treatment: [
//       "Partial or radical nephrectomy",
//       "Active surveillance for small masses",
//       "Ablation techniques for selected cases",
//       "Targeted therapies (sunitinib, pazopanib)",
//       "Immunotherapy combinations",
//       "Cytoreductive nephrectomy for metastatic disease"
//     ]
//   },
//   { 
//     name: "Testicular Cancer", 
//     icon: <FaUserMd color="#e67e22" size={48} />, 
//     riskFactors: "Cryptorchidism, family history, Klinefelter syndrome, Caucasian race, prior testicular cancer",
//     investigations: [
//       "Scrotal ultrasound",
//       "Tumor markers (AFP, HCG, LDH)",
//       "CT abdomen/pelvis",
//       "Chest imaging",
//       "Brain MRI if symptomatic",
//       "Post-orchiectomy markers"
//     ],
//     treatment: [
//       "Radical inguinal orchiectomy",
//       "Surveillance for early stage",
//       "Adjuvant chemotherapy or radiation",
//       "RPLND for residual masses",
//       "High-dose chemo with stem cell rescue",
//       "Excellent cure rates even in advanced disease"
//     ]
//   },
//   { 
//     name: "Gallbladder Cancer", 
//     icon: <FaAppleAlt color="#27ae60" size={48} />, 
//     riskFactors: "Gallstones, chronic inflammation, porcelain gallbladder, female gender, obesity, primary sclerosing cholangitis",
//     investigations: [
//       "Ultrasound first imaging modality",
//       "CT/MRI for staging",
//       "MRCP for biliary tree evaluation",
//       "Endoscopic ultrasound with biopsy",
//       "Laparoscopy for resectability assessment",
//       "CA19-9 tumor marker"
//     ],
//     treatment: [
//       "Radical cholecystectomy with liver resection",
//       "Lymph node dissection",
//       "Adjuvant chemotherapy/capecitabine",
//       "Palliative biliary stenting",
//       "Gemcitabine-based chemotherapy for advanced disease",
//       "Aggressive surgery for early detection"
//     ]
//   },
//   { 
//     name: "Liver Cancer", 
//     icon: <GiLiver color="#e74c3c" size={48} />, 
//     riskFactors: "Chronic hepatitis B/C, cirrhosis, alcohol, NAFLD, aflatoxin exposure, hemochromatosis, alpha-1 antitrypsin deficiency",
//     investigations: [
//       "Ultrasound surveillance in high-risk patients",
//       "Multiphase CT or MRI",
//       "AFP tumor marker",
//       "Biopsy if imaging inconclusive",
//       "Endoscopy for varices assessment",
//       "Child-Pugh score for liver function"
//     ],
//     treatment: [
//       "Surgical resection if adequate liver function",
//       "Liver transplantation within Milan criteria",
//       "Local ablation (RFA, microwave)",
//       "Transarterial chemoembolization (TACE)",
//       "Targeted therapies (sorafenib, lenvatinib)",
//       "Immunotherapy combinations"
//     ]
//   },
//   { 
//     name: "Pancreatic Cancer", 
//     icon: <FaFlask color="#8e44ad" size={48} />, 
//     riskFactors: "Smoking, chronic pancreatitis, diabetes, obesity, family history, BRCA mutations, hereditary syndromes (Peutz-Jeghers)",
//     investigations: [
//       "CT pancreas protocol",
//       "Endoscopic ultrasound with biopsy",
//       "MRCP for biliary evaluation",
//       "CA19-9 tumor marker",
//       "PET-CT for metastatic workup",
//       "Genetic testing for hereditary cases"
//     ],
//     treatment: [
//       "Whipple procedure for head tumors",
//       "Distal pancreatectomy for body/tail",
//       "Neoadjuvant therapy for borderline resectable",
//       "Gemcitabine/nab-paclitaxel or FOLFIRINOX",
//       "Palliative biliary stenting",
//       "PARP inhibitors for BRCA mutations"
//     ]
//   },
//   { 
//     name: "Skin Cancer", 
//     icon: <FaSun color="#f1c40f" size={48} />, 
//     riskFactors: "UV radiation exposure, fair skin, history of sunburns, immunosuppression, family history, arsenic exposure, multiple nevi",
//     investigations: [
//       "Full skin examination",
//       "Dermoscopy",
//       "Excisional biopsy",
//       "Sentinel lymph node biopsy for melanoma",
//       "CT/MRI for advanced melanoma",
//       "BRAF mutation testing for melanoma"
//     ],
//     treatment: [
//       "Surgical excision with margins",
//       "Mohs surgery for basal cell carcinoma",
//       "Topical therapies for superficial lesions",
//       "Radiation therapy for selected cases",
//       "Immunotherapy for advanced melanoma",
//       "Targeted therapy for BRAF-mutated melanoma"
//     ]
//   },
//   { 
//     name: "Lung Cancer", 
//     icon: <FaLungs color="#95a5a6" size={48} />, 
//     riskFactors: "Smoking, radon exposure, asbestos, air pollution, family history, previous radiation therapy, certain chemicals (arsenic, nickel)",
//     investigations: [
//       "CT chest with contrast",
//       "PET-CT for staging",
//       "Biopsy (bronchoscopy, CT-guided, EBUS)",
//       "Molecular testing (EGFR, ALK, ROS1, PD-L1)",
//       "MRI brain if symptomatic",
//       "Pulmonary function tests"
//     ],
//     treatment: [
//       "Surgical resection (lobectomy) for early stage",
//       "SBRT for medically inoperable",
//       "Adjuvant chemotherapy for stage II-III",
//       "Targeted therapies for driver mutations",
//       "Immunotherapy for PD-L1 positive tumors",
//       "Palliative radiation for symptoms"
//     ]
//   },
//   { 
//     name: "Laryngeal Cancer", 
//     icon: <FaSmoking color="#c0392b" size={48} />, 
//     riskFactors: "Tobacco use, alcohol consumption, HPV infection, GERD, occupational exposures (asbestos, sulfuric acid), poor nutrition",
//     investigations: [
//       "Laryngoscopy with biopsy",
//       "CT/MRI neck with contrast",
//       "PET-CT for advanced cases",
//       "Speech/swallowing evaluation",
//       "Panendoscopy to rule out second primaries",
//       "Chest imaging for metastases"
//     ],
//     treatment: [
//       "Early stage: Radiation or endoscopic resection",
//       "Advanced: Laryngectomy with neck dissection",
//       "Organ preservation protocols (chemo-radiation)",
//       "Voice rehabilitation post-laryngectomy",
//       "Targeted therapy (Cetuximab)",
//       "Palliative care for metastatic disease"
//     ]
//   },
//   { 
//     name: "Thyroid Cancer", 
//     icon: <FaVial color="#9b59b6" size={48} />, 
//     riskFactors: "Radiation exposure (especially childhood), family history, certain genetic syndromes (MEN2, FAP), female gender, iodine deficiency",
//     investigations: [
//       "Thyroid ultrasound",
//       "FNA biopsy",
//       "Thyroid function tests",
//       "CT/MRI for large or invasive tumors",
//       "Thyroglobulin and anti-thyroglobulin antibodies",
//       "Genetic testing for medullary thyroid cancer"
//     ],
//     treatment: [
//       "Total thyroidectomy for most cases",
//       "Lymph node dissection if involved",
//       "Radioactive iodine ablation",
//       "TSH suppression therapy",
//       "Targeted therapies for advanced disease",
//       "Regular thyroglobulin monitoring"
//     ]
//   },
//   { 
//     name: "Gastrointestinal Stromal", 
//     icon: <FaFlask color="#34495e" size={48} />, 
//     riskFactors: "Most are sporadic, rare familial forms (Carney triad, NF1), no clear environmental risk factors, KIT/PDGFRA mutations",
//     investigations: [
//       "CT abdomen/pelvis with contrast",
//       "Endoscopic ultrasound with biopsy",
//       "PET scan for imatinib response assessment",
//       "KIT/PDGFRA mutation testing",
//       "MRI for rectal GISTs",
//       "Tumor size and mitotic rate assessment"
//     ],
//     treatment: [
//       "Surgical resection with negative margins",
//       "Imatinib for intermediate/high risk or metastatic",
//       "Suninitib for imatinib-resistant GIST",
//       "Regorafenib as third-line therapy",
//       "Debulking surgery for responsive metastatic disease",
//       "Lifelong surveillance due to recurrence risk"
//     ]
//   },
// ];
export default function CancerInfo() {
  const { t, i18n } = useTranslation();
  const [selectedKey, setSelectedKey] = useState(null);
  const [cancerInfo, setCancerInfo] = useState({});
  const detailsRef = useRef(null);

  useEffect(() => {
    // Load cancerInfo with proper error handling
    try {
      const info = t('cancerInfo', { returnObjects: true });
      if (info && typeof info === 'object' && !Array.isArray(info)) {
        setCancerInfo(info);
        if (!selectedKey && Object.keys(info).length > 0) {
          setSelectedKey(Object.keys(info)[0]);
        }
      } else {
        console.error('Invalid cancerInfo structure:', info);
      }
    } catch (error) {
      console.error('Error loading cancerInfo:', error);
    }
  }, [t, i18n.language]); // Re-run when language changes

  const handleSelect = (key) => {
    setSelectedKey(key);
    if (window.innerWidth <= 768 && detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!selectedKey || !cancerInfo[selectedKey]) {
    return <div>Loading cancer information...</div>;
  }

  const selectedCancer = cancerInfo[selectedKey];

  return (
    <div className="cancer-container">
      <div className="cancer-sidebar">
        {Object.keys(cancerInfo).map((key) => (
          <button
            key={key}
            className={`cancer-tab ${selectedKey === key ? "active" : ""}`}
            onClick={() => handleSelect(key)}
          >
            {cancerInfo[key].name}
          </button>
        ))}
      </div>

      <div className="cancer-details" ref={detailsRef}>
        <div className="cancer-header">
          <h2>{selectedCancer.name}</h2>
        </div>
        
        {selectedCancer.riskFactors && (
          <p>
            <span className="section-title">{t("risk_factors")}: </span>
            {selectedCancer.riskFactors}
          </p>
        )}
        
        {selectedCancer.investigations?.length > 0 && (
          <div>
            <p className="section-title">{t("investigations")}:</p>
            <ul>
              {selectedCancer.investigations.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        
        {selectedCancer.treatment?.length > 0 && (
          <div>
            <p className="section-title">{t("treatment")}:</p>
            <ul>
              {selectedCancer.treatment.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}