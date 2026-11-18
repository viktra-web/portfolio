# Inventaire du contenu — page offre Viktra (recherche 04)

Date : 18/11/2026.

## Sources et méthode

- **Référence principale : branche `origin/bascule-viktra`** (lue avec `git show`, sans checkout). Elle met la page Viktra (ex-/product) sur **/services**, redirige `/product` vers `/services` (`next.config.mjs`, redirection permanente) et supprime l'ancienne page /services (`components/services/*`).
- Sur cette branche, `lib/services.ts` est identique à `main`. `lib/product.ts` et `components/product/*` ne changent que sur des commentaires ou des URL (`/product?besoin=` devient `/services?besoin=`). **Les numéros de ligne ci-dessous sont donc valables sur les deux branches** pour ces fichiers. `app/services/page.tsx` et `app/services/confidentialite/page.tsx` sont cités dans leur version de la branche.
- L'ancienne /services (`main`, `components/services/*`) sert seulement à lister **ce qui disparaît** (section 1.B).
- **Pages en ligne** : `curl` est bloqué par le proxy de la session, et WebFetch ne renvoie qu'un résumé, pas le texte mot pour mot. Le résumé de https://www.adeldjahnit.com/product et de https://www.adeldjahnit.com/services suit le code de `main` : mêmes sections, même ordre, mêmes prix. Aucun écart n'a été vu, mais **le verbatim vient du code**. Pour vérifier le texte exact en ligne, il faut l'ouvrir dans un navigateur.

---

## 1. Textes, section par section (verbatim)

### A. Nouvelle page /services (Viktra), branche `bascule-viktra`

Ordre des sections : `app/services/page.tsx:40-50`. Hero, Story, Pricing (Tarifs + Déroulement), About, Work, Faq, Contact, Footer, StickyBar, JsonLd.

#### A0. Métadonnées (onglet, Google, aperçu WhatsApp)

| Élément | Texte | Source |
|---|---|---|
| title | Création de site internet à Divonne-les-Bains \| Viktra | app/services/page.tsx:15 |
| description | Sites vitrines et fiches Google pour les commerces, artisans et indépendants du Pays de Gex, de Nyon et de Genève. Prix fixe, rendez-vous chez vous. | app/services/page.tsx:17 |
| og:siteName | Viktra | app/services/page.tsx:28 |
| Texte alternatif de l'image OG | Viktra. Ouvert, même quand vous êtes fermé. | app/services/opengraph-image.alt.txt (déplacé depuis app/product) |

#### A1. Hero

| Élément | Texte | Source |
|---|---|---|
| Marque | [logo Viktra] par Adel Djahnit | components/product/Hero.tsx:31-32, Logo.tsx:8 |
| Barre (ordinateur) | 06 52 33 87 13 · bouton « Devis gratuit » | Hero.tsx:37, 40 ; lib/services.ts:78 |
| H1 | Le site de votre commerce, fait près de chez vous. | lib/product.ts:7 |
| Chapô | Je suis Adel, développeur web à Divonne-les-Bains. Je crée des sites et des fiches Google pour que les commerces et artisans du Pays de Gex, de Nyon et de Genève soient trouvés, puis appelés. | lib/product.ts:8 |
| Bouton principal | Demander un devis gratuit | Hero.tsx:51 |
| Sous le bouton | Premier rendez-vous de 20 minutes, gratuit. | lib/product.ts:10 |
| Lien | Ou appelez le 06 52 33 87 13 | Hero.tsx:56 |
| Lien | Voir les tarifs | Hero.tsx:60 |
| Faits | Site vitrine dès 690 €, prix fixé au devis / En ligne en 2 semaines environ / Le nom de domaine est à votre nom | lib/product.ts:13-15 |

#### A2. Story (téléphone animé)

