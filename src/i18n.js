import i18n from 'i18next'
import LanguageDetecter from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n.use(LanguageDetecter).use(initReactI18next).init({
    debug: true,
    lng: "en",
    resources: {
        en: {
            translation: {
                home_intro: "Dr. Bammidi Sandeep combines extensive surgical expertise with a deep understanding of patient concerns. His training under eminent oncologists across India and hands-on experience in performing complex cancer surgeries make him a reliable choice for patients seeking advanced treatment. He remains dedicated to bringing tertiary-level cancer care to regions like Kutch, ensuring that patients can receive high-quality treatment closer to home. For consultations and comprehensive cancer care, you can connect with Dr. Bommidi Sandeep to take the next step in your journey toward recovery.",
                home_name:"DR. Bammidi",
                home_second_name:"SANDEEP",
                home_hi:"HELLO I’M",
                home_intro2:"For consultations and comprehensive cancer care, you can connect with Dr. Bammidi Sandeep to take the next step in your journey toward recovery.",
                home_button:"Learn More",
                sidebar_link_home:"Home",
                sidebar_link_About:"About",
                sidebar_link_consultation:"Consultation",
                sidebar_link_testimonials:"Testimonials",
                sidebar_link_successStories:"Success Stories",
                sidebar_link_knowAboutCancer:"Know About Cancer",
                sidebar_link_certifications:"Certifications",
                sidebar_link_contact:"Contact",
                about_doctor_full_name:"Dr. Bammidi Sandeep, ",
                about_para1:"a dedicated Surgical Oncologist, hails from Andhra Pradesh, where his journey into medicine began with a strong academic foundation and an unwavering passion for patient care. From his early years, he displayed a deep sense of commitment to healthcare, which ultimately shaped his path toward becoming a highly specialized cancer surgeon.",
                about_para2:"Dr. Sandeep earned his MBBS in 2013 from Dr. PSIMS & RF, Andhra Pradesh, where he laid the groundwork for his medical career. His early clinical exposure and training in general medicine inspired him to further pursue surgery as his calling. Determined to enhance his surgical expertise, he embarked on advanced training that would later shape his journey into oncology.",
                about_para3:"In 2019, he completed his DNB in General Surgery from Malla Reddy Institute of Medical Sciences, Hyderabad, Telangana, a well-recognized institution for its extensive clinical practice and surgical training. This experience equipped him with the ability to manage a wide range of complex surgical cases and strengthened his foundation in operative care.",
                about_para4:"With a growing interest in oncology, Dr. Sandeep pursued the prestigious Doctorate of National Board (DrNB) in Surgical Oncology in 2023 at Prince Aly Khan Hospital, Mumbai, and HCG Manavata Cancer Centre, Nashik. Under the mentorship of leading oncologists, he refined his skills in advanced cancer surgeries and gained deep expertise in treating cancers across multiple subspecialties.",
                about_para5:"To further enhance his specialization, Dr. Sandeep achieved international recognition in 2025, earning certification as a HIPEC & PIPAC Surgeon at the National Cancer Centre, Singapore, where he trained in advanced peritoneal surface oncology procedures. In the same year, he also became a Certified Robotic Surgeon at SS Innovations, mastering cutting-edge robotic technology for minimally invasive cancer surgeries.",
                about_para6:"Through his extensive training and global exposure, Dr. Sandeep has developed a holistic and patient-centered approach to cancer treatment. His mission is to ensure that patients have access to advanced, evidence-based, and compassionate cancer care, bringing world-class expertise closer to communities in India and beyond.",
                about:"About",
                achievement1:"MBBS - 2013 - Dr PSIMS & RF , Andhra Pradesh",
                achievement2:"2019 - DNB General Surgery - MALLA REDDY INSTITUTE OF MEDICAL SCIENCES , HYDERABAD -TELANGANA",
                achievement3:"2023 - Doctorate of National Board (DrNB ) Surgical Oncology - PRINCE ALY KHAN HOSPITAL , MUMBAI / HCG MANVATA CANCER CENTRE , NASHIK",
                achievement4:"2025 - Certified HIPEC & PIPAC Surgeon - National Cancer Centre , Singapore",
                achievement4:"2025 - Certified Robotic Surgeon - SS INNOVATIONS",
                achievement:"Achievements",
                email:"Email",
                role:"Role",
                contactNo:"Contact No",
                risk_factors: "Risk Factors",
                investigations: "Investigations",
                treatment: "Treatment",
                cancer_specialist:"The FIRST Cancer Surgeon in Srikakulam",
                address:"Address",
                addressVal:"Trinetra Superspeciality Hospital, Day and Night Junction Srikakulam, Andhra Pradesh",
                workingHrs:"Working Hours",
                sendMessage:"Send Message",
                design:"Design and Developed By",
                kolors:"",
                title: "Organizations",
                titleAwards: "Honors & Awards",
    list: [
      {
        title: "Best Paper Award",
        issuer: "IASO NATCON 2022",
        date: "Oct 2022",
        details: "Podium presentation, Cash Prize of Rs 10000 by IASO"
      },
      {
        title: "Best Poster Award",
        issuer: "ASI",
        date: "Dec 2017",
        details: "ASICON 2017"
      },
      {
        title: "ASI Young Surgeon South Zone Torrent Pharma Award",
        issuer: "ASI",
        date: "Apr 2017",
        details: "Runner Up - Case Presentation RIF MASS"
      },
      {
        title: "Best Paper Award",
        issuer: "ASICON 2016",
        date: "Dec 2016",
        details: "Best Paper Award"
      }
    ],
  associated: "Associated with",
  orgs: [
    { name: "Association of Gynaecological Oncologists of India", role: "Life Member", date: "Oct 2024 - Present" },
    { name: "Association of breast surgeons of India", role: "Life Member", date: "Oct 2024 - Present" },
    { name: "Foundation of Head and Neck Oncology", role: "Life Member", date: "Oct 2024 - Present" },
    { name: "SOCIETY OF SURGICAL ONCOLOGY - SSO", role: "Member", date: "Dec 2023 - Present", associated: "HCG Manavata Oncology LLP" },
    { name: "ISPSM - INDIAN SOCIETY OF PERITONEAL SURFACE MALIGNANCIES", role: "Life Member", date: "May 2023 - Present" },
    { name: "INDIAN ASSOCIATION OF SURGICAL ONCOLOGY - IASO", role: "Life Member", date: "Mar 2021 - Present" },
    { name: "ASI - ASSOCIATION OF SURGEONS OF INDIA", role: "Life Member", date: "Oct 2014 - Present" },
    { name: "IMA", role: "Life Member", date: "Jul 2014 - Present" }
  ],
                cancerInfo: {
                breast_cancer: {
                    name: "Breast Cancer",
                    riskFactors: "Age, Family history, BRCA mutations, obesity, hormonal therapy, late pregnancy, radiation exposure",
                    investigations: [
                        "Mammography for women older than 35 years",
                        "Ultrasound for younger women than 35 years",
                        "MRI case on case basis",
                        "Core biopsy and IHC for receptor status of ER, PR, HER2",
                        "Staging with PET–CT/CECT TAP & bone scan",
                        "Locally advanced cases require staging",
                    ],
                    treatment: [
                        "Individualized as per IHC receptor status",
                        "ER/PR positive – Hormonal therapy as an adjuvant",
                        "HER2 positive – anti-HER2 targeted therapy (Trastuzumab) as adjuvant & maintenance + Chemotherapy",
                        "Triple negative – Neoadjuvant or adjuvant (early) Chemotherapy",
                        "Early Stage: Surgery (lumpectomy + radiation/mastectomy), axillary lymph node dissection or sentinel node biopsy",
                        "Locally Advanced Stage: Neoadjuvant treatment then surgery + radiation",
                    ]
                },
                oral_cavity_cancer: {
                    name: "Oral Cavity Cancer",
                    riskFactors: "Tobacco use, alcohol consumption, HPV infection, poor oral hygiene, betel quid chewing, UV light exposure (for lip cancer)",
                    investigations: [
                        "Clinical examination and biopsy",
                        "CT/MRI for local extent and nodal involvement",
                        "Panendoscopy to rule out second primary tumors",
                        "PET-CT for advanced cases to detect metastases",
                        "Dental evaluation before treatment"
                    ],
                    treatment: [
                        "Early stage: Surgery or radiation therapy",
                        "Advanced stage: Combination of surgery, radiation, and chemotherapy",
                        "Reconstruction after extensive resections",
                        "Neck dissection for nodal involvement",
                        "Targeted therapy (Cetuximab) for recurrent/metastatic cases"
                    ]
                },
                colon_cancer: {
                    name: "Colon Cancer",
                    riskFactors: "Age, family history, polyps, inflammatory bowel disease, low-fiber diet, obesity, smoking, Lynch syndrome, FAP",
                    investigations: [
                        "Colonoscopy with biopsy",
                        "CT colonography if colonoscopy incomplete",
                        "CEA level (tumor marker)",
                        "CT chest/abdomen/pelvis for staging",
                        "MRI for rectal cancer evaluation",
                        "Genetic testing for hereditary syndromes"
                    ],
                    treatment: [
                        "Surgical resection (colectomy) with lymph node removal",
                        "Adjuvant chemotherapy for stage III and high-risk stage II",
                        "Radiation therapy for rectal cancer",
                        "Targeted therapies (bevacizumab, cetuximab) for metastatic disease",
                        "Immunotherapy for MSI-H tumors",
                        "Regular surveillance after treatment"
                    ]
                },
                rectal_cancer: {
                    name: "Rectal Cancer",
                    riskFactors: "Similar to colon cancer plus pelvic radiation exposure, high-fat diet, sedentary lifestyle",
                    investigations: [
                        "Digital rectal exam",
                        "Colonoscopy with biopsy",
                        "Endorectal ultrasound for local staging",
                        "Pelvic MRI for detailed assessment",
                        "CT chest/abdomen/pelvis for distant metastases",
                        "PET-CT in selected cases"
                    ],
                    treatment: [
                        "Neoadjuvant chemoradiation for locally advanced cases",
                        "Total mesorectal excision surgery",
                        "Adjuvant chemotherapy",
                        "Local excision for very early tumors",
                        "Sphincter-sparing techniques when possible",
                        "Palliative therapies for metastatic disease"
                    ]
                },
                cervix_cancer: {
                    name: "Cervix Cancer",
                    riskFactors: "HPV infection, multiple sexual partners, early sexual activity, smoking, immunosuppression, long-term oral contraceptive use",
                    investigations: [
                        "Pap smear screening",
                        "Colposcopy with biopsy",
                        "HPV DNA testing",
                        "Pelvic exam under anesthesia",
                        "MRI for local staging",
                        "CT/PET-CT for advanced disease"
                    ],
                    treatment: [
                        "Early stage: Cone biopsy or hysterectomy",
                        "Radical hysterectomy with lymph node dissection",
                        "Chemoradiation for locally advanced disease",
                        "Brachytherapy (internal radiation)",
                        "Palliative chemotherapy for metastatic disease",
                        "HPV vaccination for prevention"
                    ]
                },
                ovary_cancer: {
                    name: "Ovarian Cancer",
                    riskFactors: "Age, family history, BRCA mutations, nulliparity, endometriosis, hormone replacement therapy, obesity",
                    investigations: [
                        "Pelvic exam and transvaginal ultrasound",
                        "CA-125 tumor marker",
                        "CT abdomen/pelvis",
                        "Paracentesis if ascites present",
                        "Genetic testing for BRCA mutations",
                        "Exploratory laparotomy/laparoscopy for diagnosis"
                    ],
                    treatment: [
                        "Surgical debulking (optimal cytoreduction)",
                        "Platinum-based chemotherapy",
                        "PARP inhibitors for BRCA-mutated cancers",
                        "Anti-angiogenic therapy (bevacizumab)",
                        "Secondary cytoreduction in selected cases",
                        "Prophylactic surgery for high-risk patients"
                    ]
                },
                endometrium_cancer: {
                    name: "Endometrium Cancer",
                    riskFactors: "Obesity, unopposed estrogen exposure, tamoxifen use, nulliparity, late menopause, Lynch syndrome",
                    investigations: [
                        "Endometrial biopsy",
                        "Dilation and curettage (D&C)",
                        "Transvaginal ultrasound",
                        "MRI for local staging",
                        "CT for advanced disease",
                        "Genetic testing for hereditary syndromes"
                    ],
                    treatment: [
                        "Total hysterectomy with bilateral salpingo-oophorectomy",
                        "Lymph node dissection",
                        "Radiation therapy for high-risk cases",
                        "Hormonal therapy for early-stage or recurrent disease",
                        "Chemotherapy for advanced/metastatic disease",
                        "Immunotherapy for MSI-H tumors"
                    ]
                },
                esophagus_cancer: {
                    name: "Esophagus Cancer",
                    riskFactors: "Smoking, alcohol, GERD, Barrett's esophagus, obesity, achalasia, hot beverage consumption, low fruit/vegetable diet",
                    investigations: [
                        "Upper endoscopy with biopsy",
                        "Endoscopic ultrasound for staging",
                        "CT chest/abdomen/pelvis",
                        "PET-CT for metastatic evaluation",
                        "Bronchoscopy for proximal tumors",
                        "Laparoscopy for selected cases"
                    ],
                    treatment: [
                        "Early stage: Endoscopic resection",
                        "Surgery (esophagectomy) for resectable tumors",
                        "Neoadjuvant chemoradiation",
                        "Definitive chemoradiation for unresectable cases",
                        "Palliative stenting or radiation",
                        "Immunotherapy for advanced disease"
                    ]
                },
                stomach_cancer: {
                    name: "Stomach Cancer",
                    riskFactors: "H. pylori infection, smoked/salted food diet, smoking, pernicious anemia, family history, previous stomach surgery",
                    investigations: [
                        "Upper endoscopy with biopsy",
                        "Endoscopic ultrasound",
                        "CT chest/abdomen/pelvis",
                        "Laparoscopy for peritoneal evaluation",
                        "HER2 testing for advanced disease",
                        "Tumor markers (CEA, CA19-9)"
                    ],
                    treatment: [
                        "Surgical resection (gastrectomy) with lymph node dissection",
                        "Adjuvant chemoradiation or chemotherapy",
                        "Perioperative chemotherapy",
                        "Targeted therapy (Trastuzumab for HER2+)",
                        "Palliative chemotherapy",
                        "Immunotherapy for PD-L1 positive tumors"
                    ]
                },
                sarcoma: {
                    name: "Sarcoma",
                    riskFactors: "Previous radiation exposure, certain genetic syndromes (Li-Fraumeni, NF1), chemical exposure (vinyl chloride, dioxins), chronic lymphedema",
                    investigations: [
                        "MRI for local extent (soft tissue sarcoma)",
                        "CT for bone sarcomas",
                        "Biopsy with molecular testing",
                        "PET-CT for staging",
                        "Chest CT (common metastasis site)",
                        "Genetic counseling for hereditary syndromes"
                    ],
                    treatment: [
                        "Wide local excision with negative margins",
                        "Limb-sparing surgery when possible",
                        "Radiation therapy for local control",
                        "Neoadjuvant/adjuvant chemotherapy for high-grade tumors",
                        "Targeted therapies for specific subtypes",
                        "Amputation in selected cases"
                    ]
                },
                urinary_bladder_cancer: {
                    name: "Urinary Bladder Cancer",
                    riskFactors: "Smoking, occupational chemical exposure (dyes, rubber, paint), chronic bladder inflammation, cyclophosphamide use, arsenic exposure",
                    investigations: [
                        "Cystoscopy with biopsy",
                        "Urine cytology",
                        "CT urogram",
                        "MRI for muscle-invasive disease",
                        "Transurethral resection for staging",
                        "PD-L1 testing for advanced disease"
                    ],
                    treatment: [
                        "Non-muscle invasive: TURBT + intravesical BCG/chemotherapy",
                        "Muscle-invasive: Radical cystectomy with urinary diversion",
                        "Neoadjuvant chemotherapy",
                        "Bladder preservation protocols (chemo-radiation)",
                        "Immunotherapy for advanced disease",
                        "Surveillance cystoscopies"
                    ]
                },
                kidney_cancer: {
                    name: "Kidney Cancer",
                    riskFactors: "Smoking, obesity, hypertension, acquired cystic kidney disease, Von Hippel-Lindau syndrome, long-term dialysis",
                    investigations: [
                        "CT abdomen with contrast",
                        "MRI for complex cases",
                        "Chest imaging for staging",
                        "Biopsy for small/indeterminate masses",
                        "Bone scan if symptomatic",
                        "Genetic testing for hereditary cases"
                    ],
                    treatment: [
                        "Partial or radical nephrectomy",
                        "Active surveillance for small masses",
                        "Ablation techniques for selected cases",
                        "Targeted therapies (sunitinib, pazopanib)",
                        "Immunotherapy combinations",
                        "Cytoreductive nephrectomy for metastatic disease"
                    ]
                },
                testicular_cancer: {
                    name: "Testicular Cancer",
                    riskFactors: "Cryptorchidism, family history, Klinefelter syndrome, Caucasian race, prior testicular cancer",
                    investigations: [
                        "Scrotal ultrasound",
                        "Tumor markers (AFP, HCG, LDH)",
                        "CT abdomen/pelvis",
                        "Chest imaging",
                        "Brain MRI if symptomatic",
                        "Post-orchiectomy markers"
                    ],
                    treatment: [
                        "Radical inguinal orchiectomy",
                        "Surveillance for early stage",
                        "Adjuvant chemotherapy or radiation",
                        "RPLND for residual masses",
                        "High-dose chemo with stem cell rescue",
                        "Excellent cure rates even in advanced disease"
                    ]
                },
                gallbladder_cancer: {
                    name: "Gallbladder Cancer",
                    riskFactors: "Gallstones, chronic inflammation, porcelain gallbladder, female gender, obesity, primary sclerosing cholangitis",
                    investigations: [
                        "Ultrasound first imaging modality",
                        "CT/MRI for staging",
                        "MRCP for biliary tree evaluation",
                        "Endoscopic ultrasound with biopsy",
                        "Laparoscopy for resectability assessment",
                        "CA19-9 tumor marker"
                    ],
                    treatment: [
                        "Radical cholecystectomy with liver resection",
                        "Lymph node dissection",
                        "Adjuvant chemotherapy/capecitabine",
                        "Palliative biliary stenting",
                        "Gemcitabine-based chemotherapy for advanced disease",
                        "Aggressive surgery for early detection"
                    ]
                },
                liver_cancer: {
                    name: "Liver Cancer",
                    riskFactors: "Chronic hepatitis B/C, cirrhosis, alcohol, NAFLD, aflatoxin exposure, hemochromatosis, alpha-1 antitrypsin deficiency",
                    investigations: [
                        "Ultrasound surveillance in high-risk patients",
                        "Multiphase CT or MRI",
                        "AFP tumor marker",
                        "Biopsy if imaging inconclusive",
                        "Endoscopy for varices assessment",
                        "Child-Pugh score for liver function"
                    ],
                    treatment: [
                        "Surgical resection if adequate liver function",
                        "Liver transplantation within Milan criteria",
                        "Local ablation (RFA, microwave)",
                        "Transarterial chemoembolization (TACE)",
                        "Targeted therapies (sorafenib, lenvatinib)",
                        "Immunotherapy combinations"
                    ]
                },
                pancreatic_cancer: {
                    name: "Pancreatic Cancer",
                    riskFactors: "Smoking, chronic pancreatitis, diabetes, obesity, family history, BRCA mutations, hereditary syndromes (Peutz-Jeghers)",
                    investigations: [
                        "CT pancreas protocol",
                        "Endoscopic ultrasound with biopsy",
                        "MRCP for biliary evaluation",
                        "CA19-9 tumor marker",
                        "PET-CT for metastatic workup",
                        "Genetic testing for hereditary cases"
                    ],
                    treatment: [
                        "Whipple procedure for head tumors",
                        "Distal pancreatectomy for body/tail",
                        "Neoadjuvant therapy for borderline resectable",
                        "Gemcitabine/nab-paclitaxel or FOLFIRINOX",
                        "Palliative biliary stenting",
                        "PARP inhibitors for BRCA mutations"
                    ]
                },
                skin_cancer: {
                    name: "Skin Cancer",
                    riskFactors: "UV radiation exposure, fair skin, history of sunburns, immunosuppression, family history, arsenic exposure, multiple nevi",
                    investigations: [
                        "Full skin examination",
                        "Dermoscopy",
                        "Excisional biopsy",
                        "Sentinel lymph node biopsy for melanoma",
                        "CT/MRI for advanced melanoma",
                        "BRAF mutation testing for melanoma"
                    ],
                    treatment: [
                        "Surgical excision with margins",
                        "Mohs surgery for basal cell carcinoma",
                        "Topical therapies for superficial lesions",
                        "Radiation therapy for selected cases",
                        "Immunotherapy for advanced melanoma",
                        "Targeted therapy for BRAF-mutated melanoma"
                    ]
                },
                lung_cancer: {
                    name: "Lung Cancer",
                    riskFactors: "Smoking, radon exposure, asbestos, air pollution, family history, previous radiation therapy, certain chemicals (arsenic, nickel)",
                    investigations: [
                        "CT chest with contrast",
                        "PET-CT for staging",
                        "Biopsy (bronchoscopy, CT-guided, EBUS)",
                        "Molecular testing (EGFR, ALK, ROS1, PD-L1)",
                        "MRI brain if symptomatic",
                        "Pulmonary function tests"
                    ],
                    treatment: [
                        "Surgical resection (lobectomy) for early stage",
                        "SBRT for medically inoperable",
                        "Adjuvant chemotherapy for stage II-III",
                        "Targeted therapies for driver mutations",
                        "Immunotherapy for PD-L1 positive tumors",
                        "Palliative radiation for symptoms"
                    ]
                },
                laryngeal_cancer: {
                    name: "Laryngeal Cancer",
                    riskFactors: "Tobacco use, alcohol consumption, HPV infection, GERD, occupational exposures (asbestos, sulfuric acid), poor nutrition",
                    investigations: [
                        "Laryngoscopy with biopsy",
                        "CT/MRI neck with contrast",
                        "PET-CT for advanced cases",
                        "Speech/swallowing evaluation",
                        "Panendoscopy to rule out second primaries",
                        "Chest imaging for metastases"
                    ],
                    treatment: [
                        "Early stage: Radiation or endoscopic resection",
                        "Advanced: Laryngectomy with neck dissection",
                        "Organ preservation protocols (chemo-radiation)",
                        "Voice rehabilitation post-laryngectomy",
                        "Targeted therapy (Cetuximab)",
                        "Palliative care for metastatic disease"
                    ]
                },
                thyroid_cancer: {
                    name: "Thyroid Cancer",
                    riskFactors: "Radiation exposure (especially childhood), family history, certain genetic syndromes (MEN2, FAP), female gender, iodine deficiency",
                    investigations: [
                        "Thyroid ultrasound",
                        "FNA biopsy",
                        "Thyroid function tests",
                        "CT/MRI for large or invasive tumors",
                        "Thyroglobulin and anti-thyroglobulin antibodies",
                        "Genetic testing for medullary thyroid cancer"
                    ],
                    treatment: [
                        "Total thyroidectomy for most cases",
                        "Lymph node dissection if involved",
                        "Radioactive iodine ablation",
                        "TSH suppression therapy",
                        "Targeted therapies for advanced disease",
                        "Regular thyroglobulin monitoring"
                    ]
                },
                gastrointestinal_stromal: {
                    name: "Gastrointestinal Stromal",
                    riskFactors: "Most are sporadic, rare familial forms (Carney triad, NF1), no clear environmental risk factors, KIT/PDGFRA mutations",
                    investigations: [
                        "CT abdomen/pelvis with contrast",
                        "Endoscopic ultrasound with biopsy",
                        "PET scan for imatinib response assessment",
                        "KIT/PDGFRA mutation testing",
                        "MRI for rectal GISTs",
                        "Tumor size and mitotic rate assessment"
                    ],
                    treatment: [
                        "Surgical resection with negative margins",
                        "Imatinib for intermediate/high risk or metastatic",
                        "Suninitib for imatinib-resistant GIST",
                        "Regorafenib as third-line therapy",
                        "Debulking surgery for responsive metastatic disease",
                        "Lifelong surveillance due to recurrence risk"
                    ]
                },
                buccal_mucosa_cancer: {
                    name: "Buccal Mucosa Cancer",
                    riskFactors: "Tobacco, betel nut, alcohol, poor oral hygiene, chronic irritation",
                    investigations: [
                        "Clinical examination",
                        "Biopsy",
                        "Imaging: CECT face/neck, MRI if needed",
                        "Chest X-ray, USG abdomen for staging"
                    ],
                    treatment: [
                        "Surgery: wide excision, mandibulectomy if bone involved",
                        "Neck dissection",
                        "Radiotherapy +/- chemotherapy for advanced cases",
                        "Reconstruction as needed"
                    ]
                },
                tongue_cancer: {
                    name: "Tongue Cancer",
                    riskFactors: "Tobacco, alcohol, HPV, poor oral hygiene, chronic trauma",
                    investigations: [
                        "Clinical examination",
                        "Biopsy",
                        "Imaging: CECT face/neck, MRI if needed",
                        "Chest X-ray, USG abdomen for staging"
                    ],
                    treatment: [
                        "Surgery: partial/total glossectomy",
                        "Neck dissection",
                        "Radiotherapy +/- chemotherapy for advanced cases",
                        "Reconstruction as needed"
                    ]
                }
            }
        },
            },
            
        hi: {
            translation: {
                home_intro: "डॉ. बम्मिडी संदीप व्यापक शल्य चिकित्सा विशेषज्ञता के साथ-साथ रोगियों की चिंताओं की गहरी समझ का संयोजन करते हैं। भारत भर के प्रतिष्ठित कैंसर विशेषज्ञों से उनका प्रशिक्षण और जटिल कैंसर सर्जरी करने का व्यावहारिक अनुभव उन्हें उन्नत उपचार चाहने वाले रोगियों के लिए एक विश्वसनीय विकल्प बनाता है। वे कच्छ जैसे क्षेत्रों में तृतीयक स्तर की कैंसर देखभाल लाने के लिए समर्पित हैं, ताकि यह सुनिश्चित हो सके कि रोगियों को उनके घर के पास ही उच्च-गुणवत्ता वाला उपचार मिल सके। परामर्श और व्यापक कैंसर देखभाल के लिए, आप डॉ. बोम्मिडी संदीप से संपर्क कर सकते हैं ताकि आप अपनी स्वास्थ्य-लाभ की यात्रा में अगला कदम उठा सकें।",
                home_name:"डॉ. बम्मिडी",
                home_second_name:"संदीप",
                home_hi:"नमस्ते मैं",
                home_intro2:"परामर्श और व्यापक कैंसर देखभाल के लिए, आप अपने स्वास्थ्य लाभ की यात्रा में अगला कदम उठाने के लिए डॉ. बम्मिडी संदीप से संपर्क कर सकते हैं।",
                home_button:"और अधिक जानें",
                sidebar_link_home:"घर",
                sidebar_link_About:"के बारे में",
                sidebar_link_consultation:"परामर्श",
                sidebar_link_testimonials:"प्रशंसापत्र",
                sidebar_link_successStories:"सफलता की कहानियाँ",
                sidebar_link_knowAboutCancer:"जानिए कैंसर के बारे में",
                sidebar_link_certifications:"प्रमाणपत्र",
                sidebar_link_contact:"संपर्क",
                about_doctor_full_name:"डॉ. बम्मिडी संदीप, ",
                about_para1:"एक समर्पित सर्जिकल ऑन्कोलॉजिस्ट, आंध्र प्रदेश से हैं, जहाँ चिकित्सा जगत में उनकी यात्रा एक मज़बूत शैक्षणिक आधार और रोगी देखभाल के प्रति अटूट जुनून के साथ शुरू हुई। अपने शुरुआती वर्षों से ही, उन्होंने स्वास्थ्य सेवा के प्रति गहरी प्रतिबद्धता दिखाई, जिसने अंततः एक उच्च-विशिष्ट कैंसर सर्जन बनने की उनकी राह को आकार दिया।",
                about_para2:"डॉ. संदीप ने 2013 में डॉ. पीएसआईएमएस और आरएफ, आंध्र प्रदेश से एमबीबीएस की डिग्री हासिल की, जहाँ उन्होंने अपने चिकित्सा करियर की नींव रखी। सामान्य चिकित्सा में उनके शुरुआती नैदानिक अनुभव और प्रशिक्षण ने उन्हें सर्जरी को अपना पेशा बनाने के लिए प्रेरित किया। अपनी शल्य चिकित्सा विशेषज्ञता को बढ़ाने के लिए दृढ़ संकल्पित, उन्होंने उन्नत प्रशिक्षण शुरू किया जिसने बाद में ऑन्कोलॉजी में उनके सफर को आकार दिया।",
                about_para3:"2019 में, उन्होंने मल्ला रेड्डी इंस्टीट्यूट ऑफ मेडिकल साइंसेज, हैदराबाद, तेलंगाना से जनरल सर्जरी में डीएनबी की डिग्री पूरी की, जो अपने व्यापक नैदानिक अभ्यास और सर्जिकल प्रशिक्षण के लिए एक प्रतिष्ठित संस्थान है। इस अनुभव ने उन्हें जटिल सर्जिकल मामलों की एक विस्तृत श्रृंखला को संभालने की क्षमता प्रदान की और सर्जिकल देखभाल में उनकी नींव को मज़बूत किया।",
                about_para4:"ऑन्कोलॉजी में बढ़ती रुचि के साथ, डॉ. संदीप ने 2023 में प्रिंस अली खान अस्पताल, मुंबई और एचसीजी मानवता कैंसर सेंटर, नासिक से सर्जिकल ऑन्कोलॉजी में प्रतिष्ठित डॉक्टरेट ऑफ नेशनल बोर्ड (DrNB) की उपाधि प्राप्त की। प्रमुख ऑन्कोलॉजिस्टों के मार्गदर्शन में, उन्होंने उन्नत कैंसर सर्जरी में अपने कौशल को निखारा और विभिन्न उप-विशेषज्ञताओं में कैंसर के उपचार में गहन विशेषज्ञता हासिल की।",
                about_para5:"अपनी विशेषज्ञता को और निखारने के लिए, डॉ. संदीप ने 2025 में अंतर्राष्ट्रीय मान्यता प्राप्त की और सिंगापुर के नेशनल कैंसर सेंटर से HIPEC और PIPAC सर्जन का प्रमाणन प्राप्त किया, जहाँ उन्होंने उन्नत पेरिटोनियल सरफेस ऑन्कोलॉजी प्रक्रियाओं का प्रशिक्षण लिया। उसी वर्ष, वे SS इनोवेशन्स में प्रमाणित रोबोटिक सर्जन भी बने और न्यूनतम इनवेसिव कैंसर सर्जरी के लिए अत्याधुनिक रोबोटिक तकनीक में महारत हासिल की।",
                about_para6:"अपने व्यापक प्रशिक्षण और वैश्विक अनुभव के माध्यम से, डॉ. संदीप ने कैंसर उपचार के लिए एक समग्र और रोगी-केंद्रित दृष्टिकोण विकसित किया है। उनका मिशन यह सुनिश्चित करना है कि रोगियों को उन्नत, साक्ष्य-आधारित और करुणामय कैंसर देखभाल तक पहुँच प्राप्त हो, जिससे विश्व स्तरीय विशेषज्ञता भारत और उसके बाहर के समुदायों के और करीब पहुँच सके।",
                about:"के बारे में",
                achievement1:"एमबीबीएस - 2013 - डॉ. पीएसआईएमएस और आरएफ, आंध्र प्रदेश",
                achievement2:"2019 - डीएनबी जनरल सर्जरी - मल्ला रेड्डी इंस्टीट्यूट ऑफ मेडिकल साइंसेज, हैदराबाद-तेलंगाना",
                achievement3:"2023 - डॉक्टरेट ऑफ नेशनल बोर्ड (DrNB) सर्जिकल ऑन्कोलॉजी - प्रिंस अली खान अस्पताल, मुंबई / एचसीजी मानवता कैंसर सेंटर, नासिक",
                achievement4:"2025 - प्रमाणित HIPEC और PIPAC सर्जन - राष्ट्रीय कैंसर केंद्र, सिंगापुर",
                achievement5:"2025 - प्रमाणित रोबोटिक सर्जन - एसएस इनोवेशन",
                achievement:"उपलब्धियों",
                email:"ईमेल",
                role:"भूमिका",
                contactNo:"संपर्क संख्या",
                cancer_specialist:"श्रीकाकुलम में पहले कैंसर सर्जन",
                address:"पता",
                addressVal:"त्रिनेत्र सुपरस्पेशियलिटी हॉस्पिटल, डे एंड नाइट जंक्शन, श्रीकाकुलम, आंध्र प्रदेश",
                workingHrs:"कार्य समय",
                sendMessage:"संदेश भेजें",
                design:"द्वारा डिज़ाइन और विकसित",
                kolors:"",
                title: "संगठन",
                titleAwards: "सम्मान और पुरस्कार",
    list: [
      {
        title: "सर्वश्रेष्ठ शोध पत्र पुरस्कार",
        issuer: "IASO NATCON 2022",
        date: "अक्टूबर 2022",
        details: "IASO द्वारा पोडियम प्रस्तुति, ₹10000 नकद पुरस्कार"
      },
      {
        title: "सर्वश्रेष्ठ पोस्टर पुरस्कार",
        issuer: "ASI",
        date: "दिसंबर 2017",
        details: "एएसआईकॉन 2017"
      },
      {
        title: "एएसआई यंग सर्जन साउथ जोन टॉरेंट फार्मा पुरस्कार",
        issuer: "ASI",
        date: "अप्रैल 2017",
        details: "रनर अप - केस प्रेजेंटेशन RIF MASS"
      },
      {
        title: "सर्वश्रेष्ठ शोध पत्र पुरस्कार",
        issuer: "ASICON 2016",
        date: "दिसंबर 2016",
        details: "सर्वश्रेष्ठ शोध पत्र पुरस्कार"
      }
    ],
  associated: "संबद्ध",
  orgs: [
    { name: "भारत के स्त्री रोग ऑन्कोलॉजिस्ट संघ", role: "आजीवन सदस्य", date: "अक्टूबर 2024 - वर्तमान" },
    { name: "भारत के स्तन सर्जनों का संघ", role: "आजीवन सदस्य", date: "अक्टूबर 2024 - वर्तमान" },
    { name: "हेड एंड नेक ऑन्कोलॉजी फाउंडेशन", role: "आजीवन सदस्य", date: "अक्टूबर 2024 - वर्तमान" },
    { name: "सर्जिकल ऑन्कोलॉजी सोसाइटी - SSO", role: "सदस्य", date: "दिसंबर 2023 - वर्तमान", associated: "HCG मनवता ऑन्कोलॉजी LLP" },
    { name: "आईएसपीएसएम - भारतीय परिटोनियल सतह घातक रोग सोसायटी", role: "आजीवन सदस्य", date: "मई 2023 - वर्तमान" },
    { name: "भारतीय सर्जिकल ऑन्कोलॉजी संघ - IASO", role: "आजीवन सदस्य", date: "मार्च 2021 - वर्तमान" },
    { name: "एएसआई - भारतीय सर्जनों का संघ", role: "आजीवन सदस्य", date: "अक्टूबर 2014 - वर्तमान" },
    { name: "आईएमए", role: "आजीवन सदस्य", date: "जुलाई 2014 - वर्तमान" }
  ],
                cancerInfo: {
    breast_cancer: {
        name: "स्तन कैंसर",
        riskFactors: "उम्र, पारिवारिक इतिहास, BRCA म्यूटेशन, मोटापा, हार्मोन थेरेपी, देर से गर्भधारण, विकिरण एक्सपोजर",
        investigations: [
            "35 वर्ष से अधिक उम्र की महिलाओं के लिए मैमोग्राफी",
            "35 वर्ष से कम उम्र की महिलाओं के लिए अल्ट्रासाउंड",
            "केस के आधार पर MRI",
            "कोर बायोप्सी और ER, PR, HER2 रिसेप्टर स्टेटस के लिए IHC",
            "PET-CT/CECT TAP और बोन स्कैन के साथ स्टेजिंग",
            "स्थानीय रूप से उन्नत मामलों को स्टेजिंग की आवश्यकता होती है"
        ],
        treatment: [
            "IHC रिसेप्टर स्टेटस के अनुसार व्यक्तिगत उपचार",
            "ER/PR पॉजिटिव - एडजुवेंट के रूप में हार्मोन थेरेपी",
            "HER2 पॉजिटिव - एडजुवेंट और मेंटेनेंस के रूप में एंटी-HER2 टार्गेटेड थेरेपी (ट्रास्टुजुमाब) + कीमोथेरेपी",
            "ट्रिपल नेगेटिव - नियोएडजुवेंट या एडजुवेंट (प्रारंभिक) कीमोथेरेपी",
            "प्रारंभिक चरण: सर्जरी (लम्पेक्टोमी + रेडिएशन/मास्टेक्टोमी), एक्सिलरी लिम्फ नोड डिसेक्शन या सेंटिनल नोड बायोप्सी",
            "स्थानीय रूप से उन्नत चरण: नियोएडजुवेंट उपचार फिर सर्जरी + रेडिएशन"
        ]
    },
    oral_cavity_cancer: {
        name: "मुख गुहा कैंसर",
        riskFactors: "तंबाकू का उपयोग, शराब का सेवन, HPV संक्रमण, खराब मौखिक स्वच्छता, पान मसाला चबाना, यूवी लाइट एक्सपोजर (होंठ कैंसर के लिए)",
        investigations: [
            "क्लिनिकल परीक्षण और बायोप्सी",
            "स्थानीय सीमा और नोडल भागीदारी के लिए CT/MRI",
            "द्वितीयक प्राथमिक ट्यूमर को नियंत्रित करने के लिए पैनएंडोस्कोपी",
            "मेटास्टेसिस का पता लगाने के लिए उन्नत मामलों में PET-CT",
            "उपचार से पहले दंत मूल्यांकन"
        ],
        treatment: [
            "प्रारंभिक चरण: सर्जरी या रेडिएशन थेरेपी",
            "उन्नत चरण: सर्जरी, रेडिएशन और कीमोथेरेपी का संयोजन",
            "व्यापक रिसेक्शन के बाद पुनर्निर्माण",
            "नोडल भागीदारी के लिए नेक डिसेक्शन",
            "आवर्तक/मेटास्टेटिक मामलों के लिए टार्गेटेड थेरेपी (सेटक्सिमाब)"
        ]
    },
    colon_cancer: {
        name: "कोलन कैंसर",
        riskFactors: "उम्र, पारिवारिक इतिहास, पॉलीप्स, सूजन आंत्र रोग, कम फाइबर वाला आहार, मोटापा, धूम्रपान, लिंच सिंड्रोम, FAP",
        investigations: [
            "बायोप्सी के साथ कोलोनोस्कोपी",
            "यदि कोलोनोस्कोपी अधूरी हो तो CT कोलोनोग्राफी",
            "CEA स्तर (ट्यूमर मार्कर)",
            "स्टेजिंग के लिए CT छाती/पेट/श्रोणि",
            "रेक्टल कैंसर मूल्यांकन के लिए MRI",
            "आनुवंशिक सिंड्रोम के लिए जेनेटिक टेस्टिंग"
        ],
        treatment: [
            "लिम्फ नोड हटाने के साथ सर्जिकल रिसेक्शन (कोलेक्टोमी)",
            "स्टेज III और उच्च जोखिम वाले स्टेज II के लिए एडजुवेंट कीमोथेरेपी",
            "रेक्टल कैंसर के लिए रेडिएशन थेरेपी",
            "मेटास्टेटिक रोग के लिए टार्गेटेड थेरेपी (बेवासिजुमाब, सेटक्सिमाब)",
            "MSI-H ट्यूमर के लिए इम्यूनोथेरेपी",
            "उपचार के बाद नियमित निगरानी"
        ]
    },
    rectum_cancer: {
        name: "मलाशय कैंसर",
        riskFactors: "कोलन कैंसर के समान जोखिम कारक प्लस पेल्विक रेडिएशन एक्सपोजर, उच्च वसा वाला आहार, गतिहीन जीवनशैली",
        investigations: [
            "डिजिटल रेक्टल परीक्षा",
            "बायोप्सी के साथ कोलोनोस्कोपी",
            "स्थानीय स्टेजिंग के लिए एंडोरेक्टल अल्ट्रासाउंड",
            "विस्तृत मूल्यांकन के लिए पेल्विक MRI",
            "दूरस्थ मेटास्टेसिस के लिए CT छाती/पेट/श्रोणि",
            "चयनित मामलों में PET-CT"
        ],
        treatment: [
            "स्थानीय रूप से उन्नत मामलों के लिए नियोएडजुवेंट कीमोरेडिएशन",
            "टोटल मेसोरेक्टल एक्सिशन सर्जरी",
            "एडजुवेंट कीमोथेरेपी",
            "बहुत प्रारंभिक ट्यूमर के लिए स्थानीय एक्सिशन",
            "जब संभव हो स्फिंक्टर-स्पेयरिंग तकनीक",
            "मेटास्टेटिक रोग के लिए पैलिएटिव थेरेपी"
        ]
    },
    cervix_cancer: {
        name: "गर्भाशय ग्रीवा कैंसर",
        riskFactors: "HPV संक्रमण, कई यौन साथी, प्रारंभिक यौन गतिविधि, धूम्रपान, इम्यूनोसप्रेशन, दीर्घकालिक मौखिक गर्भ निरोधकों का उपयोग",
        investigations: [
            "पैप स्मीयर स्क्रीनिंग",
            "बायोप्सी के साथ कोल्पोस्कोपी",
            "HPV DNA टेस्टिंग",
            "एनेस्थीसिया के तहत पेल्विक परीक्षा",
            "स्थानीय स्टेजिंग के लिए MRI",
            "उन्नत रोग के लिए CT/PET-CT"
        ],
        treatment: [
            "प्रारंभिक चरण: कोन बायोप्सी या हिस्टेरेक्टोमी",
            "लिम्फ नोड डिसेक्शन के साथ रेडिकल हिस्टेरेक्टोमी",
            "स्थानीय रूप से उन्नत रोग के लिए कीमोरेडिएशन",
            "ब्रैकीथेरेपी (आंतरिक विकिरण)",
            "मेटास्टेटिक रोग के लिए पैलिएटिव कीमोथेरेपी",
            "रोकथाम के लिए HPV टीकाकरण"
        ]
    },
    ovary_cancer: {
        name: "अंडाशय कैंसर",
        riskFactors: "उम्र, पारिवारिक इतिहास, BRCA म्यूटेशन, नलिपेरिटी, एंडोमेट्रियोसिस, हार्मोन रिप्लेसमेंट थेरेपी, मोटापा",
        investigations: [
            "पेल्विक परीक्षा और ट्रांसवेजाइनल अल्ट्रासाउंड",
            "CA-125 ट्यूमर मार्कर",
            "CT पेट/श्रोणि",
            "यदि एसाइटिस मौजूद हो तो पैरासेंटेसिस",
            "BRCA म्यूटेशन के लिए जेनेटिक टेस्टिंग",
            "निदान के लिए एक्सप्लोरेटरी लैपरोटॉमी/लैपरोस्कोपी"
        ],
        treatment: [
            "सर्जिकल डिबल्किंग (ऑप्टिमल साइटोरिडक्शन)",
            "प्लैटिनम-आधारित कीमोथेरेपी",
            "BRCA-म्यूटेटेड कैंसर के लिए PARP अवरोधक",
            "एंटी-एंजियोजेनिक थेरेपी (बेवासिजुमाब)",
            "चयनित मामलों में सेकेंडरी साइटोरिडक्शन",
            "उच्च जोखिम वाले रोगियों के लिए प्रोफिलैक्टिक सर्जरी"
        ]
    },
    endometrium_cancer: {
        name: "एंडोमेट्रियम कैंसर",
        riskFactors: "मोटापा, अनप्रोटेक्टेड एस्ट्रोजन एक्सपोजर, टैमोक्सीफेन उपयोग, नलिपेरिटी, देर से रजोनिवृत्ति, लिंच सिंड्रोम",
        investigations: [
            "एंडोमेट्रियल बायोप्सी",
            "डाइलेशन और क्यूरेटेज (D&C)",
            "ट्रांसवेजाइनल अल्ट्रासाउंड",
            "स्थानीय स्टेजिंग के लिए MRI",
            "उन्नत रोग के लिए CT",
            "आनुवंशिक सिंड्रोम के लिए जेनेटिक टेस्टिंग"
        ],
        treatment: [
            "द्विपक्षीय सैल्पिंगो-ओओफोरेक्टोमी के साथ टोटल हिस्टेरेक्टोमी",
            "लिम्फ नोड डिसेक्शन",
            "उच्च जोखिम वाले मामलों के लिए रेडिएशन थेरेपी",
            "प्रारंभिक चरण या आवर्तक रोग के लिए हार्मोन थेरेपी",
            "उन्नत/मेटास्टेटिक रोग के लिए कीमोथेरेपी",
            "MSI-H ट्यूमर के लिए इम्यूनोथेरेपी"
        ]
    },
    esophagus_cancer: {
        name: "अन्नप्रणाली कैंसर",
        riskFactors: "धूम्रपान, शराब, GERD, बैरेट्स एसोफैगस, मोटापा, अकैलेशिया, गर्म पेय का सेवन, कम फल/सब्जी वाला आहार",
        investigations: [
            "बायोप्सी के साथ अपर एंडोस्कोपी",
            "स्टेजिंग के लिए एंडोस्कोपिक अल्ट्रासाउंड",
            "CT छाती/पेट/श्रोणि",
            "मेटास्टेटिक मूल्यांकन के लिए PET-CT",
            "प्रॉक्सिमल ट्यूमर के लिए ब्रोंकोस्कोपी",
            "चयनित मामलों के लिए लैपरोस्कोपी"
        ],
        treatment: [
            "प्रारंभिक चरण: एंडोस्कोपिक रिसेक्शन",
            "रेसेक्टेबल ट्यूमर के लिए सर्जरी (एसोफेजेक्टोमी)",
            "नियोएडजुवेंट कीमोरेडिएशन",
            "अनरेसेक्टेबल मामलों के लिए डेफिनिटिव कीमोरेडिएशन",
            "पैलिएटिव स्टेंटिंग या रेडिएशन",
            "उन्नत रोग के लिए इम्यूनोथेरेपी"
        ]
    },
    stomach_cancer: {
        name: "आमाशय कैंसर",
        riskFactors: "H. pylori संक्रमण, धूम्रपान/नमकीन भोजन आहार, धूम्रपान, पर्निशियस एनीमिया, पारिवारिक इतिहास, पिछली पेट की सर्जरी",
        investigations: [
            "बायोप्सी के साथ अपर एंडोस्कोपी",
            "एंडोस्कोपिक अल्ट्रासाउंड",
            "CT छाती/पेट/श्रोणि",
            "पेरिटोनियल मूल्यांकन के लिए लैपरोस्कोपी",
            "उन्नत रोग के लिए HER2 टेस्टिंग",
            "ट्यूमर मार्कर (CEA, CA19-9)"
        ],
        treatment: [
            "लिम्फ नोड डिसेक्शन के साथ सर्जिकल रिसेक्शन (गैस्ट्रेक्टोमी)",
            "एडजुवेंट कीमोरेडिएशन या कीमोथेरेपी",
            "पेरिओपरेटिव कीमोथेरेपी",
            "HER2+ के लिए टार्गेटेड थेरेपी (ट्रास्टुजुमाब)",
            "पैलिएटिव कीमोथेरेपी",
            "PD-L1 पॉजिटिव ट्यूमर के लिए इम्यूनोथेरेपी"
        ]
    },
    sarcoma: {
        name: "सारकोमा",
        riskFactors: "पिछला विकिरण एक्सपोजर, कुछ आनुवंशिक सिंड्रोम (ली-फ्रॉमेनी, NF1), रासायनिक एक्सपोजर (विनाइल क्लोराइड, डाइऑक्सिन), क्रोनिक लिम्फेडिमा",
        investigations: [
            "स्थानीय सीमा के लिए MRI (सॉफ्ट टिश्यू सारकोमा)",
            "हड्डी के सारकोमा के लिए CT",
            "आणविक परीक्षण के साथ बायोप्सी",
            "स्टेजिंग के लिए PET-CT",
            "मेटास्टेसिस के सामान्य स्थान के लिए छाती CT",
            "आनुवंशिक सिंड्रोम के लिए जेनेटिक काउंसलिंग"
        ],
        treatment: [
            "निगेटिव मार्जिन के साथ वाइड लोकल एक्सिशन",
            "जब संभव हो लिंब-स्पेयरिंग सर्जरी",
            "स्थानीय नियंत्रण के लिए रेडिएशन थेरेपी",
            "उच्च ग्रेड ट्यूमर के लिए नियोएडजुवेंट/एडजुवेंट कीमोथेरेपी",
            "विशिष्ट उपप्रकारों के लिए टार्गेटेड थेरेपी",
            "चयनित मामलों में अंगच्छेदन"
        ]
    },
    urinary_bladder_cancer: {
        name: "मूत्राशय कैंसर",
        riskFactors: "धूम्रपान, व्यावसायिक रासायनिक एक्सपोजर (डाई, रबर, पेंट), क्रोनिक मूत्राशय सूजन, साइक्लोफॉस्फेमाइड उपयोग, आर्सेनिक एक्सपोजर",
        investigations: [
            "बायोप्सी के साथ सिस्टोस्कोपी",
            "मूत्र साइटोलॉजी",
            "CT यूरोग्राम",
            "मसल-इनवेसिव रोग के लिए MRI",
            "स्टेजिंग के लिए ट्रांसयूरेथ्रल रिसेक्शन",
            "उन्नत रोग के लिए PD-L1 टेस्टिंग"
        ],
        treatment: [
            "नॉन-मसल इनवेसिव: TURBT + इंट्रावेसिकल BCG/कीमोथेरेपी",
            "मसल-इनवेसिव: यूरिनरी डायवर्जन के साथ रेडिकल सिस्टेक्टोमी",
            "नियोएडजुवेंट कीमोथेरेपी",
            "मूत्राशय संरक्षण प्रोटोकॉल (कीमो-रेडिएशन)",
            "उन्नत रोग के लिए इम्यूनोथेरेपी",
            "सर्विलांस सिस्टोस्कोपी"
        ]
    },
    kidney_cancer: {
        name: "वृक्क कैंसर",
        riskFactors: "धूम्रपान, मोटापा, उच्च रक्तचाप, अधिग्रहित सिस्टिक किडनी रोग, वॉन हिप्पेल-लिंडौ सिंड्रोम, दीर्घकालिक डायलिसिस",
        investigations: [
            "कंट्रास्ट के साथ CT पेट",
            "जटिल मामलों के लिए MRI",
            "स्टेजिंग के लिए छाती इमेजिंग",
            "छोटे/अनिर्धारित द्रव्यमान के लिए बायोप्सी",
            "यदि लक्षण हों तो बोन स्कैन",
            "आनुवंशिक मामलों के लिए जेनेटिक टेस्टिंग"
        ],
        treatment: [
            "आंशिक या रेडिकल नेफ्रेक्टोमी",
            "छोटे द्रव्यमान के लिए सक्रिय निगरानी",
            "चयनित मामलों के लिए एब्लेशन तकनीक",
            "टार्गेटेड थेरेपी (सुनीटिनिब, पाज़ोपानिब)",
            "इम्यूनोथेरेपी संयोजन",
            "मेटास्टेटिक रोग के लिए साइटोरिडक्टिव नेफ्रेक्टोमी"
        ]
    },
    testicular_cancer: {
        name: "वृषण कैंसर",
        riskFactors: "क्रिप्टोर्किडिज्म, पारिवारिक इतिहास, क्लाइनफेल्टर सिंड्रोम, कॉकेशियन जाति, पिछला वृषण कैंसर",
        investigations: [
            "स्क्रोटल अल्ट्रासाउंड",
            "ट्यूमर मार्कर (AFP, HCG, LDH)",
            "CT पेट/श्रोणि",
            "छाती इमेजिंग",
            "यदि लक्षण हों तो ब्रेन MRI",
            "ऑर्कीएक्टोमी के बाद मार्कर"
        ],
        treatment: [
            "रेडिकल इंग्वाइनल ऑर्कीएक्टोमी",
            "प्रारंभिक चरण के लिए निगरानी",
            "एडजुवेंट कीमोथेरेपी या रेडिएशन",
            "अवशिष्ट द्रव्यमान के लिए RPLND",
            "स्टेम सेल रेस्क्यू के साथ उच्च खुराक कीमो",
            "उन्नत रोग में भी उत्कृष्ट इलाज दर"
        ]
    },
    gallbladder_cancer: {
        name: "पित्ताशय कैंसर",
        riskFactors: "पित्त पथरी, क्रोनिक सूजन, पोर्सिलेन गॉलब्लैडर, महिला लिंग, मोटापा, प्राथमिक स्क्लेरोज़िंग कोलेंजाइटिस",
        investigations: [
            "पहला इमेजिंग मोडैलिटी के रूप में अल्ट्रासाउंड",
            "स्टेजिंग के लिए CT/MRI",
            "बिलियरी ट्री मूल्यांकन के लिए MRCP",
            "बायोप्सी के साथ एंडोस्कोपिक अल्ट्रासाउंड",
            "रेसेक्टेबिलिटी मूल्यांकन के लिए लैपरोस्कोपी",
            "CA19-9 ट्यूमर मार्कर"
        ],
        treatment: [
            "लीवर रिसेक्शन के साथ रेडिकल कोलेसिस्टेक्टोमी",
            "लिम्फ नोड डिसेक्शन",
            "एडजुवेंट कीमोथेरेपी/कैप्सिटाबिन",
            "पैलिएटिव बिलियरी स्टेंटिंग",
            "उन्नत रोग के लिए जेमसिटाबिन-आधारित कीमोथेरेपी",
            "प्रारंभिक पता लगाने के लिए आक्रामक सर्जरी"
        ]
    },
    liver_cancer: {
        name: "यकृत कैंसर",
        riskFactors: "क्रोनिक हेपेटाइटिस B/C, सिरोसिस, शराब, NAFLD, एफ्लाटॉक्सिन एक्सपोजर, हेमोक्रोमैटोसिस, अल्फा-1 एंटीट्रिप्सिन डेफिशिएंसी",
        investigations: [
            "उच्च जोखिम वाले रोगियों में अल्ट्रासाउंड सर्विलांस",
            "मल्टीफेज़ CT या MRI",
            "AFP ट्यूमर मार्कर",
            "यदि इमेजिंग अनिर्णायक हो तो बायोप्सी",
            "वैरिसेस मूल्यांकन के लिए एंडोस्कोपी",
            "लीवर फंक्शन के लिए चाइल्ड-प्यू स्कोर"
        ],
        treatment: [
            "यदि पर्याप्त यकृत कार्य हो तो सर्जिकल रिसेक्शन",
            "मिलान मानदंड के भीतर यकृत प्रत्यारोपण",
            "स्थानीय एब्लेशन (RFA, माइक्रोवेव)",
            "ट्रांसआर्टेरियल कीमोएम्बोलाइजेशन (TACE)",
            "टार्गेटेड थेरेपी (सोराफेनिब, लेन्वाटिनिब)",
            "इम्यूनोथेरेपी संयोजन"
        ]
    },
    pancreatic_cancer: {
        name: "अग्नाशय कैंसर",
        riskFactors: "धूम्रपान, क्रोनिक अग्नाशयशोथ, मधुमेह, मोटापा, पारिवारिक इतिहास, BRCA म्यूटेशन, आनुवंशिक सिंड्रोम (प्यूट्ज-जेगर्स)",
        investigations: [
            "CT पैनक्रियाज प्रोटोकॉल",
            "बायोप्सी के साथ एंडोस्कोपिक अल्ट्रासाउंड",
            "बिलियरी मूल्यांकन के लिए MRCP",
            "CA19-9 ट्यूमर मार्कर",
            "मेटास्टेटिक वर्कअप के लिए PET-CT",
            "आनुवंशिक मामलों के लिए जेनेटिक टेस्टिंग"
        ],
        treatment: [
            "हेड ट्यूमर के लिए व्हिप्पल प्रक्रिया",
            "बॉडी/टेल ट्यूमर के लिए डिस्टल पैनक्रिएटेक्टोमी",
            "बॉर्डरलाइन रेसेक्टेबल के लिए नियोएडजुवेंट थेरेपी",
            "जेमसिटाबिन/नैब-पैक्लिटैक्सेल या FOLFIRINOX",
            "पैलिएटिव बिलियरी स्टेंटिंग",
            "BRCA म्यूटेशन के लिए PARP अवरोधक"
        ]
    },
    skin_cancer: {
        name: "त्वचा कैंसर",
        riskFactors: "यूवी विकिरण एक्सपोजर, गोरी त्वचा, सनबर्न का इतिहास, इम्यूनोसप्रेशन, पारिवारिक इतिहास, आर्सेनिक एक्सपोजर, कई तिल",
        investigations: [
            "पूर्ण त्वचा परीक्षण",
            "डर्मोस्कोपी",
            "एक्सिशनल बायोप्सी",
            "मेलेनोमा के लिए सेंटिनल लिम्फ नोड बायोप्सी",
            "उन्नत मेलेनोमा के लिए CT/MRI",
            "मेलेनोमा के लिए BRAF म्यूटेशन टेस्टिंग"
        ],
        treatment: [
            "मार्जिन के साथ सर्जिकल एक्सिशन",
            "बेसल सेल कार्सिनोमा के लिए मोह्स सर्जरी",
            "सतही घावों के लिए टॉपिकल थेरेपी",
            "चयनित मामलों के लिए रेडिएशन थेरेपी",
            "उन्नत मेलेनोमा के लिए इम्यूनोथेरेपी",
            "BRAF-म्यूटेटेड मेलेनोमा के लिए टार्गेटेड थेरेपी"
        ]
    },
    lung_cancer: {
        name: "फेफड़ों का कैंसर",
        riskFactors: "धूम्रपान, रेडॉन एक्सपोजर, एस्बेस्टोस, वायु प्रदूषण, पारिवारिक इतिहास, पिछली रेडिएशन थेरेपी, कुछ रसायन (आर्सेनिक, निकल)",
        investigations: [
            "कंट्रास्ट के साथ CT छाती",
            "स्टेजिंग के लिए PET-CT",
            "बायोप्सी (ब्रोंकोस्कोपी, CT-मार्गदर्शित, EBUS)",
            "आणविक परीक्षण (EGFR, ALK, ROS1, PD-L1)",
            "यदि लक्षण हों तो MRI ब्रेन",
            "फुफ्फुसीय कार्य परीक्षण"
        ],
        treatment: [
            "प्रारंभिक चरण के लिए सर्जिकल रिसेक्शन (लोबेक्टोमी)",
            "चिकित्सकीय रूप से इनऑपरेबल के लिए SBRT",
            "स्टेज II-III के लिए एडजुवेंट कीमोथेरेपी",
            "ड्राइवर म्यूटेशन के लिए टार्गेटेड थेरेपी",
            "PD-L1 पॉजिटिव ट्यूमर के लिए इम्यूनोथेरेपी",
            "लक्षणों के लिए पैलिएटिव रेडिएशन"
        ]
    },
    laryngeal_cancer: {
        name: "स्वरयंत्र कैंसर",
        riskFactors: "तंबाकू का उपयोग, शराब का सेवन, HPV संक्रमण, GERD, व्यावसायिक एक्सपोजर (एस्बेस्टोस, सल्फ्यूरिक एसिड), खराब पोषण",
        investigations: [
            "बायोप्सी के साथ लैरिंगोस्कोपी",
            "कंट्रास्ट के साथ CT/MRI गर्दन",
            "उन्नत मामलों के लिए PET-CT",
            "भाषण/निगलने का मूल्यांकन",
            "द्वितीयक प्राथमिक ट्यूमर को नियंत्रित करने के लिए पैनएंडोस्कोपी",
            "मेटास्टेसिस के लिए छाती इमेजिंग"
        ],
        treatment: [
            "प्रारंभिक चरण: रेडिएशन या एंडोस्कोपिक रिसेक्शन",
            "उन्नत: नेक डिसेक्शन के साथ लैरिंजेक्टोमी",
            "अंग संरक्षण प्रोटोकॉल (कीमो-रेडिएशन)",
            "लैरिंजेक्टोमी के बाद आवाज पुनर्वास",
            "टार्गेटेड थेरेपी (सेटक्सिमाब)",
            "मेटास्टेटिक रोग के लिए पैलिएटिव केयर"
        ]
    },
    thyroid_cancer: {
  name: "थायरॉइड कैंसर",
  riskFactors: "विकिरण का संपर्क (विशेषकर बचपन में), पारिवारिक इतिहास, कुछ आनुवंशिक सिंड्रोम (MEN2, FAP), महिला लिंग, आयोडीन की कमी",
  investigations: [
    "थायरॉइड अल्ट्रासाउंड",
    "एफएनए बायोप्सी",
    "थायरॉइड फंक्शन टेस्ट",
    "बड़े या आक्रामक ट्यूमर के लिए सीटी/एमआरआई",
    "थाइरोग्लोबुलिन और एंटी-थाइरोग्लोबुलिन एंटीबॉडी",
    "मेडुलरी थायरॉइड कैंसर के लिए जेनेटिक टेस्टिंग"
  ],
  treatment: [
    "अधिकांश मामलों में टोटल थायरॉयडेक्टॉमी",
    "लसीका ग्रंथियों के प्रभावित होने पर उनकी सर्जरी",
    "रेडियोधर्मी आयोडीन एब्लेशन",
    "टीएसएच दमन चिकित्सा",
    "उन्नत रोग के लिए लक्षित उपचार",
    "नियमित थाइरोग्लोबुलिन मॉनिटरिंग"
  ]
},

gastrointestinal_stromal: {
  name: "जठरांत्र संबंधी स्ट्रोमल ट्यूमर",
  riskFactors: "अधिकांश स्वतः होते हैं, दुर्लभ पारिवारिक रूप (कार्नी ट्रायड, NF1), कोई स्पष्ट पर्यावरणीय जोखिम कारक नहीं, KIT/PDGFRA म्यूटेशन",
  investigations: [
    "सीटी एब्डॉमन/पेल्विस कॉन्ट्रास्ट के साथ",
    "एंडोस्कोपिक अल्ट्रासाउंड और बायोप्सी",
    "इमैटिनिब रिस्पॉन्स असेसमेंट के लिए पीईटी स्कैन",
    "KIT/PDGFRA म्यूटेशन टेस्टिंग",
    "रेक्टल GISTs के लिए एमआरआई",
    "ट्यूमर का आकार और माइटोटिक रेट असेसमेंट"
  ],
  treatment: [
    "निगेटिव मार्जिन के साथ शल्य-क्रिया द्वारा हटाना",
    "मध्यम/उच्च जोखिम या मेटास्टेटिक मामलों के लिए इमैटिनिब",
    "इमैटिनिब-प्रतिरोधी GIST के लिए सुनीटिनिब",
    "तीसरी पंक्ति की थेरेपी के रूप में रेगोरेफेनिब",
    "प्रतिक्रियाशील मेटास्टेटिक रोग में डिबल्किंग सर्जरी",
    "पुनरावृत्ति जोखिम के कारण जीवनभर निगरानी"
  ]
},

buccal_mucosa_cancer: {
  name: "बक्कल म्यूकोसा कैंसर",
  riskFactors: "तंबाकू, सुपारी, शराब, खराब मौखिक स्वच्छता, लगातार जलन",
  investigations: [
    "क्लिनिकल परीक्षण",
    "बायोप्सी",
    "इमेजिंग: सीईसीटी चेहरा/गर्दन, आवश्यक होने पर एमआरआई",
    "स्टेजिंग के लिए छाती का एक्स-रे, यूएसजी एब्डॉमन"
  ],
  treatment: [
    "सर्जरी: वाइड एक्सीजन, हड्डी प्रभावित होने पर मैंडिबुलेक्टॉमी",
    "गर्दन की शल्य-क्रिया (नेक डिसेक्शन)",
    "उन्नत मामलों में रेडियोथेरेपी +/- कीमोथेरेपी",
    "आवश्यकतानुसार पुनर्निर्माण"
  ]
},

tongue_cancer: {
  name: "जीभ का कैंसर",
  riskFactors: "तंबाकू, शराब, एचपीवी, खराब मौखिक स्वच्छता, लगातार चोट",
  investigations: [
    "क्लिनिकल परीक्षण",
    "बायोप्सी",
    "इमेजिंग: सीईसीटी चेहरा/गर्दन, आवश्यक होने पर एमआरआई",
    "स्टेजिंग के लिए छाती का एक्स-रे, यूएसजी एब्डॉमन"
  ],
  treatment: [
    "सर्जरी: आंशिक/पूर्ण ग्लोसेक्टॉमी",
    "गर्दन की शल्य-क्रिया (नेक डिसेक्शन)",
    "उन्नत मामलों में रेडियोथेरेपी +/- कीमोथेरेपी",
    "आवश्यकतानुसार पुनर्निर्माण"
  ]
}

    
}
            }
        },
        te: {
            translation: {
                home_intro: "డాక్టర్ బమ్మిడి సందీప్ విస్తృతమైన శస్త్రచికిత్స నైపుణ్యాన్ని రోగి సమస్యలపై లోతైన అవగాహనతో మిళితం చేస్తారు. భారతదేశం అంతటా ప్రముఖ ఆంకాలజిస్టుల వద్ద ఆయన శిక్షణ మరియు సంక్లిష్టమైన క్యాన్సర్ శస్త్రచికిత్సలు చేయడంలో ఆచరణాత్మక అనుభవం ఆయనను అధునాతన చికిత్స కోరుకునే రోగులకు నమ్మకమైన ఎంపికగా చేస్తాయి. కచ్ వంటి ప్రాంతాలకు తృతీయ స్థాయి క్యాన్సర్ సంరక్షణను తీసుకురావడానికి ఆయన అంకితభావంతో ఉన్నారు, రోగులు ఇంటికి దగ్గరగా అధిక-నాణ్యత చికిత్సను పొందగలరని నిర్ధారిస్తారు. సంప్రదింపులు మరియు సమగ్ర క్యాన్సర్ సంరక్షణ కోసం, మీరు కోలుకునే దిశగా మీ ప్రయాణంలో తదుపరి అడుగు వేయడానికి డాక్టర్ బొమ్మిడి సందీప్‌తో కనెక్ట్ కావచ్చు.",
                home_name:"డాక్టర్ బమ్మిడి",
                home_second_name:"సందీప్",
                home_hi:"హలో నేను",
                home_intro2:"సంప్రదింపులు మరియు సమగ్ర క్యాన్సర్ సంరక్షణ కోసం, మీరు కోలుకునే ప్రయాణంలో తదుపరి అడుగు వేయడానికి డాక్టర్ బమ్మిడి సందీప్‌తో కనెక్ట్ కావచ్చు.",
                home_button:"మరింత తెలుసుకోండి",
                sidebar_link_home:"హోమ్",
                sidebar_link_About:"మా గురించి",
                sidebar_link_consultation:"సంప్రదింపులు",
                sidebar_link_testimonials:"టెస్టిమోనియల్‌లు",
                sidebar_link_successStories:"సక్సెస్ స్టోరీస్",
                sidebar_link_knowAboutCancer:"క్యాన్సర్ గురించి తెలుసుకోండి",
                sidebar_link_certifications:"ధృవపత్రాలు",
                sidebar_link_contact:"సంప్రదించండి",
                about_doctor_full_name:"డాక్టర్ బమ్మిడి సందీప్, ",
                about_para1:"అంకితభావంతో కూడిన సర్జికల్ ఆంకాలజిస్ట్, ఆంధ్రప్రదేశ్‌కు చెందినవాడు, అక్కడ అతని వైద్య ప్రయాణం బలమైన విద్యా పునాది మరియు రోగి సంరక్షణ పట్ల అచంచలమైన మక్కువతో ప్రారంభమైంది. తన ప్రారంభ సంవత్సరాల నుండి, అతను ఆరోగ్య సంరక్షణ పట్ల లోతైన నిబద్ధతను ప్రదర్శించాడు, ఇది చివరికి అత్యంత ప్రత్యేకత కలిగిన క్యాన్సర్ సర్జన్‌గా మారే దిశగా అతని మార్గాన్ని రూపొందించింది.",
                about_para2:"డాక్టర్ సందీప్ 2013లో ఆంధ్రప్రదేశ్‌లోని డాక్టర్ PSIMS & RF నుండి MBBS పట్టా పొందాడు, అక్కడే అతను తన వైద్య వృత్తికి పునాది వేశాడు. జనరల్ మెడిసిన్‌లో అతని ప్రారంభ క్లినికల్ ఎక్స్‌పోజర్ మరియు శిక్షణ అతన్ని శస్త్రచికిత్సను తన వృత్తిగా కొనసాగించడానికి ప్రేరేపించాయి. తన శస్త్రచికిత్స నైపుణ్యాన్ని పెంచుకోవాలనే దృఢ సంకల్పంతో, అతను అధునాతన శిక్షణను ప్రారంభించాడు, అది తరువాత ఆంకాలజీలో అతని ప్రయాణాన్ని రూపొందించింది.",
                about_para3:"2019లో, ఆయన తెలంగాణలోని హైదరాబాద్‌లోని మల్లారెడ్డి ఇన్‌స్టిట్యూట్ ఆఫ్ మెడికల్ సైన్సెస్ నుండి జనరల్ సర్జరీలో DNB పూర్తి చేశారు, ఇది విస్తృతమైన క్లినికల్ ప్రాక్టీస్ మరియు సర్జికల్ శిక్షణకు మంచి గుర్తింపు పొందిన సంస్థ. ఈ అనుభవం అతనికి విస్తృత శ్రేణి సంక్లిష్ట సర్జికల్ కేసులను నిర్వహించే సామర్థ్యాన్ని అందించింది మరియు ఆపరేటివ్ కేర్‌లో అతని పునాదిని బలోపేతం చేసింది.",
                about_para4:"ఆంకాలజీపై పెరుగుతున్న ఆసక్తితో, డాక్టర్ సందీప్ 2023లో ముంబైలోని ప్రిన్స్ అలీ ఖాన్ హాస్పిటల్ మరియు నాసిక్‌లోని HCG మానవత క్యాన్సర్ సెంటర్‌లో సర్జికల్ ఆంకాలజీలో ప్రతిష్టాత్మకమైన డాక్టరేట్ ఆఫ్ నేషనల్ బోర్డ్ (DrNB)ని అభ్యసించారు. ప్రముఖ ఆంకాలజిస్టుల మార్గదర్శకత్వంలో, అతను అధునాతన క్యాన్సర్ శస్త్రచికిత్సలలో తన నైపుణ్యాలను మెరుగుపరుచుకున్నాడు మరియు బహుళ ఉప ప్రత్యేకతలలో క్యాన్సర్‌లకు చికిత్స చేయడంలో లోతైన నైపుణ్యాన్ని పొందాడు.",
                about_para5:"తన స్పెషలైజేషన్‌ను మరింత మెరుగుపరుచుకోవడానికి, డాక్టర్ సందీప్ 2025లో అంతర్జాతీయ గుర్తింపు పొందారు, సింగపూర్‌లోని నేషనల్ క్యాన్సర్ సెంటర్‌లో HIPEC & PIPAC సర్జన్‌గా సర్టిఫికేషన్ పొందారు, అక్కడ ఆయన అధునాతన పెరిటోనియల్ సర్ఫేస్ ఆంకాలజీ విధానాలలో శిక్షణ పొందారు. అదే సంవత్సరంలో, ఆయన SS ఇన్నోవేషన్స్‌లో సర్టిఫైడ్ రోబోటిక్ సర్జన్ అయ్యాడు, మినిమల్లీ ఇన్వాసివ్ క్యాన్సర్ సర్జరీల కోసం అత్యాధునిక రోబోటిక్ టెక్నాలజీలో ప్రావీణ్యం సంపాదించాడు.",
                about_para6:"తన విస్తృత శిక్షణ మరియు ప్రపంచవ్యాప్త అనుభవం ద్వారా, డాక్టర్ సందీప్ క్యాన్సర్ చికిత్సకు సమగ్రమైన మరియు రోగి-కేంద్రీకృత విధానాన్ని అభివృద్ధి చేశారు. రోగులకు అధునాతనమైన, ఆధారాల ఆధారిత మరియు కరుణామయమైన క్యాన్సర్ సంరక్షణ అందుబాటులో ఉండేలా చూడటం, ప్రపంచ స్థాయి నైపుణ్యాన్ని భారతదేశం మరియు వెలుపల ఉన్న సమాజాలకు దగ్గరగా తీసుకురావడం అతని లక్ష్యం.",
                about:"మా గురించి",
                achievement1:"MBBS - 2013 - డాక్టర్ PSIMS & RF, ఆంధ్రప్రదేశ్",
                achievement2:"2019 - DNB జనరల్ సర్జరీ - మల్లా రెడ్డి ఇన్స్టిట్యూట్ ఆఫ్ మెడికల్ సైన్సెస్, హైదరాబాద్ - తెలంగాణ",
                achievement3:"2023 - నేషనల్ బోర్డ్ (DrNB) డాక్టరేట్ ఆఫ్ సర్జికల్ ఆంకాలజీ - ప్రిన్స్ అలీ ఖాన్ హాస్పిటల్, ముంబై / HCG మన్వత క్యాన్సర్ సెంటర్, నాసిక్",
                achievement4:"2025 - సర్టిఫైడ్ HIPEC & PIPAC సర్జన్ - నేషనల్ క్యాన్సర్ సెంటర్, సింగపూర్",
                achievement5:"2025 - సర్టిఫైడ్ రోబోటిక్ సర్జన్ - SS ఇన్నోవేషన్స్",
                achievement:"విజయాలు",
                email:"ఇమెయిల్",
                role:"పాత్ర",
                contactNo:"సంప్రదింపు నంబర్",
                risk_factors: "రిస్క్ ఫ్యాక్టర్స్",
      investigations: "పరిశోధనలు",
      treatment: "చికిత్స",
      cancer_specialist:"శ్రీకాకుళంలో మొదటి క్యాన్సర్ సర్జన్",
      address:"చిరునామా",
                addressVal:"త్రినేత్ర సూపర్ స్పెషాలిటీ ఆసుపత్రి, డే అండ్ నైట్ జంక్షన్, శ్రీకాకుళం, ఆంధ్ర ప్రదేశ్",
                workingHrs:"పని గంటలు",
                sendMessage:"సందేశాన్ని పంపండి",
                design:"రూపకల్పన మరియు అభివృద్ధి చేసినది",
                kolors:"",
                title: "సంస్థలు",
                titleAwards: "గౌరవాలు & అవార్డులు",
    list: [
      {
        title: "ఉత్తమ పేపర్ అవార్డు",
        issuer: "IASO NATCON 2022",
        date: "అక్టోబర్ 2022",
        details: "IASO నుండి పోడియం ప్రదర్శన, రూ.10000 నగదు బహుమతి"
      },
      {
        title: "ఉత్తమ పోస్టర్ అవార్డు",
        issuer: "ASI",
        date: "డిసెంబర్ 2017",
        details: "అసికాన్ 2017"
      },
      {
        title: "ASI యంగ్ సర్జన్ సౌత్ జోన్ టారెంట్ ఫార్మా అవార్డు",
        issuer: "ASI",
        date: "ఏప్రిల్ 2017",
        details: "రన్నరప్ - కేస్ ప్రెజెంటేషన్ RIF MASS"
      },
      {
        title: "ఉత్తమ పేపర్ అవార్డు",
        issuer: "ASICON 2016",
        date: "డిసెంబర్ 2016",
        details: "ఉత్తమ పేపర్ అవార్డు"
      }
    ],
  associated: "సంబంధం",
  orgs: [
    { name: "భారత గైనకాలజికల్ ఆంకాలజిస్టుల సంఘం", role: "జీవిత సభ్యుడు", date: "అక్టోబర్ 2024 - ప్రస్తుతం" },
    { name: "భారత స్తన శస్త్రచికిత్స వైద్యుల సంఘం", role: "జీవిత సభ్యుడు", date: "అక్టోబర్ 2024 - ప్రస్తుతం" },
    { name: "తల మరియు మెడ ఆంకాలజీ ఫౌండేషన్", role: "జీవిత సభ్యుడు", date: "అక్టోబర్ 2024 - ప్రస్తుతం" },
    { name: "శస్త్రచికిత్స ఆంకాలజీ సంఘం - SSO", role: "సభ్యుడు", date: "డిసెంబర్ 2023 - ప్రస్తుతం", associated: "HCG మనవతా ఆంకాలజీ LLP" },
    { name: "ISPSM - భారత పిరిటోనియల్ సర్ఫేస్ మాలిగ్నెన్సీస్ సంఘం", role: "జీవిత సభ్యుడు", date: "మే 2023 - ప్రస్తుతం" },
    { name: "భారత శస్త్రచికిత్స ఆంకాలజీ సంఘం - IASO", role: "జీవిత సభ్యుడు", date: "మార్చి 2021 - ప్రస్తుతం" },
    { name: "ASI - భారత శస్త్రవైద్యుల సంఘం", role: "జీవిత సభ్యుడు", date: "అక్టోబర్ 2014 - ప్రస్తుతం" },
    { name: "IMA", role: "జీవిత సభ్యుడు", date: "జూలై 2014 - ప్రస్తుతం" }
  ],
      cancerInfo: {
      breast_cancer: {
        name: "స్తన క్యాన్సర్",
        riskFactors: "వయస్సు, కుటుంబ చరిత్ర, BRCA మ్యుటేషన్లు, స్థూలకాయం, హార్మోన్ థెరపీ, ఆలస్య గర్భం, రేడియేషన్ ఎక్స్పోజర్",
        investigations: [
          "35 సంవత్సరాలకు మించిన మహిళలకు మమ్మోగ్రఫీ",
          "35 సంవత్సరాల కంటే తక్కువ వయస్సు ఉన్న మహిళలకు అల్ట్రాసౌండ్",
          "కేసు ఆధారంగా MRI",
          "ER, PR, HER2 రిసెప్టర్ స్థితి కోసం కోర్ బయోప్సీ మరియు IHC",
          "PET-CT/CECT TAP & బోన్ స్కాన్తో స్టేజింగ్",
          "స్థానికంగా అధునాతన కేసులు స్టేజింగ్ అవసరం"
        ],
        treatment: [
          "IHC రిసెప్టర్ స్థితి ప్రకారం వ్యక్తిగతం",
          "ER/PR పాజిటివ్ - అడ్జువంట్గా హార్మోన్ థెరపీ",
          "HER2 పాజిటివ్ - అడ్జువంట్ & మెయింటెనెన్స్ (ట్రాస్టుజుమాబ్) + కెమోథెరపీ",
          "ట్రిపుల్ నెగటివ్ - నియోఅడ్జువంట్ లేదా అడ్జువంట్ (ప్రారంభ) కెమోథెరపీ",
          "ప్రారంభ దశ: సర్జరీ (లంపెక్టమీ + రేడియేషన్/మాస్టెక్టమీ), అక్షల శోషరస కణజాలం డిసెక్షన్ లేదా సెంటినల్ నోడ్ బయోప్సీ",
          "స్థానికంగా అధునాతన దశ: నియోఅడ్జువంట్ చికిత్స తర్వాత సర్జరీ + రేడియేషన్"
        ]
      },
      oral_cavity_cancer: {
        name: "నోటి కుహర క్యాన్సర్",
        riskFactors: "పొగాకు వాడకం, మద్యం సేవించడం, HPV ఇన్ఫెక్షన్, పాత నోటి పరిశుభ్రత, వెట్టిలు తినడం, UV కాంతి ఎక్స్పోజర్ (పెదవి క్యాన్సర్ కోసం)",
        investigations: [
          "క్లినికల్ పరీక్ష మరియు బయోప్సీ",
          "స్థానిక పరిధి మరియు నోడల్ ఇన్వాల్వ్మెంట్ కోసం CT/MRI",
          "రెండవ ప్రాథమిక ట్యూమర్లను నిర్ధారించడానికి పానెండోస్కోపీ",
          "మెటాస్టేసెస్ గుర్తించడానికి అధునాతన కేసులకు PET-CT",
          "చికిత్సకు ముందు దంత మూల్యాంకనం"
        ],
        treatment: [
          "ప్రారంభ దశ: శస్త్రచికిత్స లేదా రేడియేషన్ థెరపీ",
          "అధునాతన దశ: శస్త్రచికిత్స, రేడియేషన్ మరియు కెమోథెరపీ కలయిక",
          "విస్తృతమైన రిసెక్షన్ల తర్వాత పునర్నిర్మాణం",
          "నోడల్ ఇన్వాల్వ్మెంట్ కోసం మెడ డిసెక్షన్",
          "పునరావృత/మెటాస్టాటిక్ కేసులకు లక్ష్యిత చికిత్స (సెటుక్సిమాబ్)"
        ]
      },
      colon_cancer: {
        name: "కోలన్ క్యాన్సర్",
        riskFactors: "వయస్సు, కుటుంబ చరిత్ర, పాలిప్స్, ఇన్ఫ్లమేటరీ బౌల్ వ్యాధి, తక్కువ ఫైబర్ ఆహారం, స్థూలకాయం, ధూమపానం, లించ్ సిండ్రోమ్, FAP",
        investigations: [
          "బయోప్సీతో కోలోనోస్కోపీ",
          "కోలోనోస్కోపీ అసంపూర్ణంగా ఉంటే CT కోలోనోగ్రఫీ",
          "CEA స్థాయి (ట్యూమర్ మార్కర్)",
          "స్టేజింగ్ కోసం CT ఛాతీ/ఉదరం/శ్రోణి",
          "రెక్టల్ క్యాన్సర్ మూల్యాంకనం కోసం MRI",
          "అనువంశిక సిండ్రోమ్ల కోసం జన్యు పరీక్ష"
        ],
        treatment: [
          "లింఫ్ నోడ్ తొలగింపుతో శస్త్రచికిత్స రిసెక్షన్ (కోలెక్టమీ)",
          "స్టేజ్ III మరియు అధిక ప్రమాద స్టేజ్ II కోసం అడ్జువంట్ కెమోథెరపీ",
          "రెక్టల్ క్యాన్సర్ కోసం రేడియేషన్ థెరపీ",
          "మెటాస్టాటిక్ వ్యాధికి లక్ష్యిత చికిత్సలు (బెవాసిజుమాబ్, సెటుక్సిమాబ్)",
          "MSI-H ట్యూమర్లకు ఇమ్యునోథెరపీ",
          "చికిత్స తర్వాత నిరంతర పర్యవేక్షణ"
        ]
      },
      rectal_cancer: {
        name: "రెక్టల్ క్యాన్సర్",
        riskFactors: "కోలన్ క్యాన్సర్ లాగానే ప్లస్ శ్రోణి రేడియేషన్ ఎక్స్పోజర్, అధిక కొవ్వు ఆహారం, నిష్క్రియ జీవనశైలి",
        investigations: [
          "డిజిటల్ రెక్టల్ పరీక్ష",
          "బయోప్సీతో కోలోనోస్కోపీ",
          "స్థానిక స్టేజింగ్ కోసం ఎండోరెక్టల్ అల్ట్రాసౌండ్",
          "వివరణాత్మక అంచనా కోసం శ్రోణి MRI",
          "దూర మెటాస్టేసెస్ కోసం CT ఛాతీ/ఉదరం/శ్రోణి",
          "ఎంచుకున్న కేసులలో PET-CT"
        ],
        treatment: [
          "స్థానికంగా అధునాతన కేసులకు నియోఅడ్జువంట్ కెమోరేడియేషన్",
          "టోటల్ మెసోరెక్టల్ ఎక్సిజన్ సర్జరీ",
          "అడ్జువంట్ కెమోథెరపీ",
          "చాలా ప్రారంభ ట్యూమర్లకు స్థానిక ఎక్సిజన్",
          "సాధ్యమైనప్పుడు స్ఫింక్టర్-స్పేరింగ్ పద్ధతులు",
          "మెటాస్టాటిక్ వ్యాధికి పాలియేటివ్ థెరపీలు"
        ]
      },
      cervix_cancer: {
        name: "గర్భాశయ ముఖ క్యాన్సర్",
        riskFactors: "HPV ఇన్ఫెక్షన్, బహుళ లైంగిక భాగస్వాములు, ప్రారంభ లైంగిక కార్యకలాపాలు, ధూమపానం, రోగనిరోధక శక్తి తగ్గడం, దీర్ఘకాలిక ఓరల్ కాంట్రాసెప్టివ్ వాడకం",
        investigations: [
          "పాప్ స్మియర్ స్క్రీనింగ్",
          "బయోప్సీతో కోల్పోస్కోపీ",
          "HPV DNA పరీక్ష",
          "అనస్తీషియా కింద శ్రోణి పరీక్ష",
          "స్థానిక స్టేజింగ్ కోసం MRI",
          "అధునాతన వ్యాధి కోసం CT/PET-CT"
        ],
        treatment: [
          "ప్రారంభ దశ: కోన్ బయోప్సీ లేదా హిస్టరెక్టమీ",
          "లింఫ్ నోడ్ డిసెక్షన్తో రాడికల్ హిస్టరెక్టమీ",
          "స్థానికంగా అధునాతన వ్యాధికి కెమోరేడియేషన్",
          "బ్రాకీథెరపీ (అంతర్గత వికిరణం)",
          "మెటాస్టాటిక్ వ్యాధికి పాలియేటివ్ కెమోథెరపీ",
          "నివారణ కోసం HPV టీకా"
        ]
      },
      ovary_cancer: {
        name: "అండాశయ క్యాన్సర్",
        riskFactors: "వయస్సు, కుటుంబ చరిత్ర, BRCA మ్యుటేషన్లు, సంతానం లేకపోవడం, ఎండోమెట్రియోసిస్, హార్మోన్ రీప్లేస్మెంట్ థెరపీ, స్థూలకాయం",
        investigations: [
          "శ్రోణి పరీక్ష మరియు ట్రాన్స్వాజినల్ అల్ట్రాసౌండ్",
          "CA-125 ట్యూమర్ మార్కర్",
          "CT ఉదరం/శ్రోణి",
          "అసైట్స్ ఉంటే పారాసెంటెసిస్",
          "BRCA మ్యుటేషన్ల కోసం జన్యు పరీక్ష",
          "నిర్ధారణ కోసం ఎక్స్ప్లోరేటరీ లాపరోటమీ/లాపరోస్కోపీ"
        ],
        treatment: [
          "శస్త్రచికిత్స డిబల్కింగ్ (ఆప్టిమల్ సైటోరిడక్షన్)",
          "ప్లాటినం-ఆధారిత కెమోథెరపీ",
          "BRCA-మ్యుటేటెడ్ క్యాన్సర్లకు PARP ఇన్హిబిటర్లు",
          "యాంటీ-యాంజియోజెనిక్ థెరపీ (బెవాసిజుమాబ్)",
          "ఎంచుకున్న కేసులలో సెకండరీ సైటోరిడక్షన్",
          "అధిక ప్రమాద రోగులకు ప్రొఫైలాక్టిక్ సర్జరీ"
        ]
      },
      endometrium_cancer: {
        name: "ఎండోమెట్రియం క్యాన్సర్",
        riskFactors: "స్థూలకాయం, అనియంత్రిత ఎస్ట్రోజన్ ఎక్స్పోజర్, టామాక్సిఫెన్ వాడకం, సంతానం లేకపోవడం, ఆలస్య మెనోపాజ్, లించ్ సిండ్రోమ్",
        investigations: [
          "ఎండోమెట్రియల్ బయోప్సీ",
          "డైలేషన్ మరియు క్యూరెటేజ్ (D&C)",
          "ట్రాన్స్వాజినల్ అల్ట్రాసౌండ్",
          "స్థానిక స్టేజింగ్ కోసం MRI",
          "అధునాతన వ్యాధి కోసం CT",
          "అనువంశిక సిండ్రోమ్ల కోసం జన్యు పరీక్ష"
        ],
        treatment: [
          "బైలాటరల్ సాల్పింగో-ఓఫోరెక్టమీతో టోటల్ హిస్టరెక్టమీ",
          "లింఫ్ నోడ్ డిసెక్షన్",
          "అధిక ప్రమాద కేసులకు రేడియేషన్ థెరపీ",
          "ప్రారంభ దశ లేదా పునరావృత వ్యాధికి హార్మోన్ థెరపీ",
          "అధునాతన/మెటాస్టాటిక్ వ్యాధికి కెమోథెరపీ",
          "MSI-H ట్యూమర్లకు ఇమ్యునోథెరపీ"
        ]
      },
      esophagus_cancer: {
        name: "అన్నవాహిక క్యాన్సర్",
        riskFactors: "ధూమపానం, మద్యం, GERD, బారెట్ యొక్క అన్నవాహిక, స్థూలకాయం, అకలాసియా, వేడి పానీయం సేవన, తక్కువ పండ్లు/కూరగాయల ఆహారం",
        investigations: [
          "బయోప్సీతో అప్పర్ ఎండోస్కోపీ",
          "స్టేజింగ్ కోసం ఎండోస్కోపిక్ అల్ట్రాసౌండ్",
          "CT ఛాతీ/ఉదరం/శ్రోణి",
          "మెటాస్టాటిక్ మూల్యాంకనం కోసం PET-CT",
          "ప్రాక్సిమల్ ట్యూమర్లకు బ్రోన్కోస్కోపీ",
          "ఎంచుకున్న కేసులకు లాపరోస్కోపీ"
        ],
        treatment: [
          "ప్రారంభ దశ: ఎండోస్కోపిక్ రిసెక్షన్",
          "రెసెక్టబుల్ ట్యూమర్లకు శస్త్రచికిత్స (ఎసోఫాజెక్టమీ)",
          "నియోఅడ్జువంట్ కెమోరేడియేషన్",
          "రెసెక్టబుల్ కాని కేసులకు డెఫినిటివ్ కెమోరేడియేషన్",
          "పాలియేటివ్ స్టెంటింగ్ లేదా రేడియేషన్",
          "అధునాతన వ్యాధికి ఇమ్యునోథెరపీ"
        ]
      },
      stomach_cancer: {
        name: "జీర్ణకోశ క్యాన్సర్",
        riskFactors: "H. pylori ఇన్ఫెక్షన్, పొగలేయబడిన/ఉప్పు పెట్టిన ఆహారం, ధూమపానం, పెర్నిషియస్ అనీమియా, కుటుంబ చరిత్ర, మునుపటి జీర్ణకోశ శస్త్రచికిత్స",
        investigations: [
          "బయోప్సీతో అప్పర్ ఎండోస్కోపీ",
          "ఎండోస్కోపిక్ అల్ట్రాసౌండ్",
          "CT ఛాతీ/ఉదరం/శ్రోణి",
          "పెరిటోనియల్ మూల్యాంకనం కోసం లాపరోస్కోపీ",
          "అధునాతన వ్యాధికి HER2 పరీక్ష",
          "ట్యూమర్ మార్కర్లు (CEA, CA19-9)"
        ],
        treatment: [
          "లింఫ్ నోడ్ డిసెక్షన్తో శస్త్రచికిత్స రిసెక్షన్ (గ్యాస్ట్రెక్టమీ)",
          "అడ్జువంట్ కెమోరేడియేషన్ లేదా కెమోథెరపీ",
          "పెరియోపరేటివ్ కెమోథెరపీ",
          "లక్ష్యిత చికిత్స (HER2+ కోసం ట్రాస్టుజుమాబ్)",
          "పాలియేటివ్ కెమోథెరపీ",
          "PD-L1 పాజిటివ్ ట్యూమర్లకు ఇమ్యునోథెరపీ"
        ]
      },
      sarcoma: {
        name: "సార్కోమా",
        riskFactors: "మునుపటి రేడియేషన్ ఎక్స్పోజర్, కొన్ని జన్యు సిండ్రోమ్లు (లీ-ఫ్రామేని, NF1), రసాయన ఎక్స్పోజర్ (వినైల్ క్లోరైడ్, డయాక్సిన్స్), దీర్ఘకాలిక లింఫెడిమా",
        investigations: [
          "స్థానిక పరిధి కోసం MRI (సాఫ్ట్ టిష్యూ సార్కోమా)",
          "ఎముక సార్కోమాలకు CT",
          "మాలిక్యులర్ టెస్టింగ్తో బయోప్సీ",
          "స్టేజింగ్ కోసం PET-CT",
          "ఛాతీ CT (సాధారణ మెటాస్టాసిస్ సైట్)",
          "అనువంశిక సిండ్రోమ్ల కోసం జన్యు సలహా"
        ],
        treatment: [
          "నెగటివ్ మార్జిన్లతో వైడ్ లోకల్ ఎక్సిజన్",
          "సాధ్యమైనప్పుడు అవయవ-సంరక్షణ శస్త్రచికిత్స",
          "స్థానిక నియంత్రణ కోసం రేడియేషన్ థెరపీ",
          "అధిక-గ్రేడ్ ట్యూమర్లకు నియోఅడ్జువంట్/అడ్జువంట్ కెమోథెరపీ",
          "నిర్దిష్ట ఉప-రకాలకు లక్ష్యిత చికిత్సలు",
          "ఎంచుకున్న కేసులలో అంప్యుటేషన్"
        ]
      },
      urinary_bladder_cancer: {
        name: "మూత్రాశయ క్యాన్సర్",
        riskFactors: "ధూమపానం, వృత్తిపరమైన రసాయన ఎక్స్పోజర్ (రంగులు, రబ్బరు, పెయింట్), దీర్ఘకాలిక మూత్రాశయ వాపు, సైక్లోఫాస్ఫామైడ్ వాడకం, ఆర్సెనిక్ ఎక్స్పోజర్",
        investigations: [
          "బయోప్సీతో సిస్టోస్కోపీ",
          "మూత్రం సైటాలజీ",
          "CT యురోగ్రామ్",
          "కండర-ఆక్రమణ వ్యాధికి MRI",
          "స్టేజింగ్ కోసం ట్రాన్స్యురెత్రల్ రిసెక్షన్",
          "అధునాతన వ్యాధికి PD-L1 పరీక్ష"
        ],
        treatment: [
          "నాన్-మసల్ ఇన్వేసివ్: TURBT + ఇంట్రావెసికల్ BCG/కెమోథెరపీ",
          "మసల్-ఇన్వేసివ్: మూత్ర విక్షేపణతో రాడికల్ సిస్టెక్టమీ",
          "నియోఅడ్జువంట్ కెమోథెరపీ",
          "మూత్రాశయ సంరక్షణ ప్రోటోకాల్స్ (కెమో-రేడియేషన్)",
          "అధునాతన వ్యాధికి ఇమ్యునోథెరపీ",
          "పర్యవేక్షణ సిస్టోస్కోపీలు"
        ]
      },
      kidney_cancer: {
        name: "మూత్రపిండ క్యాన్సర్",
        riskFactors: "ధూమపానం, స్థూలకాయం, అధిక రక్తపోటు, సంపాదిత సిస్టిక్ మూత్రపిండ వ్యాధి, వాన్ హిప్పెల్-లిండౌ సిండ్రోమ్, దీర్ఘకాలిక డయాలసిస్",
        investigations: [
          "కంట్రాస్ట్తో CT ఉదరం",
          "సంక్లిష్టమైన కేసులకు MRI",
          "స్టేజింగ్ కోసం ఛాతీ ఇమేజింగ్",
          "చిన్న/అనిర్ణీత ద్రవ్యరాశులకు బయోప్సీ",
          "లక్షణాలు ఉంటే ఎముక స్కాన్",
          "అనువంశిక కేసులకు జన్యు పరీక్ష"
        ],
        treatment: [
          "పాక్షిక లేదా రాడికల్ నెఫ్రెక్టమీ",
          "చిన్న ద్రవ్యరాశులకు యాక్టివ్ పర్యవేక్షణ",
          "ఎంచుకున్న కేసులకు అబ్లేషన్ పద్ధతులు",
          "లక్ష్యిత చికిత్సలు (సునిటినిబ్, పాజోపానిబ్)",
          "ఇమ్యునోథెరపీ కలయికలు",
          "మెటాస్టాటిక్ వ్యాధికి సైటోరిడక్టివ్ నెఫ్రెక్టమీ"
        ]
      },
      testicular_cancer: {
        name: "వృషణ క్యాన్సర్",
        riskFactors: "క్రిప్టోర్చిడిజం, కుటుంబ చరిత్ర, క్లైన్ఫెల్టర్ సిండ్రోమ్, తెల్లజాతి, మునుపటి వృషణ క్యాన్సర్",
        investigations: [
          "స్క్రోటల్ అల్ట్రాసౌండ్",
          "ట్యూమర్ మార్కర్లు (AFP, HCG, LDH)",
          "CT ఉదరం/శ్రోణి",
          "ఛాతీ ఇమేజింగ్",
          "లక్షణాలు ఉంటే మెదడు MRI",
          "ఆర్కియెక్టమీ తర్వాత మార్కర్లు"
        ],
        treatment: [
          "రాడికల్ ఇంగ్వినల్ ఆర్కియెక్టమీ",
          "ప్రారంభ దశకు పర్యవేక్షణ",
          "అడ్జువంట్ కెమోథెరపీ లేదా రేడియేషన్",
          "మిగిలిన ద్రవ్యరాశులకు RPLND",
          "స్టెమ్ సెల్ రెస్క్యూతో అధిక-డోజ్ కెమో",
          "అధునాతన వ్యాధిలో కూడా అద్భుతమైన నయం"
        ]
      },
      gallbladder_cancer: {
        name: "పిత్తాశయ క్యాన్సర్",
        riskFactors: "పిత్తాశయ పుల్లలు, దీర్ఘకాలిక వాపు, పోర్సిలైన్ పిత్తాశయ, స్త్రీలు, స్థూలకాయం, ప్రాధమిక స్క్లెరోసింగ్ కోలాంజైటిస్",
        investigations: [
          "మొదటి ఇమేజింగ్ మోడాలిటీగా అల్ట్రాసౌండ్",
          "స్టేజింగ్ కోసం CT/MRI",
          "బిలియరీ ట్రీ మూల్యాంకనం కోసం MRCP",
          "బయోప్సీతో ఎండోస్కోపిక్ అల్ట్రాసౌండ్",
          "రెసెక్టబిలిటీ అంచనా కోసం లాపరోస్కోపీ",
          "CA19-9 ట్యూమర్ మార్కర్"
        ],
        treatment: [
          "కాలేయ రిసెక్షన్తో రాడికల్ కోలిసిస్టెక్టమీ",
          "లింఫ్ నోడ్ డిసెక్షన్",
          "అడ్జువంట్ కెమోథెరపీ/క్యాపెసిటాబిన్",
          "పాలియేటివ్ బిలియరీ స్టెంటింగ్",
          "అధునాతన వ్యాధికి జెమ్సిటాబిన్-ఆధారిత కెమోథెరపీ",
          "ప్రారంభ గుర్తింపు కోసం దృఢమైన శస్త్రచికిత్స"
        ]
        
      },
      liver_cancer: {
        name: "కాలేయ క్యాన్సర్",
        riskFactors: "దీర్ఘకాలిక హెపటైటిస్ B/C, సిర్రోసిస్, మద్యం, NAFLD, అఫ్లాటాక్సిన్ ఎక్స్పోజర్, హెమోక్రోమాటోసిస్, ఆల్ఫా-1 యాంటీట్రిప్సిన్ లోపం",
        investigations: [
          "అధిక ప్రమాద రోగులలో అల్ట్రాసౌండ్ పర్యవేక్షణ",
          "మల్టీఫేస్ CT లేదా MRI",
          "AFP ట్యూమర్ మార్కర్",
          "ఇమేజింగ్ అస్పష్టంగా ఉంటే బయోప్సీ",
          "వేరిక్స్ అంచనా కోసం ఎండోస్కోపీ",
          "కాలేయ పనితీరు కోసం చైల్డ్-ప్యూగ్ స్కోర్"
        ],
        treatment: [
          "సరిపోయే కాలేయ పనితీరు ఉంటే శస్త్రచికిత్స రిసెక్షన్",
          "మిలాన్ ప్రమాణాలలో కాలేయ మార్పిడి",
          "స్థానిక అబ్లేషన్ (RFA, మైక్రోవేవ్)",
          "ట్రాన్సార్టరియల్ కెమోఎంబోలైజేషన్ (TACE)",
          "లక్ష్యిత చికిత్సలు (సోరాఫెనిబ్, లెన్వాటినిబ్)",
          "ఇమ్యునోథెరపీ కలయికలు"
        ]
    },pancreatic_cancer: {
    name: "అగ్న్యాశయ క్యాన్సర్ (Pancreatic Cancer)",
    riskFactors: "పొగ త్రాగడం, దీర్ఘకాలిక పాంక్రియాటైటిస్, మధుమేహం, ఊబకాయం, కుటుంబ చరిత్ర, BRCA మ్యూటేషన్లు, వారసత్వ సిండ్రోమ్స్ (Peutz-Jeghers)",
    investigations: [
        "CT పాంక్రియాస్ ప్రోటోకాల్",
        "బయాప్సీతో ఎండోస్కోపిక్ అల్ట్రాసౌండ్",
        "బైల్ నాళాల అంచనా కోసం MRCP",
        "CA19-9 ట్యూమర్ మార్కర్",
        "మెటాస్టాటిక్ వర్క్ అప్ కోసం PET-CT",
        "వారసత్వ కేసుల కోసం జన్యు పరీక్షలు"
    ],
    treatment: [
        "తల ట్యూమర్లకు విపుల్ ప్రొసీజర్ (Whipple procedure)",
        "శరీర/తోక భాగానికి డిస్టల్ పాంక్రియాటెక్టమీ",
        "బార్డర్‌లైన్ రిసెక్టబుల్ కోసం నియో-అడ్జువెంట్ థెరపీ",
        "జెమ్‌సిటాబిన్/నాబ్-పాక్లిటాక్సెల్ లేదా FOLFIRINOX",
        "పాలియేటివ్ బైల్ స్టెంటింగ్",
        "BRCA మ్యూటేషన్ ఉన్నవారికి PARP ఇన్హిబిటర్స్"
    ]
},
skin_cancer: {
    name: "చర్మ క్యాన్సర్ (Skin Cancer)",
    riskFactors: "సూర్యకాంతి (UV) ఎక్కువగా తగలడం, తెల్లని చర్మం, సన్‌బర్న్స్ చరిత్ర, రోగనిరోధక శక్తి తగ్గడం, కుటుంబ చరిత్ర, ఆర్సెనిక్ ప్రభావం, అనేక మచ్చలు (nevi)",
    investigations: [
        "పూర్తి చర్మ పరీక్ష",
        "డెర్మోస్కోపీ",
        "ఎక్సిజనల్ బయాప్సీ",
        "మెలనోమా కోసం సెంటినెల్ లింఫ్ నోడ్ బయాప్సీ",
        "అధునాతన మెలనోమా కోసం CT/MRI",
        "మెలనోమా కోసం BRAF మ్యూటేషన్ టెస్టింగ్"
    ],
    treatment: [
        "తగిన మార్జిన్‌తో శస్త్రచికిత్స ద్వారా తొలగింపు",
        "బేసల్ సెల్ కార్సినోమాకు మోహ్స్ సర్జరీ",
        "సూపర్‌ఫిషియల్ లెషన్స్ కోసం టాపికల్ థెరపీలు",
        "కొన్ని సందర్భాల్లో రేడియేషన్ థెరపీ",
        "అధునాతన మెలనోమాకు ఇమ్యునోథెరపీ",
        "BRAF మ్యూటేషన్ ఉన్న మెలనోమాకు టార్గెట్ థెరపీ"
    ]
},
lung_cancer: {
    name: "ఉపిరితిత్తుల క్యాన్సర్ (Lung Cancer)",
    riskFactors: "పొగ త్రాగడం, రాడాన్ ప్రభావం, అస్బెస్టాస్, గాలి కాలుష్యం, కుటుంబ చరిత్ర, గత రేడియేషన్ థెరపీ, కొన్ని రసాయనాలు (ఆర్సెనిక్, నికెల్)",
    investigations: [
        "కాంట్రాస్ట్‌తో CT ఛాతీ",
        "స్టేజింగ్ కోసం PET-CT",
        "బయాప్సీ (బ్రోన్కోస్కోపీ, CT-గైడెడ్, EBUS)",
        "మాలిక్యులర్ టెస్టింగ్ (EGFR, ALK, ROS1, PD-L1)",
        "లక్షణాలున్నప్పుడు బ్రెయిన్ MRI",
        "పల్మనరీ ఫంక్షన్ టెస్టులు"
    ],
    treatment: [
        "ప్రారంభ దశలో శస్త్రచికిత్స (లొబెక్టమీ)",
        "శస్త్రచికిత్స చేయలేని వారికి SBRT",
        "II-III దశకు అడ్జువెంట్ కీమోథెరపీ",
        "డ్రైవర్ మ్యూటేషన్ల కోసం టార్గెట్ థెరపీ",
        "PD-L1 పాజిటివ్ ట్యూమర్లకు ఇమ్యునోథెరపీ",
        "లక్షణాల ఉపశమనానికి పాలియేటివ్ రేడియేషన్"
    ]
},
laryngeal_cancer: {
    name: "గొంతు క్యాన్సర్ (Laryngeal Cancer)",
    riskFactors: "తమాకూ వినియోగం, మద్యం, HPV ఇన్ఫెక్షన్, GERD, వృత్తిపరమైన ప్రభావాలు (అస్బెస్టాస్, సల్ఫ్యూరిక్ ఆమ్లం), పౌష్టికాహార లోపం",
    investigations: [
        "లారింగోస్కోపీ మరియు బయాప్సీ",
        "కాంట్రాస్ట్‌తో CT/MRI మెడ",
        "అధునాతన కేసులకు PET-CT",
        "మాట/మింగడం అంచనా",
        "సెకండ్ ప్రైమరీలను చూడటానికి పానెండోస్కోపీ",
        "మెటాస్టాసిస్ కోసం ఛాతీ ఇమేజింగ్"
    ],
    treatment: [
        "ప్రారంభ దశ: రేడియేషన్ లేదా ఎండోస్కోపిక్ రిసెక్షన్",
        "అధునాతన దశ: లారింజెక్టమీ + నెక్ డిసెక్షన్",
        "ఆర్గాన్ ప్రిజర్వేషన్ ప్రోటోకాళ్లు (కీమో-రేడియేషన్)",
        "లారింజెక్టమీ తర్వాత వాయిస్ రీహాబిలిటేషన్",
        "టార్గెట్ థెరపీ (Cetuximab)",
        "మెటాస్టాటిక్ వ్యాధికి పాలియేటివ్ కేర్"
    ]
},
thyroid_cancer: {
    name: "థైరాయిడ్ క్యాన్సర్ (Thyroid Cancer)",
    riskFactors: "రేడియేషన్ ప్రభావం (ప్రత్యేకంగా చిన్న వయసులో), కుటుంబ చరిత్ర, కొన్ని జన్యు సిండ్రోమ్స్ (MEN2, FAP), మహిళా లింగం, అయోడిన్ లోపం",
    investigations: [
        "థైరాయిడ్ అల్ట్రాసౌండ్",
        "FNA బయాప్సీ",
        "థైరాయిడ్ ఫంక్షన్ టెస్టులు",
        "పెద్ద లేదా ఇన్వేసివ్ ట్యూమర్లకు CT/MRI",
        "థైరోగ్లోబులిన్ & యాంటీ-థైరోగ్లోబులిన్ యాంటీబాడీలు",
        "మెడల్లరీ థైరాయిడ్ క్యాన్సర్‌కు జన్యు పరీక్షలు"
    ],
    treatment: [
        "అధికంగా కేసులకు టోటల్ థైరాయిడెక్టమీ",
        "లింఫ్ నోడ్ ప్రభావితం అయితే డిసెక్షన్",
        "రేడియోఆక్టివ్ అయోడిన్ ఎబ్లేషన్",
        "TSH సప్రెషన్ థెరపీ",
        "అధునాతన వ్యాధికి టార్గెట్ థెరపీలు",
        "థైరోగ్లోబులిన్ రెగ్యులర్ మానిటరింగ్"
    ]
},
gastrointestinal_stromal: {
    name: "గాస్ట్రోఇంటెస్టినల్ స్ట్రోమల్ ట్యూమర్ (GIST)",
    riskFactors: "చాలా వరకు స్పోరాడిక్, అరుదైన ఫ్యామిలియల్ రూపాలు (Carney triad, NF1), స్పష్టమైన పర్యావరణ ప్రభావాలు లేవు, KIT/PDGFRA మ్యూటేషన్లు",
    investigations: [
        "కాంట్రాస్ట్‌తో CT అబ్డోమెన్/పెల్విస్",
        "బయాప్సీతో ఎండోస్కోపిక్ అల్ట్రాసౌండ్",
        "ఇమాటినిబ్ ప్రతిస్పందన అంచనాకు PET స్కాన్",
        "KIT/PDGFRA మ్యూటేషన్ టెస్టింగ్",
        "రెక్టల్ GISTలకు MRI",
        "ట్యూమర్ పరిమాణం మరియు మైటోటిక్ రేటు అంచనా"
    ],
    treatment: [
        "నెగటివ్ మార్జిన్‌తో శస్త్రచికిత్స రిసెక్షన్",
        "ఇంటర్మీడియేట్/హై రిస్క్ లేదా మెటాస్టాటిక్ కేసులకు ఇమాటినిబ్",
        "ఇమాటినిబ్ రెసిస్టెంట్‌కు సునిటినిబ్",
        "తృతీయ-లైన్ థెరపీగా రెగోరాఫెనిబ్",
        "ప్రతిస్పందించే మెటాస్టాటిక్ వ్యాధికి డిబల్కింగ్ శస్త్రచికిత్స",
        "పునరావృతం ప్రమాదం వల్ల జీవితకాల పర్యవేక్షణ"
    ]
},
buccal_mucosa_cancer: {
    name: "బుక్కల్ మ్యూకోసా క్యాన్సర్ (Buccal Mucosa Cancer)",
    riskFactors: "తమాకూ, పాన్/బీడెల్ గింజలు, మద్యం, చెడు మౌఖిక పరిశుభ్రత, దీర్ఘకాలిక రాపిడి",
    investigations: [
        "క్లినికల్ ఎగ్జామినేషన్",
        "బయాప్సీ",
        "ఇమేజింగ్: CECT ఫేస్/నెక్, అవసరమైతే MRI",
        "స్టేజింగ్ కోసం ఛాతీ ఎక్స్-రే, USG అబ్డొమెన్"
    ],
    treatment: [
        "శస్త్రచికిత్స: విస్తృత తొలగింపు, ఎముక ప్రభావితం అయితే మాండిబులెక్టమీ",
        "నెక్ డిసెక్షన్",
        "అధునాతన కేసులకు రేడియోథెరపీ +/- కీమోథెరపీ",
        "అవసరమైతే రీకన్స్ట్రక్షన్"
    ]
},
tongue_cancer: {
    name: "నోటి నాలుక క్యాన్సర్ (Tongue Cancer)",
    riskFactors: "తమాకూ, మద్యం, HPV, చెడు మౌఖిక పరిశుభ్రత, దీర్ఘకాలిక గాయం",
    investigations: [
        "క్లినికల్ ఎగ్జామినేషన్",
        "బయాప్సీ",
        "ఇమేజింగ్: CECT ఫేస్/నెక్, అవసరమైతే MRI",
        "స్టేజింగ్ కోసం ఛాతీ ఎక్స్-రే, USG అబ్డొమెన్"
    ],
    treatment: [
        "శస్త్రచికిత్స: పాక్షిక/పూర్తి గ్లోసెక్టమీ",
        "నెక్ డిసెక్షన్",
        "అధునాతన కేసులకు రేడియోథెరపీ +/- కీమోథెరపీ",
        "అవసరమైతే రీకన్స్ట్రక్షన్"
    ]
}

      }
            },
             
        },
        or: {
            translation: {
                home_intro: "ଡକ୍ଟର ବାମ୍ମିଦି ସନ୍ଦୀପ ରୋଗୀଙ୍କ ଚିନ୍ତାର ଗଭୀର ବୁଝାମଣା ସହିତ ବ୍ୟାପକ ଶଲ୍ୟଚିକିତ୍ସା ବିଶେଷଜ୍ଞତାକୁ ମିଶ୍ରଣ କରନ୍ତି। ଭାରତ ସାରା ପ୍ରସିଦ୍ଧ ଅଙ୍କୋଲୋଜିଷ୍ଟଙ୍କ ଅଧୀନରେ ତାଙ୍କର ତାଲିମ ଏବଂ ଜଟିଳ କର୍କଟ ଅସ୍ତ୍ରୋପଚାର କରିବାରେ ହାତପାଖିଆ ଅଭିଜ୍ଞତା ତାଙ୍କୁ ଉନ୍ନତ ଚିକିତ୍ସା ଚାହୁଁଥିବା ରୋଗୀଙ୍କ ପାଇଁ ଏକ ନିର୍ଭରଯୋଗ୍ୟ ପସନ୍ଦ କରିଥାଏ। ସେ କଚ୍ଛ ଭଳି ଅଞ୍ଚଳରେ ତୃତୀୟ ସ୍ତରୀୟ କର୍କଟ ଚିକିତ୍ସା ଆଣିବା ପାଇଁ ସମର୍ପିତ, ରୋଗୀମାନେ ଘର ପାଖରେ ଉଚ୍ଚମାନର ଚିକିତ୍ସା ପାଇପାରିବେ ତାହା ନିଶ୍ଚିତ କରିବା ପାଇଁ। ପରାମର୍ଶ ଏବଂ ବ୍ୟାପକ କର୍କଟ ଚିକିତ୍ସା ପାଇଁ, ଆପଣ ଆରୋଗ୍ୟ ପାଇଁ ଆପଣଙ୍କ ଯାତ୍ରାରେ ପରବର୍ତ୍ତୀ ପଦକ୍ଷେପ ନେବା ପାଇଁ ଡକ୍ଟର ବୋମ୍ମିଦି ସନ୍ଦୀପଙ୍କ ସହ ଯୋଗାଯୋଗ କରିପାରିବେ।",
                home_name:"ଡକ୍ଟର ବାମିଡି",
                home_second_name:"ସନ୍ଦିପ",
                home_hi:"ନମସ୍କାର, ମୁଁ",
                home_intro2:"ପରାମର୍ଶ ଏବଂ ବ୍ୟାପକ କର୍କଟ ଚିକିତ୍ସା ପାଇଁ, ଆପଣ ସୁସ୍ଥତା ଆଡ଼କୁ ଯାତ୍ରାରେ ପରବର୍ତ୍ତୀ ପଦକ୍ଷେପ ନେବା ପାଇଁ ଡାକ୍ତର ବାମ୍ମିଦି ସନ୍ଦୀପଙ୍କ ସହ ଯୋଗାଯୋଗ କରିପାରିବେ।",
                home_button:"ଅଧିକ ଜାଣନ୍ତୁ",
                sidebar_link_home:"ଘର",
                sidebar_link_About:"ବିଷୟରେ",
                sidebar_link_consultation:"ପରାମର୍ଶ",
                sidebar_link_testimonials:"ପ୍ରଶଂସାପତ୍ର",
                sidebar_link_successStories:"ସଫଳତା କାହାଣୀଗୁଡିକ",
                sidebar_link_knowAboutCancer:"କର୍କଟ ରୋଗ ବିଷୟରେ ଜାଣନ୍ତୁ",
                sidebar_link_certifications:"ପ୍ରମାଣପତ୍ରଗୁଡ଼ିକ",
                sidebar_link_contact:"ଯୋଗାଯୋଗ",
                about_doctor_full_name:"ଡକ୍ଟର ବାମିଦି ସନ୍ଦୀପ, ",
                about_para1:"ଜଣେ ଉତ୍ସର୍ଗୀକୃତ ସର୍ଜିକାଲ୍ ଅଙ୍କୋଲୋଜିଷ୍ଟ, ଆନ୍ଧ୍ରପ୍ରଦେଶର ବାସିନ୍ଦା, ଯେଉଁଠାରେ ତାଙ୍କର ଚିକିତ୍ସା ଯାତ୍ରା ଏକ ଦୃଢ଼ ଶିକ୍ଷାଗତ ଭିତ୍ତିଭୂମି ଏବଂ ରୋଗୀ ସେବା ପ୍ରତି ଏକ ଅଟଳ ଆଗ୍ରହ ସହିତ ଆରମ୍ଭ ହୋଇଥିଲା। ତାଙ୍କର ପ୍ରାରମ୍ଭିକ ବର୍ଷରୁ, ସେ ସ୍ୱାସ୍ଥ୍ୟସେବା ପ୍ରତି ଏକ ଗଭୀର ପ୍ରତିବଦ୍ଧତା ପ୍ରଦର୍ଶନ କରିଥିଲେ, ଯାହା ଶେଷରେ ଜଣେ ଉଚ୍ଚ ବିଶେଷଜ୍ଞ କର୍କଟ ସର୍ଜନ ହେବା ପାଇଁ ତାଙ୍କ ପଥକୁ ଆକାର ଦେଇଥିଲା।",
                about_para2:"ଡକ୍ଟର ସନ୍ଦୀପ ୨୦୧୩ ମସିହାରେ ଆନ୍ଧ୍ରପ୍ରଦେଶର ଡକ୍ଟର PSIMS & RF ରୁ MBBS ହାସଲ କରିଥିଲେ, ଯେଉଁଠାରେ ସେ ତାଙ୍କ ଡାକ୍ତରୀ କ୍ୟାରିୟରର ମୂଳଦୁଆ ସ୍ଥାପନ କରିଥିଲେ। ତାଙ୍କର ପ୍ରାରମ୍ଭିକ କ୍ଲିନିକାଲ୍ ଏକ୍ସପୋଜର୍ ଏବଂ ସାଧାରଣ ଔଷଧରେ ତାଲିମ ତାଙ୍କୁ ତାଙ୍କର କର୍ତ୍ତବ୍ୟ ଭାବରେ ଶଲ୍ୟଚିକିତ୍ସା କରିବାକୁ ପ୍ରେରଣା ଦେଇଥିଲା। ତାଙ୍କର ଶଲ୍ୟଚିକିତ୍ସା ବିଶେଷଜ୍ଞତାକୁ ବୃଦ୍ଧି କରିବା ପାଇଁ ସ୍ଥିର ହୋଇ, ସେ ଉନ୍ନତ ତାଲିମ ଗ୍ରହଣ କରିଥିଲେ ଯାହା ପରବର୍ତ୍ତୀ ସମୟରେ ଅଙ୍କୋଲୋଜିରେ ତାଙ୍କର ଯାତ୍ରାକୁ ଆକାର ଦେବ।",
                about_para3:"୨୦୧୯ ମସିହାରେ, ସେ ତେଲେଙ୍ଗାନାର ହାଇଦ୍ରାବାଦର ମଲ୍ଲା ରେଡ୍ଡୀ ଇନଷ୍ଟିଚ୍ୟୁଟ୍ ଅଫ୍ ମେଡିକାଲ୍ ସାଇନ୍ସେସ୍‌ରୁ ଜେନେରାଲ ସର୍ଜରୀରେ ତାଙ୍କର DNB ଡିଗ୍ରୀ ହାସଲ କରିଥିଲେ, ଯାହା ଏହାର ବ୍ୟାପକ କ୍ଲିନିକାଲ୍ ଅଭ୍ୟାସ ଏବଂ ଶଲ୍ୟ ଚିକିତ୍ସା ତାଲିମ ପାଇଁ ଏକ ସ୍ୱୀକୃତିପ୍ରାପ୍ତ ପ୍ରତିଷ୍ଠାନ। ଏହି ଅଭିଜ୍ଞତା ତାଙ୍କୁ ବିଭିନ୍ନ ପ୍ରକାରର ଜଟିଳ ଶଲ୍ୟ ଚିକିତ୍ସା ମାମଲା ପରିଚାଳନା କରିବାର କ୍ଷମତା ପ୍ରଦାନ କରିଥିଲା ଏବଂ ଅସ୍ତ୍ରୋପଚାରିକ ଯତ୍ନରେ ତାଙ୍କର ମୂଳଦୁଆକୁ ଦୃଢ଼ କରିଥିଲା।",
                about_para4:"ଅଙ୍କୋଲୋଜି ପ୍ରତି ବଢ଼ୁଥିବା ଆଗ୍ରହ ସହିତ, ଡକ୍ଟର ସନ୍ଦୀପ 2023 ମସିହାରେ ମୁମ୍ବାଇର ପ୍ରିନ୍ସ ଅଲି ଖାନ ହସ୍ପିଟାଲ ଏବଂ ନାସିକର HCG ମାନଭଟା କର୍କଟ କେନ୍ଦ୍ରରୁ ସର୍ଜିକାଲ୍ ଅଙ୍କୋଲୋଜିରେ ପ୍ରତିଷ୍ଠିତ ଡକ୍ଟରେଟ୍ ଅଫ୍ ନ୍ୟାସନାଲ୍ ବୋର୍ଡ (DrNB) ଡିଗ୍ରୀ ହାସଲ କରିଥିଲେ। ପ୍ରମୁଖ ଅଙ୍କୋଲୋଜିଷ୍ଟଙ୍କ ପରାମର୍ଶରେ, ସେ ଉନ୍ନତ କର୍କଟ ଅସ୍ତ୍ରୋପଚାରରେ ତାଙ୍କର ଦକ୍ଷତାକୁ ପରିଷ୍କାର କରିଥିଲେ ଏବଂ ବିଭିନ୍ନ ଉପ-ସ୍ପେଶିଆଲିଟିରେ କର୍କଟ ରୋଗର ଚିକିତ୍ସାରେ ଗଭୀର ବିଶେଷଜ୍ଞତା ହାସଲ କରିଥିଲେ।",
                about_para5:"ତାଙ୍କର ବିଶେଷଜ୍ଞତାକୁ ଆହୁରି ବୃଦ୍ଧି କରିବା ପାଇଁ, ଡକ୍ଟର ସନ୍ଦୀପ 2025 ମସିହାରେ ଆନ୍ତର୍ଜାତୀୟ ଖ୍ୟାତି ହାସଲ କରିଥିଲେ, ସିଙ୍ଗାପୁରର ନ୍ୟାସନାଲ କ୍ୟାନସର ସେଣ୍ଟରରେ HIPEC ଏବଂ PIPAC ସର୍ଜନ ଭାବରେ ପ୍ରମାଣପତ୍ର ହାସଲ କରିଥିଲେ, ଯେଉଁଠାରେ ସେ ଉନ୍ନତ ପେରିଟୋନିଆଲ୍ ସରଫେସ୍ ଅଙ୍କୋଲୋଜି ପ୍ରକ୍ରିୟାରେ ତାଲିମ ନେଇଥିଲେ। ସେହି ବର୍ଷ, ସେ SS ଇନୋଭେସନ୍ସରେ ଜଣେ ସାର୍ଟିଫାଏଡ୍ ରୋବୋଟିକ୍ ସର୍ଜନ ମଧ୍ୟ ହୋଇଥିଲେ, ମିନିମଲି ଇନଭେସିଭ୍ କର୍କଟ ସର୍ଜରୀ ପାଇଁ ଅତ୍ୟାଧୁନିକ ରୋବୋଟିକ୍ ପ୍ରଯୁକ୍ତିବିଦ୍ୟାରେ ଦକ୍ଷତା ହାସଲ କରିଥିଲେ।",
                about_para6:"ତାଙ୍କର ବ୍ୟାପକ ତାଲିମ ଏବଂ ବିଶ୍ୱସ୍ତରୀୟ ଅଭିଜ୍ଞତା ମାଧ୍ୟମରେ, ଡକ୍ଟର ସନ୍ଦୀପ କର୍କଟ ଚିକିତ୍ସା ପାଇଁ ଏକ ସାମଗ୍ରିକ ଏବଂ ରୋଗୀ-କୈନ୍ଦ୍ରିକ ପଦ୍ଧତି ବିକଶିତ କରିଛନ୍ତି। ତାଙ୍କର ଲକ୍ଷ୍ୟ ହେଉଛି ରୋଗୀମାନଙ୍କୁ ଉନ୍ନତ, ପ୍ରମାଣ-ଆଧାରିତ ଏବଂ କରୁଣାପୂର୍ଣ୍ଣ କର୍କଟ ଚିକିତ୍ସାର ସୁବିଧା ଯୋଗାଇବା, ଭାରତ ଏବଂ ବାହାରର ସମ୍ପ୍ରଦାୟଗୁଡ଼ିକ ପାଇଁ ବିଶ୍ୱସ୍ତରୀୟ ବିଶେଷଜ୍ଞତାକୁ ନିକଟତର କରିବା।",
                about:"ବିଷୟରେ",
                achievement1:"MBBS - ୨୦୧୩ - ଡକ୍ଟର PSIMS ଏବଂ RF, ଆନ୍ଧ୍ରପ୍ରଦେଶ",
                achievement2:"୨୦୧୯ - ଡିଏନବି ଜେନେରାଲ ସର୍ଜରୀ - ମାଲ୍ଲା ରେଡ୍ଡି ଇନଷ୍ଟିଚ୍ୟୁଟ୍ ଅଫ୍ ମେଡିକାଲ୍ ସାଇନ୍ସେସ୍, ହାଇଦ୍ରାବାଦ - ତେଲେଙ୍ଗାନା",
                achievement3:"୨୦୨୩ - ଡକ୍ଟରେଟ୍ ଅଫ୍ ନ୍ୟାସନାଲ୍ ବୋର୍ଡ (ଡକ୍ଟର୍ ଏନବି) ସର୍ଜିକାଲ୍ ଅଙ୍କୋଲୋଜି - ପ୍ରିନ୍ସ ଅଲ୍ଲୀ ଖାନ ହସ୍ପିଟାଲ୍, ମୁମ୍ବାଇ / ଏଚ୍ସିଜି ମାନଭତା କ୍ୟାନସର ସେଣ୍ଟର୍, ନାସିକ୍",
                achievement4:"୨୦୨୫ - ପ୍ରମାଣିତ HIPEC ଏବଂ PIPAC ସର୍ଜନ - ଜାତୀୟ କର୍କଟ କେନ୍ଦ୍ର, ସିଙ୍ଗାପୁର",
                achievement5:"୨୦୨୫ - ସାର୍ଟିଫାଏଡ୍ ରୋବୋଟିକ୍ ସର୍ଜନ - ଏସ୍ ଏସ୍ ଇନୋଭେସନ୍ସ",
                achievement:"ସଫଳତା",
                email:"ଇମେଲ୍",
                role:"ଭୂମିକା",
                contactNo:"ଯୋଗାଯୋଗ ନମ୍ବର",
                cancer_specialist:"ଶ୍ରୀକାକୁଳମ୍ରେ ପ୍ରଥମ କ୍ୟାନ୍ସର ସର୍ଜନ୍",
                address:"ଠିକଣା",
                addressVal:"ତ୍ରିନେତ୍ର ସୁପର୍ ସ୍ପେସିଆଲିଟି ହସ୍ପିଟାଲ୍, ଡେ ଏଣ୍ଡ ନାଇଟ୍ ଜଙ୍କସନ୍, ଶ୍ରୀକାକୁଳମ୍, ଆନ୍ଧ୍ର ପ୍ରଦେଶ",
                workingHrs:"କାର୍ଯ୍ୟ ସମୟ",
                sendMessage:"ବାର୍ତ୍ତା ପଠାନ୍ତୁ",
                design:"ଡିଜାଇନ୍ ଏବଂ ବିକାଶ କରିଛନ୍ତି",
                kolors:"",
                title: "ସଂଗଠନ",
                 titleAwards: "ସମ୍ମାନ ଏବଂ ପୁରସ୍କାର",
    list: [
      {
        title: "ଶ୍ରେଷ୍ଠ ପେପର ପୁରସ୍କାର",
        issuer: "IASO NATCON 2022",
        date: "ଅକ୍ଟୋବର 2022",
        details: "IASO ପକ୍ଷରୁ ପୋଡିୟମ୍ ପ୍ରସ୍ତୁତି, ନଗଦ ପୁରସ୍କାର ₹10000"
      },
      {
        title: "ଶ୍ରେଷ୍ଠ ପୋଷ୍ଟର ପୁରସ୍କାର",
        issuer: "ASI",
        date: "ଡିସେମ୍ବର 2017",
        details: "ଏସିକନ 2017"
      },
      {
        title: "ASI ଯୁବ ସର୍ଜନ ସାଉଥ୍ ଜୋନ୍ ଟୋରେଣ୍ଟ ଫାର୍ମା ପୁରସ୍କାର",
        issuer: "ASI",
        date: "ଏପ୍ରିଲ 2017",
        details: "ରନର୍ ଅପ୍ - କେସ୍ ପ୍ରେଜେଣ୍ଟେସନ୍ RIF MASS"
      },
      {
        title: "ଶ୍ରେଷ୍ଠ ପେପର ପୁରସ୍କାର",
        issuer: "ASICON 2016",
        date: "ଡିସେମ୍ବର 2016",
        details: "ଶ୍ରେଷ୍ଠ ପେପର ପୁରସ୍କାର"
      }
    ],
  associated: "ସହଭାଗୀ",
  orgs: [
    { name: "ଭାରତୀୟ ନାରୀରୋଗ ଅଙ୍କୋଲୋଜିସ୍ଟ୍ ସଂଘ", role: "ଆଜୀବନ ସଦସ୍ୟ", date: "ଅକ୍ଟୋବର 2024 - ବର୍ତ୍ତମାନ" },
    { name: "ଭାରତୀୟ ସ୍ତନ ସର୍ଜନ୍ ସଂଘ", role: "ଆଜୀବନ ସଦସ୍ୟ", date: "ଅକ୍ଟୋବର 2024 - ବର୍ତ୍ତମାନ" },
    { name: "ମୁଣ୍ଡ ଏବଂ ଗଳା ଅଙ୍କୋଲୋଜି ଫାଉଣ୍ଡେସନ୍", role: "ଆଜୀବନ ସଦସ୍ୟ", date: "ଅକ୍ଟୋବର 2024 - ବର୍ତ୍ତମାନ" },
    { name: "ଶଳ୍ୟ ଅଙ୍କୋଲୋଜି ସୋସାଇଟି - SSO", role: "ସଦସ୍ୟ", date: "ଡିସେମ୍ବର 2023 - ବର୍ତ୍ତମାନ", associated: "HCG ମାନବତା ଅଙ୍କୋଲୋଜି LLP" },
    { name: "ISPSM - ଭାରତୀୟ ପେରିଟୋନିଆଲ ସର୍ଫେସ୍ ମାଲିଗ୍ନାନସିଜ୍ ସଂଘ", role: "ଆଜୀବନ ସଦସ୍ୟ", date: "ମଇ 2023 - ବର୍ତ୍ତମାନ" },
    { name: "ଭାରତୀୟ ଶଳ୍ୟ ଅଙ୍କୋଲୋଜି ସଂଘ - IASO", role: "ଆଜୀବନ ସଦସ୍ୟ", date: "ମାର୍ଚ୍ଚ 2021 - ବର୍ତ୍ତମାନ" },
    { name: "ASI - ଭାରତୀୟ ସର୍ଜନ୍ ସଂଘ", role: "ଆଜୀବନ ସଦସ୍ୟ", date: "ଅକ୍ଟୋବର 2014 - ବର୍ତ୍ତମାନ" },
    { name: "IMA", role: "ଆଜୀବନ ସଦସ୍ୟ", date: "ଜୁଲାଇ 2014 - ବର୍ତ୍ତମାନ" }
  ],
                cancerInfo: {
    breast_cancer: {
        name: "ସ୍ତନ କର୍କଟ",
        riskFactors: "ବୟସ, ପାରିବାରିକ ଇତିହାସ, BRCA ମ୍ୟୁଟେସନ, ମୋଟାପଣ, ହରମୋନାଲ ଥେରାପି, ବିଳମ୍ବିତ ଗର୍ଭଧାରଣ, ବିକିରଣ ପ୍ରଦାନ",
        investigations: [
            "35 ବର୍ଷରୁ ଅଧିକ ମହିଳାଙ୍କ ପାଇଁ ମ୍ୟାମୋଗ୍ରାଫି",
            "35 ବର୍ଷରୁ କମ୍ ମହିଳାଙ୍କ ପାଇଁ ଅଲ୍ଟ୍ରାସାଉଣ୍ଡ",
            "କେଶ୍ ଭିତ୍ତିକ ମ୍ୟାଗନେଟିକ ରେଜୋନାନ୍ସ ଇମେଜିଙ୍ଗ (MRI)",
            "କୋର ବାୟୋପ୍ସି ଏବଂ ER, PR, HER2 ରିସେପ୍ଟର ସ୍ଥିତି ପାଇଁ IHC",
            "PET–CT/CECT TAP ଏବଂ ଅସ୍ଥି ସ୍କାନ ଦ୍ୱାରା ଷ୍ଟେଜିଙ୍ଗ",
            "ସ୍ଥାନୀୟ ଭାବରେ ଉନ୍ନତ କେଶ୍ ପାଇଁ ଷ୍ଟେଜିଙ୍ଗ ଆବଶ୍ୟକ"
        ],
        treatment: [
            "IHC ରିସେପ୍ଟର ସ୍ଥିତି ଅନୁଯାୟୀ ବ୍ୟକ୍ତିଗତ ଚିକିତ୍ସା",
            "ER/PR ପଜିଟିଭ୍ - ଆଡଜୁଭାଣ୍ଟ ଭାବରେ ହରମୋନାଲ ଥେରାପି",
            "HER2 ପଜିଟିଭ୍ - ଆଡଜୁଭାଣ୍ଟ ଏବଂ ମେଣ୍ଟେନାନ୍ସ ଭାବରେ ଆଣ୍ଟି-HER2 ଟାର୍ଗେଟେଡ୍ ଥେରାପି (ଟ୍ରାଷ୍ଟୁଜୁମାବ) + କେମୋଥେରାପି",
            "ଟ୍ରିପଲ୍ ନେଗେଟିଭ୍ - ନିଓଆଡଜୁଭାଣ୍ଟ କିମ୍ବା ଆଡଜୁଭାଣ୍ଟ (ପ୍ରାରମ୍ଭିକ) କେମୋଥେରାପି",
            "ପ୍ରାରମ୍ଭିକ ଷ୍ଟେଜ୍: ସର୍ଜେରି (ଲମ୍ପେକ୍ଟୋମି + ରେଡିଏସନ/ମାଷ୍ଟେକ୍ଟୋମି), ଆକ୍ସିଲାରି ଲିମ୍ଫ ନୋଡ୍ ଡିସେକସନ କିମ୍ବା ସେଣ୍ଟିନେଲ୍ ନୋଡ୍ ବାୟୋପ୍ସି",
            "ସ୍ଥାନୀୟ ଭାବରେ ଉନ୍ନତ ଷ୍ଟେଜ୍: ନିଓଆଡଜୁଭାଣ୍ଟ ଚିକିତ୍ସା ପରେ ସର୍ଜେରି + ରେଡିଏସନ"
        ]
    },
    oral_cavity_cancer: {
        name: "ମୁଖଗହ୍ୱର କର୍କଟ",
        riskFactors: "ତମାଖୁ ବ୍ୟବହାର, ମଦ୍ୟପାନ, HPV ସଂକ୍ରମଣ, ଖରାପ ମୁଖ ସ୍ୱାସ୍ଥ୍ୟଶୃଙ୍ଖଳା, ପାନ ଖିଆ, UV ଆଲୋକ ପ୍ରଦାନ (ଓଠ କର୍କଟ ପାଇଁ)",
        investigations: [
            "କ୍ଲିନିକାଲ୍ ପରୀକ୍ଷା ଏବଂ ବାୟୋପ୍ସି",
            "ସ୍ଥାନୀୟ ପ୍ରସାର ଏବଂ ନୋଡାଲ୍ ଜଡ଼ିତତା ପାଇଁ CT/MRI",
            "ଦ୍ୱିତୀୟ ପ୍ରାଥମିକ ଟ୍ୟୁମର୍ ବାଦ ଦେବା ପାଇଁ ପ୍ୟାନେଣ୍ଡୋସ୍କୋପି",
            "ମେଟାଷ୍ଟାସିସ୍ ଚିହ୍ନଟ କରିବା ପାଇଁ ଉନ୍ନତ କେଶ୍ ପାଇଁ PET-CT",
            "ଚିକିତ୍ସା ପୂର୍ବରୁ ଦନ୍ତ ମୂଲ୍ୟାଙ୍କନ"
        ],
        treatment: [
            "ପ୍ରାରମ୍ଭିକ ଷ୍ଟେଜ୍: ସର୍ଜେରି କିମ୍ବା ରେଡିଏସନ୍ ଥେରାପି",
            "ଉନ୍ନତ ଷ୍ଟେଜ୍: ସର୍ଜେରି, ରେଡିଏସନ୍, ଏବଂ କେମୋଥେରାପିର ମିଶ୍ରଣ",
            "ବିସ୍ତୃତ ରିସେକସନ୍ ପରେ ପୁନର୍ନିର୍ମାଣ",
            "ନୋଡାଲ୍ ଜଡ଼ିତତା ପାଇଁ ନେକ୍ ଡିସେକସନ୍",
            "ପୁନରାବୃତ୍ତି/ମେଟାଷ୍ଟାଟିକ୍ କେଶ୍ ପାଇଁ ଟାର୍ଗେଟେଡ୍ ଥେରାପି (ସେଟୁକ୍ସିମାବ)"
        ]
    },
    colon_cancer: {
        name: "କୋଲନ୍ କର୍କଟ",
        riskFactors: "ବୟସ, ପାରିବାରିକ ଇତିହାସ, ପଲିପ୍, ପ୍ରଦାହଜନିତ ଆନ୍ତ୍ର ରୋଗ, କମ୍ ଫାଇବର ଖାଦ୍ୟ, ମୋଟାପଣ, ଧୂମପାନ, ଲିଞ୍ଚ ସିଣ୍ଡ୍ରୋମ, FAP",
        investigations: [
            "ବାୟୋପ୍ସି ସହିତ କୋଲୋନୋସ୍କୋପି",
            "କୋଲୋନୋସ୍କୋପି ଅସମ୍ପୂର୍ଣ୍ଣ ହେଲେ CT କୋଲୋନୋଗ୍ରାଫି",
            "CEA ସ୍ତର (ଟ୍ୟୁମର୍ ମାର୍କର୍)",
            "ଷ୍ଟେଜିଙ୍ଗ ପାଇଁ CT ଛାତି/ଉଦର/ପେଲଭିସ୍",
            "ରେକ୍ଟାଲ୍ କର୍କଟ ମୂଲ୍ୟାଙ୍କନ ପାଇଁ MRI",
            "ବଂଶଗତ ସିଣ୍ଡ୍ରୋମ୍ ପାଇଁ ଜେନେଟିକ୍ ଟେଷ୍ଟିଙ୍ଗ୍"
        ],
        treatment: [
            "ଲିମ୍ଫ ନୋଡ୍ ଅପସାରଣ ସହିତ ସର୍ଜିକାଲ୍ ରିସେକସନ୍ (କୋଲେକ୍ଟୋମି)",
            "ଷ୍ଟେଜ୍ III ଏବଂ ଉଚ୍ଚ ରିସ୍କ ଷ୍ଟେଜ୍ II ପାଇଁ ଆଡଜୁଭାଣ୍ଟ କେମୋଥେରାପି",
            "ରେକ୍ଟାଲ୍ କର୍କଟ ପାଇଁ ରେଡିଏସନ୍ ଥେରାପି",
            "ମେଟାଷ୍ଟାଟିକ୍ ରୋଗ ପାଇଁ ଟାର୍ଗେଟେଡ୍ ଥେରାପି (ବେଭାସିଜୁମାବ, ସେଟୁକ୍ସିମାବ)",
            "MSI-H ଟ୍ୟୁମର୍ ପାଇଁ ଇମ୍ମ୍ୟୁନୋଥେରାପି",
            "ଚିକିତ୍ସା ପରେ ନିୟମିତ ନିରୀକ୍ଷଣ"
        ]
    },
    rectum_cancer: {
        name: "ମଳାଶୟ କର୍କଟ",
        riskFactors: "କୋଲନ୍ କର୍କଟ ସହ ସମାନ + ପେଲଭିକ୍ ରେଡିଏସନ୍ ପ୍ରଦାନ, ଉଚ୍ଚ ଚର୍ବି ଖାଦ୍ୟ, ନିଷ୍କ୍ରିୟ ଜୀବନଶୈଳୀ",
        investigations: [
            "ଡିଜିଟାଲ୍ ରେକ୍ଟାଲ୍ ପରୀକ୍ଷା",
            "ବାୟୋପ୍ସି ସହିତ କୋଲୋନୋସ୍କୋପି",
            "ସ୍ଥାନୀୟ ଷ୍ଟେଜିଙ୍ଗ ପାଇଁ ଏଣ୍ଡୋରେକ୍ଟାଲ୍ ଅଲ୍ଟ୍ରାସାଉଣ୍ଡ",
            "ବିସ୍ତୃତ ମୂଲ୍ୟାଙ୍କନ ପାଇଁ ପେଲଭିକ୍ MRI",
            "ଦୂରବର୍ତ୍ତୀ ମେଟାଷ୍ଟାସିସ୍ ପାଇଁ CT ଛାତି/ଉଦର/ପେଲଭିସ୍",
            "ଚୟନିତ କେଶ୍ ପାଇଁ PET-CT"
        ],
        treatment: [
            "ସ୍ଥାନୀୟ ଭାବରେ ଉନ୍ନତ କେଶ୍ ପାଇଁ ନିଓଆଡଜୁଭାଣ୍ଟ କେମୋରେଡିଏସନ୍",
            "ଟୋଟାଲ୍ ମେସୋରେକ୍ଟାଲ୍ ଏକ୍ସିସନ୍ ସର୍ଜେରି",
            "ଆଡଜୁଭାଣ୍ଟ କେମୋଥେରାପି",
            "ଅତି ପ୍ରାରମ୍ଭିକ ଟ୍ୟୁମର୍ ପାଇଁ ସ୍ଥାନୀୟ ଏକ୍ସିସନ୍",
            "ସମ୍ଭବ ହେଲେ ସ୍ଫିଙ୍କ୍ଟର-ସ୍ପେରିଙ୍ଗ୍ ଟେକ୍ନିକ୍",
            "ମେଟାଷ୍ଟାଟିକ୍ ରୋଗ ପାଇଁ ପ୍ୟାଲିଏଟିଭ୍ ଥେରାପି"
        ]
    },
    cervix_cancer: {
        name: "ଜରାୟୁ ଗ୍ରୀବା କର୍କଟ",
        riskFactors: "HPV ସଂକ୍ରମଣ, ଏକାଧିକ ଯୌନ ସାଥୀ, ପ୍ରାରମ୍ଭିକ ଯୌନ କ୍ରିୟା, ଧୂମପାନ, ଇମ୍ମ୍ୟୁନୋସପ୍ରେସନ୍, ଦୀର୍ଘସ୍ଥାୟୀ ମୁଖ୍ୟ ଗର୍ଭନିରୋଧକ ବ୍ୟବହାର",
        investigations: [
            "ପ୍ୟାପ୍ ସ୍ମିଅର ସ୍କ୍ରିନିଙ୍ଗ୍",
            "ବାୟୋପ୍ସି ସହିତ କୋଲ୍ପୋସ୍କୋପି",
            "HPV DNA ଟେଷ୍ଟିଙ୍ଗ୍",
            "ଅନାସ୍ଥେସିଆ ତଳେ ପେଲଭିକ୍ ପରୀକ୍ଷା",
            "ସ୍ଥାନୀୟ ଷ୍ଟେଜିଙ୍ଗ ପାଇଁ MRI",
            "ଉନ୍ନତ ରୋଗ ପାଇଁ CT/PET-CT"
        ],
        treatment: [
            "ପ୍ରାରମ୍ଭିକ ଷ୍ଟେଜ୍: କୋନ୍ ବାୟୋପ୍ସି କିମ୍ବା ହିଷ୍ଟେରେକ୍ଟୋମି",
            "ଲିମ୍ଫ ନୋଡ୍ ଡିସେକସନ୍ ସହିତ ରାଡିକାଲ୍ ହିଷ୍ଟେରେକ୍ଟୋମି",
            "ସ୍ଥାନୀୟ ଭାବରେ ଉନ୍ନତ ରୋଗ ପାଇଁ କେମୋରେଡିଏସନ୍",
            "ବ୍ରାକିଥେରାପି (ଆଭ୍ୟନ୍ତରୀଣ ରେଡିଏସନ୍)",
            "ମେଟାଷ୍ଟାଟିକ୍ ରୋଗ ପାଇଁ ପ୍ୟାଲିଏଟିଭ୍ କେମୋଥେରାପି",
            "ପ୍ରତିଷେଧ ପାଇଁ HPV ଟୀକା"
        ]
    },
    ovary_cancer: {
        name: "ଅଣ୍ଡାଶୟ କର୍କଟ",
        riskFactors: "ବୟସ, ପାରିବାରିକ ଇତିହାସ, BRCA ମ୍ୟୁଟେସନ୍, ନଷ୍ଟପ୍ରଜତା, ଏଣ୍ଡୋମେଟ୍ରିଓସିସ୍, ହରମୋନ୍ ପ୍ରତିସ୍ଥାପନ ଚିକିତ୍ସା, ମୋଟାପଣ",
        investigations: [
            "ପେଲଭିକ୍ ପରୀକ୍ଷା ଏବଂ ଟ୍ରାନ୍ସଭାଜାଇନାଲ୍ ଅଲ୍ଟ୍ରାସାଉଣ୍ଡ",
            "CA-125 ଟ୍ୟୁମର୍ ମାର୍କର୍",
            "CT ଉଦର/ପେଲଭିସ୍",
            "ଆସାଇଟେସ୍ ଥିଲେ ପାରାସେଣ୍ଟେସିସ୍",
            "BRCA ମ୍ୟୁଟେସନ୍ ପାଇଁ ଜେନେଟିକ୍ ଟେଷ୍ଟିଙ୍ଗ୍",
            "ରୋଗ ନିର୍ଣ୍ଣୟ ପାଇଁ ଏକ୍ସପ୍ଲୋରେଟୋରୀ ଲାପାରୋଟୋମି/ଲାପାରୋସ୍କୋପି"
        ],
        treatment: [
            "ସର୍ଜିକାଲ୍ ଡିବଲ୍କିଙ୍ଗ୍ (ଅପ୍ଟିମାଲ୍ ସାଇଟୋରିଡକ୍ସନ୍)",
            "ପ୍ଲାଟିନମ୍-ଆଧାରିତ କେମୋଥେରାପି",
            "BRCA-ମ୍ୟୁଟେଟେଡ୍ କର୍କଟ ପାଇଁ PARP ଇନହିବିଟର୍",
            "ଆଣ୍ଟି-ଆଞ୍ଜିଓଜେନିକ୍ ଥେରାପି (ବେଭାସିଜୁମାବ)",
            "ଚୟନିତ କେଶ୍ ପାଇଁ ସେକେଣ୍ଡାରୀ ସାଇଟୋରିଡକ୍ସନ୍",
            "ଉଚ୍ଚ ରିସ୍କ ରୋଗୀଙ୍କ ପାଇଁ ପ୍ରଫାଇଲାକ୍ଟିକ୍ ସର୍ଜେରି"
        ]
    },
    endometrium_cancer: {
        name: "ଜରାୟୁ କର୍କଟ",
        riskFactors: "ମୋଟାପଣ, ଅନିର୍ବାଚିତ ଇଷ୍ଟ୍ରୋଜେନ୍ ପ୍ରଦାନ, ଟାମୋକ୍ସିଫେନ୍ ବ୍ୟବହାର, ନଷ୍ଟପ୍ରଜତା, ବିଳମ୍ବିତ ଋତୁବନ୍ଦ, ଲିଞ୍ଚ ସିଣ୍ଡ୍ରୋମ୍",
        investigations: [
            "ଏଣ୍ଡୋମେଟ୍ରିଆଲ୍ ବାୟୋପ୍ସି",
            "ଡାଇଲେସନ୍ ଏବଂ କ୍ୟୁରେଟେଜ୍ (D&C)",
            "ଟ୍ରାନ୍ସଭାଜାଇନାଲ୍ ଅଲ୍ଟ୍ରାସାଉଣ୍ଡ",
            "ସ୍ଥାନୀୟ ଷ୍ଟେଜିଙ୍ଗ ପାଇଁ MRI",
            "ଉନ୍ନତ ରୋଗ ପାଇଁ CT",
            "ବଂଶଗତ ସିଣ୍ଡ୍ରୋମ୍ ପାଇଁ ଜେନେଟିକ୍ ଟେଷ୍ଟିଙ୍ଗ୍"
        ],
        treatment: [
            "ବାଇଲାଟେରାଲ୍ ସାଲ୍ପିଙ୍ଗୋ-ଓଫୋରେକ୍ଟୋମି ସହିତ ଟୋଟାଲ୍ ହିଷ୍ଟେରେକ୍ଟୋମି",
            "ଲିମ୍ଫ ନୋଡ୍ ଡିସେକସନ୍",
            "ଉଚ୍ଚ ରିସ୍କ କେଶ୍ ପାଇଁ ରେଡିଏସନ୍ ଥେରାପି",
            "ପ୍ରାରମ୍ଭିକ ଷ୍ଟେଜ୍ କିମ୍ବା ପୁନରାବୃତ୍ତି ରୋଗ ପାଇଁ ହରମୋନାଲ୍ ଥେରାପି",
            "ଉନ୍ନତ/ମେଟାଷ୍ଟାଟିକ୍ ରୋଗ ପାଇଁ କେମୋଥେରାପି",
            "MSI-H ଟ୍ୟୁମର୍ ପାଇଁ ଇମ୍ମ୍ୟୁନୋଥେରାପି"
        ]
    },
    esophagus_cancer: {
        name: "ଅନ୍ତନଳୀ କର୍କଟ",
        riskFactors: "ଧୂମପାନ, ମଦ୍ୟପାନ, GERD, ବ୍ୟାରେଟ୍'ସ୍ ଇସୋଫାଗସ୍, ମୋଟାପଣ, ଆକାଲାସିଆ, ଗରମ ପାନୀୟ ସେବନ, କମ୍ ଫଳ/ଶାକସବ୍ଜି ଖାଦ୍ୟ",
        investigations: [
            "ବାୟୋପ୍ସି ସହିତ ଅପର ଏଣ୍ଡୋସ୍କୋପି",
            "ଷ୍ଟେଜିଙ୍ଗ ପାଇଁ ଏଣ୍ଡୋସ୍କୋପିକ୍ ଅଲ୍ଟ୍ରାସାଉଣ୍ଡ",
            "CT ଛାତି/ଉଦର/ପେଲଭିସ୍",
            "ମେଟାଷ୍ଟାଟିକ୍ ମୂଲ୍ୟାଙ୍କନ ପାଇଁ PET-CT",
            "ପ୍ରୋକ୍ସିମାଲ୍ ଟ୍ୟୁମର୍ ପାଇଁ ବ୍ରୋଙ୍କୋସ୍କୋପି",
            "ଚୟନିତ କେଶ୍ ପାଇଁ ଲାପାରୋସ୍କୋପି"
        ],
        treatment: [
            "ପ୍ରାରମ୍ଭିକ ଷ୍ଟେଜ୍: ଏଣ୍ଡୋସ୍କୋପିକ୍ ରିସେକସନ୍",
            "ରିସେକ୍ଟେବଲ୍ ଟ୍ୟୁମର୍ ପାଇଁ ସର୍ଜେରି (ଇସୋଫାଜେକ୍ଟୋମି)",
            "ନିଓଆଡଜୁଭାଣ୍ଟ କେମୋରେଡିଏସନ୍",
            "ଅରିସେକ୍ଟେବଲ୍ କେଶ୍ ପାଇଁ ନିର୍ଣ୍ଣୟାତ୍ମକ କେମୋରେଡିଏସନ୍",
            "ପ୍ୟାଲିଏଟିଭ୍ ଷ୍ଟେଣ୍ଟିଙ୍ଗ୍ କିମ୍ବା ରେଡିଏସନ୍",
            "ଉନ୍ନତ ରୋଗ ପାଇଁ ଇମ୍ମ୍ୟୁନୋଥେରାପି"
        ]
    },
    stomach_cancer: {
        name: "ପାକସ୍ଥଳୀ କର୍କଟ",
        riskFactors: "H. pylori ସଂକ୍ରମଣ, ଧୂଆଁ/ଲୁଣିଆ ଖାଦ୍ୟ, ଧୂମପାନ, ପର୍ନିସିଅସ୍ ଆନିମିଆ, ପାରିବାରିକ ଇତିହାସ, ପୂର୍ବ ପାକସ୍ଥଳୀ ସର୍ଜେରି",
        investigations: [
            "ବାୟୋପ୍ସି ସହିତ ଅପର ଏଣ୍ଡୋସ୍କୋପି",
            "ଏଣ୍ଡୋସ୍କୋପିକ୍ ଅଲ୍ଟ୍ରାସାଉଣ୍ଡ",
            "CT ଛାତି/ଉଦର/ପେଲଭିସ୍",
            "ପେରିଟୋନିଆଲ୍ ମୂଲ୍ୟାଙ୍କନ ପାଇଁ ଲାପାରୋସ୍କୋପି",
            "ଉନ୍ନତ ରୋଗ ପାଇଁ HER2 ଟେଷ୍ଟିଙ୍ଗ୍",
            "ଟ୍ୟୁମର୍ ମାର୍କର୍ (CEA, CA19-9)"
        ],
        treatment: [
            "ଲିମ୍ଫ ନୋଡ୍ ଡିସେକସନ୍ ସହିତ ସର୍ଜିକାଲ୍ ରିସେକସନ୍ (ଗାଷ୍ଟ୍ରେକ୍ଟୋମି)",
            "ଆଡଜୁଭାଣ୍ଟ କେମୋରେଡିଏସନ୍ କିମ୍ବା କେମୋଥେରାପି",
            "ପେରିଅପରେଟିଭ୍ କେମୋଥେରାପି",
            "HER2+ ପାଇଁ ଟାର୍ଗେଟେଡ୍ ଥେରାପି (ଟ୍ରାଷ୍ଟୁଜୁମାବ)",
            "ପ୍ୟାଲିଏଟିଭ୍ କେମୋଥେରାପି",
            "PD-L1 ପଜିଟିଭ୍ ଟ୍ୟୁମର୍ ପାଇଁ ଇମ୍ମ୍ୟୁନୋଥେରାପି"
        ]
    },
    sarcoma: {
        name: "ସାର୍କୋମା",
        riskFactors: "ପୂର୍ବ ରେଡିଏସନ୍ ପ୍ରଦାନ, ନିର୍ଦ୍ଦିଷ୍ଟ ଜେନେଟିକ୍ ସିଣ୍ଡ୍ରୋମ୍ (ଲି-ଫ୍ରାଉମେନି, NF1), ରାସାୟନିକ ପ୍ରଦାନ (ଭିନାଇଲ୍ କ୍ଲୋରାଇଡ୍, ଡାଇଅକ୍ସିନ୍), ଦୀର୍ଘସ୍ଥାୟୀ ଲିମ୍ଫେଡିମା",
        investigations: [
            "ସ୍ଥାନୀୟ ପ୍ରସାର ପାଇଁ MRI (ନରମ ଟିସୁ ସାର୍କୋମା)",
            "ଅସ୍ଥି ସାର୍କୋମା ପାଇଁ CT",
            "ମୋଲିକ୍ୟୁଲାର୍ ଟେଷ୍ଟିଙ୍ଗ୍ ସହିତ ବାୟୋପ୍ସି",
            "ଷ୍ଟେଜିଙ୍ଗ ପାଇଁ PET-CT",
            "ଛାତି CT (ସାଧାରଣ ମେଟାଷ୍ଟାଟିକ୍ ସାଇଟ୍)",
            "ବଂଶଗତ ସିଣ୍ଡ୍ରୋମ୍ ପାଇଁ ଜେନେଟିକ୍ କାଉନସିଲିଙ୍ଗ୍"
        ],
        treatment: [
            "ନେଗେଟିଭ୍ ମାର୍ଜିନ୍ ସହିତ ଉଇଡ୍ ଲୋକାଲ୍ ଏକ୍ସିସନ୍",
            "ସମ୍ଭବ ହେଲେ ଲିମ୍ବ-ସ୍ପେରିଙ୍ଗ୍ ସର୍ଜେରି",
            "ସ୍ଥାନୀୟ ନିୟନ୍ତ୍ରଣ ପାଇଁ ରେଡିଏସନ୍ ଥେରାପି",
            "ଉଚ୍ଚ-ଗ୍ରେଡ୍ ଟ୍ୟୁମର୍ ପାଇଁ ନିଓଆଡଜୁଭାଣ୍ଟ/ଆଡଜୁଭାଣ୍ଟ କେମୋଥେରାପି",
            "ନିର୍ଦ୍ଦିଷ୍ଟ ଉପପ୍ରକାର ପାଇଁ ଟାର୍ଗେଟେଡ୍ ଥେରାପି",
            "ଚୟନିତ କେଶ୍ ପାଇଁ ଆମ୍ପୁଟେସନ୍"
        ]
    },
    urinary_bladder_cancer: {
        name: "ମୂତ୍ରାଶୟ କର୍କଟ",
        riskFactors: "ଧୂମପାନ, ବୃତ୍ତିଗତ ରାସାୟନିକ ପ୍ରଦାନ (ରଙ୍ଗ, ରବର, ରଙ୍ଗ), ଦୀର୍ଘସ୍ଥାୟୀ ମୂତ୍ରାଶୟ ପ୍ରଦାହ, ସାଇକ୍ଲୋଫସଫାମାଇଡ୍ ବ୍ୟବହାର, ଆର୍ସେନିକ୍ ପ୍ରଦାନ",
        investigations: [
            "ବାୟୋପ୍ସି ସହିତ ସିଷ୍ଟୋସ୍କୋପି",
            "ମୂତ୍ର ସାଇଟୋଲୋଜି",
            "CT ଇଉରୋଗ୍ରାମ୍",
            "ମାଂସପେଶୀ-ଆକ୍ରାନ୍ତ ରୋଗ ପାଇଁ MRI",
            "ଷ୍ଟେଜିଙ୍ଗ ପାଇଁ ଟ୍ରାନ୍ସଇଉରେଥ୍ରାଲ୍ ରିସେକସନ୍",
            "ଉନ୍ନତ ରୋଗ ପାଇଁ PD-L1 ଟେଷ୍ଟିଙ୍ଗ୍"
        ],
        treatment: [
            "ଅଣ-ମାଂସପେଶୀ-ଆକ୍ରାନ୍ତ: TURBT + ଇଣ୍ଟ୍ରାଭେସିକାଲ୍ BCG/କେମୋଥେରାପି",
            "ମାଂସପେଶୀ-ଆକ୍ରାନ୍ତ: ମୂତ୍ର ବିକଳ୍ପ ସହିତ ରାଡିକାଲ୍ ସିଷ୍ଟେକ୍ଟୋମି",
            "ନିଓଆଡଜୁଭାଣ୍ଟ କେମୋଥେରାପି",
            "ମୂତ୍ରାଶୟ ସଂରକ୍ଷଣ ପ୍ରୋଟୋକଲ୍ (କେମୋ-ରେଡିଏସନ୍)",
            "ଉନ୍ନତ ରୋଗ ପାଇଁ ଇମ୍ମ୍ୟୁନୋଥେରାପି",
            "ନିରୀକ୍ଷଣ ସିଷ୍ଟୋସ୍କୋପି"
        ]
    },
    kidney_cancer: {
  name: "କିଡନି କ୍ୟାନ୍ସର",
  riskFactors: "ଧୂମପାନ, ମୋଟାପଣ, ରକ୍ତଚାପ, ଅଧିଗତ ସିଷ୍ଟିକ୍ କିଡନି ରୋଗ, ଭନ୍‌ ହିପ୍‌ପେଲ-ଲିଣ୍ଡାଉ ସିଣ୍ଡ୍ରୋମ୍, ଦୀର୍ଘକାଳୀନ ଡାଏଲିସିସ୍",
  investigations: [
    "କନ୍ଟ୍ରାଷ୍ଟ ସହିତ CT ଅବ୍ଡୋମେନ୍",
    "ଜଟିଳ କେସ୍‌ ପାଇଁ MRI",
    "ସ୍ଟେଜିଙ୍ଗ ପାଇଁ ଛାତି ଇମେଜିଂ",
    "ଛୋଟ/ଅସ୍ପଷ୍ଟ ଟ୍ୟୁମର ପାଇଁ ବାୟୋପ୍ସି",
    "ଲକ୍ଷଣମୂଳକ କେସ୍‌ରେ ବୋନ୍ ସ୍କାନ୍",
    "ବାନ୍ଶଗତ କେସ୍‌ରେ ଜିନେଟିକ୍ ଟେଷ୍ଟିଂ"
  ],
  treatment: [
    "ପାର୍ଶିଆଲ୍ କିମ୍ବା ରାଡିକାଲ୍ ନେଫ୍ରେକ୍ଟୋମି",
    "ଛୋଟ ଟ୍ୟୁମର ପାଇଁ ଆକ୍ଟିଭ୍ ସରଭିଲାନ୍ସ",
    "ଚୟନିତ କେସ୍‌ରେ ଅବ୍ଲେସନ୍ ପ୍ରଣାଳୀ",
    "ଟାର୍ଗେଟେଡ୍ ଥେରାପି (ସୁନିଟିନିବ୍, ପାଜୋପାନିବ୍)",
    "ଇମ୍ୟୁନୋଥେରାପି କମ୍ବିନେସନ୍",
    "ମେଟାସ୍ଟେଟିକ୍ ରୋଗ ପାଇଁ ସାଇଟୋରିଡକ୍ଟିଭ୍ ନେଫ୍ରେକ୍ଟୋମି"
  ]
},

testicular_cancer: {
  name: "ବୀର୍ୟକୋଷ କ୍ୟାନ୍ସର",
  riskFactors: "କ୍ରିପ୍ଟର୍କିଡିଜମ୍, ପରିବାରିକ ଇତିହାସ, କ୍ଲାଇନଫେଲ୍ଟର ସିଣ୍ଡ୍ରୋମ୍, କକେସିଆନ୍ ଜାତି, ପୂର୍ବତନ ବୀର୍ୟକୋଷ କ୍ୟାନ୍ସର",
  investigations: [
    "ସ୍କ୍ରୋଟାଲ୍ ଅଲ୍ଟ୍ରାସାଉଣ୍ଡ",
    "ଟ୍ୟୁମର ମାର୍କର୍ (AFP, HCG, LDH)",
    "CT ଅବ୍ଡୋମେନ୍/ପେଲଭିସ୍",
    "ଛାତି ଇମେଜିଂ",
    "ଲକ୍ଷଣମୂଳକ କେସ୍‌ରେ ମଗଜ MRI",
    "ଅର୍କିଏକ୍ଟୋମି ପରେ ମାର୍କର୍"
  ],
  treatment: [
    "ରାଡିକାଲ୍ ଇଙ୍ଗୁଇନାଲ୍ ଅର୍କିଏକ୍ଟୋମି",
    "ଆରମ୍ଭିକ ସ୍ଥରରେ ସରଭିଲାନ୍ସ",
    "ଅଡ୍ଜୁଭାଣ୍ଟ କିମୋଥେରାପି କିମ୍ବା ବିକିରଣ",
    "ଶେଷ ଟ୍ୟୁମର ପାଇଁ RPLND",
    "ଷ୍ଟେମ୍ ସେଲ୍ ସହିତ ଉଚ୍ଚ ଡୋଜ୍ କିମୋ",
    "ଅଧୁନାତନ ସ୍ଥରରେ ମଧ୍ୟ ଉତ୍କୃଷ୍ଟ ସୁସ୍ଥତା ହାର"
  ]
},

gallbladder_cancer: {
  name: "ପିତ୍ତଶୟ କ୍ୟାନ୍ସର",
  riskFactors: "ଗଲ୍‌ଷ୍ଟୋନ୍, ଦୀର୍ଘକାଳୀନ ସୋଜା, ପୋର୍ସଲେନ୍ ଗଲ୍‌ବ୍ଲାଡର୍, ମହିଳା ଲିଙ୍ଗ, ମୋଟାପଣ, ପ୍ରାଇମେରି ସ୍କ୍ଲେରୋସିଙ୍ଗ୍ କୋଲାଙ୍ଜାଇଟିସ୍",
  investigations: [
    "ପ୍ରଥମ ଇମେଜିଂ ଭାବେ ଅଲ୍ଟ୍ରାସାଉଣ୍ଡ",
    "ସ୍ଟେଜିଂ ପାଇଁ CT/MRI",
    "ବିଲିଅରୀ ଟ୍ରି ପାଇଁ MRCP",
    "ବାୟୋପ୍ସି ସହିତ ଏଣ୍ଡୋସ୍କୋପିକ୍ ଅଲ୍ଟ୍ରାସାଉଣ୍ଡ",
    "ରିସେକ୍ଟାବିଲିଟି ପାଇଁ ଲାପାରୋସ୍କୋପି",
    "CA19-9 ଟ୍ୟୁମର ମାର୍କର୍"
  ],
  treatment: [
    "ଲିଭର୍ ରିସେକ୍ସନ୍ ସହିତ ରାଡିକାଲ୍ କୋଲେସିସ୍ଟେକ୍ଟୋମି",
    "ଲିମ୍ଫ୍ ନୋଡ୍ ଡିସେକ୍ସନ୍",
    "ଅଡ୍ଜୁଭାଣ୍ଟ କିମୋଥେରାପି/କାପେସିଟାବିନ୍",
    "ପାଲିଆଟିଭ୍ ବିଲିଅରୀ ଷ୍ଟେଣ୍ଟିଂ",
    "ଅଧୁନାତନ ସ୍ଥରରେ ଜେମସିଟାବିନ୍-ଆଧାରିତ କିମୋ",
    "ଆରମ୍ଭିକ ଚର୍ଚ୍ଚାରେ ଆକ୍ରାମକ ସର୍ଜେରି"
  ]
},

liver_cancer: {
  name: "ଲିଭର୍ କ୍ୟାନ୍ସର",
  riskFactors: "ଦୀର୍ଘକାଳୀନ ହେପାଟାଇଟିସ୍ B/C, ସିରୋସିସ୍, ଆଲକୋହଲ୍, NAFLD, ଆଫ୍ଲାଟକ୍ସିନ୍ ସଂସ୍ପର୍ଶ, ହେମୋକ୍ରୋମାଟୋସିସ୍, ଆଲ୍ଫା-1 ଆଣ୍ଟିଟ୍ରିପ୍ସିନ୍ ଡିଫିସିଏନ୍ସି",
  investigations: [
    "ଉଚ୍ଚ-ଝୁମ୍କି ରୋଗୀଙ୍କରେ ଅଲ୍ଟ୍ରାସାଉଣ୍ଡ ସରଭିଲାନ୍ସ",
    "ମଲ୍ଟିଫେଜ୍ CT କିମ୍ବା MRI",
    "AFP ଟ୍ୟୁମର ମାର୍କର୍",
    "ଇମେଜିଂ ଅସ୍ପଷ୍ଟ ହେଲେ ବାୟୋପ୍ସି",
    "ଭାରିସିଜ୍ ପାଇଁ ଏଣ୍ଡୋସ୍କୋପି",
    "ଲିଭର୍ ଫଙ୍କସନ୍ ପାଇଁ ଚାଇଲ୍ଡ-ପ୍ୟୁ ସ୍କୋର୍"
  ],
  treatment: [
    "ଲିଭର୍ ସମ୍ପୂର୍ଣ୍ଣ କାର୍ଯ୍ୟକ୍ଷମ ହେଲେ ସର୍ଜିକାଲ୍ ରିସେକ୍ସନ୍",
    "ମିଲାନ୍ କ୍ରାଇଟେରିଆ ମଧ୍ୟରେ ଥାଇଲେ ଲିଭର୍ ଟ୍ରାନ୍ସପ୍ଲାଣ୍ଟ",
    "ସ୍ଥାନୀୟ ଅବ୍ଲେସନ୍ (RFA, ମାଇକ୍ରୋୱେଭ୍)",
    "ଟ୍ରାନ୍ସଆର୍ଟେରିଆଲ୍ କିମୋଇମ୍ବୋଲିଜେସନ୍ (TACE)",
    "ଟାର୍ଗେଟେଡ୍ ଥେରାପି (ସୋରାଫେନିବ୍, ଲେନଭାଟିନିବ୍)",
    "ଇମ୍ୟୁନୋଥେରାପି କମ୍ବିନେସନ୍"
  ]
},

pancreatic_cancer: {
  name: "ଅଗ୍ନାଶୟ କ୍ୟାନ୍ସର",
  riskFactors: "ଧୂମପାନ, ଦୀର୍ଘକାଳୀନ ପ୍ୟାନ୍କ୍ରିଆଟାଇଟିସ୍, ଡାଏବେଟିସ୍, ମୋଟାପଣ, ପରିବାରିକ ଇତିହାସ, BRCA ମିଉଟେସନ୍, ବାନ୍ଶଗତ ସିଣ୍ଡ୍ରୋମ୍ (Peutz-Jeghers)",
  investigations: [
    "CT ପ୍ୟାନ୍କ୍ରିଆସ୍ ପ୍ରୋଟୋକଲ୍",
    "ବାୟୋପ୍ସି ସହିତ ଏଣ୍ଡୋସ୍କୋପିକ୍ ଅଲ୍ଟ୍ରାସାଉଣ୍ଡ",
    "ବିଲିଅରୀ ପାଇଁ MRCP",
    "CA19-9 ଟ୍ୟୁମର ମାର୍କର୍",
    "ମେଟାସ୍ଟେସିସ୍ ପାଇଁ PET-CT",
    "ବାନ୍ଶଗତ କେସ୍‌ରେ ଜିନେଟିକ୍ ଟେଷ୍ଟିଂ"
  ],
  treatment: [
    "ହେଡ୍ ଟ୍ୟୁମର ପାଇଁ ହ୍ୱିପଲ୍ ପ୍ରୋସିଜର୍",
    "ବଡି/ଟେଲ୍ ପାଇଁ ଡିଷ୍ଟାଲ୍ ପ୍ୟାନ୍କ୍ରିଏକ୍ଟୋମି",
    "ବର୍ଡରଲାଇନ୍ କେସ୍‌ରେ ନିଓ-ଅଡ୍ଜୁଭାଣ୍ଟ ଥେରାପି",
    "ଜେମସିଟାବିନ୍/ନାବ୍-ପାକ୍ଲିଟାକ୍ସେଲ୍ କିମ୍ବା FOLFIRINOX",
    "ପାଲିଆଟିଭ୍ ବିଲିଅରୀ ଷ୍ଟେଣ୍ଟିଂ",
    "BRCA ମିଉଟେସନ୍ ପାଇଁ PARP ଇନହିବିଟର୍"
  ]
},

skin_cancer: {
  name: "ତ୍ୱଚା କ୍ୟାନ୍ସର",
  riskFactors: "UV ବିକିରଣ, ହାଲୁକା ଚର୍ମ, ସନବର୍ଣ୍ଣ ଇତିହାସ, ଇମ୍ୟୁନୋସପ୍ରେସନ୍, ପରିବାରିକ ଇତିହାସ, ଆର୍ସେନିକ୍ ସଂସ୍ପର୍ଶ, ଅଧିକ ସଂଖ୍ୟାରେ ନେଭାଇ",
  investigations: [
    "ସମଗ୍ର ତ୍ୱଚା ପରୀକ୍ଷା",
    "ଡର୍ମୋସ୍କୋପି",
    "ଏକ୍ସସିସିଅନାଲ୍ ବାୟୋପ୍ସି",
    "ମେଲାନୋମା ପାଇଁ ସେଣ୍ଟିନେଲ୍ ଲିମ୍ଫ୍ ନୋଡ୍ ବାୟୋପ୍ସି",
    "ଅଧୁନାତନ ମେଲାନୋମା ପାଇଁ CT/MRI",
    "ମେଲାନୋମା ପାଇଁ BRAF ମିଉଟେସନ୍ ଟେଷ୍ଟିଂ"
  ],
  treatment: [
    "ମାର୍ଜିନ୍ ସହିତ ସର୍ଜିକାଲ୍ ଏକ୍ସସିସନ୍",
    "ବାସାଲ୍ ସେଲ୍ କାର୍ସିନୋମା ପାଇଁ Mohs ସର୍ଜେରି",
    "ସୁପର୍ଫିସିଆଲ୍ କେସ୍‌ରେ ଟୋପିକାଲ୍ ଥେରାପି",
    "ଚୟନିତ କେସ୍‌ରେ ବିକିରଣ ଚିକିତ୍ସା",
    "ଅଧୁନାତନ ମେଲାନୋମା ପାଇଁ ଇମ୍ୟୁନୋଥେରାପି",
    "BRAF-ମିଉଟେଟେଡ୍ ମେଲାନୋମା ପାଇଁ ଟାର୍ଗେଟେଡ୍ ଥେରାପି"
  ]
},

lung_cancer: {
  name: "ଫୁସଫୁସ କ୍ୟାନ୍ସର",
  riskFactors: "ଧୂମପାନ, ରାଡନ୍ ସଂସ୍ପର୍ଶ, ଆସବେଷ୍ଟସ୍, ବାୟୁ ପ୍ରଦୂଷଣ, ପରିବାରିକ ଇତିହାସ, ପୂର୍ବତନ ବିକିରଣ, କିଛି ରାସାୟନିକ ପଦାର୍ଥ (ଆର୍ସେନିକ୍, ନିକେଲ୍)",
  investigations: [
    "କନ୍ଟ୍ରାଷ୍ଟ ସହିତ CT ଛାତି",
    "ସ୍ଟେଜିଙ୍ଗ ପାଇଁ PET-CT",
    "ବାୟୋପ୍ସି (ବ୍ରୋଙ୍କୋସ୍କୋପି, CT-ଗାଇଡେଡ୍, EBUS)",
    "ମୋଲେକ୍ୟୁଲାର ଟେଷ୍ଟିଂ (EGFR, ALK, ROS1, PD-L1)",
    "ଲକ୍ଷଣମୂଳକ କେସ୍‌ରେ MRI ମଗଜ",
    "ପୁଲ୍ମୋନାରୀ ଫଙ୍କସନ୍ ଟେଷ୍ଟ"
  ],
  treatment: [
    "ଆରମ୍ଭିକ ସ୍ଥରରେ ସର୍ଜିକାଲ୍ ରିସେକ୍ସନ୍ (ଲୋବେକ୍ଟୋମି)",
    "ଚିକିତ୍ସାତ୍ମକ ଅସମ୍ଭବ କେସ୍‌ରେ SBRT",
    "ଷ୍ଟେଜ୍ II-III ପାଇଁ ଅଡ୍ଜୁଭାଣ୍ଟ କିମୋ",
    "ଡ୍ରାଇଭର୍ ମିଉଟେସନ୍ ପାଇଁ ଟାର୍ଗେଟେଡ୍ ଥେରାପି",
    "PD-L1 ପଜିଟିଭ୍ କେସ୍‌ରେ ଇମ୍ୟୁନୋଥେରାପି",
    "ଲକ୍ଷଣ ପାଇଁ ପାଲିଆଟିଭ୍ ବିକିରଣ"
  ]
},
laryngeal_cancer: {
    name: "କଣ୍ଠ କ୍ୟାନ୍ସର",
    riskFactors: "ତମାକୁ ବ୍ୟବହାର, ମଦ୍ୟପାନ, HPV ସଂକ୍ରମଣ, GERD, ବୃତ୍ତିଗତ ସମ୍ପର୍କ (asbestos, sulfuric acid), ଖରାପ ପୋଷଣ",
    investigations: [
        "ଲାରିଙ୍ଗୋସ୍କୋପି ସହିତ ବାୟୋପ୍ସି",
        "CT/MRI ଗଲା (କନ୍ଟ୍ରାସ୍ଟ ସହିତ)",
        "ଉନ୍ନତ ଅବସ୍ଥା ପାଇଁ PET-CT",
        "କଥା/ଗିଳିବା ପରୀକ୍ଷା",
        "ଦ୍ୱିତୀୟ ପ୍ରାଥମିକଗୁଡିକୁ ବାଦ ଦେବା ପାଇଁ ପାନେଣ୍ଡୋସ୍କୋପି",
        "ଛାତିର ଇମେଜିଂ (ମେଟାଷ୍ଟାସିସ ପାଇଁ)"
    ],
    treatment: [
        "ପ୍ରାରମ୍ଭିକ ଅବସ୍ଥା: ବିକିରଣ କିମ୍ବା ଏଣ୍ଡୋସ୍କୋପିକ୍ ରିସେକ୍ସନ",
        "ଅଗ୍ରଗାମୀ: ଲାରିଙ୍ଗେକ୍ଟୋମି ସହିତ ଗଳାର ସର୍ଜରି",
        "ଅଙ୍ଗ ସଂରକ୍ଷଣ ପ୍ରୋଟୋକଲ (କୀମୋ-ରେଡିଏସନ)",
        "ଲାରିଙ୍ଗେକ୍ଟୋମି ପରେ କଣ୍ଠ ପୁନର୍ବାସନ",
        "ଲକ୍ଷ୍ୟଭିତ୍ତିକ ଚିକିତ୍ସା (Cetuximab)",
        "ମେଟାଷ୍ଟାଟିକ୍ ରୋଗ ପାଇଁ ପାଲିଆଟିଭ୍ ଚିକିତ୍ସା"
    ]
},

thyroid_cancer: {
    name: "ଥାଇରଏଡ୍ କ୍ୟାନ୍ସର",
    riskFactors: "ବିକିରଣ ସଂସ୍ପର୍ଶ (ବିଶେଷକରି ଶିଶୁବେଳାରେ), ପରିବାରିକ ଇତିହାସ, କିଛି ଜନ୍ମଜାତ ସିଣ୍ଡ୍ରୋମ (MEN2, FAP), ମହିଳା ଲିଙ୍ଗ, ଆଇଡିନ ଅଭାବ",
    investigations: [
        "ଥାଇରଏଡ୍ ଅଲ୍ଟ୍ରାସାଉଣ୍ଡ",
        "FNA ବାୟୋପ୍ସି",
        "ଥାଇରଏଡ୍ ଫଙ୍କସନ୍ ପରୀକ୍ଷା",
        "ବଡ଼ କିମ୍ବା ଆକ୍ରାମକ ଟ୍ୟୁମର ପାଇଁ CT/MRI",
        "ଥାଇରୋଗ୍ଲୋବୁଲିନ୍ ଏବଂ ଆଣ୍ଟି-ଥାଇରୋଗ୍ଲୋବୁଲିନ୍ ଆଣ୍ଟିବଡି",
        "ମେଡୁଲାରି ଥାଇରଏଡ୍ କ୍ୟାନ୍ସର ପାଇଁ ଜନେଟିକ୍ ପରୀକ୍ଷା"
    ],
    treatment: [
        "ଅଧିକାଂଶ ମାମଲା ପାଇଁ ସମ୍ପୂର୍ଣ୍ଣ ଥାଇରୋଇଡେକ୍ଟୋମି",
        "ଲିମ୍ଫ ନୋଡ୍ ସଂଲଗ୍ନ ହେଲେ ସର୍ଜରି",
        "ରେଡିଓଆକ୍ଟିଭ୍ ଆଇଡିନ୍ ଚିକିତ୍ସା",
        "TSH ସପ୍ରେସନ୍ ଥେରାପି",
        "ଅଗ୍ରଗାମୀ ରୋଗ ପାଇଁ ଲକ୍ଷ୍ୟଭିତ୍ତିକ ଚିକିତ୍ସା",
        "ନିୟମିତ ଥାଇରୋଗ୍ଲୋବୁଲିନ୍ ମନିଟରିଂ"
    ]
},

gastrointestinal_stromal: {
    name: "ଗାଷ୍ଟ୍ରୋଇଣ୍ଟେଷ୍ଟିନାଲ୍ ଷ୍ଟ୍ରୋମାଲ୍",
    riskFactors: "ଅଧିକାଂଶ ସ୍ପୋରାଡିକ୍, କିଛି ପରିବାରିକ (Carney triad, NF1), ସ୍ପଷ୍ଟ ପରିବେଶୀୟ କାରକ ନାହିଁ, KIT/PDGFRA ମିଉଟେସନ୍",
    investigations: [
        "CT ଆବଡୋମେନ୍/ପେଲଭିସ୍ (କନ୍ଟ୍ରାସ୍ଟ ସହିତ)",
        "ବାୟୋପ୍ସି ସହିତ ଏଣ୍ଡୋସ୍କୋପିକ୍ ଅଲ୍ଟ୍ରାସାଉଣ୍ଡ",
        "ଇମାଟିନିବ୍ ପ୍ରତିକ୍ରିୟା ମାପିବାକୁ PET ସ୍କାନ୍",
        "KIT/PDGFRA ମିଉଟେସନ୍ ପରୀକ୍ଷା",
        "ରେକ୍ଟାଲ୍ GIST ପାଇଁ MRI",
        "ଟ୍ୟୁମର ଆକାର ଏବଂ ମିଟୋଟିକ୍ ରେଟ୍ ଆକଲନ"
    ],
    treatment: [
        "ନେଗେଟିଭ୍ ମାର୍ଜିନ୍ ସହିତ ସର୍ଜିକାଲ୍ ରିସେକ୍ସନ୍",
        "ମଧ୍ୟମ/ଉଚ୍ଚ ଝୁମ୍କି କିମ୍ବା ମେଟାଷ୍ଟାଟିକ୍ ପାଇଁ ଇମାଟିନିବ୍",
        "ଇମାଟିନିବ୍-ପ୍ରତିରୋଧୀ GIST ପାଇଁ ସୁନିଟିନିବ୍",
        "ତୃତୀୟ-ସରିରେ ଥେରାପି ଭାବେ ରେଗୋରାଫେନିବ୍",
        "ସତ୍ୟିକାର ମେଟାଷ୍ଟାଟିକ୍ ରୋଗ ପାଇଁ ସର୍ଜରି",
        "ପୁନରାବୃତ୍ତି ଝୁମ୍କି ଦେଖି ଆଜୀବନ ନିରୀକ୍ଷଣ"
    ]
},

buccal_mucosa_cancer: {
    name: "ଗାଳ ମ୍ୟୁକୋସା କ୍ୟାନ୍ସର",
    riskFactors: "ତମାକୁ, ସୁପାରି, ମଦ୍ୟ, ଖରାପ ମୁଖ ସ୍ୱାସ୍ଥ୍ୟ, ଦୀର୍ଘକାଳୀନ ଜ୍ୱାଳା",
    investigations: [
        "କ୍ଲିନିକାଲ୍ ପରୀକ୍ଷା",
        "ବାୟୋପ୍ସି",
        "ଇମେଜିଂ: CECT ମୁହଁ/ଗଲା, ଆବଶ୍ୟକ ହେଲେ MRI",
        "ସ୍ଟେଜିଙ୍ଗ ପାଇଁ ଛାତି X-ray, USG ଆବଡୋମେନ୍"
    ],
    treatment: [
        "ସର୍ଜରି: ବିଶାଳ କାଟିବା, ହାଡ଼ ସଂଲଗ୍ନ ହେଲେ ମାଣ୍ଡିବୁଲେକ୍ଟୋମି",
        "ଗଳାର ସର୍ଜରି",
        "ଅଗ୍ରଗାମୀ କେସରେ ବିକିରଣ +/- କୀମୋଥେରାପି",
        "ଆବଶ୍ୟକତାନୁସାରେ ପୁନର୍ନିର୍ମାଣ"
    ]
},

tongue_cancer: {
    name: "ଜିହ୍ବା କ୍ୟାନ୍ସର",
    riskFactors: "ତମାକୁ, ମଦ୍ୟ, HPV, ଖରାପ ମୁଖ ସ୍ୱାସ୍ଥ୍ୟ, ଦୀର୍ଘକାଳୀନ ଚୋଟ",
    investigations: [
        "କ୍ଲିନିକାଲ୍ ପରୀକ୍ଷା",
        "ବାୟୋପ୍ସି",
        "ଇମେଜିଂ: CECT ମୁହଁ/ଗଲା, ଆବଶ୍ୟକ ହେଲେ MRI",
        "ସ୍ଟେଜିଙ୍ଗ ପାଇଁ ଛାତି X-ray, USG ଆବଡୋମେନ୍"
    ],
    treatment: [
        "ସର୍ଜରି: ଅଂଶିକ/ସମ୍ପୂର୍ଣ୍ଣ ଜିହ୍ବା କାଟିବା",
        "ଗଳାର ସର୍ଜରି",
        "ଅଗ୍ରଗାମୀ କେସରେ ବିକିରଣ +/- କୀମୋଥେରାପି",
        "ଆବଶ୍ୟକତାନୁସାରେ ପୁନର୍ନିର୍ମାଣ"
    ]
}

}
            }
        }
    }
});