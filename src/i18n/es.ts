import type { Dictionary } from './en'

export const es: Dictionary = {
  meta: {
    homeTitle: 'Samatrica: el asistente con IA que recibe las solicitudes de cita de su clínica 24/7',
    homeDescription:
      'Un asistente con IA en el chat del sitio web de su clínica atiende a los pacientes 24/7 en su propio idioma, encuentra horarios libres y recoge solicitudes de cita que usted confirma. Su recepción toma el control cuando hace falta.',
    clinicsTitle: 'Samatrica para clínicas: sus pacientes solicitan cita, de día y de noche',
    clinicsDescription:
      'Permita que sus pacientes soliciten cita y obtengan respuestas 24/7 en su propio idioma. Usted confirma cada solicitud; su recepción toma el control del chat cuando realmente importa.',
    signupTitle: 'Comience su prueba gratuita: Samatrica',
    signupDescription: 'Cree su cuenta de Samatrica y añada el asistente con IA a su sitio web.',
    contactTitle: 'Contacto: Samatrica',
    contactDescription: 'Hable con el equipo de Samatrica.',
    termsTitle: 'Términos del servicio: Samatrica',
    privacyTitle: 'Política de privacidad: Samatrica',
    refundTitle: 'Política de reembolso: Samatrica',
    brandTitle: 'Marca: Samatrica',
  },

  nav: {
    clinics: 'Clínicas',
    contact: 'Contacto',
    startTrial: 'Prueba gratuita',
    menu: 'Menú',
    close: 'Cerrar',
    skipToContent: 'Ir al contenido',
    home: 'Inicio de Samatrica',
  },

  common: {
    startTrial: 'Comenzar prueba gratuita',
    seeHowItWorks: 'Vea cómo funciona',
    learnMore: 'Más información',
    backToHome: 'Volver al inicio',
    whatsapp: 'Chatee con nosotros por WhatsApp',
    trialNote: 'Prueba gratuita de 7 días · Se requiere tarjeta · Cancele cuando quiera',
    language: 'Idioma',
    comingSoon: 'Próximamente',
  },

  chat: {
    title: 'Asistente de Samatrica',
    status: 'En línea · responde al instante',
    clinic: {
      customer1: 'Hola, ¿puedo ver a un dermatólogo esta semana?',
      assistant1: 'Por supuesto. El Dr. ** tiene horarios libres el jueves a las 10:30 y a las 16:00. ¿Cuál le viene mejor?',
      customer2: 'El jueves a las 16:00, por favor.',
      assistant2: 'Solicitud enviada. Le he mandado un código por correo y SMS para verificarla; después, la clínica confirmará su cita.',
      booked: 'Jueves 16:00 · Dermatología · Solicitud enviada',
      confirmed: 'Confirmada por la clínica',
    },
    typing: 'El asistente está escribiendo',
    placeholder: 'Escriba un mensaje…',
  },

  home: {
    eyebrow: 'Asistente de citas con IA para clínicas de salud',
    heroTitle: 'La recepción de su clínica, despierta 24/7.',
    heroTitleAccent: 'En todos los idiomas.',
    heroSubtitle:
      'Samatrica atiende a sus pacientes en el chat de su sitio web, encuentra horarios libres y recoge solicitudes de cita, de día y de noche. Usted confirma cada una, y su recepción toma el control siempre que haga falta un trato humano.',
    heroProof: 'Contáctenos · Prueba gratuita de 7 días',

    industriesEyebrow: 'Diseñado para clínicas de salud',
    industriesTitle: 'Pensado para clínicas de cualquier especialidad',
    industriesSubtitle: 'De la consulta individual a la clínica con varias sedes: cada mensaje sin respuesta es un paciente perdido.',
    clinicCards: [
      {
        title: 'Citas a cualquier hora',
        text: 'Sus pacientes solicitan cita con el médico a medianoche y obtienen respuestas sobre sus servicios, sin llamar a la recepción.',
      },
      {
        title: 'Solicitudes por médico y especialidad',
        text: 'Cada médico o consulta tiene su propio horario y duración de cita, de modo que el asistente solo ofrece horarios realmente libres.',
      },
      {
        title: 'Pacientes verificados',
        text: 'Los pacientes confirman su correo y su teléfono con un código antes de que la solicitud le llegue a usted: se acabaron las reservas falsas.',
      },
    ],

    howEyebrow: 'Cómo funciona',
    howTitle: 'En marcha en tres pasos',
    steps: [
      {
        title: 'Añada el widget',
        text: 'Pegue una sola línea de código en el sitio web de su clínica. Configure sus médicos, horarios de apertura y horario de atención en el panel.',
      },
      {
        title: 'La IA responde y recoge la solicitud',
        text: 'El asistente responde preguntas, encuentra horarios libres y recoge la solicitud de cita. El paciente la verifica por correo y SMS, y usted la confirma.',
      },
      {
        title: 'Su recepción toma el control',
        text: 'Cuando un paciente pide hablar con una persona, un recepcionista toma el chat en directo, dentro de su horario de atención.',
      },
    ],

    featuresEyebrow: 'Funciones',
    featuresTitle: 'Todo lo que su recepción necesita',
    features: [
      { title: 'Atención 24/7', text: 'Noches, fines de semana y festivos: ningún paciente espera a la mañana siguiente.' },
      { title: 'Disponibilidad real', text: 'El asistente solo ofrece horarios que encajan con los horarios de apertura, los cierres y las citas existentes de cada médico.' },
      { title: 'Pacientes verificados', text: 'Los pacientes se verifican con un código por correo y SMS: se acabaron las solicitudes falsas.' },
      { title: 'Intervención en directo', text: 'Su recepción ve cada conversación en tiempo real y puede intervenir con un solo clic.' },
      { title: 'Horario de atención', text: 'Fuera de su horario, el asistente indica a los pacientes cuándo vuelve a estar disponible su equipo.' },
      { title: 'Un solo panel', text: 'Conversaciones, citas, médicos, empleados y horarios, todo en un mismo lugar.' },
    ],

    languagesEyebrow: 'Multilingüe',
    languagesTitle: 'Habla el idioma de sus pacientes',
    languagesText:
      'Sus pacientes escriben en árabe, inglés, francés, ruso o cualquier otro idioma: el asistente responde en ese mismo idioma, con naturalidad. Su panel está disponible en seis idiomas, incluido el árabe con escritura completa de derecha a izquierda.',
    languagesSample: [
      { lang: 'العربية', text: 'هل يوجد موعد يوم الخميس؟' },
      { lang: 'English', text: 'Is there a slot on Thursday?' },
      { lang: 'Français', text: 'Avez-vous un créneau jeudi ?' },
      { lang: 'Русский', text: 'Есть ли время в четверг?' },
    ],

    statsTitle: 'Por qué las clínicas eligen Samatrica',
    stats: [
      { value: '24/7', label: 'Siempre disponible' },
      { value: '1', label: 'Línea de código para instalarlo' },
      { value: '6', label: 'Idiomas del panel' },
    ],

    faqEyebrow: 'Preguntas frecuentes',
    faqTitle: 'Resolvemos sus dudas',
    faq: [
      {
        q: '¿Necesito un desarrollador para instalarlo?',
        a: 'No. Basta con pegar una línea de código en su sitio web, como una etiqueta de chat o de analítica. Si lo necesita, le ayudamos.',
      },
      {
        q: '¿El asistente confirma las citas por su cuenta?',
        a: 'No. El asistente recoge solicitudes de cita para horarios libres, según los médicos y horarios de apertura que usted defina. Usted confirma o rechaza cada una desde el panel, y el paciente recibe un aviso.',
      },
      {
        q: '¿Qué ocurre cuando un paciente quiere hablar con una persona?',
        a: 'Dentro de su horario de atención, un recepcionista toma la conversación en directo desde el panel. Fuera de ese horario, el asistente le indica al paciente cuándo volver a escribir.',
      },
      {
        q: '¿Qué idiomas habla?',
        a: 'El asistente responde en el idioma del cliente. El panel está disponible en inglés, francés, árabe, español, ruso y griego.',
      },
      {
        q: '¿Cómo funciona la prueba gratuita?',
        a: 'Dispone de 7 días gratis en cualquier plan. Se requiere una tarjeta para comenzar y puede cancelar en cualquier momento antes de que termine la prueba.',
      },
      {
        q: '¿Están seguros los datos de mis pacientes?',
        a: 'Cada clínica solo puede ver sus propios pacientes, conversaciones y citas. Los pacientes confirman su correo electrónico y su número de teléfono con un código antes de que una solicitud de cita le llegue a usted.',
      },
    ],

    ctaTitle: 'No vuelva a perder una cita',
    ctaText: 'Comience su prueba gratuita de 7 días y deje que Samatrica atienda a su próximo paciente esta misma noche.',
  },

  clinics: {
    eyebrow: 'Para clínicas de salud',
    title: 'Sus pacientes solicitan cita, de día y de noche.',
    subtitle:
      'Samatrica atiende a los pacientes en su sitio web, recoge sus solicitudes de cita con el médico adecuado y libera a su recepción del teléfono.',
    painTitle: 'Su recepción no puede atender a todos',
    pains: [
      { title: 'Llamadas fuera de horario', text: 'La mayoría de los pacientes buscan cita por la tarde o noche, cuando nadie puede contestar.' },
      { title: 'Líneas saturadas', text: 'El personal de recepción atiende llamadas, pacientes presenciales y trámites, todo a la vez.' },
      { title: 'Reservas sin verificar', text: 'Las reservas con datos de contacto erróneos dejan huecos en la agenda y nadie a quien llamar.' },
    ],
    benefitsTitle: 'Lo que Samatrica hace por su clínica',
    benefits: [
      { title: 'Solicitudes por médico y especialidad', text: 'Cada médico o consulta es un recurso con su propio horario y duración de cita.' },
      { title: 'Pacientes atendidos de noche', text: 'El asistente responde preguntas sobre sus servicios y recoge solicitudes de cita 24/7.' },
      { title: 'Pacientes verificados', text: 'Los pacientes se verifican por correo y SMS antes de que su solicitud le llegue a usted.' },
      { title: 'Pacientes siempre informados', text: 'Los pacientes reciben un aviso en cuanto usted confirma o cancela su reserva.' },
      { title: 'Intervención de recepción', text: 'Su recepcionista toma el control del chat para cualquier asunto delicado.' },
      { title: 'Cierres y festivos', text: 'Bloquee la agenda de un médico por vacaciones o cierre toda la clínica en un día festivo.' },
    ],
    note: 'Samatrica gestiona solicitudes de cita y preguntas generales. No ofrece consejo médico.',
    ctaTitle: 'Ofrezca a sus pacientes una recepción que nunca duerme',
  },

  pricing: {
    eyebrow: 'Precios',
    title: 'Planes sencillos que crecen con usted',
    subtitle: 'Todos los planes incluyen el asistente con IA, el panel y la intervención en directo.',
    popular: 'El más popular',
    choose: 'Comenzar prueba gratuita',
    billing: 'Periodo de facturación',
    monthly: 'Mensual',
    yearly: 'Anual',
    currency: 'Moneda',
    perMonth: '/ mes',
    perYear: '/ año',
    save: (percent: string) => `Ahorre un ${percent}% con la facturación anual`,
    notAvailable: 'No disponible en esta moneda',
    limits: {
      conversations: 'Conversaciones con IA al mes',
      employees: 'Empleados',
      resources: 'Recursos',
      widgets: 'Widgets para sitio web',
    },
    unlimited: 'Ilimitado',
    included: 'Incluido en todos los planes',
    includedList: [
      'Asistente con IA 24/7',
      'Verificación por correo y SMS',
      'Intervención en directo',
      'Horario de atención y de apertura',
      'Panel en 6 idiomas',
    ],
    placeholderNote: 'Los precios y límites son orientativos y pueden cambiar antes del lanzamiento.',
    plans: {
      starter: { name: 'Starter', tagline: 'Para una consulta individual' },
      pro: { name: 'Pro', tagline: 'Para clínicas en crecimiento' },
      business: { name: 'Business', tagline: 'Para clínicas con varias sedes' },
    },
  },

  signup: {
    title: 'Comience su prueba gratuita',
    subtitle: '7 días gratis. Se requiere una tarjeta; cancele cuando quiera antes de que termine la prueba.',
    businessName: 'Nombre del negocio',
    businessPhone: 'Teléfono del negocio',
    phoneHint: 'Incluya el prefijo del país, p. ej. +971 4 234 5678',
    timezone: 'Zona horaria',
    adminEmail: 'Su correo electrónico',
    adminEmailHint: 'Será el primer administrador del panel.',
    /** Keep {terms} and {privacy}: they become links. */
    acceptTerms: 'Acepto los {terms} y la {privacy}',
    termsLink: 'términos del servicio',
    privacyLink: 'política de privacidad',
    submit: 'Continuar',
    required: 'Este campo es obligatorio.',
    invalidEmail: 'Introduzca un correo electrónico válido.',
    invalidPhone: 'Introduzca un número de teléfono válido con el prefijo del país.',
    mustAccept: 'Acepte los términos para continuar.',
    thanksTitle: '¡Gracias!',
    thanksText: 'Hemos recibido sus datos y nos pondremos en contacto con usted muy pronto.',
    back: 'Editar datos',
  },

  contact: {
    title: 'Contáctenos',
    subtitle: '¿Tiene preguntas sobre Samatrica, desea una demostración para su clínica o necesita un plan a medida? Nos encantará atenderle.',
    emailLabel: 'Correo electrónico',
    placeholder: 'Los datos de contacto estarán disponibles próximamente.',
  },

  legal: {
    termsTitle: 'Términos del servicio',
    privacyTitle: 'Política de privacidad',
    refundTitle: 'Política de reembolso',
    draft: 'Borrador',
    placeholder: 'Esta página se publicará antes del lanzamiento. Su texto se está preparando y revisando.',
  },

  footer: {
    tagline: 'El asistente con IA que atiende a sus pacientes y recoge solicitudes de cita, 24/7.',
    product: 'Producto',
    company: 'Empresa',
    legal: 'Legal',
    rights: 'Todos los derechos reservados.',
  },

  brand: {
    title: 'Logotipo',
    subtitle: 'Página interna: el logotipo de Samatrica y sus variantes. No está enlazada desde el sitio y está oculta a los buscadores.',
    main: 'Logotipo principal',
    tealArc: 'Arco verde azulado (predeterminado)',
    navyArc: 'Arco azul marino',
    reversed: 'Invertido, sobre azul marino',
    oneColorNavy: 'Un solo color: azul marino',
    oneColorBlack: 'Un solo color: negro (facturas, sellos)',
    horizontal: 'Versión horizontal',
    stacked: 'Versión apilada',
    icon: 'Icono',
    iconSizes: 'A 96, 64, 48, 32, 24 y 16 px. En 32 px o menos, se omite el arco para que la “s” se vea nítida.',
  },

  notFound: 'Página no encontrada',
}
