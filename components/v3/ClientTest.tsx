"use client";

import { useMemo, useState } from "react";

const TOWNS = ["Divonne-les-Bains", "Gex", "Ferney-Voltaire", "Saint-Genis-Pouilly", "Nyon", "Genève"];

const CHECKS = [
  { id: "carte", label: "Je suis parmi les 3 commerces affichés sur la carte." },
  { id: "infos", label: "Mes horaires et mon numéro s'affichent." },
  { id: "mobile", label: "Mon site s'ouvre bien sur mon téléphone." },
] as const;

type CheckId = (typeof CHECKS)[number]["id"];

/**
 * « Le test du client » : the visitor searches like a customer, on the real Google and
 * Google Maps, then ticks what he saw. Nothing is simulated, nothing is sent anywhere.
 */
export default function ClientTest() {
  const [trade, setTrade] = useState("");
  const [town, setTown] = useState(TOWNS[0]);
  const [searched, setSearched] = useState(false);
  const [ticked, setTicked] = useState<Record<CheckId, boolean>>({
    carte: false,
    infos: false,
    mobile: false,
  });

  const query = `${trade.trim() || "boulangerie"} ${town}`;
  const google = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

  const verdict = useMemo(() => {
    if (!ticked.carte || !ticked.infos) {
      return "Les commerces affichés avant vous sont ceux que vos clients appellent en premier. C'est la fiche Google qui se joue ici, dès 150 €.";
    }
    if (!ticked.mobile) {
      return "Vos clients vous trouvent, mais votre site les accueille mal sur téléphone. C'est là qu'un site vitrine, dès 690 €, fait la différence.";
    }
    return "Vous êtes bien placé. Le suivi, dès 50 € par mois, sert à le rester : horaires, photos et mises à jour.";
  }, [ticked]);

  const message = `Bonjour Adel, je vous contacte depuis votre site. J'ai fait le test pour « ${query} ».`;
  const whatsapp = `https://wa.me/33652338713?text=${encodeURIComponent(message)}`;

  return (
    <div className="v3-test">
      <div className="v3-test-fields">
        <label className="v3-field">
          <span>Votre métier</span>
          <input
            type="text"
            value={trade}
            onChange={(e) => setTrade(e.target.value)}
            placeholder="boulangerie, plombier, coiffeuse…"
            autoComplete="off"
            enterKeyHint="search"
          />
        </label>
        <label className="v3-field">
          <span>Votre ville</span>
          <select value={town} onChange={(e) => setTown(e.target.value)}>
            {TOWNS.map((name) => (
              <option key={name}>{name}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="v3-test-go">
        <a
          className="v3-btn v3-btn--ink"
          href={google}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setSearched(true)}
        >
          Voir ce que voit mon client
        </a>
        <a
          className="v3-link"
          href={maps}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setSearched(true)}
        >
          Et sur Google Maps
        </a>
      </div>
      <p className="v3-test-query">
        Recherche : <strong>{query}</strong>
      </p>

      <fieldset className="v3-test-checks" data-searched={searched || undefined}>
        <legend>Ce que vous avez vu</legend>
        {CHECKS.map((check) => (
          <label key={check.id} className="v3-check">
            <input
              type="checkbox"
              checked={ticked[check.id]}
              onChange={(e) => setTicked((t) => ({ ...t, [check.id]: e.target.checked }))}
            />
            <span>{check.label}</span>
          </label>
        ))}
      </fieldset>

      {/* The verdict comes only after the visitor has looked at Google himself. */}
      <div className="v3-test-result" aria-live="polite" hidden={!searched}>
        <p>{verdict}</p>
        <a className="v3-btn v3-btn--sun" href={whatsapp} target="_blank" rel="noopener noreferrer">
          Envoyer mon résultat à Adel
        </a>
      </div>
    </div>
  );
}
