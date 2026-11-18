# 07 - Bibliothèques d'animation au scroll (accueil Next 14.2 / React 18, iPhone 16)

Rapport du 19/11/2026. Constaté = lu dans une source citée. Supposé = marqué « supposé ». Non trouvé = écrit tel quel.

## Avis franc
- Pour l'ordinateur qui s'ouvre : la meilleure pile est **CSS natif (animation-timeline: view()/scroll()) + un peu de Motion en secours**, pas GSAP épinglé. Safari 26 supporte ces animations, et 26.4 les fait tourner hors du thread principal.
- Ce qui a fait sauter l'ancienne version (épinglage 100svh + animations liées au scroll + Lenis) sont trois sources de conflit sur iOS. Les enlever compte plus que le choix de la bibliothèque.
- Lenis : à éviter. Son gain est faible sur iPhone (le scroll natif est déjà fluide) et le risque est réel.
- GSAP est maintenant gratuit, donc le choix est technique, pas financier. Mais ses propres modérateurs disent de ne pas activer normalizeScroll par défaut et d'éviter le smooth scroll sur mobile.
- R3F/drei : excessif pour montrer des captures de projets. Je le déconseille, sauf modèle 3D réel exigé.
- Les skills : prendre `greensock/gsap-skills` (MIT, officiel) seulement si GSAP est retenu. Les autres sont de qualité moyenne et peu mobile.
- Limite : je n'ai pas pu mesurer de poids gzip précis ni tester sur un iPhone. Les chiffres non sourcés sont marqués.

## 1. GSAP + ScrollTrigger
- Version : 3.15.0 visible sur jsDelivr (constaté). Licence : « no charge » standard, 2008-2026 GreenSock. Webflow a rendu GSAP gratuit, plugins « bonus » inclus (SplitText, MorphSVG), usage commercial compris (source README gsap 3.15.0). Un article (Aceternity) rappelle que la licence a historiquement interdit les produits concurrents de Webflow : relire gsap.com/standard-license avant usage (non relue ici).
- React 18 / Next 14 : `@gsap/react` `useGSAP` est le hook recommandé (Aceternity). Compatible React 18 : supposé, non vérifié sur la fiche npm.
- Poids gzip : non trouvé de source fiable. Ordre de grandeur supposé : cœur environ 25-30 ko + ScrollTrigger environ 10-12 ko.
- iOS Safari, constaté sur le forum GreenSock :
  - `ScrollTrigger.config({ ignoreMobileResize: true })` (3.10+) évite les refresh dus à la barre d'adresse. Mais GreenSock dit qu'empêcher totalement le resize sur téléphone est « impossible » sans perdre d'autres fonctions.
  - `refresh()` pendant l'inertie arrête le scroll : le resize est volontairement retardé.
  - `normalizeScroll` : décrit par GreenSock comme « best attempt » contre des bugs iOS. Il peut en créer d'autres. Conseil officiel : le laisser désactivé par défaut. Bug ouvert en 3.14.2 : après avoir tiré au-delà du bas de page, le premier swipe vers le haut s'arrête trop tôt (non corrigé dans le fil).
  - D'un autre côté, un utilisateur dit que sans normalizeScroll, ses sections épinglées et scrubbées sautent sur iOS. Donc : le pin sur iOS est fragile avec ou sans.
  - Un cas résolu en mettant `pinType: 'fixed'` sur les éléments épinglés.
  - Conseil de GreenSock : le smooth scroll est généralement à éviter sur mobile, sauf pin/parallaxe/WebGL lourds.
- Verdict : puissant, mais c'est exactement la zone qui a cassé la version précédente (pin + scrub + iOS).

## 2. Motion (motion.dev, ex framer-motion)
- Licence MIT, indépendant de Framer (Aceternity). Import `motion/react`. Version actuelle : non trouvée (les sources parlent de « Motion v12 »).
- `useScroll` renvoie position et progression 0-1. `scroll()` est la version vanilla. Motion utilise le `ScrollTimeline` natif quand c'est possible (« fully hardware-accelerated »), sinon bascule en JS. Le support de ViewTimeline est « à venir » sur la page (motion.dev/docs/react-scroll-animations). Rien sur iOS sur cette page.
- Poids gzip (motion.dev, Rollup) : composant `motion` 43 ko complet ; environ 5 ko pour le rendu initial avec `m` + `LazyMotion`, +24 ko pour `domAnimation` ; `useAnimate` mini 3,3 ko. Taille de `useScroll` : non trouvée.
- Pas d'épinglage : il faut du `position: sticky` + une section haute, ce qui est le bon choix sur iOS de toute façon.
- Compatible React 18 : oui (supposé, très courant).