| Élément | Texte | Source |
|---|---|---|
| Titre | Votre vitrine se construit sous vos yeux. | components/product/Story.tsx:64 |
| Légende du sélecteur (lecteurs d'écran) | Essayez avec votre métier | lib/product.ts:50 |
| Boutons métier | Boulangerie / Plombier / Coiffeuse / Restaurant | lib/product.ts:58, 75, 92, 109 |
| Légende sous le téléphone | Exemple fictif : ce commerce n'existe pas. | lib/product.ts:49 |
| Chapitre 1 | **On vous cherche sur un téléphone.** Vos futurs clients tapent votre métier et votre ville sur Google. Votre activité doit apparaître, clairement. | lib/services.ts:278-279 |
| Chapitre 2 | **Ils trouvent l'essentiel en un coup d'œil.** Horaires, adresse, prestations : tout est lisible sur un petit écran, sans zoomer. | lib/services.ts:282-283 |
| Chapitre 3 | **Et ils vous contactent en un geste.** Un bouton pour appeler, un formulaire pour demander un devis. Les demandes arrivent directement chez vous. | lib/services.ts:286-287 |
| Commun au téléphone | 8:15 · Site web · Itinéraire · Envoyer · Nouveau message · maintenant · Grand-Rue, votre ville | lib/product.ts:42-48 (via storyMockup, lib/services.ts:295-309) |
| Boulangerie | « boulangerie près de moi » · La Mie du Matin (M) · Boulangerie, ouvert · Appeler · Pain au levain et viennoiseries maison · Ouvert aujourd'hui 6 h 30 – 19 h 00 · Baguette tradition / Croissants / Gâteaux sur commande · Commander un gâteau · « Bonjour, vous faites des gâteaux d'anniversaire ? » | lib/product.ts:56-72 + lib/services.ts:296-311 |
| Plombier | « plombier divonne » · Mercier Plomberie (M) · Plombier, ouvert · Urgence : appeler · Dépannage, chauffe-eau et salles de bain · Disponible aujourd'hui 7 h 30 – 18 h 30 · Fuite d'eau / Chauffe-eau / Salle de bain · Demander un devis · « Bonjour, j'ai une fuite sous l'évier, vous pouvez passer aujourd'hui ? » | lib/product.ts:74-88 |
| Coiffeuse | « coiffeuse gex » · Salon Lumière (L) · Coiffeuse, ouvert · Prendre RDV · Coupe, couleur et brushing, avec ou sans rendez-vous · Ouvert aujourd'hui 9 h 00 – 19 h 00 · Coupe femme / Couleur / Coupe homme · Prendre rendez-vous · « Bonjour, vous avez une place samedi matin ? » | lib/product.ts:91-105 |
| Restaurant | « restaurant nyon » · Le Comptoir du Lac (C) · Restaurant, ouvert · Réserver · Cuisine de saison, menu du jour à midi · Ouvert aujourd'hui 11 h 45 – 14 h 00 et 19 h – 22 h · Menu du jour / Terrasse / Groupes · Réserver une table · « Bonjour, une table pour 4 ce soir à 20 h ? » | lib/product.ts:108-122 |
| aria-label du téléphone | Exemple fictif : le site de {nom} ({meta}) sur un téléphone, avec horaires, adresse et bouton Appeler | components/product/Phone.tsx:147 |

#### A3. Tarifs (`#tarifs`)

Titre : **Ce que ça coûte** (components/product/Pricing.tsx:23).

| Offre | Prix | Description | Points | Bouton | Source |
|---|---|---|---|---|---|
| Visibilité Google | à partir de 150 € | Votre fiche Google complète et à jour : photos, horaires, catégories, description, réponses aux avis. C'est souvent la première chose que vos clients voient. | Fiche Google optimisée / Photos et horaires / Conseils pour obtenir des avis | Je veux être visible sur Google | lib/services.ts:95-101 |
| Site vitrine (offre mise en avant) | à partir de 690 € | Un site clair, rapide et lisible sur téléphone, qui présente votre activité et permet de vous contacter ou de demander un devis en un clic. | 1 à 5 pages / Adapté au mobile / Formulaire de contact ou de devis / Référencement local (Divonne, Gex, Genève…) / Version anglaise en option / Livré en 2 semaines environ | Je veux un site | lib/services.ts:104-117 ; mise en avant : Pricing.tsx:31 |
| Suivi et maintenance | à partir de 50 € / mois | Hébergement, mises à jour et petites modifications (horaires, carte, tarifs, photos). Vous m'envoyez un message, je m'en occupe. | Hébergement inclus / Petites modifications / Sans engagement | Je veux le suivi | lib/services.ts:120-126 |
| Création d'application | Sur devis | Une application mobile ou web sur mesure, quand un site ne suffit plus : réservation, fidélité, outil pour votre équipe. Chaque projet est différent, le prix aussi : on en parle, puis vous recevez un devis. | iPhone, Android ou web / Publication sur l'App Store et Google Play / Suivi après la mise en ligne | Parler de mon projet | lib/services.ts:129-135 |

Note sous les offres : « Prix de départ. Le prix exact est écrit dans votre devis, après notre rendez-vous. Acompte de 40 % au lancement, solde à la livraison. L'hébergement est compris dans le suivi ; le nom de domaine se paie à part, une fois par an. » (lib/product.ts:173-174)

#### A4. Déroulement (`#deroulement`)

Titre : **Comment ça se passe** (Pricing.tsx:79). Bouton : **Prendre rendez-vous** (Pricing.tsx:98).

| # | Titre | Texte | Source |
|---|---|---|---|
| 1 | On se rencontre | Chez vous ou par téléphone, 20 minutes pour comprendre votre activité et vos besoins. | lib/services.ts:167-168 |
| 2 | Je vous envoie un devis | Un prix fixe, sans surprise. Un acompte de 40 % lance le projet, le solde est payé à la livraison. | lib/services.ts:171-172 |
| 3 | Je crée votre site | Vous voyez l'avancement et vous donnez votre avis à chaque étape. | lib/services.ts:175-176 |
| 4 | Mise en ligne | Votre site est en ligne, et je reste disponible pour les modifications. | lib/services.ts:179-180 |

#### A5. À propos (`#a-propos`)

| Élément | Texte | Source |
|---|---|---|
| Citation (affichée faute de photo, `ABOUT_PHOTO = null`) | « Un réel sens du service et une volonté constante de répondre aux besoins des utilisateurs et de l'équipe. » | lib/product.ts:164 ; About.tsx:44 ; photo : lib/product.ts:135 |
| Attribution | Hélène Cayla, fondatrice de Kunagi, où j'ai été développeur full stack en alternance pendant deux ans. Lire la lettre (lien /recommendation-letter.pdf) | lib/product.ts:165-168 |
| H2 | Vous parlez à celui qui fait. | lib/product.ts:156 |
| Texte | Je suis Adel Djahnit. On se rencontre en personne, et c'est moi qui crée votre site, du premier rendez-vous à la mise en ligne. | lib/product.ts:157 |
| Engagement 1 | **Un prix fixe.** Le prix du devis est celui que vous payez. Pas de frais cachés. | lib/services.ts:186-187 |
| Engagement 2 | **Un seul interlocuteur.** C'est moi qui vous rencontre, qui crée votre site et qui le suis ensuite. | lib/services.ts:190-191 |
| Engagement 3 | **Près de chez vous.** Installé à Divonne-les-Bains, je me déplace dans le Pays de Gex, à Nyon et à Genève. | lib/services.ts:194-195 |
| Engagement 4 | **Votre site vous appartient.** Le nom de domaine est à votre nom. Si vous arrêtez le suivi, je vous remets tout ce qu'il faut pour le confier à quelqu'un d'autre. | lib/services.ts:198-199 |
| (masqué ici) | « Sans engagement » : Le suivi mensuel s'arrête quand vous le souhaitez. | lib/services.ts:202-203 ; masqué par lib/product.ts:159 |

#### A6. Réalisations (`#realisations`)

Titre : **Réalisations** (Work.tsx:64). Intro : **Ce que j'ai fait, projet par projet.** (lib/product.ts:171). Ordre : Bonee d'abord (Work.tsx:55-57).

| Projet | Type | Texte | Lien | Source |
|---|---|---|---|---|
| Bonee | Projet personnel — application mobile | Application de budget que j'ai conçue et développée seul, publiée sur l'App Store et le Google Play Store. | « Voir sur l'App Store » (App Store seulement) + 2 captures (alt : « Bonee, écran d'accueil : objectif principal, revenus, dépenses et économies du mois. » / « Bonee, écran Mon budget : répartition des dépenses de juin et liste des transactions. ») | lib/services.ts:156-161 ; lib/product.ts:138-153 |
| Globalpronet | Entreprise de nettoyage — Genève | Réécriture des textes du site pour qu'il soit mieux référencé sur Google. Le design et le site existants n'ont pas été modifiés. | « Voir le site » → globalpronet.ch | lib/services.ts:141-146 |
| JSL Judo | Club de judo | Création du site internet du club. | aucun | lib/services.ts:149-153 |

