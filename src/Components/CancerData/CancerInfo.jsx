import React, { useEffect, useRef, useState } from "react";
import { FaHeartbeat, FaDna } from "react-icons/fa";
import { GiBrain, GiRibbon } from "react-icons/gi";
import { useTranslation } from "react-i18next";
import "./SampleCancerinfo.css";

import breastIcon from '../../assets/cancer_icons/6.png';
import oracl_cavityIcon from '../../assets/cancer_icons/7.png';
import colonIconIcon from '../../assets/cancer_icons/8.png';
import rectalIcon from '../../assets/cancer_icons/9.png';
import cervixIcon from '../../assets/cancer_icons/10.png';
import ovaryIcon from '../../assets/cancer_icons/11.png';
import endometriumIcon from '../../assets/cancer_icons/12.png';
import esophagusIcon from '../../assets/cancer_icons/13.png';
import stomachIcon from '../../assets/cancer_icons/14.png';
import sarcomaIcon from '../../assets/cancer_icons/15.png';
import urinary_bladderIcon from '../../assets/cancer_icons/16.png';
import kidneyIcon from '../../assets/cancer_icons/17.png';
import testicularIcon from '../../assets/cancer_icons/18.png';
import gallbladderIcon from '../../assets/cancer_icons/19.png';
import liverIcon from '../../assets/cancer_icons/20.png';
import pancreaticIcon from '../../assets/cancer_icons/21.png';
import skinIcon from '../../assets/cancer_icons/22.png';
import lungIcon from '../../assets/cancer_icons/23.png';
import laryngealIcon from '../../assets/cancer_icons/24.png';
import thyroidIcon from '../../assets/cancer_icons/25.png';
import gastrointestinal_stromalIcon from '../../assets/cancer_icons/26.png';
import buccal_mucosaIcon from '../../assets/cancer_icons/27.png';
import tongueIcon from '../../assets/cancer_icons/28.png';

