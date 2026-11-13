import { OfferPackage, SpecialOffer } from '../types';

export const COMPANY_INFO = {
  name: 'MATE CONSULTING',
  legalName: 'MATE Consulting (Entreprise Individuelle)',
  siren: '949 556 203',
  tagline: 'Externalisation du Pilotage Financier',
  slogan: 'Votre gestion. Notre expertise. Votre performance.',
  pillars: ['Data', 'Optimisation', 'Croissance'],
  founder: {
    name: 'L’Équipe MATE Consulting',
    title: 'Consultants Seniors en Gestion Financière Externalisée & Ingénierie Décisionnelle',
    phone: '+33 6 23 37 54 74',
    phoneFormatted: '06 23 37 54 74',
    email: 'Contact@mateconsulting.fr',
    location: 'Accompagnement à distance et sur site',
    whatsappUrl: 'https://wa.me/33623375474?text=Bonjour,%20je%20souhaite%20%C3%A9changer%20avec%20l%27%C3%A9quipe%20MATE%20Consulting.',
    certifications: [
      {
        name: 'AMF (Autorité des Marchés Financiers)',
        year: '2024',
        details: 'Attestation réglementaire, déontologie financière et environnement juridique',
      },
      {
        name: 'Bloomberg Market Concepts (BMC)',
        year: '2024',
        details: 'Maîtrise des terminaux financiers et analyse des agrégats économiques',
      },
      {
        name: "Expertise Excel & VBA Avancé",
        year: '2023',
        details: 'Conception d’architectures automatisées de gestion sans licence supplémentaire',
      },
    ],
  },
};

