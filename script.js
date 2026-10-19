"use strict";

/* ==========================================================
   1) قاموس الترجمة (EN / AR)
   كل مفتاح يطابق data-i18n أو data-i18n-alt في index.html
   ========================================================== */
const translations = {
  en: {
    "ui.skip": "Skip to content",
    "ui.langButton": "العربية",
    "ui.langLabel": "Switch to Arabic",
    "ui.themeLabel": "Switch theme",
    "ui.close": "Close",
    "ui.menu": "Toggle navigation",
    "page.title": "Aya Jamal Abu Zahra | Cybersecurity Portfolio",

    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.certificates": "Certificates",
    "nav.journey": "Journey",
    "nav.hobbies": "Hobbies",
    "nav.contact": "Contact",

    "hero.alt": "Aya Jamal Abu Zahra smiling in a black blazer and beige hijab",
    "hero.eyebrow": "Cybersecurity · Blockchain · Digital forensics",
    "hero.h1a": "Secure systems.",
    "hero.h1b": "Verified trust.",
    "hero.desc": "I'm Aya Jamal Abu Zahra, a cybersecurity engineer with a software engineering background who builds reliable, secure systems, from blockchain supply chains to Linux servers.",
    "hero.ctaProjects": "Explore my work",
    "hero.ctaCv": "Download my CV",
    "hero.based": "Based in Amman, Jordan",
    "hero.scroll": "Scroll to explore",
    "hero.name": "AYA ABU ZAHRA",
    "spec.cyber": "Cybersecurity",
    "spec.software": "Software development",
    "spec.data": "Data quality",

    "spec.forensics": "Digital forensics",
    "spec.blockchain": "Blockchain security",

    "about.label1": "01 / About",
    "about.label2": "The person behind the work",
    "about.h2a": "Curious by nature.",
    "about.h2b": "Careful by training.",
    "about.large": "I build reliable, secure software that solves real-world problems.",
    "about.p1": "I'm a cybersecurity engineer with a background in software engineering. I graduated from Tafila Technical University and led a team of four on PharmaChain, a blockchain-based graduation project that helps detect counterfeit medicines across the pharmaceutical supply chain.",
    "about.p2": "Through academic projects and the National Cyber Security Center's Masar program, I gained practical experience in application development, databases and secure system design. I'm looking for an entry-level cybersecurity role in Amman.",
    "about.eduLabel": "Education",
    "about.edu": "B.Sc. in Cybersecurity, Tafila Technical University (Oct 2022 – Jun 2026), GPA: Very Good",
    "about.trainLabel": "Current training",
    "about.train": "Amman 42, Cybersecurity Training (Oct – Dec 2026, ongoing)",
    "about.certLabel": "Certifications",
    "about.cert": "Masar (NCSC, 200 hrs) and Robotics Trainer Prep Course (ROBOTNA, 55 hrs)",

    "skills.label1": "02 / Skills",
    "skills.label2": "What I work with",
    "skills.h2a": "Tools I trust.",
    "skills.h2b": "Skills I keep sharpening.",
    "skills.intro": "Used in coursework, labs and my graduation project.",
    "skills.web": "Web and backend",
    "skills.db": "Databases",
    "skills.devtools": "Tools",
    "skills.security": "Security",
    "skills.programming": "Programming languages",
    "skills.soft": "Soft skills",
    "skills.s1": "Problem-solving",
    "skills.s2": "Teamwork",
    "skills.s3": "Communication",

    "projects.label1": "03 / Selected work",
    "projects.label2": "Ideas, put into practice",
    "projects.h2a": "Built to be tested.",
    "projects.h2b": "Documented to be trusted.",
    "projects.intro": "Select a project to read the details.",
    "projects.piscine.title": "Web Piscine projects",
    "projects.piscine.p0": "First project of the Web Piscine. Source code is on GitHub.",
    "projects.piscine.p1": "Second project of the Web Piscine. Source code is on GitHub.",
    "projects.piscine.p2": "Third project of the Web Piscine. Source code is on GitHub.",
    "projects.piscine.p3": "Fourth project of the Web Piscine. Source code is on GitHub.",
    "projects.viewCode": "View project on GitHub",
    "contact.heading": "Contact",
    "contact.phoneLabel": "Phone",

    "pj.pharmachain.cat": "Graduation project · Team leader of 4",
    "pj.pharmachain.title": "PharmaChain",
    "pj.pharmachain.short": "A blockchain-based platform that helps detect counterfeit medicines through QR code verification and end-to-end traceability.",
    "pj.pharmachain.sum": "A blockchain-based platform that helps detect counterfeit medicines across the pharmaceutical supply chain, built as my graduation project.",
    "pj.pharmachain.bullets": [
      "Developed a blockchain-based platform that helps detect counterfeit medicines through QR code verification and end-to-end pharmaceutical traceability.",
      "Enabled pharmacists to verify product authenticity and trace medicine batches across the supply chain, improving transparency.",
      "Implemented Proof-of-Work, HMAC-SHA256 verification, JWT authentication and role-based access control to support transaction integrity and secure access.",
      "Led a team of four, coordinating task distribution and sprint planning to deliver project milestones."
    ],
    "pj.pharmachain.img1": "PharmaChain login screen",
    "pj.pharmachain.img2": "PharmaChain dashboard with inventory and alerts",
    "pj.pharmachain.img3": "PharmaChain blockchain ledger view",
    "pj.forensics.cat": "Digital forensics",
    "pj.forensics.title": "Disk imaging and file recovery",
    "pj.forensics.short": "Hash-verified forensic image and recovery of deleted files.",
    "pj.forensics.sum": "A forensic investigation lab focused on keeping evidence intact and reconstructing what happened on a disk.",
    "pj.forensics.bullets": [
      "Created forensic disk images using FTK Imager and verified evidence integrity with MD5/SHA1 hashes.",
      "Recovered deleted files using Autopsy and analyzed activity timelines on NTFS file systems."
    ],
    "pj.linux.cat": "Linux · Penetration testing",
    "pj.linux.title": "Linux server deployment and penetration testing",
    "pj.linux.short": "Drupal on Ubuntu Server with UFW firewall rules, then scanned with reconnaissance tools.",
    "pj.linux.sum": "Deployed a web server on Ubuntu, then ran reconnaissance against it to see what an attacker would find.",
    "pj.linux.bullets": [
      "Deployed Drupal on Ubuntu Server using Apache2 and MariaDB, and configured UFW firewall rules.",
      "Conducted reconnaissance using Nmap, WhatWeb and DIRB to identify open services, technologies and directories."
    ],
    "pj.other.cat": "Other academic projects",
    "pj.other.title": "Malware, networks and databases",
    "pj.other.short": "Malware analysis, network security with Cisco Packet Tracer and a normalized SQL database.",
    "pj.other.sum": "Smaller projects from my cybersecurity coursework.",
    "pj.other.bullets": [
      "Network security: practiced SSH configuration, port security, DHCP snooping and ASA firewall configuration using Cisco Packet Tracer.",
      "Database design: designed a normalized relational database using SQL, focusing on data integrity and query optimization.",
      "Malware analysis: performed basic static and dynamic analysis to identify suspicious behavior and potential mitigations."
    ],
    "dialog.contact": "Discuss this project",

    "certs.label1": "04 / Certificates",
    "certs.label2": "Proof of training",
    "certs.h2a": "Trained in the field.",
    "certs.h2b": "Certified on paper.",
    "certs.intro": "Select a certificate to view it full size.",
    "certs.masar.title": "Masar Cybersecurity Training",
    "certs.masar.meta": "National Cyber Security Center (NCSC) · 2025 · 200 hours",
    "certs.masar.desc": "Intensive training in SOC operations, threat analysis, cyber defense, network security tools and risk management.",
    "certs.masar.alt": "Masar Training certificate from the National Cyber Security Center",
    "certs.robotna.title": "Robotics Trainer Prep Course (STEM)",
    "certs.robotna.meta": "ROBOTNA · Feb – Mar 2026 · 55 hours",
    "certs.robotna.desc": "STEM-accredited trainer preparation covering robotics fundamentals and educational methodologies.",
    "certs.robotna.alt": "Robotics Trainer Prep Course certificate from ROBOTNA",

    "journey.label1": "05 / Journey",
    "journey.label2": "The foundation",
    "journey.h2a": "Four years of study.",
    "journey.h2b": "Years of practice ahead.",
    "journey.intro": "Open to entry-level cybersecurity roles in Amman.",
    "journey.cv": "Get the full CV",
    "journey.t1.time": "Oct – Dec 2026",
    "journey.t1.title": "Cybersecurity Training",
    "journey.t1.desc": "Ongoing practical training in web application vulnerability identification and analysis, Linux command-line operations and cryptography, alongside web development exercises.",
    "journey.t2.time": "Feb – Mar 2026",
    "journey.t2.title": "Robotics Trainer Prep Course",
    "journey.t2.desc": "55 hours of STEM-accredited trainer preparation covering robotics fundamentals and educational methodologies.",
    "journey.t3.time": "2025",
    "journey.t3.title": "Masar Cybersecurity Training",
    "journey.t3.org": "National Cyber Security Center",
    "journey.t3.desc": "200 hours covering SOC operations, threat analysis, cyber defense, network security tools and risk management.",
    "journey.t4.time": "Oct 2022 – Jun 2026",
    "journey.t4.title": "B.Sc. in Cybersecurity",
    "journey.t4.org": "Tafila Technical University",
    "journey.t4.desc": "Graduated with a \"Very Good\" GPA. Led the PharmaChain graduation project as team leader.",

    "hobbies.label1": "06 / Hobbies",
    "hobbies.label2": "Beyond the terminal",
    "hobbies.design.title": "Design",
    "hobbies.design.desc": "I enjoy visual design and have made personalized graduation keepsakes.",
    "hobbies.robotics.title": "Robotics and STEM",
    "hobbies.robotics.desc": "I completed a STEM trainer preparation course covering robotics fundamentals and educational methodologies.",
    "hobbies.study.title": "Self-study",
    "hobbies.study.desc": "I teach myself malware analysis and C++ on the side.",

    "contact.label1": "07 / Contact",
    "contact.label2": "Your next hire starts here",
    "contact.h2a": "Let's talk about",
    "contact.h2b": "securing what matters.",
    "contact.intro": "Write a message and your email app will open with it ready to send.",
    "contact.name": "Name",
    "contact.email": "Your email",
    "contact.message": "Message",
    "contact.send": "Send message",
    "contact.emailLabel": "Email",
    "contact.quick": "Quick action",
    "contact.copy": "Copy email address",
    "contact.copied": "Email address copied.",
    "contact.copyFail": "Could not copy. Select the address above instead.",
    "contact.errName": "Enter your name.",
    "contact.errEmail": "Enter a valid email address.",
    "contact.errMessage": "Write a message of at least 10 characters.",
    "contact.opening": "Opening your email app…",

    "footer.text": "© 2026 Aya Jamal Abu Zahra. Built with HTML, CSS and JavaScript.",
    "footer.top": "Back to top"
  },

  ar: {
    "ui.skip": "تخطي إلى المحتوى",
    "ui.langButton": "EN",
    "ui.langLabel": "التبديل إلى الإنجليزية",
    "ui.themeLabel": "تبديل المظهر",
    "ui.close": "إغلاق",
    "ui.menu": "فتح أو إغلاق القائمة",
    "page.title": "آية جمال أبو زهرة | معرض أعمال الأمن السيبراني",

    "nav.about": "نبذة عني",
    "nav.skills": "المهارات",
    "nav.projects": "المشاريع",
    "nav.certificates": "الشهادات",
    "nav.journey": "المسيرة",
    "nav.hobbies": "الهوايات",
    "nav.contact": "تواصل",

    "hero.alt": "آية جمال أبو زهرة مبتسمة بسترة سوداء وحجاب بيج",
    "hero.eyebrow": "الأمن السيبراني · البلوكتشين · التحقيق الجنائي الرقمي",
    "hero.h1a": "أنظمة آمنة.",
    "hero.h1b": "ثقة موثّقة.",
    "hero.desc": "أنا آية جمال أبو زهرة، مهندسة أمن سيبراني بخلفية في هندسة البرمجيات، أبني أنظمة موثوقة وآمنة، من سلاسل توريد البلوكتشين إلى خوادم لينكس.",
    "hero.ctaProjects": "شاهد أعمالي",
    "hero.ctaCv": "حمّل سيرتي الذاتية",
    "hero.based": "مقيمة في عمّان، الأردن",
    "hero.scroll": "مرّر للأسفل",
    "hero.name": "آية أبو زهرة",
    "spec.cyber": "الأمن السيبراني",
    "spec.software": "تطوير البرمجيات",
    "spec.data": "جودة البيانات",

    "spec.forensics": "التحقيق الجنائي الرقمي",
    "spec.blockchain": "أمن البلوكتشين",

    "about.label1": "01 / نبذة عني",
    "about.label2": "الشخص خلف العمل",
    "about.h2a": "فضولية بطبعي.",
    "about.h2b": "دقيقة بحكم تدريبي.",
    "about.large": "أبني برمجيات موثوقة وآمنة تحل مشكلات حقيقية.",
    "about.p1": "أنا مهندسة أمن سيبراني بخلفية في هندسة البرمجيات. تخرجت من جامعة الطفيلة التقنية وقدت فريقًا من أربعة أشخاص في PharmaChain، مشروع تخرج قائم على البلوكتشين يساعد على كشف الأدوية المزورة عبر سلسلة توريد الأدوية.",
    "about.p2": "اكتسبت خبرة عملية في تطوير التطبيقات وقواعد البيانات وتصميم الأنظمة الآمنة من خلال المشاريع الأكاديمية وبرنامج مسار من المركز الوطني للأمن السيبراني. أبحث عن وظيفة مبتدئة في الأمن السيبراني في عمّان.",
    "about.eduLabel": "التعليم",
    "about.edu": "بكالوريوس أمن سيبراني، جامعة الطفيلة التقنية (تشرين الأول 2022 – حزيران 2026)، المعدل: جيد جدًا",
    "about.trainLabel": "التدريب الحالي",
    "about.train": "Amman 42، تدريب في الأمن السيبراني (تشرين الأول – كانون الأول 2026، مستمر)",
    "about.certLabel": "الشهادات",
    "about.cert": "مسار (NCSC، 200 ساعة) ودورة إعداد مدرّب الروبوتات (روبوتنا، 55 ساعة)",

    "skills.label1": "02 / المهارات",
    "skills.label2": "ما أعمل به",
    "skills.h2a": "أدوات أثق بها.",
    "skills.h2b": "مهارات أواصل صقلها.",
    "skills.intro": "استخدمتها في المساقات والمختبرات ومشروع التخرج.",
    "skills.web": "الويب والخلفية",
    "skills.db": "قواعد البيانات",
    "skills.devtools": "الأدوات",
    "skills.security": "الأمن",
    "skills.programming": "لغات البرمجة",
    "skills.soft": "المهارات الشخصية",
    "skills.s1": "حل المشكلات",
    "skills.s2": "العمل الجماعي",
    "skills.s3": "التواصل",

    "projects.label1": "03 / أعمال مختارة",
    "projects.label2": "أفكار وُضعت قيد التطبيق",
    "projects.h2a": "مبنية لتُختبر.",
    "projects.h2b": "موثّقة لتُوثَق.",
    "projects.intro": "اضغط على أي مشروع لقراءة التفاصيل.",
    "projects.piscine.title": "مشاريع Web Piscine",
    "projects.piscine.p0": "المشروع الأول في Web Piscine. الكود المصدري على GitHub.",
    "projects.piscine.p1": "المشروع الثاني في Web Piscine. الكود المصدري على GitHub.",
    "projects.piscine.p2": "المشروع الثالث في Web Piscine. الكود المصدري على GitHub.",
    "projects.piscine.p3": "المشروع الرابع في Web Piscine. الكود المصدري على GitHub.",
    "projects.viewCode": "عرض المشروع على GitHub",
    "contact.heading": "التواصل",
    "contact.phoneLabel": "رقم الهاتف",

    "pj.pharmachain.cat": "مشروع التخرج · قائدة فريق من 4",
    "pj.pharmachain.title": "PharmaChain",
    "pj.pharmachain.short": "منصة قائمة على البلوكتشين تساعد على كشف الأدوية المزورة عبر التحقق من رموز QR والتتبع من البداية إلى النهاية.",
    "pj.pharmachain.sum": "منصة قائمة على البلوكتشين تساعد على كشف الأدوية المزورة عبر سلسلة توريد الأدوية، وهي مشروع تخرجي.",
    "pj.pharmachain.bullets": [
      "طورت منصة قائمة على البلوكتشين تساعد على كشف الأدوية المزورة عبر التحقق من رموز QR وتتبع الأدوية من البداية إلى النهاية.",
      "مكّنت الصيادلة من التحقق من أصالة المنتجات وتتبع دفعات الأدوية عبر سلسلة التوريد، مما يعزز الشفافية.",
      "طبقت إثبات العمل (Proof-of-Work) والتحقق بـ HMAC-SHA256 ومصادقة JWT والتحكم بالصلاحيات حسب الدور لدعم سلامة المعاملات وأمان الوصول.",
      "قدت فريقًا من أربعة أشخاص ونسقت توزيع المهام وتخطيط السبرنت لتسليم مراحل المشروع."
    ],
    "pj.pharmachain.img1": "شاشة تسجيل الدخول في PharmaChain",
    "pj.pharmachain.img2": "لوحة تحكم PharmaChain مع المخزون والتنبيهات",
    "pj.pharmachain.img3": "عرض سجل البلوكتشين في PharmaChain",
    "pj.forensics.cat": "التحقيق الجنائي الرقمي",
    "pj.forensics.title": "نسخ القرص واسترجاع الملفات",
    "pj.forensics.short": "نسخة جنائية موثّقة بقيم التجزئة واسترجاع ملفات محذوفة.",
    "pj.forensics.sum": "مختبر تحقيق جنائي يركز على الحفاظ على الأدلة سليمة وإعادة بناء ما حدث على القرص.",
    "pj.forensics.bullets": [
      "أنشأت نسخًا جنائية للأقراص باستخدام FTK Imager وتحققت من سلامة الأدلة بقيم MD5/SHA1.",
      "استرجعت ملفات محذوفة باستخدام Autopsy وحللت الخطوط الزمنية للنشاط على أنظمة ملفات NTFS."
    ],
    "pj.linux.cat": "لينكس · اختبار الاختراق",
    "pj.linux.title": "نشر خادم لينكس واختبار الاختراق",
    "pj.linux.short": "Drupal على Ubuntu Server بقواعد جدار حماية UFW، ثم فحصه بأدوات الاستطلاع.",
    "pj.linux.sum": "نشرت خادم ويب على Ubuntu، ثم نفذت عليه استطلاعًا لأرى ما الذي سيجده المهاجم.",
    "pj.linux.bullets": [
      "نشرت Drupal على Ubuntu Server باستخدام Apache2 وMariaDB، وأعددت قواعد جدار الحماية UFW.",
      "نفذت استطلاعًا باستخدام Nmap وWhatWeb وDIRB لتحديد الخدمات المفتوحة والتقنيات والمجلدات."
    ],
    "pj.other.cat": "مشاريع أكاديمية أخرى",
    "pj.other.title": "البرمجيات الخبيثة والشبكات وقواعد البيانات",
    "pj.other.short": "تحليل برمجيات خبيثة وأمن الشبكات بـ Cisco Packet Tracer وقاعدة بيانات SQL مطبّعة.",
    "pj.other.sum": "مشاريع أصغر من مساقات الأمن السيبراني.",
    "pj.other.bullets": [
      "أمن الشبكات: تدربت على إعداد SSH وأمان المنافذ وDHCP snooping وإعداد جدار ASA باستخدام Cisco Packet Tracer.",
      "تصميم قواعد البيانات: صممت قاعدة بيانات علائقية مطبّعة بـ SQL مع التركيز على سلامة البيانات وتحسين الاستعلامات.",
      "تحليل البرمجيات الخبيثة: أجريت تحليلًا ثابتًا وديناميكيًا أوليًا لتحديد السلوك المشبوه والحلول الممكنة."
    ],
    "dialog.contact": "ناقش هذا المشروع",

    "certs.label1": "04 / الشهادات",
    "certs.label2": "إثبات التدريب",
    "certs.h2a": "تدريب في الميدان.",
    "certs.h2b": "وشهادات موثّقة.",
    "certs.intro": "اضغط على الشهادة لعرضها بالحجم الكامل.",
    "certs.masar.title": "تدريب مسار للأمن السيبراني",
    "certs.masar.meta": "المركز الوطني للأمن السيبراني (NCSC) · 2025 · 200 ساعة",
    "certs.masar.desc": "تدريب مكثف في عمليات SOC وتحليل التهديدات والدفاع السيبراني وأدوات أمن الشبكات وإدارة المخاطر.",
    "certs.masar.alt": "شهادة تدريب مسار من المركز الوطني للأمن السيبراني",
    "certs.robotna.title": "دورة إعداد مدرّب الروبوتات (STEM)",
    "certs.robotna.meta": "روبوتنا · شباط – آذار 2026 · 55 ساعة",
    "certs.robotna.desc": "إعداد مدربين معتمد من STEM يغطي أساسيات الروبوتات والمنهجيات التعليمية.",
    "certs.robotna.alt": "شهادة دورة إعداد مدرّب الروبوتات من روبوتنا",

    "journey.label1": "05 / المسيرة",
    "journey.label2": "الأساس",
    "journey.h2a": "أربع سنوات من الدراسة.",
    "journey.h2b": "وسنوات من الممارسة قادمة.",
    "journey.intro": "منفتحة على وظائف الأمن السيبراني المبتدئة في عمّان.",
    "journey.cv": "حمّل السيرة الذاتية كاملة",
    "journey.t1.time": "تشرين الأول – كانون الأول 2026",
    "journey.t1.title": "تدريب في الأمن السيبراني",
    "journey.t1.desc": "تدريب عملي مستمر على اكتشاف وتحليل ثغرات تطبيقات الويب وعمليات سطر أوامر لينكس والتشفير، إضافةً إلى تمارين تطوير الويب.",
    "journey.t2.time": "شباط – آذار 2026",
    "journey.t2.title": "دورة إعداد مدرّب الروبوتات",
    "journey.t2.desc": "55 ساعة من إعداد المدربين المعتمد من STEM تغطي أساسيات الروبوتات والمنهجيات التعليمية.",
    "journey.t3.time": "2025",
    "journey.t3.title": "تدريب مسار للأمن السيبراني",
    "journey.t3.org": "المركز الوطني للأمن السيبراني",
    "journey.t3.desc": "200 ساعة تشمل عمليات SOC وتحليل التهديدات والدفاع السيبراني وأدوات أمن الشبكات وإدارة المخاطر.",
    "journey.t4.time": "تشرين الأول 2022 – حزيران 2026",
    "journey.t4.title": "بكالوريوس في الأمن السيبراني",
    "journey.t4.org": "جامعة الطفيلة التقنية",
    "journey.t4.desc": "تخرجت بمعدل \"جيد جدًا\". قدت مشروع التخرج PharmaChain كقائدة فريق.",

    "hobbies.label1": "06 / الهوايات",
    "hobbies.label2": "بعيدًا عن الطرفية",
    "hobbies.design.title": "التصميم",
    "hobbies.design.desc": "أستمتع بالتصميم البصري وصممت هدايا تخرج مخصصة.",
    "hobbies.robotics.title": "الروبوتات وSTEM",
    "hobbies.robotics.desc": "أنهيت دورة إعداد مدربين معتمدة من STEM تغطي أساسيات الروبوتات والمنهجيات التعليمية.",
    "hobbies.study.title": "التعلم الذاتي",
    "hobbies.study.desc": "أتعلم تحليل البرمجيات الخبيثة ولغة C++ بنفسي.",

    "contact.label1": "07 / تواصل معي",
    "contact.label2": "توظيفك القادم يبدأ هنا",
    "contact.h2a": "لنتحدث عن",
    "contact.h2b": "حماية ما يهمّ.",
    "contact.intro": "اكتب رسالة وسيفتح تطبيق البريد لديك وهي جاهزة للإرسال.",
    "contact.name": "الاسم",
    "contact.email": "بريدك الإلكتروني",
    "contact.message": "الرسالة",
    "contact.send": "إرسال الرسالة",
    "contact.emailLabel": "البريد الإلكتروني",
    "contact.quick": "إجراء سريع",
    "contact.copy": "نسخ البريد الإلكتروني",
    "contact.copied": "تم نسخ البريد الإلكتروني.",
    "contact.copyFail": "تعذّر النسخ. انسخ العنوان أعلاه يدويًا.",
    "contact.errName": "أدخل اسمك.",
    "contact.errEmail": "أدخل بريدًا إلكترونيًا صحيحًا.",
    "contact.errMessage": "اكتب رسالة لا تقل عن 10 أحرف.",
    "contact.opening": "جاري فتح تطبيق البريد…",

    "footer.text": "© 2026 آية جمال أبو زهرة. بُني باستخدام HTML وCSS وJavaScript.",
    "footer.top": "العودة للأعلى"
  }
};

