import React from "react";

function EventSection({
  id,
  number,
  title,
  date,
  description,
  images,
  theme,
  eventUrl,
  openInNewTab = false,
  reverse = false,

  // New event information
  prizePool,
  teamsParticipated,
  benefits = [],
}) {
  return (
    <section
      id={id}
      className={`event-section ${theme} ${
        reverse ? "event-section-reverse" : ""
      }`}
    >
      <div className="event-section-inner">

        {/* EVENT CONTENT */}
        <div className="event-section-content">

          <span className="event-index">{number}</span>

          <div className="event-date">{date}</div>

          <h2>{title}</h2>

          <p>{description}</p>


          {/* EVENT STATS */}
          <div className="event-stats">

            {/* Prize Pool */}
            <div className="event-stat">
              <span className="event-stat-label">
                PRIZE POOL
              </span>

              <span className="event-stat-value">
                {prizePool}
              </span>
            </div>


            {/* Teams Participated */}
            <div className="event-stat">
              <span className="event-stat-label">
                TEAMS PARTICIPATED
              </span>

              <span className="event-stat-value">
                {teamsParticipated}
              </span>
            </div>

          </div>


          {/* BENEFITS */}
          {benefits.length > 0 && (
            <div className="event-benefits">

              {benefits.map((benefit, index) => (
                <div
                  className="event-benefit"
                  key={`${benefit}-${index}`}
                >
                  <span className="event-benefit-dot">
                    +
                  </span>

                  <span>{benefit}</span>
                </div>
              ))}

            </div>
          )}


          {/* VIEW EVENT */}
          <a
            href={eventUrl}
            className="event-button"
            target={openInNewTab ? "_blank" : undefined}
            rel={
              openInNewTab
                ? "noopener noreferrer"
                : undefined
            }
          >
            VIEW EVENT

            <span>↗</span>
          </a>

        </div>


        {/* EVENT IMAGE GALLERY */}
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