export const OFFERS: OfferPackage[] = [
  {
    id: 'essentiel',
    name: 'Formule Essentiel',
    subtitle: 'Organisation comptable & accompagnement déclaratif',
    target: 'Indépendants, consultants, professions libérales et micro-entreprises',
    hourlyRate: '25 à 35 € HT / h',
    hourlyRange: [25, 35],
    monthlyHours: '10h à 20h / mois',
    monthlyRange: [10, 20],
    recommendedBudget: '250 € à 700 € HT / mois',
    objective: 'Permettre à un entrepreneur ou professionnel libéral de disposer d’une organisation administrative et précomptable rigoureuse, de justificatifs classés et de déclarations honorées sans retard.',
    domains: [
      { domain: 'Organisation & Classement', details: 'Création du dossier administratif, collecte et tri chronologique de l’ensemble des pièces (factures, reçus, relevés).' },
      { domain: 'Précomptabilité Opérationnelle', details: 'Saisie préparatoire sur vos outils (Qonto, Ipaidthat), imputation comptable précise par nature de charge.' },
      { domain: 'Contrôle & Rapprochement', details: 'Rapprochement bancaire exhaustif, pointage des encaissements et décaissements.' },
      { domain: 'Suivi Échéancier Fiscal & Social', details: 'Préparation et calendrier des déclarations URSSAF, TVA, impôts et obligations sociales.' },
      { domain: 'Liaison Expert-Comptable', details: 'Constitution et transmission d’un dossier de clôture propre, sans perte de temps pour votre expert-comptable.' },
    ],
    deliverables: [
      'Dossier administratif & précomptable actualisé en temps réel',
      'Journal de suivi et indexation des pièces justificatives',
      'État périodique des recettes et des dépenses',
      'Calendrier proactif des échéances fiscales et sociales',
      'Dossier de liaison ordonné pour l’expert-comptable',
    ],
  },
  {
    id: 'business',
    name: 'Formule Business',
    subtitle: 'Gestion administrative & financière externalisée',
    target: 'TPE et dirigeants ayant une activité commerciale régulière et des flux à sécuriser',
    hourlyRate: '35 à 45 € HT / h',
    hourlyRange: [35, 45],
    monthlyHours: '20h à 35h / mois',
    monthlyRange: [20, 35],
    recommendedBudget: '700 € à 1 575 € HT / mois',
    objective: 'Aller au-delà de la précomptabilité en assurant un suivi actif de la trésorerie au quotidien, la maîtrise des encaissements clients et la visibilité continue sur les marges.',
    domains: [
      { domain: 'Tout le socle Essentiel', details: 'Organisation complète, saisie précomptable, lettrage et lien expert-comptable inclus.' },
      { domain: 'Pilotage & Prévision de Trésorerie', details: 'Centralisation des comptes bancaires, suivi quotidien des disponibilités et plan de trésorerie glissant à 12 semaines.' },
      { domain: 'Gestion du Poste Clients & Recouvrement', details: 'Suivi rigoureux de l’échéancier, balance âgée des créances, relances amiables et graduelles (mail & téléphone) pour réduire votre DSO.' },
      { domain: 'Gestion Fournisseurs & Règlements', details: 'Contrôle des factures fournisseurs, vérification des bons à payer et préparation des propositions de virement.' },
      { domain: 'Reporting Périodique & Points d’Attention', details: 'Synthèse mensuelle des encaissements/décaissements et note d’alerte sur la santé de trésorerie.' },
    ],
    deliverables: [
      'Tableau de bord de trésorerie glissant à 12 semaines',
      'Balance âgée clients et planning de relances graduelles',
      'État des factures fournisseurs prêtes à être réglées',
      'Synthèse financière mensuelle (charges, rentabilité, BFR)',
      'Tous les livrables de la formule Essentiel',
    ],
  },
  {
    id: 'performance',
    name: 'Formule Performance',
    subtitle: 'Contrôle de gestion, pilotage financier & optimisation opérationnelle',
    target: 'TPE & PME en structuration ou en accélération cherchant à piloter leur rentabilité',
    hourlyRate: '45 à 60 € HT / h',
    hourlyRange: [45, 60],
    monthlyHours: '25h à 40h / mois',
    monthlyRange: [25, 40],
    recommendedBudget: '1 125 € à 2 400 € HT / mois',
    popular: true,
    highlightColor: '#C04A1A',
    badge: 'Recommandé',
    objective: 'Externalisation complète du pilotage financier au format agile pour transformer la donnée brute en boussole stratégique, anticiper les besoins en financement et maximiser l’EBITDA.',
    domains: [
      { domain: 'Tout le socle Business', details: 'Précomptabilité complète, trésorerie glissante 12 semaines et recouvrement inclus.' },
      { domain: 'Budgétisation & Prévisions Annuelles', details: 'Construction du budget prévisionnel annuel et réactualisation trimestrielle des scénarios d’exploitation.' },
      { domain: 'Analyse des Marges & Seuil de Rentabilité', details: 'Calcul précis des coûts de revient par prestation/produit, calcul du point mort en CA et volume.' },
      { domain: 'Tableau de Bord KPIs Décisionnel', details: 'Indicateurs clés sur-mesure (rentabilité, liquidité, DSO, productivité, marge brute).' },
      { domain: 'Accompagnement Stratégique du Dirigeant', details: 'Réunions périodiques de synthèse, préparation des dossiers bancaires et d’investisseurs.' },
    ],
    deliverables: [
      'Tableau de bord financier & opérationnel de Direction',
      'Budget prévisionnel annuel et suivi des écarts réel vs prévisionnel',
      'Calculateur de seuil de rentabilité et marges contributives',
      'Rapport de performance périodique commenté avec plans d’actions',
      'Réunions mensuelles ou trimestrielles de conseil stratégique',
    ],
  },
];

export const SPECIAL_OFFER: SpecialOffer = {
  id: 'optimisation',
  name: 'Optimisation & Automatisation',
  subtitle: 'Digitalisation des processus & Ingénierie des Outils Décisionnels',
  target: 'Entreprises souhaitant éliminer les erreurs manuelles, fiabiliser la donnée et gagner du temps',
  hourlyRate: '50 à 80 € HT / h',
  hourlyRange: [50, 80],
  mode: 'Au projet sur devis ou en mission dédiée',
  objective: 'Améliorer l’efficience globale de votre organisation administrative et financière grâce à des matrices Excel sur-mesure automatisées (sans licence logicielle coûteuse) et des circuits modernes.',
  domains: [
    { domain: 'Audit & Diagnostic Opérationnel', details: 'Analyse des circuits administratifs actuels, identification des points de friction et des doublons.' },
    { domain: 'Matrices Excel & Macros VBA Sur-Mesure', details: 'Calculateurs de prix de vente optimisés, simulateurs de coûts de revient, prévisionnels automatisés.' },
    { domain: 'Tableaux de Bord Power BI Interactifs', details: 'Connexion de vos flux de données et création de visuels décisionnels clairs et dynamiques.' },
    { domain: 'Automatisation des Workflows & Facturation', details: 'Modèles de facturation automatisés, relances planifiées et intégration bancaire.' },
    { domain: 'Formation & Transmission de Compétences', details: 'Prise en main guidée des outils développés, fiches pratiques et assistance post-livraison.' },
  ],
  deliverables: [
    'Rapport de diagnostic organisationnel et axes d’optimisation',
    'Fichiers et matrices Excel automatisés avec macros VBA pérennes',
    'Tableau de bord Power BI interactif connecté à vos sources',
    'Guides d’utilisation opérationnels et documentation technique',
    'Session de formation sur-mesure pour votre équipe',
  ],
};