/* وسوم التقنيات لكل مشروع (ما بتتغير مع اللغة) */
const projectTags = {
  pharmachain: ["ASP.NET Core", "Blockchain", "Proof-of-Work", "HMAC-SHA256", "JWT"],
  forensics: ["FTK Imager", "Autopsy", "NTFS", "MD5/SHA1"],
  linux: ["Ubuntu", "Apache2", "MariaDB", "Drupal", "UFW", "Nmap", "WhatWeb", "DIRB"],
  other: ["Cisco Packet Tracer", "SQL", "Malware analysis"]
};

const projectLinks = {
  pharmachain: "https://github.com/ayajamal1322003-eng/Pharma-_Chain",
  forensics: "", linux: "", other: ""
};

/* لقطات شاشة المشاريع (تظهر في نافذة المشروع) */
const projectImages = {
  pharmachain: [
    { src: "assets/pharmachain-login.jpg", alt: "pj.pharmachain.img1" },
    { src: "assets/pharmachain-dashboard.jpg", alt: "pj.pharmachain.img2" },
    { src: "assets/pharmachain-blockchain.jpg", alt: "pj.pharmachain.img3" }
  ]
};

/* ==========================================================
   2) أدوات مساعدة
   ========================================================== */
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!reduceMotion) document.documentElement.classList.add("js"); // يفعّل الـ reveal