export default function CancerInfo() {
  const { t, i18n } = useTranslation();
  const [selectedKey, setSelectedKey] = useState(null);
  const [cancerInfo, setCancerInfo] = useState({});
  const detailsRef = useRef(null);

  const iconMap = {
    breast: <img src={breastIcon} alt="Breast Cancer" className="cancer-png" />,
    oral_cavity: <img src={oracl_cavityIcon} alt="Oral Cancer" className="cancer-png" />,
    colon: <img src={colonIconIcon} alt="Colon Cancer" className="cancer-png" />,
    rectal: <img src={rectalIcon} alt="Rectal Cancer" className="cancer-png" />,
    cervix: <img src={cervixIcon} alt="Cervix Cancer" className="cancer-png" />,
    ovary: <img src={ovaryIcon} alt="Ovary Cancer" className="cancer-png" />,
    endometrium: <img src={endometriumIcon} alt="Endometrium Cancer" className="cancer-png" />,
    esophagus: <img src={esophagusIcon} alt="Esophagus Cancer" className="cancer-png" />,
    stomach: <img src={stomachIcon} alt="Stomach Cancer" className="cancer-png" />,
    sarcoma: <img src={sarcomaIcon} alt="Sarcoma" className="cancer-png" />,
    urinary_bladder: <img src={urinary_bladderIcon} alt="Bladder Cancer" className="cancer-png" />,
    kidney: <img src={kidneyIcon} alt="Kidney Cancer" className="cancer-png" />,
    testicular: <img src={testicularIcon} alt="Testicular Cancer" className="cancer-png" />,
    gallbladder: <img src={gallbladderIcon} alt="Gallbladder Cancer" className="cancer-png" />,
    liver: <img src={liverIcon} alt="Liver Cancer" className="cancer-png" />,
    pancreatic: <img src={pancreaticIcon} alt="Pancreatic Cancer" className="cancer-png" />,
    skin: <img src={skinIcon} alt="Skin Cancer" className="cancer-png" />,
    lung: <img src={lungIcon} alt="Lung Cancer" className="cancer-png" />,
    laryngeal: <img src={laryngealIcon} alt="Laryngeal Cancer" className="cancer-png" />,
    thyroid: <img src={thyroidIcon} alt="Thyroid Cancer" className="cancer-png" />,
    gastrointestinal_stromal: <img src={gastrointestinal_stromalIcon} alt="GIST" className="cancer-png" />,
    buccal_mucosa: <img src={buccal_mucosaIcon} alt="Buccal Mucosa Cancer" className="cancer-png" />,
    tongue: <img src={tongueIcon} alt="Tongue Cancer" className="cancer-png" />,
    brain: <GiBrain color="#34495e" size={28} />,
    heart: <FaHeartbeat color="#c0392b" size={28} />,
    dna: <FaDna color="#2980b9" size={28} />,
  };

  const colorMap = {
    breast: "#FF69B4",
    oral_cavity: "#FFCCFF",
    colon: "#00008B",
    rectal: "#FF6347",
    cervix: "#00FFFF",
    ovary: "#008080",
    endometrium: "#DA70D6",
    esophagus: "#CCCCFF",
    stomach: "#E6F9F3",
    sarcoma: "#D3D3D3",
    urinary_bladder: "#FFCC00",
    kidney: "#FFA500",
    testicular: "#800080",
    gallbladder: "#FFFACD",
    liver: "#50C878",
    pancreatic: "#800080",
    skin: "#000000",
    lung: "#FFFFFF",
    laryngeal: "#FFB6C1",
    thyroid: "#00CED1",
    gastrointestinal_stromal: "#E6E6FA",
    buccal_mucosa: "#FFCCFF",
    tongue: "#FFCCFF",
    brain: "#808080",
    heart: "#FF4500",
    dna: "#E0FFFF",
  };

  const normalizeKey = (key) => key.replace("_cancer", "");

  const getContrastColor = (hexColor) => {
    const hex = hexColor.replace("#", "");
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
    return luminance > 186 ? "#222" : "#fff";
  };

  useEffect(() => {
    try {
      const info = t("cancerInfo", { returnObjects: true });
      if (info && typeof info === "object" && !Array.isArray(info)) {
        setCancerInfo(info);
        if (!selectedKey && Object.keys(info).length > 0) {
          setSelectedKey(Object.keys(info)[0]);
        }
      }
    } catch (error) {
      console.error("Error loading cancerInfo:", error);
    }
  }, [t, i18n.language]);

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
  const bgColor = colorMap[normalizeKey(selectedKey)] || "#fff";
  const textColor = getContrastColor(bgColor);

  return (
    <div className="cancer-container">
      {/* Sidebar */}
      <div className="cancer-sidebar">
        {Object.keys(cancerInfo).map((key) => {
          const icon = iconMap[normalizeKey(key)] || <GiRibbon size={28} />;
          const activeColor = colorMap[normalizeKey(key)] || "#1e88e5";
          return (
            <button
              key={key}
              className={`cancer-tab ${selectedKey === key ? "active" : ""}`}
              onClick={() => handleSelect(key)}
              style={{
                backgroundColor: selectedKey === key ? activeColor : "#fff",
                color: selectedKey === key ? getContrastColor(activeColor) : "#333",
              }}
            >
              <span className="cancer-icon">{icon}</span>
              {cancerInfo[key].name}
            </button>
          );
        })}
      </div>

      {/* Details section */}
      <div
        className="cancer-details"
        ref={detailsRef}
        style={{ backgroundColor: bgColor }}
      >
        <div
          className="cancer-details-content"
          style={{ color: textColor }}
        >
          <div className="cancer-header">
            {iconMap[normalizeKey(selectedKey)] || <GiRibbon size={28} />}
            <h2>{selectedCancer.name}</h2>
          </div>

          {selectedCancer.riskFactors && (
            <p style={{ color: textColor }}>
              <span className="section-title">{t("risk_factors")}: </span>
              {selectedCancer.riskFactors}
            </p>
          )}

          {selectedCancer.investigations?.length > 0 && (
            <div>
              <p className="section-title" style={{ color: textColor }}>
                {t("investigations")}:
              </p>
              <ul>
                {selectedCancer.investigations.map((item, i) => (
                  <li key={i} style={{ color: textColor }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {selectedCancer.treatment?.length > 0 && (
            <div>
              <p className="section-title" style={{ color: textColor }}>
                {t("treatment")}:
              </p>
              <ul>
                {selectedCancer.treatment.map((item, i) => (
                  <li key={i} style={{ color: textColor }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
