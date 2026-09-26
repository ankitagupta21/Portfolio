import React from "react";
import ReactDOM from "react-dom";
import highlightMetrics from "../highlightMetrics";

// Rendered into document.body so it sits above the navbar and section stacking contexts.
const CardModal = ({ card, onClose }) => {
  const closeRef = React.useRef();

  React.useEffect(() => {
    const previousFocus = document.activeElement;
    closeRef.current.focus();
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      if (previousFocus) previousFocus.focus();
    };
  }, [onClose]);

  const {
    title,
    image,
    subtitle,
    date,
    note,
    skills = [],
    bullets = [],
    sections = [],
    links = [],
    contributors,
    tint,
  } = card;

  return ReactDOM.createPortal(
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className={`modal ${tint}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-bar">
          <button
            type="button"
            className="modal-dot red"
            onClick={onClose}
            aria-label="Close"
          />
          <span className="modal-dot yellow" />
          <span className="modal-dot green" />
          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            ref={closeRef}
            aria-label="Close"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="modal-body">
          <div className="modal-head">
            <p className="modal-title" id="modal-title">
              {title}
            </p>
            {date && <p className="modal-date">{date}</p>}
          </div>
          {subtitle && <p className="modal-subtitle">{subtitle}</p>}
          {note && <p className="modal-note">{note}</p>}
          {image && <img src={image} className="modal-image" alt={`${title} preview`} />}

          {bullets.length > 0 && (
            <ul className="modal-bullets">
              {bullets.map((bullet) => (
                <li key={bullet}>{highlightMetrics(bullet)}</li>
              ))}
            </ul>
          )}

          {skills.length > 0 && (
            <div className="card-chips modal-chips">
              {skills.map((skill) => (
                <span key={skill} className="card-chip">
                  {skill}
                </span>
              ))}
            </div>
          )}

          {sections.map((section) => (
            <div key={section.label} className="modal-section">
              <p className="modal-section-label">{section.label}</p>
              <div className="card-chips modal-chips">
                {section.items.map((item) => (
                  <span key={item} className="card-chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {contributors && (
            <p className="modal-contributors">
              Contributors:{" "}
              {contributors.map((contributor, i) => (
                <React.Fragment key={contributor.id}>
                  {i > 0 && ", "}
                  <a href={contributor.link} target="_blank" rel="noopener noreferrer">
                    {contributor.name}
                  </a>
                </React.Fragment>
              ))}
            </p>
          )}

          {links.length > 0 && (
            <div className="modal-links">
              {links.map((link, i) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`modal-link${i === 0 ? "" : " secondary"}`}
                >
                  {link.icon}
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default CardModal;
