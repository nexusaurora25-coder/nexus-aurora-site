// Content for /privacy-policy in English and Bahasa Malaysia (PDPA 2010 s.7(3) requires both).
// Both objects share one shape so every clause, row and label stays aligned across languages.
// If the two versions ever differ, clause 16 says the English version prevails.
import { COMPANY, type Clause, type Lang } from '../../components/legal/legal';

export interface GlanceRow {
  source: string;
  collect: string;
  purpose: string;
  shared: string;
}

export interface RightAction {
  title: string;
  body: string;
  subject: string;
}

export interface PrivacyContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  lastUpdatedLabel: string;
  lastUpdated: string;
  languageLabel: string;
  tocLabel: string;
  jumpLabel: string;
  glanceTitle: string;
  glanceIntro: string;
  glanceHeaders: [string, string, string, string];
  glance: GlanceRow[];
  rightsTitle: string;
  rightsIntro: string;
  rightsCta: string;
  rights: RightAction[];
  clauses: Clause[];
  contact: {
    role: string;
    emailLabel: string;
    phoneLabel: string;
    addressLabel: string;
    complaint: string;
    complaintLink: string;
  };
}

export const PRIVACY_LAST_UPDATED_ISO = '2026-10-04';

export const DPO = { ...COMPANY, jpdpUrl: 'https://www.pdp.gov.my' };

