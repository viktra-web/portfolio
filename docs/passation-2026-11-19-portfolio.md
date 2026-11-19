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

## 3. Mise à jour du 19/11/2026 (après-midi) : v4 retenue, site passé en v4
- **V4 validée par Adel** et devenue le site : `/services` = accueil v4 (`app/(viktra)/services/page.tsx`, textes `lib/v4.ts`), `/services/v4` et `/services/v3` redirigent vers `/services` (308, `next.config.mjs`). V3, ancien accueil (Hero, Demo, OffersSummary, TradeDemo, WorkList) et `viktra.css` supprimés.
- **Toutes les pages intérieures en style v4** : une seule feuille `app/(viktra)/v4.css` importée par le layout (classe `v4` sur `<body>`), composants communs `components/viktra/` (Header avec page courante, Footer, StickyBar, Shell, PageIntro, CtaBand, OfferTemplate, ProjectList, Picture). Pas d'animation au scroll sur les pages intérieures.
- **Corrections d'Adel** : plus de stack ni de « full stack » dans les textes clients ; Kunagi = « application iPhone et Android, de l'écran jusqu'au serveur » ; Viktra = « Le site de mon agence, conçu et développé par moi. » ; aucune mention « sans traceur ». Textes des pages réécrits pour tout le monde (sites et applications), sans ville dans h1/h2 ni dans les meta titles. Réalisations = « Projets choisis ».
- **Ordinateur** refait en CSS 3D en aplats : bord d'écran noir et caméra, tranche du capot, base en volume (face avant avec encoche, côtés, dos, charnière), 6 rangées de touches, pavé tactile, aluminium gris froid, ombre de contact très légère. Départ de trois quarts dos (rotateY 145°, inclinaison −30°, capot −12°), même timeline. Toujours réservé à l'ordinateur ; téléphone = version simple sans GSAP.
- Capture « Ce site, Viktra » refaite sur le nouvel accueil : `public/viktra/viktra-site.jpg|webp`.
- Mentions légales : plus de « [à fournir] » affiché ; SIRET, adresse complète, mention TVA et adresse de Vercel notés en commentaire dans la page.

## 4. Prochaine étape
1. **Test d'Adel sur son iPhone 16** (aperçu Vercel de la branche) : barre du bas, menu, formulaire, et sur Mac/Safari l'ordinateur 3D (rendu WebKit non vérifié dans le cloud).
2. Trancher **Bonee** : l'accueil dit « conçue et développée » / « de A à Z », les pages Application et À propos disent « co-développée ». Une seule formulation.
3. Questions encore ouvertes : lien Google Play de Bonee, légende « Ce site, Viktra, que j'ai développé », étape « Je crée votre site ou votre application », photo d'Adel (`ABOUT_PHOTO`).
4. `anti-ia` + `impeccable` (critique) sur l'ensemble des pages avant la mise en ligne.
5. Avant la mise en ligne (début décembre) : viktra.fr réservé, SIRET → `lib/site.ts` (`BASE`, `SITE_URL`, `INDEXABLE`) et mentions légales, fusion de la PR, Search Console. Relire la licence GSAP.

**Attend Adel** : son test iPhone, Bonee, Google Play, sa photo, viktra.fr et SIRET.

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
