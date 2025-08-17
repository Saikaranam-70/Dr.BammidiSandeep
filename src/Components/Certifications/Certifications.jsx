import React, { useState } from "react";
import "./Certification.css";
import certificate1 from '../../assets/certificate1.jpg'
import certificate2 from '../../assets/certificate2.jpg'
import certificate3 from '../../assets/certificate3.jpg'
import certificate4 from '../../assets/certificate4.jpg'

const certificates = [
  {
    id: 1,
    title: " Certificate Of Training",
    issuer: "SSinnovations",
    date: "2025",
    image: certificate1,
  },
  {
    id: 2,
    title: "The Third Indian Cancer Congress",
    issuer: "IASO Award- Best Oral Paper Presentation",
    date: "2023",
    image: certificate2,
  },
  {
    id: 3,
    title: "Certificate of Participation",
    issuer: "Singapoor Genaral Hospital",
    date: "2025",
    image: certificate3,
  },
  {
    id: 4,
    title: "Pressurized IntraPeritoneal Aerosol Chemotherapy(PIPAC)",
    issuer: "Singapoor Genaral Hospital",
    date: "2025",
    image: certificate4,
  }
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="certificates-section">
      <h2 className="certificates-title">🏅 Doctor’s Certificates</h2>
      <div className="certificates-grid">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="certificate-card"
            onClick={() => setSelectedCert(cert)}
          >
            <div className="certificate-inner">
              {/* Front Side */}
              <div className="certificate-front">
                <img src={cert.image} alt={cert.title} />
              </div>

              {/* Back Side */}
              <div className="certificate-back">
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
                <span>{cert.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedCert && (
        <div className="modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setSelectedCert(null)}>
              ✖
            </span>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="modal-img"
            />
            <h3>{selectedCert.title}</h3>
            <p>{selectedCert.issuer}</p>
            <span>{selectedCert.date}</span>
          </div>
        </div>
      )}
    </section>
  );
}