const en: PrivacyContent = {
  eyebrow: 'Personal Data Protection Notice',
  title: 'Privacy Policy',
  subtitle:
    'How Nexus Aurora collects, uses and protects personal data under Malaysia’s Personal Data Protection Act 2010, and how to ask us about yours.',
  lastUpdatedLabel: 'Last updated',
  lastUpdated: '4 October 2026',
  languageLabel: 'Language',
  tocLabel: 'On this page',
  jumpLabel: 'Jump to a section',
  glanceTitle: 'At a glance',
  glanceIntro: 'What we hold depends on how you deal with us. Clauses 2 to 6 explain each column in full.',
  glanceHeaders: ['Where it comes from', 'What we collect', 'Why we use it', 'Shared with'],
  glance: [
    {
      source: 'Contact and quote forms',
      collect: 'Name, email, phone, company, the service you’re interested in, budget, timeline and your message',
      purpose: 'To reply to you and prepare a proposal or quote',
      shared: 'Supabase (form storage and email delivery)',
    },
    {
      source: 'Consultation booking',
      collect: 'Name, email, phone, company, preferred date and time, and notes',
      purpose: 'To schedule and hold the consultation',
      shared: 'Microsoft (Outlook Bookings and email), Supabase',
    },
    {
      source: 'WhatsApp, phone and email',
      collect: 'Your number or address, name and what you tell us',
      purpose: 'To answer questions and give support',
      shared: 'Meta (WhatsApp), Microsoft (email)',
    },
    {
      source: 'NexusBot sign-up and plans',
      collect: 'Account name, email, company, plan and billing records',
      purpose: 'To create and run your account and bill your plan',
      shared: 'Supabase (NexusBot app), Stripe (card payments)',
    },
    {
      source: 'NexusBot channel connections (WhatsApp, Facebook Messenger, Instagram)',
      collect: 'When a business connects a channel through Facebook Login: the connecting person’s Facebook name and ID, the business’s Page, Instagram or WhatsApp account IDs and access tokens, and the messages, names and profile pictures of customers who message that business',
      purpose: 'To show and answer the business’s customer conversations in NexusBot, including AI-assisted replies',
      shared: 'Meta (WhatsApp, Messenger, Instagram), Supabase and Hostinger (NexusBot app and server), Anthropic (AI replies)',
    },
    {
      source: 'IT services we deliver',
      collect: 'Contact details of your staff, system access details and support tickets',
      purpose: 'To deliver, monitor and support the contracted services',
      shared: 'Pioneer Infotech group engineers, only where needed',
    },
    {
      source: 'Visits to our office',
      collect: 'Name, company and time of visit',
      purpose: 'Security of our premises',
      shared: 'Not shared',
    },
  ],
  rightsTitle: 'Your rights',
  rightsIntro:
    'Send your request to our Data Protection Officer. Each button opens an email with the right subject line; include enough detail for us to confirm who you are.',
  rightsCta: 'Email the DPO',
  rights: [
    {
      title: 'See your data',
      body: 'Ask for a copy of the personal data we hold about you and how we use it. We reply within 21 days.',
      subject: 'PDPA access request',
    },
    {
      title: 'Correct your data',
      body: 'Tell us what is wrong or out of date and we will fix it, or explain in writing why we can’t.',
      subject: 'PDPA correction request',
    },
    {
      title: 'Withdraw consent',
      body: 'Stop some or all of our use of your data, including marketing. We tell you first if this affects a service.',
      subject: 'PDPA withdrawal of consent',
    },
    {
      title: 'Move your data',
      body: 'Ask for your data in a commonly used format to give to another provider, where the law allows.',
      subject: 'PDPA data portability request',
    },
    {
      title: 'Delete your data',
      body: 'Ask us to delete your personal data, including data we received from Facebook, Instagram or WhatsApp through NexusBot. We confirm and complete it within 30 days, unless the law requires us to keep it.',
      subject: 'Data deletion request',
    },
  ],
  clauses: [
    {
      id: 'about',
      title: 'About this notice',
      body: [
        'This notice is issued by Nexus Aurora (M) Sdn Bhd (1659159-X), a member of the Pioneer Infotech group (“Nexus Aurora”, “we”, “us”). It explains how we process personal data under the Personal Data Protection Act 2010 of Malaysia, as amended by the Personal Data Protection (Amendment) Act 2024 (the “PDPA”).',
        'It covers personal data we receive through this website, enquiries, consultations, the IT services we deliver and NexusBot, including personal data held for us by service providers we engage. Terms such as “personal data” and “processing” have the meaning given in the PDPA.',
      ],
    },
    {
      id: 'collect',
      title: 'Personal data we collect',
      body: [
        'Depending on how you deal with us, we may collect:',
        [
          'Identity and contact details: name, job title, company, email address, phone number and correspondence address.',
          'Enquiry details: the services you are interested in, budget, timeline, project information and messages you send us.',
          'Account and billing records for NexusBot: account name, login email, plan and invoices.',
          'Service records: support tickets, system access details and logs needed to deliver contracted IT services.',
          'Visitor records when you come to our office.',
        ],
        'We do not ask for identity card (MyKad) numbers or bank details through this website. Card payments for NexusBot are handled by Stripe; we never see or store your full card details.',
      ],
    },
    {
      id: 'how',
      title: 'How we collect it',
      body: [
        'Mostly from you: when you fill in a form, book a consultation, message us on WhatsApp, call or email us, sign up for NexusBot, sign a contract with us or visit our office. We may also receive your details from your employer or a colleague who engages us on your company’s behalf.',
      ],
    },
    {
      id: 'use',
      title: 'Why we use it',
      body: [
        'We use personal data to:',
        [
          'reply to enquiries and prepare quotes and proposals;',
          'schedule and hold consultations;',
          'deliver, monitor and support the services you have contracted;',
          'create, run and bill NexusBot accounts;',
          'verify your identity when you make a request;',
          'keep records needed for security, audits and our ISO/IEC 27001 obligations;',
          'meet legal and regulatory requirements; and',
          'send you service updates and, only if you agree, news about our services. You can opt out at any time.',
        ],
        'We process personal data with your consent, or where the PDPA allows us to without consent, for example to perform a contract with you or to comply with the law.',
      ],
    },
    {
      id: 'share',
      title: 'Who we share it with',
      body: [
        'We share personal data only where needed for the purposes above, with:',
        [
          'Pioneer Infotech group companies in Singapore that help us deliver services;',
          'service providers that host or process data for us: Supabase (form storage, email delivery and the NexusBot app), Hostinger (NexusBot server hosting), Anthropic (AI-assisted replies in NexusBot), Microsoft (email and Outlook Bookings), Meta (WhatsApp, Facebook Messenger and Instagram), Stripe (payments), Netlify (website hosting) and Google (web fonts);',
          'our professional advisers, such as auditors and lawyers; and',
          'government agencies, regulators or courts where the law requires it.',
        ],
        'We do not sell or rent personal data. Service providers may use it only to provide their service to us.',
      ],
    },
    {
      id: 'transfers',
      title: 'Transfers outside Malaysia',
      body: [
        'Some of the parties in clause 5 store or process data outside Malaysia, including in Singapore and in the regions where our cloud providers operate. When we transfer personal data abroad, we make sure it receives protection comparable to the PDPA, through contractual safeguards or because the destination has comparable data protection law, as section 129 of the PDPA requires.',
      ],
    },
    {
      id: 'consent',
      title: 'Withdrawing your consent',
      body: [
        'Your consent stays in place until you withdraw it. To withdraw it for some or all purposes, write to our Data Protection Officer (clause 15) with enough information for us to confirm your identity and understand what you want to stop.',
        'We aim to act on your request within 21 days. If withdrawing consent means we can no longer provide a service to you, we will tell you before we complete the request. Withdrawal does not affect processing that the law allows without consent.',
      ],
    },
    {
      id: 'access',
      title: 'Access, correction and data portability',
      body: [
        'You may ask for a copy of the personal data we hold about you, ask us to correct it, or ask us to transmit it to another data controller in a commonly used format. Send your request in writing to our Data Protection Officer (clause 15).',
        'We reply to access and correction requests within 21 days. If we cannot, we will tell you in writing, with our reasons, within that time. The PDPA allows a fee for some access requests; if one applies, we will tell you before we proceed.',
      ],
    },
    {
      id: 'security',
      title: 'How we protect it',
      body: [
        'We protect personal data with administrative, physical and technical measures under our ISO/IEC 27001:2022 certified information security management system, including encryption in transit, access limited to people who need it, and careful choice of service providers.',
        'No method of transmission or storage is completely secure, so we review and improve these measures continually. If a data breach is likely to cause significant harm, we will notify the Personal Data Protection Commissioner within 72 hours and tell the people affected without undue delay, as the PDPA requires.',
      ],
    },
    {
      id: 'accuracy',
      title: 'Accuracy',
      body: [
        'We rely on the personal data you give us. Please tell us when your details change so our records stay accurate and complete.',
      ],
    },
    {
      id: 'retention',
      title: 'How long we keep it',
      body: [
        'We keep personal data only for as long as we need it for the purpose it was collected for, or as long as the law requires. After that we delete it or remove anything that identifies you.',
        'Data deletion: to have your data deleted, email our Data Protection Officer (clause 15) with the subject “Data deletion request”. A business can also disconnect a WhatsApp, Messenger or Instagram channel in NexusBot (Settings → Channels → Disconnect), which deletes that channel’s access tokens straight away, or close its NexusBot account, after which we delete its data, including data received from Meta, within 30 days. You can also remove NexusBot’s access at any time in your Facebook settings under Business Integrations.',
      ],
    },
    {
      id: 'cookies',
      title: 'Cookies and third-party services',
      body: [
        'This website does not use analytics or advertising cookies. It loads fonts from Google, which receives your IP address to deliver them.',
        'Links to WhatsApp, Outlook Bookings and Stripe take you to services with their own privacy policies.',
      ],
    },
    {
      id: 'clients',
      title: 'When we handle data for our clients',
      body: [
        'When we provide managed IT services or run NexusBot for a business, we may process personal data of that business’s staff and customers. In those cases we act as a data processor on our client’s instructions and under our contract with them. Questions about that data should go to the business concerned first.',
      ],
    },
    {
      id: 'children',
      title: 'Children',
      body: [
        'Our services are for businesses and are not directed at children under 18. We do not knowingly collect their personal data.',
      ],
    },
    {
      id: 'contact',
      title: 'Data Protection Officer and complaints',
      body: [
        'For questions about this notice or to make any request above, contact our Data Protection Officer:',
      ],
    },
    {
      id: 'changes',
      title: 'Changes, governing law and language',
      body: [
        'We may update this notice from time to time. The date at the top shows when it last changed, and changes take effect when posted on this page.',
        'This notice is governed by the laws of Malaysia. It is available in English and Bahasa Malaysia; if the two versions differ, the English version prevails.',
      ],
    },
  ],
  contact: {
    role: 'Data Protection Officer',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    addressLabel: 'Address',
    complaint:
      'If you are not satisfied with our response, you may complain to the Personal Data Protection Department (Jabatan Perlindungan Data Peribadi).',
    complaintLink: 'Visit pdp.gov.my',
  },
};