export const COMPARISON_POINTS = [
  {
    criterion: 'Qualification & Rigueur Technique',
    mateConsulting: 'Certifications AMF & Bloomberg BMC, maîtrise SAP, Excel VBA, Power BI, SQL & Python',
    traditionalSecretary: 'Généraliste administrative, sans compétence en analyse financière de haut de bilan',
    bigFirmDAF: 'Consultants juniors souvent détachés par des cabinets aux honoraires exorbitants',
  },
  {
    criterion: 'Coût & Engagement',
    mateConsulting: 'Facturation horaire souple (dès 25-50 €/h), sans engagement, 0 € de frais de structure',
    traditionalSecretary: 'Tarif horaire bas mais valeur ajoutée limitée au secrétariat pur',
    bigFirmDAF: 'Forfaits mensuels élevés (> 3 000 €/m) souvent inaccessibles pour une TPE',
  },
  {
    criterion: 'Outillage Logiciel & Coûts Cachés',
    mateConsulting: 'Développement de matrices Excel/VBA sur-mesure sans surcoût de licence logicielle',
    traditionalSecretary: 'Outils basiques manuels avec risque d’erreurs de ressaisie',
    bigFirmDAF: 'Impose l’achat de licences ERP coûteuses à la charge du client',
  },
  {
    criterion: 'Impact Décisionnel',
    mateConsulting: 'Transformation de la donnée brute en prévisions de trésorerie, marges et alertes stratégiques',
    traditionalSecretary: 'Simple saisie documentaire passive sans vision prospective',
    bigFirmDAF: 'Rapports complexes souvent trop volumineux pour les besoins concrets d’une TPE',
  },
];

export const FREQUENT_QUESTIONS = [
  {
    q: 'Quelle est la différence entre MATE Consulting et mon expert-comptable ?',
    a: 'MATE Consulting et votre expert-comptable sont complémentaires et forment une équipe au service de votre sérénité. MATE Consulting intervient en amont (précomptabilité opérationnelle, classement, lettrage, pilotage quotidien de la trésorerie et relance des factures). Nous préparons des dossiers impeccables pour votre expert-comptable, qui se concentre ainsi sur la révision, le bilan annuel officiel et la certification fiscale sans perdre de temps en relances administratives.',
  },
  {
    q: 'Suis-je engagé dans la durée ?',
    a: 'Non. MATE Consulting prône une flexibilité absolue. Nos prestations récurrentes (Essentiel, Business, Performance) sont modulables au mois le mois en fonction de vos fluctuations d’activité, et l’offre spéciale d’automatisation se réalise au forfait sur devis.',
  },
  {
    q: 'Comment démarre une collaboration ?',
    a: 'Nous commençons par un diagnostic flash offert de 30 minutes (en visioconférence ou par téléphone). Nous évaluons vos volumes de factures, vos outils actuels et vos priorités pour définir ensemble le volume d’heures idéal et la formule la plus avantageuse.',
  },
  {
    q: 'Puis-je faire évoluer mon forfait ?',
    a: 'Absolument. De nombreuses entreprises démarrent par la formule Essentiel pour sécuriser leur précomptabilité, puis évoluent vers la formule Business ou Performance au fur et à mesure que leur chiffre d’affaires et leurs effectifs augmentent.',
  },
  {
    q: 'Quels outils utilisez-vous au quotidien ?',
    a: 'Nous maîtrisons votre écosystème complet : SAP, Bloomberg, Power BI, Excel (VBA), SQL, Python, Power Automate, Qonto, iPaidThat, Indy, Henrri, Silae RH et Supabase.',
  },
  {
    q: 'Intervenez-vous sur site ou à distance ?',
    a: 'Nous intervenons à distance avec des points réguliers en visioconférence pour une réactivité maximale et des coûts maîtrisés, ainsi que sur site lors des étapes clés de cadrage ou de revues stratégiques.',
  },
];
