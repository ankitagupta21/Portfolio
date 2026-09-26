import React from "react";
import "./Cards.css";
import CardModal from "./CardModal";
import { Link } from "react-router-dom";
import useReveal from "../useReveal";

const MAX_CARD_SKILLS = 4;
const TINTS = ["tint-blue", "tint-purple", "tint-indigo", "tint-violet"];

// cards: [{ id, title, image?, subtitle?, date?, note?, skills?, bullets?, sections?: [{ label, items }], links?: [{ label, url, icon: element }], contributors?, to? }]
// A card with `to` links to that page instead of opening a popup.
// children render below the grid. expandable={false} shows everything on the card with no popup.
const CardSection = ({ heading, icon, cards, expandable = true, children }) => {
  const [openCard, setOpenCard] = React.useState(null);
  const closeCard = React.useCallback(() => setOpenCard(null), []);
  const [sectionRef, revealed] = useReveal();

  return (
    <div
      ref={sectionRef}
      className={`sub-container1 card-section reveal${revealed ? " revealed" : ""}`}
    >
      <img src={icon} className="sub-img" alt="" />
      <div className="sub-right cards-right">
        <p className="sub-heading">{heading}</p>
        <div className="card-grid">
          {cards.map((card, index) => {
            const tint = TINTS[index % TINTS.length];
            const skills = card.skills || [];
            // A "+1" chip would take the same space as the chip it hides, so show it instead.
            const visibleCount =
              !expandable || skills.length <= MAX_CARD_SKILLS + 1
                ? skills.length
                : MAX_CARD_SKILLS;
            const extraSkills = skills.length - visibleCount;

            const content = (
              <div className="card-panel">
                {(expandable || card.to) && (
                  <span className="card-expand" aria-hidden="true">
                    <i className={card.to ? "fas fa-arrow-right" : "fas fa-expand-alt"}></i>
                  </span>
                )}
                {card.date && <p className="card-date">{card.date}</p>}
                <p className="card-title">{card.title}</p>
                {card.image && <img src={card.image} className="card-image" alt="" />}
                {card.subtitle && <p className="card-subtitle">{card.subtitle}</p>}
                {card.note && <p className="card-note">{card.note}</p>}
                <div className="card-chips">
                  {skills.slice(0, visibleCount).map((skill) => (
                    <span key={skill} className="card-chip">
                      {skill}
                    </span>
                  ))}
                  {extraSkills > 0 && (
                    <span className="card-chip card-chip-extra">+{extraSkills}</span>
                  )}
                </div>
              </div>
            );

            if (card.to) {
              return (
                <Link
                  key={card.id}
                  to={card.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`card ${tint}`}
                  style={{ "--i": index }}
                  aria-label={`Open ${card.title}`}
                >
                  {content}
                </Link>
              );
            }
            if (!expandable) {
              return (
                <div
                  key={card.id}
                  className={`card static ${tint}`}
                  style={{ "--i": index }}
                >
                  {content}
                </div>
              );
            }
            return (
              <button
                key={card.id}
                type="button"
                className={`card ${tint}`}
                style={{ "--i": index }}
                onClick={() => setOpenCard({ ...card, tint })}
                aria-haspopup="dialog"
                aria-label={`Expand ${card.title}`}
              >
                {content}
              </button>
            );
          })}
        </div>
        {children}
      </div>
      {openCard && (
        <CardModal card={openCard} onClose={closeCard} />
      )}
    </div>
  );
};

export default CardSection;
