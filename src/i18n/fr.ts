import type { Dictionary } from './en'

export const fr: Dictionary = {
  meta: {
    homeTitle: 'Samatrica : l’assistant IA qui reçoit vos demandes de réservation 24h/24',
    homeDescription:
      'Un assistant IA dans le chat de votre site répond à vos clients 24h/24 et 7j/7 dans leur langue, trouve les créneaux libres et recueille les demandes de réservation, que vous confirmez. Votre équipe prend le relais si besoin.',
    hotelsTitle: 'Samatrica pour les hôtels : vos clients demandent leur séjour, jour et nuit',
    hotelsDescription:
      'Vos clients posent leurs questions sur vos chambres et demandent un séjour 24 h/24, dans leur langue. Seules les chambres vraiment libres à leurs dates sont proposées, et vous confirmez chaque demande.',
    salonsTitle: 'Samatrica pour les salons de beauté : vos clients demandent un rendez-vous, jour et nuit',
    salonsDescription:
      'Vos clients posent leurs questions sur vos prestations et demandent un créneau avec leur styliste 24h/24, dans leur langue. Seuls les créneaux vraiment libres sont proposés, et vous confirmez chaque demande.',
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
    hotels: 'Hôtels',
    salons: 'Salons',
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
    salon: {
      customer1: 'Bonjour, puis-je réserver une coloration vendredi ?',
      assistant1: 'Bien sûr. Avec Anna ou Bob, ou la première personne disponible ?',
      customer2: 'Peu importe, vers 11:00.',
      assistant2: 'Vendredi, j’ai 11:00, 11:15 ou 11:45. Lequel vous convient ?',
      customer3: '11:00, s’il vous plaît.',
      booked: 'Coloration avec Anna · Vendredi 11:00–11:45 · 250 AED · Demande envoyée',
      confirmed: 'Confirmé par le salon',
    },
    hotel: {
      customer1: 'Bonjour, avez-vous une chambre double du vendredi au dimanche ?',
      assistant1: 'Oui. Pour ces 2 nuits, la Double Vue Mer est libre, à 450 AED la nuit, soit 900 AED au total. Je fais la demande pour vous ?',
      customer2: 'Oui, s’il vous plaît.',
      assistant2: 'Demande envoyée. Je vous ai transmis un code de vérification par e-mail ; l’hôtel confirmera ensuite votre séjour.',
      booked: 'Double Vue Mer · Ven–Dim · 2 nuits · 900 AED · Demande envoyée',
      confirmed: 'Confirmé par l’hôtel',
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
    valueCards: [
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
        text: 'L’assistant répond aux questions, trouve les créneaux libres et recueille la demande de réservation. Le client la vérifie par e-mail, puis vous la confirmez.',
      },
      {
        title: 'Votre équipe prend le relais',
        text: 'Quand un client demande à parler à quelqu’un, un collaborateur reprend la conversation en direct, pendant vos heures de service.',
      },
    ],

    // The dashboard's week calendar (DashboardMock), after "How it works".
    dashboard: {
      eyebrow: 'Votre tableau de bord',
      title: 'Chaque réservation arrive dans votre semaine',
      text: 'Les demandes prises la nuit par l’assistant vous attendent le matin dans votre calendrier. Voyez la semaine de toute l’équipe, ou celle d’une seule personne, et confirmez en un clic.',
      points: [
        'Vue semaine de toute l’équipe, ou d’une seule personne',
        'Confirmer, terminer ou annuler en un clic',
        'Des comptes employés qui ne voient que leur propre agenda',
      ],
      mock: {
        brand: 'Glow Salon',
        available: 'Disponible',
        today: 'Aujourd’hui',
        list: 'Liste',
        week: 'Semaine',
        fromChat: 'Nouveau · depuis le chat',
        confirmed: 'Confirmée',
        toConfirm: 'À confirmer',
        services: { haircut: 'Coupe', colour: 'Couleur', balayage: 'Balayage', manicure: 'Manucure', blowdry: 'Brushing' },
      },
    },

    featuresEyebrow: 'Fonctionnalités',
    featuresTitle: 'Tout ce dont votre accueil a besoin',
    features: [
      { title: 'Disponible 24h/24', text: 'Nuits, week-ends et jours fériés : aucune demande n’attend le lendemain matin.' },
      { title: 'Disponibilités réelles', text: 'L’assistant ne propose que des créneaux compatibles avec les horaires, les fermetures et les réservations existantes de chaque ressource.' },
      { title: 'Clients vérifiés', text: 'Les clients se vérifient avec un code reçu par e-mail : fini les fausses demandes.' },
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

  hotels: {
    eyebrow: 'Pour les hôtels et locations de vacances',
    title: 'Vos clients réservent leur séjour, jour et nuit.',
    subtitle:
      'Samatrica répond aux clients sur votre site dans leur langue, vérifie quelles chambres sont vraiment libres à leurs dates et prend la demande de réservation, pour que votre réception se consacre aux clients présents.',
    painTitle: 'Votre réception ne peut pas répondre à chaque message',
    pains: [
      { title: 'Des questions à toute heure', text: 'Les clients d’autres fuseaux horaires écrivent la nuit, quand personne n’est à la réception.' },
      { title: 'Une réception débordée', text: 'Arrivées, départs et appels téléphoniques se disputent le même réceptionniste.' },
      { title: 'Des allers-retours sur les dates', text: 'Savoir quelle chambre est libre pour quelles nuits demande message après message.' },
    ],
    benefitsTitle: 'Ce que Samatrica fait pour votre hôtel',
    benefits: [
      { title: 'Des chambres réservées à la nuit', text: 'Chaque chambre ou type de chambre a ses heures d’arrivée et de départ, son séjour minimum et maximum, et son prix par nuit.' },
      { title: 'Des clients servis la nuit', text: 'L’assistant répond aux questions sur vos chambres et vos services et prend les demandes de réservation 24 h/24, dans la langue du client.' },
      { title: 'Seulement des nuits vraiment libres', text: 'Seules les chambres libres pour chaque nuit du séjour sont proposées, en dehors des dates que vous avez fermées.' },
      { title: 'Des clients vérifiés', text: 'Les clients vérifient leur e-mail avant que leur demande ne vous parvienne.' },
      { title: 'Des clients tenus informés', text: 'Les clients sont avertis dès que vous confirmez ou annulez leur séjour.' },
      { title: 'Votre réception prend le relais', text: 'Votre équipe reprend la conversation si besoin et peut réserver un séjour pour n’importe quel client depuis le tableau de bord.' },
    ],
    note: 'Chaque séjour est une demande que votre hôtel confirme. Samatrica n’encaisse ni paiement ni acompte.',
    ctaTitle: 'Offrez à vos clients une réception qui ne dort jamais',
  },

  salons: {
    eyebrow: 'Pour les salons de beauté',
    title: 'Vos clients réservent leur prochaine visite, jour et nuit.',
    subtitle:
      'Samatrica répond à vos clients sur votre site, dans leur langue et à partir de votre carte de prestations. Il trouve un créneau vraiment libre avec le bon styliste et recueille la demande de réservation, pendant que votre équipe reste auprès du client au fauteuil.',
    painTitle: 'Votre équipe ne peut pas répondre en travaillant',
    pains: [
      { title: 'Les mains occupées, le téléphone sonne', text: 'Vos stylistes ne peuvent pas décrocher en pleine coloration ou en pleine coupe.' },
      { title: 'Des messages après la fermeture', text: 'Beaucoup de clients cherchent un créneau le soir, quand le salon est fermé.' },
      { title: 'Des allers-retours sur les horaires', text: 'Trouver un créneau qui convient à la prestation et au bon styliste demande message après message.' },
    ],
    benefitsTitle: 'Ce que Samatrica apporte à votre salon',
    benefits: [
      { title: 'Votre carte de prestations', text: 'Chaque prestation a sa durée, son prix ou « sur demande », et une description à partir de laquelle l’assistant répond.' },
      { title: 'Leur styliste, ou le premier disponible', text: 'Le client choisit son styliste ou « le premier disponible », et le salon confie la réservation à celui qui en a le moins ce jour-là.' },
      { title: 'Uniquement des créneaux vraiment libres', text: 'Toute la prestation tient dans les horaires du styliste, hors jours de repos et fermetures du salon, sans chevaucher une autre réservation, par pas de 15 minutes.' },
      { title: 'Réservé depuis le chat', text: 'L’assistant guide le client de la prestation au styliste, puis au jour et à l’heure. Les e-mails nomment la réservation, et un code de réservation permet au client de la consulter ou de l’annuler.' },
      { title: 'Clients vérifiés', text: 'Les clients vérifient leur e-mail avant que leur demande ne vous parvienne.' },
      { title: 'Votre équipe prend le relais', text: 'Votre équipe reprend la conversation pendant les heures d’ouverture et peut réserver n’importe quel client, à la minute près, depuis le tableau de bord.' },
    ],
    note: 'Chaque réservation est une demande que votre salon confirme. Samatrica n’encaisse ni paiement ni acompte.',
    ctaTitle: 'Laissez vos clients réserver pendant que votre équipe s’occupe d’eux',
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
      'Vérification par e-mail',
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
    placeholder: 'Cette page sera publiée avant le lancement. Son contenu est en cours de rédaction et de relecture.',
    updated: 'Dernière mise à jour : 25 octobre 2026',

    /** Section headings and paragraphs, rendered in order. */
    terms: [
      {
        title: '1. Qui nous sommes et objet des présentes conditions',
        paragraphs: [
          'Le Service est fourni par Samatrica OÜ, société à responsabilité limitée immatriculée au registre du commerce estonien sous le numéro 16285192, LEI 984500DBA4ZE2HM61434, numéro de TVA EE102401154, dont le siège est situé Sepapaja tn 6, Lasnamäe linnaosa, 15551 Tallinn, Harju maakond, Estonie (« Samatrica »).',
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
          'L’Entreprise préserve la confidentialité de ses identifiants de connexion, répond des actions de ses salariés dans le tableau de bord et informe Samatrica sans délai à l’adresse contact@samatrica.com si elle soupçonne qu’un compte a été compromis. Les informations qu’elle configure (prestations, personnel, prix, horaires, descriptions) doivent être exactes et licites, et ne doivent comporter ni données personnelles de clients ni aucune donnée sensible dont le Service n’a pas besoin.',
          'L’Entreprise traite avec diligence les demandes de réservation qu’elle reçoit par l’intermédiaire du Service, en les confirmant ou en les refusant dans le tableau de bord, et respecte envers ses clients les prix, prestations et conditions qu’elle a configurés. Tout différend avec un client concernant une réservation, un prix ou une prestation est réglé entre l’Entreprise et ce client.',
          'L’Entreprise respecte toutes les lois applicables à sa propre activité, notamment les règles relatives à la protection des consommateurs, à l’affichage des prix et aux autorisations propres à son secteur, et n’utilise pas le Service pour prendre des réservations pour des mineurs en violation de la loi.',
          'À l’égard de ses clients, l’Entreprise est le responsable du traitement : elle doit disposer d’une base légale pour traiter les données personnelles collectées via le chat, informer les clients de ce traitement dans une politique de confidentialité publiée sur son site web, vers laquelle le widget de chat peut renvoyer, et répondre à leurs demandes en matière de protection des données. Les coordonnées collectées via le chat ne peuvent être utilisées que pour traiter la demande et la réservation du client ; l’Entreprise ne peut les utiliser à des fins de prospection commerciale que si le client y a consenti séparément lorsque la loi l’exige.',
          'L’Entreprise coopère avec Samatrica en matière de protection des données : elle transmet sans délai toute demande, réclamation ou requête émanant d’une personne ou d’une autorité qui concerne le traitement effectué par Samatrica, et informe Samatrica de toute enquête impliquant le widget de chat. L’accord de traitement des données conclu entre l’Entreprise et Samatrica (article 9) régit les traitements effectués par Samatrica pour le compte de l’Entreprise.',
        ],
      },
      {
        title: '4. Utilisation acceptable',
        paragraphs: [
          'Le Service ne peut être utilisé à des fins illicites, pour envoyer des messages non sollicités, pour collecter des données de personnes sans base légale, pour sonder ou perturber la sécurité du Service, ni pour développer un produit concurrent. Le widget de chat ne peut être installé que sur des sites web contrôlés par l’Entreprise.',
        ],
      },
      {
        title: '5. Réponses générées par l’IA',
        paragraphs: [
          'Les réponses de l’assistant sont générées automatiquement par une intelligence artificielle à partir des informations configurées par l’Entreprise. Par nature, les systèmes d’IA peuvent produire des réponses incomplètes, inexactes, obsolètes ou inappropriées, mal comprendre une demande ou ne pas l’enregistrer. Samatrica ne garantit pas l’exactitude, l’exhaustivité ou l’adéquation d’une quelconque réponse, et les réponses n’engagent pas Samatrica. L’Entreprise doit maintenir les informations qu’elle configure exactes et à jour, vérifier régulièrement les conversations et les demandes de réservation dans le tableau de bord, et demeure seule responsable envers ses clients des informations, des prix, des réservations et des services qu’elle propose.',
          'Le widget informe les visiteurs qu’ils échangent avec un assistant IA, comme l’exige le règlement européen sur l’intelligence artificielle, et l’Entreprise ne doit ni le masquer ni laisser entendre le contraire. Samatrica n’est pas responsable des décisions prises, ni des réservations effectuées, manquées ou enregistrées en double, sur la base d’une réponse de l’IA, ni d’aucune réclamation des clients de l’Entreprise qui en découlerait.',
        ],
      },
      {
        title: '6. Redevances et résiliation',
        paragraphs: [
          'Les redevances, périodes de facturation et moyens de paiement sont précisés lors de la souscription et peuvent être modifiés moyennant un préavis d’au moins 30 jours par e-mail ; les changements de prix ne s’appliquent jamais rétroactivement, et l’Entreprise peut résilier avant leur entrée en vigueur. Aucune durée minimale d’engagement n’est exigée : l’Entreprise peut résilier à tout moment, l’abonnement prend fin au terme de la période de facturation déjà payée, et plus rien n’est prélevé. Des frais de mise en place uniques, du montant indiqué à l’inscription, pour la configuration des prestations, des prix, du personnel et du widget de chat de l’Entreprise, sont facturés à l’inscription ; ils ne sont pas remboursables une fois ce travail effectué, comme le précise la politique de remboursement.',
          'Les factures sont payables à leur date d’échéance. En cas de retard de paiement, Samatrica peut appliquer des intérêts de retard au taux prévu par la loi estonienne pour les transactions commerciales et, si le paiement reste dû 7 jours après un rappel par e-mail, suspendre l’accès au Service jusqu’à réception du paiement ; les redevances restent dues pendant la suspension.',
          'Les redevances s’entendent hors taxe sur la valeur ajoutée et autres taxes. Pour les Entreprises établies en Estonie, la TVA estonienne au taux applicable est ajoutée à la facture. Les Entreprises établies dans un autre État membre de l’UE qui fournissent un numéro de TVA valide sont facturées hors TVA selon le mécanisme d’autoliquidation et acquittent la TVA dans leur propre pays ; les Entreprises établies hors de l’UE acquittent toute TVA ou taxe similaire due dans leur pays.',
        ],
      },
      {
        title: '7. Propriété intellectuelle',
        paragraphs: [
          'Samatrica et ses concédants sont propriétaires du Service, y compris de ses logiciels, de sa conception et de sa documentation. Pendant la durée de l’abonnement, l’Entreprise bénéficie d’un droit non exclusif et non transférable d’utiliser le Service pour sa propre activité. L’Entreprise ne peut copier, modifier, décompiler ni revendre le Service, sauf dans la mesure expressément permise par la loi.',
          'L’Entreprise conserve tous les droits sur le contenu qu’elle fournit (descriptions, prestations, images, horaires) et accorde à Samatrica le droit d’utiliser ce contenu uniquement pour fournir le Service. Samatrica peut utiliser librement les suggestions et retours concernant le Service, sans obligation envers l’Entreprise.',
        ],
      },
      {
        title: '8. Confidentialité',
        paragraphs: [
          'Chaque partie garde confidentielles les informations non publiques reçues de l’autre dans le cadre du Service, ne les utilise que pour l’exécution du présent contrat et ne les communique qu’à ses salariés et conseillers qui en ont besoin et sont tenus à la confidentialité, ou lorsque la loi ou un tribunal l’exige. Cette obligation se poursuit pendant trois ans après la fin du contrat ; les données personnelles restent protégées comme décrit à l’article 9 et dans l’accord de traitement des données.',
        ],
      },
      {
        title: '9. Protection des données',
        paragraphs: [
          'Pour les données personnelles des clients et des autres utilisateurs du chat, l’Entreprise est le responsable du traitement et Samatrica le sous-traitant au sens du règlement général de l’UE sur la protection des données (RGPD) et de la loi estonienne sur la protection des données personnelles. Un accord de traitement des données, incluant les sous-traitants ultérieurs de Samatrica et ses mesures de sécurité, fait partie intégrante du présent contrat. Samatrica héberge les données du Service auprès d’un hébergeur tiers situé dans l’Union européenne.',
          'Lorsque l’Entreprise fournit des soins de santé, les demandes de rendez-vous peuvent révéler des informations relatives à la santé, que le RGPD qualifie de catégorie particulière de données personnelles. L’Entreprise confirme être en droit de collecter de telles données auprès de ses patients, et Samatrica ne les traite que pour fournir le Service.',
        ],
      },
      {
        title: '10. Disponibilité',
        paragraphs: [
          'Le Service est fourni « en l’état » et « selon disponibilité ». Samatrica ne garantit pas qu’il sera ininterrompu, exempt d’erreurs ou de bogues, qu’il répondra aux besoins spécifiques de l’Entreprise, ni qu’il fonctionnera avec tout site web, navigateur ou appareil. Des maintenances planifiées, des mises à jour, des interruptions et des erreurs peuvent survenir, y compris du fait des fournisseurs d’hébergement, d’infrastructure d’IA, de messagerie électronique ou d’accès à internet ; le widget de chat est conçu pour s’effacer discrètement du site de l’Entreprise lorsque le Service est injoignable. L’indisponibilité n’ouvre droit à aucun remboursement ni à aucune réduction des redevances, sauf dans les conditions prévues par la politique de remboursement.',
          'Samatrica développe le Service en continu et peut à tout moment, sans préavis, ajouter, modifier, suspendre ou supprimer des fonctionnalités, l’interface utilisateur, des intégrations ainsi que les logiciels et modèles d’IA sous-jacents, à condition que la fonction essentielle du Service (un assistant IA recevant des demandes de réservation, avec un tableau de bord) soit maintenue. Lorsqu’une modification supprime une fonctionnalité sur laquelle l’Entreprise s’appuie de manière substantielle, l’Entreprise peut résilier avec effet immédiat et obtenir le remboursement, au prorata, des redevances payées d’avance pour la période restante.',
          'Il incombe à l’Entreprise de conserver ses propres enregistrements des réservations et des coordonnées de clients dont elle a besoin ; elle peut les exporter depuis le tableau de bord à tout moment.',
        ],
      },
      {
        title: '11. Responsabilité',
        paragraphs: [
          'Dans toute la mesure permise par la loi, Samatrica n’est pas responsable des dommages indirects ou consécutifs, ni des pertes de bénéfices, de chiffre d’affaires, de réservations, de clients, de réputation, d’opportunités commerciales ou de données, y compris les pertes causées par des bogues, des erreurs, l’indisponibilité du Service ou des réponses de l’IA, que ce soit sur un fondement contractuel, délictuel ou autre.',
          'La responsabilité totale de Samatrica découlant du présent contrat ou en lien avec celui-ci, toutes réclamations confondues, est limitée aux redevances effectivement versées par l’Entreprise au cours des 3 mois précédant le fait générateur de la réclamation. Toute réclamation doit être notifiée par écrit dans un délai de 6 mois à compter du jour où l’Entreprise en a eu connaissance.',
          'Ces limitations ne s’appliquent pas à la responsabilité pour manquement intentionnel ou faute lourde, pour décès ou dommages corporels, ni à toute autre responsabilité qui ne peut être limitée ou exclue en vertu du droit applicable.',
          'L’Entreprise garantit et indemnise Samatrica, ses dirigeants et ses salariés contre toutes réclamations, pertes, amendes et frais (y compris des honoraires d’avocat raisonnables) résultant d’une violation par l’Entreprise des présentes conditions ou de la législation sur la protection des données, des informations qu’elle configure, des services qu’elle fournit à ses clients, ainsi que des réclamations de ses clients relatives aux réservations ou aux réponses de l’assistant.',
        ],
      },
      {
        title: '12. Résiliation et données',
        paragraphs: [
          'Chaque partie peut résilier avec effet à la fin de la période payée ; Samatrica peut suspendre ou résilier immédiatement en cas de manquement grave aux présentes conditions. Après la résiliation, l’Entreprise peut demander un export de ses données pendant 30 jours ; passé ce délai, Samatrica supprime les données personnelles de l’Entreprise, sauf lorsque la loi impose une conservation plus longue.',
        ],
      },
      {
        title: '13. Dispositions générales',
        paragraphs: [
          'Aucune partie n’est responsable d’un retard ou d’une défaillance causés par des événements échappant à son contrôle raisonnable, tels que catastrophes naturelles, guerre, mesures gouvernementales ou pannes majeures d’internet ou des hébergeurs ; les obligations de paiement déjà exigibles ne sont pas suspendues.',
          'Les notifications au titre du présent contrat sont faites par e-mail : à Samatrica à l’adresse contact@samatrica.com, et à l’Entreprise à l’adresse e-mail de son compte. L’Entreprise ne peut céder le présent contrat sans l’accord écrit de Samatrica ; Samatrica peut le céder à une société affiliée ou au successeur de son activité, en informant l’Entreprise.',
          'Les présentes conditions, l’accord de traitement des données et la politique de remboursement constituent l’intégralité de l’accord entre les parties concernant le Service. Si une stipulation est jugée invalide, les autres restent en vigueur, et la stipulation invalide est remplacée par une stipulation valide aussi proche que possible de son objet.',
        ],
      },
      {
        title: '14. Modifications, droit applicable et litiges',
        paragraphs: [
          'Samatrica peut modifier les présentes conditions à tout moment. Les modifications qui ne réduisent pas les droits de l’Entreprise, telles que des clarifications, de nouvelles fonctionnalités ou des corrections rédactionnelles, ainsi que les modifications imposées par la loi, par une juridiction ou une autorité, ou par des raisons de sécurité, prennent effet dès leur publication sur le site web. Les autres modifications sont notifiées par e-mail ou dans le tableau de bord au moins 15 jours avant leur entrée en vigueur ; si l’Entreprise ne les accepte pas, elle peut résilier avant cette date, et la poursuite de l’utilisation au-delà vaut acceptation. Les présentes conditions sont régies par le droit de la République d’Estonie, à l’exclusion de la Convention des Nations unies sur les contrats de vente internationale de marchandises, et le tribunal de comté de Harju (Harju Maakohus) à Tallinn a compétence exclusive.',
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
        title: '3. Garantie satisfait ou remboursé de 30 jours',
        paragraphs: [
          'Si Samatrica ne convient pas à votre entreprise, écrivez à contact@samatrica.com dans les 30 jours suivant votre premier paiement d’abonnement et nous vous remboursons ce paiement intégralement, sans poser de questions. Le remboursement est effectué sur le moyen de paiement d’origine, généralement sous 10 jours ouvrés.',
          'Les frais de mise en place uniques, du montant indiqué et facturés à l’inscription pour la configuration de vos prestations, de vos prix, de votre personnel et du widget de chat, ne sont pas remboursables, car ce travail a déjà été effectué. Il n’y a pas d’essai gratuit : cette garantie le remplace.',
        ],
      },
      {
        title: '4. Renouvellements',
        paragraphs: [
          'L’abonnement est facturé mensuellement. Les paiements de renouvellement ne sont pas remboursables, mais vous pouvez résilier à tout moment : l’abonnement prend alors simplement fin au terme du mois déjà payé, et vous conservez l’accès jusque-là.',
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
          'Samatrica est exploité par Samatrica OÜ, numéro d’immatriculation 16285192, Sepapaja tn 6, 15551 Tallinn, Estonie, responsable du traitement pour les traitements décrits à la section 2. Samatrica fournit un assistant IA de prise de rendez-vous destiné aux entreprises qui prennent des rendez-vous. La présente politique explique comment les données personnelles sont traitées sur ce site web et dans le widget de chat Samatrica installé sur les sites de ces entreprises. Pour toute question ou demande relative à vos données, écrivez à contact@samatrica.com.',
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
          'Les réponses de l’assistant sont générées par un modèle de langage IA fourni par notre hébergeur cloud et traitées dans ses centres de données dans l’Union européenne. Le contenu des conversations n’est utilisé que pour générer la réponse ; il n’est pas communiqué au développeur du modèle et n’est utilisé pour entraîner aucun modèle.',
        ],
      },
      {
        title: '5. Lieu de stockage des données',
        paragraphs: [
          'Les données du Service sont stockées par un hébergeur tiers dans l’Union européenne ; les réponses de l’assistant sont générées dans les centres de données de cet hébergeur dans l’Union européenne (article 4). Lorsqu’un sous-traitant ultérieur traite des données hors de l’UE, nous nous appuyons sur les garanties prévues par le RGPD pour de tels transferts, telles qu’une décision d’adéquation ou les clauses contractuelles types de l’UE.',
        ],
      },
      {
        title: '6. Sous-traitants ultérieurs',
        paragraphs: [
          'Nous faisons appel à un petit nombre de prestataires pour exploiter le Service : notre hébergeur cloud (données stockées dans l’UE, réponses de l’assistant générées dans l’Union européenne) et notre prestataire d’envoi d’e-mails (codes de vérification et notifications). La liste à jour est disponible sur demande et est remise aux entreprises avec leur accord de traitement des données.',
        ],
      },
      {
        title: '7. Durées de conservation',
        paragraphs: [
          'Sauf si l’entreprise a choisi d’autres durées, les données sont supprimées ou anonymisées de manière irréversible automatiquement : les conversations 90 jours après le dernier message ; les coordonnées jamais vérifiées après 30 jours ; votre fiche client et vos réservations 24 mois après votre dernier rendez-vous ; les journaux techniques après 30 jours. Les codes de vérification expirent en quelques minutes et ne sont pas réutilisés, et les sauvegardes sont écrasées selon une rotation régulière. Lorsqu’une entreprise quitte Samatrica, ses données sont supprimées à l’issue d’un délai d’export de 30 jours, sauf lorsque la loi impose une conservation plus longue.',
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
          'En vertu du RGPD, vous pouvez demander l’accès à vos données personnelles, leur rectification ou leur effacement, la limitation du traitement, leur portabilité, et vous opposer à certains traitements. Écrivez à contact@samatrica.com (ou à l’entreprise avec laquelle vous avez échangé, pour les données traitées pour son compte) ; nous répondons dans les délais légaux. Vous pouvez également introduire une réclamation auprès de l’autorité de protection des données de votre pays, ou auprès de l’autorité de contrôle chef de file de Samatrica, l’Inspection estonienne de la protection des données (Andmekaitse Inspektsioon, www.aki.ee).',
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