#### A7. FAQ (`#faq`)

Titre : **Questions fréquentes**. À côté : « Une autre question ? Écrivez-moi ou appelez le 06 52 33 87 13. » (components/product/Faq.tsx:9-13)

| Question | Réponse | Source |
|---|---|---|
| Combien coûte un site au total ? | Le prix dépend du nombre de pages et des fonctions souhaitées. Un site vitrine démarre à 690 €, une fiche Google à 150 €. Vous recevez un devis à prix fixe avant de vous engager. | lib/services.ts:209-211 |
| Et ensuite, qu'est-ce que je paie chaque mois ou chaque année ? | Le suivi, à partir de 50 € par mois, comprend l'hébergement du site, les mises à jour et les petites modifications (horaires, tarifs, photos, carte). Il est sans engagement. Le nom de domaine (votre adresse, par exemple votre-commerce.fr) est payé à part, une fois par an : son prix exact figure dans le devis. | lib/services.ts:214-216 |
| En combien de temps mon site est-il en ligne ? | Comptez environ 2 semaines pour un site vitrine, à partir du moment où j'ai vos textes et vos photos. Une fiche Google est plus rapide à mettre en place. | lib/services.ts:219-221 |
| Je n'ai ni textes ni photos, et je ne suis pas à l'aise avec l'informatique. | Ce n'est pas un problème. Pendant le rendez-vous, vous me parlez de votre activité et je vous aide à rédiger les textes ; vous les relisez avant la mise en ligne. Pour les photos, on peut partir de celles de votre téléphone. | lib/services.ts:224-226 |
| Une fiche Google ne suffit-elle pas ? | Pour certains commerces, si : c'est pour ça que je la propose seule. Un site devient utile quand vous voulez présenter vos prestations en détail, afficher vos tarifs ou recevoir des demandes de devis. | lib/services.ts:229-231 |
| Est-ce que je serai premier sur Google ? | Personne ne peut le garantir honnêtement. Ce que je fais : un site rapide et lisible sur téléphone, des textes qui citent votre métier et votre ville, et une fiche Google complète. Ce sont les bases d'un bon référencement local. | lib/services.ts:234-236 |
| Vous travaillez avec des clients en Suisse ? | Oui. Je suis à 20 minutes de Genève et je me déplace aussi à Nyon et dans le canton de Vaud. Le devis est établi en euros ; si vous préférez un montant en francs suisses, dites-le-moi. Une version anglaise du site est possible en option. | lib/services.ts:239-241 |

#### A8. Contact (`#contact`)

