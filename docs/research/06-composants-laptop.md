# 06 - Composants « ordinateur portable qui s'ouvre au défilement »

Recherche du 19/11/2026. Cible : Next 14.2, React 18, App Router, CSS classique (pas de Tailwind), Vercel, fluidité sur iPhone 16 / Safari. Légende : **[constaté]** = lu sur la page citée ; **[supposé]** = ma déduction ; **non trouvé** = introuvable ou page non lisible.

## Avis franc

- Aucune option « toute faite » ne colle exactement à « vu de dos puis il se retourne ». Le composant le plus proche est le MacBook Scroll d'Aceternity : le capot s'ouvre (rotation de -28 à 0 degré), l'écran grossit, le clavier glisse. Il ne montre pas l'ordinateur de dos.
- Aceternity est écrit avec Tailwind. Il faut réécrire les classes en CSS classique (environ 30 min à 1 h, composant court). Ce n'est donc pas du « copier-coller ». Il n'a aucune gestion de `prefers-reduced-motion` : à ajouter.
- Le chemin le plus sûr pour la fluidité iPhone est la séquence d'images sur canvas (style Apple). Mais il faut produire les images : un modèle 3D, un rendu Blender, puis des frames compressées. Ce n'est pas « tout fait ».
- Le WebGL (R3F) est le plus joli et le plus risqué sur iPhone (poids du modèle, mémoire, Safari). Pour 2 projets à montrer, c'est disproportionné. Je le déconseille.
- Le CSS pur piloté par le défilement (`animation-timeline`) ne marche que sur Safari iOS 26 et plus. Non supporté de 3.2 à 18.7 [constaté, caniuse]. Il faudrait un repli.
- Je n'ai mesuré aucun poids de bundle moi-même, sauf ce que la doc de `react-scroll-media` annonce. Les autres tailles sont **non mesurées**.
- Plusieurs pages (CodePen, licence Aceternity free, source 21st.dev) étaient illisibles pour moi : voir les « non trouvé ».

## Tableau comparatif (10 options)

