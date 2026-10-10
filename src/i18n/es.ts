import type { Dictionary } from './en'

export const es: Dictionary = {
  meta: {
    homeTitle: 'Samatrica: el asistente con IA que recibe sus solicitudes de reserva 24/7',
    homeDescription:
      'Un asistente con IA en el chat de su sitio web atiende a sus clientes 24/7 en su propio idioma, encuentra horarios libres y recoge solicitudes de reserva que usted confirma. Su equipo toma el control cuando hace falta.',
    hotelsTitle: 'Samatrica para hoteles: los huéspedes solicitan su estancia, de día y de noche',
    hotelsDescription:
      'Los huéspedes preguntan por sus habitaciones y solicitan una estancia 24/7, en su idioma. Solo se ofrecen habitaciones realmente libres en sus fechas, y usted confirma cada solicitud.',
    salonsTitle: 'Samatrica para salones de belleza: sus clientes solicitan cita, de día y de noche',
    salonsDescription:
      'Sus clientes preguntan por sus servicios y solicitan una hora con su estilista 24/7, en su propio idioma. Solo se ofrecen horas realmente libres, y usted confirma cada solicitud.',
    signupTitle: 'Empiece ahora: Samatrica',
    signupDescription: 'Cree su cuenta de Samatrica y añada el asistente con IA a su sitio web.',
    contactTitle: 'Contacto: Samatrica',
    contactDescription: 'Hable con el equipo de Samatrica.',
    termsTitle: 'Términos del servicio: Samatrica',
    privacyTitle: 'Política de privacidad: Samatrica',
    refundTitle: 'Política de reembolso: Samatrica',
    brandTitle: 'Marca: Samatrica',
  },

  nav: {
    hotels: 'Hoteles',
    salons: 'Salones',
    contact: 'Contacto',
    login: 'Iniciar sesión',
    startTrial: 'Empiece ahora',
    menu: 'Menú',
    close: 'Cerrar',
    skipToContent: 'Ir al contenido',
    home: 'Inicio de Samatrica',
  },

  common: {
    startTrial: 'Empiece ahora',
    seeHowItWorks: 'Vea cómo funciona',
    learnMore: 'Más información',
    backToHome: 'Volver al inicio',
    whatsapp: 'Chatee con nosotros por WhatsApp',
    trialNote: 'Sin permanencia · Cancele cuando quiera · Pague solo el periodo en curso',
    language: 'Idioma',
    comingSoon: 'Próximamente',
  },

  chat: {
    title: 'Asistente de Samatrica',
    status: 'En línea · responde al instante',
    salon: {
      customer1: 'Hola, ¿puedo reservar un tinte el viernes?',
      assistant1: 'Por supuesto. ¿Con Anna o con Bob, o con quien esté disponible?',
      customer2: 'Con quien sea, sobre las 11.',
      assistant2: 'El viernes tengo 11:00, 11:15 o 11:45. ¿Cuál le viene bien?',
      customer3: 'A las 11:00, por favor.',
      booked: 'Tinte con Anna · Viernes 11:00–11:45 · 250 AED · Solicitud enviada',
      confirmed: 'Confirmada por el salón',
    },
    hotel: {
      customer1: 'Hola, ¿tienen una habitación doble de viernes a domingo?',
      assistant1: 'Sí. Para esas 2 noches está libre la Doble Vista al Mar, a 450 AED la noche, 900 AED en total. ¿Se la solicito?',
      customer2: 'Sí, por favor.',
      assistant2: 'Solicitud enviada. Le he mandado un código por correo para verificarla; después, el hotel confirmará su estancia.',
      booked: 'Doble Vista al Mar · Vie–Dom · 2 noches · 900 AED · Solicitud enviada',
      confirmed: 'Confirmada por el hotel',
    },
    typing: 'El asistente está escribiendo',
    placeholder: 'Escriba un mensaje…',
  },

  home: {
    eyebrow: 'Asistente de reservas con IA para su sitio web',
    heroTitle: 'Su recepción, despierta 24/7.',
    heroTitleAccent: 'En todos los idiomas.',
    heroSubtitle:
      'Samatrica atiende a sus clientes en el chat de su sitio web, encuentra horarios libres y recoge solicitudes de reserva, de día y de noche. Usted confirma cada una, y su equipo toma el control siempre que haga falta un trato humano.',
    heroProof: 'Contáctenos · Cancele cuando quiera',

    industriesEyebrow: 'Diseñado para las citas',
    industriesTitle: 'Pensado para todo negocio que trabaja con reservas',
    industriesSubtitle:
      'Clínicas, salones, spas, gimnasios, talleres, consultores: allí donde cada mensaje sin respuesta es un cliente perdido.',
    valueCards: [
      {
        title: 'Reservas a cualquier hora',
        text: 'Sus clientes solicitan una cita a medianoche y obtienen respuestas sobre sus servicios, sin llamar a su recepción.',
      },
      {
        title: 'Solicitudes por empleado y servicio',
        text: 'Cada empleado, sala o recurso tiene su propio horario y duración de cita, de modo que el asistente solo ofrece horarios realmente libres.',
      },
      {
        title: 'Clientes verificados',
        text: 'Los clientes confirman su correo y su teléfono con un código antes de que la solicitud le llegue a usted: se acabaron las reservas falsas.',
      },
    ],

    howEyebrow: 'Cómo funciona',
    howTitle: 'En marcha en tres pasos',
    steps: [
      {
        title: 'Añada el widget',
        text: 'Pegue una sola línea de código en su sitio web. Configure sus recursos, horarios de apertura y horario de atención en el panel.',
      },
      {
        title: 'La IA responde y recoge la solicitud',
        text: 'El asistente responde preguntas, encuentra horarios libres y recoge la solicitud de reserva. El cliente la verifica por correo y SMS, y usted la confirma.',
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
      { title: 'Disponibilidad real', text: 'El asistente solo ofrece horarios que encajan con los horarios de apertura, los cierres y las reservas existentes de cada recurso.' },
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

    statsTitle: 'Por qué los negocios eligen Samatrica',
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
        a: 'No. El asistente recoge solicitudes de reserva para horarios libres, según los recursos y horarios de apertura que usted defina. Usted confirma o rechaza cada una desde el panel, y el cliente recibe un aviso.',
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
        q: '¿Hay permanencia?',
        a: 'No. Paga por periodo de facturación y puede cancelar en cualquier momento: la suscripción simplemente finaliza al término del periodo ya abonado, y no se le cobra nada más.',
      },
      {
        q: '¿Están seguros los datos de mis clientes?',
        a: 'Cada negocio solo puede ver sus propios clientes, conversaciones y reservas. Los clientes confirman su correo electrónico y su número de teléfono con un código antes de que una solicitud de reserva le llegue a usted.',
      },
    ],

    ctaTitle: 'No vuelva a perder una reserva',
    ctaText: 'Empiece ahora y deje que Samatrica atienda a su próximo cliente esta misma noche.',
  },

  hotels: {
    eyebrow: 'Para hoteles y alquileres vacacionales',
    title: 'Los huéspedes reservan su estancia, de día y de noche.',
    subtitle:
      'Samatrica responde a los huéspedes en su web y en su idioma, comprueba qué habitaciones están realmente libres en sus fechas y recoge la solicitud de reserva, para que su recepción se dedique a los huéspedes que tiene delante.',
    painTitle: 'Su recepción no puede responder a todos los mensajes',
    pains: [
      { title: 'Preguntas a cualquier hora', text: 'Los huéspedes de otras zonas horarias escriben de noche, cuando no hay nadie en recepción.' },
      { title: 'Una recepción saturada', text: 'Entradas, salidas y llamadas compiten por el mismo recepcionista.' },
      { title: 'Idas y vueltas con las fechas', text: 'Averiguar qué habitación está libre para qué noches lleva mensaje tras mensaje.' },
    ],
    benefitsTitle: 'Lo que Samatrica hace por su hotel',
    benefits: [
      { title: 'Habitaciones por noche', text: 'Cada habitación o tipo de habitación tiene su hora de entrada y de salida, su estancia mínima y máxima y su precio por noche.' },
      { title: 'Huéspedes atendidos de noche', text: 'El asistente responde a preguntas sobre sus habitaciones y servicios y recoge solicitudes de reserva 24/7, en el idioma del huésped.' },
      { title: 'Solo noches realmente libres', text: 'Solo se ofrecen habitaciones libres todas las noches de la estancia, fuera de las fechas que usted ha cerrado.' },
      { title: 'Huéspedes verificados', text: 'Los huéspedes verifican su correo electrónico antes de que su solicitud le llegue.' },
      { title: 'Huéspedes informados', text: 'Los huéspedes reciben un aviso en cuanto usted confirma o cancela su estancia.' },
      { title: 'Su recepción interviene', text: 'Su equipo toma el relevo en el chat cuando hace falta y puede reservar una estancia para cualquier huésped desde el panel.' },
    ],
    note: 'Cada estancia es una solicitud que su hotel confirma. Samatrica no cobra pagos ni depósitos.',
    ctaTitle: 'Dé a sus huéspedes una recepción que nunca duerme',
  },

  salons: {
    eyebrow: 'Para salones de belleza',
    title: 'Sus clientes reservan su próxima visita, de día y de noche.',
    subtitle:
      'Samatrica atiende a sus clientes en su sitio web, en su idioma y a partir de su carta de servicios. Encuentra una hora realmente libre con el estilista adecuado y recoge la solicitud de reserva, mientras su equipo sigue con el cliente en el sillón.',
    painTitle: 'Su equipo no puede contestar mientras trabaja',
    pains: [
      { title: 'Manos ocupadas, teléfono sonando', text: 'Sus estilistas no pueden contestar en mitad de un tinte o de un corte.' },
      { title: 'Mensajes después del cierre', text: 'Muchos clientes buscan hora por la noche, cuando el salón está cerrado.' },
      { title: 'Idas y venidas con los horarios', text: 'Encontrar una hora que encaje con el servicio y con el estilista adecuado lleva mensaje tras mensaje.' },
    ],
    benefitsTitle: 'Lo que Samatrica aporta a su salón',
    benefits: [
      { title: 'Su carta de servicios', text: 'Cada servicio tiene su duración, su precio o «a consultar», y una descripción con la que responde el asistente.' },
      { title: 'Su estilista, o quien esté disponible', text: 'El cliente elige estilista o «quien esté disponible», y el salón asigna la reserva a quien tenga menos ese día.' },
      { title: 'Solo horas realmente libres', text: 'Todo el servicio cabe en el horario del estilista, fuera de sus días libres y de los festivos del salón, sin solaparse con otra reserva, en intervalos de 15 minutos.' },
      { title: 'Reservado desde el chat', text: 'El asistente guía al cliente del servicio al estilista, y luego al día y a la hora. Los correos nombran la reserva, y un código de reserva permite al cliente consultarla o cancelarla.' },
      { title: 'Clientes verificados', text: 'Los clientes se verifican por correo y SMS antes de que su solicitud le llegue a usted.' },
      { title: 'Su equipo toma el relevo', text: 'Su equipo toma la conversación en horario de apertura y puede reservar a cualquier cliente, a cualquier minuto, desde el panel.' },
    ],
    note: 'Cada reserva es una solicitud que su salón confirma. Samatrica no cobra pagos ni depósitos.',
    ctaTitle: 'Deje que sus clientes reserven mientras su equipo los atiende',
  },

  pricing: {
    eyebrow: 'Precios',
    title: 'Planes sencillos que crecen con usted',
    subtitle: 'Todos los planes incluyen el asistente con IA, el panel y la intervención en directo.',
    popular: 'El más popular',
    choose: 'Empiece ahora',
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
      pro: { name: 'Pro', tagline: 'Para equipos en crecimiento' },
      business: { name: 'Business', tagline: 'Para negocios con varias sedes' },
    },
  },

  signup: {
    title: 'Empiece ahora',
    subtitle: 'Sin permanencia: cancele cuando quiera y pague solo el periodo de facturación en curso.',
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
    subtitle: '¿Tiene preguntas sobre Samatrica, desea una demostración para su negocio o necesita un plan a medida? Nos encantará atenderle.',
    emailLabel: 'Correo electrónico',
    placeholder: 'Los datos de contacto estarán disponibles próximamente.',
  },

  legal: {
    termsTitle: 'Términos del servicio',
    privacyTitle: 'Política de privacidad',
    refundTitle: 'Política de reembolso',
    placeholder: 'Esta página se publicará antes del lanzamiento. Su texto se está preparando y revisando.',
    updated: 'Última actualización: 10 de octubre de 2026',

    /** Encabezados de sección y párrafos, mostrados en orden. */
    terms: [
      {
        title: '1. Quiénes somos y qué cubren estos términos',
        paragraphs: [
          'El Servicio es prestado por Adenium Consultancy - F.Z.E, un establecimiento de zona franca autorizado por la autoridad de zonas francas de Ajmán (Free Zones Authority of Ajman) con la licencia n.º 32555, número de registro fiscal (TRN) 104836129700001 y domicilio social en FL.H-01582, C1 Building, Ajman Free Zone, Ajmán, Emiratos Árabes Unidos, número Makani 4442612247, que opera Samatrica («Samatrica»).',
          'Samatrica ofrece un asistente de IA que atiende a los visitantes en el sitio web de un negocio, encuentra horarios libres y recoge solicitudes de reserva, junto con un panel de control para el equipo del negocio (el «Servicio»). Estos términos constituyen un acuerdo entre Samatrica y el negocio que abre una cuenta (el «Negocio»), por ejemplo una clínica de salud, un salón o cualquier otro negocio que trabaje con reservas. No crean ningún contrato entre Samatrica y los clientes o pacientes del Negocio.',
        ],
      },
      {
        title: '2. Qué hace el Servicio, y qué no hace',
        paragraphs: [
          'El asistente responde preguntas y recoge solicitudes de cita utilizando los recursos, horarios e información que el Negocio configura. Toda solicitud de cita debe ser confirmada o rechazada por el Negocio: el asistente nunca confirma citas por sí solo.',
          'El Servicio no proporciona asesoramiento médico, diagnóstico ni tratamiento, y no es un servicio de emergencias. El Negocio no debe configurar ni utilizar el asistente para dar consejos médicos, y sigue siendo el único responsable de toda la asistencia sanitaria que presta.',
        ],
      },
      {
        title: '3. Responsabilidades del Negocio',
        paragraphs: [
          'El Negocio mantiene la confidencialidad de sus credenciales de acceso y responde de las acciones de sus empleados en el panel de control. La información que configura (servicios, médicos, horarios, descripciones) debe ser veraz y lícita.',
          'Frente a sus clientes, el Negocio es el responsable del tratamiento: debe contar con una base jurídica para tratar los datos personales recogidos a través del chat, informar a los clientes de este tratamiento en sus propias políticas de privacidad y atender sus solicitudes en materia de protección de datos. El contrato de encargo de tratamiento entre el Negocio y Samatrica (sección 9) regula el tratamiento que Samatrica realiza por cuenta del Negocio.',
        ],
      },
      {
        title: '4. Uso aceptable',
        paragraphs: [
          'El Servicio no puede utilizarse con fines ilícitos, para enviar spam, para recoger datos de personas sin base jurídica, para sondear o perturbar la seguridad del Servicio ni para desarrollar un producto competidor. El widget de chat solo puede instalarse en sitios web que el Negocio controle.',
        ],
      },
      {
        title: '5. Respuestas generadas por IA',
        paragraphs: [
          'Las respuestas del asistente las genera automáticamente una inteligencia artificial a partir de la información que configura el Negocio. Pueden ser incompletas o incorrectas, por lo que el Negocio debe mantener esa información exacta y actualizada, y revisar periódicamente las conversaciones en el panel. Samatrica no garantiza la exactitud de cada respuesta.',
          'El widget informa a los visitantes de que están hablando con un asistente de IA, y el Negocio no debe ocultarlo ni dar a entender lo contrario. El Negocio sigue siendo responsable ante sus clientes de la información y los servicios que ofrece.',
        ],
      },
      {
        title: '6. Tarifas y cancelación',
        paragraphs: [
          'Las tarifas, los periodos de facturación y los métodos de pago se indican al contratar la suscripción, y pueden actualizarse con un preaviso de al menos 30 días por correo electrónico; los cambios de precio nunca se aplican con carácter retroactivo, y el Negocio puede cancelar antes de que entren en vigor. No hay permanencia mínima: el Negocio puede cancelar en cualquier momento, la suscripción finaliza al término del periodo de facturación ya abonado y no se cobra nada más.',
          'Las tarifas no incluyen el impuesto sobre el valor añadido ni otros impuestos. A los Negocios establecidos en los Emiratos Árabes Unidos se les añade en la factura el IVA emiratí (actualmente del 5 %); los Negocios establecidos fuera de los Emiratos liquidan el IVA o impuesto similar que corresponda en su país, incluso mediante el mecanismo de inversión del sujeto pasivo.',
        ],
      },
      {
        title: '7. Propiedad intelectual',
        paragraphs: [
          'Samatrica y sus licenciantes son titulares del Servicio, incluidos su software, su diseño y su documentación. Durante la suscripción, el Negocio recibe un derecho no exclusivo e intransferible de usar el Servicio para su propia actividad. El Negocio no puede copiar, modificar, aplicar ingeniería inversa ni revender el Servicio, salvo en la medida en que la ley lo permita expresamente.',
          'El Negocio conserva todos los derechos sobre el contenido que aporta (descripciones, servicios, imágenes, horarios) y concede a Samatrica el derecho a usar ese contenido únicamente para prestar el Servicio. Samatrica puede usar libremente las sugerencias y comentarios sobre el Servicio, sin obligación alguna frente al Negocio.',
        ],
      },
      {
        title: '8. Confidencialidad',
        paragraphs: [
          'Cada parte mantiene la confidencialidad de la información no pública que reciba de la otra en relación con el Servicio, la usa solo para este acuerdo y solo la revela a empleados y asesores que la necesiten y estén sujetos a confidencialidad, o cuando lo exija la ley o un tribunal. Esta obligación se mantiene durante tres años tras la finalización del acuerdo; los datos personales siguen protegidos según lo descrito en la sección 9 y en el acuerdo de tratamiento de datos.',
        ],
      },
      {
        title: '9. Protección de datos',
        paragraphs: [
          'Respecto de los datos personales de los clientes y demás usuarios del chat, el Negocio es el responsable del tratamiento y Samatrica el encargado del tratamiento conforme a la normativa de protección de datos aplicable: la ley emiratí de protección de datos personales (Decreto-ley federal n.º 45 de 2021) y, cuando sea aplicable, el RGPD. Un contrato de encargo de tratamiento, que incluye los subencargados de Samatrica y sus medidas de seguridad, forma parte de este acuerdo. Samatrica aloja los datos del Servicio con un proveedor de alojamiento externo situado en la Unión Europea.',
          'Cuando el Negocio presta asistencia sanitaria, las solicitudes de cita pueden revelar información sobre la salud, que el RGPD considera una categoría especial de datos personales. El Negocio confirma que está legitimado para recoger tales datos de sus pacientes, y Samatrica los trata únicamente para prestar el Servicio.',
        ],
      },
      {
        title: '10. Disponibilidad',
        paragraphs: [
          'Samatrica presta el Servicio con la diligencia y competencia razonables, pero no garantiza una disponibilidad ininterrumpida. Pueden producirse mantenimientos planificados e interrupciones; el widget de chat está diseñado para desaparecer discretamente del sitio web del Negocio cuando el Servicio no está accesible.',
        ],
      },
      {
        title: '11. Responsabilidad',
        paragraphs: [
          'En la medida en que la ley lo permita, la responsabilidad total de Samatrica en virtud de este acuerdo se limita a las tarifas abonadas por el Negocio en los 12 meses anteriores al hecho que origine la reclamación, y Samatrica no responde de daños indirectos como el lucro cesante. Nada en estos términos limita la responsabilidad que legalmente no pueda limitarse.',
        ],
      },
      {
        title: '12. Terminación y datos',
        paragraphs: [
          'Cualquiera de las partes puede resolver el acuerdo con efectos al final del periodo abonado; Samatrica puede suspenderlo o resolverlo con efecto inmediato en caso de incumplimiento grave de estos términos. Tras la terminación, el Negocio puede solicitar una exportación de sus datos durante 30 días; después, Samatrica elimina los datos personales del Negocio, salvo que la ley exija una conservación más prolongada.',
        ],
      },
      {
        title: '13. Disposiciones generales',
        paragraphs: [
          'Ninguna de las partes responde de retrasos o incumplimientos causados por hechos fuera de su control razonable, como catástrofes naturales, guerras, actuaciones de las autoridades o fallos graves de internet o de los proveedores de alojamiento; las obligaciones de pago ya vencidas no quedan suspendidas.',
          'Las notificaciones previstas en este acuerdo se realizan por correo electrónico: a Samatrica en contact@samatrica.com y al Negocio en la dirección de correo electrónico de su cuenta. El Negocio no puede ceder este acuerdo sin el consentimiento por escrito de Samatrica; Samatrica puede cederlo a una sociedad vinculada o al sucesor de su actividad, informando al Negocio.',
          'Estos términos, el acuerdo de tratamiento de datos y la política de reembolso constituyen el acuerdo íntegro entre las partes sobre el Servicio. Si alguna disposición se declara inválida, las demás siguen vigentes y la disposición inválida se sustituye por otra válida lo más próxima posible a su finalidad.',
        ],
      },
      {
        title: '14. Modificaciones, ley aplicable y controversias',
        paragraphs: [
          'Samatrica puede actualizar estos términos con un preaviso de al menos 30 días por correo electrónico, y el Negocio puede cancelar antes de que los cambios entren en vigor; el uso continuado tras el periodo de preaviso implica su aceptación. Los cambios exigidos por la ley o por motivos de seguridad pueden aplicarse de inmediato. Estos términos se rigen por las leyes federales de los Emiratos Árabes Unidos tal como se aplican en el emirato de Ajmán, y los tribunales de Ajmán (con el Tribunal Federal de Primera Instancia de Ajmán como tribunal de primera instancia) tienen jurisdicción exclusiva.',
          'Estos términos se ofrecen en varios idiomas para mayor comodidad; en caso de discrepancia, prevalece la versión en árabe.',
        ],
      },
    ],

    refund: [
      {
        title: '1. A quién se aplica esta política',
        paragraphs: [
          'Samatrica es un servicio para empresas, no para consumidores. Por tanto, no resulta de aplicación el derecho legal de desistimiento de 14 días previsto por la normativa europea de consumo; los derechos de reembolso recogidos en esta política son los que Samatrica concede por contrato.',
        ],
      },
      {
        title: '2. Cancele en cualquier momento',
        paragraphs: [
          'No hay permanencia mínima. Puede cancelar en cualquier momento escribiendo a contact@samatrica.com: la suscripción finaliza al término del periodo de facturación ya abonado —el recibo en curso—, no se le cobra nada más y conserva el acceso hasta entonces.',
        ],
      },
      {
        title: '3. Garantía de devolución de 14 días sobre el primer pago',
        paragraphs: [
          'Si Samatrica no convence a su negocio, escriba a contact@samatrica.com dentro de los 14 días siguientes a su primer pago y le reembolsaremos ese pago íntegramente, sin preguntas. El reembolso se abona al medio de pago original, normalmente en un plazo de 10 días hábiles.',
        ],
      },
      {
        title: '4. Renovaciones',
        paragraphs: [
          'Los pagos de renovación (mensuales o anuales) no son reembolsables, pero puede cancelar en cualquier momento: la suscripción simplemente finaliza al término del periodo ya abonado, y conserva el acceso hasta entonces. Recomendamos la facturación mensual hasta que esté seguro del servicio.',
        ],
      },
      {
        title: '5. Errores de facturación y fallos del servicio',
        paragraphs: [
          'Los importes cobrados por error (por ejemplo, un cargo duplicado o un cargo posterior a una cancelación confirmada) se reembolsan siempre en su totalidad. Si una interrupción prolongada por nuestra parte le impidió sustancialmente usar el servicio, contáctenos: abonaremos o reembolsaremos de forma equitativa el periodo afectado.',
        ],
      },
      {
        title: '6. Cómo solicitar un reembolso',
        paragraphs: [
          'Escriba a contact@samatrica.com desde la dirección de correo electrónico de su cuenta, indicando su negocio. Confirmaremos la recepción en un plazo de 2 días hábiles y le comunicaremos cuándo se ha emitido el reembolso.',
          'Esta política se ofrece en varios idiomas para mayor comodidad; en caso de discrepancia, prevalece la versión en árabe.',
        ],
      },
    ],

    privacy: [
      {
        title: '1. Quiénes somos',
        paragraphs: [
          'Samatrica es operado por Adenium Consultancy - F.Z.E, licencia n.º 32555 (Free Zones Authority of Ajman), FL.H-01582, C1 Building, Ajman Free Zone, Ajmán, Emiratos Árabes Unidos. Samatrica ofrece un asistente de reservas con IA para negocios que trabajan con citas. Esta política explica cómo se tratan los datos personales en este sitio web y en el widget de chat de Samatrica instalado en los sitios web de esos negocios. Para cualquier pregunta o solicitud sobre privacidad, escriba a contact@samatrica.com.',
        ],
      },
      {
        title: '2. Visitantes de este sitio web',
        paragraphs: [
          'Cuando nos contacta por correo electrónico o WhatsApp, tratamos sus datos de contacto y el contenido de su mensaje con el fin de responderle (los mensajes de WhatsApp también son tratados por WhatsApp conforme a su propia política de privacidad). Conservamos esta correspondencia durante el tiempo necesario para atender su solicitud y nuestra relación comercial.',
          'Este sitio web no instala por sí mismo cookies de seguimiento ni de publicidad.',
        ],
      },
      {
        title: '3. El widget de chat en el sitio web de un negocio',
        paragraphs: [
          'Cuando conversa con el asistente de Samatrica en el sitio web de un negocio, ese negocio es el responsable del tratamiento y Samatrica trata sus datos por cuenta de él. Tratamos el contenido de la conversación y, si solicita una reserva, su nombre y apellidos, dirección de correo electrónico y número de teléfono, con el fin de responderle y trasladar su solicitud al negocio.',
          'Cuando el negocio es un proveedor sanitario, sus mensajes y solicitudes de cita pueden revelar información sobre su salud. Se utilizan únicamente para gestionar su solicitud; el negocio al que escribe es el responsable de estos datos, y usted puede ejercer sus derechos de protección de datos ante él o escribiéndonos a nosotros.',
        ],
      },
      {
        title: '4. Tratamiento mediante IA',
        paragraphs: [
          'Las respuestas del asistente las genera un modelo de lenguaje de IA que Samatrica opera por sí misma, en servidores situados en la Unión Europea y alquilados a un proveedor de infraestructura externo. El contenido de la conversación se trata allí únicamente para generar las respuestas; no se comparte con ninguna empresa de IA ni se utiliza para entrenar ningún modelo.',
        ],
      },
      {
        title: '5. Dónde se almacenan los datos',
        paragraphs: [
          'Los datos del Servicio se alojan en un proveedor de alojamiento externo situado en la Unión Europea. Cuando un subencargado trata datos fuera de la UE, nos amparamos en las garantías que el RGPD prevé para estas transferencias, como las cláusulas contractuales tipo de la UE.',
        ],
      },
      {
        title: '6. Subencargados del tratamiento',
        paragraphs: [
          'Utilizamos un número reducido de proveedores para operar el Servicio: un proveedor de alojamiento situado en la UE, un proveedor de infraestructura situado en la UE que ejecuta nuestro modelo de IA (respuestas del asistente) y nuestros proveedores de envío de correo electrónico y SMS (códigos de verificación y notificaciones). La lista actualizada está disponible previa solicitud y se facilita a los negocios junto con su contrato de encargo de tratamiento.',
        ],
      },
      {
        title: '7. Conservación',
        paragraphs: [
          'Las conversaciones y las solicitudes de reserva se conservan mientras el negocio utilice el Servicio y las necesite; los códigos de verificación caducan en cuestión de minutos y no se reutilizan. Cuando un negocio deja Samatrica, sus datos se eliminan tras un plazo de exportación de 30 días, salvo que la ley exija una conservación más prolongada.',
        ],
      },
      {
        title: '8. Seguridad',
        paragraphs: [
          'Todas las conexiones están cifradas en tránsito (TLS). Los datos de cada negocio están aislados: un negocio solo puede ver sus propias conversaciones, clientes y reservas. El acceso del personal de Samatrica se limita a lo que exige la operación del Servicio.',
        ],
      },
      {
        title: '9. Sus derechos',
        paragraphs: [
          'En virtud del RGPD, usted puede solicitar el acceso a sus datos personales, su rectificación o supresión, la limitación del tratamiento y la portabilidad, así como oponerse a determinados tratamientos. Escriba a contact@samatrica.com (o al negocio con el que conversó, para los datos tratados por cuenta de él); respondemos dentro de los plazos legales. También puede presentar una reclamación ante su autoridad de protección de datos.',
        ],
      },
      {
        title: '10. Almacenamiento local y cambios',
        paragraphs: [
          'El widget de chat guarda en el almacenamiento local de su navegador únicamente lo necesario para mantener abierta su conversación (un identificador de conversación): sin publicidad ni seguimiento entre sitios. Actualizaremos esta política a medida que el Servicio evolucione y mostraremos en la parte superior la fecha de la versión vigente.',
        ],
      },
    ],
  },

  footer: {
    tagline: 'El asistente con IA que atiende a sus clientes y recoge solicitudes de reserva, 24/7.',
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
