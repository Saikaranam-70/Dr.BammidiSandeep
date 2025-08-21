import React from "react";
import { useTranslation } from "react-i18next";
import "./SampleAwards.css";

const Awards = () => {
  const { t } = useTranslation();

  // Awards list comes from i18n
  const awards = t("list", { returnObjects: true });

  return (
    <div className="awards-container">
      <h2 className="awards-title">{t("titleAwards")}</h2>

      <div className="awards-list">
        {awards.map((award, index) => (
          <div className="award-card" key={index}>
            <h3 className="award-title">{award.title}</h3>
            <p className="award-issuer">
              <strong>{t("issuer")}:</strong> {award.issuer}
            </p>
            {/* <p className="award-date">
              <strong>{t("date")}:</strong> {award.date}
            </p> */}
            <p className="award-details">{award.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