## 3. Lenis
- MIT, darkroom.engineering. Version lue : 1.3.18 (README jsDelivr).
- `syncTouch` est `false` par défaut, donc sur iPhone Lenis laisse le scroll natif. La doc avertit que `syncTouch` « peut être instable sur iOS<16 ». Limites : position: fixed peut lagguer sur Mac pré-M1 ; Safari plafonne à 60 fps.
- Verdict : sans syncTouch, Lenis ne fait rien sur iPhone et ne sert qu'au bureau. Avec syncTouch, on remplace l'inertie native par une imitation. À éviter sur ce site : l'accueil n'en a pas besoin. Un utilisateur GreenSock est passé à Lenis pour calmer le jitter, mais en ajoutant `pinType: 'fixed'` : le gain venait du réglage.

## 4. CSS natif
- Safari 26.0 (15/09/2025) : `animation-timeline: view()` + `animation-range` confirmés par WebKit. `scroll()` : non mentionné sur cette page, mais le guide WebKit « A guide to Scroll-driven Animations with just CSS » existe (non lu en entier).
- Selon buildmvpfast (2026) : Chrome/Edge 115 (07/2023) ; Safari 26 (09/2025), animations hors thread principal en 26.4, bugs de progression corrigés en 26.5 ; Firefox 152 (06/2026) toujours derrière un flag ; support global 82,58 %. Source secondaire : à recouper sur caniuse.
- Bonnes pratiques : animer seulement `transform` et `opacity` (compositeur), et envelopper dans `@supports (animation-timeline: view())` pour que les éléments ne restent pas à `opacity: 0` ailleurs.
- Piège : un iPhone 16 sous iOS 18 ou moins n'a pas Safari 26. Il faut une version de secours (affichage statique ou IntersectionObserver). Part d'iPhones sous iOS 26 : non trouvée.
- View Transitions : sujet de navigation entre pages, pas du scroll. Non approfondi.
- Verdict : la meilleure base pour les apparitions (`view()`) et pour une rotation/ouverture simple liée au scroll, sans JS, sans pin-spacer.

## 5. React Three Fiber + drei ScrollControls
- R3F v8 va avec React 18, v9 avec React 19 (doc R3F). Donc pour ce site : `@react-three/fiber@8`. Version de drei compatible : non trouvée dans la doc, supposé drei v9.
- ScrollControls crée son propre conteneur scrollable (overflow) dans le canvas : c'est un scroll imbriqué, donc pas du scroll natif de la page. Fils discourse.threejs sur « scroll mobile iOS », « doesn't scroll over 3d model on mobile » et des soucis de ScrollControls (titres vus, non lus en détail).
- Poids : three + r3f dépassent largement 100 ko gzip (supposé, non mesuré). Il y a aussi le coût GPU/batterie sur mobile.
- Verdict : non. Un ordinateur en CSS 3D (`transform: rotateX`, `perspective`) avec des captures d'écran suffit et reste fluide.

## 6. Skills pour agents
- **greensock/gsap-skills** (officiel, MIT) : 8 skills (gsap-core, timeline, scrolltrigger, plugins, utils, react, performance, frameworks). Install : `npx skills add https://github.com/greensock/gsap-skills`. Pas de partie mobile/iOS dans le README ; date de publication non trouvée. Bon pour éviter les erreurs d'API et de cleanup React (useGSAP, context).
- **transitions.dev** (Jakubantalik) : 5 skills (transitions-dev, polish, agent, ui-generation, refine-live). Ce sont des transitions CSS d'interface (modales, toasts, tooltips), pas du scroll. Scores Tessl : 68 à 71 (qualité 86-89 %), transitions-dev « Invalid ». Licence non indiquée. Utile pour le polish, pas pour l'ordinateur.
- **Motion AI Kit** (motion.dev/ai-kit) : skill `/motion` (docs + bonnes pratiques) gratuit. Le reste (recherche dans 520+ exemples, Performance Doctor qui note S à F le coût de rendu, MCP) est dans Motion+ payant. Prix non indiqué. Le Performance Doctor est pertinent pour ton cas (jank iOS) mais payant.
- **React Bits** : licence MIT + Commons Clause (gratuit usage perso et commercial). Install via shadcn ou jsrepo. Contient 33 « scroll reveals » en texte. Dépendances (gsap/motion) : non confirmées sur la page. Variantes Tailwind (TW) et CSS : prendre la variante CSS.
- Skills génériques sur skills.sh (motion, elite-gsap, etc.) : de tiers, qualité non vérifiée. Ne pas installer sans lire.