| Élément | Texte | Source |
|---|---|---|
| H2 | Dites-moi ce que vous faites. | components/product/Contact.tsx:20 |
| Texte | Je vous réponds sous 24 heures. Le premier rendez-vous est gratuit et sans engagement. | Contact.tsx:23 |
| Encadré | **Vous préférez appeler ?** 06 52 33 87 13 · WhatsApp : Écrire sur WhatsApp · Email : adel.djahnit.pro@gmail.com · Zone : Divonne-les-Bains, Gex, Ferney-Voltaire, Saint-Genis-Pouilly, Nyon, Genève | Contact.tsx:29-53 ; lib/services.ts:73, 78, 84-91 |
| Message WhatsApp pré-rempli | Bonjour Adel, je vous contacte depuis votre site. Mon activité : | lib/services.ts:82 |
| Objet du mail (mailto) | Demande de devis — site internet | lib/services.ts:75 |
| Champs | Votre nom / Comment vous joindre ? (aide : « Un téléphone ou un email suffit. ») / Téléphone / Email / Votre besoin (facultatif) / En quelques mots, votre activité et ce que vous cherchez | components/product/ContactForm.tsx:172, 196, 198, 207, 231, 257, 264 |
| Menu « besoin » | — Choisir — / Fiche Google / Site vitrine / Refonte d'un site existant / Suivi et maintenance / Application mobile ou web / Je ne sais pas encore | lib/services.ts:16-24 |
| Exemple dans le champ message | Ex. : je tiens une boulangerie à Gex et je voudrais que mes clients trouvent mes horaires sur Google. | ContactForm.tsx:276 |
| Bouton | Demander mon devis gratuit (pendant l'envoi : « Envoi en cours… ») | ContactForm.tsx:27 |
| Mention sous le formulaire | Vos informations servent uniquement à répondre à votre demande. Elles me sont transmises par email et conservées au maximum 3 ans après notre dernier échange. Vous pouvez demander leur suppression à adel.djahnit.pro@gmail.com. En savoir plus : Confidentialité | ContactForm.tsx:298-301 |
| Succès | **Merci, c'est bien reçu.** Je vous réponds sous 24 heures, par téléphone ou par email, pour fixer un rendez-vous de 20 minutes, chez vous ou au téléphone. Rien à préparer. | ContactForm.tsx:127-130 |
| Erreurs | Il manque quelques informations, voir ci-dessous. / Le formulaire n'est pas disponible pour le moment et votre message n'a pas été envoyé. / Votre message n'a pas pu être envoyé à cause d'un problème technique de mon côté. + Vous pouvez me l'envoyer par email en un clic, ou m'appeler au 06 52 33 87 13. [Envoyer par email] | ContactForm.tsx:144, 158-164 |
| Erreurs par champ | Indiquez votre nom. / Ce numéro ne semble pas valide. / Cet email ne semble pas valide. / Indiquez un téléphone ou un email pour que je puisse vous répondre. / Écrivez quelques mots sur votre projet (10 caractères minimum). | app/services/actions.ts:50-66 |

#### A9. Pied de page et barre mobile

| Élément | Texte | Source |
|---|---|---|
| Slogan | Ouvert, même quand vous êtes fermé. | components/product/Footer.tsx:10 |
| Zone | Pour les commerces, artisans et indépendants de Divonne-les-Bains, Gex, Ferney-Voltaire, Saint-Genis-Pouilly, Nyon et Genève. | lib/services.ts:268-269 |
| Ligne | © Viktra, Adel Djahnit · Confidentialité · Haut de page | Footer.tsx:31-33 |
| Barre mobile | Appeler Adel · Devis gratuit | components/product/StickyBar.tsx:42, 45 |

#### A10. Données structurées (JSON-LD, invisibles mais lues par Google)

`ProfessionalService` « Viktra », slogan, téléphone, email Gmail, adresse Divonne-les-Bains 01220 Ain FR, zone, catalogue des 4 offres (prix minimum en EUR, « MON » pour le suivi), fondateur « Adel Djahnit, Développeur web ». (components/product/JsonLd.tsx:8-60)

#### A11. Page Confidentialité (branche `bascule-viktra`)

| Élément | Texte | Source |
|---|---|---|
| title | Confidentialité \| Adel Djahnit | app/services/confidentialite/page.tsx:9 |
| En-tête | [logo Viktra] par Adel Djahnit · Devis gratuit | :95-100 |
| H1 + chapô | Confidentialité. Ce que deviennent les informations que vous m'envoyez avec le formulaire de contact. | :105-108 |
| Lien | Retour à la page Services | :111 |
| Responsable du traitement | Adel Djahnit, adel.djahnit.pro@gmail.com. | :17-18 |
| Données collectées | Lorsque vous utilisez le formulaire de contact : votre nom, votre téléphone, votre email, votre besoin et votre message. | :21-25 |
| Pourquoi | Ces informations servent uniquement à répondre à votre demande et à préparer un devis. Elles ne sont ni vendues ni utilisées pour de la publicité. | :30-34 |
| Base légale | Le traitement repose sur les mesures précontractuelles prises à votre demande : vous me contactez pour obtenir une réponse ou un devis, avant tout contrat. | :39-43 |
| Prestataires | Les messages du formulaire me sont transmis par email via le service Resend. Le site est hébergé par Vercel. Ces deux prestataires sont établis aux États-Unis. | :48-52 |
| Durée de conservation | Vos informations sont conservées au maximum 3 ans après notre dernier échange, puis supprimées. | :57-61 |
| Vos droits | Vous pouvez demander à accéder à vos données, à les corriger ou à les supprimer en écrivant à [email]. Vous pouvez aussi adresser une réclamation à la CNIL (cnil.fr). | :66-74 |
| Mesure d'audience | Le site utilise Vercel Analytics pour compter les visites de façon anonyme. Aucun cookie publicitaire n'est déposé. | :79-83 |

### B. Ancienne /services (`main`, en ligne aujourd'hui) : ce qui disparaît avec la bascule

Les offres, les étapes, les engagements, la FAQ, les réalisations et les chapitres de la story viennent de `lib/services.ts` : ils sont **conservés**. Les textes suivants disparaissent :

| Élément | Texte | Source (main) |
|---|---|---|
| title | Création de site internet à Divonne-les-Bains et dans le Pays de Gex \| Adel Djahnit | app/services/page.tsx:20 |
| description | Développeur web basé à Divonne-les-Bains. Sites vitrines, fiche Google et réservation en ligne pour les commerces, artisans et indépendants du Pays de Gex et de la région genevoise. | app/services/page.tsx:17 |
| JSON-LD | name « Adel Djahnit — Création de sites internet », priceRange « À partir de 150 € » | app/services/page.tsx:29, 50 |
| Marque | Adel Djahnit · Développeur web (pas de Viktra) | components/services/Hero.tsx:17-18 |
| Surtitre | Divonne-les-Bains · Pays de Gex · Genève | Hero.tsx:28 |
| H1 | Un site internet qui vous amène des *clients.* | Hero.tsx:32 |
| Chapô | Je suis Adel, développeur web installé à Divonne-les-Bains. J'aide les commerces, artisans et indépendants de la région à être trouvés sur Google et contactés facilement depuis un téléphone. On se rencontre en personne, et vous avez un seul interlocuteur du début à la fin. | Hero.tsx:35-38 |
| Boutons | Devis gratuit → / Demander un devis gratuit → / Voir les offres | Hero.tsx:22, 42, 45 |
| Pastilles | Réponse sous 24 h · Rendez-vous chez vous · Prix fixe | Hero.tsx:3 |
| Bandeau défilant | Boulangerie ✦ Plombier ✦ Coiffeuse ✦ Restaurant ✦ Électricien ✦ Fleuriste ✦ Institut de beauté ✦ Garage ✦ Café ✦ Menuisier / Divonne-les-Bains ✦ Gex ✦ Ferney-Voltaire ✦ Saint-Genis-Pouilly ✦ Pays de Gex ✦ Nyon ✦ Genève | components/services/Marquee.tsx:31-32 ; lib/services.ts:245-266 (désormais inutilisés) |
| Story | surtitre « Exemple fictif » ; titre « Votre vitrine se construit *sous vos yeux*. » ; légende « Exemple fictif · La Mie du Matin » | components/services/Story.tsx:10, 13 ; lib/services.ts:294 |
| Offres | titre « *Offres* » ; note « Prix indicatifs. Après notre rendez-vous, vous recevez un devis à prix fixe. Paiement en deux fois : 40 % au démarrage, le solde à la livraison. » | components/services/Offers.tsx:17, 46-47 |
| Réalisations | intro « Des projets réels, et ce que j'y ai fait concrètement. » ; ordre Globalpronet, JSL Judo, Bonee ; numéros (01) (02) (03) | components/services/Work.tsx:14, 20 |
| Titres | « Comment ça *se passe* » ; « Mes *engagements* » (5 engagements, « Sans engagement » compris) ; « Questions *fréquentes* » | Steps.tsx:13 ; Guarantees.tsx:10 ; Faq.tsx:9 |
| Contact | « Parlons de *votre projet* » ; « Dites-moi en quelques mots ce que vous faites et ce que vous cherchez. Je vous réponds sous 24 heures. Le premier rendez-vous est gratuit et sans engagement. » | components/services/Contact.tsx:29-33 |
| Formulaire | champs « Votre nom * », « Comment vous joindre ? * », « Votre activité » (menu), « Votre besoin », « Votre message * » ; bouton « Envoyer ma demande » ; succès « Merci, votre demande est bien envoyée. Je vous réponds sous 24 heures, par téléphone ou par email. Si c'est urgent : 06 52 33 87 13. » | components/services/ContactForm.tsx:29, 113-116, 160, 186, 253, 271, 279 |
| Pied de page | « À bientôt, près de chez vous. » ; « © Adel Djahnit · Confidentialité » ; bouton pause des animations ; « Haut de page ↑ » | components/services/Footer.tsx:8-15 ; MotionToggle.tsx:21-22 |
| Barre mobile | Appeler · Devis gratuit | components/services/StickyBar.tsx:7, 10 |

---

## 2. Écarts, affirmations risquées, coquilles

### 2.1 Écarts avec ce qui est validé

| # | Écart | Où | Gravité |
|---|---|---|---|
| E1 | **WhatsApp n'est pas l'action principale.** Partout, le bouton principal est « Devis gratuit » / « Demander un devis gratuit » vers le formulaire. WhatsApp n'apparaît qu'une fois, en lien secondaire dans l'encadré « Vous préférez appeler ? ». Il est absent du hero, de la barre mobile (« Appeler Adel · Devis gratuit ») et des boutons des offres. | Hero.tsx:40, 51 ; StickyBar.tsx:42-45 ; Contact.tsx:35-44 ; Pricing.tsx:56-62 | Haute |
| E2 | La page Confidentialité garde « \| Adel Djahnit » dans son titre, et son lien de retour s'appelle « Retour à la page Services » alors que la page est maintenant Viktra. | confidentialite/page.tsx:9, 111 | Faible |
| E3 | Le domaine reste adeldjahnit.com, avec un email Gmail. Le nom affiché est Viktra. | lib/services.ts:73 ; JsonLd.tsx:3 | Moyenne, voir 4 |
| E4 | Offre : nom « Suivi et maintenance » (validé : « Suivi & maintenance »). Simple choix d'écriture, à garder identique partout (CRM, devis). | lib/services.ts:120 | Faible |
| E5 | Les prix (150 €, 690 €, 50 €/mois, sur devis), « 1 à 5 pages », « ~2 semaines », « sans engagement » et « 40 % / solde » **sont conformes**. Une seule différence : la nouvelle page dit « Prix de départ » (lib/product.ts:174), l'ancienne « Prix indicatifs » (Offers.tsx:46). La nouvelle formulation est la bonne. | — | OK |
| E6 | Bonee est décrite « conçue et développée seul ». L'information validée est « son app ». Bonee est notée comme **co-développée** avec un associé (source : mémoire de l'assistant, pas le code). À confirmer avant publication. | lib/services.ts:159 | Haute [à demander] |
| E7 | Bonee : le texte dit « publiée sur l'App Store et le Google Play Store », mais seul le lien App Store est présent. | lib/services.ts:159-161 | Moyenne [à demander : lien Google Play] |
| E8 | Globalpronet et JSL Judo sont **conformes** au validé (« réécriture des textes… design non modifié » ; « Création du site internet du club. »). Globalpronet est maintenant aussi un client en refonte : il faudra changer ce texte quand la refonte sera en ligne. | lib/services.ts:141-153 | Suivi |
| E9 | Zone : la FAQ dit « dans le canton de Vaud », ce qui va au-delà de la cible validée (Pays de Gex, puis Nyon/Genève). | lib/services.ts:241 | Moyenne |
| E10 | Point « Référencement local (Divonne, Gex, Genève…) » : Nyon n'y figure pas, alors qu'il est dans la zone. | lib/services.ts:112 | Faible |
| E11 | L'ancienne description mentionnait « réservation en ligne », qui n'est pas une offre. Elle disparaît avec la bascule : c'est bien. Il faut juste que l'ancienne description ne reste pas en cache dans Google. | main app/services/page.tsx:17 | Info |
| E12 | Commentaire de code obsolète : `"à partir de 25 € / mois"` (non affiché). | components/product/Pricing.tsx:4 | Cosmétique |

