# Passation — 19/11/2026 — portfolio (page offre Viktra)

Session du 18/11 (soir) au 19/11/2026 (00 h 30), dans le projet claude.ai « Viktra ». Branche **`bascule-viktra`** de `viktra-web/portfolio`, PR n° 1 **en brouillon, non fusionnée** : la production (`main`) n'a pas changé.

## 1. Fait (avec la preuve)

| Étape | Résultat | Commit |
|---|---|---|
| Cadrage de la page offre | `docs/CADRAGE-services.md` (validé par Adel le 18/11) | e114149 |
| 4 recherches | `docs/research/01-seo-local.md`, `02-concurrence-design.md`, `03-technique.md`, `docs/contenu/inventaire.md` | e114149 |
| Corrections contenu et formulaire | délai « le jour même ou le lendemain », Bonee « co-développée », limite d'envois, piège temporel, lockfile | 7f0ab38, acd9df8 |
| Réécriture sans effet au scroll | composants `components/viktra/`, `app/(viktra)/viktra.css`, groupes de routes `(portfolio)` / `(viktra)`, `motion` retiré | 30762da |
| Site multi-pages sous `/services` | accueil + 4 offres + tarifs, réalisations, à propos, contact, mentions légales (brouillon), confidentialité ; menu ; préfixe unique `lib/site.ts` | fa66d15 |
| Textes par page + SEO technique | `lib/viktra-pages.ts`, `components/viktra/seo/` (JSON-LD, metadata), sitemap | 42616fe |
| Corrections du contrôle qualité | débordement du formulaire, noindex tant que `INDEXABLE = false` (`lib/site.ts`) | 73aff36 |
| Essai v2 « La rue commerçante » | `/services/v2` (vitrine de nuit, panneau qui se retourne) | ed07945, cf4fa69 |
| Recherches design | `docs/research/04-benchmark-visuel.md` (15 sites), `05-creer-le-besoin.md` | 78073e5 |
| Essai v3 « Fiche technique » | `/services/v3` : bandeau horaire en direct, hero avec capture du site + Bonee, offres en tableau | 79a7d64 → 5bf3716 |

Vérifié à chaque étape : `npx tsc --noEmit`, `next lint`, `next build` (avec `NEXT_FONT_GOOGLE_MOCKED_RESPONSES`, Google Fonts bloqué dans le cloud), captures Playwright Chromium 393 et 1440 px, aucun débordement horizontal.

## 2. Ce qu'Adel a rejeté (ne pas y revenir)
- Une seule page (one-page) : il veut un **vrai site multi-pages** de développeur (référence : brune-mathelie.fr).
- V2 « vitrine de nuit » : trop illustré, trop de couleurs, « pas l'univers de l'informatique ».
- Le test « tapez votre métier → vraie recherche Google » en haut de page, puis même plus bas : « nul ». À garder seulement comme outil de **prospection** (Adel fait la recherche et montre la capture), éventuellement dans le CRM.
- **Pas de ville imposée dans un titre** (comme « … à Divonne ») : Adel n'en veut pas. La zone est tout le Pays de Gex, Nyon et Genève ; une ville n'apparaît que si c'est le visiteur qui la choisit.
- Fausses réalisations : **Globalpronet = visibilité Google seulement** (textes réécrits), pas un site créé ; **JSL Judo : site fait, pas mis en ligne par le club**, pas de lien. Pas de fenêtres de navigateur vides ni de « [à mesurer] » affichés.
- Publier la maquette Globalpronet : interdit avant le RDV client du 05/12 (et ses photos sont des photos de banque d'images).

## 3. En cours / pas tranché
- **V3 (`/services/v3`)** : Adel trouve que ça ne va toujours pas, « il y a encore beaucoup de taff ». Doute non levé sur sa 3e capture : il n'aime pas le **numéro en bouton** à côté de WhatsApp ou le **mode soir** (fond léman après 19 h). Recommandation faite : numéro en simple lien sous WhatsApp, et retirer le mode soir.
- Trois versions coexistent sur la branche : `/services` (multi-pages, identité Viktra), `/services/v2`, `/services/v3`. Aucune n'est choisie.
- Code mort à nettoyer quand une version sera choisie : `components/v2/`, `components/v3/ClientTest.tsx`, `app/(viktra)/services/v2`, `v3`.

## 4. Prochaine étape
1. **Repartir de ce qu'Adel veut voir, pas d'un concept** : lui demander 2-3 sites de développeurs qu'il aime (il ne l'a pas encore fait) et ce qui cloche précisément dans la v3. Utiliser `grilling` (questions avec réponse recommandée), pas de nouvelle version avant.
2. Ensuite seulement : une direction, validée sur une capture, puis toutes les pages dans ce style.
3. Avant la mise en ligne (début décembre) : viktra.fr réservé, SIRET → `lib/site.ts` (`BASE`, `SITE_URL`, `INDEXABLE`), mentions légales, fusion de la PR, Search Console.

**Attend Adel** : références visuelles, sa photo, captures/accord JSL Judo quand le site sera en ligne, viktra.fr et SIRET (début décembre). Réponses déjà données : il rédige bien les réponses aux avis Google ; Vaud et « 20 min de Genève » exacts ; Vercel Analytics gardé ; `RESEND_API_KEY` en Production seulement, pas de `RESEND_FROM`.

## 5. Pièges appris
- **`font-variant-numeric: tabular-nums` sur tout le texte** élargit virgules et points avec Schibsted Grotesk (« Ce soir , ») : le limiter aux nombres.
- Dans le cloud, `next build` échoue sur Google Fonts : `NEXT_FONT_GOOGLE_MOCKED_RESPONSES=/tmp/fontmock/mock.js` (police remplacée par Arial). Pour des captures avec la vraie police : `@fontsource-variable/schibsted-grotesk` injecté en data URL par Playwright.
- Arrêter **tous** les `next start` (`pkill -9 -f next`) avant d'en relancer un : un ancien serveur sert l'ancien build et fausse les captures.
- `.v3 a { color: inherit }` écrase la couleur des boutons-liens : écrire les remises à zéro avec `:where()`.
- L'image OG d'un dossier ne s'applique pas aux pages enfants dans un groupe de routes : elle est importée explicitement (`components/viktra/seo/`).
- WebKit n'est pas téléchargeable dans le cloud : les captures sont en Chromium, le rendu Safari reste à vérifier sur l'iPhone.

## 6. Skills à charger
`adel-work-style`, `viktra-brand`, `grilling`, puis selon la suite : `frontend-design`, `impeccable` (critique), `anti-ia`, `screenshots-iphone`.

## Convention (demande d'Adel, 19/11/2026)
Chaque passation est un fichier **`docs/passation-AAAA-MM-JJ-<projet>.md`** commité dans le dépôt du projet. Elle complète le `CLAUDE.md` du projet et `PROJET-CLAUDE.md`, sans les remplacer.
