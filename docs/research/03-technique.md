# Recherche 03 — Technique (page offre Viktra)

Date : 18/11/2026. Base analysée : `origin/bascule-viktra` (tête `e104c7c`), comparée à `main` (`d85124c`).
Méthode : lecture du code + `next build` réel des deux branches dans des copies temporaires (`/tmp`), polices Google simulées (le réseau bloque fonts.googleapis.com ; les tailles JS et CSS ne changent pas). Aucun `.env*` lu, rien commité.

---

## 1. Inventaire

### Dépendances réellement utilisées par la page Viktra (`/services` sur la branche)

| Paquet | Utilisé par | Où |
|---|---|---|
| `next` 14.2.35, `react` 18 | tout | — |
| `motion` 14.9 | `Phone.tsx` (`motion/react-m`), `MotionProvider.tsx` (`LazyMotion`, `MotionConfig`), `motion/runtime.ts` (`inView`, `stagger`, `motion/mini` `animate`) | chunks asynchrones |
| `@vercel/analytics` | `app/layout.tsx` (racine, toutes les pages) | sans cookie |
| `next/font/google` | `Schibsted_Grotesk` (layout `/services`) **et** Space Grotesk, IBM Plex Sans, IBM Plex Mono (layout racine, portfolio) | auto-hébergées par Next |

Non utilisés par la page Viktra : `next-intl`, `react-icons`, `simple-icons` (portfolio seulement). `gsap` et `lenis` sont bien retirés sur la branche (`package.json` et imports).

### Poids JS mesuré (`next build`, gzip)

| | `main` : `/services` (ancienne page GSAP + Lenis) | Branche : `/services` (Viktra) |
|---|---|---|
| First Load JS (Next) | 100 kB | **92,3 kB** |
| Chunk de la page | 4,1 kB | 4,8 kB |
| JS chargé après coup (async) | ~50 kB (GSAP + ScrollTrigger + Lenis) | **~41 kB** : Story 3,4 + motion cœur 13,2 + `domAnimation` 18,2 + runtime reveal 2,8 + polyfill 3,2 |
| CSS | services.css + lenis.css | product.css 7,0 kB gz + **globals.css du portfolio 2,7 kB gz** |
| `/services/confidentialite` | 97,5 kB | 96,3 kB, mais chunk de route **8,9 kB** (vs 1,3 kB) |

Le socle de 87,5 kB (React + runtime Next) est incompressible en Next 14. La page est déjà légère ; le gain restant est surtout le JS asynchrone de `motion` (~34 kB gz).

### Composants client / serveur

- **Serveur** : `Hero`, `Pricing`, `About`, `Work`, `Faq`, `Contact`, `Footer`, `JsonLd`, `Logo`, `WordMask` (rend un `RevealGroup` client).
- **Client** : `StoryLazy` (`next/dynamic`, SSR conservé), `Story`, `Phone`, `MotionProvider`, `motion/reveal` (`RevealGroup`), `StickyBar`, `ContactForm`, `BesoinSelect`.
- Bonne frontière : l'action serveur et les données passent en props depuis `Contact` (serveur), `next/link` et `next/image` évités volontairement pour ne pas partager de chunk avec le portfolio.

---

## 2. Performance et accessibilité

### Scroll sur iPhone 16 (priorité)

Points solides :
- **Plus aucun scroll détourné** : Lenis (lissage JS du scroll, le pire cas sur iOS) et ScrollTrigger disparaissent avec la bascule. Gros progrès par rapport à `main`.
- **Aucun écouteur `scroll`, aucun `requestAnimationFrame`** dans les composants : tout passe par `IntersectionObserver` (Story `rootMargin: -50% 0`, StickyBar, reveals via `motion` `inView`).
- Animations liées au scroll en **CSS natif** (`animation-timeline: view()`, sous `@supports` et `prefers-reduced-motion: no-preference`) : soleil, ligne des étapes, inclinaison du téléphone. Uniquement `transform`, donc composité. Sur iOS 26 (iPhone 16 à jour) elles tournent ; sur un iOS plus ancien, elles sont simplement absentes.
- Pas de `backdrop-filter`, pas de `filter: blur`, pas de `background-attachment: fixed`.
- Section Story épinglée : `position: sticky` + déclencheurs de `70svh`. Le parent `.pd` utilise `overflow-x: clip` (pas `hidden`), donc le sticky fonctionne sur Safari.
- `svh` partout (pas de `100vh` qui saute avec la barre Safari).

