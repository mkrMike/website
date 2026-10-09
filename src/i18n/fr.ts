import type { Dictionary } from './en'

export const fr: Dictionary = {
  meta: {
    homeTitle: 'Samatrica : l’assistant IA qui reçoit vos demandes de réservation 24h/24',
    homeDescription:
      'Un assistant IA dans le chat de votre site répond à vos clients 24h/24 et 7j/7 dans leur langue, trouve les créneaux libres et recueille les demandes de réservation, que vous confirmez. Votre équipe prend le relais si besoin.',
    clinicsTitle: 'Samatrica pour les cliniques : vos patients demandent un rendez-vous, jour et nuit',
    clinicsDescription:
      'Vos patients demandent un rendez-vous et obtiennent des réponses 24h/24 dans leur langue. Vous confirmez chaque demande ; votre accueil reprend la conversation quand c’est important.',
    signupTitle: 'Lancez-vous : Samatrica',
    signupDescription: 'Créez votre compte Samatrica et ajoutez l’assistant IA à votre site web.',
    contactTitle: 'Contact : Samatrica',
    contactDescription: 'Échangez avec l’équipe Samatrica.',
    termsTitle: 'Conditions d’utilisation : Samatrica',
    privacyTitle: 'Politique de confidentialité : Samatrica',
    refundTitle: 'Politique de remboursement : Samatrica',
    brandTitle: 'Marque : Samatrica',
  },

  nav: {
    clinics: 'Cliniques',
    contact: 'Contact',
    login: 'Se connecter',
    startTrial: 'Lancez-vous',
    menu: 'Menu',
    close: 'Fermer',
    skipToContent: 'Aller au contenu',
    home: 'Accueil Samatrica',
  },

  common: {
    startTrial: 'Lancez-vous',
    seeHowItWorks: 'Voir comment ça marche',
    learnMore: 'En savoir plus',
    backToHome: 'Retour à l’accueil',
    whatsapp: 'Discutez avec nous sur WhatsApp',
    trialNote: 'Sans engagement · Résiliable à tout moment · Vous ne payez que la période en cours',
    language: 'Langue',
    comingSoon: 'Bientôt disponible',
  },

  chat: {
    title: 'Assistant Samatrica',
    status: 'En ligne · répond instantanément',
    clinic: {
      customer1: 'Bonjour, est-il possible de voir un dermatologue cette semaine ?',
      assistant1: 'Bien sûr. Le Dr. ** a des créneaux libres jeudi à 10:30 et à 16:00. Lequel vous convient ?',
      customer2: 'Jeudi à 16:00, s’il vous plaît.',
      assistant2: 'Demande envoyée. Je vous ai transmis un code de vérification par e-mail et par SMS ; la clinique confirmera ensuite votre rendez-vous.',
      booked: 'Jeudi 16:00 · Dermatologie · Demande envoyée',
      confirmed: 'Confirmé par la clinique',
    },
    typing: 'L’assistant écrit',
    placeholder: 'Écrivez un message…',
  },

  home: {
    eyebrow: 'Assistant de réservation IA pour votre site web',
    heroTitle: 'Votre accueil, éveillé 24h/24.',
    heroTitleAccent: 'Dans toutes les langues.',
    heroSubtitle:
      'Samatrica répond à vos clients dans le chat de votre site, trouve les créneaux libres et recueille les demandes de réservation, de jour comme de nuit. Vous confirmez chacune d’elles, et votre équipe prend le relais dès qu’une touche humaine s’impose.',
    heroProof: 'Contactez-nous · Résiliable à tout moment',

    industriesEyebrow: 'Conçu pour les rendez-vous',
    industriesTitle: 'Pensé pour toutes les entreprises qui prennent des réservations',
    industriesSubtitle:
      'Cliniques, salons, spas, salles de sport, garages, consultants : partout où chaque message sans réponse est un client en moins.',
    clinicCards: [
      {
        title: 'Des réservations à toute heure',
        text: 'Vos clients demandent un rendez-vous à minuit et obtiennent des réponses sur vos services, sans appeler votre accueil.',
      },
      {
        title: 'Demandes par collaborateur et par prestation',
        text: 'Chaque collaborateur, salle ou ressource a ses propres horaires et sa durée de créneau : l’assistant ne propose que des créneaux réellement libres.',
      },
      {
        title: 'Clients vérifiés',
        text: 'Les clients confirment leur e-mail et leur téléphone avec un code avant que leur demande ne vous parvienne : fini les fausses réservations.',
      },
    ],

    howEyebrow: 'Comment ça marche',
    howTitle: 'En ligne en trois étapes',
    steps: [
      {
        title: 'Ajoutez le widget',
        text: 'Collez une seule ligne de code sur votre site web. Configurez vos ressources, vos horaires d’ouverture et vos heures de service dans le tableau de bord.',
      },
      {
        title: 'L’IA répond et recueille la demande',
        text: 'L’assistant répond aux questions, trouve les créneaux libres et recueille la demande de réservation. Le client la vérifie par e-mail et par SMS, puis vous la confirmez.',
      },
      {
        title: 'Votre équipe prend le relais',
        text: 'Quand un client demande à parler à quelqu’un, un collaborateur reprend la conversation en direct, pendant vos heures de service.',
      },
    ],

    featuresEyebrow: 'Fonctionnalités',
    featuresTitle: 'Tout ce dont votre accueil a besoin',
    features: [
      { title: 'Disponible 24h/24', text: 'Nuits, week-ends et jours fériés : aucune demande n’attend le lendemain matin.' },
      { title: 'Disponibilités réelles', text: 'L’assistant ne propose que des créneaux compatibles avec les horaires, les fermetures et les réservations existantes de chaque ressource.' },
      { title: 'Clients vérifiés', text: 'Les clients se vérifient avec un code reçu par e-mail et SMS : fini les fausses demandes.' },
      { title: 'Reprise en direct', text: 'Votre équipe suit chaque conversation en temps réel et peut intervenir en un clic.' },
      { title: 'Heures de service', text: 'En dehors de vos heures, l’assistant indique aux clients quand votre équipe sera de retour.' },
      { title: 'Un seul tableau de bord', text: 'Conversations, réservations, ressources, collaborateurs et horaires, réunis au même endroit.' },
    ],

    languagesEyebrow: 'Multilingue',
    languagesTitle: 'Parle la langue de vos clients',
    languagesText:
      'Vos clients écrivent en arabe, en anglais, en français, en russe ou dans n’importe quelle autre langue : l’assistant leur répond naturellement dans la même langue. Votre tableau de bord est disponible en six langues, dont l’arabe entièrement de droite à gauche.',
    languagesSample: [
      { lang: 'العربية', text: 'هل يوجد موعد يوم الخميس؟' },
      { lang: 'English', text: 'Is there a slot on Thursday?' },
      { lang: 'Français', text: 'Avez-vous un créneau jeudi ?' },
      { lang: 'Русский', text: 'Есть ли время в четверг?' },
    ],

    statsTitle: 'Pourquoi les entreprises choisissent Samatrica',
    stats: [
      { value: '24/7', label: 'Toujours disponible' },
      { value: '1', label: 'Ligne de code à installer' },
      { value: '6', label: 'Langues du tableau de bord' },
    ],

    faqEyebrow: 'FAQ',
    faqTitle: 'Vos questions, nos réponses',
    faq: [
      {
        q: 'Ai-je besoin d’un développeur pour l’installer ?',
        a: 'Non. Il suffit de coller une ligne de code sur votre site, comme pour un chat ou un outil de statistiques. Nous pouvons vous aider si besoin.',
      },
      {
        q: 'L’assistant confirme-t-il les réservations tout seul ?',
        a: 'Non. L’assistant recueille des demandes de réservation sur des créneaux libres, en fonction des ressources et des horaires d’ouverture que vous avez définis. Vous confirmez ou refusez chacune d’elles depuis le tableau de bord, et le client en est informé.',
      },
      {
        q: 'Que se passe-t-il quand un client veut parler à quelqu’un ?',
        a: 'Pendant vos heures de service, un collaborateur reprend la conversation en direct depuis le tableau de bord. En dehors de ces heures, l’assistant indique au client quand revenir.',
      },
      {
        q: 'Quelles langues parle-t-il ?',
        a: 'L’assistant répond dans la langue du client. Le tableau de bord est disponible en anglais, français, arabe, espagnol, russe et grec.',
      },
      {
        q: 'Y a-t-il un engagement ?',
        a: 'Non. Vous payez par période de facturation et pouvez résilier à tout moment : l’abonnement prend simplement fin au terme de la période déjà payée, et plus rien n’est prélevé.',
      },
      {
        q: 'Les données de mes clients sont-elles en sécurité ?',
        a: 'Chaque entreprise ne voit que ses propres clients, conversations et réservations. Les clients confirment leur adresse e-mail et leur numéro de téléphone avec un code avant qu’une demande de réservation ne vous parvienne.',
      },
    ],

    ctaTitle: 'Ne manquez plus jamais une réservation',
    ctaText: 'Lancez-vous et laissez Samatrica répondre à votre prochain client dès ce soir.',
  },

  clinics: {
    eyebrow: 'Pour les cliniques',
    title: 'Vos patients demandent un rendez-vous, jour et nuit.',
    subtitle:
      'Samatrica répond aux patients sur votre site, recueille leurs demandes de rendez-vous avec le bon médecin et libère votre accueil du téléphone.',
    painTitle: 'Votre accueil ne peut pas répondre à tout le monde',
    pains: [
      { title: 'Appels hors horaires', text: 'La plupart des patients cherchent un rendez-vous le soir, quand personne ne peut décrocher.' },
      { title: 'Lignes saturées', text: 'Vos secrétaires jonglent en même temps entre les appels, les patients sur place et l’administratif.' },
      { title: 'Réservations non vérifiées', text: 'Une réservation avec des coordonnées erronées, c’est un trou dans le planning et personne à contacter.' },
    ],
    benefitsTitle: 'Ce que Samatrica apporte à votre clinique',
    benefits: [
      { title: 'Demandes par médecin et par spécialité', text: 'Chaque médecin ou salle est une ressource avec ses propres horaires et sa durée de créneau.' },
      { title: 'Des patients servis la nuit', text: 'L’assistant répond aux questions sur vos services et recueille les demandes de rendez-vous 24h/24.' },
      { title: 'Patients vérifiés', text: 'Les patients se vérifient par e-mail et SMS avant que leur demande ne vous parvienne.' },
      { title: 'Des patients toujours informés', text: 'Vos patients sont avertis dès que vous confirmez ou annulez leur rendez-vous.' },
      { title: 'Reprise par l’accueil', text: 'Votre secrétaire reprend la conversation pour tout sujet sensible.' },
      { title: 'Fermetures et congés', text: 'Fermez l’agenda d’un médecin pendant ses congés, ou toute la clinique un jour férié.' },
    ],
    note: 'Samatrica gère les demandes de rendez-vous et les questions générales. Il ne donne aucun conseil médical.',
    ctaTitle: 'Offrez à vos patients un accueil qui ne dort jamais',
  },

  pricing: {
    eyebrow: 'Tarifs',
    title: 'Des formules simples qui évoluent avec vous',
    subtitle: 'Chaque formule inclut l’assistant IA, le tableau de bord et la reprise en direct.',
    popular: 'La plus populaire',
    choose: 'Lancez-vous',
    billing: 'Période de facturation',
    monthly: 'Mensuel',
    yearly: 'Annuel',
    currency: 'Devise',
    perMonth: '/ mois',
    perYear: '/ an',
    save: (percent: string) => `Économisez ${percent} % avec la facturation annuelle`,
    notAvailable: 'Non disponible dans cette devise',
    limits: {
      conversations: 'Conversations IA par mois',
      employees: 'Collaborateurs',
      resources: 'Ressources',
      widgets: 'Widgets pour site web',
    },
    unlimited: 'Illimité',
    included: 'Inclus dans toutes les formules',
    includedList: [
      'Assistant IA 24h/24',
      'Vérification par e-mail et SMS',
      'Reprise en direct',
      'Heures de service et horaires d’ouverture',
      'Tableau de bord en 6 langues',
    ],
    placeholderNote: 'Les prix et limites sont indicatifs et peuvent évoluer avant le lancement.',
    plans: {
      starter: { name: 'Starter', tagline: 'Pour un cabinet individuel' },
      pro: { name: 'Pro', tagline: 'Pour les équipes en croissance' },
      business: { name: 'Business', tagline: 'Pour les entreprises multisites' },
    },
  },

  signup: {
    title: 'Lancez-vous',
    subtitle: 'Sans engagement : résiliez à tout moment et ne payez que la période de facturation en cours.',
    businessName: 'Nom de l’entreprise',
    businessPhone: 'Téléphone de l’entreprise',
    phoneHint: 'Indiquez l’indicatif du pays, par ex. +971 4 234 5678',
    timezone: 'Fuseau horaire',
    adminEmail: 'Votre e-mail',
    adminEmailHint: 'Vous serez le premier administrateur du tableau de bord.',
    acceptTerms: 'J’accepte les {terms} et la {privacy}',
    termsLink: 'conditions d’utilisation',
    privacyLink: 'politique de confidentialité',
    submit: 'Continuer',
    required: 'Ce champ est obligatoire.',
    invalidEmail: 'Saisissez une adresse e-mail valide.',
    invalidPhone: 'Saisissez un numéro de téléphone valide avec l’indicatif du pays.',
    mustAccept: 'Veuillez accepter les conditions pour continuer.',
    thanksTitle: 'Merci !',
    thanksText: 'Nous avons bien reçu vos informations et nous vous contacterons très bientôt.',
    back: 'Modifier mes informations',
  },

  contact: {
    title: 'Contactez-nous',
    subtitle: 'Une question sur Samatrica, une démo pour votre entreprise ou une formule sur mesure ? Nous serions ravis d’échanger avec vous.',
    emailLabel: 'E-mail',
    placeholder: 'Nos coordonnées seront bientôt disponibles.',
  },

  legal: {
    termsTitle: 'Conditions d’utilisation',
    privacyTitle: 'Politique de confidentialité',
    refundTitle: 'Politique de remboursement',
    draft: 'Brouillon',
    placeholder: 'Cette page sera publiée avant le lancement. Son contenu est en cours de rédaction et de relecture.',
    draftNote: 'Ce projet de document est en cours de revue juridique et n’a pas encore de valeur contractuelle.',
    updated: 'Version provisoire du 8 octobre 2026',

    /** Section headings and paragraphs, rendered in order. */
    terms: [
      {
        title: '1. Qui nous sommes et objet des présentes conditions',
        paragraphs: [
          'Le Service est fourni par Samatrica OÜ, société à responsabilité limitée de droit estonien, immatriculée en Estonie sous le code de registre 16285192, numéro de TVA EE102401154, dont le siège social est situé Sepapaja tn 6, 15551 Tallinn, Estonie (« Samatrica »).',
          'Samatrica fournit un assistant IA qui répond aux visiteurs sur le site web d’une entreprise, identifie les créneaux disponibles et recueille les demandes de réservation, ainsi qu’un tableau de bord destiné à l’équipe de l’entreprise (le « Service »). Les présentes conditions constituent un contrat entre Samatrica et l’entreprise qui ouvre un compte (l’« Entreprise »), par exemple une clinique de santé, un salon ou toute autre entreprise qui prend des réservations. Elles ne créent aucun contrat entre Samatrica et les clients ou patients de l’Entreprise.',
        ],
      },
      {
        title: '2. Ce que le Service fait, et ne fait pas',
        paragraphs: [
          'L’assistant répond aux questions et recueille les demandes de rendez-vous à partir des ressources, horaires d’ouverture et informations configurés par l’Entreprise. Chaque demande de rendez-vous doit être confirmée ou refusée par l’Entreprise : l’assistant ne confirme jamais de rendez-vous de sa propre initiative.',
          'Le Service ne fournit ni conseil médical, ni diagnostic, ni traitement, et ne constitue pas un service d’urgence. L’Entreprise ne doit pas configurer ni utiliser l’assistant pour dispenser des conseils médicaux, et demeure seule responsable des soins qu’elle prodigue.',
        ],
      },
      {
        title: '3. Obligations de l’Entreprise',
        paragraphs: [
          'L’Entreprise préserve la confidentialité de ses identifiants de connexion et répond des actions de ses salariés dans le tableau de bord. Les informations qu’elle configure (prestations, praticiens, horaires, descriptions) doivent être exactes et licites.',
          'À l’égard de ses clients, l’Entreprise est le responsable du traitement : elle doit disposer d’une base légale pour traiter les données personnelles collectées via le chat, informer les clients de ce traitement dans ses propres politiques de confidentialité et répondre à leurs demandes d’exercice de droits. L’accord de traitement des données conclu entre l’Entreprise et Samatrica (article 6) régit les traitements effectués par Samatrica pour le compte de l’Entreprise.',
        ],
      },
      {
        title: '4. Utilisation acceptable',
        paragraphs: [
          'Le Service ne peut être utilisé à des fins illicites, pour envoyer des messages non sollicités, pour collecter des données de personnes sans base légale, pour sonder ou perturber la sécurité du Service, ni pour développer un produit concurrent. Le widget de chat ne peut être installé que sur des sites web contrôlés par l’Entreprise.',
        ],
      },
      {
        title: '5. Redevances et résiliation',
        paragraphs: [
          'Les redevances, périodes de facturation et moyens de paiement sont précisés lors de la souscription et peuvent être modifiés moyennant un préavis raisonnable ; les changements de prix ne s’appliquent jamais rétroactivement. Aucune durée minimale d’engagement n’est exigée : l’Entreprise peut résilier à tout moment, l’abonnement prend fin au terme de la période de facturation déjà payée, et plus rien n’est prélevé.',
        ],
      },
      {
        title: '6. Protection des données',
        paragraphs: [
          'Pour les données personnelles des clients et des autres utilisateurs du chat, l’Entreprise est le responsable du traitement et Samatrica le sous-traitant au sens du RGPD. Un accord de traitement des données, incluant les sous-traitants ultérieurs de Samatrica et ses mesures de sécurité, fait partie intégrante du présent contrat. Samatrica héberge les données du Service au sein de l’Union européenne (AWS, région de Francfort).',
          'Lorsque l’Entreprise fournit des soins de santé, les demandes de rendez-vous peuvent révéler des informations relatives à la santé, que le RGPD qualifie de catégorie particulière de données personnelles. L’Entreprise confirme être en droit de collecter de telles données auprès de ses patients, et Samatrica ne les traite que pour fournir le Service.',
        ],
      },
      {
        title: '7. Disponibilité',
        paragraphs: [
          'Samatrica fournit le Service avec le soin et la diligence raisonnables, sans toutefois garantir une disponibilité ininterrompue. Des maintenances planifiées et des interruptions peuvent survenir ; le widget de chat est conçu pour s’effacer discrètement du site de l’Entreprise lorsque le Service est injoignable.',
        ],
      },
      {
        title: '8. Responsabilité',
        paragraphs: [
          'Dans la mesure permise par la loi, la responsabilité totale de Samatrica au titre du présent contrat est limitée aux redevances versées par l’Entreprise au cours des 12 mois précédant le fait générateur de la réclamation, et Samatrica n’est pas responsable des dommages indirects tels que le manque à gagner. Aucune stipulation des présentes ne limite une responsabilité qui ne peut être limitée en vertu de la loi.',
        ],
      },
      {
        title: '9. Résiliation et données',
        paragraphs: [
          'Chaque partie peut résilier avec effet à la fin de la période payée ; Samatrica peut suspendre ou résilier immédiatement en cas de manquement grave aux présentes conditions. Après la résiliation, l’Entreprise peut demander un export de ses données pendant 30 jours ; passé ce délai, Samatrica supprime les données personnelles de l’Entreprise, sauf lorsque la loi impose une conservation plus longue.',
        ],
      },
      {
        title: '10. Modifications, droit applicable et litiges',
        paragraphs: [
          'Samatrica peut modifier les présentes conditions moyennant un préavis raisonnable ; la poursuite de l’utilisation après l’expiration du préavis vaut acceptation. Les présentes conditions sont régies par le droit estonien, et les tribunaux estoniens (le tribunal de comté de Harju en première instance) ont compétence exclusive.',
          'Les présentes conditions sont proposées en plusieurs langues à titre de commodité ; en cas de divergence, la version anglaise prévaut.',
        ],
      },
    ],

    refund: [
      {
        title: '1. Champ d’application de la présente politique',
        paragraphs: [
          'Samatrica est un service destiné aux entreprises, et non aux consommateurs. Le droit de rétractation légal de 14 jours prévu par le droit européen de la consommation ne s’applique donc pas ; les droits à remboursement énoncés dans la présente politique sont ceux que Samatrica accorde contractuellement.',
        ],
      },
      {
        title: '2. Résiliez à tout moment',
        paragraphs: [
          'Aucune durée minimale d’engagement n’est exigée. Vous pouvez résilier à tout moment en écrivant à contact@samatrica.com : l’abonnement prend fin au terme de la période de facturation déjà payée — la facture en cours —, plus rien n’est prélevé, et vous conservez l’accès jusqu’à cette échéance.',
        ],
      },
      {
        title: '3. Garantie « satisfait ou remboursé » de 14 jours sur le premier paiement',
        paragraphs: [
          'Si Samatrica ne convient pas à votre entreprise, écrivez à contact@samatrica.com dans les 14 jours suivant votre premier paiement et nous vous rembourserons ce paiement intégralement, sans justification à fournir. Le remboursement est effectué sur le moyen de paiement d’origine, en principe sous 10 jours ouvrés.',
        ],
      },
      {
        title: '4. Renouvellements',
        paragraphs: [
          'Les paiements de renouvellement (mensuels ou annuels) ne sont pas remboursables, mais vous pouvez résilier à tout moment : l’abonnement prend alors simplement fin au terme de la période déjà payée, et vous conservez l’accès jusqu’à cette date. Nous recommandons la facturation mensuelle tant que vous n’êtes pas certain du service.',
        ],
      },
      {
        title: '5. Erreurs de facturation et défaillances du service',
        paragraphs: [
          'Les montants prélevés par erreur (par exemple un double prélèvement, ou un prélèvement postérieur à une résiliation confirmée) sont toujours remboursés intégralement. Si une interruption prolongée de notre fait vous a substantiellement empêché d’utiliser le service, contactez-nous : nous créditerons ou rembourserons équitablement la période concernée.',
        ],
      },
      {
        title: '6. Comment demander un remboursement',
        paragraphs: [
          'Écrivez à contact@samatrica.com depuis l’adresse e-mail de votre compte, en indiquant le nom de votre établissement. Nous accusons réception sous 2 jours ouvrés et vous informons de la date d’émission du remboursement.',
          'La présente politique est proposée en plusieurs langues à titre de commodité ; en cas de divergence, la version anglaise prévaut.',
        ],
      },
    ],

    privacy: [
      {
        title: '1. Qui nous sommes',
        paragraphs: [
          'Samatrica est exploité par Samatrica OÜ, code de registre 16285192, Sepapaja tn 6, 15551 Tallinn, Estonie. Samatrica fournit un assistant IA de prise de rendez-vous destiné aux entreprises qui prennent des rendez-vous. La présente politique explique comment les données personnelles sont traitées sur ce site web et dans le widget de chat Samatrica installé sur les sites de ces entreprises. Pour toute question ou demande relative à vos données, écrivez à contact@samatrica.com.',
        ],
      },
      {
        title: '2. Visiteurs de ce site web',
        paragraphs: [
          'Lorsque vous nous contactez par e-mail ou WhatsApp, nous traitons vos coordonnées et le contenu de votre message afin de vous répondre (les messages WhatsApp sont également traités par WhatsApp selon sa propre politique de confidentialité). Nous conservons cette correspondance le temps nécessaire au traitement de votre demande et à notre relation commerciale.',
          'Ce site web ne dépose, quant à lui, aucun cookie de suivi ou publicitaire.',
        ],
      },
      {
        title: '3. Le widget de chat sur le site d’une entreprise',
        paragraphs: [
          'Lorsque vous échangez avec l’assistant Samatrica sur le site d’une entreprise, cette entreprise est le responsable du traitement et Samatrica traite vos données pour son compte. Nous traitons le contenu de la conversation et, si vous demandez une réservation, vos nom et prénom, adresse e-mail et numéro de téléphone, afin de vous répondre et de transmettre votre demande à l’entreprise.',
          'Lorsque l’entreprise est un prestataire de soins de santé, vos messages et demandes de rendez-vous peuvent révéler des informations relatives à votre santé. Ils ne sont utilisés que pour traiter votre demande ; l’entreprise à laquelle vous écrivez est responsable de ces données, et vous pouvez exercer vos droits auprès d’elle ou en nous écrivant.',
        ],
      },
      {
        title: '4. Traitement par IA',
        paragraphs: [
          'Les réponses de l’assistant sont générées par un modèle de langage IA. Le contenu des conversations est transmis à notre fournisseur d’IA à cette seule fin, dans le cadre d’un accord de traitement des données ; il n’est pas utilisé pour entraîner les modèles du fournisseur.',
        ],
      },
      {
        title: '5. Lieu de stockage des données',
        paragraphs: [
          'Les données du Service sont hébergées sur Amazon Web Services au sein de l’Union européenne (Francfort, Allemagne). Lorsqu’un sous-traitant ultérieur traite des données hors de l’UE, nous nous appuyons sur les garanties prévues par le RGPD pour de tels transferts, telles que les clauses contractuelles types de l’UE.',
        ],
      },
      {
        title: '6. Sous-traitants ultérieurs',
        paragraphs: [
          'Nous faisons appel à un petit nombre de prestataires pour exploiter le Service : Amazon Web Services (hébergement, UE), notre fournisseur de modèle de langage IA (réponses de l’assistant) et nos prestataires d’envoi d’e-mails et de SMS (codes de vérification et notifications). La liste à jour est disponible sur demande et est remise aux entreprises avec leur accord de traitement des données.',
        ],
      },
      {
        title: '7. Durées de conservation',
        paragraphs: [
          'Les conversations et demandes de réservation sont conservées tant que l’entreprise utilise le Service et en a besoin ; les codes de vérification expirent en quelques minutes et ne sont pas réutilisés. Lorsqu’une entreprise quitte Samatrica, ses données sont supprimées à l’issue d’un délai d’export de 30 jours, sauf lorsque la loi impose une conservation plus longue.',
        ],
      },
      {
        title: '8. Sécurité',
        paragraphs: [
          'Toutes les connexions sont chiffrées en transit (TLS). Les données de chaque entreprise sont cloisonnées : une entreprise ne peut consulter que ses propres conversations, clients et réservations. L’accès du personnel de Samatrica est limité à ce qu’exige l’exploitation du Service.',
        ],
      },
      {
        title: '9. Vos droits',
        paragraphs: [
          'En vertu du RGPD, vous pouvez demander l’accès à vos données personnelles, leur rectification ou leur effacement, la limitation du traitement, leur portabilité, et vous opposer à certains traitements. Écrivez à contact@samatrica.com (ou à l’entreprise avec laquelle vous avez échangé, pour les données traitées pour son compte) ; nous répondons dans les délais légaux. Vous pouvez également introduire une réclamation auprès de votre autorité de protection des données.',
        ],
      },
      {
        title: '10. Stockage local et modifications',
        paragraphs: [
          'Le widget de chat n’enregistre dans le stockage local de votre navigateur que ce qui est nécessaire pour maintenir votre conversation ouverte (un identifiant de conversation) : aucun suivi publicitaire ni suivi entre sites. Nous mettrons cette politique à jour au fil de l’évolution du Service et afficherons en tête de page la date de la version en vigueur.',
        ],
      },
    ],
  },

  footer: {
    tagline: 'L’assistant IA qui répond à vos clients et recueille les demandes de réservation, 24h/24 et 7j/7.',
    product: 'Produit',
    company: 'Entreprise',
    legal: 'Mentions légales',
    rights: 'Tous droits réservés.',
  },

  brand: {
    title: 'Logo',
    subtitle: 'Page interne : le logo Samatrica et ses déclinaisons. Non liée depuis le site et masquée des moteurs de recherche.',
    main: 'Logo principal',
    tealArc: 'Arc bleu canard (par défaut)',
    navyArc: 'Arc bleu marine',
    reversed: 'En réserve, sur fond bleu marine',
    oneColorNavy: 'Une couleur : bleu marine',
    oneColorBlack: 'Une couleur : noir (factures, tampons)',
    horizontal: 'Version horizontale',
    stacked: 'Version empilée',
    icon: 'Icône',
    iconSizes: 'En 96, 64, 48, 32, 24 et 16 px. À partir de 32 px et en dessous, l’arc est supprimé pour que le « s » reste net.',
  },

  notFound: 'Page introuvable',
}
