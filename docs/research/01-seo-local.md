# Recherche 01 : SEO local pour la page offre Viktra

Date : 18/11/2026. Périmètre : la page offre Viktra. Version auditée : branche `bascule-viktra` (`app/services/page.tsx` + `layout.tsx`, composants `components/product/*`, `/product` redirigé en 301 vers `/services`). La version `/services` en ligne sert de point de départ (même URL, contenu remplacé).

Règles : aucun volume de recherche, aucune donnée de classement inventée. Ce qui n'a pas pu être vérifié est marqué [à vérifier].

Limites de la recherche :
- Les SERP ci-dessous viennent de l'outil de recherche web disponible ici, **pas d'une SERP Google.fr/Google.ch réelle ni d'un local pack**. À refaire à la main en navigation privée, localisé à Divonne puis à Genève [à vérifier].
- Le site en ligne n'a pas pu être lu en HTML brut (proxy bloqué) : le JSON-LD est audité depuis le code, pas depuis la page servie. Contrôle final à faire avec le Rich Results Test après déploiement.
- Pas d'accès à la Search Console, ni à des volumes (Keyword Planner, Semrush, etc.).

---

## 1. Mots-clés locaux

### Ce qu'on a vu dans les résultats (concurrence visible)

| Requête testée | Ce qui sort (extraits) | Lecture |
|---|---|---|
| création site internet Pays de Gex | Annuaires ([118712](https://www.118712.fr/fiches/WUFWXl5cGwY), [Gralon](https://www.gralon.net/annuaire/villes/ville-saint-genis-pouilly-101.htm), [PagesJaunes](https://www.pagesjaunes.fr/pros/09446335)), page partenaire Infomaniak d'une agence ([Too Be Web Sarl](https://www.infomaniak.com/fr/creer-un-site/professionnel/nos-agences-partenaires/5720)), profils [Malt](https://www.malt.fr/profile/atoumanesy1) et [graphiste.com](https://graphiste.com/rawr_studio), livrets des artisans et commerçants de [Gex](https://www.gex.fr/medias/2023/03/LIVRET-DES-ARTISANS-ET-COMMERCANTS-2023_03_27.pdf) | Pas de page d'agence locale dédiée et forte en tête. Requête prenable par une vraie page locale. |
| création site internet Divonne-les-Bains | Profils Malt ([1](https://www.malt.fr/profile/sofianeatmani)), pages ville d'une agence suisse ([edana.ch](https://edana.ch/en/website-creation-yverdon-les-bains-web-development)), Gandi, [La Fabrique du Net](https://www.lafabriquedunet.fr/agences/creation-site-web/), Comeup | Aucun acteur basé à Divonne visible. Meilleure chance à court terme. |
| création site internet Ferney-Voltaire | Annuaires ([Gralon](https://www.gralon.net/annuaire/villes/ville-ferney-voltaire-275.htm)), architectes hors sujet, [edana.ch](https://edana.ch/?p=15524) | Résultats peu pertinents = faible concurrence de pages dédiées. |
| création site vitrine Ferney-Voltaire / Saint-Genis-Pouilly | Plateformes : [Malt](https://www.malt.fr/profile/selvavincent), [Codeur](https://www.codeur.com/creation-site-vitrine), Comeup | Les plateformes occupent la place, pas des locaux. |
| agence web Gex Ain | [118712 Ain](https://www.118712.fr/annuaire/departement/ain/agence-web), Infomaniak partenaires, [La Fabrique du Net](https://www.lafabriquedunet.fr/agences/pages/agences-site-internet-auvergne-rhone-alpes?page=1), [Aladom](https://www.aladom.fr/annuaire/pro/1361703/) | Annuaires dominants : y être compte autant que la page. |
| création site internet Nyon | Résultats pollués par Lyon, [local.ch Nyon](https://www.local.ch/en/q/nyon/graphiste), edana.ch | Nyon se joue d'abord sur local.ch/search.ch [à vérifier sur Google.ch]. |
| création site vitrine Genève | [Sortlist](https://www.sortlist.co.uk/agency/idlab-geneve), Malt, [Kolonell](https://kolonell.com/fr/blog/creation-site-cabinet-conseil-strategie-geneve-cout-reel-vs-agences-locales-2026), Infomaniak partenaires, Comeup | Marché dense, agences suisses établies. Cible long terme, pas pour la page seule. |
| fiche Google Business Pays de Gex Genève | Gigs Comeup, guides ([ewm.swiss](https://ewm.swiss/en/blog/google-business-profile-guide-seo-local-for-companies-in-geneva-and-zurich)), [search.ch](https://search.ch/tel/petit-lancy/avenue-des-morgines-31/elite-360-digital.en.html) | Offre « fiche Google » locale peu présente en page dédiée. |

### Mots-clés à viser (sans volumes, à mesurer ensuite dans la Search Console)

| Priorité | Mot-clé | Intention | Où le placer |
|---|---|---|---|
| 1 | création site internet Divonne-les-Bains | Achat local | title, H1 ou sous-titre du hero, texte |
| 1 | création site internet Pays de Gex | Achat local | title/description, H1 ou H2, texte |
| 1 | site vitrine Pays de Gex / site vitrine Divonne | Achat, offre précise | H3 de l'offre, texte du bloc tarifs |
| 2 | création site internet Gex / Ferney-Voltaire / Saint-Genis-Pouilly | Achat local | phrase des villes (déjà au footer), FAQ « zone » |
| 2 | fiche Google (Business) Pays de Gex / référencement local Pays de Gex | Achat, offre 150 € | bloc Visibilité Google |
| 2 | développeur web Pays de Gex / Divonne | Recherche d'un indépendant | lead du hero, bloc About |
| 3 | maintenance site internet Pays de Gex | Achat, offre 50 €/mois | bloc Suivi |
| 3 | site internet artisan / commerçant Pays de Gex | Achat par métier | Story (sélecteur de métiers) |
| 3 (CH) | création site internet Nyon, création site vitrine Genève | Achat, concurrence forte | FAQ Suisse ; fiches local.ch/search.ch plutôt que la page |

Variantes à surveiller dans la Search Console : « site web » vs « site internet », « faire un site », « webmaster ». À ne pas faire : une page par ville avec le même texte (pages satellites, voir action 9).

---

## 2. Audit on-page de `/services` (branche `bascule-viktra`)

### Métadonnées

| Élément | Avant (en ligne) | Branche | Verdict |
|---|---|---|---|
| title | « Création de site internet à Divonne-les-Bains et dans le Pays de Gex \| Adel Djahnit » (83 car., tronqué) | « Création de site internet à Divonne-les-Bains \| Viktra » (54 car.) | Bon. Mot-clé en tête, ville, marque. On perd « Pays de Gex » : le remettre dans la description et le H1/H2. |
| description | 181 car., mentionne « réservation en ligne » (pas une offre listée) | 148 car. : sites vitrines, fiches Google, Pays de Gex, Nyon, Genève, prix fixe, rendez-vous chez vous | Bon. Pas de « Divonne » ni de verbe d'action ; facultatif. |
| canonical | `/services` | `/services` (couvre `?besoin=…`) | OK. |
| robots | indexable | indexable (le `noindex` de `/product` ne suit pas) | OK. |
| `/product` | noindex | 301 vers `/services` (`next.config.mjs`, URL exacte seulement, les images `public/product/*` restent servies) | OK. |
| sitemap | `/` et `/services` | idem | OK. |
| Open Graph | absent | `url: /services`, `siteName: Viktra`, image `opengraph-image.png` | OK (bon pour les partages WhatsApp). |

### Titres

- H1 : « Le site de votre commerce, fait près de chez vous. » Aucun mot-clé ni ville. Les villes sont dans le lead (« développeur web à Divonne-les-Bains… Pays de Gex, de Nyon et de Genève »), donc dans les 100 premiers mots : correct, mais le H1 est le signal le plus fort après le title. Recommandation : garder la phrase et ajouter un sur-titre ou une fin explicite, par exemple « Création de sites internet à Divonne-les-Bains et dans le Pays de Gex » en petit au-dessus du H1 (ou en H1, la phrase actuelle passant en sous-titre).
- H2 : « Votre vitrine se construit sous vos yeux. », « Ce que ça coûte », « Comment ça se passe », « Vous parlez à celui qui fait. », « Réalisations », « Questions fréquentes », « Dites-moi ce que vous faites. » Lisibles et humains, mais aucun ne porte « site vitrine » ou « Pays de Gex ». Une seule retouche suffit : « Ce que ça coûte » → « Ce que coûte un site vitrine » (ou « Tarifs : site vitrine, fiche Google, suivi »).
- H3 des offres : « Visibilité Google », « Site vitrine », « Suivi et maintenance », « Création d'application » : bons, ce sont des termes recherchés.
- Hiérarchie H1 > H2 > H3 cohérente.

### Contenu

- Villes citées naturellement : lead, footer (`SERVICES_TOWNS_SENTENCE`), zone dans le bloc contact, FAQ Suisse, item « Référencement local (Divonne, Gex, Genève…) ». Pas de bourrage.
- FAQ utile (prix total, coûts récurrents, délai, Suisse, « premier sur Google »). Elle répond aux vraies questions : bon pour le SEO et pour les réponses IA.
- Preuves : Globalpronet (lien externe), JSL Judo, Bonee, citation Kunagi. Pas d'avis client : normal, ne rien inventer. Une étude de cas Globalpronet avant/après (une fois la refonte en ligne, avec l'accord du client) sera le meilleur contenu local de la page [à demander au client].
- Manque : aucune mention légale visible (seulement « Confidentialité »). Pour un site pro, l'éditeur (nom, statut, SIRET, contact) doit être identifié. C'est aussi un signal de confiance. Voir le skill `viktra-admin` [à vérifier : SIRET disponible ?].

### Maillage

- **La page est orpheline** : aucun lien depuis `/` (portfolio) vers `/services` dans le code de la branche. Elle n'est trouvée que par le sitemap. À corriger (action 3).
- Liens sortants : globalpronet.ch, App Store, WhatsApp, `tel:`, `mailto:`, `/services/confidentialite`. OK.
- Lien de retour souhaitable : globalpronet.ch → crédit « Site réalisé par Viktra » pointant vers la page [à demander au client].

### Conversion (hors SEO pur, impact direct sur ce que le SEO rapporte)

L'action voulue est WhatsApp > appel > formulaire. Dans la page : le bouton principal du hero mène au formulaire (`#contact`), l'appel est en second, et WhatsApp n'apparaît que dans le bloc contact, sous le téléphone. L'ordre est inversé par rapport à l'objectif. À traiter dans la recherche CRO, mais à signaler ici.

### JSON-LD (`components/product/JsonLd.tsx`)

Présent : `@graph` avec `ProfessionalService` « Viktra » (`@id` `…/services#viktra`, slogan, url, téléphone au format international, email, `founder` → `Person` Adel Djahnit), adresse `PostalAddress` (Divonne-les-Bains, 01220, Ain, FR, sans rue), `areaServed` (6 `City` + `AdministrativeArea` Pays de Gex), `hasOfferCatalog` (4 `Offer`, `UnitPriceSpecification` avec `minPrice` en EUR, `unitCode: MON` pour le suivi ; pas de prix pour « Sur devis »). Échappement `<` correct.

Points à corriger ou compléter :

| Point | Risque | Correction |
|---|---|---|
| Adresse sans rue, sans fiche Google | Faible. Google demande `address` pour `LocalBusiness` et recommande « as many properties as possible » ([doc Google](https://developers.google.com/search/docs/appearance/structured-data/local-business)). Ville + code postal sont vrais et cohérents avec une fiche à adresse masquée. | **Garder sans rue.** Ne pas publier l'adresse du domicile. Ne pas ajouter de `geo` précis (il trahirait l'adresse). |
| `areaServed` | Non documenté par Google pour LocalBusiness (la doc n'en parle pas), valide sur schema.org. | Garder. Doit rester identique à la zone de la fiche Google. |
| `Person.url` = `https://www.adeldjahnit.com` avec `@id …/#adel-djahnit` | La page `/` ne déclare pas cette entité (pas de JSON-LD sur `/` dans le code). `@id` qui ne pointe sur rien : sans gravité, mais inutile. | Ajouter un `Person` sur `/` avec le même `@id`, ou laisser tel quel. Faible priorité. |
| Pas de `image`/`logo` | Recommandé (Organization). | Ajouter `logo` (URL d'un PNG/SVG du logo Viktra) et `image` (l'image OG). |
| Pas de `sameAs` | Rien à lier aujourd'hui. | Ajouter l'URL de la fiche Google, LinkedIn, PagesJaunes quand elles existent. Jamais avant. |
| Pas de `priceRange` | Recommandé, < 100 car. | `"priceRange": "150 € – sur devis"` ou reprendre « À partir de 150 € » de l'ancienne version. |
| Pas de `description` | Mineur. | Reprendre la meta description. |
| Pas de `openingHoursSpecification` | Recommandé, mais Adel est salarié la journée. | Ne mettre que des horaires réellement tenus [à demander à Adel]. Sinon rien. |
| Nom | L'ancienne version disait « Adel Djahnit — Création de sites internet ». La nouvelle dit « Viktra ». | « Viktra » partout (schema, fiche Google, annuaires). Le nom légal (EI Adel Djahnit) va dans `legalName` une fois l'immatriculation faite [à vérifier]. |
| Email gmail | Pas un problème SEO. Signal de confiance moyen. | Adresse sur le domaine choisi (voir partie 4) quand le domaine est fixé. |

`ProfessionalService` est un sous-type de `LocalBusiness` valide pour une agence web : à garder. Pas de `FAQPage` à ajouter pour un résultat enrichi (Google a arrêté ces résultats en 2026, voir [mises à jour Google](https://developers.google.com/search/updates)).

---

## 3. Fiche Google Business Profile, annuaires, NAP

### Fiche Google (entreprise de service sans local)

Règles Google ([consignes](https://support.google.com/business/answer/3038177?hl=en), [masquer l'adresse](https://support.google.com/business/answer/2853879?hl=en)) :
- Une entreprise de zone de service doit masquer son adresse ; exemple donné : le plombier qui travaille de chez lui.
- Zone : pas plus d'environ 2 heures de route depuis la base. Divonne → Gex, Ferney, Saint-Genis, Nyon, Genève : largement dedans.
- Nom : le vrai nom, sans mot-clé ni ville (« Viktra », pas « Viktra création site internet Divonne »). Un nom bourré de mots-clés fait suspendre des fiches.
- Il faut pouvoir être joint directement pendant les horaires indiqués.
- Vérification : Google vérifie l'adresse même masquée (souvent par vidéo) [à vérifier au moment de la création]. Utiliser l'adresse réelle d'exercice (Divonne), pas l'adresse administrative de Saint-Jeoire, qui placerait la fiche à plus d'une heure de la cible.

Point d'attention : un test informel de Sterling Sky montre qu'une fiche a perdu des positions après avoir masqué son adresse, et les a retrouvées en la réaffichant ([source](https://www.sterlingsky.ca/hiding-address-google-business-ranking/), petit échantillon). Ce n'est pas une raison d'afficher un domicile : la règle Google est de masquer. On accepte d'être moins fort dans le local pack et on compense par la page, les avis et les annuaires.

Réglages recommandés :
- Nom : Viktra.
- Catégorie principale : « Concepteur de sites Web » [à vérifier dans la liste FR au moment de la création]. Secondaires possibles : « Service de conception de sites Web », « Agence de marketing Internet », « Développeur d'applications » [à vérifier, choisir seulement ce qui est vendu].
- Zone : Divonne-les-Bains, Gex, Ferney-Voltaire, Saint-Genis-Pouilly, Pays de Gex, Nyon, Genève (identique à `areaServed`).
- Téléphone : +33 6 52 33 87 13 (le même partout). Bouton WhatsApp/chat si l'interface le propose [à vérifier].
- Site : l'URL de la page offre (décision partie 4 d'abord).
- Services et prix : les 4 offres avec les prix « à partir de » de la page, mot pour mot.
- Description : reprendre le texte de la page, sans promesse chiffrée.
- Photos : vraies captures de réalisations (Globalpronet avec accord), photo d'Adel quand il est d'accord, logo.
- Avis : les demander à chaque livraison (Globalpronet, JSL Judo [à demander]). Aucun avis fabriqué, aucun filtrage préalable.
- Le Q&A public de Google disparaît progressivement : mettre les réponses dans la FAQ de la page et la description.

### Annuaires et plateformes

| Annuaire | Pays | Pourquoi | Statut |
|---|---|---|---|
| Google Business Profile | FR/CH | Local pack, Maps | À créer (priorité 1) |
| Bing Places | FR/CH | Alimente Bing, Copilot et ChatGPT (via l'index Bing) | À créer, import depuis Google possible [à vérifier] |
| PagesJaunes / Solocal | FR | Annuaire n°1 en France, apparaît sur « création site internet Pays de Gex » | Fiche gratuite [à vérifier conditions] |
| 118712 | FR | Sort sur « agence web Ain » et « Pays de Gex » | Fiche gratuite [à vérifier] |
| Annuaire-entreprises / INSEE | FR | Fiche officielle créée avec le SIRET | Automatique après immatriculation |
| local.ch / search.ch (localsearch) | CH | Annuaires de référence en Suisse, sortent sur « Nyon » ; inscription d'une entreprise française sans adresse suisse [à vérifier] | À vérifier |
| Malt, Codeur, Comeup | FR | Occupent les SERP « site vitrine Ferney/Saint-Genis » ; profil = lien + présence | Optionnel, un seul bien rempli (Malt) |
| La Fabrique du Net | FR | Sort sur plusieurs requêtes « agence web » | Inscription [à vérifier conditions et coût] |
| Infomaniak, agences partenaires | CH | Sort sur « Pays de Gex » ; Globalpronet est hébergé chez Infomaniak | Conditions du programme [à vérifier] |
| Apple (Apple Business, ex-Business Connect) | FR/CH | Plans Apple. Ancienne règle : entreprises sans local non éligibles ([fil 2016-2017](https://www.localsearchforum.com/threads/apple-maps-connect-no-hide-address-option.50890/)) | [à vérifier], probablement sans objet |
| Livret des artisans et commerçants de Gex | FR | Source de prospects (liste des commerces locaux) ; inscription possible si la mairie l'accepte [à vérifier] | Prospection |
| Page LinkedIn Viktra | — | `sameAs`, cohérence du nom | Optionnel |

### Cohérence NAP (nom, adresse, téléphone)

Une seule version, copiée à l'identique partout :
- Nom : **Viktra** (et non « Adel Djahnit — Création de sites internet », encore en ligne aujourd'hui).
- Adresse : **Divonne-les-Bains, 01220** sans rue (adresse masquée sur Google, absente des annuaires quand c'est possible).
- Téléphone : **+33 6 52 33 87 13** (affiché « 06 52 33 87 13 »).
- Site : une seule URL (voir partie 4).
- Email : le même partout.

Écart actuel : nom différent entre l'ancienne `/services` (en ligne) et la nouvelle. Disparaît au déploiement de la branche.

---

## 4. Domaine : `adeldjahnit.com/services` ou `viktra.fr`

### Faits

- `adeldjahnit.com` est un portfolio de développeur, titre « Développeur Fullstack React & .NET | Genève, Suisse romande », destiné aux recruteurs. La page Viktra y est une sous-page sans lien depuis l'accueil.
- La page offre est jeune : peu ou pas d'autorité à perdre aujourd'hui [à vérifier dans la Search Console : impressions et liens de `/services`].
- Disponibilité et prix de `viktra.fr` / `viktra.ch` : [à vérifier].
- Un déménagement plus tard de `/services` vers un autre domaine **ne peut pas utiliser l'outil de changement d'adresse** de la Search Console : il ne fonctionne qu'au niveau d'un domaine entier, pas d'un chemin ([doc Google](https://support.google.com/webmasters/answer/9370220?hl=en)). Il faudrait des redirections 301 page par page et attendre que Google suive.

### Impact SEO

| | `adeldjahnit.com/services` | `viktra.fr` |
|---|---|---|
| Autorité au départ | Celle du portfolio (faible, [à vérifier]) | Zéro |
| Cohérence de marque | Faible : marque Viktra sur un domaine au nom d'Adel, à côté d'un CV | Totale : nom de la fiche Google = domaine = logo |
| Évolution | Ajouter des pages services / réalisations mélange les deux publics | Place pour `/site-vitrine`, `/fiche-google`, `/realisations/globalpronet` |
| Coût d'un changement plus tard | Croît avec chaque annuaire, avis, lien et la fiche Google qui pointent vers l'ancienne URL | — |
| Email pro | `@adeldjahnit.com` possible | `contact@viktra.fr` |

### Recommandation

**Passer la page offre sur `viktra.fr` maintenant, avant de créer la fiche Google et les annuaires.** Le coût est minimal aujourd'hui (page jeune, aucune citation) et ne fait qu'augmenter. Concrètement : acheter `viktra.fr` [à vérifier disponibilité] (et `viktra.ch` si dispo, en simple redirection), servir la page à la racine de `viktra.fr`, rediriger `adeldjahnit.com/services` et `/product` en 301 vers `https://viktra.fr/`, et mettre un lien « Viktra, mon agence web » sur le portfolio.

Si le domaine n'est pas acheté sous 2 à 3 semaines : déployer la branche `bascule-viktra` telle quelle sur `/services`, créer la fiche Google **sans** URL de site au début, et repousser les annuaires jusqu'à la décision. Ne pas créer d'annuaires avec une URL qu'on prévoit de changer.

---

## 5. Top 10 actions (impact / effort)

| # | Action | Impact | Effort |
|---|---|---|---|
| 1 | Décider le domaine (recommandé : `viktra.fr`) avant toute citation | Élevé | Faible |
| 2 | Créer la fiche Google : nom « Viktra », adresse masquée, zone = `areaServed`, catégorie « Concepteur de sites Web », 4 services avec les prix de la page | Élevé | Moyen (vérification) |
| 3 | Lien depuis le portfolio `/` vers la page offre (aujourd'hui orpheline) | Élevé | Faible |
| 4 | Demander les premiers avis Google (Globalpronet, JSL Judo) dès la fiche validée, puis à chaque livraison | Élevé | Faible |
| 5 | H1 / sur-titre avec « création de sites internet à Divonne-les-Bains et dans le Pays de Gex » ; H2 tarifs avec « site vitrine » | Moyen | Faible |
| 6 | Mentions légales (éditeur, statut, SIRET) liées en pied de page | Moyen (confiance, obligation) | Faible une fois le SIRET obtenu |
| 7 | JSON-LD : `logo`, `image`, `priceRange`, `description`, puis `sameAs` vers la fiche Google ; garder l'adresse sans rue | Faible à moyen | Faible |
| 8 | Bing Places + PagesJaunes + 118712 + local.ch/search.ch avec NAP identique | Moyen | Moyen |
| 9 | Étude de cas Globalpronet sur une page dédiée (avant/après, avec accord), avec crédit « réalisé par Viktra » sur globalpronet.ch | Élevé à terme | Moyen (dépend de la refonte, 03/2027) |
| 10 | Search Console + Bing Webmaster Tools sur le domaine retenu, sitemap soumis ; refaire les SERP de la partie 1 sur Google.fr et Google.ch dans 2 mois | Moyen (mesure) | Faible |

À ne pas faire : pages par ville au texte identique (risque « doorway »), mots-clés dans le nom de la fiche Google, adresse de domicile publiée, avis demandés à des proches ou filtrés.

---

## Résumé

1. Concurrence visible faible sur « création site internet Divonne-les-Bains / Pays de Gex / Ferney » : surtout des annuaires et des plateformes (Malt, Comeup), pas d'agence locale forte. Genève et Nyon sont plus denses (agences suisses, local.ch).
2. Mots-clés principaux : création site internet Divonne-les-Bains, création site internet Pays de Gex, site vitrine Pays de Gex. Volumes [à vérifier].
3. Branche `bascule-viktra` : title (54 car.), description, canonical, 301 `/product` et JSON-LD sont bons. Manquent : ville/mot-clé dans le H1, lien depuis le portfolio (page orpheline), mentions légales.
4. JSON-LD `ProfessionalService` correct ; garder l'adresse sans rue (cohérent avec une fiche à adresse masquée), ajouter logo, image, priceRange, puis sameAs.
5. Fiche Google : nom « Viktra », adresse de Divonne masquée, zone Pays de Gex + Nyon + Genève, catégorie concepteur de sites Web, avis dès la première livraison.
6. NAP unique partout : Viktra / Divonne-les-Bains 01220 / +33 6 52 33 87 13 / une seule URL.
7. Domaine : le déménagement d'un chemin ne peut pas passer par l'outil de changement d'adresse de Google, et chaque citation rend le changement plus cher.
8. **Recommandation : acheter `viktra.fr` et y mettre la page maintenant, 301 depuis `/services`, puis seulement créer la fiche Google et les annuaires.**
9. Sinon, déployer la branche sur `/services` et ne créer aucun annuaire avec URL avant la décision.
10. Toutes les SERP sont à refaire sur Google.fr/.ch localisé avant de figer les mots-clés.