Points à surveiller :
- `Phone.tsx` anime `clip-path` (texte de recherche) : non composité sur WebKit, mais l'élément est petit et l'animation ne se déclenche qu'au changement de chapitre, pas à chaque frame. Acceptable.
- `RevealGroup` masque au montage les éléments sous la ligne de flottaison puis les révèle : si le chunk tarde, le contenu reste visible (repli prévu). Bon.
- `html:has(.pd) { scroll-behavior: smooth }` + `scrollIntoView({behavior:"smooth"})` : cohérent, désactivé en reduced-motion.

### Core Web Vitals probables (estimation statique, à confirmer sur la préversion Vercel)

- **LCP** : le H1 du hero (texte, rendu serveur, page statique). Police unique Schibsted en `display: swap` avec fallback ajusté. Bon, **sauf** que les 3 familles du portfolio (layout racine) sont aussi préchargées sur `/services` : téléchargements inutiles en concurrence avec la police utile.
- **CLS** : images avec `width`/`height`, barre fixe animée en `transform`, soleil en `transform`. Faible.
- **INP** : seul le sélecteur de métier re-rend `Phone` ; léger.

### Reduced motion

Couvert à trois niveaux : CSS (`@media (prefers-reduced-motion)` sur toutes les animations, transitions remplacées par opacité), `MotionConfig reducedMotion="user"`, et `RevealGroup` qui ne fait rien si l'utilisateur réduit les animations. Rien à corriger.

### Accessibilité (relecture du code)

- OK : `lang="fr"`, cibles de 44 px, `:focus-visible`, texte masqué lisible (`WordMask` garde le texte complet en `.pd-sr`), téléphone en `role="img"` avec libellé, FAQ en `<details>`, barre fixe `aria-hidden` + `tabIndex=-1` quand cachée, formulaire avec `aria-invalid`, `aria-describedby`, focus sur le message d'état.
- Contrastes calculés : bouton blanc sur `#c4380f` 5,4:1, gris `#4a5a64` sur aube 4,9:1, encre sur aube 11:1. Le rouge `--pd-sun` n'est jamais utilisé comme couleur de texte (sinon 3,6:1 sur aube, insuffisant).
- **Écart avec la priorité d'Adel** : l'action principale n'est pas WhatsApp. Hero = « Demander un devis gratuit » (formulaire) + numéro ; barre fixe mobile = « Appeler Adel » + « Devis gratuit ». WhatsApp n'apparaît que dans l'encart contact, en bas de page.

---

## 3. SEO technique (branche)

| Élément | État | Remarque |
|---|---|---|
| `<title>` | « Création de site internet à Divonne-les-Bains \| Viktra » | OK |
| Description | présente | OK |
| Canonical | `https://www.adeldjahnit.com/services` | OK, couvre `?besoin=…` |
| Robots | indexable ; `/services/confidentialite` en `noindex` | `robots.ts` n'interdit rien, volontaire et correct |
| Sitemap | `/` et `/services` | OK, pas de `lastModified` (optionnel) |
| OG / Twitter | `app/services/opengraph-image.png` 1200×630 + alt, `summary_large_image` | OK |
| Redirection | `next.config.mjs` : `/product` → `/services`, `permanent: true` (308) | OK ; la query `?besoin=` est conservée ; `/product/bonee-*` reste servi |
| JSON-LD | `ProfessionalService` « Viktra » + `Person`, offres avec prix min. | Voir ci-dessous |

