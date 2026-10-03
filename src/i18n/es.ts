import type { Dictionary } from './en'

export const es: Dictionary = {
  meta: {
    homeTitle: 'Samatrica: el asistente con IA que recibe sus solicitudes de cita 24/7',
    homeDescription:
      'Un asistente con IA en el chat de su sitio web atiende a sus clientes 24/7 en su propio idioma, encuentra horarios libres y recoge solicitudes de cita que usted confirma. Su equipo toma el control cuando hace falta.',
    clinicsTitle: 'Samatrica para clínicas: sus pacientes solicitan cita, de día y de noche',
    clinicsDescription:
      'Permita que sus pacientes soliciten cita y obtengan respuestas 24/7 en su propio idioma. Usted confirma cada solicitud; su recepción toma el control del chat cuando realmente importa.',
    realEstateTitle: 'Samatrica para inmobiliarias: califique prospectos y reciba solicitudes de visita',
    realEstateDescription:
      'Responda al instante a las consultas sobre inmuebles, califique a compradores e inquilinos y reciba solicitudes de visita para que sus agentes las confirmen.',
    pricingTitle: 'Precios: Samatrica',
    pricingDescription: 'Planes sencillos para cada negocio. Prueba gratuita de 14 días, cancele cuando quiera.',
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
    realEstate: 'Inmobiliarias',
    pricing: 'Precios',
    contact: 'Contacto',
    login: 'Iniciar sesión',
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
    trialNote: 'Prueba gratuita de 14 días · Se requiere tarjeta · Cancele cuando quiera',
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
    realEstate: {
      customer1: '¿Sigue disponible el apartamento de 2 habitaciones en la marina?',
      assistant1: '¡Sí! ¿Busca alquilar o comprar, y cuándo le gustaría mudarse?',
      customer2: 'Alquilar, a partir del próximo mes. ¿Puedo verlo el sábado?',
      assistant2: 'El sábado a las 11:00 está libre con **, nuestra agente. ¿Le envío la solicitud de visita?',
      booked: 'Sábado 11:00 · Visita · Solicitud enviada',
      confirmed: 'Confirmada por la agencia',
    },
    typing: 'El asistente está escribiendo',
    placeholder: 'Escriba un mensaje…',
  },

  home: {
    eyebrow: 'Asistente de reservas con IA para su sitio web',
    heroTitle: 'Su recepción, abierta 24/7.',
    heroTitleAccent: 'En todos los idiomas.',
    heroSubtitle:
      'Samatrica responde a sus clientes en el chat de su sitio web, encuentra horarios libres y recoge solicitudes de cita, de día y de noche. Usted confirma cada una, y su equipo toma el control siempre que haga falta un trato humano.',
    heroProof: 'Listo en minutos · Prueba gratuita de 14 días',

    industriesEyebrow: 'Diseñado para citas',
    industriesTitle: 'Pensado para clínicas e inmobiliarias',
    industriesSubtitle: 'Dos sectores en los que cada mensaje sin respuesta es un paciente o una venta perdidos.',
    clinicCard: {
      title: 'Clínicas de salud',
      text: 'Sus pacientes solicitan cita con el médico a medianoche y obtienen respuestas sobre sus servicios, sin llamar a la recepción.',
      points: ['Solicitudes por médico y especialidad', 'Respuestas de noche y los fines de semana', 'Verificación por correo y SMS'],
    },
    realEstateCard: {
      title: 'Agencias inmobiliarias',
      text: 'Cada consulta recibe una respuesta inmediata. El asistente califica al prospecto y pasa la solicitud de visita al agente adecuado.',
      points: ['Solicitudes de visita que usted confirma', 'Califique a compradores e inquilinos', 'Pase los prospectos más calientes a un agente'],
    },

    everyBusinessTitle: 'Y para cualquier negocio que trabaje con citas',
    businesses: {
      salon: 'Peluquerías',
      restaurant: 'Restaurantes',
      spa: 'Spas',
      gym: 'Gimnasios',
      garage: 'Talleres',
      consultant: 'Consultores',
    },

    howEyebrow: 'Cómo funciona',
    howTitle: 'En marcha en tres pasos',
    steps: [
      {
        title: 'Añada el widget',
        text: 'Pegue una sola línea de código en su sitio web. Configure sus recursos, horarios de apertura y horario de atención en el panel.',
      },
      {
        title: 'La IA responde y recoge la solicitud',
        text: 'El asistente responde preguntas, encuentra horarios libres y recoge la solicitud de cita. El cliente la verifica por correo y SMS, y usted la confirma.',
      },
      {
        title: 'Su equipo toma el control',
        text: 'Cuando un cliente pide hablar con una persona, un empleado toma el chat en directo, dentro de su horario de atención.',
      },
    ],

    featuresEyebrow: 'Funciones',
    featuresTitle: 'Todo lo que su recepción necesita',
    features: [
      { title: 'Atención 24/7', text: 'Noches, fines de semana y festivos: ninguna consulta espera a la mañana siguiente.' },
      { title: 'Disponibilidad real', text: 'El asistente solo ofrece horarios que encajan con los horarios de apertura, los cierres y las citas existentes de cada recurso.' },
      { title: 'Clientes verificados', text: 'Los clientes se verifican con un código por correo y SMS: se acabaron las solicitudes falsas.' },
      { title: 'Intervención en directo', text: 'Su equipo ve cada conversación en tiempo real y puede intervenir con un solo clic.' },
      { title: 'Horario de atención', text: 'Fuera de su horario, el asistente indica a los clientes cuándo vuelve a estar disponible su equipo.' },
      { title: 'Un solo panel', text: 'Conversaciones, reservas, recursos, empleados y horarios, todo en un mismo lugar.' },
    ],

    languagesEyebrow: 'Multilingüe',
    languagesTitle: 'Habla el idioma de sus clientes',
    languagesText:
      'Sus clientes escriben en árabe, inglés, francés, ruso o cualquier otro idioma: el asistente responde en ese mismo idioma, con naturalidad. Su panel está disponible en seis idiomas, incluido el árabe con escritura completa de derecha a izquierda.',
    languagesSample: [
      { lang: 'العربية', text: 'هل يوجد موعد يوم الخميس؟' },
      { lang: 'English', text: 'Is there a slot on Thursday?' },
      { lang: 'Français', text: 'Avez-vous un créneau jeudi ?' },
      { lang: 'Русский', text: 'Есть ли время в четверг?' },
    ],

    statsTitle: 'Por qué las empresas eligen Samatrica',
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
        q: '¿El asistente confirma las reservas por su cuenta?',
        a: 'No. El asistente recoge solicitudes de cita para horarios libres, según los recursos y horarios de apertura que usted defina. Usted confirma o rechaza cada una desde el panel, y el cliente recibe un aviso.',
      },
      {
        q: '¿Qué ocurre cuando un cliente quiere hablar con una persona?',
        a: 'Dentro de su horario de atención, un empleado toma la conversación en directo desde el panel. Fuera de ese horario, el asistente le indica al cliente cuándo volver a escribir.',
      },
      {
        q: '¿Qué idiomas habla?',
        a: 'El asistente responde en el idioma del cliente. El panel está disponible en inglés, francés, árabe, español, ruso y griego.',
      },
      {
        q: '¿Cómo funciona la prueba gratuita?',
        a: 'Dispone de 14 días gratis en cualquier plan. Se requiere una tarjeta para comenzar y puede cancelar en cualquier momento antes de que termine la prueba.',
      },
      {
        q: '¿Están seguros los datos de mis clientes?',
        a: 'Cada negocio solo puede ver sus propios clientes, conversaciones y reservas. Los clientes confirman su correo electrónico y su número de teléfono con un código antes de que una solicitud de cita le llegue a usted.',
      },
    ],

    ctaTitle: 'No vuelva a perder una reserva',
    ctaText: 'Comience su prueba gratuita de 14 días y deje que Samatrica atienda a su próximo cliente esta misma noche.',
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

  realEstate: {
    eyebrow: 'Para agencias inmobiliarias',
    title: 'Cada consulta, respondida. Cada solicitud de visita, registrada.',
    subtitle:
      'Samatrica responde a las consultas sobre inmuebles en segundos, califica al prospecto y pasa la solicitud de visita al agente adecuado.',
    painTitle: 'Los prospectos se enfrían en minutos',
    pains: [
      { title: 'Respuestas lentas', text: 'Un comprador que espera horas una respuesta ya ha llamado a otra agencia.' },
      { title: 'Prospectos sin calificar', text: 'Sus agentes pierden tiempo en llamadas que nunca iban a convertirse en una operación.' },
      { title: 'Idas y venidas para visitas', text: 'Los mensajes de ida y vuelta para encontrar un horario hacen perder el día a todos.' },
    ],
    benefitsTitle: 'Lo que Samatrica hace por su agencia',
    benefits: [
      { title: 'Respuestas inmediatas', text: 'Cada consulta recibe respuesta en segundos, a cualquier hora.' },
      { title: 'Calificación de prospectos', text: 'Alquiler o compra, presupuesto, fecha de mudanza: el asistente lo pregunta antes de enviar la solicitud.' },
      { title: 'Visitas en la agenda', text: 'Cada agente o inmueble es un recurso con disponibilidad real.' },
      { title: 'Prospectos calientes, a un agente', text: 'Un agente toma la conversación en directo cuando el prospecto está listo.' },
      { title: 'Todos los idiomas', text: 'Compradores e inquilinos internacionales reciben respuestas en su propio idioma.' },
      { title: 'Un solo panel', text: 'Vea todas las conversaciones y visitas en un mismo lugar.' },
    ],
    note: 'Conecte sus anuncios más adelante: hoy, el asistente recoge solicitudes de visita y responde con la información que usted le proporcione.',
    ctaTitle: 'Convierta cada consulta en una visita',
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
      starter: { name: 'Starter', tagline: 'Para una consulta o un comercio' },
      pro: { name: 'Pro', tagline: 'Para equipos en crecimiento' },
      business: { name: 'Business', tagline: 'Para clínicas y agencias con varias sedes' },
    },
  },

  signup: {
    title: 'Comience su prueba gratuita',
    subtitle: '14 días gratis. Se requiere una tarjeta; cancele cuando quiera antes de que termine la prueba.',
    businessName: 'Nombre del negocio',
    businessPhone: 'Teléfono del negocio',
    phoneHint: 'Incluya el prefijo del país, p. ej. +971 4 234 5678',
    timezone: 'Zona horaria',
    adminEmail: 'Su correo electrónico',
    adminEmailHint: 'Será el primer administrador del panel.',
    plan: 'Plan',
    /** Keep {terms} and {privacy}: they become links. */
    acceptTerms: 'Acepto los {terms} y la {privacy}',
    termsLink: 'términos del servicio',
    privacyLink: 'política de privacidad',
    submit: 'Continuar',
    required: 'Este campo es obligatorio.',
    invalidEmail: 'Introduzca un correo electrónico válido.',
    invalidPhone: 'Introduzca un número de teléfono válido con el prefijo del país.',
    mustAccept: 'Acepte los términos para continuar.',
    comingSoonTitle: '¡Ya casi está!',
    comingSoonText:
      'El registro en línea abrirá muy pronto. Gracias por su interés: hemos comprobado sus datos, pero todavía no se han enviado a ningún sitio.',
    back: 'Editar datos',
  },

  contact: {
    title: 'Contáctenos',
    subtitle: '¿Tiene preguntas sobre Samatrica, desea una demostración para su clínica o agencia, o necesita un plan a medida? Nos encantará atenderle.',
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
    tagline: 'El asistente con IA que atiende a sus clientes y recoge solicitudes de cita, 24/7.',
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