function saveSetting(key, value) { try { localStorage.setItem(key, value); } catch (e) { /* تجاهل */ } }
function loadSetting(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }

let currentLang = "en";
let openProject = null; // المشروع المفتوح حاليًا في النافذة

function t(key) {
  const value = translations[currentLang][key];
  return value !== undefined ? value : translations.en[key];
}

/* ==========================================================
   3) مبدّل اللغة EN / AR
   ========================================================== */
function applyLanguage(lang) {
  currentLang = lang;
  const root = document.documentElement;
  root.lang = lang;
  root.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => { el.alt = t(el.dataset.i18nAlt); });

  document.title = t("page.title");

  const langBtn = document.getElementById("lang-toggle");
  langBtn.textContent = t("ui.langButton");
  langBtn.setAttribute("aria-label", t("ui.langLabel"));
  document.getElementById("theme-toggle").setAttribute("aria-label", t("ui.themeLabel"));
  document.getElementById("menu-toggle").setAttribute("aria-label", t("ui.menu"));
  document.getElementById("close-project").setAttribute("aria-label", t("ui.close"));
  document.getElementById("close-cert").setAttribute("aria-label", t("ui.close"));

  if (openProject) fillProjectDialog(openProject); // لو النافذة مفتوحة نحدّث لغتها
  saveSetting("lang", lang);
}

document.getElementById("lang-toggle").addEventListener("click", () => {
  applyLanguage(currentLang === "en" ? "ar" : "en");
});

/* ==========================================================
   4) مبدّل الثيم (أسود / فاتح)
   الحدث: click -> callback -> تغيير data-theme -> متغيرات CSS تتغير
   ========================================================== */
const themeBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const isLight = theme === "light";
  themeIcon.textContent = isLight ? "☾" : "☀";
  themeBtn.setAttribute("aria-pressed", String(isLight));
  document.querySelector('meta[name="theme-color"]').setAttribute("content", "#baa89d");
  saveSetting("theme", theme);
}

themeBtn.addEventListener("click", () => {
  applyTheme(document.documentElement.dataset.theme === "light" ? "dark" : "light");
});

/* ==========================================================
   5) قائمة الموبايل + التنقل
   ========================================================== */
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

function setMenu(open) {
  navLinks.classList.toggle("open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
}
menuToggle.addEventListener("click", () => setMenu(!navLinks.classList.contains("open")));
navLinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });

// تمييز الرابط النشط حسب القسم الظاهر على الشاشة
const spyLinks = Array.from(navLinks.querySelectorAll('a[href^="#"]'));
const spyTargets = spyLinks.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);

const spy = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    spyLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id));
  });
}, { rootMargin: "-40% 0px -55% 0px" });
spyTargets.forEach((section) => spy.observe(section));

/* ==========================================================
   6) ظهور العناصر عند التمرير
   ========================================================== */
const revealEls = document.querySelectorAll(".reveal");
if (reduceMotion || !("IntersectionObserver" in window)) {
  revealEls.forEach((el) => el.classList.add("visible"));
} else {
  const revealObs = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("visible"); obs.unobserve(entry.target); }
    });
  }, { threshold: 0.12 });
  revealEls.forEach((el) => revealObs.observe(el));
}

/* ==========================================================
   8) نافذة تفاصيل المشروع + نافذة الشهادة
   ========================================================== */
const projectDialog = document.getElementById("project-dialog");

function fillProjectDialog(id) {
  document.getElementById("dialog-category").textContent = t("pj." + id + ".cat");
  document.getElementById("dialog-title").textContent = t("pj." + id + ".title");
  document.getElementById("dialog-summary").textContent = t("pj." + id + ".sum");
  const projectLink = document.getElementById("dialog-project-link");
  const url = projectLinks[id] || "";
  projectLink.href = url || "#";
  projectLink.hidden = !url;

  const list = document.getElementById("dialog-list");
  list.replaceChildren(...t("pj." + id + ".bullets").map((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    return li;
  }));

  const gallery = document.getElementById("dialog-gallery");
  gallery.replaceChildren(...(projectImages[id] || []).map((img) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    const pic = document.createElement("img");
    btn.type = "button";
    btn.className = "shot";
    pic.src = img.src;
    pic.alt = t(img.alt);
    pic.loading = "lazy";
    btn.append(pic);
    btn.addEventListener("click", () => openImage(img.src, pic.alt));
    li.append(btn);
    return li;
  }));

  const tags = document.getElementById("dialog-tags");
  tags.replaceChildren(...projectTags[id].map((name) => {
    const li = document.createElement("li");
    li.textContent = name;
    return li;
  }));
}