## Recommandation (15 lignes)
1. Pile : **CSS natif scroll-driven (view()/scroll()) pour tout**, et **Motion (`m` + LazyMotion, import minimal) uniquement pour le secours** quand `animation-timeline` n'est pas supporté. Une seule bibliothèque réelle. GSAP seulement si le CSS ne suffit pas pour l'ordinateur.
2. Ordinateur : section haute (par ex. 250-300svh) avec un enfant `position: sticky; top: 0`, pas de JS de pin. Écran en CSS 3D (`perspective`, `rotateX`) piloté par `animation-timeline: view()` ou `scroll()`.
3. Hauteurs : utiliser `svh` ou `lvh` fixes pour la section, jamais `100vh` pour un pin ; ne pas redimensionner au scroll.
4. N'animer que `transform` et `opacity`. `will-change` seulement pendant l'animation, sur 1-2 éléments.
5. Garder le scroll natif : pas de Lenis, pas de ScrollSmoother, pas de normalizeScroll, pas de scroll-snap sur l'accueil.
6. Si GSAP est retenu : `ignoreMobileResize: true`, `pinType: 'fixed'`, pas de `refresh()` manuel pendant le scroll, `useGSAP` pour le nettoyage, et pas de pin court-circuité par `scrub` + snap.
7. Apparitions : `view()` avec `animation-range: entry 0% entry 40%` dans un `@supports`, contenu visible par défaut sans support.
8. `prefers-reduced-motion` : désactiver toutes les animations liées au scroll.
9. Tester sur un vrai iPhone 16 en iOS 26.x (barre d'adresse repliée et dépliée), plus un iPhone sous iOS 18 pour le secours.
10. Éviter : R3F/drei, ScrollControls, pin 100svh + scrub, smooth scroll sur mobile, animations de `height/top/margin`, plusieurs bibliothèques de scroll à la fois.
11. Skills : seulement `greensock/gsap-skills` si GSAP entre dans le projet ; sinon aucun skill de plus, les règles ci-dessus suffisent.

## Priorités
- Critique : abandonner pin 100svh + scrub + Lenis ; prototyper l'ordinateur en sticky + CSS 3D ; test iPhone réel.
- Haute : version de secours pour Safari < 26 ; `@supports` et `prefers-reduced-motion`.
- Moyenne : vérifier caniuse (scroll()/view()) et la part d'iOS 26 ; relire la licence GSAP si utilisée ; lire le guide WebKit.
- Basse : tester `/motion` du Motion AI Kit gratuit ; transitions.dev pour le polish.

## Sources
- https://cdn.jsdelivr.net/npm/gsap@3.15.0/README.md
- https://github.com/greensock/gsap-skills
- https://gsap.com/community/forums/topic/45397-normalizescroll-momentum-killed-after-attempting-to-scroll-past-page-bottom-ios-safari/
- https://gsap.com/community/forums/topic/35475-scrolltriggerscrollsmoother-normalizescroll-ignoremobileresize/
- https://gsap.com/community/forums/topic/31568-scrolltrigger-in-ios/
- https://motion.dev/docs/react-scroll-animations
- https://motion.dev/docs/react-reduce-bundle-size
- https://motion.dev/ai-kit
- https://ui.aceternity.com/blog/motion-vs-gsap-for-react
- https://cdn.jsdelivr.net/npm/lenis@1.3.18/README.md
- https://webkit.org/blog/17333/webkit-features-in-safari-26-0/
- https://www.webkit.org/blog/17101/a-guide-to-scroll-driven-animations-with-just-css/
- https://www.buildmvpfast.com/blog/css-scroll-driven-animations-replace-js-2026
- https://r3f.docs.pmnd.rs/getting-started/installation
- https://discourse.threejs.org/t/scroll-mobile-ios/50237
- https://tessl.io/registry/skills/github/Jakubantalik/transitions.dev
- https://github.com/DavidHDev/react-bits
