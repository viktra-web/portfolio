# 09 — Décision v4 (/services/v4) : entrée portfolio et ordinateur qui se retourne

Agent juge (Plan), 19/11/2026, à partir des rapports 04, 06, 07, 08, du cadrage et de la passation du 19/11.

## 1. Verdict

**Technique : ordinateur en CSS 3D animé par GSAP ScrollTrigger (`scrub`), sans pin JS** : section haute, enfant `position: sticky`. Départ de dos (dos du capot avec le logo Viktra), puis retournement (rotateY 180° → 0°), ouverture du capot, zoom sur les projets.

**Bibliothèque : `gsap@3.15.1` seule** (`npm install gsap@3.15.1 --save-exact`, ScrollTrigger inclus). Pas de `@gsap/react`, pas de Motion, pas de Lenis.

Pourquoi :
- **Fidélité** : seule option qui fait vraiment « de dos → se retourne → s'ouvre » sans fabriquer de 3D. Le MacBook Scroll d'Aceternity (1er choix du 06) ne montre jamais l'ordinateur de dos, dépend de Tailwind, n'a pas de reduced-motion, licence gratuite non lue.
- **Fluidité iPhone** : la version précédente cassait à cause de pin + scrub + Lenis (07). Ici : sticky natif, pas de Lenis ni `normalizeScroll`, `ignoreMobileResize: true`, transform/opacity seulement, un seul élément 3D.
- **GSAP plutôt que Motion** : une timeline à phases colle à la séquence ; `gsap.matchMedia()` gère reduced-motion et points de rupture ; GSAP chargé **en différé** (`import()` dans `useEffect`), donc rien au premier chargement. Gratuit, usage commercial compris ; relire gsap.com/standard-license avant la mise en ligne.

Désaccords tranchés :
- 06 (Aceternity) : rejeté ; gardé « texte et projets en HTML, jamais dans un canvas ».
- 07 (CSS `animation-timeline`) : le plus fluide sur iOS 26.4+, mais pas une bibliothèque, deux chemins de code, rien sur iOS ≤ 18 : amélioration possible plus tard. Ses règles iOS sont reprises.
- 04 (« aucune animation au scroll ») : Adel a tranché le 19/11, un seul geste au scroll.
- **Plan B** si saccade sur le vrai iPhone : séquence d'images (`react-scroll-media`), 60 à 90 frames à produire.
- R3F / WebGL : écarté.

## 2. Structure de la page

0. En-tête (non collant) comme la v3, menu `<details>` sur mobile.
1. **Entrée (dans la scène collante)** : H1 « Bonjour, je suis Adel, développeur web et mobile. » ; chapeau « Vous avez besoin d'un site ou d'une application ? Racontez-moi votre projet. » ; bouton WhatsApp puis « Ou appelez le 06 52 33 87 13 » en lien ; infos : « Développeur full stack, deux ans en alternance chez Kunagi. », « React, Next.js, React Native, .NET, Laravel. », « Je vous réponds le jour même ou le lendemain. », « Je me déplace dans le Pays de Gex, à Nyon et à Genève. » ; ordinateur + légendes « Bonee, application co-développée, sur l'App Store et Google Play. » puis « Ce site, Viktra, que j'ai développé. » [à valider].
2. **Projets choisis** : intro « Je démarre mon activité : voici ce que j'ai déjà construit, et comment je travaille. » ; Bonee (captures, lien App Store, Google Play [à demander]) ; Viktra (capture, « Le site de mon agence : Next.js, sans traceur publicitaire. », aucun score) ; « Autres travaux » en texte : Globalpronet (visibilité Google, textes), JSL Judo (site créé, pas encore en ligne).
3. **Offres** : H2 « Un site ou une application ? Parlons-en. », les 4 offres avec prix et lien vers leur page.
4. **Comment ça se passe** (étape 3 « votre site ou votre application » [à valider]).
5. **Vos doutes** : coût total, ensuite, délai, Suisse.
6. **Contact** : « Vous parlez à celui qui fait. », WhatsApp, téléphone, citation Kunagi.
7. **Pied de page** sans « Pour les commerces, artisans… » ni bloc de mesures.
8. Barre mobile WhatsApp / Appeler.

Metadata : « Viktra, version 4 (test) », noindex.

## 3. Animation

Structure : `section.v4-scene` (300svh) > `div.v4-stage` (sticky, 100svh, perspective 1600px, `overflow: clip`) > `.v4-intro` + `.v4-slot` > `.v4-laptop` (preserve-3d) > `.v4-lid` (origin bas) [`.v4-screen` (backface hidden, slides Bonee / Viktra) + `.v4-back` (rotateY 180°, calcaire + logo)] + `.v4-base` (rotateX 90°) ; légendes.

Règles Safari : pas d'opacity/overflow/filter sur `.v4-laptop` ni `.v4-lid` ; pas d'`overflow: hidden` sur la scène ou ses parents ; aplats seulement.

Géométrie : écran 16:10 ; largeur `min(86vw, 22rem)` < 900 px, `38rem` au-dessus ; base ≈ 0,68 × hauteur du capot ; capot `rotateX = ouverture − 90°`.

| Progression | Ordinateur | Capot | Placement | Intro | Écran |
|---|---|---|---|---|---|
| 0 → 0,08 | rotateY 180°, rotateX −16° | −20° | mobile scale 0,9 | visible | Bonee montée, invisible (dos) |
| 0,08 → 0,40 | rotateY 180° → 0° (power2.inOut) | −20° | | visible | |
| 0,40 → 0,60 | rotateX −16° → −10° | −20° → +10° | | 0,40 → 0,55 : disparaît | |
| 0,60 → 0,80 | | | vers le centre, scale vers ~92 % de la largeur (max 960 px) | masquée | légende 1 |
| 0,80 → 0,88 | | | | | Bonee → Viktra, légende 2 |
| 0,88 → 1 | immobile | | | | lecture, puis le sticky se libère |

Toujours des valeurs explicites (`gsap.set` / `fromTo`), jamais lire le transform CSS. Replis : HTML serveur = état de départ identique aux `gsap.set` ; état statique (`.is-static`, reduced-motion, `<noscript>`) = ordinateur de face et ouvert, section en hauteur auto. iOS : `svh`, pas de pin/Lenis/normalizeScroll/scroll-snap.

Poids : First Load ≤ v3 + 5 ko (GSAP différé, ~40 ko gzip à mesurer, plafond 50 ko).

## 4. Fichiers et vérification

1. `gsap@3.15.1`. 2. `lib/v4.ts` (textes, imports des données validées). 3. `app/(viktra)/services/v4/v4.css`. 4. `components/v4/LaptopScene.tsx`. 5. `app/(viktra)/services/v4/page.tsx`.

Vérifier : tsc, lint, build (police simulée) ; captures 393×852 et 1440×900 aux progressions 0 / 0,25 / 0,5 / 0,7 / 0,85 / 1 ; aucun débordement ; reduced-motion et sans JS ; pas de « [à », pas de ville dans h1/h2, pas d'`uppercase`, de dégradé ou de `100vh` ; anti-ia ; **test d'Adel sur iPhone 16** (aperçu Vercel).

Questions pour Adel : lien Google Play de Bonee ; légende « Ce site, Viktra, que j'ai développé » ; étape « votre site ou votre application ».
