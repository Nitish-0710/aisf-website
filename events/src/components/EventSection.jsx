import React from "react";

function EventSection({
  id,
  number,
  title,
  date,
  description,
  images,
  theme,
  reverse = false,
}) {


  return (
    <section
      id={id}
      className={`event-section ${theme} ${reverse ? "event-section-reverse" : ""
        }`}
    >
      <div className="event-section-inner">
        <div className="event-section-content">
          <span className="event-index">{number}</span>

          <div className="event-date">{date}</div>

          <h2>{title}</h2>

          <p>{description}</p>

          <a href="../code-apex-2/index.html" className="event-button">
            VIEW EVENT
            <span>↗</span>
          </a>
        </div>

        <div className="event-gallery">
          <div className="gallery-frame">
            <div className="gallery-track">
              {images.map((image, index) => (
                <img
                  key={`first-${index}`}
                  src={image}
                  alt={`${title} event`}
                  className="gallery-image"
                />
              ))}

              {/* Duplicate set for seamless looping */}
              {images.map((image, index) => (
                <img
                  key={`second-${index}`}
                  src={image}
                  alt={`${title} event`}
                  className="gallery-image"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventSection;