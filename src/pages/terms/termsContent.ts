// Content for /terms-of-service in English and Bahasa Malaysia.
// Both objects share one shape so every clause and row stays aligned across languages.
// If the two versions ever differ, clause 25 says the English version prevails.
import type { Clause, Lang } from '../../components/legal/legal';

/** A clause reference: a single clause id, or a [from, to] range of ids. */
export type ClauseRef = string | [string, string];

export interface AppliesRow {
  who: string;
  covers: string;
  clauses: ClauseRef[];
}

export interface TermsContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  lastUpdatedLabel: string;
  lastUpdated: string;
  languageLabel: string;
  tocLabel: string;
  jumpLabel: string;
  appliesTitle: string;
  appliesIntro: string;
  appliesHeaders: [string, string, string];
  applies: AppliesRow[];
  clauseLabel: string;
  privacyLink: string;
  clauses: Clause[];
  contact: {
    role: string;
    emailLabel: string;
    phoneLabel: string;
    addressLabel: string;
  };
}

export const TERMS_LAST_UPDATED_ISO = '2026-09-29';

const en: TermsContent = {
  eyebrow: 'Terms and conditions',
  title: 'Terms of Service',
  subtitle:
    'The terms for using this website and for the IT services and NexusBot subscriptions provided by Nexus Aurora. Your signed agreement or quotation adds the details of your own service.',
  lastUpdatedLabel: 'Last updated',
  lastUpdated: '29 September 2026',
  languageLabel: 'Language',
  tocLabel: 'On this page',
  jumpLabel: 'Jump to a section',
  appliesTitle: 'Which terms apply to you',
  appliesIntro: 'Everyone is bound by the general clauses. The rest depend on the service you use; select a clause number to jump to it.',
  appliesHeaders: ['If you are', 'What it covers', 'Clauses'],
  applies: [
    {
      who: 'Anyone using this website or our services',
      covers: 'Quotes, fees, your responsibilities, confidentiality, liability, ending a service and the law that applies',
      clauses: [['about', 'responsibilities'], ['confidentiality', 'law']],
    },
    {
      who: 'A project client (web, mobile, consultancy, cabling)',
      covers: 'Delivery, scope changes, acceptance, warranties on workmanship and who owns what we build',
      clauses: ['delivery', 'projects', 'ip'],
    },
    {
      who: 'A managed IT or cybersecurity client',
      covers: 'Service levels, maintenance windows and authorisation for security testing',
      clauses: ['delivery', 'managed', 'security-testing'],
    },
    {
      who: 'A cloud hosting or email client',
      covers: 'Acceptable use, suspension for abuse and domain names',
      clauses: ['delivery', 'hosting'],
    },
    {
      who: 'A NexusBot subscriber',
      covers: 'Trial, billing, renewal, cancellation, WhatsApp policies and AI replies',
      clauses: ['nexusbot-billing', 'nexusbot-use'],
    },
  ],
  clauseLabel: 'Clause',
  privacyLink: 'Read the Privacy Policy',
  clauses: [
    {
      id: 'about',
      title: 'About these terms',
      body: [
        'These terms are between you and Nexus Aurora (M) Sdn Bhd (1659159-X), a member of the Pioneer Infotech group (“Nexus Aurora”, “we”, “us”). They apply when you use this website and when we provide any service to you.',
        'Most services also have a signed agreement, quotation or statement of work that sets out the scope, price and service levels. If that document conflicts with these terms, that document prevails.',
      ],
    },
    {
      id: 'website',
      title: 'Using this website',
      body: [
        'Information on this website is general and may change without notice. It is not an offer to supply a service; prices and scope are confirmed in a quotation or order.',
        'Links to other websites are provided for convenience. We are not responsible for their content or their privacy practices.',
      ],
    },
    {
      id: 'quotes',
      title: 'Quotes and orders',
      body: [
        'A quotation is valid for the period stated on it. An order is formed when you accept a quotation in writing, which includes by email or electronic acceptance, and any deposit the quotation requires has been paid.',
      ],
    },
    {
      id: 'fees',
      title: 'Fees, invoices and SST',
      body: [
        [
          'Fees are in Malaysian Ringgit (RM). Unless stated otherwise, prices exclude Sales and Service Tax (SST), which we charge where it applies.',
          'Invoices are payable within the period stated on the invoice or in your agreement.',
          'If an amount is overdue, we may suspend the related service after giving you written notice, and late payment charges may apply as stated in your agreement.',
          'Fees paid for work already performed are not refundable unless your agreement says otherwise. NexusBot fees follow clause 12.',
        ],
      ],
    },
    {
      id: 'responsibilities',
      title: 'Your responsibilities',
      body: [
        'You agree to:',
        [
          'give us accurate information and tell us when it changes;',
          'provide timely access, decisions and approvals that we need to do the work;',
          'keep passwords and access details for our services secure, and tell us promptly if they may have been compromised;',
          'hold valid licences for any software or content you ask us to install or use; and',
          'keep your own backups of your data, unless backup is part of the service you have bought from us.',
        ],
        'Delays caused by missing information, access or approvals may affect timelines and fees.',
      ],
    },
    {
      id: 'delivery',
      title: 'Service delivery and third-party products',
      body: [
        'We provide services with reasonable skill and care, following the scope in your agreement. Timelines are estimates that depend on you providing what we need on time.',
        'We may carry out scheduled maintenance on services we host or manage, and will give reasonable notice where it could affect you.',
        'Third-party software, cloud services and hardware we supply or resell (for example Microsoft, VMware or network equipment) are subject to the vendor’s own licence terms and warranty. We pass those warranties on to you and help you make claims, but we do not give additional warranties for third-party products.',
      ],
    },
    {
      id: 'projects',
      title: 'Project work and acceptance',
      body: [
        'For project work such as websites, apps, consultancy and structured cabling, we deliver against the scope agreed in writing. You review each deliverable against that scope; reported defects that fall within scope are fixed at no extra cost.',
        'Requests outside the agreed scope are treated as change requests and quoted separately before we do the work.',
        'Workmanship on cabling and installation work is warranted for the period stated in your agreement. The warranty does not cover damage from misuse, alterations by others or events outside our control.',
      ],
    },
    {
      id: 'managed',
      title: 'Managed IT services and service levels',
      body: [
        'Service levels, response times and uptime commitments for managed IT, monitoring and support services are those set out in your managed services agreement. If we miss a service level, your remedies are those set out in that agreement.',
      ],
    },
    {
      id: 'security-testing',
      title: 'Security testing',
      body: [
        'We carry out penetration tests, vulnerability scans and security audits only within a written scope signed by you. By signing it you confirm that you own, or are authorised to have us test, every system in scope.',
        'Testing can occasionally slow down or interrupt systems. We agree testing windows with you to reduce this, and we are not liable for disruption that stays within the agreed scope and method.',
      ],
    },
    {
      id: 'hosting',
      title: 'Hosting, email and acceptable use',
      body: [
        'When you use our hosting, email or cloud services, you must not use them to:',
        [
          'store or send anything unlawful, including under the Communications and Multimedia Act 1998;',
          'send spam or phishing messages, or distribute malware;',
          'infringe anyone’s intellectual property or privacy; or',
          'attack, probe or overload other systems or networks.',
        ],
        'We may suspend affected content or accounts to stop a breach or protect other customers, and will tell you why. Domain names we register for you are registered in your name where the registry allows.',
      ],
    },
    {
      id: 'ip',
      title: 'Intellectual property',
      body: [
        [
          'Once you have paid in full, you own the custom deliverables we create specifically for you, such as designs, content and source code, unless your agreement says otherwise.',
          'We keep ownership of our pre-existing tools, methods, templates and reusable components. Where these are part of your deliverables, you receive a non-exclusive, perpetual licence to use them as part of those deliverables.',
          'Third-party and open-source components remain under their own licences.',
          'We will only name you as a client or publish a case study about your project with your consent.',
        ],
      ],
    },
    {
      id: 'nexusbot-billing',
      title: 'NexusBot plans, billing and cancellation',
      body: [
        [
          'The Trial plan is free for 7 days and does not need a card.',
          'Paid plans are billed in advance, monthly or annually, through our payment provider Stripe. They renew automatically at the end of each billing period until you cancel.',
          'You can upgrade or downgrade at any time; changes apply from your next billing cycle.',
          'Usage above your plan’s limits is charged at the overage rate shown in your account.',
          'WhatsApp conversation fees charged by Meta are billed to you separately, at cost.',
          'Our optional done-for-you setup service is a one-off fee of RM2,000. Self-serve setup is free on every plan.',
          'You can cancel at any time from your account. Your plan stays active until the end of the period you have paid for and then stops. Fees already paid, including for partial months and unused time on annual plans, are not refunded.',
          'Enterprise plans are governed by their own agreement.',
        ],
        'We will tell you in advance before changing the price of your plan; the new price applies from your next renewal.',
      ],
    },
    {
      id: 'nexusbot-use',
      title: 'Using NexusBot and AI replies',
      body: [
        [
          'You must follow the WhatsApp Business terms and Meta’s messaging and commerce policies, and get your customers’ opt-in before messaging them.',
          'You are responsible for the messages you send and for the automations, flows and information you set up in NexusBot.',
          'NexusBot uses AI to draft and send replies. AI replies can be inaccurate, so review your settings and conversations regularly, and do not rely on AI replies for legal, medical, financial or other professional advice.',
          'We may suspend an account whose use puts a WhatsApp number, our platform or other customers at risk, and will tell you why.',
          'For the personal data of your customers, you are the data controller and we act as your data processor (see clause 13 of our Privacy Policy).',
        ],
      ],
    },
    {
      id: 'confidentiality',
      title: 'Confidentiality',
      body: [
        'Each of us will keep the other’s confidential business information private, use it only to perform or receive the services, and share it only with staff, group companies and advisers who need it and are bound by confidentiality. This continues after the services end. We can sign a separate non-disclosure agreement on request.',
      ],
    },
    {
      id: 'data-protection',
      title: 'Data protection',
      body: [
        'We handle personal data in line with the Personal Data Protection Act 2010 and our Privacy Policy, which explains what we collect, why, who we share it with and your rights.',
      ],
    },
    {
      id: 'warranties',
      title: 'Warranties and disclaimers',
      body: [
        'We warrant that we will perform services with reasonable skill and care and as described in your agreement. Apart from that, and to the extent the law allows, we give no other warranties, and we do not guarantee that any service will be uninterrupted or error-free.',
      ],
    },
    {
      id: 'liability',
      title: 'Limitation of liability',
      body: [
        [
          'We are not liable for indirect or consequential loss, or for loss of profit, revenue, business or data.',
          'Our total liability for any claim relating to a service is limited to the fees you paid for that service in the 12 months before the claim arose.',
          'Nothing in these terms limits liability that cannot be limited under Malaysian law.',
        ],
      ],
    },
    {
      id: 'indemnity',
      title: 'Your indemnity',
      body: [
        'You agree to compensate us for claims, losses and reasonable costs we incur because of content or instructions you provide, or your breach of clause 10 or clause 13.',
      ],
    },
    {
      id: 'termination',
      title: 'Suspension and termination',
      body: [
        [
          'Either of us may end a service as set out in its agreement.',
          'Either of us may end a service immediately by written notice if the other commits a material breach and does not fix it within a reasonable time after being asked to.',
          'When a service ends, you pay for work done and fees due up to the end date, and each of us returns or destroys the other’s confidential information on request, except copies we must keep by law.',
        ],
      ],
    },
    {
      id: 'force-majeure',
      title: 'Events outside our control',
      body: [
        'Neither of us is liable for delay or failure caused by events beyond reasonable control, such as natural disasters, floods, pandemics, government action, power or telecommunications failures, outages at upstream providers, or cyberattacks despite reasonable safeguards.',
      ],
    },
    {
      id: 'business-use',
      title: 'Business use',
      body: [
        'Our services are supplied for business purposes. To the extent the law allows, the Consumer Protection Act 1999 does not apply to them.',
      ],
    },
    {
      id: 'notices',
      title: 'Notices and electronic communications',
      body: [
        'Notices under these terms must be in writing. We send them to the contact details you have given us; send yours to sales@nexus-aurora.com or our office address. Emails and electronic acceptance are valid and binding, as provided under the Electronic Commerce Act 2006.',
      ],
    },
    {
      id: 'general',
      title: 'General',
      body: [
        [
          'These terms and your agreement are the entire agreement between us for the service concerned.',
          'If any part of these terms is found unenforceable, the rest continues to apply.',
          'Not enforcing a right straight away does not mean we give it up.',
          'You may transfer your rights under these terms only with our written consent. We may transfer ours to another company in the Pioneer Infotech group.',
        ],
      ],
    },
    {
      id: 'changes',
      title: 'Changes to these terms',
      body: [
        'We may update these terms from time to time. The date at the top shows the latest version. Changes apply to new orders and renewals, and we will give NexusBot subscribers advance notice of significant changes.',
      ],
    },
    {
      id: 'law',
      title: 'Governing law, disputes, language and contact',
      body: [
        'These terms are governed by the laws of Malaysia. We will first try to resolve any dispute through good-faith discussion; if that fails, the courts of Malaysia have jurisdiction.',
        'These terms are available in English and Bahasa Malaysia. If the two versions differ, the English version prevails.',
      ],
    },
  ],
  contact: {
    role: 'Questions about these terms',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    addressLabel: 'Address',
  },
};

const ms: TermsContent = {
  eyebrow: 'Terma dan syarat',
  title: 'Terma Perkhidmatan',
  subtitle:
    'Terma untuk menggunakan laman web ini dan untuk perkhidmatan IT serta langganan NexusBot yang disediakan oleh Nexus Aurora. Perjanjian atau sebut harga yang anda tandatangani menambah butiran perkhidmatan anda sendiri.',
  lastUpdatedLabel: 'Kemas kini terakhir',
  lastUpdated: '29 September 2026',
  languageLabel: 'Bahasa',
  tocLabel: 'Kandungan',
  jumpLabel: 'Pergi ke bahagian',
  appliesTitle: 'Terma yang terpakai kepada anda',
  appliesIntro: 'Semua orang terikat dengan klausa am. Klausa lain bergantung pada perkhidmatan yang anda gunakan; pilih nombor klausa untuk pergi kepadanya.',
  appliesHeaders: ['Jika anda', 'Perkara yang diliputi', 'Klausa'],
  applies: [
    {
      who: 'Sesiapa yang menggunakan laman web atau perkhidmatan kami',
      covers: 'Sebut harga, fi, tanggungjawab anda, kerahsiaan, liabiliti, penamatan perkhidmatan dan undang-undang yang terpakai',
      clauses: [['about', 'responsibilities'], ['confidentiality', 'law']],
    },
    {
      who: 'Pelanggan projek (web, mudah alih, konsultasi, pendawaian)',
      covers: 'Penyerahan, perubahan skop, penerimaan, waranti mutu kerja dan pemilikan hasil kerja',
      clauses: ['delivery', 'projects', 'ip'],
    },
    {
      who: 'Pelanggan IT terurus atau keselamatan siber',
      covers: 'Tahap perkhidmatan, tempoh penyelenggaraan dan kebenaran untuk ujian keselamatan',
      clauses: ['delivery', 'managed', 'security-testing'],
    },
    {
      who: 'Pelanggan pengehosan awan atau e-mel',
      covers: 'Penggunaan yang dibenarkan, penggantungan kerana penyalahgunaan dan nama domain',
      clauses: ['delivery', 'hosting'],
    },
    {
      who: 'Pelanggan NexusBot',
      covers: 'Percubaan, bil, pembaharuan, pembatalan, dasar WhatsApp dan balasan AI',
      clauses: ['nexusbot-billing', 'nexusbot-use'],
    },
  ],
  clauseLabel: 'Klausa',
  privacyLink: 'Baca Dasar Privasi',
  clauses: [
    {
      id: 'about',
      title: 'Tentang terma ini',
      body: [
        'Terma ini adalah antara anda dan Nexus Aurora (M) Sdn Bhd (1659159-X), ahli kumpulan Pioneer Infotech (“Nexus Aurora”, “kami”). Terma ini terpakai apabila anda menggunakan laman web ini dan apabila kami menyediakan apa-apa perkhidmatan kepada anda.',
        'Kebanyakan perkhidmatan juga mempunyai perjanjian, sebut harga atau penyata kerja yang ditandatangani yang menetapkan skop, harga dan tahap perkhidmatan. Jika dokumen tersebut bercanggah dengan terma ini, dokumen tersebut akan diguna pakai.',
      ],
    },
    {
      id: 'website',
      title: 'Menggunakan laman web ini',
      body: [
        'Maklumat di laman web ini adalah umum dan boleh berubah tanpa notis. Ia bukan tawaran untuk membekalkan perkhidmatan; harga dan skop disahkan dalam sebut harga atau pesanan.',
        'Pautan ke laman web lain disediakan untuk kemudahan. Kami tidak bertanggungjawab ke atas kandungan atau amalan privasi laman web tersebut.',
      ],
    },
    {
      id: 'quotes',
      title: 'Sebut harga dan pesanan',
      body: [
        'Sesuatu sebut harga sah untuk tempoh yang dinyatakan padanya. Pesanan terbentuk apabila anda menerima sebut harga secara bertulis, termasuk melalui e-mel atau penerimaan elektronik, dan apa-apa deposit yang dikehendaki oleh sebut harga tersebut telah dibayar.',
      ],
    },
    {
      id: 'fees',
      title: 'Fi, invois dan SST',
      body: [
        [
          'Fi adalah dalam Ringgit Malaysia (RM). Melainkan dinyatakan sebaliknya, harga tidak termasuk Cukai Jualan dan Perkhidmatan (SST), yang kami kenakan apabila terpakai.',
          'Invois perlu dibayar dalam tempoh yang dinyatakan pada invois atau dalam perjanjian anda.',
          'Jika sesuatu amaun tertunggak, kami boleh menggantung perkhidmatan berkaitan selepas memberi notis bertulis kepada anda, dan caj bayaran lewat boleh dikenakan sebagaimana dinyatakan dalam perjanjian anda.',
          'Fi yang dibayar untuk kerja yang telah dilaksanakan tidak dikembalikan melainkan perjanjian anda menyatakan sebaliknya. Fi NexusBot tertakluk kepada klausa 12.',
        ],
      ],
    },
    {
      id: 'responsibilities',
      title: 'Tanggungjawab anda',
      body: [
        'Anda bersetuju untuk:',
        [
          'memberi kami maklumat yang tepat dan memaklumkan kami apabila ia berubah;',
          'menyediakan akses, keputusan dan kelulusan yang kami perlukan untuk melaksanakan kerja dalam masa yang ditetapkan;',
          'memastikan kata laluan dan butiran akses perkhidmatan kami selamat, dan segera memaklumkan kami jika ia mungkin telah terjejas;',
          'memegang lesen yang sah bagi apa-apa perisian atau kandungan yang anda minta kami pasang atau gunakan; dan',
          'menyimpan sandaran data anda sendiri, melainkan sandaran adalah sebahagian daripada perkhidmatan yang anda beli daripada kami.',
        ],
        'Kelewatan yang disebabkan oleh maklumat, akses atau kelulusan yang tidak diberikan boleh menjejaskan tempoh masa dan fi.',
      ],
    },
    {
      id: 'delivery',
      title: 'Penyampaian perkhidmatan dan produk pihak ketiga',
      body: [
        'Kami menyediakan perkhidmatan dengan kemahiran dan penjagaan yang munasabah, mengikut skop dalam perjanjian anda. Tempoh masa adalah anggaran yang bergantung pada anda menyediakan apa yang kami perlukan tepat pada masanya.',
        'Kami boleh menjalankan penyelenggaraan berjadual ke atas perkhidmatan yang kami hos atau urus, dan akan memberi notis yang munasabah jika ia boleh menjejaskan anda.',
        'Perisian, perkhidmatan awan dan perkakasan pihak ketiga yang kami bekalkan atau jual semula (contohnya Microsoft, VMware atau peralatan rangkaian) tertakluk kepada terma lesen dan waranti vendor sendiri. Kami menyalurkan waranti tersebut kepada anda dan membantu anda membuat tuntutan, tetapi kami tidak memberikan waranti tambahan bagi produk pihak ketiga.',
      ],
    },
    {
      id: 'projects',
      title: 'Kerja projek dan penerimaan',
      body: [
        'Bagi kerja projek seperti laman web, aplikasi, konsultasi dan pendawaian berstruktur, kami menyerahkan hasil kerja mengikut skop yang dipersetujui secara bertulis. Anda menyemak setiap hasil kerja berbanding skop tersebut; kecacatan yang dilaporkan dan berada dalam skop akan dibaiki tanpa kos tambahan.',
        'Permintaan di luar skop yang dipersetujui dianggap sebagai permintaan perubahan dan disebut harga secara berasingan sebelum kerja dilakukan.',
        'Mutu kerja bagi kerja pendawaian dan pemasangan diwarantikan untuk tempoh yang dinyatakan dalam perjanjian anda. Waranti tidak meliputi kerosakan akibat salah guna, pengubahsuaian oleh pihak lain atau kejadian di luar kawalan kami.',
      ],
    },
    {
      id: 'managed',
      title: 'Perkhidmatan IT terurus dan tahap perkhidmatan',
      body: [
        'Tahap perkhidmatan, masa respons dan komitmen masa operasi bagi perkhidmatan IT terurus, pemantauan dan sokongan adalah seperti yang ditetapkan dalam perjanjian perkhidmatan terurus anda. Jika kami gagal mencapai sesuatu tahap perkhidmatan, remedi anda adalah seperti yang ditetapkan dalam perjanjian tersebut.',
      ],
    },
    {
      id: 'security-testing',
      title: 'Ujian keselamatan',
      body: [
        'Kami menjalankan ujian penembusan, imbasan kerentanan dan audit keselamatan hanya dalam skop bertulis yang ditandatangani oleh anda. Dengan menandatanganinya, anda mengesahkan bahawa anda memiliki, atau diberi kuasa untuk membenarkan kami menguji, setiap sistem dalam skop.',
        'Ujian kadangkala boleh memperlahankan atau mengganggu sistem. Kami bersetuju dengan anda tentang tempoh ujian untuk mengurangkan perkara ini, dan kami tidak bertanggungjawab ke atas gangguan yang berlaku dalam skop dan kaedah yang dipersetujui.',
      ],
    },
    {
      id: 'hosting',
      title: 'Pengehosan, e-mel dan penggunaan yang dibenarkan',
      body: [
        'Apabila anda menggunakan perkhidmatan pengehosan, e-mel atau awan kami, anda tidak boleh menggunakannya untuk:',
        [
          'menyimpan atau menghantar apa-apa yang menyalahi undang-undang, termasuk di bawah Akta Komunikasi dan Multimedia 1998;',
          'menghantar spam atau mesej pancingan data, atau menyebarkan perisian hasad;',
          'melanggar harta intelek atau privasi mana-mana pihak; atau',
          'menyerang, menyiasat atau membebankan sistem atau rangkaian lain.',
        ],
        'Kami boleh menggantung kandungan atau akaun yang terlibat untuk menghentikan pelanggaran atau melindungi pelanggan lain, dan akan memaklumkan sebabnya kepada anda. Nama domain yang kami daftarkan untuk anda didaftarkan atas nama anda apabila dibenarkan oleh pendaftar.',
      ],
    },
    {
      id: 'ip',
      title: 'Harta intelek',
      body: [
        [
          'Setelah anda membuat bayaran penuh, anda memiliki hasil kerja khusus yang kami cipta untuk anda, seperti reka bentuk, kandungan dan kod sumber, melainkan perjanjian anda menyatakan sebaliknya.',
          'Kami mengekalkan pemilikan alat, kaedah, templat dan komponen boleh guna semula kami yang sedia ada. Jika perkara ini menjadi sebahagian daripada hasil kerja anda, anda menerima lesen bukan eksklusif dan kekal untuk menggunakannya sebagai sebahagian daripada hasil kerja tersebut.',
          'Komponen pihak ketiga dan sumber terbuka kekal di bawah lesen masing-masing.',
          'Kami hanya akan menamakan anda sebagai pelanggan atau menerbitkan kajian kes tentang projek anda dengan persetujuan anda.',
        ],
      ],
    },
    {
      id: 'nexusbot-billing',
      title: 'Pelan, bil dan pembatalan NexusBot',
      body: [
        [
          'Pelan Percubaan adalah percuma selama 7 hari dan tidak memerlukan kad.',
          'Pelan berbayar dibilkan terlebih dahulu, secara bulanan atau tahunan, melalui penyedia pembayaran kami, Stripe. Pelan diperbaharui secara automatik pada akhir setiap tempoh bil sehingga anda membatalkannya.',
          'Anda boleh menaik taraf atau menurunkan pelan pada bila-bila masa; perubahan terpakai mulai kitaran bil seterusnya.',
          'Penggunaan melebihi had pelan anda dikenakan caj pada kadar lebihan yang ditunjukkan dalam akaun anda.',
          'Fi perbualan WhatsApp yang dikenakan oleh Meta dibilkan kepada anda secara berasingan, pada harga kos.',
          'Perkhidmatan persediaan pilihan kami (dilakukan sepenuhnya oleh kami) dikenakan fi sekali sahaja sebanyak RM2,000. Persediaan kendiri adalah percuma untuk semua pelan.',
          'Anda boleh membatalkan pada bila-bila masa melalui akaun anda. Pelan anda kekal aktif sehingga akhir tempoh yang telah anda bayar dan kemudian berhenti. Fi yang telah dibayar, termasuk bagi bulan separa dan baki masa pada pelan tahunan, tidak dikembalikan.',
          'Pelan Enterprise ditadbir oleh perjanjiannya sendiri.',
        ],
        'Kami akan memaklumkan anda terlebih dahulu sebelum mengubah harga pelan anda; harga baharu terpakai mulai pembaharuan seterusnya.',
      ],
    },
    {
      id: 'nexusbot-use',
      title: 'Menggunakan NexusBot dan balasan AI',
      body: [
        [
          'Anda mesti mematuhi terma WhatsApp Business serta dasar pemesejan dan perdagangan Meta, dan mendapatkan persetujuan pelanggan anda sebelum menghantar mesej kepada mereka.',
          'Anda bertanggungjawab ke atas mesej yang anda hantar dan ke atas automasi, aliran dan maklumat yang anda tetapkan dalam NexusBot.',
          'NexusBot menggunakan AI untuk merangka dan menghantar balasan. Balasan AI boleh jadi tidak tepat, jadi semak tetapan dan perbualan anda dengan kerap, dan jangan bergantung pada balasan AI untuk nasihat undang-undang, perubatan, kewangan atau nasihat profesional lain.',
          'Kami boleh menggantung akaun yang penggunaannya membahayakan nombor WhatsApp, platform kami atau pelanggan lain, dan akan memaklumkan sebabnya kepada anda.',
          'Bagi data peribadi pelanggan anda, anda adalah pengawal data dan kami bertindak sebagai pemproses data anda (lihat klausa 13 Dasar Privasi kami).',
        ],
      ],
    },
    {
      id: 'confidentiality',
      title: 'Kerahsiaan',
      body: [
        'Setiap pihak akan merahsiakan maklumat perniagaan sulit pihak yang lain, menggunakannya hanya untuk melaksanakan atau menerima perkhidmatan, dan berkongsinya hanya dengan kakitangan, syarikat kumpulan dan penasihat yang memerlukannya dan terikat dengan kerahsiaan. Kewajipan ini berterusan selepas perkhidmatan tamat. Kami boleh menandatangani perjanjian tanpa pendedahan yang berasingan atas permintaan.',
      ],
    },
    {
      id: 'data-protection',
      title: 'Perlindungan data',
      body: [
        'Kami mengendalikan data peribadi selaras dengan Akta Perlindungan Data Peribadi 2010 dan Dasar Privasi kami, yang menerangkan data yang kami kumpul, sebabnya, pihak yang kami kongsikan dan hak anda.',
      ],
    },
    {
      id: 'warranties',
      title: 'Waranti dan penafian',
      body: [
        'Kami memberi waranti bahawa kami akan melaksanakan perkhidmatan dengan kemahiran dan penjagaan yang munasabah dan seperti yang diterangkan dalam perjanjian anda. Selain itu, dan setakat yang dibenarkan oleh undang-undang, kami tidak memberikan waranti lain, dan kami tidak menjamin bahawa mana-mana perkhidmatan akan berjalan tanpa gangguan atau ralat.',
      ],
    },
    {
      id: 'liability',
      title: 'Had liabiliti',
      body: [
        [
          'Kami tidak bertanggungjawab ke atas kerugian tidak langsung atau berbangkit, atau kehilangan keuntungan, hasil, perniagaan atau data.',
          'Jumlah liabiliti kami bagi apa-apa tuntutan berkaitan sesuatu perkhidmatan adalah terhad kepada fi yang anda bayar untuk perkhidmatan tersebut dalam tempoh 12 bulan sebelum tuntutan itu timbul.',
          'Tiada apa-apa dalam terma ini mengehadkan liabiliti yang tidak boleh dihadkan di bawah undang-undang Malaysia.',
        ],
      ],
    },
    {
      id: 'indemnity',
      title: 'Tanggung rugi oleh anda',
      body: [
        'Anda bersetuju untuk membayar pampasan kepada kami bagi tuntutan, kerugian dan kos munasabah yang kami tanggung akibat kandungan atau arahan yang anda berikan, atau pelanggaran anda terhadap klausa 10 atau klausa 13.',
      ],
    },
    {
      id: 'termination',
      title: 'Penggantungan dan penamatan',
      body: [
        [
          'Mana-mana pihak boleh menamatkan sesuatu perkhidmatan sebagaimana ditetapkan dalam perjanjiannya.',
          'Mana-mana pihak boleh menamatkan sesuatu perkhidmatan serta-merta melalui notis bertulis jika pihak yang lain melakukan pelanggaran material dan tidak membaikinya dalam tempoh yang munasabah selepas diminta.',
          'Apabila sesuatu perkhidmatan tamat, anda membayar kerja yang telah dilakukan dan fi yang perlu dibayar sehingga tarikh tamat, dan setiap pihak memulangkan atau memusnahkan maklumat sulit pihak yang lain atas permintaan, kecuali salinan yang perlu disimpan menurut undang-undang.',
        ],
      ],
    },
    {
      id: 'force-majeure',
      title: 'Kejadian di luar kawalan',
      body: [
        'Tiada pihak bertanggungjawab ke atas kelewatan atau kegagalan yang disebabkan oleh kejadian di luar kawalan munasabah, seperti bencana alam, banjir, pandemik, tindakan kerajaan, kegagalan bekalan elektrik atau telekomunikasi, gangguan pada pembekal hulu, atau serangan siber walaupun langkah perlindungan yang munasabah telah diambil.',
      ],
    },
    {
      id: 'business-use',
      title: 'Kegunaan perniagaan',
      body: [
        'Perkhidmatan kami dibekalkan untuk tujuan perniagaan. Setakat yang dibenarkan oleh undang-undang, Akta Pelindungan Pengguna 1999 tidak terpakai kepadanya.',
      ],
    },
    {
      id: 'notices',
      title: 'Notis dan komunikasi elektronik',
      body: [
        'Notis di bawah terma ini mestilah secara bertulis. Kami menghantarnya ke butiran hubungan yang anda berikan kepada kami; hantar notis anda ke sales@nexus-aurora.com atau alamat pejabat kami. E-mel dan penerimaan elektronik adalah sah dan mengikat, sebagaimana diperuntukkan di bawah Akta Perdagangan Elektronik 2006.',
      ],
    },
    {
      id: 'general',
      title: 'Am',
      body: [
        [
          'Terma ini dan perjanjian anda merupakan keseluruhan perjanjian antara kita bagi perkhidmatan berkenaan.',
          'Jika mana-mana bahagian terma ini didapati tidak boleh dikuatkuasakan, bahagian selebihnya terus terpakai.',
          'Tidak menguatkuasakan sesuatu hak dengan serta-merta tidak bermakna kami melepaskannya.',
          'Anda boleh memindahkan hak anda di bawah terma ini hanya dengan persetujuan bertulis kami. Kami boleh memindahkan hak kami kepada syarikat lain dalam kumpulan Pioneer Infotech.',
        ],
      ],
    },
    {
      id: 'changes',
      title: 'Perubahan kepada terma ini',
      body: [
        'Kami mungkin mengemas kini terma ini dari semasa ke semasa. Tarikh di bahagian atas menunjukkan versi terkini. Perubahan terpakai kepada pesanan baharu dan pembaharuan, dan kami akan memberi notis awal kepada pelanggan NexusBot tentang perubahan yang ketara.',
      ],
    },
    {
      id: 'law',
      title: 'Undang-undang, pertikaian, bahasa dan hubungan',
      body: [
        'Terma ini ditadbir oleh undang-undang Malaysia. Kami akan terlebih dahulu cuba menyelesaikan apa-apa pertikaian melalui perbincangan dengan niat baik; jika gagal, mahkamah Malaysia mempunyai bidang kuasa.',
        'Terma ini tersedia dalam Bahasa Inggeris dan Bahasa Malaysia. Jika terdapat perbezaan antara kedua-dua versi, versi Bahasa Inggeris akan diguna pakai.',
      ],
    },
  ],
  contact: {
    role: 'Pertanyaan tentang terma ini',
    emailLabel: 'E-mel',
    phoneLabel: 'Telefon',
    addressLabel: 'Alamat',
  },
};

export const termsContent: Record<Lang, TermsContent> = { en, ms };
