import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.webp';
import './Gallery.css';

const galleryImages = [
  { id: 1, src: img1, alt: 'Heidelberg Machine Repair', description: 'Expert technician repairing a Heidelberg Speedmaster printing press.' },
  { id: 2, src: img2, alt: 'Preventive Maintenance', description: 'Routine maintenance on printing machines to prevent breakdowns.' },
  { id: 3, src: img3, alt: 'Performance Optimization', description: 'Fine-tuning settings for optimal print quality and efficiency.' },
  { id: 4, src: img4, alt: 'Emergency Repair Service', description: '24/7 emergency repairs to minimize downtime.' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openImage = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeImage = () => setSelectedImage(null);

  const navigate = (direction) => {
    const lastIndex = galleryImages.length - 1;
    const newIndex = direction === 'prev'
      ? (currentIndex === 0 ? lastIndex : currentIndex - 1)
      : (currentIndex === lastIndex ? 0 : currentIndex + 1);
    setSelectedImage(galleryImages[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">
        <h2 className="gallery-title">Our Work Gallery</h2>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="gallery-card"
              onClick={() => openImage(image, index)}
            >
              <img src={image.src} alt={image.alt} className="gallery-img" />
              <div className="gallery-info">
                <h3 className="gallery-heading">{image.alt}</h3>
                <p className="gallery-description">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="gallery-modal">
            <button className="gallery-close" onClick={closeImage} aria-label="Close">
              <FaTimes />
            </button>
            <button className="gallery-nav left" onClick={() => navigate('prev')} aria-label="Previous">
              <FaChevronLeft />
            </button>
            <div className="gallery-modal-content">
              <img src={selectedImage.src} alt={selectedImage.alt} className="modal-img" />
              <h3 className="modal-title">{selectedImage.alt}</h3>
              <p className="modal-description">{selectedImage.description}</p>
            </div>
            <button className="gallery-nav right" onClick={() => navigate('next')} aria-label="Next">
              <FaChevronRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
