import React from "react";
import "./Intro.css";
import "../../App.css";

const LINES = ["Hi, I'm Ankita", "A Software", "Engineer."];
const OFFSETS = LINES.map((_, i) =>
  LINES.slice(0, i).reduce((sum, line) => sum + line.length, 0)
);
const TOTAL = LINES.join("").length;
const TYPE_DELAY = 90;
const LINE_PAUSE = 400;

const prefersReducedMotion = () =>
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const Intro = () => {
  const [count, setCount] = React.useState(() =>
    prefersReducedMotion() ? TOTAL : 0
  );

  React.useEffect(() => {
    if (count >= TOTAL) return;
    const delay = count > 0 && OFFSETS.includes(count) ? LINE_PAUSE : TYPE_DELAY;
    const timer = setTimeout(() => setCount((c) => c + 1), delay);
    return () => clearTimeout(timer);
  }, [count]);

  // Untyped characters stay in the layout (invisible) so the centered heading doesn't shift.
  const renderLine = (index) => {
    const text = LINES[index];
    const start = OFFSETS[index];
    const shown = Math.min(Math.max(count - start, 0), text.length);
    const isLast = index === LINES.length - 1;
    const hasCaret =
      count >= start && (count < start + text.length || (isLast && count >= TOTAL));
    return (
      <span className="i-line">
        {text.slice(0, shown)}
        {hasCaret && <span className="i-caret" />}
        <span className="i-ghost">{text.slice(shown)}</span>
      </span>
    );
  };

  return (
    <div className="intro">
      <h1 className="i-name" aria-label="Hi, I'm Ankita. A Software Engineer.">
        <span className="i-row" aria-hidden="true">
          {renderLine(0)}
        </span>
        <span className="i-row" aria-hidden="true">
          {renderLine(1)} {renderLine(2)}
        </span>
      </h1>
      <div className="box1 in">
        <div className="box2 in">
          <div className="red"></div>
          <div className="yellow"></div>
          <div className="green"></div>
        </div>
        <div className="para">
          Software Engineer II at Walmart Global Tech (Infosec), building
          secure system integrations and ServiceNow automation.
        </div>
        <div className="para">
          2+ years building scalable web, mobile, and full-stack systems with
          React, React Native, Node.js, Spring Boot, and LLM-integrated apps.
        </div>
      </div>
      <div className="i-actions">
        <a
          href="https://drive.google.com/file/d/1skRm4QfiugGtF-pMU6n5TW5dz6PDYQKf/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="i-button primary"
        >
          View Resume
        </a>
        <a href="#contact" className="i-button">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Intro;