const ms: PrivacyContent = {
  eyebrow: 'Notis Perlindungan Data Peribadi',
  title: 'Dasar Privasi',
  subtitle:
    'Cara Nexus Aurora mengumpul, menggunakan dan melindungi data peribadi di bawah Akta Perlindungan Data Peribadi 2010 Malaysia, dan cara untuk bertanya kepada kami tentang data anda.',
  lastUpdatedLabel: 'Kemas kini terakhir',
  lastUpdated: '4 October 2026',
  languageLabel: 'Bahasa',
  tocLabel: 'Kandungan',
  jumpLabel: 'Pergi ke bahagian',
  glanceTitle: 'Ringkasan',
  glanceIntro: 'Data yang kami simpan bergantung pada cara anda berurusan dengan kami. Klausa 2 hingga 6 menerangkan setiap lajur dengan lengkap.',
  glanceHeaders: ['Sumber', 'Data yang dikumpul', 'Tujuan', 'Dikongsi dengan'],
  glance: [
    {
      source: 'Borang hubungi dan sebut harga',
      collect: 'Nama, e-mel, telefon, syarikat, perkhidmatan yang diminati, bajet, tempoh masa dan mesej anda',
      purpose: 'Untuk membalas anda dan menyediakan cadangan atau sebut harga',
      shared: 'Supabase (penyimpanan borang dan penghantaran e-mel)',
    },
    {
      source: 'Tempahan konsultasi',
      collect: 'Nama, e-mel, telefon, syarikat, tarikh dan masa pilihan, dan catatan',
      purpose: 'Untuk menjadualkan dan mengadakan konsultasi',
      shared: 'Microsoft (Outlook Bookings dan e-mel), Supabase',
    },
    {
      source: 'WhatsApp, telefon dan e-mel',
      collect: 'Nombor atau alamat anda, nama dan maklumat yang anda berikan',
      purpose: 'Untuk menjawab pertanyaan dan memberi sokongan',
      shared: 'Meta (WhatsApp), Microsoft (e-mel)',
    },
    {
      source: 'Pendaftaran dan pelan NexusBot',
      collect: 'Nama akaun, e-mel, syarikat, pelan dan rekod bil',
      purpose: 'Untuk membuka dan mengendalikan akaun anda serta mengebil pelan anda',
      shared: 'Supabase (aplikasi NexusBot), Stripe (bayaran kad)',
    },
    {
      source: 'Sambungan saluran NexusBot (WhatsApp, Facebook Messenger, Instagram)',
      collect: 'Apabila sesebuah perniagaan menyambungkan saluran melalui Log Masuk Facebook: nama dan ID Facebook orang yang menyambung, ID akaun Page, Instagram atau WhatsApp perniagaan serta token aksesnya, dan mesej, nama serta gambar profil pelanggan yang menghantar mesej kepada perniagaan tersebut',
      purpose: 'Untuk memaparkan dan menjawab perbualan pelanggan perniagaan di NexusBot, termasuk balasan berbantukan AI',
      shared: 'Meta (WhatsApp, Messenger, Instagram), Supabase dan Hostinger (aplikasi dan pelayan NexusBot), Anthropic (balasan AI)',
    },
    {
      source: 'Perkhidmatan IT yang kami sediakan',
      collect: 'Butiran hubungan kakitangan anda, butiran akses sistem dan tiket sokongan',
      purpose: 'Untuk menyedia, memantau dan menyokong perkhidmatan yang dikontrakkan',
      shared: 'Jurutera kumpulan Pioneer Infotech, hanya jika perlu',
    },
    {
      source: 'Lawatan ke pejabat kami',
      collect: 'Nama, syarikat dan masa lawatan',
      purpose: 'Keselamatan premis kami',
      shared: 'Tidak dikongsi',
    },
  ],
  rightsTitle: 'Hak anda',
  rightsIntro:
    'Hantar permintaan anda kepada Pegawai Perlindungan Data kami. Setiap butang membuka e-mel dengan tajuk yang betul; sertakan butiran yang mencukupi untuk kami mengesahkan identiti anda.',
  rightsCta: 'E-mel Pegawai Perlindungan Data',
  rights: [
    {
      title: 'Lihat data anda',
      body: 'Minta salinan data peribadi yang kami simpan tentang anda dan cara kami menggunakannya. Kami membalas dalam tempoh 21 hari.',
      subject: 'Permintaan akses PDPA',
    },
    {
      title: 'Betulkan data anda',
      body: 'Beritahu kami apa yang salah atau tidak terkini dan kami akan membetulkannya, atau menerangkan secara bertulis mengapa kami tidak dapat berbuat demikian.',
      subject: 'Permintaan pembetulan PDPA',
    },
    {
      title: 'Tarik balik persetujuan',
      body: 'Hentikan sebahagian atau semua penggunaan data anda oleh kami, termasuk pemasaran. Kami akan memaklumkan anda terlebih dahulu jika ini menjejaskan sesuatu perkhidmatan.',
      subject: 'Penarikan balik persetujuan PDPA',
    },
    {
      title: 'Pindahkan data anda',
      body: 'Minta data anda dalam format yang biasa digunakan untuk diberikan kepada pembekal lain, setakat yang dibenarkan oleh undang-undang.',
      subject: 'Permintaan kemudahalihan data PDPA',
    },
    {
      title: 'Padam data anda',
      body: 'Minta kami memadamkan data peribadi anda, termasuk data yang kami terima daripada Facebook, Instagram atau WhatsApp melalui NexusBot. Kami mengesahkan dan menyelesaikannya dalam tempoh 30 hari, melainkan undang-undang menghendaki kami menyimpannya.',
      subject: 'Permintaan pemadaman data',
    },
  ],
  clauses: [
    {
      id: 'about',
      title: 'Tentang notis ini',
      body: [
        'Notis ini dikeluarkan oleh Nexus Aurora (M) Sdn Bhd (1659159-X), ahli kumpulan Pioneer Infotech (“Nexus Aurora”, “kami”). Notis ini menerangkan cara kami memproses data peribadi di bawah Akta Perlindungan Data Peribadi 2010 Malaysia, sebagaimana dipinda oleh Akta Perlindungan Data Peribadi (Pindaan) 2024 (“PDPA”).',
        'Notis ini meliputi data peribadi yang kami terima melalui laman web ini, pertanyaan, konsultasi, perkhidmatan IT yang kami sediakan dan NexusBot, termasuk data peribadi yang disimpan bagi pihak kami oleh pembekal perkhidmatan yang kami lantik. Istilah seperti “data peribadi” dan “pemprosesan” mempunyai maksud yang diberikan dalam PDPA.',
      ],
    },
    {
      id: 'collect',
      title: 'Data peribadi yang kami kumpul',
      body: [
        'Bergantung pada cara anda berurusan dengan kami, kami mungkin mengumpul:',
        [
          'Butiran identiti dan hubungan: nama, jawatan, syarikat, alamat e-mel, nombor telefon dan alamat surat-menyurat.',
          'Butiran pertanyaan: perkhidmatan yang anda minati, bajet, tempoh masa, maklumat projek dan mesej yang anda hantar kepada kami.',
          'Rekod akaun dan bil NexusBot: nama akaun, e-mel log masuk, pelan dan invois.',
          'Rekod perkhidmatan: tiket sokongan, butiran akses sistem dan log yang diperlukan untuk menyediakan perkhidmatan IT yang dikontrakkan.',
          'Rekod pelawat apabila anda datang ke pejabat kami.',
        ],
        'Kami tidak meminta nombor kad pengenalan (MyKad) atau butiran bank melalui laman web ini. Bayaran kad untuk NexusBot dikendalikan oleh Stripe; kami tidak pernah melihat atau menyimpan butiran penuh kad anda.',
      ],
    },
    {
      id: 'how',
      title: 'Cara kami mengumpulnya',
      body: [
        'Kebanyakannya daripada anda sendiri: apabila anda mengisi borang, menempah konsultasi, menghantar mesej WhatsApp, menelefon atau menghantar e-mel kepada kami, mendaftar untuk NexusBot, menandatangani kontrak dengan kami atau melawat pejabat kami. Kami juga mungkin menerima butiran anda daripada majikan atau rakan sekerja anda yang melantik kami bagi pihak syarikat anda.',
      ],
    },
    {
      id: 'use',
      title: 'Tujuan kami menggunakannya',
      body: [
        'Kami menggunakan data peribadi untuk:',
        [
          'membalas pertanyaan dan menyediakan sebut harga serta cadangan;',
          'menjadualkan dan mengadakan konsultasi;',
          'menyedia, memantau dan menyokong perkhidmatan yang anda kontrakkan;',
          'membuka, mengendalikan dan mengebil akaun NexusBot;',
          'mengesahkan identiti anda apabila anda membuat permintaan;',
          'menyimpan rekod yang diperlukan untuk keselamatan, audit dan kewajipan ISO/IEC 27001 kami;',
          'mematuhi keperluan undang-undang dan peraturan; dan',
          'menghantar kemas kini perkhidmatan dan, hanya jika anda bersetuju, berita tentang perkhidmatan kami. Anda boleh menarik diri pada bila-bila masa.',
        ],
        'Kami memproses data peribadi dengan persetujuan anda, atau apabila PDPA membenarkan kami berbuat demikian tanpa persetujuan, contohnya untuk melaksanakan kontrak dengan anda atau untuk mematuhi undang-undang.',
      ],
    },
    {
      id: 'share',
      title: 'Pihak yang kami kongsikan data',
      body: [
        'Kami berkongsi data peribadi hanya apabila perlu untuk tujuan di atas, dengan:',
        [
          'syarikat kumpulan Pioneer Infotech di Singapura yang membantu kami menyediakan perkhidmatan;',
          'pembekal perkhidmatan yang menyimpan atau memproses data untuk kami: Supabase (penyimpanan borang, penghantaran e-mel dan aplikasi NexusBot), Hostinger (pengehosan pelayan NexusBot), Anthropic (balasan berbantukan AI dalam NexusBot), Microsoft (e-mel dan Outlook Bookings), Meta (WhatsApp, Facebook Messenger dan Instagram), Stripe (bayaran), Netlify (pengehosan laman web) dan Google (fon web);',
          'penasihat profesional kami, seperti juruaudit dan peguam; dan',
          'agensi kerajaan, pengawal selia atau mahkamah apabila dikehendaki oleh undang-undang.',
        ],
        'Kami tidak menjual atau menyewakan data peribadi. Pembekal perkhidmatan hanya boleh menggunakannya untuk menyediakan perkhidmatan mereka kepada kami.',
      ],
    },
    {
      id: 'transfers',
      title: 'Pemindahan ke luar Malaysia',
      body: [
        'Sesetengah pihak dalam klausa 5 menyimpan atau memproses data di luar Malaysia, termasuk di Singapura dan di rantau tempat pembekal awan kami beroperasi. Apabila kami memindahkan data peribadi ke luar negara, kami memastikan data itu menerima perlindungan yang setara dengan PDPA, melalui perlindungan kontrak atau kerana negara destinasi mempunyai undang-undang perlindungan data yang setara, sebagaimana dikehendaki oleh seksyen 129 PDPA.',
      ],
    },
    {
      id: 'consent',
      title: 'Menarik balik persetujuan anda',
      body: [
        'Persetujuan anda kekal sehingga anda menarik baliknya. Untuk menarik balik persetujuan bagi sebahagian atau semua tujuan, tulis kepada Pegawai Perlindungan Data kami (klausa 15) dengan maklumat yang mencukupi untuk kami mengesahkan identiti anda dan memahami apa yang anda mahu hentikan.',
        'Kami berusaha untuk bertindak atas permintaan anda dalam tempoh 21 hari. Jika penarikan balik persetujuan bermakna kami tidak lagi dapat menyediakan sesuatu perkhidmatan kepada anda, kami akan memaklumkan anda sebelum melengkapkan permintaan itu. Penarikan balik tidak menjejaskan pemprosesan yang dibenarkan oleh undang-undang tanpa persetujuan.',
      ],
    },
    {
      id: 'access',
      title: 'Akses, pembetulan dan kemudahalihan data',
      body: [
        'Anda boleh meminta salinan data peribadi yang kami simpan tentang anda, meminta kami membetulkannya, atau meminta kami menghantarnya kepada pengawal data lain dalam format yang biasa digunakan. Hantar permintaan anda secara bertulis kepada Pegawai Perlindungan Data kami (klausa 15).',
        'Kami membalas permintaan akses dan pembetulan dalam tempoh 21 hari. Jika kami tidak dapat berbuat demikian, kami akan memaklumkan anda secara bertulis, berserta sebabnya, dalam tempoh tersebut. PDPA membenarkan fi dikenakan bagi sesetengah permintaan akses; jika fi dikenakan, kami akan memaklumkan anda sebelum meneruskannya.',
      ],
    },
    {
      id: 'security',
      title: 'Cara kami melindunginya',
      body: [
        'Kami melindungi data peribadi dengan langkah pentadbiran, fizikal dan teknikal di bawah sistem pengurusan keselamatan maklumat kami yang diperakui ISO/IEC 27001:2022, termasuk penyulitan semasa penghantaran, akses terhad kepada mereka yang memerlukannya, dan pemilihan pembekal perkhidmatan dengan teliti.',
        'Tiada kaedah penghantaran atau penyimpanan yang selamat sepenuhnya, jadi kami sentiasa menyemak dan menambah baik langkah-langkah ini. Jika pelanggaran data berkemungkinan menyebabkan kemudaratan yang ketara, kami akan memaklumkan Pesuruhjaya Perlindungan Data Peribadi dalam tempoh 72 jam dan memaklumkan individu yang terjejas tanpa kelewatan yang tidak wajar, sebagaimana dikehendaki oleh PDPA.',
      ],
    },
    {
      id: 'accuracy',
      title: 'Ketepatan',
      body: [
        'Kami bergantung pada data peribadi yang anda berikan. Sila maklumkan kami apabila butiran anda berubah supaya rekod kami kekal tepat dan lengkap.',
      ],
    },
    {
      id: 'retention',
      title: 'Tempoh penyimpanan',
      body: [
        'Kami menyimpan data peribadi hanya selama yang diperlukan untuk tujuan ia dikumpul, atau selama yang dikehendaki oleh undang-undang. Selepas itu, kami memadamkannya atau membuang apa-apa yang boleh mengenal pasti anda.',
        'Pemadaman data: untuk meminta data anda dipadamkan, e-mel Pegawai Perlindungan Data kami (klausa 15) dengan tajuk “Permintaan pemadaman data”. Perniagaan juga boleh memutuskan sambungan saluran WhatsApp, Messenger atau Instagram dalam NexusBot (Tetapan → Saluran → Putuskan sambungan), yang memadamkan token akses saluran tersebut dengan serta-merta, atau menutup akaun NexusBotnya, dan selepas itu kami memadamkan datanya, termasuk data yang diterima daripada Meta, dalam tempoh 30 hari. Anda juga boleh membuang akses NexusBot pada bila-bila masa dalam tetapan Facebook anda di bawah Integrasi Perniagaan.',
      ],
    },
    {
      id: 'cookies',
      title: 'Kuki dan perkhidmatan pihak ketiga',
      body: [
        'Laman web ini tidak menggunakan kuki analitik atau pengiklanan. Laman ini memuatkan fon daripada Google, yang menerima alamat IP anda untuk menghantarnya.',
        'Pautan ke WhatsApp, Outlook Bookings dan Stripe membawa anda ke perkhidmatan yang mempunyai dasar privasi mereka sendiri.',
      ],
    },
    {
      id: 'clients',
      title: 'Apabila kami mengendalikan data bagi pihak pelanggan',
      body: [
        'Apabila kami menyediakan perkhidmatan IT terurus atau mengendalikan NexusBot untuk sesebuah perniagaan, kami mungkin memproses data peribadi kakitangan dan pelanggan perniagaan tersebut. Dalam keadaan itu, kami bertindak sebagai pemproses data atas arahan pelanggan kami dan di bawah kontrak kami dengan mereka. Pertanyaan tentang data tersebut hendaklah diajukan kepada perniagaan berkenaan terlebih dahulu.',
      ],
    },
    {
      id: 'children',
      title: 'Kanak-kanak',
      body: [
        'Perkhidmatan kami adalah untuk perniagaan dan tidak ditujukan kepada kanak-kanak di bawah umur 18 tahun. Kami tidak mengumpul data peribadi mereka dengan sengaja.',
      ],
    },
    {
      id: 'contact',
      title: 'Pegawai Perlindungan Data dan aduan',
      body: [
        'Untuk pertanyaan tentang notis ini atau untuk membuat mana-mana permintaan di atas, hubungi Pegawai Perlindungan Data kami:',
      ],
    },
    {
      id: 'changes',
      title: 'Perubahan, undang-undang dan bahasa',
      body: [
        'Kami mungkin mengemas kini notis ini dari semasa ke semasa. Tarikh di bahagian atas menunjukkan bila ia terakhir diubah, dan perubahan berkuat kuasa apabila disiarkan di halaman ini.',
        'Notis ini ditadbir oleh undang-undang Malaysia. Notis ini tersedia dalam Bahasa Inggeris dan Bahasa Malaysia; jika terdapat perbezaan antara kedua-dua versi, versi Bahasa Inggeris akan diguna pakai.',
      ],
    },
  ],
  contact: {
    role: 'Pegawai Perlindungan Data',
    emailLabel: 'E-mel',
    phoneLabel: 'Telefon',
    addressLabel: 'Alamat',
    complaint:
      'Jika anda tidak berpuas hati dengan maklum balas kami, anda boleh membuat aduan kepada Jabatan Perlindungan Data Peribadi.',
    complaintLink: 'Layari pdp.gov.my',
  },
};

export const privacyContent: Record<Lang, PrivacyContent> = { en, ms };