| # | Option | Ce que ça fait | Licence | Dépendances | Adaptable (React 18 / Next 14 / sans Tailwind) | Intégration |
|---|---|---|---|---|---|---|
| 1 | **Aceternity UI - Macbook Scroll** | Ordinateur CSS. Au défilement : capot de -28 à 0 degré, écran qui s'agrandit, clavier qui descend, titre qui s'efface. L'écran est une `<img src>`. | Non trouvée pour les composants gratuits. La page de licence lue concerne la version Pro (usage client autorisé, pas de revente). **À vérifier avant usage.** | `motion` (import `motion/react`), `@tabler/icons-react`, utilitaire `cn` | Tailwind obligatoire dans le code d'origine [constaté]. React 18 avec `motion` : **supposé** OK, non vérifié. | Moyen : 30 min à 1 h pour porter en CSS. |
| 2 | **21st.dev - MacBook Dual-Device Scroll** (Ashik Siddike) | MacBook Pro 3D qui se plie, plus un iPhone avec sa Dynamic Island, sur scroll. Très proche du besoin : une app mobile (Bonee) à côté d'un site. | MIT [constaté] | Installation par la CLI shadcn avec une clé API 21st.dev (quota quotidien en compte gratuit) | Code interne non lu : **non trouvé**. Probablement Tailwind (**supposé**). | Moyen à élevé : lire le code installé avant de décider. |
| 3 | **21st.dev - Animated 3D MacBook Air** (Hossain Jahed) | MacBook en CSS pur : rotation 360 degrés, capot qui s'ouvre et se ferme, reflets. **Pas piloté par le défilement** : boucle d'animation. | Non trouvée | React, Tailwind, keyframes CSS | Source visible seulement avec un compte 21st.dev. | Faible pour l'affichage. Il faudrait lier les keyframes au scroll. |
| 4 | **Exemples GSAP ScrollTrigger (CodePen)**, ex. mvaneijgen/KKbVObP, kocoug/ZEVQdXM, fil du forum GSAP | Un MacBook en CSS 3D, avec une seule timeline et `pin: true` : rotation puis ouverture. | Pens CodePen : licence **non trouvée** (pages illisibles). GSAP lui-même est gratuit, y compris en commercial [constaté, README GSAP]. | `gsap` + `ScrollTrigger` | Compatible : GSAP est indépendant du framework ; en Next 14, enregistrer le plugin dans un composant client. | Moyen : il faut tout de même nettoyer le HTML/CSS du pen. |
| 5 | **R3F + drei `ScrollControls`**, démo pmndrs « floating-laptop » | Modèle glTF animé avec react-spring. Aucun lien source ni crédit du modèle dans la page lue. | Repo `pmndrs/examples` : MIT [constaté]. Crédit du modèle : **non trouvé**. drei : MIT [constaté]. | `three`, `@react-three/fiber`, `@react-three/drei` | React 18 : **supposé** OK avec R3F 8 ; non vérifié. Sans Tailwind : oui. | Élevé. |
| 6 | **Modèle Sketchfab « Macbook Pro [+FREE] »** + R3F | Modèle à animer soi-même (charnière à piloter). Animations incluses : non précisé. | **CC BY 4.0** : attribution obligatoire [constaté]. 158,1 k triangles [constaté] : trop lourd pour mobile sans décimation. | idem R3F + outil glTF | idem | Élevé, plus un travail d'optimisation du modèle. |
| 7 | **Motion (`useScroll` / `useTransform`) + CSS 3D maison** | Même principe que l'option 1, écrit à la main. L'option 1 en est la version prête. | MIT (`motion`, **supposé**, non vérifié) | `motion` | Oui, aucune contrainte. | Moyen. Ce n'est pas « tout fait ». |
| 8 | **Séquence d'images : `react-scroll-media`** | Mappe le scroll sur un index de frame dessiné sur un `<canvas>`. Utilise `position: sticky`, pas de détournement du scroll. Texte superposable. | MIT [constaté] | Aucune [constaté] | React : version non précisée dans la doc lue. Next : annoncé « SSR safe » [constaté]. Sans Tailwind : oui. | Faible pour le composant. **Élevé pour les frames** : rendu Blender ou capture à produire. |
| 9 | **CSS pur : `animation-timeline: view()`** | L'animation est liée au scroll sans JavaScript. | Sans objet | Aucune | Aucune dépendance. | Faible. **Mais iOS Safari 3.2-18.7 non supporté ; 26.0 et plus supporté** [constaté, caniuse]. Le WebKit demande d'envelopper les gros mouvements dans `prefers-reduced-motion` [constaté]. |
| 10 | **Framer Marketplace « MacBook Reveal » / « 3D Laptop Mockup »** | Composants Framer. | Non trouvée | Framer | **Non utilisables dans Next** sans passer par Framer. À écarter. | - |

Équivalents cherchés mais **non trouvés** : Magic UI, Cult UI, Skiper UI, Hover.dev, React Bits, Animata n'ont pas de composant « laptop qui s'ouvre au scroll » dans mes résultats. Magic UI propose seulement des cadres statiques (Safari, iPhone 15 Pro) [constaté dans les résultats de recherche, composants non ouverts]. Ces cadres pourraient servir d'écran dans une autre option.

Aussi vu : Aceternity « Container Scroll Animation » (carte inclinée qui se redresse au scroll). Non détaillé. C'est une alternative plus simple, sans ordinateur.

## Détail par critère

### Risques iPhone
| Option | Risque principal |
|---|---|
| 1, 7 | Transformations `scaleX`/`scaleY` d'un grand élément et translation de 1500 px [constaté] pendant le scroll : risque de saccades sur un gros calque. `isMobile` calculé une seule fois, sans écouteur de redimensionnement [constaté] (rotation de l'iPhone non gérée). À tester sur iPhone. |
| 2, 3 | Code non lu, donc risque non évalué. |
| 4 | Le `pin` de ScrollTrigger sur Safari iOS est la source classique de sauts quand la barre d'adresse se rétracte : **supposé**, non vérifié. Garder un seul ScrollTrigger [constaté, conseil du forum GSAP] et préférer `position: sticky` en CSS. |
| 5, 6 | WebGL : mémoire, 158 k triangles, textures. Le plus risqué. |
| 8 | Mémoire des frames décodées. Nombre de frames et résolution à limiter. Chiffres : **non trouvé**. |
| 9 | Inexistant sur iOS 18 et moins. |

