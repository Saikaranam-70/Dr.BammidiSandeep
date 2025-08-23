import React, { useState } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import "./Testimonials.css";
import paper1 from '../../assets/paper3.jpg'
import paper2 from '../../assets/paper4.jpg'
const testimonials = [
  {
    name: "Ravi Kumar",
    relation: "Patient",
    rating: 5,
    message:
      "Dr. Bamadi Sandeep is more than just a surgeon – he is a true healer. His kindness, patience, and exceptional skills made my cancer journey far less frightening. I am forever grateful for his care.",
  },
  {
    name: "Paavani",
    relation: "Patient’s Daughter",
    rating: 5,
    message:
      "When my mother was diagnosed, we were terrified. Dr. Sandeep explained everything clearly, reassured us, and performed the surgery flawlessly. His compassion and dedication are unmatched.",
  },
  {
    name: "Sai karanam",
    relation: "Patient",
    rating: 5,
    message:
      "From the first consultation to my recovery, Dr. Sandeep treated me like family. His expertise saved my life, and his positivity gave me hope every single day.",
  },
  {
    name: "Ajay",
    relation: "Cancer Survivor",
    rating: 4,
    message:
      "Dr. Sandeep’s professionalism and warm nature helped me fight through the toughest days. His follow-up care was exceptional and deeply appreciated.",
  },
  {
    name: "Ramprasad",
    relation: "Patient",
    rating: 5,
    message:
      "A highly skilled surgeon with a heart of gold. Dr. Sandeep ensured I felt safe, cared for, and informed every step of the way.",
  },
  {
    name: "Prasanthi",
    relation: "Patient’s Sister",
    rating: 4,
    message:
      "We were impressed not only by his surgical skills but also by the emotional support he provided to our family during a very difficult time.",
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          className={`star ${index < rating ? "filled" : ""}`}
        />
      ))}
    </div>
  );
};

const Testimonials = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="testimonials-section">
      <h2>What Patients Say</h2>
      <div className="testimonials-container">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <FaQuoteLeft className="quote-icon" />
            <p className="testimonial-message">"{t.message}"</p>
            <StarRating rating={t.rating} />
            <h4 className="testimonial-name">- {t.name}</h4>
            <span className="testimonial-relation">{t.relation}</span>
          </div>
        ))}
      </div>

      {/* === IMAGES SECTION === */}
      <div className="testimonial-images">
        <img
          src={paper1}
          alt="Testimonial 1"
          onClick={() => handleImageClick(paper1)}
        />
        <img
          src={paper2}
          alt="Testimonial 2"
          onClick={() => handleImageClick(paper2)}
        />
      </div>

      {/* === MODAL POPUP === */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <img src={selectedImage} alt="Full View" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
