/**
 * English copy: the reference. Every other language has exactly the same
 * shape (checked by the Dictionary type). Keep "Samatrica" as is everywhere.
 */
export const en = {
  meta: {
    homeTitle: 'Samatrica: the AI assistant that takes your booking requests 24/7',
    homeDescription:
      'An AI assistant on your website chat answers customers 24/7 in their own language, finds free slots and takes booking requests that you confirm. Your team takes over when needed.',
    hotelsTitle: 'Samatrica for hotels: guests request their stay, day and night',
    hotelsDescription:
      'Guests ask about your rooms and request a stay 24/7, in their own language. Only rooms really free for their dates are offered, and you confirm each request.',
    salonsTitle: 'Samatrica for beauty salons: clients request bookings, day and night',
    salonsDescription:
      'Clients ask about your services and request a time with their stylist 24/7, in their own language. Only really free times are offered, and you confirm each request.',
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
    hotels: 'Hotels',
    salons: 'Salons',
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
    salon: {
      customer1: 'Hi, can I book a colour on Friday?',
      assistant1: 'Of course. Would you like Anna or Bob, or anyone available?',
      customer2: 'Anyone, around 11.',
      assistant2: 'On Friday I have 11:00, 11:15 or 11:45. Which suits you?',
      customer3: '11:00, please.',
      booked: 'Colour with Anna · Friday 11:00–11:45 · 250 AED · Request sent',
      confirmed: 'Confirmed by the salon',
    },
    hotel: {
      customer1: 'Hi, do you have a double room from Friday to Sunday?',
      assistant1: 'Yes. For those 2 nights the Sea View Double is free, at 450 AED a night, 900 AED in total. Shall I request it for you?',
      customer2: 'Yes, please.',
      assistant2: 'Request sent. I’ve emailed you a code to verify it; the hotel will then confirm your stay.',
      booked: 'Sea View Double · Fri–Sun · 2 nights · 900 AED · Request sent',
      confirmed: 'Confirmed by the hotel',
    },
    typing: 'Assistant is typing',
    placeholder: 'Type a message…',
  },

  home: {
    eyebrow: 'AI booking assistant for your website',
    heroTitle: 'Your front desk, awake 24/7.',
    heroTitleAccent: 'In every language.',
    heroSubtitle:
      'Samatrica answers your customers on your website chat, finds free slots and takes booking requests, day and night. You confirm each one, and your team takes over whenever a human touch is needed.',
    heroProof: 'Contact us · Cancel anytime',

    industriesEyebrow: 'Built for appointments',
    industriesTitle: 'Made for every business that takes bookings',
    industriesSubtitle:
      'Clinics, salons, spas, gyms, garages, consultants: wherever every missed message is a missed customer.',
    valueCards: [
      {
        title: 'Bookings at any hour',
        text: 'Customers request an appointment at midnight and get answers about your services, without calling your front desk.',
      },
      {
        title: 'Requests by staff member and service',
        text: 'Each employee, room or resource has its own hours and slot length, so the assistant only offers slots that are really free.',
      },
      {
        title: 'Verified customers',
        text: 'Customers confirm their email and phone with a code before their request reaches you, so no fake bookings.',
      },
    ],

    howEyebrow: 'How it works',
    howTitle: 'Live in three steps',
    steps: [
      {
        title: 'Add the widget',
        text: 'Paste one line of code on your website. Set your resources, opening hours and business hours in the dashboard.',
      },
      {
        title: 'The AI answers and takes the request',
        text: 'The assistant answers questions, finds free slots and takes the booking request. The customer verifies it by email, and you confirm it.',
      },
      {
        title: 'Your team takes over',
        text: 'When a customer asks for a person, an employee takes over the chat live, during your business hours.',
      },
    ],

    // The dashboard's week calendar (DashboardMock), after "How it works".
    dashboard: {
      eyebrow: 'Your dashboard',
      title: 'Every booking lands in your week',
      text: 'Requests the assistant takes at night are waiting in your calendar in the morning. See the whole team’s week, or one person’s, and confirm in one click.',
      points: [
        'Week view for the whole team, or one person',
        'Confirm, complete or cancel in one click',
        'Staff accounts that see only their own agenda',
      ],
      mock: {
        brand: 'Glow Salon',
        available: 'Available',
        today: 'Today',
        list: 'List',
        week: 'Week',
        fromChat: 'New · from the chat',
        confirmed: 'Confirmed',
        toConfirm: 'To confirm',
        services: { haircut: 'Haircut', colour: 'Colour', balayage: 'Balayage', manicure: 'Manicure', blowdry: 'Blow-dry' },
      },
    },

    featuresEyebrow: 'Features',
    featuresTitle: 'Everything your front desk needs',
    features: [
      { title: 'Answers 24/7', text: 'Nights, weekends and holidays: no enquiry waits until morning.' },
      { title: 'Real availability', text: 'The assistant only offers slots that fit each resource’s opening hours, closures and existing bookings.' },
      { title: 'Verified customers', text: 'Customers verify with a code sent by email, so no fake requests.' },
      { title: 'Live takeover', text: 'Your team sees every conversation live and can step in with one click.' },
      { title: 'Business hours', text: 'Outside your hours, the assistant tells customers when your team is back.' },
      { title: 'One dashboard', text: 'Conversations, bookings, resources, employees and hours, all in one place.' },
    ],

    languagesEyebrow: 'Multilingual',
    languagesTitle: 'Speaks your customers’ language',
    languagesText:
      'Customers write in Arabic, English, French, Russian or any other language: the assistant answers in the same language, naturally. Your dashboard is available in six languages, including full right-to-left Arabic.',
    languagesSample: [
      { lang: 'العربية', text: 'هل يوجد موعد يوم الخميس؟' },
      { lang: 'English', text: 'Is there a slot on Thursday?' },
      { lang: 'Français', text: 'Avez-vous un créneau jeudi ?' },
      { lang: 'Русский', text: 'Есть ли время в четверг?' },
    ],

    statsTitle: 'Why businesses choose Samatrica',
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
        q: 'Does the assistant confirm bookings on its own?',
        a: 'No. The assistant takes booking requests for free slots, using the resources and opening hours you set. You confirm or decline each one in the dashboard, and the customer is notified.',
      },
      {
        q: 'What happens when a customer wants to talk to a person?',
        a: 'During your business hours, an employee takes over the conversation live from the dashboard. Outside them, the assistant tells the customer when to come back.',
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
        q: 'Is my customers’ data safe?',
        a: 'Each business can only see its own customers, conversations and bookings. Customers confirm their email and phone number with a code before a booking request reaches you.',
      },
    ],

    ctaTitle: 'Never miss a booking again',
    ctaText: 'Get started and let Samatrica answer your next customer tonight.',
  },

  hotels: {
    eyebrow: 'For hotels and holiday rentals',
    title: 'Guests book their stay, day and night.',
    subtitle:
      'Samatrica answers guests on your website in their own language, checks which rooms are really free for their dates and takes the booking request, so your reception can focus on the guests in front of them.',
    painTitle: 'Your reception can’t answer every message',
    pains: [
      { title: 'Questions at every hour', text: 'Guests in other time zones write at night, when nobody is at the desk.' },
      { title: 'A busy front desk', text: 'Check-ins, check-outs and phone calls all compete for the same receptionist.' },
      { title: 'Back-and-forth over dates', text: 'Finding which room is free for which nights takes message after message.' },
    ],
    benefitsTitle: 'What Samatrica does for your hotel',
    benefits: [
      { title: 'Rooms booked by the night', text: 'Each room or room type has its check-in and check-out times, its shortest and longest stay, and its price per night.' },
      { title: 'Guests served at night', text: 'The assistant answers questions about your rooms and services and takes booking requests 24/7, in the guest’s language.' },
      { title: 'Only really free nights', text: 'Only rooms free for every night of the stay are offered, outside the dates you have closed.' },
      { title: 'Verified guests', text: 'Guests verify their email before their request reaches you.' },
      { title: 'Guests kept informed', text: 'Guests are notified as soon as you confirm or cancel their stay.' },
      { title: 'Your reception steps in', text: 'Staff take over the chat when needed, and can book a stay for any guest from the dashboard.' },
    ],
    note: 'Every stay is a request that your hotel confirms. Samatrica does not take payments or deposits.',
    ctaTitle: 'Give your guests a reception that never sleeps',
  },

  salons: {
    eyebrow: 'For beauty salons',
    title: 'Clients book their next visit, day and night.',
    subtitle:
      'Samatrica answers clients on your website in their own language, from your service menu. It finds a time that is really free with the right stylist and takes the booking request, while your team stays with the client in the chair.',
    painTitle: 'Your team can’t answer while they work',
    pains: [
      { title: 'Hands busy, phone ringing', text: 'Your stylists can’t pick up in the middle of a colour or a cut.' },
      { title: 'Messages after closing', text: 'Many clients look for a time in the evening, when the salon is closed.' },
      { title: 'Back-and-forth over times', text: 'Finding a time that fits the service and the right stylist takes message after message.' },
    ],
    benefitsTitle: 'What Samatrica does for your salon',
    benefits: [
      { title: 'Your service menu', text: 'Each service has its duration, its price or “on request”, and a description the assistant answers from.' },
      { title: 'Their stylist, or anyone available', text: 'Clients pick a stylist or “anyone available”, and the salon gives the booking to whoever has the fewest that day.' },
      { title: 'Only really free times', text: 'The whole service fits in the stylist’s hours, outside days off and salon holidays, without overlapping another booking, on a 15-minute grid.' },
      { title: 'Booked from the chat', text: 'The assistant guides the client from service to stylist, day and time. Emails name the booking, and a booking code lets the client check or cancel it.' },
      { title: 'Verified clients', text: 'Clients verify their email before their request reaches you.' },
      { title: 'Your team steps in', text: 'Staff take over the chat during opening hours, and can book any client at any minute from the dashboard.' },
    ],
    note: 'Every booking is a request that your salon confirms. Samatrica does not take payments or deposits.',
    ctaTitle: 'Let clients book while your team takes care of clients',
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
      'Email verification',
      'Live takeover',
      'Business and opening hours',
      'Dashboard in 6 languages',
    ],
    placeholderNote: 'Prices and limits are indicative and may change before launch.',
    plans: {
      starter: { name: 'Starter', tagline: 'For a single practice' },
      pro: { name: 'Pro', tagline: 'For growing teams' },
      business: { name: 'Business', tagline: 'For businesses with several sites' },
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
    subtitle: 'Questions about Samatrica, a demo for your business, or a custom plan? We’d love to hear from you.',
    emailLabel: 'Email',
    placeholder: 'Contact details are coming soon.',
  },

  legal: {
    termsTitle: 'Terms of service',
    privacyTitle: 'Privacy policy',
    refundTitle: 'Refund policy',
    placeholder: 'This page will be published before launch. Its text is being prepared and reviewed.',
    updated: 'Last updated: 25 October 2026',

    /** Section headings and paragraphs, rendered in order. */
    terms: [
      {
        title: '1. Who we are and what these terms cover',
        paragraphs: [
          'The Service is provided by Samatrica OÜ, a private limited company registered in the Estonian Commercial Register under registry code 16285192, LEI 984500DBA4ZE2HM61434, VAT number EE102401154, registered address Sepapaja tn 6, Lasnamäe linnaosa, 15551 Tallinn, Harju maakond, Estonia (“Samatrica”).',
          'Samatrica provides an AI assistant that answers visitors on a business’s website, finds free slots and takes booking requests, together with a dashboard for the business’s team (the “Service”). These terms are an agreement between Samatrica and the business that opens an account (the “Business”), for example a health clinic, a salon or any other business that takes bookings. They do not create a contract between Samatrica and the Business’s customers or patients.',
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
          'The Business keeps its account credentials confidential, is responsible for the actions of its employees in the dashboard, and informs Samatrica without delay at contact@samatrica.com if it suspects that an account has been compromised. The information it configures (services, staff, prices, hours, descriptions) must be accurate and lawful, and must not include personal data of customers or any sensitive data that the Service does not need.',
          'The Business handles the booking requests it receives through the Service promptly, confirming or declining them in the dashboard, and honours towards its customers the prices, services and conditions it has configured. Any disagreement with a customer about a booking, a price or a service is resolved between the Business and that customer.',
          'The Business complies with all laws that apply to its own activity, including consumer protection, price display and sector-specific licensing rules, and does not use the Service to take bookings for minors in breach of the law.',
          'Towards its customers, the Business is the data controller: it must have a lawful basis to process the personal data collected through the chat, inform customers about this processing in a privacy notice published on its website, which the chat widget may link to, and answer their data-protection requests. Contact details collected through the chat may only be used to handle the customer’s request and booking; the Business may not use them for marketing unless the customer has separately given consent where the law requires it.',
          'The Business cooperates with Samatrica on data protection: it forwards without delay any request, complaint or enquiry from a person or an authority that concerns Samatrica’s processing, and informs Samatrica of any investigation involving the chat widget. The data processing agreement between the Business and Samatrica (Section 9) governs Samatrica’s processing on the Business’s behalf.',
        ],
      },
      {
        title: '4. Acceptable use',
        paragraphs: [
          'The Service may not be used for unlawful purposes, to send spam, to collect data of persons without a lawful basis, to probe or disrupt the Service’s security, or to build a competing product. The chat widget may only be installed on websites the Business controls.',
        ],
      },
      {
        title: '5. Answers generated by AI',
        paragraphs: [
          'The assistant’s replies are generated automatically by artificial intelligence from the information the Business configures. By their nature, AI systems can produce replies that are incomplete, inaccurate, outdated or inappropriate, misunderstand a request, or fail to record it. Samatrica does not guarantee the accuracy, completeness or suitability of any reply, and replies do not bind Samatrica. The Business must keep its configured information accurate and up to date, check conversations and booking requests in the dashboard regularly, and remains solely responsible towards its customers for the information, prices, bookings and services it offers.',
          'The widget tells visitors that they are talking to an AI assistant, as the EU Artificial Intelligence Act requires, and the Business must not hide this or suggest otherwise. Samatrica is not liable for decisions taken, or bookings made, missed or double-booked, on the basis of an AI reply, nor for any claim by the Business’s customers arising from it.',
        ],
      },
      {
        title: '6. Fees and cancellation',
        paragraphs: [
          'Fees, billing periods and payment methods are stated when the subscription is agreed, and may be updated with at least 30 days’ notice by email; price changes never apply retroactively, and the Business may cancel before they take effect. There is no minimum term: the Business can cancel at any time, the subscription ends at the close of the billing period already paid, and nothing further is charged. A one-time setup fee, in the amount shown at signup, for configuring the Business’s services, prices, staff and chat widget, is charged at signup; it is not refundable once that work is done, as described in the refund policy.',
          'Invoices are payable by their due date. On late payment, Samatrica may charge late-payment interest at the rate provided by Estonian law for commercial transactions, and, if payment is still outstanding 7 days after a reminder by email, suspend access to the Service until payment is received; fees remain due during the suspension.',
          'Fees are exclusive of value added tax and other taxes. For Businesses established in Estonia, Estonian VAT at the applicable rate is added to the invoice. Businesses established in another EU member state that provide a valid VAT number are invoiced without VAT under the reverse-charge mechanism and account for VAT in their own country; Businesses established outside the EU account for any VAT or similar tax due in their country.',
        ],
      },
      {
        title: '7. Intellectual property',
        paragraphs: [
          'Samatrica and its licensors own the Service, including its software, design and documentation. During the subscription, the Business receives a non-exclusive, non-transferable right to use the Service for its own business. The Business may not copy, modify, reverse-engineer or resell the Service, except as the law expressly allows.',
          'The Business keeps all rights in the content it provides (descriptions, services, images, opening hours) and grants Samatrica the right to use that content only to provide the Service. Samatrica may use suggestions and feedback about the Service freely, without obligation to the Business.',
        ],
      },
      {
        title: '8. Confidentiality',
        paragraphs: [
          'Each party keeps confidential the non-public information it receives from the other in connection with the Service, uses it only for this agreement, and discloses it only to employees and advisers who need it and are bound by confidentiality, or where the law or a court requires. This obligation continues for three years after the agreement ends; personal data remains protected as described in Section 9 and in the data processing agreement.',
        ],
      },
      {
        title: '9. Data protection',
        paragraphs: [
          'For personal data of customers and other chat users, the Business is the controller and Samatrica the processor under the EU General Data Protection Regulation (GDPR) and the Estonian Personal Data Protection Act. A data processing agreement, including Samatrica’s sub-processors and security measures, forms part of this agreement. Samatrica hosts the Service’s data with a third-party hosting provider located in the European Union.',
          'Where the Business provides healthcare, appointment requests can reveal health information, which the GDPR treats as a special category of personal data. The Business confirms it is entitled to collect such data from its patients, and Samatrica processes it only to provide the Service.',
        ],
      },
      {
        title: '10. Availability',
        paragraphs: [
          'The Service is provided “as is” and “as available”. Samatrica does not guarantee that it will be uninterrupted, error-free or free of bugs, that it will meet the Business’s specific requirements, or that it will work with every website, browser or device. Planned maintenance, updates, outages and errors can occur, including ones caused by hosting, AI infrastructure, email or internet providers; the chat widget is designed to degrade quietly on the Business’s website when the Service is unreachable. Unavailability does not entitle the Business to a refund or reduction of fees, except as stated in the refund policy.',
          'Samatrica continuously develops the Service and may add, change, suspend or remove features, the user interface, integrations and the underlying software and AI models at any time, without prior notice, provided the core function of the Service (an AI assistant taking booking requests, with a dashboard) is maintained. Where a change removes a feature the Business materially relies on, the Business may cancel with immediate effect and receive a pro-rata refund of fees prepaid for the remaining period.',
          'The Business is responsible for keeping its own records of bookings and customer contacts it needs, and may export them from the dashboard at any time.',
        ],
      },
      {
        title: '11. Liability',
        paragraphs: [
          'To the maximum extent permitted by law, Samatrica is not liable for indirect or consequential loss, or for loss of profit, revenue, bookings, customers, goodwill, business opportunity or data, including loss caused by bugs, errors, unavailability of the Service or AI replies, whether in contract, tort or otherwise.',
          'Samatrica’s total liability arising out of or in connection with this agreement, for all claims together, is limited to the fees the Business actually paid in the 3 months before the event giving rise to the claim. Claims must be notified in writing within 6 months of the Business becoming aware of them.',
          'These limitations do not apply to liability for intentional breach or gross negligence, for death or personal injury, or to any other liability that cannot be limited or excluded under the applicable law.',
          'The Business indemnifies and holds harmless Samatrica, its directors and employees against all claims, losses, fines and costs (including reasonable legal fees) arising from the Business’s breach of these terms or of data protection law, the information it configures, its services to its customers, and claims of its customers relating to bookings or replies of the assistant.',
        ],
      },
      {
        title: '12. Termination and data',
        paragraphs: [
          'Either party may terminate with effect at the end of the paid period; Samatrica may suspend or terminate immediately on a serious breach of these terms. After termination, the Business can request an export of its data for 30 days; afterwards Samatrica deletes the Business’s personal data, except where law requires longer retention.',
        ],
      },
      {
        title: '13. General provisions',
        paragraphs: [
          'Neither party is liable for a delay or failure caused by events beyond its reasonable control, such as natural disasters, war, government action, or major failures of the internet or of hosting providers; payment obligations already due are not suspended.',
          'Notices under this agreement are given by email: to Samatrica at contact@samatrica.com, and to the Business at the email address of its account. The Business may not transfer this agreement without Samatrica’s written consent; Samatrica may transfer it to an affiliate or to a successor of its business, with notice to the Business.',
          'These terms, the data processing agreement and the refund policy are the entire agreement between the parties about the Service. If a provision is found invalid, the rest remains in force, and the invalid provision is replaced by a valid one as close as possible to its purpose.',
        ],
      },
      {
        title: '14. Changes, law and disputes',
        paragraphs: [
          'Samatrica may amend these terms at any time. Changes that do not reduce the Business’s rights, such as clarifications, new features or editorial corrections, and changes required by law, by a court or authority, or for security reasons, take effect when published on the website. Other changes are notified by email or in the dashboard at least 15 days before they take effect; if the Business does not agree, it may cancel before that date, and continued use afterwards means acceptance. These terms are governed by the laws of the Republic of Estonia, excluding the UN Convention on Contracts for the International Sale of Goods, and Harju County Court (Harju Maakohus) in Tallinn has exclusive jurisdiction.',
          'These terms are provided in several languages for convenience; in case of discrepancy, the English version prevails.',
        ],
      },
    ],

    refund: [
      {
        title: '1. Who this policy applies to',
        paragraphs: [
          'Samatrica is a service for businesses, not consumers. The statutory 14-day right of withdrawal of EU consumer law therefore does not apply; the refund rights in this policy are the ones Samatrica grants by contract.',
        ],
      },
      {
        title: '2. Cancel at any time',
        paragraphs: [
          'There is no minimum term. You can cancel at any time by writing to contact@samatrica.com: the subscription ends at the close of the billing period already paid — the running bill — nothing further is charged, and you keep access until then.',
        ],
      },
      {
        title: '3. 30-day money-back guarantee',
        paragraphs: [
          'If Samatrica does not work out for your business, write to contact@samatrica.com within 30 days of your first subscription payment and we refund that payment in full, no questions asked. The refund goes to the original payment method, normally within 10 business days.',
          'The one-time setup fee, in the amount shown and charged at signup for configuring your services, prices, staff and chat widget, is not refundable, because that work has already been done. There is no free trial: this guarantee replaces it.',
        ],
      },
      {
        title: '4. Renewals',
        paragraphs: [
          'Subscriptions are billed monthly. Renewal payments are not refundable, but you can cancel at any time: the subscription then simply ends at the close of the month already paid, and you keep access until then.',
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
          'Samatrica is operated by Samatrica OÜ, registry code 16285192, Sepapaja tn 6, 15551 Tallinn, Estonia, which is the controller for the processing described in Section 2. It provides an AI booking assistant for businesses that take appointments. This policy explains how personal data is handled on this website and in the Samatrica chat widget installed on those businesses’ websites. For any privacy question or request, write to contact@samatrica.com.',
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
        title: '3. The chat widget on a business’s website',
        paragraphs: [
          'When you chat with the Samatrica assistant on a business’s website, that business is the data controller and Samatrica processes your data on its behalf. We process the conversation content and, if you request a booking, your first and last name, email address and phone number, in order to answer you and pass your request to the business.',
          'When the business is a healthcare provider, your messages and appointment requests can reveal health information. They are used only to handle your request; the business you are writing to is the one responsible for this data, and you can exercise your data-protection rights with it or by writing to us.',
        ],
      },
      {
        title: '4. AI processing',
        paragraphs: [
          'The assistant’s replies are generated by an AI language model provided by our cloud hosting provider and processed in its data centres in the European Union. Conversation content is used only to generate the reply; it is not shared with the model’s developer and is not used to train any model.',
        ],
      },
      {
        title: '5. Where data is stored',
        paragraphs: [
          'The Service’s data is stored by a third-party hosting provider in the European Union; assistant replies are generated in that provider’s data centres in the European Union (Section 4). Where a sub-processor processes data outside the EU, we rely on the safeguards the GDPR provides for such transfers, such as an adequacy decision or the EU standard contractual clauses.',
        ],
      },
      {
        title: '6. Sub-processors',
        paragraphs: [
          'We use a small number of service providers to run the Service: our cloud hosting provider (data stored in the EU; assistant replies generated in the European Union), and our email delivery provider (verification codes and notifications). The current list is available on request and is provided to businesses with their data processing agreement.',
        ],
      },
      {
        title: '7. Retention',
        paragraphs: [
          'Unless the business has chosen other periods, data is deleted or irreversibly anonymised automatically: chat conversations 90 days after the last message; contact details that were never verified after 30 days; your customer record and bookings 24 months after your last appointment; technical logs after 30 days. Verification codes expire within minutes and are not reused, and backups are overwritten on a regular rotation. When a business leaves Samatrica, its data is deleted after a 30-day export window, except where law requires longer retention.',
        ],
      },
      {
        title: '8. Security',
        paragraphs: [
          'All connections are encrypted in transit (TLS). Each business’s data is isolated: a business can only see its own conversations, customers and bookings. Access by Samatrica staff is limited to what operating the Service requires.',
        ],
      },
      {
        title: '9. Your rights',
        paragraphs: [
          'Under the GDPR you can request access to your personal data, its correction or deletion, restriction of processing, portability, and you can object to certain processing. Write to contact@samatrica.com (or to the business you chatted with, for data processed on its behalf); we answer within the legal time limits. You can also lodge a complaint with the data protection authority of your country, or with Samatrica’s lead supervisory authority, the Estonian Data Protection Inspectorate (Andmekaitse Inspektsioon, www.aki.ee).',
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
    tagline: 'The AI assistant that answers your customers and takes booking requests, 24/7.',
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
