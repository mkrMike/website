/**
 * English copy: the reference. Every other language has exactly the same
 * shape (checked by the Dictionary type). Keep "Samatrica" as is everywhere.
 */
export const en = {
  meta: {
    homeTitle: 'Samatrica: the AI assistant that takes your clinic’s appointment requests 24/7',
    homeDescription:
      'An AI assistant on your clinic’s website chat answers patients 24/7 in their own language, finds free slots and takes appointment requests that you confirm. Your front desk takes over when needed.',
    clinicsTitle: 'Samatrica for clinics: patients request appointments, day and night',
    clinicsDescription:
      'Let patients request appointments and get answers 24/7 in their own language. You confirm each request; your front desk takes over the chat when it matters.',
    signupTitle: 'Start your free trial: Samatrica',
    signupDescription: 'Create your Samatrica account and add the AI assistant to your website.',
    contactTitle: 'Contact: Samatrica',
    contactDescription: 'Talk to the Samatrica team.',
    termsTitle: 'Terms of service: Samatrica',
    privacyTitle: 'Privacy policy: Samatrica',
    refundTitle: 'Refund policy: Samatrica',
    brandTitle: 'Brand: Samatrica',
  },

  nav: {
    clinics: 'Clinics',
    contact: 'Contact',
    startTrial: 'Start free trial',
    menu: 'Menu',
    close: 'Close',
    skipToContent: 'Skip to content',
    home: 'Samatrica home',
  },

  common: {
    startTrial: 'Start free trial',
    seeHowItWorks: 'See how it works',
    learnMore: 'Learn more',
    backToHome: 'Back to home',
    whatsapp: 'Chat with us on WhatsApp',
    trialNote: '7-day free trial · Card required · Cancel anytime',
    language: 'Language',
    comingSoon: 'Coming soon',
  },

  // The chat widget mock-up in the hero. Times are wall-clock, no AM/PM.
  chat: {
    title: 'Samatrica assistant',
    status: 'Online · replies instantly',
    clinic: {
      customer1: 'Hi, can I see a dermatologist this week?',
      assistant1: 'Of course. Dr. ** has free slots on Thursday at 10:30 and 16:00. Which suits you?',
      customer2: 'Thursday at 16:00, please.',
      assistant2: 'Request sent. I’ve emailed and texted you a code to verify it; the clinic will then confirm your appointment.',
      booked: 'Thursday 16:00 · Dermatology · Request sent',
      confirmed: 'Confirmed by the clinic',
    },
    typing: 'Assistant is typing',
    placeholder: 'Type a message…',
  },

  home: {
    eyebrow: 'AI booking assistant for health clinics',
    heroTitle: 'Your clinic’s front desk, awake 24/7.',
    heroTitleAccent: 'In every language.',
    heroSubtitle:
      'Samatrica answers your patients on your website chat, finds free slots and takes appointment requests, day and night. You confirm each one, and your front desk takes over whenever a human touch is needed.',
    heroProof: 'Contact us · 7-day free trial',

    industriesEyebrow: 'Built for health clinics',
    industriesTitle: 'Made for clinics of every specialty',
    industriesSubtitle: 'From a single practice to a multi-site clinic: every missed message is a missed patient.',
    clinicCards: [
      {
        title: 'Appointments at any hour',
        text: 'Patients request an appointment with a doctor at midnight and get answers about your services, without calling your front desk.',
      },
      {
        title: 'Requests by doctor and specialty',
        text: 'Each doctor or room has its own hours and slot length, so the assistant only offers slots that are really free.',
      },
      {
        title: 'Verified patients',
        text: 'Patients confirm their email and phone with a code before their request reaches you, so no fake bookings.',
      },
    ],

    howEyebrow: 'How it works',
    howTitle: 'Live in three steps',
    steps: [
      {
        title: 'Add the widget',
        text: 'Paste one line of code on your clinic’s website. Set your doctors, opening hours and business hours in the dashboard.',
      },
      {
        title: 'The AI answers and takes the request',
        text: 'The assistant answers questions, finds free slots and takes the appointment request. The patient verifies by email and SMS, and you confirm it.',
      },
      {
        title: 'Your front desk takes over',
        text: 'When a patient asks for a person, a receptionist takes over the chat live, during your business hours.',
      },
    ],

    featuresEyebrow: 'Features',
    featuresTitle: 'Everything your front desk needs',
    features: [
      { title: 'Answers 24/7', text: 'Nights, weekends and holidays: no patient waits until morning.' },
      { title: 'Real availability', text: 'The assistant only offers slots that fit each doctor’s opening hours, closures and existing appointments.' },
      { title: 'Verified patients', text: 'Patients verify with a code by email and SMS, so no fake requests.' },
      { title: 'Live takeover', text: 'Your front desk sees every conversation live and can step in with one click.' },
      { title: 'Business hours', text: 'Outside your hours, the assistant tells patients when your team is back.' },
      { title: 'One dashboard', text: 'Conversations, appointments, doctors, employees and hours, all in one place.' },
    ],

    languagesEyebrow: 'Multilingual',
    languagesTitle: 'Speaks your patients’ language',
    languagesText:
      'Patients write in Arabic, English, French, Russian or any other language: the assistant answers in the same language, naturally. Your dashboard is available in six languages, including full right-to-left Arabic.',
    languagesSample: [
      { lang: 'العربية', text: 'هل يوجد موعد يوم الخميس؟' },
      { lang: 'English', text: 'Is there a slot on Thursday?' },
      { lang: 'Français', text: 'Avez-vous un créneau jeudi ?' },
      { lang: 'Русский', text: 'Есть ли время в четверг?' },
    ],

    statsTitle: 'Why clinics choose Samatrica',
    stats: [
      { value: '24/7', label: 'Always answering' },
      { value: '1', label: 'Line of code to install' },
      { value: '6', label: 'Dashboard languages' },
    ],

    faqEyebrow: 'FAQ',
    faqTitle: 'Questions, answered',
    faq: [
      {
        q: 'Do I need a developer to install it?',
        a: 'No. You paste one line of code on your website, like a chat or analytics tag. We can help you if needed.',
      },
      {
        q: 'Does the assistant confirm appointments on its own?',
        a: 'No. The assistant takes appointment requests for free slots, using the doctors and opening hours you set. You confirm or decline each one in the dashboard, and the patient is notified.',
      },
      {
        q: 'What happens when a patient wants to talk to a person?',
        a: 'During your business hours, a receptionist takes over the conversation live from the dashboard. Outside them, the assistant tells the patient when to come back.',
      },
      {
        q: 'Which languages does it speak?',
        a: 'The assistant replies in the customer’s language. The dashboard is available in English, French, Arabic, Spanish, Russian and Greek.',
      },
      {
        q: 'How does the free trial work?',
        a: 'You get 7 days free on any plan. A card is required to start, and you can cancel anytime before the trial ends.',
      },
      {
        q: 'Is my patients’ data safe?',
        a: 'Each clinic can only see its own patients, conversations and appointments. Patients confirm their email and phone number with a code before an appointment request reaches you.',
      },
    ],

    ctaTitle: 'Never miss an appointment again',
    ctaText: 'Start your 7-day free trial and let Samatrica answer your next patient tonight.',
  },

  clinics: {
    eyebrow: 'For health clinics',
    title: 'Patients request appointments, day and night.',
    subtitle:
      'Samatrica answers patients on your website, takes their requests for the right doctor and frees your front desk from the phone.',
    painTitle: 'Your front desk can’t answer everyone',
    pains: [
      { title: 'Calls after hours', text: 'Most patients look for an appointment in the evening, when nobody can pick up.' },
      { title: 'Busy phone lines', text: 'Receptionists juggle calls, walk-ins and paperwork at the same time.' },
      { title: 'Unverified bookings', text: 'Bookings with wrong contact details leave gaps in the schedule and nobody to call.' },
    ],
    benefitsTitle: 'What Samatrica does for your clinic',
    benefits: [
      { title: 'Requests by doctor and specialty', text: 'Each doctor or room is a resource with its own hours and slot length.' },
      { title: 'Patients served at night', text: 'The assistant answers questions about services and takes appointment requests 24/7.' },
      { title: 'Verified patients', text: 'Patients verify by email and SMS before their request reaches you.' },
      { title: 'Patients kept informed', text: 'Patients are notified as soon as you confirm or cancel their booking.' },
      { title: 'Front desk takeover', text: 'Your receptionist takes over the chat for anything sensitive.' },
      { title: 'Closures and holidays', text: 'Close a doctor’s calendar for leave or the whole clinic for a holiday.' },
    ],
    note: 'Samatrica handles booking requests and general questions. It does not give medical advice.',
    ctaTitle: 'Give your patients a front desk that never sleeps',
  },

  pricing: {
    eyebrow: 'Pricing',
    title: 'Simple plans that grow with you',
    subtitle: 'Every plan includes the AI assistant, the dashboard and live takeover.',
    popular: 'Most popular',
    choose: 'Start free trial',
    billing: 'Billing period',
    monthly: 'Monthly',
    yearly: 'Yearly',
    currency: 'Currency',
    perMonth: '/ month',
    perYear: '/ year',
    save: (percent: string) => `Save ${percent}% with yearly billing`,
    notAvailable: 'Not available in this currency',
    limits: {
      conversations: 'AI conversations per month',
      employees: 'Employees',
      resources: 'Resources',
      widgets: 'Website widgets',
    },
    unlimited: 'Unlimited',
    included: 'Included in every plan',
    includedList: [
      'AI assistant 24/7',
      'Email and SMS verification',
      'Live takeover',
      'Business and opening hours',
      'Dashboard in 6 languages',
    ],
    placeholderNote: 'Prices and limits are indicative and may change before launch.',
    plans: {
      starter: { name: 'Starter', tagline: 'For a single practice' },
      pro: { name: 'Pro', tagline: 'For growing clinics' },
      business: { name: 'Business', tagline: 'For clinics with several sites' },
    },
  },

  signup: {
    title: 'Start your free trial',
    subtitle: '7 days free. A card is required; cancel anytime before the trial ends.',
    businessName: 'Business name',
    businessPhone: 'Business phone',
    phoneHint: 'Include the country code, e.g. +971 4 234 5678',
    timezone: 'Time zone',
    adminEmail: 'Your email',
    adminEmailHint: 'You’ll be the first admin of the dashboard.',
    /** Keep {terms} and {privacy}: they become links. */
    acceptTerms: 'I accept the {terms} and the {privacy}',
    termsLink: 'terms of service',
    privacyLink: 'privacy policy',
    submit: 'Continue',
    required: 'This field is required.',
    invalidEmail: 'Enter a valid email address.',
    invalidPhone: 'Enter a valid phone number with the country code.',
    mustAccept: 'Please accept the terms to continue.',
    thanksTitle: 'Thank you!',
    thanksText: 'We’ve received your details and will contact you soon.',
    back: 'Edit details',
  },

  contact: {
    title: 'Contact us',
    subtitle: 'Questions about Samatrica, a demo for your clinic, or a custom plan? We’d love to hear from you.',
    emailLabel: 'Email',
    placeholder: 'Contact details are coming soon.',
  },

  legal: {
    termsTitle: 'Terms of service',
    privacyTitle: 'Privacy policy',
    refundTitle: 'Refund policy',
    draft: 'Draft',
    placeholder: 'This page will be published before launch. Its text is being prepared and reviewed.',
  },

  footer: {
    tagline: 'The AI assistant that answers your patients and takes appointment requests, 24/7.',
    product: 'Product',
    company: 'Company',
    legal: 'Legal',
    rights: 'All rights reserved.',
  },

  brand: {
    title: 'Logo',
    subtitle: 'Internal page: the Samatrica logo and its variants. Not linked from the site and hidden from search engines.',
    main: 'Main logo',
    tealArc: 'Teal arc (default)',
    navyArc: 'Navy arc',
    reversed: 'Reversed, on navy',
    oneColorNavy: 'One colour: navy',
    oneColorBlack: 'One colour: black (invoices, stamps)',
    horizontal: 'Horizontal lockup',
    stacked: 'Stacked',
    icon: 'Icon',
    iconSizes: 'At 96, 64, 48, 32, 24 and 16 px. From 32 px down, the arc is dropped so the “s” stays sharp.',
  },

  notFound: 'Page not found',
}

export type Dictionary = typeof en
