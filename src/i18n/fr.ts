import type { Dictionary } from './en'

export const fr: Dictionary = {
  meta: {
    homeTitle: 'Samatrica : l’assistant IA qui reçoit les demandes de rendez-vous de votre clinique 24h/24',
    homeDescription:
      'Un assistant IA dans le chat du site de votre clinique répond à vos patients 24h/24 et 7j/7 dans leur langue, trouve les créneaux libres et recueille les demandes de rendez-vous, que vous confirmez. Votre accueil prend le relais si besoin.',
    clinicsTitle: 'Samatrica pour les cliniques : vos patients demandent un rendez-vous, jour et nuit',
    clinicsDescription:
      'Vos patients demandent un rendez-vous et obtiennent des réponses 24h/24 dans leur langue. Vous confirmez chaque demande ; votre accueil reprend la conversation quand c’est important.',
    signupTitle: 'Commencez votre essai gratuit : Samatrica',
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
    startTrial: 'Essai gratuit',
    menu: 'Menu',
    close: 'Fermer',
    skipToContent: 'Aller au contenu',
    home: 'Accueil Samatrica',
  },

  common: {
    startTrial: 'Commencer l’essai gratuit',
    seeHowItWorks: 'Voir comment ça marche',
    learnMore: 'En savoir plus',
    backToHome: 'Retour à l’accueil',
    whatsapp: 'Discutez avec nous sur WhatsApp',
    trialNote: 'Essai gratuit de 7 jours · Carte bancaire requise · Sans engagement',
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
    eyebrow: 'Assistant de rendez-vous IA pour les cliniques',
    heroTitle: 'L’accueil de votre clinique, éveillé 24h/24.',
    heroTitleAccent: 'Dans toutes les langues.',
    heroSubtitle:
      'Samatrica répond à vos patients dans le chat de votre site, trouve les créneaux libres et recueille les demandes de rendez-vous, de jour comme de nuit. Vous confirmez chacune d’elles, et votre accueil prend le relais dès qu’une touche humaine s’impose.',
    heroProof: 'Contactez-nous · Essai gratuit de 7 jours',

    industriesEyebrow: 'Conçu pour les cliniques',
    industriesTitle: 'Pensé pour les cliniques de toutes spécialités',
    industriesSubtitle: 'Du cabinet individuel à la clinique multisite : chaque message sans réponse, c’est un patient en moins.',
    clinicCards: [
      {
        title: 'Des rendez-vous à toute heure',
        text: 'Vos patients demandent un rendez-vous avec un médecin à minuit et obtiennent des réponses sur vos services, sans appeler votre accueil.',
      },
      {
        title: 'Demandes par médecin et par spécialité',
        text: 'Chaque médecin ou salle a ses propres horaires et sa durée de créneau : l’assistant ne propose que des créneaux réellement libres.',
      },
      {
        title: 'Patients vérifiés',
        text: 'Les patients confirment leur e-mail et leur téléphone avec un code avant que leur demande ne vous parvienne : fini les fausses réservations.',
      },
    ],

    howEyebrow: 'Comment ça marche',
    howTitle: 'En ligne en trois étapes',
    steps: [
      {
        title: 'Ajoutez le widget',
        text: 'Collez une seule ligne de code sur le site de votre clinique. Configurez vos médecins, vos horaires d’ouverture et vos heures de service dans le tableau de bord.',
      },
      {
        title: 'L’IA répond et recueille la demande',
        text: 'L’assistant répond aux questions, trouve les créneaux libres et recueille la demande de rendez-vous. Le patient la vérifie par e-mail et par SMS, puis vous la confirmez.',
      },
      {
        title: 'Votre accueil prend le relais',
        text: 'Quand un patient demande à parler à quelqu’un, une secrétaire reprend la conversation en direct, pendant vos heures de service.',
      },
    ],

    featuresEyebrow: 'Fonctionnalités',
    featuresTitle: 'Tout ce dont votre accueil a besoin',
    features: [
      { title: 'Disponible 24h/24', text: 'Nuits, week-ends et jours fériés : aucun patient n’attend le lendemain matin.' },
      { title: 'Disponibilités réelles', text: 'L’assistant ne propose que des créneaux compatibles avec les horaires, les fermetures et les rendez-vous existants de chaque médecin.' },
      { title: 'Patients vérifiés', text: 'Les patients se vérifient avec un code reçu par e-mail et SMS : fini les fausses demandes.' },
      { title: 'Reprise en direct', text: 'Votre accueil suit chaque conversation en temps réel et peut intervenir en un clic.' },
      { title: 'Heures de service', text: 'En dehors de vos heures, l’assistant indique aux patients quand votre équipe sera de retour.' },
      { title: 'Un seul tableau de bord', text: 'Conversations, rendez-vous, médecins, collaborateurs et horaires, réunis au même endroit.' },
    ],

    languagesEyebrow: 'Multilingue',
    languagesTitle: 'Parle la langue de vos patients',
    languagesText:
      'Vos patients écrivent en arabe, en anglais, en français, en russe ou dans n’importe quelle autre langue : l’assistant leur répond naturellement dans la même langue. Votre tableau de bord est disponible en six langues, dont l’arabe entièrement de droite à gauche.',
    languagesSample: [
      { lang: 'العربية', text: 'هل يوجد موعد يوم الخميس؟' },
      { lang: 'English', text: 'Is there a slot on Thursday?' },
      { lang: 'Français', text: 'Avez-vous un créneau jeudi ?' },
      { lang: 'Русский', text: 'Есть ли время в четверг?' },
    ],

    statsTitle: 'Pourquoi les cliniques choisissent Samatrica',
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
        q: 'L’assistant confirme-t-il les rendez-vous tout seul ?',
        a: 'Non. L’assistant recueille des demandes de rendez-vous sur des créneaux libres, en fonction des médecins et des horaires d’ouverture que vous avez définis. Vous confirmez ou refusez chacune d’elles depuis le tableau de bord, et le patient en est informé.',
      },
      {
        q: 'Que se passe-t-il quand un patient veut parler à quelqu’un ?',
        a: 'Pendant vos heures de service, une secrétaire reprend la conversation en direct depuis le tableau de bord. En dehors de ces heures, l’assistant indique au patient quand revenir.',
      },
      {
        q: 'Quelles langues parle-t-il ?',
        a: 'L’assistant répond dans la langue du patient. Le tableau de bord est disponible en anglais, français, arabe, espagnol, russe et grec.',
      },
      {
        q: 'Comment fonctionne l’essai gratuit ?',
        a: 'Vous profitez de 7 jours gratuits sur la formule de votre choix. Une carte bancaire est requise pour commencer, et vous pouvez résilier à tout moment avant la fin de l’essai.',
      },
      {
        q: 'Les données de mes patients sont-elles en sécurité ?',
        a: 'Chaque clinique ne voit que ses propres patients, conversations et rendez-vous. Les patients confirment leur adresse e-mail et leur numéro de téléphone avec un code avant qu’une demande de rendez-vous ne vous parvienne.',
      },
    ],

    ctaTitle: 'Ne manquez plus jamais un rendez-vous',
    ctaText: 'Commencez votre essai gratuit de 7 jours et laissez Samatrica répondre à votre prochain patient dès ce soir.',
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
    choose: 'Commencer l’essai gratuit',
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
      pro: { name: 'Pro', tagline: 'Pour les cliniques en croissance' },
      business: { name: 'Business', tagline: 'Pour les cliniques multisites' },
    },
  },

  signup: {
    title: 'Commencez votre essai gratuit',
    subtitle: '7 jours gratuits. Carte bancaire requise ; résiliable à tout moment avant la fin de l’essai.',
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
    subtitle: 'Une question sur Samatrica, une démo pour votre clinique ou une formule sur mesure ? Nous serions ravis d’échanger avec vous.',
    emailLabel: 'E-mail',
    placeholder: 'Nos coordonnées seront bientôt disponibles.',
  },

  legal: {
    termsTitle: 'Conditions d’utilisation',
    privacyTitle: 'Politique de confidentialité',
    refundTitle: 'Politique de remboursement',
    draft: 'Brouillon',
    placeholder: 'Cette page sera publiée avant le lancement. Son contenu est en cours de rédaction et de relecture.',
  },

  footer: {
    tagline: 'L’assistant IA qui répond à vos patients et recueille leurs demandes de rendez-vous, 24h/24 et 7j/7.',
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
