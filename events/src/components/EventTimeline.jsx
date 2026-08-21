function EventTimeline() {
  const events = [
    {
      number: "01",
      name: "Code Apex 2.0",
      date: "16 MAR 2026",
      target: "code-apex-2",
    },
    {
      number: "02",
      name: "Code Apex 1.0",
      date: "18 SEP 2025",
      target: "code-apex-1",
    },
  ];

  return (
    <section className="event-timeline">
      <div className="timeline-heading">
        <span>EVENT ARCHIVE</span>
        <h2>OUR EVENTS</h2>
      </div>

      <div className="timeline-track">
        {events.map((event) => (
          <a
            href={`#${event.target}`}
            className="timeline-event"
            key={event.number}
          >
            <div className="timeline-number">
              {event.number}
            </div>

            <div className="timeline-dot" />

            <div className="timeline-info">
              <h3>{event.name}</h3>
              <span>{event.date}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default EventTimeline;