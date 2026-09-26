import React from "react";

// Matches standalone numbers like "36", "~6", "18.9%", "50K" but not digits inside words like "OAuth2".
const METRIC = /((?<![\w.-])~?\d+(?:\.\d+)?[%K]?(?!\w|\.\d))/;

export default function highlightMetrics(text) {
  return text
    .split(METRIC)
    .map((part, i) =>
      i % 2 === 1 ? (
        <strong key={i} className="metric">
          {part}
        </strong>
      ) : (
        part
      )
    );
}