JSON-LD (`components/product/JsonLd.tsx`) :
- Bien : échappement `<`, `@id` stables, prix uniquement quand ils sont affichés, `areaServed` en `City` + `AdministrativeArea`.
- `founder` pointe vers `https://www.adeldjahnit.com/#adel-djahnit`, mais la page `/` ne déclare pas ce `Person` : la référence est complétée dans le même graphe, donc valide, mais le lien avec le portfolio n'existe pas côté `/`.
- Manquent : `image` (l'OG image suffit), `logo` (`/brand/viktra-symbol.svg` ou un PNG), éventuellement `priceRange`. Pas de `FAQPage` : normal, Google ne l'affiche plus pour ce type de site.
- Question de fond : la marque Viktra vit sur `adeldjahnit.com`. Domaine propre à Viktra : [à demander].

Après la bascule :
- L'ancienne image `/product/opengraph-image.png` renvoie 404 (aperçus WhatsApp déjà partagés). Négligeable.
- `/product` était `noindex` : rien à transmettre côté Google, la 308 sert aux liens partagés.

---

## 4. Risques de la bascule

1. **Historiques Git sans lien (bloquant).** `origin/bascule-viktra` part d'une racine `3fdbb4f`, `main` d'une racine `d85124c` : `git merge-base` ne renvoie rien. Une pull request vers `main` est impossible en l'état (« entirely different histories »). Les contenus de `93b6442` (branche) et `d85124c` (main) sont identiques, donc la correction est propre :
   `git rebase --onto origin/main 93b6442 bascule-viktra` puis push de la branche (force-push sur la branche seulement, jamais sur `main`).
2. **Envoi du formulaire en production.** Si `RESEND_FROM` n'est pas défini sur Vercel, l'expéditeur par défaut `onboarding@resend.dev` ne livre qu'à l'adresse du compte Resend. À vérifier dans Vercel (Settings → Environment Variables), sans coller de valeur dans le chat. Le repli `mailto` existe si l'envoi échoue.
3. **Lockfile désynchronisé.** `npm ci` échoue sur `main` et sur la branche (npm 10.9 : `@emnapi/*`, `@swc/helpers` manquants). Vercel utilise `npm install`, donc le déploiement passe, mais l'installation n'est pas reproductible.
4. **CSS et polices du portfolio sur la page Viktra.** `app/layout.tsx` charge `globals.css` (fond sombre `#10151a` sur `body`, styles `h1/h2/p/a` globaux) et précharge 3 familles. `.pd` réécrit tout, mais un oubli de style hérite du portfolio. En navigation client `/` → `/services`, le CSS déjà chargé reste en place (comportement Next 14).
5. **Next 14.** 14.2.35 contient les correctifs de sécurité de décembre 2025 sur les Server Actions ; la page expose une Server Action publique, donc suivre les correctifs 14.2.x. Pas de migration Next 15/16 nécessaire pour cette bascule.
6. **Formulaire : spam.** Voir section suivante.

### Sécurité du formulaire (`app/services/actions.ts`)

- Bien : validation serveur (longueurs, regex téléphone/email, options connues), pot de miel `entreprise_site` (succès simulé), texte brut uniquement (pas d'injection HTML), `reply_to` validé, timeout 10 s, aucun secret côté client, protection CSRF des Server Actions de Next 14 (vérification `Origin`/`Host`).
- Manque :
  - **aucune limite de débit** : un script peut envoyer en boucle et épuiser le quota Resend ;
  - **pas de piège temporel** (formulaire soumis en moins de 2-3 s = robot) ;
  - `nom` va dans le **sujet** du mail sans retrait des retours à la ligne / caractères de contrôle (Resend passe par JSON, risque faible, mais à nettoyer) ;
  - un robot qui poste directement sur l'action sans le champ pot de miel passe le filtre.
- Recommandation sans tiers : piège temporel (champ caché horodaté) + nettoyage `[\r\n\t\0-\x1f]` + limite par IP en mémoire (best effort, par instance) ; si le spam arrive, règle de limitation dans le pare-feu Vercel (disponibilité selon l'offre Vercel : [à vérifier]). Pas de captcha tiers.

### Checklist technique de bascule

- [ ] Rebaser `bascule-viktra` sur `origin/main` (point 1), ouvrir la PR.
- [ ] `npm install` puis commit `build: lockfile synchronisé` (vérifier ensuite que `npm ci` passe).
- [ ] Vérifier sur Vercel `RESEND_API_KEY`, `RESEND_FROM` (domaine vérifié), `CONTACT_TO` en Production et Preview.
- [ ] Sur la préversion Vercel de la PR, sur iPhone 16 : scroll complet, Story épinglée, sélecteur de métier, barre fixe, lien WhatsApp, appel, envoi réel du formulaire, erreur de validation, reduced-motion activé.
- [ ] `curl -I https://…/product` → 308 vers `/services` ; `/product?besoin=google` conserve la query ; `/product/bonee-1.webp` → 200.
- [ ] `/services` : canonical, OG (test d'aperçu WhatsApp), JSON-LD (Rich Results Test), `robots.txt`, `sitemap.xml`.
- [ ] Après la mise en ligne : Search Console → inspection de `/services`, demande d'indexation, sitemap renvoyé.
- [ ] Lighthouse mobile sur la préversion (LCP, CLS, TBT) et noter les chiffres.

---

## 5. Recommandation

**Garder la base `/product` (désormais `/services` sur la branche) et l'alléger. Ne pas repartir de zéro.**

Raisons : elle respecte déjà les conventions Next (Server Components par défaut, client minimal, metadata API, fichiers `opengraph-image`, `robots.ts`, `sitemap.ts`), elle n'a aucun scroll JS, tout le mouvement est déjà neutralisable, le build passe (lint + types), et elle est plus légère que l'ancienne page. Repartir plus simple ferait perdre la Story (le cœur de la page) pour gagner ~40 kB asynchrones qui ne bloquent pas l'affichage.

### Tâches priorisées

**P0, avant la PR**
1. Rebaser la branche sur `main` (historiques sans lien).
2. Vérifier les variables Resend sur Vercel.
3. Tester la préversion sur iPhone 16 (checklist ci-dessus).

**P1, dans la même PR ou juste après**
4. Mettre WhatsApp en action principale : bouton principal du hero et de la barre fixe mobile (`SERVICES_WHATSAPP_URL` existe déjà dans `lib/services.ts`), appel en secondaire, formulaire en bas. Texte et ordre à valider avec le skill `viktra-brand`.
5. Sortir les polices et `globals.css` du portfolio du layout racine : groupe de routes `app/(portfolio)/layout.tsx` pour `/` (polices + `globals.css`), layout racine réduit à `<html lang="fr">`, `<body>` et `<Analytics />`. Plus aucune police ni style du portfolio sur `/services`.
6. Formulaire : piège temporel, nettoyage du sujet, limite par IP.
7. `npm install` pour resynchroniser le lockfile.
8. `/services/confidentialite` : remplacer `next/link` par `<a>` comme dans le reste de la page (chunk de route 8,9 kB, probablement dû à `next/link`).

**P2, ensuite**
9. Retirer `motion` : remplacer les variantes de `Phone.tsx` par des transitions CSS pilotées par `data-active` (délais en `--i`), et `RevealGroup` par `IntersectionObserver` + `element.animate()` natif. Gain ~34 kB gz asynchrones, une dépendance de moins, même rendu.
10. JSON-LD : ajouter `logo` et `image`, déclarer le `Person` sur `/` (ou retirer l'`@id` partagé).
11. Page « Mentions légales » (éditeur, SIRET, hébergeur Vercel) liée dans le pied de page, dès que le SIRET existe (voir skill `viktra-admin`). Informations : [à demander].
12. Domaine propre à Viktra : [à demander] ; si oui, prévoir la redirection 301 et le canonical.

---

## Résumé

- Base analysée : `origin/bascule-viktra`. Build réel OK : `/services` = 92,3 kB First Load + ~41 kB asynchrones (motion), contre 100 kB + ~50 kB (GSAP/Lenis) aujourd'hui.
- Scroll iPhone : plus de Lenis ni d'écouteur `scroll`, animations CSS natives composées, reduced-motion couvert partout. Bon.
- **Bloquant** : la branche et `main` ont des historiques Git sans lien, PR impossible ; corriger par `git rebase --onto origin/main 93b6442`.
- À vérifier : `RESEND_FROM` sur Vercel (sinon mails non livrés), lockfile (`npm ci` échoue).
- SEO : canonical, OG, sitemap, robots, 308 `/product` → `/services` corrects ; JSON-LD à compléter (`logo`, `image`, `Person` sur `/`).
- Formulaire : validation et pot de miel OK, mais ni limite de débit ni piège temporel.
- WhatsApp n'est pas l'action principale (seulement en bas de page) : à corriger dans le hero et la barre fixe.
- Les polices et le CSS du portfolio sont chargés sur `/services` : isoler via un groupe de routes.
- Recommandation : garder la base `/product` et l'alléger (P0 rebase + tests iPhone, P1 WhatsApp, polices, formulaire, P2 retirer `motion`).
