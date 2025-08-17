import React from "react";
import { useTranslation } from "react-i18next";
import "./Organisations.css";

const Organisations = () => {
  const { t } = useTranslation();
  const orgs = t("orgs", { returnObjects: true });

  return (
    <div className="organisations-section">
      {/* Title */}
      <h2 className="organisations-title">{t("title")}</h2>

      {/* Organisations List */}
      <div className="organisations-grid">
        {orgs.map((org, index) => (
          <div key={index} className="organisation-card">
            <h3>{org.name}</h3>
            <p>
              {t("role")}: <span>{org.role}</span>
            </p>
            <p>{org.date}</p>
            {org.associated && (
              <p className="associated">
                {t("associated")}: {org.associated}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Organisations;