### Accessibilité (`prefers-reduced-motion`)
- Option 1 : **absente** [constaté] ; à ajouter (afficher l'ordinateur ouvert, sans animation).
- Option 8 : gérée [constaté] ; en cas de réduction du mouvement, repli ou première frame.
- Les autres : à faire soi-même.

### Affichage sans JavaScript
- Option 1 : composant client ; le HTML serveur contient l'état initial (capot incliné). **Supposé.** L'image d'écran est présente dans le HTML.
- Option 8 : sans JS, un canvas reste vide. Prévoir une `<img>` de repli (première ou dernière frame) dans le HTML.
- Option 9 : sans JS, mais seulement sur les navigateurs compatibles ; sinon, afficher l'état final.
- WebGL (5, 6) : rien sans JS, sauf une image statique de repli.
- Dans tous les cas : mettre le texte « Bonjour, je suis Adel » et les projets en HTML normal, jamais dans le canvas.

## Classement des 3 meilleures options pour ce cas

1. **Aceternity Macbook Scroll, porté en CSS classique** (option 1). C'est la seule option prête, légère, sans WebGL, dans Next 14. Écran = capture App Store de Bonee, puis capture de Viktra. Travail : réécrire Tailwind en CSS, ajouter `prefers-reduced-motion`, tester sur iPhone 16. Réserve : vérifier la licence des composants gratuits.
2. **Séquence d'images avec `react-scroll-media`** (option 8). C'est le plus fluide et le plus fidèle à l'effet Apple, avec MIT et zéro dépendance. Seul frein : produire 60 à 90 frames (rendu d'un modèle CC BY ou d'une maquette). À choisir si l'option 1 saccade sur iPhone. Le package est récent (copyright 2026) : l'auditer et figer la version.
3. **GSAP ScrollTrigger + CSS 3D** (option 4), pour avoir le vrai « vu de dos, il se retourne, il s'ouvre ». C'est du code à adapter depuis un pen, donc moins « tout fait », avec un risque de pinning sur iOS.

**Recommandation** : commencer par l'option 1 en une demi-journée, la tester sur le vrai iPhone 16 dans Safari. Si ça tient 60 fps, on garde. Sinon, passer à l'option 8. Écarter le WebGL. Ne pas compter sur le CSS pur tant que iOS 18 et moins existe.

## À faire (priorisé)

- **Critique** : tester sur un vrai iPhone 16 dans Safari avant tout choix ; vérifier la licence des composants gratuits Aceternity (page de licence gratuite non lue).
- **Haute** : porter l'option 1 en CSS classique ; ajouter `prefers-reduced-motion` ; rendre le texte et les projets en HTML normal.
- **Haute** : décider du « vu de dos » : s'il est indispensable, passer à l'option 4 ou 8.
- **Moyenne** : lire le code de l'option 2 (iPhone + MacBook) pour voir s'il est réutilisable.
- **Moyenne** : si modèle 3D CC BY, noter l'attribution (CC BY 4.0).
- **Basse** : repli CSS `animation-timeline` pour iOS 26+.

## Sources

- https://ui.aceternity.com/components/macbook-scroll
- https://ui.aceternity.com/registry/macbook-scroll.json
- https://ui.aceternity.com/licence
- https://21st.dev/@ashik-siddike/components/mac-book-dual-device-scroll
- https://21st.dev/@jahed/components/animated-3d-mac-book-air
- https://gsap.com/community/forums/topic/38168-macbook-opening-animation-using-scrolltrigger/
- https://github.com/greensock/GSAP
- https://github.com/pmndrs/drei
- https://github.com/pmndrs/examples
- https://pmndrs.github.io/examples/floating-laptop
- https://sketchfab.com/3d-models/macbook-pro-free-6b0e411e4792407d995c35ce55cc0589
- https://cdn.jsdelivr.net/npm/react-scroll-media@1.1.0/README.md
- https://caniuse.com/wf-scroll-driven-animations
- https://www.webkit.org/blog/17101/a-guide-to-scroll-driven-animations-with-just-css/
- https://www.framer.com/marketplace/components/macbook-reveal/
- https://magicui.design/docs/components/iphone-15-pro