document.querySelectorAll("[data-project]").forEach((card) => {
  card.addEventListener("click", () => {
    openProject = card.dataset.project;
    fillProjectDialog(openProject);
    projectDialog.showModal();
  });
});
projectDialog.addEventListener("close", () => { openProject = null; });
document.getElementById("close-project").addEventListener("click", () => projectDialog.close());
document.getElementById("dialog-contact").addEventListener("click", () => projectDialog.close());
projectDialog.addEventListener("click", (e) => { if (e.target === projectDialog) projectDialog.close(); });

const certDialog = document.getElementById("cert-dialog");
const certFull = document.getElementById("cert-full");
function openImage(src, alt) {
  certFull.src = src;
  certFull.alt = alt;
  certDialog.showModal();
}
document.querySelectorAll(".cert-thumb").forEach((btn) => {
  btn.addEventListener("click", () => openImage(btn.dataset.full, t(btn.dataset.altKey)));
});
document.getElementById("close-cert").addEventListener("click", () => certDialog.close());
certDialog.addEventListener("click", (e) => { if (e.target === certDialog) certDialog.close(); });

/* ==========================================================
   9) نموذج التواصل + نسخ الإيميل
   ========================================================== */
const OWNER_EMAIL = "aya.abuzah@gmail.com";
const form = document.getElementById("contact-form");
const statusEl = document.getElementById("form-status");

function setStatus(message, type) {
  statusEl.textContent = message;
  statusEl.className = type;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.elements.name;
  const email = form.elements.email;
  const message = form.elements.message;
  [name, email, message].forEach((f) => f.classList.remove("invalid"));

  let error = null;
  let badField = null;
  if (name.value.trim() === "") { error = t("contact.errName"); badField = name; }
  else if (email.value.trim() === "" || !email.validity.valid) { error = t("contact.errEmail"); badField = email; }
  else if (message.value.trim().length < 10) { error = t("contact.errMessage"); badField = message; }

  if (error) {
    badField.classList.add("invalid");
    badField.focus();
    setStatus(error, "error");
    return;
  }

  const subject = encodeURIComponent("Portfolio message from " + name.value.trim());
  const body = encodeURIComponent(message.value.trim() + "\n\n" + name.value.trim() + "\n" + email.value.trim());
  setStatus(t("contact.opening"), "ok");
  window.location.href = "mailto:" + OWNER_EMAIL + "?subject=" + subject + "&body=" + body;
  form.reset();
});

document.getElementById("copy-email").addEventListener("click", async () => {
  const status = document.getElementById("copy-status");
  try {
    await navigator.clipboard.writeText(OWNER_EMAIL);
    status.textContent = t("contact.copied");
  } catch (e) {
    status.textContent = t("contact.copyFail");
  }
});

/* ==========================================================
   10) التشغيل الأول: استرجاع الإعدادات المحفوظة
   ========================================================== */
applyTheme(loadSetting("theme") === "light" ? "light" : "dark");
applyLanguage(loadSetting("lang") === "ar" ? "ar" : "en");
