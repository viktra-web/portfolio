# 08 - Entrées de portfolios (hero, ordinateur, scroll) et positionnement « site ou application pour tous »

Date : 19/11/2026. Recherche faite à distance : je n'ai pas de navigateur, donc je lis le texte et le code des pages, pas le rendu visuel. Chaque fiche dit ce qui est constaté (lu sur la page) et ce qui est supposé.

## Avis franc

1. Je n'ai trouvé aucun portfolio dont l'entrée « un ordinateur s'ouvre au défilement » soit vérifiable depuis ici. Les listes Awwwards / Codrops sont bloquées ou vides pour mes outils (robots). Ce que je décris pour l'ordinateur est de la recherche technique, pas du constat.
2. Les portfolios primés sont presque tous faits par des « creative developers » pour des agences. Adel vend à tout le monde (entreprises, indépendants, particuliers). Il faut en retenir l'entrée, pas le ton.
3. Le plus transposable : une entrée courte (nom, rôle, une phrase, un bouton), puis un seul gros geste au scroll. Ne pas empiler les effets.
4. Pour l'ordinateur : le faire en HTML/CSS 3D + scroll (GSAP ScrollTrigger ou Motion), avec de vraies captures d'écran dans l'écran. Pas de scène WebGL complète : plus lourd, mauvais sur mobile, risque pour le SEO et le LCP. Choix à confirmer par un test, c'est mon avis.
5. Peu de projets n'est pas un problème si chaque projet est raconté (contexte, rôle, stack, résultat vérifiable). 3 à 4 cartes bien faites valent mieux que 10 vignettes.
6. Ne jamais mettre Globalpronet ni JSL Judo comme « réalisations » de site : l'un est de la rédaction SEO, l'autre n'est pas en ligne. Le dire tel quel.
7. Le gros risque n'est pas le manque de projets, c'est un hero trop long qui retarde le « appelez-moi ». Prévoir un bouton de contact visible dès l'entrée.
8. Contact en bas ou en bouton, pas de formulaire en haut (cohérent avec ses goûts).

## 1. Les 10 portfolios

Tous les URL ci-dessous ont répondu (contenu lu). Les prix Awwwards / Godly ne sont pas vérifiés : awwwards.com bloque la lecture automatique. Je ne cite donc aucun prix, sauf ce qui est écrit sur la page elle-même.

