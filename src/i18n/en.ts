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
    signupTitle: 'Get started: Samatrica',
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
    login: 'Log in',
    startTrial: 'Get started',
    menu: 'Menu',
    close: 'Close',
    skipToContent: 'Skip to content',
    home: 'Samatrica home',
  },

  common: {
    startTrial: 'Get started',
    seeHowItWorks: 'See how it works',
    learnMore: 'Learn more',
    backToHome: 'Back to home',
    whatsapp: 'Chat with us on WhatsApp',
    trialNote: 'No commitment · Cancel anytime · Pay only the current period',
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
    heroProof: 'Contact us · Cancel anytime',

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
        q: 'Is there a commitment?',
        a: 'No. You pay per billing period and can cancel at any time: the subscription simply ends at the close of the period already paid, and nothing further is charged.',
      },
      {
        q: 'Is my patients’ data safe?',
        a: 'Each clinic can only see its own patients, conversations and appointments. Patients confirm their email and phone number with a code before an appointment request reaches you.',
      },
    ],

    ctaTitle: 'Never miss an appointment again',
    ctaText: 'Get started and let Samatrica answer your next patient tonight.',
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
    choose: 'Get started',
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
    title: 'Get started',
    subtitle: 'No commitment: cancel anytime and pay only the current billing period.',
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
    draftNote: 'This draft is under legal review and is not yet binding.',
    updated: 'Draft of 8 October 2026',

    /** Section headings and paragraphs, rendered in order. */
    terms: [
      {
        title: '1. Who we are and what these terms cover',
        paragraphs: [
          'The Service is provided by Samatrica OÜ, a private limited company registered in Estonia, registry code 16285192, VAT number EE102401154, registered address Sepapaja tn 6, 15551 Tallinn, Estonia (“Samatrica”).',
          'Samatrica provides an AI assistant that answers visitors on a business’s website, finds free slots and takes appointment requests, together with a dashboard for the business’s team (the “Service”). These terms are an agreement between Samatrica and the business that opens an account (the “Business”), typically a health clinic. They do not create a contract between Samatrica and the Business’s patients or customers.',
        ],
      },
      {
        title: '2. What the Service does, and does not do',
        paragraphs: [
          'The assistant answers questions and takes appointment requests using the resources, opening hours and information the Business configures. Every appointment request must be confirmed or declined by the Business: the assistant never confirms appointments on its own.',
          'The Service does not provide medical advice, diagnosis or treatment, and is not an emergency service. The Business must not configure or use the assistant to give medical advice, and remains solely responsible for all healthcare it provides.',
        ],
      },
      {
        title: '3. The Business’s responsibilities',
        paragraphs: [
          'The Business keeps its account credentials confidential and is responsible for the actions of its employees in the dashboard. The information it configures (services, doctors, hours, descriptions) must be accurate and lawful.',
          'Towards its patients, the Business is the data controller: it must have a lawful basis to process the personal data collected through the chat, inform patients about this processing in its own privacy notices, and answer their data-protection requests. The data processing agreement between the Business and Samatrica (Section 6) governs Samatrica’s processing on the Business’s behalf.',
        ],
      },
      {
        title: '4. Acceptable use',
        paragraphs: [
          'The Service may not be used for unlawful purposes, to send spam, to collect data of persons without a lawful basis, to probe or disrupt the Service’s security, or to build a competing product. The chat widget may only be installed on websites the Business controls.',
        ],
      },
      {
        title: '5. Fees and cancellation',
        paragraphs: [
          'Fees, billing periods and payment methods are stated when the subscription is agreed, and may be updated with reasonable advance notice; price changes never apply retroactively. There is no minimum term: the Business can cancel at any time, the subscription ends at the close of the billing period already paid, and nothing further is charged.',
        ],
      },
      {
        title: '6. Data protection',
        paragraphs: [
          'For personal data of patients and other chat users, the Business is the controller and Samatrica the processor under the GDPR. A data processing agreement, including Samatrica’s sub-processors and security measures, forms part of this agreement. Samatrica hosts the Service’s data in the European Union (AWS, Frankfurt region).',
          'Appointment requests in a healthcare context can reveal health information, which the GDPR treats as a special category of personal data. The Business confirms it is entitled to collect such data from its patients, and Samatrica processes it only to provide the Service.',
        ],
      },
      {
        title: '7. Availability',
        paragraphs: [
          'Samatrica provides the Service with reasonable skill and care, but does not promise uninterrupted availability. Planned maintenance and outages can occur; the chat widget is designed to degrade quietly on the Business’s website when the Service is unreachable.',
        ],
      },
      {
        title: '8. Liability',
        paragraphs: [
          'To the extent permitted by law, Samatrica’s total liability under this agreement is limited to the fees the Business paid in the 12 months before the event giving rise to the claim, and Samatrica is not liable for indirect damages such as lost profits. Nothing in these terms limits liability that cannot be limited by law.',
        ],
      },
      {
        title: '9. Termination and data',
        paragraphs: [
          'Either party may terminate with effect at the end of the paid period; Samatrica may suspend or terminate immediately on a serious breach of these terms. After termination, the Business can request an export of its data for 30 days; afterwards Samatrica deletes the Business’s personal data, except where law requires longer retention.',
        ],
      },
      {
        title: '10. Changes, law and disputes',
        paragraphs: [
          'Samatrica may update these terms with reasonable advance notice; continued use after the notice period means acceptance. These terms are governed by Estonian law, and the Estonian courts (Harju County Court as the court of first instance) have exclusive jurisdiction.',
          'These terms are provided in several languages for convenience; in case of discrepancy, the English version prevails.',
        ],
      },
    ],

    refund: [
      {
        title: '1. Who this policy applies to',
        paragraphs: [
          'Samatrica is a service for businesses (health clinics), not consumers. The statutory 14-day right of withdrawal of EU consumer law therefore does not apply; the refund rights in this policy are the ones Samatrica grants by contract.',
        ],
      },
      {
        title: '2. Cancel at any time',
        paragraphs: [
          'There is no minimum term. You can cancel at any time by writing to contact@samatrica.com: the subscription ends at the close of the billing period already paid — the running bill — nothing further is charged, and you keep access until then.',
        ],
      },
      {
        title: '3. 14-day money-back guarantee on the first payment',
        paragraphs: [
          'If Samatrica does not work out for your clinic, write to contact@samatrica.com within 14 days of your first payment and we refund that payment in full, no questions asked. The refund goes to the original payment method, normally within 10 business days.',
        ],
      },
      {
        title: '4. Renewals',
        paragraphs: [
          'Renewal payments (monthly or yearly) are not refundable, but you can cancel at any time: the subscription then simply ends at the close of the period already paid, and you keep access until then. We recommend monthly billing until you are sure of the service.',
        ],
      },
      {
        title: '5. Billing errors and service failures',
        paragraphs: [
          'Amounts charged in error (for example a double charge, or a charge after a confirmed cancellation) are always refunded in full. If a prolonged outage on our side materially prevented you from using the service, contact us: we will credit or refund the affected period fairly.',
        ],
      },
      {
        title: '6. How to request a refund',
        paragraphs: [
          'Write to contact@samatrica.com from the email address of your account, naming your business. We confirm reception within 2 business days and tell you when the refund was issued.',
          'This policy is provided in several languages for convenience; in case of discrepancy, the English version prevails.',
        ],
      },
    ],

    privacy: [
      {
        title: '1. Who we are',
        paragraphs: [
          'Samatrica is operated by Samatrica OÜ, registry code 16285192, Sepapaja tn 6, 15551 Tallinn, Estonia. It provides an AI booking assistant for health clinics. This policy explains how personal data is handled on this website and in the Samatrica chat widget installed on clinics’ websites. For any privacy question or request, write to contact@samatrica.com.',
        ],
      },
      {
        title: '2. Visitors of this website',
        paragraphs: [
          'When you contact us by email or WhatsApp, we process the contact details and the content of your message in order to answer you (WhatsApp messages are also processed by WhatsApp under its own privacy policy). We keep this correspondence as long as needed to handle your request and our business relationship.',
          'This website itself sets no tracking or advertising cookies.',
        ],
      },
      {
        title: '3. The chat widget on a clinic’s website',
        paragraphs: [
          'When you chat with the Samatrica assistant on a clinic’s website, the clinic is the data controller and Samatrica processes your data on its behalf. We process the conversation content and, if you request an appointment, your first and last name, email address and phone number, in order to answer you and pass your request to the clinic.',
          'In a healthcare context, your messages and appointment requests can reveal health information. They are used only to handle your request; the clinic you are writing to is the one responsible for this data, and you can exercise your data-protection rights with the clinic or by writing to us.',
        ],
      },
      {
        title: '4. AI processing',
        paragraphs: [
          'The assistant’s replies are generated by an AI language model. Conversation content is sent to our AI provider for this sole purpose, under a data processing agreement; it is not used to train the provider’s models.',
        ],
      },
      {
        title: '5. Where data is stored',
        paragraphs: [
          'The Service’s data is hosted on Amazon Web Services in the European Union (Frankfurt, Germany). Where a sub-processor processes data outside the EU, we rely on the safeguards the GDPR provides for such transfers, such as the EU standard contractual clauses.',
        ],
      },
      {
        title: '6. Sub-processors',
        paragraphs: [
          'We use a small number of service providers to run the Service: Amazon Web Services (hosting, EU), our AI language-model provider (assistant replies), and our email and SMS delivery providers (verification codes and notifications). The current list is available on request and is provided to clinics with their data processing agreement.',
        ],
      },
      {
        title: '7. Retention',
        paragraphs: [
          'Conversations and appointment requests are kept as long as the clinic uses the Service and needs them; verification codes expire within minutes and are not reused. When a clinic leaves Samatrica, its data is deleted after a 30-day export window, except where law requires longer retention.',
        ],
      },
      {
        title: '8. Security',
        paragraphs: [
          'All connections are encrypted in transit (TLS). Each clinic’s data is isolated: a clinic can only see its own conversations, patients and appointments. Access by Samatrica staff is limited to what operating the Service requires.',
        ],
      },
      {
        title: '9. Your rights',
        paragraphs: [
          'Under the GDPR you can request access to your personal data, its correction or deletion, restriction of processing, portability, and you can object to certain processing. Write to contact@samatrica.com (or to your clinic, for data processed on its behalf); we answer within the legal time limits. You can also lodge a complaint with your data protection authority.',
        ],
      },
      {
        title: '10. Local storage and changes',
        paragraphs: [
          'The chat widget stores only what it needs to keep your conversation open (a conversation identifier) in your browser’s local storage: no advertising or cross-site tracking. We will update this policy as the Service evolves and show the date of the current version at the top.',
        ],
      },
    ],
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
