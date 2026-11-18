# 05 — Créer le besoin sur la page d'accueil Viktra

Recherche du 19/11/2026. Pages consultées le jour même (citations < 15 mots, verbatim). Principe : « vendez-moi ce stylo » — on ne vante pas le site, on fait vivre au commerçant le moment où un client le cherche (« signez ici »), et il constate lui-même ce qui manque.

Point de départ dans le code : `app/(viktra)/services/v2/page.tsx` contient déjà ce principe (`components/v2/SearchCheck.tsx` ouvre la vraie recherche Google métier + ville, `DayStrip.tsx` et `Storefront.tsx` montrent un message reçu à 22 h 47, marqués « Exemple fictif »). Les propositions ci-dessous partent de là au lieu de tout refaire.

---

## 1. Comment 11 acteurs créent le besoin

| # | Qui (pays) | Accroche / phrase qui crée le besoin | Outil gratuit / preuve | Ce qu'on en retient |
|---|---|---|---|---|
| 1 | [Simplébo](https://www.simplebo.fr/) (FR, sites pour TPE) | « Dépassez vos concurrents sur Google Maps grâce à une fiche Google optimisée. » | « Faire un audit de visibilité » (fait par un humain). Avant/après client : « Je suis passée de la 18ᵉ place au top 3 sur Google » | Le concurrent comme déclencheur. Avant/après chiffré, mais tiré d'un vrai client. |
| 2 | [Solocal / PagesJaunes](https://www.solocal.com/) (FR) | « Votre établissement est-il bien visible sur internet ? » | Bouton principal du hero : « Vérifier la visibilité de votre établissement » (audit gratuit Google, Facebook, PagesJaunes) | La question dans le hero, le test comme action n°1, avant même le devis. |
| 3 | [localsearch](https://www.localsearch.ch/fr) (CH, local.ch/search.ch) | « Êtes-vous bien référencé sur Internet? » | Test rapide « Où vous situez-vous? », check « Vous trouve-t-on en ligne? », calculateur de rentabilité | Trois petits tests plutôt qu'un long formulaire. Référence suisse que vos prospects connaissent. |
| 4 | [Partoo](https://www.partoo.co/fr/) (FR, fiches multi-établissements) | « Vous pilotez votre réputation au lieu de la subir. » | « Testez votre visibilité sur Google » | Même mécanisme que Solocal, côté réseaux d'enseignes. |
| 5 | [MW Agency](https://mwagency.ch/creation-site-internet-nyon/) (CH, Nyon) | « Sans SEO local, vos concurrents apparaissent à votre place sur Google. » | « Voir mon futur site gratuitement » : maquette préparée avant le rendez-vous | Concurrent direct à Nyon. La maquette gratuite est leur « signez ici ». Phrases fortes mais génériques (« Un site qui ne convertit pas est un coût »). |
| 6 | [Clic Atelier](https://clicatelier.ch/) (CH) | « Vos clients vous trouvent sur Google, voient vos tarifs et vous appellent. » | Aucun outil. Prix en H1 : « Votre site internet dès 490 CHF. » | Décrit le parcours du client en une phrase. Prix d'appel plus bas que Viktra (690 €), à connaître. |
| 7 | [Obat Studio](https://www.obat.fr/studio/) (FR, bâtiment) | « Un visiteur convaincu doit pouvoir vous contacter sans chercher » | Mise en avant des « Photos avant/après de vos chantiers » | Le besoin vu depuis le client final (« veut savoir à qui il a affaire »). |
| 8 | [Lucas Fonseque](https://lucasfonseque.fr/) (FR, freelance Toulouse) | « Votre site a vieilli ou ne vous ressemble plus. » / « Un site qui casse sur téléphone non plus. » | Pas d'outil gratuit : analyse de site payante (250 € HT) | Le freelance seul nomme des défauts que le commerçant reconnaît chez lui. |
| 9 | [Votre Site Pro](https://votresitepro.be/) (BE, Bruxelles) | « Pas besoin d'être l'Atomium ou la Grand Place pour recevoir des visiteurs » | Avant/après : « De 32ème à 12ème sur Google » | Accroche locale et légère, ancrée dans la ville. |
| 10 | [Digitad](https://digitad.ca/conception-site-web/) (QC) | « Votre site web actuel vous demande-t-il plus d'énergie qu'il ne vous rapporte de clients? » | « Évaluation gratuite » dans l'en-tête | Question qui vise celui qui a déjà un site (cas globalpronet). |
| 11 | [H1site](https://h1site.com/) (QC, Vaudreuil-Dorion) | « Une PME de la région n'a pas les mêmes besoins qu'une entreprise de Montréal. » | « L'audit SEO le plus complet pour le prix d'un café » (dès 1 $) + outils SEO gratuits | Outil quasi gratuit comme porte d'entrée, positionnement « local contre la grande ville ». |

### Ce qui revient
- **La question dans le hero** (Solocal, localsearch, Digitad) : le visiteur répond dans sa tête avant de lire la suite.
- **Le test gratuit comme bouton principal** (Solocal, Partoo, localsearch, H1site) : chez les gros acteurs, c'est un formulaire qui sert surtout à capter un contact. Pour un commerçant méfiant, un test qui demande nom + téléphone avant de montrer un résultat ressemble à un piège.
- **Le concurrent** (Simplébo, MW Agency) : levier le plus fort, à condition de le faire constater au visiteur au lieu de l'affirmer.
- **L'avant/après chiffré** n'est crédible que tiré d'un client réel (Simplébo, Votre Site Pro). Viktra n'en a pas encore : à garder pour globalpronet après la mise en ligne, avec son accord [à demander].
- Personne dans la zone (Pays de Gex, Nyon) ne propose un test **instantané, sans formulaire, sur la vraie recherche Google**. C'est la place à prendre.

---

## 2. Faits sourcés réutilisables

Seuls ces faits peuvent apparaître sur le site. Formulation conseillée en dernière colonne.

| Fait | Source (date) | Utilisable ainsi |
|---|---|---|
| Google classe les sites d'après leur **version mobile** : « Google utilise la version mobile du contenu d'un site » pour « l'indexation et le classement ». | [Google Search Central, indexation mobile first](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing?hl=fr) (mise à jour 20/02/2026) | « Google juge votre site sur sa version téléphone. » |
| Les entreprises aux informations « complètes et exactes » sont « plus susceptibles d'apparaître dans les résultats de recherche locaux ». Les infos citées : horaires (y compris exceptionnels), adresse. | [Aide Google Business Profile, classement local](https://support.google.com/business/answer/7091?hl=fr-CA) (consultée 19/11/2026, pas de date affichée) | « Google l'écrit lui-même : une fiche complète a plus de chances d'apparaître. » |
| Les horaires aident les clients à savoir « quand ils peuvent vous rendre visite ». Les horaires exceptionnels confirmés rendent les horaires plus fiables aux yeux des clients. | Même page + [aide Google, horaires exceptionnels](https://support.google.com/business/answer/6303076) | Pour la section fiche Google (150 €) et le suivi (jours fériés). |
| **91 %** de la population (12 ans et +) possède un smartphone en France ; 74 % ont acheté en ligne dans les 12 derniers mois. | [Arcep, Baromètre du numérique 2026](https://www.arcep.fr/uploads/tx_gspublication/barometre-du-numerique-edition-2026_INFOGRAPHIE.pdf) (Crédoc, terrain juin 2025, 4 145 personnes ; communiqué du [09/02/2026](https://www.arcep.fr/actualites/actualites-et-communiques/detail/n/equipements-et-usages-du-numerique-090226.html)) | « 9 Français sur 10 ont un smartphone (Arcep, 2026). » Source citée en petit. |
| 97 % des consommateurs lisent des avis sur les commerces locaux ; 54 % vont sur le **site** du commerce après avoir lu des avis positifs ; Google reste la 1ʳᵉ source d'avis (71 %). 45 % utilisent des outils d'IA pour des recommandations locales. | [BrightLocal, Local Consumer Review Survey](https://www.brightlocal.com/research/local-consumer-review-survey/) (11/02/2026) | **Échantillon américain (1 002 personnes).** Ne pas écrire « en France ». Utilisable en argumentaire ou en rendez-vous, pas en hero. |
| L'API PageSpeed Insights « can be used with or without an API key » (clé recommandée pour un usage fréquent, clé gratuite). | [Google, PageSpeed Insights API](https://developers.google.com/speed/docs/insights/v5/get-started) (mise à jour 28/08/2025) | Base technique du mécanisme B ci-dessous. |

### Écartés (non vérifiables aujourd'hui)
- « 76 % des recherches "près de moi" mènent à une visite dans les 24 h » : étude Google 2016, États-Unis ; la page Think with Google redirige désormais vers une page générique. Introuvable à la source.
- « 50 % des recherches locales sur smartphone mènent à une visite dans la journée » : étude Google/Ipsos de janvier 2014, [PDF encore en ligne](https://www.thinkwithgoogle.com/_qs/documents/2940/how-advertisers-can-extend-their-relevance_yaSNdcu.pdf), mais 12 ans d'âge et pays non précisé. Trop vieux.
- « Recherches sans "near me" : +150 % » : [page Think with Google](https://thinkwithgoogle.com/data/local-search-statistics) sans date ni méthode.
- « 46 % des recherches Google sont locales » : chiffre repris partout, aucune source primaire.
- Les chiffres de la page [Google Business Profile FR](https://business.google.com/fr/business-profile/) (vues, % mobile) sont un exemple d'annonceur, pas une statistique.
- Suisse : pas trouvé de chiffre OFS récent sur l'usage du smartphone pour chercher un commerce [à vérifier si besoin pour Nyon/Genève].

**Conséquence** : il n'existe pas de chiffre sérieux, récent et local qui dise « vous perdez X clients ». Le besoin doit donc venir de ce que le visiteur constate lui-même (ses résultats Google, son site sur téléphone, ses propres horaires), pas d'une statistique.

---

## 3. Propositions pour Viktra

### 5 accroches de hero (H1 + ligne sous le titre)

1. **« Ce soir, quelqu'un cherchera votre métier à Divonne. Que trouvera-t-il ? »**
   Sous-titre : « Tapez votre métier et votre ville ci-dessous. Vous verrez ce que voit votre prochain client. »
   → Pose la scène « signez ici ». Ville à adapter par page (Gex, Nyon…).

2. **« Cherchez votre commerce sur Google, comme un client. »**
   Sous-titre : « Si vous n'apparaissez pas, ou mal, c'est ce que je corrige. Site dès 690 €, fiche Google dès 150 €. »
   → La plus directe. Proche de l'actuelle v2, avec les prix tout de suite.

3. **« Vous fermez à 19 h. Sur Google, on vous cherche encore. »**
   Sous-titre : « Votre site et votre fiche Google répondent aux clients pendant que la boutique est fermée. »
   → Reprend le slogan « Ouvert, même quand vous êtes fermé. » sans le répéter.

4. **« Avant de venir, vos clients regardent vos horaires sur leur téléphone. Les y trouvent-ils ? »**
   Sous-titre : « Google l'écrit lui-même : une fiche complète a plus de chances d'apparaître. Je la remplis avec vous. »
   → Seule accroche qui s'appuie sur un fait sourcé (aide Google, lien en bas de section).

5. **« Ouvrez votre site sur votre téléphone. C'est cette version que Google juge. »**
   Sous-titre : « Si le texte est minuscule ou que le numéro ne s'appelle pas d'un doigt, vos clients le voient aussi. »
   → Pour ceux qui ont déjà un site (refonte). Fait sourcé : indexation mobile Google.

Bouton principal pour toutes : « Écrire à Adel sur WhatsApp ». Bouton du test : « Voir ce que voit mon client ».

### 3 mécanismes « signez ici »

**A. « Le test du client » (amélioration de `SearchCheck`, 10 secondes)**
- Le visiteur tape son métier, choisit sa ville, touche « Voir ce que voit mon client ». Deux onglets s'ouvrent au choix : Google et Google Maps (`https://www.google.com/maps/search/?api=1&query=...`, lien public, sans API).
- À son retour sur la page, trois cases à cocher, sans formulaire ni coordonnées :
  « Je suis dans les 3 commerces affichés sur la carte. »
  « Mes horaires et mon numéro s'affichent. »
  « Mon site s'ouvre bien sur mon téléphone. »
- Ce qu'il découvre : une phrase selon ses réponses, par exemple pour une case non cochée « Les commerces affichés avant vous sont ceux que vos clients appellent en premier. C'est la fiche Google qui se joue ici (dès 150 €). » Puis le bouton WhatsApp, avec le message prérempli : « Bonjour Adel, j'ai fait le test pour [métier] à [ville]. »
- Honnête : rien n'est simulé, c'est sa vraie recherche, ses propres réponses. Réalisable en un composant client Next.js (état local, aucune donnée envoyée).

**B. « Votre site sur un téléphone » (pour ceux qui ont déjà un site, environ 20 secondes)**
- Le visiteur colle l'adresse de son site, touche « Vérifier sur mobile ».
- Une route Next.js (`app/api/check/route.ts`) fait deux choses gratuites : télécharger la page d'accueil pour y chercher des éléments simples (lien `tel:`, balise `viewport`, HTTPS, horaires, nom de la ville dans le titre), et appeler l'API PageSpeed Insights en mode mobile (sans clé, ou clé Google gratuite en variable d'environnement, jamais dans le code ni la conversation).
- Ce qu'il découvre : la capture de son site en version téléphone (fournie par PageSpeed) et une liste de 5 lignes en oui/non, par exemple « Votre numéro ne s'appelle pas d'un doigt : il n'y a pas de lien d'appel. » Aucun score inventé, seulement des constats vérifiables et le lien vers le rapport PageSpeed complet.
- Limites : PageSpeed met 10 à 30 s, quota limité sans clé ; prévoir un message d'attente et un cache. Certains sites bloquent la lecture (le dire simplement : « Je n'ai pas pu lire ce site, envoyez-le moi sur WhatsApp »).

**C. « Votre journée » (évolution de `DayStrip`, 10 secondes)**
- Le visiteur règle deux curseurs : son heure d'ouverture et de fermeture (et coche ses jours de fermeture).
- Ce qu'il découvre, calculé à partir de ses seuls chiffres : « Votre boutique est fermée 13 h sur 24, et le dimanche. Pendant ces heures, seuls votre site et votre fiche Google répondent à ceux qui vous cherchent. » La bande se colore heure par heure.
- Honnête : aucune statistique, c'est sa propre semaine. Le message à 22 h 47 de la v2 reste marqué « Exemple fictif ».
- Réalisable en pur composant client, sans serveur.

### Règles de rédaction (skill anti-ia)
- Pas de chiffre dans un bloc « gros chiffres ». Le 91 % Arcep, s'il sert, va dans une phrase avec la source en petit.
- Pas de « boostez votre visibilité », pas de faux contraste (« ce n'est pas qu'un site, c'est… »), pas de triade.
- Les concurrents MW Agency et Clic Atelier écrivent des phrases de principe (« un site qui ne convertit pas est un coût »). Viktra se distingue en faisant constater, pas en affirmant.

---

## Résumé (12 lignes)

1. Les gros acteurs (Solocal, localsearch, Partoo) créent le besoin par une question en hero et un test de visibilité.
2. Leurs tests servent surtout à capter un contact : formulaire avant résultat.
3. Les agences locales (MW Agency Nyon, Clic Atelier) affirment le besoin par des phrases de principe, sans outil instantané.
4. MW Agency offre une maquette gratuite avant rendez-vous ; Clic Atelier affiche « dès 490 CHF » en H1.
5. Les avant/après chiffrés ne valent que s'ils viennent d'un vrai client : Viktra en aura un avec globalpronet [à demander].
6. Faits solides : Google classe sur la version mobile (doc 02/2026), fiche complète = plus de chances d'apparaître (aide Google).
7. Arcep 2026 : 91 % des Français ont un smartphone. BrightLocal 2026 : 54 % visitent le site après des avis positifs (échantillon US).
8. Les chiffres « near me » qui circulent (76 %, 46 %) n'ont plus de source vérifiable : écartés.
9. Donc le besoin doit venir de ce que le visiteur constate lui-même, pas d'une statistique.
10. Mécanisme A : test sur la vraie recherche Google et Maps, 3 cases, phrase adaptée, WhatsApp prérempli.
11. Mécanisme B : analyse de son site sur mobile via PageSpeed (gratuit) + 5 constats oui/non.
12. Mécanisme C : ses horaires sur une bande de 24 h, « fermé 13 h sur 24, seuls votre site et votre fiche répondent ».

## Recommandation

Garder la structure de la v2 et passer en production l'accroche n°1 (« Ce soir, quelqu'un cherchera votre métier à Divonne. Que trouvera-t-il ? ») avec le mécanisme A juste dessous : c'est le « signez ici » le plus pur, il est vrai à 100 %, ne coûte rien, ne demande aucune donnée et prolonge un composant déjà écrit. Ajouter C plus bas sur la page (il porte le slogan). Garder B pour la page `/services/site-vitrine` ou la prospection des commerces qui ont déjà un site : c'est le plus utile en rendez-vous, mais il demande une route serveur, un cache et une gestion d'erreurs.
