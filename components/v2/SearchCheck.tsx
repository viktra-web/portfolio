"use client";

import { useState } from "react";

const TOWNS = ["Divonne-les-Bains", "Gex", "Ferney-Voltaire", "Saint-Genis-Pouilly", "Nyon", "Genève"];

/**
 * "Signez ici": the visitor checks himself, on the real Google, whether a customer finds him.
 * Nothing is simulated: the button opens google.com with his trade and his town.
 */
export default function SearchCheck() {
  const [trade, setTrade] = useState("");
  const [town, setTown] = useState(TOWNS[0]);
  const query = `${trade.trim() || "boulangerie"} ${town}`;
  const href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;

  return (
    <form
      className="v2-check"
      action="https://www.google.com/search"
      method="get"
      target="_blank"
      onSubmit={(event) => {
        event.preventDefault();
        window.open(href, "_blank", "noopener,noreferrer");
      }}
    >
      <div className="v2-check-fields">
        <label className="v2-check-field">
          <span>Votre métier</span>
          <input
            type="text"
            value={trade}
            onChange={(event) => setTrade(event.target.value)}
            placeholder="boulangerie, plombier, coiffeuse…"
            autoComplete="off"
            enterKeyHint="search"
          />
        </label>
        <label className="v2-check-field">
          <span>Votre ville</span>
          <select value={town} onChange={(event) => setTown(event.target.value)}>
            {TOWNS.map((name) => (
              <option key={name}>{name}</option>
            ))}
          </select>
        </label>
      </div>
      <input type="hidden" name="q" value={query} />
      <button type="submit" className="v2-btn v2-btn--white">
        Vérifier sur Google
      </button>
      <p className="v2-check-query" aria-live="polite">
        Recherche : <strong>{query}</strong>
      </p>
    </form>
  );
}