| # | Site | URL | Entrée (constaté) | Peu de projets / structure | Ce qui fait « pro » | Technique visible |
|---|---|---|---|---|---|---|
| 1 | Stefan Vitasović | https://www.stefanvitasovic.dev | Écran « Loading », puis grand titre « Stefan Vitasović / Creative Developer ». Sous-titre : « Design-driven creative developer focusing on motion and interactivity ». Case study Codrops : l'accueil sert d'écran d'accueil, on le quitte en défilant, les projets passent au premier plan. | Menu : Intro, Projects, About. Page projets en grille de vidéos WebGL. | Une phrase de positionnement, un titre précis (Lead Creative Developer chez 14islands, juré Awwwards depuis 2020), disponibilité freelance, e-mail et LinkedIn. | Next.js, Motion (ex Framer Motion), SCSS modules, Three.js / React Three Fiber, Vercel (source Codrops) |
| 2 | Cyd Stumpel | https://cydstumpel.nl | Titre « Creative Developer » en deux lignes, bandeau de disponibilité freelance (janvier 2026), accroche « I turn designs into rich experiences ». | Section « Selected work » avec une seule carte visible dans ce que j'ai lu (BROED, 2024). | Une preuve par ligne (accessibilité, enseignement, distinction), un projet choisi plutôt que beaucoup. | GSAP, Motion, Three.js affichés sur la carte. Animations pilotées par le scroll CSS et view transitions (avertissement navigateur sur la page). |
| 3 | Federico Pian | https://federicopian.com | Compteur « 0% », titre « Ciao, I'm Fede! », freelance creative developer et cofondateur d'un studio, localisation en en-tête. | Liste de projets : nom, type, année, une ligne, lien « Visit ». Grille de 8 vignettes. | Chaque projet est un client réel avec année et lien. Invitation « scroll swipe to discover ». | Images via Vercel (supposé : Next.js). Animations non vérifiables en texte. |
| 4 | Corentin Bernadou | https://corentinbernadou.com | Compteur « 0% », titre « Corentin Bernadou », sous-titre « Freelance Developer », « Available Q4, 2026 », bouton qui copie l'e-mail. | Menu : Featured Works, Archive, About. Une liste de projets (6 noms lus). | Disponibilité datée, e-mail en un clic, ton éditorial. | Site rendu côté client (JavaScript obligatoire). Techno précise : non trouvé. |
| 5 | Dennis Snellenberg | https://www.dennissnellenberg.com | Titre « Dennis Snellenberg », phrase « Helping brands to stand out in the digital era », salutations en plusieurs langues (probablement animées, non confirmé). | Projets récents en liste (catégorie + année) et lien « More work » (11). | Phrase orientée client, pas orientée techno. | Non précisée dans le texte lu : non trouvé. |
| 6 | Bruno Simon | https://bruno-simon.com | Monde 3D à conduire (voiture), pas de scroll. | Les projets se découvrent dans le monde 3D. Devlogs sur YouTube. | Code ouvert (MIT), expérience mémorable. | Three.js (TSL, WebGL ou WebGPU), Rapier (physique), Howler.js (son). |
| 7 | Henry Heffernan | https://henryheffernan.com | Seul constaté : titre « Portfolio 2022 », « Software Engineer based in NY », deux vidéos. Mon souvenir (non vérifié) : un ordinateur 3D dans une pièce dans lequel on entre. | Non vérifiable. | Non vérifiable. | Non trouvé. |
| 8 | Brittany Chiang | https://brittanychiang.com | Nom, « Frontend Engineer », « I build accessible, pixel-perfect experiences for the web. » Page unique à ancres. | À propos, Expérience (6 postes), Projets (4), Écrits (4). Peu de projets, bien décrits. | Sobriété, accessibilité (lien d'évitement, titres hiérarchisés), une seule couleur d'accent. | Next.js, Tailwind CSS, Vercel (indiqué en pied de page). Aucun effet lourd. |
| 9 | Rob Owen | https://robbowen.digital | « Hi, my name is Robb. », indice « Scroll », bouton « Hire me » dans l'en-tête (mail prérempli). | Ses 3 projets sont open source avec un lien chacun (SynthWave '84, Tornis, Rekishi). | Un projet à deux millions de téléchargements (chiffre lu sur la page) porte tout le portfolio. Bouton de contact toujours visible. | Non précisée. Défauts d'accessibilité relevés (lien « About my approach » vers /work, libellés dupliqués). |
| 10 | Lusion (studio) | https://lusion.co | « Bold Ideas, Brought to Life », « scroll to explore », « Play Reel », puis grille de projets, process, appel à l'action. | 12 études de cas, chacune taguée par discipline. | Reel vidéo, process expliqué, disciplines listées. | Non précisée dans le texte lu (3D, animation, WebGL supposés). |

Non analysable : https://www.aristidebenoist.com (page vide sans JavaScript, la phrase de présentation dit qu'il travaille pour entreprises, agences, startups et particuliers : bonne formulation « pour tous »). Awwwards, Jean Mazouni (robots) : non lus.

Piste technique pour l'ordinateur (non testée, à regarder) : le fil https://discourse.threejs.org/t/interactive-3d-portfolio-macbook-interface-terminal-navigation-built-with-r3f-three-js/87471 décrit un portfolio avec interface MacBook en React Three Fiber.

## Ce que j'en retire pour Viktra