### 2.2 Affirmations non prouvées ou risquées

| # | Affirmation | Où | Risque | Proposition (sans nouvelle promesse) |
|---|---|---|---|---|
| R1 | « Je vous réponds sous 24 heures » (2 fois sur la nouvelle page) | Contact.tsx:23 ; ContactForm.tsx:129 | Délai ferme, intenable les week-ends, en congé ou pendant les heures de travail. Un seul message en retard contredit la page. | « Je vous réponds par téléphone ou par email pour fixer un rendez-vous. » ou délai réel [à demander] |
| R2 | « En ligne en 2 semaines environ » dans le hero, **sans condition** | lib/product.ts:14 | La FAQ précise « à partir du moment où j'ai vos textes et vos photos », pas le hero. | « Environ 2 semaines après réception de vos textes et photos » (même chiffre, avec la condition) |
| R3 | « Rendez-vous chez vous » dans la meta description | app/services/page.tsx:17 | Les étapes disent « Chez vous ou par téléphone ». | « Rendez-vous chez vous ou par téléphone. » |
| R4 | « Le prix du devis est celui que vous payez. Pas de frais cachés. » | lib/services.ts:187 | À tenir dans les devis : le nom de domaine, la version anglaise et le suivi sont en plus. La page le dit ailleurs, donc ça tient, à condition que chaque devis le reprenne. | Garder. Vérifier que le modèle de devis liste domaine, option et suivi [à demander] |
| R5 | « Hébergement inclus » seulement dans le suivi | lib/product.ts:174 ; lib/services.ts:124 | Si le client ne prend pas le suivi (sans engagement), qui héberge son site et pour combien ? Rien ne le dit. | [à demander : hébergement sans suivi] |
| R6 | « Si vous arrêtez le suivi, je vous remets tout ce qu'il faut pour le confier à quelqu'un d'autre. » | lib/services.ts:199 | Engagement juste, mais il doit figurer dans les conditions (propriété du code, accès, délai). | [à demander : CGV] |
| R7 | Visibilité Google : « réponses aux avis » | lib/services.ts:98 | On ne sait pas si c'est ponctuel (150 €) ou continu. Un client peut comprendre qu'Adel répondra à ses avis chaque mois. | « …description, et aide pour répondre aux avis. » ou périmètre exact [à demander] |
| R8 | « C'est souvent la première chose que vos clients voient. » | lib/services.ts:98 | Généralité sans source. | Supprimer (voir 3) |
| R9 | « Je suis à 20 minutes de Genève » | lib/services.ts:241 | Dépend du trafic et de la frontière. | « Je suis à Divonne-les-Bains, près de Genève. » |
| R10 | « si vous préférez un montant en francs suisses, dites-le-moi » | lib/services.ts:241 | Faisabilité de la facturation en CHF pour la micro-entreprise. | [à demander] |
| R11 | « Version anglaise en option » | lib/services.ts:113, 241 | Pas de prix. Prévoir de le donner au devis. | [à demander : prix de l'option] |
| R12 | Création d'application : « Suivi après la mise en ligne » | lib/services.ts:133 | Ni périmètre ni prix. | [à demander] |
| R13 | Noms fictifs « Mercier Plomberie », « Salon Lumière », « Le Comptoir du Lac », « La Mie du Matin », avec des villes réelles (Divonne, Gex, Nyon) | lib/product.ts:79, 96, 113 ; lib/services.ts:297 | La légende dit « Exemple fictif », mais un vrai commerce de ce nom peut exister dans la zone, surtout « Le Comptoir du Lac » vers Nyon. | Vérifier chaque nom sur Google Maps [à demander] |
| R14 | Prestataires « établis aux États-Unis » | confidentialite/page.tsx:52 | Le transfert hors UE n'est pas encadré dans le texte (aucune garantie citée). | À vérifier avec la skill viktra-admin [à demander] |
| R15 | Pas de mention HT/TTC ni « TVA non applicable » à côté des prix | Pricing | À clarifier selon le statut. | [à demander] |

### 2.3 Coquilles et incohérences de forme

- Attribution Kunagi : la phrase passe du nom d'un tiers à « j'ai été » (« Hélène Cayla, fondatrice de Kunagi, où j'ai été développeur… »). Proposition : « Hélène Cayla, fondatrice de Kunagi. J'y ai été développeur full stack en alternance pendant deux ans. » (lib/product.ts:166)
- Horaires du restaurant : « 11 h 45 – 14 h 00 et 19 h – 22 h ». Mélange de « 14 h 00 » et « 19 h ». Choisir « 19 h 00 – 22 h 00 » ou retirer les « 00 » partout (lib/product.ts:119).
- « le Google Play Store » (lib/services.ts:159) mais « Google Play » ailleurs (lib/services.ts:133). Garder « Google Play ».
- « Prendre RDV » (bouton fictif, lib/product.ts:99) : la seule abréviation de la page. « Prendre rendez-vous » si la place le permet.
- « Livré en 2 semaines environ » (offre) et « En ligne en 2 semaines environ » (hero) : même idée, deux verbes. Choisir un seul.
- Écriture des métiers : « Coiffeuse » au féminin, « Plombier » au masculin. Volontaire ? À garder cohérent.
- FAQ : « Je n'ai ni textes ni photos, et je ne suis pas à l'aise avec l'informatique. » est une affirmation dans une liste de questions. Acceptable, à garder si c'est voulu.
- `storyMockup.meta` « Boulangerie · Ouvert » et `notifTitle` « Nouveau message · maintenant » (lib/services.ts:299, 310) ne sont plus utilisés après la bascule (la nouvelle page utilise des virgules). C'est du code mort, sans effet visible.
- Exports devenus inutiles après la bascule : `SERVICES_TRADES`, `SERVICES_TOWNS` (lib/services.ts:245-266), `storyMockup.caption` / `ariaLabel`. À nettoyer.
- `ACTIVITE_OPTIONS` reste lu par `app/services/actions.ts:42, 73`, mais le formulaire n'a plus de champ activité : le mail reçu affichera une activité vide. La page Confidentialité a bien retiré « activité ».

---

## 3. Ce qui « fait IA » ou générique, avec réécriture

Toutes les réécritures gardent le sens actuel, sans nouvelle promesse ni nouveau chiffre.

| # | Texte actuel | Pourquoi | Réécriture proposée | Source |
|---|---|---|---|---|
| G1 | Votre activité doit apparaître, clairement. | Virgule dramatique, adverbe ajouté pour l'effet | Votre commerce doit apparaître dans les résultats. | lib/services.ts:279 |
| G2 | Ils trouvent l'essentiel en un coup d'œil. / Et ils vous contactent en un geste. | Série de trois titres à formules toutes faites (« en un coup d'œil », « en un geste ») | Ils trouvent vos horaires et votre adresse. / Ils vous appellent ou vous écrivent. | lib/services.ts:282, 286 |
| G3 | Les demandes arrivent directement chez vous. | Formule creuse (« directement ») | Vous recevez les demandes par téléphone ou par email. | lib/services.ts:287 |
| G4 | Un site clair, rapide et lisible sur téléphone, qui présente votre activité et permet de vous contacter ou de demander un devis en un clic. | Trois adjectifs à la suite + « en un clic » | Un site qui présente votre activité et se lit bien sur téléphone. Vos clients vous appellent ou demandent un devis depuis la page. | lib/services.ts:107 |
| G5 | C'est souvent la première chose que vos clients voient. | Généralité non prouvée | Supprimer la phrase. | lib/services.ts:98 |
| G6 | Une application mobile ou web sur mesure, quand un site ne suffit plus | « sur mesure » / « ne suffit plus » : formules d'agence | Une application mobile ou web, pour la réservation, la fidélité ou un outil pour votre équipe. | lib/services.ts:132 |
| G7 | Chaque projet est différent, le prix aussi : on en parle, puis vous recevez un devis. | Lieu commun | Le prix dépend du projet : on en parle, puis je vous envoie un devis. | lib/services.ts:132 |
| G8 | Un prix fixe, sans surprise. / Pas de frais cachés. | Formules publicitaires répétées (étape 2 et engagement 1) | Étape 2 : « Le prix est fixé dans le devis. Un acompte de 40 % lance le projet, le solde est payé à la livraison. » Engagement 1 : garder « Le prix du devis est celui que vous payez. » et supprimer « Pas de frais cachés. » | lib/services.ts:172, 187 |
| G9 | Votre vitrine se construit sous vos yeux. | Accroche publicitaire. Elle décrit pourtant l'animation : acceptable. | Option plus sobre : « Ce que vos clients voient sur leur téléphone. » | Story.tsx:64 |
| G10 | Je crée des sites et des fiches Google pour que … soient trouvés, puis appelés. | Correct. « puis appelés » exclut WhatsApp (E1). | …pour que vos clients vous trouvent, puis vous appellent ou vous écrivent. | lib/product.ts:8 |
| G11 | Ce sont les bases d'un bon référencement local. | Légèrement générique, mais honnête. À garder. | — | lib/services.ts:236 |
| G12 | Ancienne page, disparaît avec la bascule : « Un site internet qui vous amène des clients. », « Parlons de votre projet », « À bientôt, près de chez vous. », « Des projets réels, et ce que j'y ai fait concrètement. », bandeau défilant avec ✦, flèches → sur chaque bouton, mot en italique dans chaque titre, numéros (01), pastilles « Réponse sous 24 h », grain, halo. | Tous typiques des sites générés. Le H1 promet aussi un résultat que la FAQ dit impossible à garantir. | Ne rien reprendre de ces éléments. | components/services/* (main) |

Points non « IA » à garder : « Vous parlez à celui qui fait. », « Vous m'envoyez un message, je m'en occupe. », « Personne ne peut le garantir honnêtement. », « Rien à préparer. », « Dites-moi ce que vous faites. ».

---

## 4. Ce qui manque et dépend d'Adel

- **SIRET, statut, mentions légales** : aucune page de mentions légales sur le site. Il manque l'éditeur, le SIRET, l'adresse, le directeur de publication et les coordonnées de l'hébergeur Vercel. [à demander]
- **Mention TVA / HT-TTC** sur les prix. [à demander]
- **CGV ou conditions** : propriété du site et du code, remise des accès à l'arrêt du suivi, délai de paiement du solde. [à demander]
- **Nom public et domaine** : Viktra sur adeldjahnit.com/services, ou viktra.fr ? Le titre de la page Confidentialité garde « Adel Djahnit ». [à demander]
- **Email @viktra.fr** pour remplacer adel.djahnit.pro@gmail.com (lib/services.ts:73, formulaire, JSON-LD, Confidentialité). [à demander]
- **Fiche Google Business de Viktra** : à créer, puis à relier depuis la page et le JSON-LD. [à demander]
- **Photo réelle d'Adel** (`ABOUT_PHOTO = null`, lib/product.ts:135) et **photos réelles** de travaux. [à demander]
- **Avis clients** : aucun sur la page, la seule voix extérieure est la lettre Kunagi. Demander un avis à Globalpronet et à JSL Judo, avec leur accord écrit. [à demander]
- **Accord des clients pour être cités** (Globalpronet, JSL Judo) et **lien ou captures** du site JSL Judo, avec sa ville. [à demander]
- **Bonee** : lien Google Play, et réponse à la question « développée seul ? » (E6). [à demander]
- **Délai de réponse réel** pour remplacer « sous 24 heures » (R1), et **horaires de disponibilité** (téléphone / WhatsApp). [à demander]
- **WhatsApp comme action principale** : choisir le libellé du bouton et son placement (hero, barre mobile, offres). [à demander]
- **Hébergement sans suivi** (R5), **prix de la version anglaise** (R11), **prix indicatif du nom de domaine**, **suivi des applications** (R12), **périmètre « réponses aux avis »** (R7), **devis en CHF** (R10). [à demander]
- **Zone** : canton de Vaud ou seulement Nyon (E9) ? [à demander]
- **Noms fictifs** de la démo : vérifier qu'aucun commerce réel ne les porte (R13). [à demander]
- Réseaux (LinkedIn, Instagram) éventuels à afficher. [à demander]

---

## Résumé

1. La branche `bascule-viktra` met la page Viktra sur /services. Les textes viennent de `lib/services.ts` (inchangé) et de `lib/product.ts`.
2. Prix, 1 à 5 pages, ~2 semaines, sans engagement, 40 % / solde : conformes au validé.
3. Écart principal : WhatsApp n'est qu'un lien secondaire. Le bouton principal reste « Devis gratuit » partout.
4. Bonee est dite « développée seul » : à confirmer. Le lien Google Play manque.
5. « Réponse sous 24 heures » apparaît 2 fois : engagement ferme à revoir.
6. Le délai « 2 semaines » du hero n'a pas la condition « après textes et photos ».
7. Questions ouvertes : hébergement sans suivi, prix de la version anglaise, devis en CHF, « canton de Vaud ».
8. « Fait IA » : surtout les chapitres de la story et la description du site vitrine. Une réécriture est proposée pour chacun.
9. Il manque les mentions légales (SIRET, hébergeur), l'email @viktra.fr, la fiche Google, les photos, les avis et les accords clients.
10. Le texte en ligne n'a pas pu être relevé mot pour mot (proxy). Le résumé en ligne correspond au code de `main`.