- Premier écran : « Bonjour », nom, une phrase, deux boutons (Voir mes projets, Me contacter). Rob Owen et Cyd Stumpel montrent qu'un bouton contact ou une disponibilité datée dès l'entrée est normal.
- Un seul geste au scroll : l'ordinateur s'ouvre, l'écran affiche les projets. Stefan Vitasović : l'accueil est un écran qu'on quitte en défilant.
- Mobile : prévoir une version simple (écran fixe sans 3D, `prefers-reduced-motion` respecté). Stefan Vitasović lui-même passe en vidéo HTML5 sur mobile.
- Peu de projets : lignes « nom, type, année, une phrase, lien » (Federico Pian) ou 3-4 fiches détaillées (Brittany Chiang).

## 2. Cinq formulations de titre et sous-titre (vouvoiement, sans chiffre, sans ville)

Tous disent : vous avez besoin d'un site ou d'une application, contactez-moi.

1. Titre : « Un site ou une application ? Parlons-en. » / Sous-titre : « Je conçois et je développe votre site internet ou votre application mobile, de l'idée à la mise en ligne. Décrivez-moi votre besoin. »
2. Titre : « Vous avez un projet de site ou d'application. » / Sous-titre : « Je suis développeur web et mobile. Je le conçois, je le réalise et je le maintiens. Écrivez-moi pour en discuter. »
3. Titre : « Votre site internet, votre application, réalisés par un seul interlocuteur. » / Sous-titre : « Entreprise, indépendant ou particulier : dites-moi ce dont vous avez besoin, je vous réponds. »
4. Titre : « Du site vitrine à l'application mobile. » / Sous-titre : « Je développe ce dont vous avez besoin, quelle que soit votre activité. Contactez-moi, nous regardons votre projet ensemble. »
5. Titre : « Bonjour, je suis Adel, développeur web et mobile. » / Sous-titre : « Vous avez besoin d'un site ou d'une application ? Racontez-moi votre projet. »

Mon avis : la 5 pour l'entrée (elle porte le « bonjour » et le nom voulus), la 1 comme titre de la section services ou du SEO (balise title possible : « Création de site internet et d'application mobile - Viktra »). Je n'ai pas évalué l'effet SEO de ces titres, c'est à valider avec le skill `seo-local` / `seo-audit`.

Réserve : « de l'idée à la mise en ligne » et « je le maintiens » sont des promesses de service, à garder seulement si Adel les propose vraiment.

## 3. Montrer honnêtement peu de projets

Principe : une carte = un vrai projet, son statut exact, ce qu'Adel a fait. Rien d'inventé, aucun logo ni avis.

- **Bonee** (app de budget, co-développée, App Store + Google Play) : meilleure pièce. Écrire « co-développée avec [nom du co-développeur, à confirmer] », mon rôle précis [à demander à Adel], liens des stores. C'est la seule vraie preuve publique d'une application.
- **Viktra** (ce site) : étude de cas « comment j'ai conçu et construit mon propre site » : choix de stack, performance, accessibilité, SEO. Chiffres seulement s'ils sont mesurés (Lighthouse réel).
- **Parcours Kunagi, alternance de 2 ans** : une ligne de parcours, pas une carte de projet. Contenu connu : app React Native avec backend Laravel. Nom du client ou de l'app : [à demander], vérifier qu'il peut être cité. Ne pas écrire de livrable non confirmé.
- **JSL Judo** : « site réalisé, pas encore en ligne ». Soit capture avec la mention « maquette, mise en ligne à venir », soit ne pas le montrer avant publication. Je recommande la mention honnête avec capture, si le client est d'accord.
- **Globalpronet** : ne pas le mettre dans les réalisations. Le mettre dans « Rédaction et référencement » : « Réécriture des textes pour le référencement ». Aucun site à montrer.
- **Stack** : une ligne sobre (React, Next.js, .NET, React Native, Laravel, Azure). Pas de barres de pourcentage ni de « niveau ».
- **Projets perso** : à titre d'exemple seulement s'ils sont réels et en ligne.

Ton de la page : « Projets choisis » plutôt que « Mes réalisations » quand il y en a peu, puis une phrase simple : « Je démarre mon activité : voici ce que j'ai déjà construit, et comment je travaille. » Le démarrage assumé est plus crédible qu'une vitrine gonflée. Brittany Chiang (4 projets décrits), Rob Owen (3 projets, 1 fort) et Cyd Stumpel (1 carte) montrent que peu de projets passe quand chacun est précis.

Compléments crédibles sans avis client : démarche en 3 étapes, ce qu'Adel livre (code propre, hébergement, suivi), page tarifs claire si les prix sont décidés, mentions légales complètes. Les avis : ajouter seulement des avis réels, plus tard (le Google Business Profile de Viktra peut les collecter).

## Les 3 sites les plus inspirants pour l'entrée « ordinateur »

Aucun ne montre un ordinateur qui s'ouvre de façon vérifiée. Je les classe pour la structure, pas pour l'ordinateur :

1. **Stefan Vitasović** : l'accueil est un écran qu'on quitte en défilant, projets au premier plan, repli simple sur mobile (case study Codrops). Le plus proche du geste voulu.
2. **Cyd Stumpel** : entrée courte, bandeau de disponibilité, un projet choisi, animations liées au scroll en CSS moderne. Bon modèle de sobriété.
3. **Brittany Chiang** (pour le sérieux) ou **Bruno Simon** (pour le côté mémorable, code MIT lisible comme référence) : à choisir selon l'envie. Mon choix : Brittany Chiang pour l'équilibre « pro et lisible », car l'ordinateur doit mener vers un contact, pas être le sujet.

Pour l'ordinateur lui-même, chercher d'abord dans les démos MacBook en React Three Fiber (lien ci-dessus) ou refaire en CSS 3D. À tester sur un vrai iPhone.

## Liste priorisée

- **Critique** : ne pas présenter Globalpronet ni JSL Judo comme des sites réalisés en ligne ; indiquer le rôle réel sur Bonee.
- **Haute** : choisir la formulation 5 pour le hero ; bouton « Me contacter » visible dès le premier écran ; fallback mobile et `prefers-reduced-motion` ; confirmer avec Adel ce qu'il propose vraiment (maintenance, hébergement) avant d'écrire les promesses.
- **Haute** : demander à Adel : nom citable de l'app Kunagi, rôle exact sur Bonee, accord du client JSL Judo.
- **Moyenne** : prototyper l'ordinateur en CSS 3D + GSAP/Motion avec captures réelles ; mesurer LCP et poids.
- **Moyenne** : étude de cas Viktra avec mesures réelles.
- **Basse** : revoir Awwwards / Godly à la main dans un navigateur pour confirmer les prix et trouver un vrai exemple « ordinateur ».

## Sources (URL lues)

- https://www.stefanvitasovic.dev
- https://tympanus.net/codrops/2025/03/05/case-study-stefan-vitasovic-portfolio-2025/
- https://cydstumpel.nl
- https://federicopian.com
- https://corentinbernadou.com
- https://www.dennissnellenberg.com
- https://bruno-simon.com
- https://henryheffernan.com
- https://brittanychiang.com
- https://robbowen.digital
- https://lusion.co
- https://www.aristidebenoist.com
- https://www.brune-mathelie.fr (référence d'Adel : accueil avec dernières créations, témoignages, services, à propos, avantages, tarifs « à partir de » seulement sur deux services)
- https://www.awwwards.com/sites/douglus-creative-developer (portfolio à défilement horizontal, mention honorable 26/03/2026 ; URL du site non indiquée)
- https://discourse.threejs.org/t/interactive-3d-portfolio-macbook-interface-terminal-navigation-built-with-r3f-three-js/87471 (titre vu dans les résultats de recherche, page non lue)
