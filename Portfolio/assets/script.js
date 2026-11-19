(() => {
  const translations = {
    en: {
      pageTitle: 'Hean | Technology & IT',
      followMe: 'Follow me',
      navLanguages: 'Languages',
      langKicker: '<span class="eyebrow-line"></span> PROGRAMMING LANGUAGES',
      langTitle: 'Languages I <em>build with</em>',
      langIntro: 'The languages I am learning and practicing to turn ideas into working, secure solutions.',
      langFeatured: 'FEATURED',
      langJavaTitle: 'Java Programming',
      langJavaDesc: 'Object-oriented thinking: classes, inheritance, collections, and writing clean, reusable programs.',
      langPythonDesc: 'Automation, scripting, and fast problem solving with clear, readable code.',
      langJsDesc: 'Interactive websites, smooth animations, and logic that runs right in the browser.',
      langCppDesc: 'Memory, performance, and how computers really work under the hood.',
      langWebDesc: 'Structure and style: responsive layouts, gradients, and accessible design.',
      langSqlDesc: 'Querying, joining, and shaping data so it answers real questions.',
      langShellDesc: 'Command-line control, scripting, and the tools that security work relies on.',
      introSection: 'Introduction', heroVisual: 'Portrait of Hean with technology icons',
      pageDescription: "Hean's technology profile: IT support, networking, cybersecurity fundamentals, Python, data analysis, and technology research.",
      skip: 'Skip to content', location: 'PHNOM PENH, CAMBODIA', profileLabel: 'PERSONAL TECHNOLOGY PROFILE',
      about: 'About', technicalFocus: 'Technical Focus', contact: 'Contact', brandTagline: 'TECHNOLOGY & IT',
      home: 'Home', approachNav: 'My Approach',
      aboutMenu: 'About <span aria-hidden="true" class="chevron">⌄</span>', moreMenu: 'More <span aria-hidden="true" class="chevron">⌄</span>', navProfile: "What I'm exploring", navPrinciples: 'Learning principles', navQuote: 'Personal principle', navLab: 'Learning lab', focusAreas: 'Focus Areas <span aria-hidden="true" class="chevron">⌄</span>',
      itSupport: 'IT Support & Help Desk', networking: 'Computer Networking', cybersecurity: 'Cybersecurity', pythonData: 'Python & Data',
      heroEyebrow: '<span class="eyebrow-line"></span> LEARN · BUILD · SECURE',
      heroKicker1: "HELLO, I'M HEAN", heroKicker2: 'THINK · CONFIGURE · IMPROVE', heroKicker3: 'CODE · ANALYZE · SHARE',
      heroTitle1: 'Technology with<br><em>purpose.</em>', heroTitle2: 'Understand the<br><em>system.</em>', heroTitle3: 'Keep learning.<br><em>Keep creating.</em>',
      heroDescription1: 'Exploring how technology works, solving practical problems, and building a stronger foundation in Information Technology.',
      heroDescription2: 'From computer networks to secure systems, I focus on understanding the logic behind every connection and configuration.',
      heroDescription3: 'Developing practical skills in Python, databases, data analysis, AI, and technology knowledge-sharing.',
      heroCta: 'Explore my focus <span aria-hidden="true">→</span>', heroAbout: 'Discover my profile <span aria-hidden="true">↗</span>',
      slideLabel1: 'Show slide 1', slideLabel2: 'Show slide 2', slideLabel3: 'Show slide 3', systemsThinking: '<span class="tag-pulse"></span> SYSTEMS THINKING',
      network: 'NETWORK', security: 'SECURITY', data: 'DATA', codeLabel: 'CODE', heroBottomTag: 'PRACTICAL KNOWLEDGE <b>+</b> CLEAR THINKING',
      profileDirection: '<span class="eyebrow-line"></span> PROFILE & DIRECTION', exploringTitle: "What I'm <em>exploring</em>",
      exploringIntro: 'A growing technology profile built around curiosity, structured learning, and practical problem-solving.',
      foundation: 'FOUNDATION', infrastructure: 'INFRASTRUCTURE', development: 'DEVELOPMENT',
      supportCardTitle: 'IT systems & support', networkCardTitle: 'Networks & connectivity', codeCardTitle: 'Code, data & AI',
      supportCardDesc: 'Understanding computer systems, common technical issues, and the process of diagnosing and resolving problems.',
      networkCardDesc: 'Learning LAN fundamentals, IP addressing, switching, routing, and network troubleshooting.',
      codeCardDesc: 'Building foundational skills in Python, SQL, data analysis, and researching useful AI technologies.',
      exploreFocus: 'Explore focus <span aria-hidden="true">→</span>',
      principlesEyebrow: '<span class="eyebrow-line"></span> MY LEARNING PRINCIPLES',
      principlesTitle: 'Strong foundations.<br><em>Practical thinking.</em>',
      principlesIntro: 'Good technology work starts with understanding the problem. I aim to learn the fundamentals, test ideas carefully, and improve through practice.',
      myApproach: 'My approach <span aria-hidden="true">→</span>', understand: 'Understand', build: 'Build', improve: 'Improve',
      understandDesc: 'Break problems into smaller parts. Ask what is happening and why.',
      buildDesc: 'Turn concepts into practice through configuration, coding, and experiments.',
      improveDesc: 'Test carefully, think about security, document results, and keep learning.',
      technologyIt: '<span class="eyebrow-line"></span> TECHNOLOGY & IT', technicalFocusTitle: 'Technical <em>focus areas</em>',
      technicalFocusIntro: 'The subjects I am learning, practicing, and interested in developing further.',
      helpdeskImageAlt: 'IT Help Desk support illustration', pythonLogoAlt: 'Python programming language logo', networkImageAlt: 'Cloud servers and network infrastructure illustration',
      focusSupportTitle: 'IT Support & Help Desk', focusNetworkTitle: 'Computer Networking', focusCyberTitle: 'Cybersecurity Fundamentals',
      focusPythonTitle: 'Python Programming', focusSqlTitle: 'SQL & Data Analysis', focusAiTitle: 'AI & Technology Research',
      focusSupportDesc: 'Computer setup, operating-system basics, user support, troubleshooting, and issue documentation.',
      focusNetworkDesc: 'Network fundamentals, IP addressing, switch and router configuration, and connectivity diagnosis.',
      focusCyberDesc: 'Security awareness, threat analysis, vulnerability concepts, safe practices, and secure thinking.',
      focusPythonDesc: 'Programming fundamentals, logical thinking, problem decomposition, and beginner automation.',
      focusSqlDesc: 'Database concepts, SQL queries, organizing information, and interpreting structured data.',
      focusAiDesc: 'Exploring AI tools, understanding new technologies, evaluating information, and sharing knowledge.',
      learnMore: 'Learn more <span aria-hidden="true">→</span>',
      disclaimer: '<span aria-hidden="true">*</span> These are learning and practice areas, not claims of professional certification or guaranteed commercial services.',
      learningLab: 'LEARNING LAB', handsOnPractice: '01 — HANDS-ON PRACTICE', networkConfiguration: 'Network configuration',
      networkExplain: 'Router: connects networks · Switch: connects devices in a LAN · PCs: client computers',
      learnByDoing: '<span class="eyebrow-line"></span> LEARN BY DOING',
      conceptsToPractice: 'From concepts<br>to <em>real practice.</em>',
      practiceIntro: 'Learning becomes meaningful when I can apply it. I am interested in practical labs, step-by-step configuration, and testing how systems behave.',
      networkStep1: 'Plan the network and understand the topology.', networkStep2: 'Configure devices and verify connectivity.', networkStep3: 'Troubleshoot, document, and improve the setup.',
      seeApproach: 'See my working approach <span aria-hidden="true">→</span>',
      howIWork: '<span class="eyebrow-line"></span> HOW I THINK & WORK', betterSolutionsTitle: 'A clear process for <em>better solutions</em>',
      betterSolutionsIntro: 'A simple cycle that supports careful analysis and continuous improvement.', analyze: 'Analyze', implement: 'Implement', evaluate: 'Evaluate',
      analyzeDesc: 'Define the problem, gather evidence, and identify possible causes.',
      implementDesc: 'Choose a sensible solution and apply it in a controlled way.',
      evaluateDesc: 'Test the result, review risks, and record what can be improved.',
      personalPrinciple: '<span class="eyebrow-line"></span> A PERSONAL PRINCIPLE',
      personalQuote: 'Technology is not only about knowing the tools. It is about understanding problems, thinking critically, and using knowledge to create something useful.',
      quoteTagline: 'LEARNING · TECHNOLOGY · GROWTH', connectCollaborate: '<span class="eyebrow-line"></span> CONNECT & COLLABORATE',
      contactTitle: "Let's talk about<br><em>technology.</em>",
      contactIntro: 'Interested in exchanging ideas, learning together, or discussing an IT topic? Send a message using the form.',
      openToCollaboration: 'Open to learning and collaboration', contactTopics: 'IT · Networks · Cybersecurity · Programming · Data · AI',
      sendMessage: 'Send a message', contactFormIndex: '01 / CONTACT', copyright: 'HEAN. ALL RIGHTS RESERVED.', yourName: 'Your name', emailAddress: 'Email address', topic: 'Topic', message: 'Message',
      namePlaceholder: 'Enter your name', emailPlaceholder: 'you@example.com', messagePlaceholder: 'How can we connect?',
      selectTopic: 'Select a topic', topicSupport: 'IT Support & Help Desk', topicNetwork: 'Computer Networking', topicCyber: 'Cybersecurity',
      topicPython: 'Python & Programming', topicSql: 'SQL & Data Analysis', topicAi: 'AI & Technology Research', topicOther: 'Other / Collaboration',
      prepareMessage: 'Prepare message <span aria-hidden="true">→</span>',
      formDemoNotice: 'Demo form: it does not send or store messages until an email or form service is connected.',
      footerBrandDesc: 'Curiosity, critical thinking, and practical technology learning.', quickNavigation: 'QUICK NAVIGATION',
      technicalFocusFooter: 'TECHNICAL FOCUS', connectFooter: 'CONNECT', footerAbout: 'About Hean', footerTechnicalFocus: 'Technical Focus',
      footerApproach: 'My Approach', footerContact: 'Contact', footerSupport: 'IT Support', footerNetworking: 'Networking',
      footerCybersecurity: 'Cybersecurity', footerPythonData: 'Python & Data', footerLocation: 'Phnom Penh, Cambodia',
      footerContactHelp: 'For collaboration, use the contact form.', footerSendMessage: 'Send a message <span aria-hidden="true">↗</span>',
      footerClosing: 'BUILT WITH CURIOSITY & PURPOSE.', backToTop: 'BACK TO TOP ↑',
      networkLabelRouter: 'ROUTER', networkLabelSwitch: 'SWITCH', networkLabelClient: 'CLIENT',
      mainNavigation: 'Main navigation', chooseLanguage: 'Choose language', switchToEnglish: 'Switch to English', switchToKhmer: 'Switch to Khmer', heroSlides: 'Hero slides',
      askSupport: 'Ask about IT Support and Help Desk', askNetwork: 'Ask about Computer Networking', askCyber: 'Ask about Cybersecurity Fundamentals',
      askPython: 'Ask about Python Programming', askSql: 'Ask about SQL and Data Analysis', askAi: 'Ask about AI and Technology Research',
      menuOpen: 'Open navigation', menuClose: 'Close navigation', formThanks: 'Thanks, {name}. This front-end demo does not send or store messages. Connect an email or form service to receive submissions.'
    },
    km: {
      pageTitle: 'Hean | បច្ចេកវិទ្យា និង IT',
      followMe: 'តាមដានខ្ញុំ',
      navLanguages: 'ភាសាកូដ',
      langKicker: '<span class="eyebrow-line"></span> ភាសាសរសេរកម្មវិធី',
      langTitle: 'ភាសាដែលខ្ញុំ<em>ប្រើបង្កើត</em>',
      langIntro: 'ភាសាដែលខ្ញុំកំពុងរៀន និងអនុវត្ត ដើម្បីបំប្លែងគំនិតទៅជាដំណោះស្រាយដែលដំណើរការ និងមានសុវត្ថិភាព។',
      langFeatured: 'ពិសេស',
      langJavaTitle: 'ការសរសេរកម្មវិធី Java',
      langJavaDesc: 'គំនិតតម្រង់ទិសវត្ថុ៖ class, inheritance, collections និងការសរសេរកម្មវិធីស្អាត ងាយប្រើឡើងវិញ។',
      langPythonDesc: 'ស្វ័យប្រវត្តិកម្ម ស្គ្រីប និងការដោះស្រាយបញ្ហាលឿន ជាមួយកូដច្បាស់ ងាយអាន។',
      langJsDesc: 'គេហទំព័រអន្តរកម្ម ចលនារលូន និងតក្កវិជ្ជាដែលដំណើរការក្នុងកម្មវិធីរុករក។',
      langCppDesc: 'ការគ្រប់គ្រងអង្គចងចាំ សមត្ថភាព និងរបៀបដែលកុំព្យូទ័រធ្វើការពិតប្រាកដ។',
      langWebDesc: 'រចនាសម្ព័ន្ធ និងរចនាប័ទ្ម៖ ទំព័រសម្របអេក្រង់ ពណ៌ gradient និងការរចនាងាយប្រើ។',
      langSqlDesc: 'ការស្វែងរក ភ្ជាប់ និងរៀបចំទិន្នន័យ ដើម្បីឆ្លើយសំណួរពិតប្រាកដ។',
      langShellDesc: 'ការគ្រប់គ្រងតាមបន្ទាត់បញ្ជា ស្គ្រីប និងឧបករណ៍ដែលការងារសុវត្ថិភាពពឹងផ្អែក។',
      introSection: 'ការណែនាំ', heroVisual: 'រូបថតរបស់ ហាន ជាមួយនិមិត្តសញ្ញាបច្ចេកវិទ្យា',
      pageDescription: 'ប្រវត្តិរូបបច្ចេកវិទ្យារបស់ Hean៖ ជំនួយ IT បណ្តាញកុំព្យូទ័រ សន្តិសុខសាយប័រ Python ការវិភាគទិន្នន័យ និងការស្រាវជ្រាវបច្ចេកវិទ្យា។',
      skip: 'រំលងទៅមាតិកា', location: 'ភ្នំពេញ ប្រទេសកម្ពុជា', profileLabel: 'ប្រវត្តិរូបផ្នែកបច្ចេកវិទ្យា',
      about: 'អំពីខ្ញុំ', technicalFocus: 'ជំនាញបច្ចេកទេស', contact: 'ទំនាក់ទំនង', brandTagline: 'បច្ចេកវិទ្យា និង IT',
      home: 'ទំព័រដើម', approachNav: 'របៀបធ្វើការរបស់ខ្ញុំ',
      aboutMenu: 'អំពីខ្ញុំ <span aria-hidden="true" class="chevron">⌄</span>', moreMenu: 'បន្ថែម <span aria-hidden="true" class="chevron">⌄</span>', navProfile: 'អ្វីដែលខ្ញុំកំពុងស្វែងយល់', navPrinciples: 'គោលការណ៍នៃការរៀន', navQuote: 'គោលការណ៍ផ្ទាល់ខ្លួន', navLab: 'មន្ទីរពិសោធន៍សិក្សា', focusAreas: 'ផ្នែកដែលខ្ញុំផ្តោត <span aria-hidden="true" class="chevron">⌄</span>',
      itSupport: 'ជំនួយ IT និង Help Desk', networking: 'បណ្តាញកុំព្យូទ័រ', cybersecurity: 'សន្តិសុខសាយប័រ', pythonData: 'Python និងទិន្នន័យ',
      heroEyebrow: '<span class="eyebrow-line"></span> រៀន · បង្កើត · ការពារ',
      heroKicker1: 'សួស្តី ខ្ញុំឈ្មោះ HEAN', heroKicker2: 'គិត · កំណត់រចនាសម្ព័ន្ធ · កែលម្អ', heroKicker3: 'សរសេរកូដ · វិភាគ · ចែករំលែក',
      heroTitle1: 'បច្ចេកវិទ្យា<br><em>ដែលមានគោលបំណង។</em>', heroTitle2: 'យល់ដឹងអំពី<br><em>ប្រព័ន្ធ។</em>', heroTitle3: 'បន្តរៀន។<br><em>បន្តបង្កើត។</em>',
      heroDescription1: 'ស្វែងយល់ពីរបៀបដែលបច្ចេកវិទ្យាដំណើរការ ដោះស្រាយបញ្ហាជាក់ស្តែង និងកសាងមូលដ្ឋានចំណេះដឹងផ្នែកបច្ចេកវិទ្យាព័ត៌មាន។',
      heroDescription2: 'ចាប់ពីបណ្តាញកុំព្យូទ័ររហូតដល់ប្រព័ន្ធសុវត្ថិភាព ខ្ញុំផ្តោតលើការយល់ដឹងពីតក្កវិជ្ជានៃការតភ្ជាប់ និងការកំណត់រចនាសម្ព័ន្ធ។',
      heroDescription3: 'កំពុងអភិវឌ្ឍជំនាញមូលដ្ឋានលើ Python មូលដ្ឋានទិន្នន័យ ការវិភាគទិន្នន័យ AI និងការចែករំលែកចំណេះដឹងបច្ចេកវិទ្យា។',
      heroCta: 'ស្វែងយល់ពីជំនាញរបស់ខ្ញុំ <span aria-hidden="true">→</span>', heroAbout: 'មើលប្រវត្តិរូបរបស់ខ្ញុំ <span aria-hidden="true">↗</span>',
      slideLabel1: 'បង្ហាញស្លាយទី ១', slideLabel2: 'បង្ហាញស្លាយទី ២', slideLabel3: 'បង្ហាញស្លាយទី ៣', systemsThinking: '<span class="tag-pulse"></span> ការគិតជាប្រព័ន្ធ',
      network: 'បណ្តាញ', security: 'សុវត្ថិភាព', data: 'ទិន្នន័យ', codeLabel: 'កូដ', heroBottomTag: 'ចំណេះដឹងអនុវត្ត <b>+</b> ការគិតច្បាស់លាស់',
      profileDirection: '<span class="eyebrow-line"></span> ប្រវត្តិរូប និងទិសដៅ', exploringTitle: 'អ្វីដែលខ្ញុំកំពុង<em>ស្វែងយល់</em>',
      exploringIntro: 'ប្រវត្តិរូបបច្ចេកវិទ្យាដែលកំពុងអភិវឌ្ឍ ដោយផ្អែកលើការចង់ដឹង ការរៀនជាប្រព័ន្ធ និងការដោះស្រាយបញ្ហាជាក់ស្តែង។',
      foundation: 'មូលដ្ឋានគ្រឹះ', infrastructure: 'ហេដ្ឋារចនាសម្ព័ន្ធ', development: 'ការអភិវឌ្ឍ',
      supportCardTitle: 'ប្រព័ន្ធ IT និងជំនួយបច្ចេកទេស', networkCardTitle: 'បណ្តាញ និងការតភ្ជាប់', codeCardTitle: 'កូដ ទិន្នន័យ និង AI',
      supportCardDesc: 'ស្វែងយល់ពីប្រព័ន្ធកុំព្យូទ័រ បញ្ហាបច្ចេកទេសទូទៅ និងវិធីសាស្ត្រពិនិត្យរកមូលហេតុ និងដោះស្រាយបញ្ហា។',
      networkCardDesc: 'សិក្សាមូលដ្ឋាន LAN អាសយដ្ឋាន IP ការកំណត់ Switch, Router និងការដោះស្រាយបញ្ហាបណ្តាញ។',
      codeCardDesc: 'កសាងជំនាញមូលដ្ឋានលើ Python, SQL ការវិភាគទិន្នន័យ និងការស្រាវជ្រាវបច្ចេកវិទ្យា AI ដែលមានប្រយោជន៍។',
      exploreFocus: 'ស្វែងយល់បន្ថែម <span aria-hidden="true">→</span>',
      principlesEyebrow: '<span class="eyebrow-line"></span> គោលការណ៍នៃការរៀនរបស់ខ្ញុំ',
      principlesTitle: 'មូលដ្ឋានគ្រឹះរឹងមាំ។<br><em>ការគិតបែបអនុវត្ត។</em>',
      principlesIntro: 'ការងារបច្ចេកវិទ្យាល្អចាប់ផ្តើមពីការយល់បញ្ហា។ ខ្ញុំចង់រៀនមូលដ្ឋានឱ្យច្បាស់ សាកល្បងគំនិតដោយប្រុងប្រយ័ត្ន និងកែលម្អតាមរយៈការអនុវត្ត។',
      myApproach: 'របៀបធ្វើការរបស់ខ្ញុំ <span aria-hidden="true">→</span>', understand: 'ស្វែងយល់', build: 'បង្កើត', improve: 'កែលម្អ',
      understandDesc: 'បំបែកបញ្ហាជាផ្នែកតូចៗ ហើយសួរថា តើមានអ្វីកើតឡើង និងហេតុអ្វី?',
      buildDesc: 'យកគំនិតទៅអនុវត្តតាមរយៈការកំណត់រចនាសម្ព័ន្ធ ការសរសេរកូដ និងការសាកល្បង។',
      improveDesc: 'សាកល្បងដោយប្រុងប្រយ័ត្ន គិតពីសុវត្ថិភាព កត់ត្រាលទ្ធផល និងបន្តរៀន។',
      technologyIt: '<span class="eyebrow-line"></span> បច្ចេកវិទ្យា និង IT', technicalFocusTitle: 'ផ្នែកជំនាញ<em>បច្ចេកទេស</em>',
      technicalFocusIntro: 'មុខវិជ្ជាដែលខ្ញុំកំពុងរៀន អនុវត្ត និងចង់អភិវឌ្ឍជំនាញបន្ថែម។',
      helpdeskImageAlt: 'រូបភាពបង្ហាញពីជំនួយបច្ចេកទេស IT និង Help Desk', pythonLogoAlt: 'និមិត្តសញ្ញាភាសាសរសេរកម្មវិធី Python', networkImageAlt: 'រូបភាពបង្ហាញពី Server និងហេដ្ឋារចនាសម្ព័ន្ធបណ្តាញ',
      focusSupportTitle: 'ជំនួយ IT និង Help Desk', focusNetworkTitle: 'បណ្តាញកុំព្យូទ័រ', focusCyberTitle: 'មូលដ្ឋានសន្តិសុខសាយប័រ',
      focusPythonTitle: 'ការសរសេរកម្មវិធី Python', focusSqlTitle: 'SQL និងការវិភាគទិន្នន័យ', focusAiTitle: 'AI និងការស្រាវជ្រាវបច្ចេកវិទ្យា',
      focusSupportDesc: 'រៀបចំកុំព្យូទ័រ មូលដ្ឋានប្រព័ន្ធប្រតិបត្តិការ ជំនួយអ្នកប្រើប្រាស់ ដោះស្រាយបញ្ហា និងកត់ត្រាបញ្ហា។',
      focusNetworkDesc: 'មូលដ្ឋានបណ្តាញ អាសយដ្ឋាន IP ការកំណត់ Switch និង Router ព្រមទាំងការវិភាគបញ្ហាការតភ្ជាប់។',
      focusCyberDesc: 'ការយល់ដឹងអំពីសុវត្ថិភាព ការវិភាគការគំរាមកំហែង ភាពងាយរងគ្រោះ និងការអនុវត្តប្រកបដោយសុវត្ថិភាព។',
      focusPythonDesc: 'មូលដ្ឋានសរសេរកម្មវិធី ការគិតតាមតក្កវិជ្ជា ការបំបែកបញ្ហា និងស្វ័យប្រវត្តិកម្មកម្រិតដំបូង។',
      focusSqlDesc: 'គំនិតអំពីមូលដ្ឋានទិន្នន័យ សំណួរ SQL ការរៀបចំព័ត៌មាន និងការបកស្រាយទិន្នន័យមានរចនាសម្ព័ន្ធ។',
      focusAiDesc: 'ស្វែងយល់ពីឧបករណ៍ AI បច្ចេកវិទ្យាថ្មីៗ វាយតម្លៃព័ត៌មាន និងចែករំលែកចំណេះដឹង។',
      learnMore: 'ស្វែងយល់បន្ថែម <span aria-hidden="true">→</span>',
      disclaimer: '<span aria-hidden="true">*</span> ទាំងនេះជាផ្នែកសិក្សា និងអនុវត្ត មិនមែនជាការអះអាងអំពីវិញ្ញាបនបត្រវិជ្ជាជីវៈ ឬការធានាសេវាកម្មពាណិជ្ជកម្មទេ។',
      learningLab: 'មន្ទីរពិសោធន៍សិក្សា', handsOnPractice: '០១ — ការអនុវត្តផ្ទាល់', networkConfiguration: 'ការកំណត់រចនាសម្ព័ន្ធបណ្តាញ',
      networkExplain: 'Router៖ ភ្ជាប់បណ្តាញផ្សេងៗ · Switch៖ ភ្ជាប់ឧបករណ៍ក្នុង LAN · PC៖ កុំព្យូទ័រអ្នកប្រើប្រាស់',
      learnByDoing: '<span class="eyebrow-line"></span> រៀនតាមរយៈការអនុវត្ត',
      conceptsToPractice: 'ពីគំនិត<br>ទៅជា<em>ការអនុវត្តពិត។</em>',
      practiceIntro: 'ការរៀនមានន័យកាន់តែច្បាស់នៅពេលអាចយកទៅអនុវត្តបាន។ ខ្ញុំចាប់អារម្មណ៍លើ Lab ជាក់ស្តែង ការកំណត់រចនាសម្ព័ន្ធជាជំហានៗ និងការសាកល្បងប្រព័ន្ធ។',
      networkStep1: 'រៀបចំផែនការបណ្តាញ និងយល់ពីរចនាសម្ព័ន្ធ Topology។', networkStep2: 'កំណត់រចនាសម្ព័ន្ធឧបករណ៍ និងផ្ទៀងផ្ទាត់ការតភ្ជាប់។', networkStep3: 'ស្វែងរកមូលហេតុ កត់ត្រា និងកែលម្អការរៀបចំ។',
      seeApproach: 'មើលរបៀបធ្វើការរបស់ខ្ញុំ <span aria-hidden="true">→</span>',
      howIWork: '<span class="eyebrow-line"></span> របៀបគិត និងធ្វើការរបស់ខ្ញុំ', betterSolutionsTitle: 'ដំណើរការច្បាស់លាស់ ដើម្បីរក<em>ដំណោះស្រាយល្អជាង</em>',
      betterSolutionsIntro: 'វដ្តការងារសាមញ្ញមួយដែលជួយដល់ការវិភាគប្រកបដោយការប្រុងប្រយ័ត្ន និងការកែលម្អជាបន្តបន្ទាប់។', analyze: 'វិភាគ', implement: 'អនុវត្ត', evaluate: 'វាយតម្លៃ',
      analyzeDesc: 'កំណត់បញ្ហា ប្រមូលភស្តុតាង និងស្វែងរកមូលហេតុដែលអាចកើតមាន។',
      implementDesc: 'ជ្រើសរើសដំណោះស្រាយសមស្រប ហើយអនុវត្តដោយមានការគ្រប់គ្រង។',
      evaluateDesc: 'សាកល្បងលទ្ធផល ពិនិត្យហានិភ័យ និងកត់ត្រាចំណុចដែលអាចកែលម្អ។',
      personalPrinciple: '<span class="eyebrow-line"></span> គោលការណ៍ផ្ទាល់ខ្លួន',
      personalQuote: 'បច្ចេកវិទ្យាមិនមែនគ្រាន់តែដឹងពីរបៀបប្រើឧបករណ៍ប៉ុណ្ណោះទេ។ វាជាការយល់ពីបញ្ហា ការគិតពិចារណា និងការប្រើចំណេះដឹងដើម្បីបង្កើតអ្វីដែលមានប្រយោជន៍។',
      quoteTagline: 'ការរៀន · បច្ចេកវិទ្យា · ការរីកចម្រើន', connectCollaborate: '<span class="eyebrow-line"></span> ភ្ជាប់ទំនាក់ទំនង និងសហការ',
      contactTitle: 'ពិភាក្សាអំពី<br><em>បច្ចេកវិទ្យា។</em>',
      contactIntro: 'តើអ្នកចាប់អារម្មណ៍លើការផ្លាស់ប្តូរគំនិត ការរៀនជាមួយគ្នា ឬការពិភាក្សាអំពី IT ដែរឬទេ? អ្នកអាចផ្ញើសារតាមរយៈទម្រង់នេះ។',
      openToCollaboration: 'បើកចិត្តសម្រាប់ការរៀន និងសហការ', contactTopics: 'IT · បណ្តាញ · សន្តិសុខសាយប័រ · កម្មវិធី · ទិន្នន័យ · AI',
      sendMessage: 'ផ្ញើសារ', contactFormIndex: '០១ / ទំនាក់ទំនង', copyright: 'HEAN។ រក្សាសិទ្ធិគ្រប់យ៉ាង។', yourName: 'ឈ្មោះរបស់អ្នក', emailAddress: 'អាសយដ្ឋានអ៊ីមែល', topic: 'ប្រធានបទ', message: 'សារ',
      namePlaceholder: 'បញ្ចូលឈ្មោះរបស់អ្នក', emailPlaceholder: 'you@example.com', messagePlaceholder: 'តើយើងអាចភ្ជាប់ទំនាក់ទំនងគ្នាដូចម្តេច?',
      selectTopic: 'ជ្រើសរើសប្រធានបទ', topicSupport: 'ជំនួយ IT និង Help Desk', topicNetwork: 'បណ្តាញកុំព្យូទ័រ', topicCyber: 'សន្តិសុខសាយប័រ',
      topicPython: 'Python និងការសរសេរកម្មវិធី', topicSql: 'SQL និងការវិភាគទិន្នន័យ', topicAi: 'AI និងការស្រាវជ្រាវបច្ចេកវិទ្យា', topicOther: 'ផ្សេងៗ / ការសហការ',
      prepareMessage: 'រៀបចំសារ <span aria-hidden="true">→</span>',
      formDemoNotice: 'ទម្រង់សាកល្បង៖ វាមិនផ្ញើ ឬរក្សាទុកសារទេ រហូតដល់មានការភ្ជាប់សេវាអ៊ីមែល ឬសេវាទម្រង់បែបបទ។',
      footerBrandDesc: 'ការចង់ដឹង ការគិតពិចារណា និងការរៀនបច្ចេកវិទ្យាតាមការអនុវត្ត។', quickNavigation: 'តំណភ្ជាប់រហ័ស',
      technicalFocusFooter: 'ជំនាញបច្ចេកទេស', connectFooter: 'ទំនាក់ទំនង', footerAbout: 'អំពី Hean', footerTechnicalFocus: 'ជំនាញបច្ចេកទេស',
      footerApproach: 'របៀបធ្វើការរបស់ខ្ញុំ', footerContact: 'ទំនាក់ទំនង', footerSupport: 'ជំនួយ IT', footerNetworking: 'បណ្តាញកុំព្យូទ័រ',
      footerCybersecurity: 'សន្តិសុខសាយប័រ', footerPythonData: 'Python និងទិន្នន័យ', footerLocation: 'ភ្នំពេញ ប្រទេសកម្ពុជា',
      footerContactHelp: 'សម្រាប់ការសហការ សូមប្រើទម្រង់ទំនាក់ទំនង។', footerSendMessage: 'ផ្ញើសារ <span aria-hidden="true">↗</span>',
      footerClosing: 'បង្កើតឡើងដោយការចង់ដឹង និងគោលបំណងច្បាស់លាស់។', backToTop: 'ត្រឡប់ទៅខាងលើ ↑',
      networkLabelRouter: 'រ៉ោតទ័រ', networkLabelSwitch: 'ស្វ៊ីច', networkLabelClient: 'ឧបករណ៍អ្នកប្រើ',
      mainNavigation: 'ម៉ឺនុយមេ', chooseLanguage: 'ជ្រើសរើសភាសា', switchToEnglish: 'ប្តូរទៅភាសាអង់គ្លេស', switchToKhmer: 'ប្តូរទៅភាសាខ្មែរ', heroSlides: 'ស្លាយណែនាំ',
      askSupport: 'សួរអំពីជំនួយ IT និង Help Desk', askNetwork: 'សួរអំពីបណ្តាញកុំព្យូទ័រ', askCyber: 'សួរអំពីមូលដ្ឋានសន្តិសុខសាយប័រ',
      askPython: 'សួរអំពីការសរសេរកម្មវិធី Python', askSql: 'សួរអំពី SQL និងការវិភាគទិន្នន័យ', askAi: 'សួរអំពី AI និងការស្រាវជ្រាវបច្ចេកវិទ្យា',
      menuOpen: 'បើកម៉ឺនុយ', menuClose: 'បិទម៉ឺនុយ', formThanks: 'អរគុណ {name}។ ទម្រង់សាកល្បងនេះមិនផ្ញើ ឬរក្សាទុកសារទេ។ សូមភ្ជាប់សេវាអ៊ីមែល ឬទម្រង់បែបបទ ដើម្បីទទួលសារបាន។'
    }
  };

  const getLanguage = () => {
    try { return localStorage.getItem('hean-language') === 'km' ? 'km' : 'en'; }
    catch { return 'en'; }
  };
  let currentLanguage = getLanguage();
  const formFeedback = document.getElementById('form-feedback');
  let formHasSubmitted = false;
  let submittedName = '';

  function translate(language) {
    currentLanguage = language === 'km' ? 'km' : 'en';
    const dictionary = translations[currentLanguage];
    document.documentElement.lang = currentLanguage;
    document.title = dictionary.pageTitle;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', dictionary.pageDescription);
    document.body.classList.toggle('lang-km', currentLanguage === 'km');

    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.dataset.i18n;
      if (Object.prototype.hasOwnProperty.call(dictionary, key)) element.innerHTML = dictionary[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
      const key = element.dataset.i18nPlaceholder;
      if (dictionary[key]) element.setAttribute('placeholder', dictionary[key]);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(element => {
      const key = element.dataset.i18nAria;
      if (dictionary[key]) element.setAttribute('aria-label', dictionary[key]);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(element => {
      const key = element.dataset.i18nAlt;
      if (dictionary[key]) element.setAttribute('alt', dictionary[key]);
    });
    document.querySelectorAll('.language-button').forEach(button => {
      const active = button.dataset.language === currentLanguage;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
      const labelKey = button.dataset.language === 'en' ? 'switchToEnglish' : 'switchToKhmer';
      button.setAttribute('aria-label', dictionary[labelKey]);
    });
    const languageGroup = document.querySelector('.language-switch');
    if (languageGroup) languageGroup.setAttribute('aria-label', dictionary.chooseLanguage);
    const menuButton = document.querySelector('.menu-toggle');
    if (menuButton) {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-label', dictionary[isOpen ? 'menuClose' : 'menuOpen']);
    }
    const nav = document.querySelector('.primary-navigation');
    if (nav) nav.setAttribute('aria-label', dictionary.mainNavigation);
    const slideControls = document.querySelector('.slider-controls');
    if (slideControls) slideControls.setAttribute('aria-label', dictionary.heroSlides);
    if (formFeedback) formFeedback.textContent = formHasSubmitted
      ? dictionary.formThanks.replace('{name}', submittedName)
      : dictionary.formDemoNotice;
    updateOrbisLanguage();
    try { localStorage.setItem('hean-language', currentLanguage); } catch { /* Storage may be unavailable in private browsing. */ }
  }

  document.querySelectorAll('.language-button').forEach(button => {
    button.addEventListener('click', () => translate(button.dataset.language));
  });

  // Mobile navigation.
  const menuToggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.primary-navigation');
  const dropdownGroups = [...document.querySelectorAll('.nav-group')];

  if (menuToggle && navigation) {
    menuToggle.addEventListener('click', () => {
      const open = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!open));
      navigation.classList.toggle('is-open', !open);
      menuToggle.setAttribute('aria-label', translations[currentLanguage][open ? 'menuOpen' : 'menuClose']);
    });

    navigation.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navigation.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', translations[currentLanguage].menuOpen);
      });
    });
  }

  function closeDropdowns(except) {
    dropdownGroups.forEach(group => {
      if (group === except) return;
      group.querySelector('.nav-dropdown').setAttribute('aria-expanded', 'false');
      group.querySelector('.dropdown-panel').classList.remove('is-open');
    });
  }
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeDropdowns(); });
  document.addEventListener('click', event => {
    const inside = dropdownGroups.find(group => group.contains(event.target));
    closeDropdowns(inside);
  });
  dropdownGroups.forEach(group => {
    const toggle = group.querySelector('.nav-dropdown');
    const panel = group.querySelector('.dropdown-panel');
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      panel.classList.toggle('is-open', !open);
    });
    panel.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeDropdowns()));
  });

  // Hero slider.
  const slides = [...document.querySelectorAll('.hero-slide')];
  const dots = [...document.querySelectorAll('.slider-dot')];
  const currentSlide = document.getElementById('current-slide');
  let activeSlide = 0;
  let slideTimer;

  function showSlide(index) {
    if (!slides.length) return;
    activeSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle('is-active', i === activeSlide));
    dots.forEach((dot, i) => {
      dot.classList.toggle('is-active', i === activeSlide);
      dot.setAttribute('aria-pressed', String(i === activeSlide));
      dot.setAttribute('aria-label', translations[currentLanguage][`slideLabel${i + 1}`]);
    });
    if (currentSlide) currentSlide.textContent = String(activeSlide + 1).padStart(2, '0');
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const slideRegion = document.querySelector('.hero-slides');
  const heroContent = document.querySelector('.hero-content');

  function stopSlider() { window.clearInterval(slideTimer); }
  function restartSlider() {
    stopSlider();
    if (reduceMotion) return;
    slideTimer = window.setInterval(() => showSlide(activeSlide + 1), 6500);
  }
  // Auto-rotation should not interrupt reading or flood screen readers.
  if (slideRegion) slideRegion.setAttribute('aria-live', 'off');
  if (heroContent) {
    heroContent.addEventListener('mouseenter', stopSlider);
    heroContent.addEventListener('focusin', stopSlider);
    heroContent.addEventListener('mouseleave', restartSlider);
    heroContent.addEventListener('focusout', restartSlider);
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      showSlide(Number(dot.dataset.goTo));
      restartSlider();
    });
  });
  if (slides.length > 1) restartSlider();

  // Contact form is intentionally a local demo until an endpoint is connected.
  const form = document.getElementById('contact-form');
  if (form && formFeedback) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      submittedName = String(data.get('name') || '').trim();
      formFeedback.textContent = translations[currentLanguage].formThanks.replace('{name}', submittedName);
      formHasSubmitted = true;
    });
  }

  // Orbis is a lightweight, local portfolio guide. It does not call a remote AI service.
  const orbisCopy = {
    en: {
      title: 'Orbis · Portfolio Guide', status: 'Here to guide you around', launcher: 'Ask Orbis',
      openLabel: 'Open Orbis assistant', closeLabel: 'Close assistant', sendLabel: 'Send message',
      input: 'Type your question…', footnote: 'Local portfolio guide · No live AI connection',
      welcome: 'Greetings! I’m Orbis. I can show you around Hean’s technology portfolio. What would you like to explore?',
      prompts: { about: 'About Hean', skills: 'Technical focus', approach: 'Learning approach', contact: 'Contact Hean' },
      explore: 'Explore this section →',
      answers: {
        hello: 'Hello! I’m Orbis, your portfolio guide. Ask me about Hean, IT topics, the learning approach, or how to get in touch.',
        about: 'Hean is building a practical IT profile focused on understanding systems, solving real problems, and sharing knowledge. This portfolio introduces his learning interests and hands-on work.',
        skills: 'Hean is exploring IT Support & Help Desk, Computer Networking, Cybersecurity Fundamentals, Python Programming, SQL & Data Analysis, and AI & Technology Research.',
        support: 'The IT Support area covers computer setup, operating-system basics, user support, troubleshooting, and documenting technical issues.',
        network: 'The networking focus includes LAN fundamentals, IP addressing, switch and router configuration, connectivity checks, and troubleshooting.',
        cyber: 'The cybersecurity focus includes security awareness, threat analysis, vulnerability concepts, safe practices, and secure thinking.',
        python: 'The Python focus is on programming fundamentals, logical thinking, breaking problems into smaller steps, and beginner-level automation.',
        data: 'The data area explores database concepts, SQL queries, organizing information, and interpreting structured data.',
        ai: 'Hean is exploring AI tools and emerging technologies, evaluating information, and sharing useful knowledge.',
        approach: 'Hean follows a practical cycle: analyze the problem and evidence, implement a sensible solution, then evaluate the result, document it, and improve.',
        contact: 'Use the Contact section to prepare a message for Hean. The current form is a front-end demo; it does not send or store messages until an email or form service is connected.',
        fallback: 'I can help you explore this portfolio. Try asking about Hean, technical focus, networking, cybersecurity, Python, data, AI, the learning approach, or contact details.'
      }
    },
    km: {
      title: 'Orbis · ជំនួយការប្រវត្តិរូប', status: 'ខ្ញុំនៅទីនេះដើម្បីជួយអ្នក', launcher: 'សួរ Orbis',
      openLabel: 'បើកជំនួយការ Orbis', closeLabel: 'បិទជំនួយការ', sendLabel: 'ផ្ញើសារ',
      input: 'វាយសំណួររបស់អ្នក…', footnote: 'ជំនួយការក្នុងគេហទំព័រ · មិនភ្ជាប់ AI ផ្ទាល់ទេ',
      welcome: 'ជំរាបសួរ! ខ្ញុំឈ្មោះ Orbis។ ខ្ញុំអាចជួយណែនាំអ្នកអំពីប្រវត្តិរូបបច្ចេកវិទ្យារបស់ Hean។ តើអ្នកចង់ស្វែងយល់អំពីអ្វី?',
      prompts: { about: 'អំពី Hean', skills: 'ជំនាញបច្ចេកទេស', approach: 'របៀបរៀន និងធ្វើការ', contact: 'ទំនាក់ទំនង Hean' },
      explore: 'ស្វែងយល់ពីផ្នែកនេះ →',
      answers: {
        hello: 'ជំរាបសួរ! ខ្ញុំឈ្មោះ Orbis ជាជំនួយការណែនាំក្នុងគេហទំព័រនេះ។ អ្នកអាចសួរអំពី Hean ជំនាញ IT របៀបរៀន ឬការទំនាក់ទំនង។',
        about: 'Hean កំពុងកសាងប្រវត្តិរូបជំនាញ IT ដែលផ្តោតលើការយល់ដឹងអំពីប្រព័ន្ធ ការដោះស្រាយបញ្ហាជាក់ស្តែង និងការចែករំលែកចំណេះដឹង។ គេហទំព័រនេះបង្ហាញពីចំណាប់អារម្មណ៍ និងការអនុវត្តរបស់គាត់។',
        skills: 'Hean កំពុងសិក្សា និងអភិវឌ្ឍជំនាញលើ IT Support និង Help Desk បណ្តាញកុំព្យូទ័រ សន្តិសុខសាយប័រ Python, SQL ការវិភាគទិន្នន័យ និងការស្រាវជ្រាវ AI។',
        support: 'ផ្នែក IT Support រួមមានការរៀបចំកុំព្យូទ័រ មូលដ្ឋានប្រព័ន្ធប្រតិបត្តិការ ជំនួយអ្នកប្រើប្រាស់ ការដោះស្រាយបញ្ហា និងការកត់ត្រាបញ្ហាបច្ចេកទេស។',
        network: 'ផ្នែកបណ្តាញរួមមានមូលដ្ឋាន LAN អាសយដ្ឋាន IP ការកំណត់ Switch និង Router ការផ្ទៀងផ្ទាត់ការតភ្ជាប់ និងការស្វែងរកមូលហេតុនៃបញ្ហា។',
        cyber: 'ផ្នែកសន្តិសុខសាយប័ររួមមានការយល់ដឹងអំពីសុវត្ថិភាព ការវិភាគការគំរាមកំហែង ភាពងាយរងគ្រោះ និងការអនុវត្តប្រកបដោយសុវត្ថិភាព។',
        python: 'ផ្នែក Python ផ្តោតលើមូលដ្ឋានសរសេរកម្មវិធី ការគិតតាមតក្កវិជ្ជា ការបំបែកបញ្ហាជាជំហានតូចៗ និងស្វ័យប្រវត្តិកម្មកម្រិតដំបូង។',
        data: 'ផ្នែកទិន្នន័យរួមមានគំនិតមូលដ្ឋានទិន្នន័យ សំណួរ SQL ការរៀបចំព័ត៌មាន និងការបកស្រាយទិន្នន័យមានរចនាសម្ព័ន្ធ។',
        ai: 'Hean កំពុងស្វែងយល់អំពីឧបករណ៍ AI បច្ចេកវិទ្យាថ្មីៗ ការវាយតម្លៃព័ត៌មាន និងការចែករំលែកចំណេះដឹងដែលមានប្រយោជន៍។',
        approach: 'Hean ប្រើដំណើរការអនុវត្តជាបីជំហាន៖ វិភាគបញ្ហា និងភស្តុតាង អនុវត្តដំណោះស្រាយសមស្រប បន្ទាប់មកវាយតម្លៃលទ្ធផល កត់ត្រា និងកែលម្អ។',
        contact: 'សូមចូលទៅផ្នែកទំនាក់ទំនង ដើម្បីរៀបចំសារទៅកាន់ Hean។ ទម្រង់បច្ចុប្បន្នគ្រាន់តែជាគំរូនៅលើគេហទំព័រ ហើយមិនផ្ញើ ឬរក្សាទុកសារទេ រហូតដល់មានការភ្ជាប់សេវាអ៊ីមែល ឬសេវាទម្រង់បែបបទ។',
        fallback: 'ខ្ញុំអាចជួយណែនាំអ្នកអំពីគេហទំព័រនេះ។ សូមសួរអំពី Hean ជំនាញបច្ចេកទេស បណ្តាញ សន្តិសុខសាយប័រ Python ទិន្នន័យ AI របៀបរៀន ឬការទំនាក់ទំនង។'
      }
    }
  };

  const orbisPanel = document.getElementById('orbis-panel');
  const orbisLauncher = document.getElementById('orbis-launcher');
  const orbisClose = document.getElementById('orbis-close');
  const orbisMessages = document.getElementById('orbis-messages');
  const orbisForm = document.getElementById('orbis-form');
  const orbisInput = document.getElementById('orbis-input');
  const orbisWelcome = document.querySelector('#orbis-welcome p');
  let orbisHasConversation = false;


  const orbisReduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const orbisLabels = {
    en: { about: 'About Hean', skills: 'Technical focus', approach: 'Learning approach', contact: 'Contact Hean', java: 'Java & languages', python: 'Python', cyber: 'Cybersecurity', network: 'Networking', support: 'IT Support', data: 'SQL & Data', ai: 'AI research', languages: 'All languages' },
    km: { about: 'អំពី Hean', skills: 'ការផ្តោតបច្ចេកទេស', approach: 'របៀបរៀន', contact: 'ទំនាក់ទំនង', java: 'Java និងភាសាកូដ', python: 'Python', cyber: 'សុវត្ថិភាព', network: 'បណ្តាញ', support: 'ជំនួយ IT', data: 'SQL និងទិន្នន័យ', ai: 'ស្រាវជ្រាវ AI', languages: 'ភាសាទាំងអស់' }
  };
  const orbisFollow = { about: ['skills', 'approach', 'contact'], skills: ['java', 'cyber', 'python'], support: ['network', 'cyber', 'contact'], network: ['cyber', 'support', 'contact'], cyber: ['network', 'python', 'contact'], python: ['java', 'data', 'contact'], data: ['python', 'ai', 'contact'], ai: ['skills', 'approach', 'contact'], approach: ['skills', 'java', 'contact'], contact: ['about', 'skills', 'java'], java: ['python', 'approach', 'contact'], languages: ['java', 'python', 'contact'], hello: ['about', 'skills', 'java'], fallback: ['about', 'skills', 'contact'] };
  orbisCopy.en.answers.java = 'Java is one of the languages Hean is learning: object-oriented thinking, classes, inheritance, collections, and writing clean, reusable programs. It sits in the Languages section next to Python, JavaScript, C/C++, HTML & CSS, SQL and Shell.';
  orbisCopy.km.answers.java = 'Java គឺជាភាសាមួយដែល Hean កំពុងរៀន៖ គំនិតតម្រង់ទិសវត្ថុ class, inheritance, collections និងការសរសេរកម្មវិធីស្អាត ងាយប្រើឡើងវិញ។ វាស្ថិតក្នុងផ្នែកភាសាកូដ រួមជាមួយ Python, JavaScript, C/C++, HTML & CSS, SQL និង Shell។';
  orbisCopy.en.answers.languages = 'Hean is learning Java, Python, JavaScript, C/C++, HTML & CSS, SQL, and Shell & Linux. Each one has a different job: building, automating, making websites interactive, and working close to the machine.';
  orbisCopy.km.answers.languages = 'Hean កំពុងរៀន Java, Python, JavaScript, C/C++, HTML & CSS, SQL និង Shell & Linux។ ភាសានីមួយៗមានតួនាទីផ្សេងគ្នា៖ បង្កើត ស្វ័យប្រវត្តិកម្ម ធ្វើឱ្យគេហទំព័រមានអន្តរកម្ម និងធ្វើការជិតម៉ាស៊ីន។';
  orbisCopy.en.prompts.java = orbisLabels.en.java; orbisCopy.km.prompts.java = orbisLabels.km.java;

  function updateOrbisLanguage() {
    const copy = orbisCopy[currentLanguage] || orbisCopy.en;
    const title = document.getElementById('orbis-title');
    const status = document.getElementById('orbis-status');
    const launcherLabel = document.getElementById('orbis-launcher-label');
    const footnote = document.getElementById('orbis-footnote');
    const sendButton = document.getElementById('orbis-send');
    if (!orbisPanel) return;
    if (title) title.textContent = copy.title;
    if (status) status.textContent = copy.status;
    if (launcherLabel) launcherLabel.textContent = copy.launcher;
    if (footnote) footnote.textContent = copy.footnote;
    if (orbisInput) orbisInput.placeholder = copy.input;
    if (orbisInput) orbisInput.setAttribute('aria-label', copy.input);
    if (sendButton) sendButton.setAttribute('aria-label', copy.sendLabel);
    if (orbisClose) orbisClose.setAttribute('aria-label', copy.closeLabel);
    if (orbisLauncher) orbisLauncher.setAttribute('aria-label', copy.openLabel);
    if (orbisWelcome && !orbisHasConversation) orbisWelcome.textContent = copy.welcome;
    document.querySelectorAll('[data-orbis-question]').forEach(button => {
      const key = button.dataset.orbisQuestion;
      if (copy.prompts[key]) button.textContent = copy.prompts[key];
    });
  }

  let orbisCloseTimer, orbisWelcomed = false;
  function orbisScroll() { if (orbisMessages) orbisMessages.scrollTo({ top: orbisMessages.scrollHeight, behavior: orbisReduce ? 'auto' : 'smooth' }); }
  function streamOrbis(p, text, done) {
    const parts = (window.Intl && Intl.Segmenter) ? Array.from(new Intl.Segmenter(currentLanguage === 'km' ? 'km' : 'en', { granularity: 'word' }).segment(text), x => x.segment) : text.split(/(\s+)/);
    if (orbisReduce) { p.textContent = text; if (done) done(); return; }
    p.textContent = ''; p.classList.add('streaming'); let i = 0;
    (function step() {
      if (i < parts.length) { p.textContent += parts[i++]; orbisScroll(); setTimeout(step, 24 + Math.random() * 30); }
      else { p.classList.remove('streaming'); if (done) done(); }
    })();
  }
  function setOrbisOpen(open) {
    if (!orbisPanel || !orbisLauncher) return;
    clearTimeout(orbisCloseTimer);
    orbisLauncher.setAttribute('aria-expanded', String(open));
    orbisPanel.setAttribute('aria-hidden', String(!open));
    if (open) {
      orbisPanel.hidden = false; orbisPanel.classList.remove('is-closing');
      if (!orbisWelcomed && !orbisHasConversation && orbisWelcome) { orbisWelcomed = true; const t = orbisWelcome.textContent; setTimeout(() => streamOrbis(orbisWelcome, t), 380); }
      window.setTimeout(() => orbisInput && orbisInput.focus(), 160);
    } else {
      orbisPanel.classList.add('is-closing');
      orbisCloseTimer = setTimeout(() => { orbisPanel.hidden = true; orbisPanel.classList.remove('is-closing'); }, orbisReduce ? 0 : 240);
      orbisLauncher.focus();
    }
  }

  function addOrbisMessage(message, sender, target) {
    const item = document.createElement('div');
    item.className = `orbis-message ${sender === 'user' ? 'orbis-message-user' : 'orbis-message-bot'}`;
    const paragraph = document.createElement('p');
    paragraph.textContent = message;
    item.appendChild(paragraph);
    if (target) {
      const link = document.createElement('a');
      link.href = `#${target}`;
      link.textContent = (orbisCopy[currentLanguage] || orbisCopy.en).explore;
      item.appendChild(link);
    }
    orbisMessages.appendChild(item);
    orbisMessages.scrollTop = orbisMessages.scrollHeight;
    return item;
  }

  function getOrbisTopic(question, requestedTopic) {
    if (requestedTopic) return requestedTopic;
    const value = String(question || '').toLowerCase();
    if (/\b(hi|hello|hey|greetings)\b|សួស្តី|ជំរាបសួរ/.test(value)) return 'hello';
    if (/\b(contact|email|message|collaborat|reach)\b|ទំនាក់ទំនង|អ៊ីមែល|ផ្ញើសារ/.test(value)) return 'contact';
    if (/\b(network|router|switch|lan|ip address|wifi|connectivity)\b|បណ្តាញ|រ៉ោតទ័រ|ស្វ៊ីច|អាសយដ្ឋាន ip/.test(value)) return 'network';
    if (/\b(cyber|security|secure|threat|vulnerab)\b|សន្តិសុខ|សុវត្ថិភាព|ការគំរាមកំហែង/.test(value)) return 'cyber';
    if (/\b(java|spring|oop|object.oriented)\b|ចាវ៉ា/.test(value) && !/javascript/.test(value)) return 'java';
    if (/\b(languages?|javascript|c\+\+|html|css|shell|linux|bash)\b|ភាសាកូដ/.test(value)) return 'languages';
    if (/\b(python|programming|coding|code)\b|ភាសា python|សរសេរកម្មវិធី|សរសេរកូដ/.test(value)) return 'python';
    if (/\b(sql|database|data analysis|data)\b|ទិន្នន័យ|មូលដ្ឋានទិន្នន័យ/.test(value)) return 'data';
    if (/\b(ai|artificial intelligence|technology research)\b|បញ្ញាសិប្បនិម្មិត|ស្រាវជ្រាវបច្ចេកវិទ្យា/.test(value)) return 'ai';
    if (/\b(help ?desk|it support|troubleshoot|computer support)\b|ជំនួយ it|ដោះស្រាយបញ្ហា/.test(value)) return 'support';
    if (/\b(approach|process|learn|learning|think|improve|problem.solving)\b|របៀបរៀន|រៀន|វិភាគ|អនុវត្ត|វាយតម្លៃ/.test(value)) return 'approach';
    if (/\b(about|who|hean|profile|portfolio)\b|អំពី|ហេន|ប្រវត្តិរូប/.test(value)) return 'about';
    if (/\b(skill|focus|what do you study|study|expertise)\b|ជំនាញ|សិក្សា|រៀនអ្វី/.test(value)) return 'skills';
    return 'fallback';
  }

  function answerOrbis(question, requestedTopic) {
    const copy = orbisCopy[currentLanguage] || orbisCopy.en;
    const topic = getOrbisTopic(question, requestedTopic);
    const targets = {
      about: 'about', skills: 'focus', support: 'focus-support', network: 'focus-network',
      cyber: 'focus-cyber', python: 'focus-python', data: 'focus', ai: 'focus',
      approach: 'approach', contact: 'contact', java: 'languages', languages: 'languages'
    };
    return { text: copy.answers[topic] || copy.answers.fallback, target: targets[topic] || null, topic: topic };
  }

  function askOrbis(question, requestedTopic) {
    const q = String(question || '').trim();
    if (!q) return;
    const km = currentLanguage === 'km';
    orbisHasConversation = true;
    orbisMessages.querySelectorAll('.orbis-followups').forEach(el => el.remove());
    const starters = document.getElementById('orbis-suggestions'); if (starters) starters.classList.add('is-hidden');
    addOrbisMessage(q, 'user');
    const think = document.createElement('div');
    think.className = 'orbis-message orbis-message-bot orbis-thinking';
    think.innerHTML = '<span class="dots"><i></i><i></i><i></i></span><span class="shimmer">' + (km ? 'កំពុងគិត…' : 'Thinking…') + '</span>';
    orbisMessages.appendChild(think); orbisScroll();
    if (orbisInput) orbisInput.disabled = true;
    const answer = answerOrbis(q, requestedTopic);
    setTimeout(() => {
      think.remove();
      const item = addOrbisMessage('', 'bot'); const p = item.querySelector('p');
      streamOrbis(p, answer.text, () => {
        if (answer.target) {
          const link = document.createElement('a'); link.className = 'orbis-go'; link.href = '#' + answer.target;
          link.textContent = (orbisCopy[currentLanguage] || orbisCopy.en).explore; item.appendChild(link);
        }
        const act = document.createElement('div'); act.className = 'orbis-actions';
        act.innerHTML = '<button type="button" data-copy aria-label="Copy">⧉</button><button type="button" data-like aria-label="Like">👍</button>';
        item.appendChild(act);
        const labels = orbisLabels[km ? 'km' : 'en'];
        const fu = document.createElement('div'); fu.className = 'orbis-followups';
        (orbisFollow[answer.topic] || orbisFollow.fallback).forEach((key, n) => {
          const b = document.createElement('button'); b.type = 'button'; b.dataset.follow = key; b.textContent = labels[key]; b.style.setProperty('--n', n); fu.appendChild(b);
        });
        orbisMessages.appendChild(fu); orbisScroll();
        if (orbisInput) { orbisInput.disabled = false; orbisInput.focus(); }
      });
    }, orbisReduce ? 150 : 700 + Math.random() * 500);
  }

  if (orbisMessages) orbisMessages.addEventListener('click', event => {
    const f = event.target.closest('[data-follow]');
    if (f) { askOrbis(orbisLabels[currentLanguage === 'km' ? 'km' : 'en'][f.dataset.follow], f.dataset.follow); return; }
    const c = event.target.closest('[data-copy]');
    if (c) { const text = c.closest('.orbis-message').querySelector('p').textContent; try { navigator.clipboard.writeText(text); } catch (e) {} c.textContent = '✓'; setTimeout(() => { c.textContent = '⧉'; }, 1400); return; }
    const l = event.target.closest('[data-like]'); if (l) l.classList.toggle('on');
  });

  if (orbisLauncher) orbisLauncher.addEventListener('click', () => setOrbisOpen(orbisPanel.hidden));
  if (orbisClose) orbisClose.addEventListener('click', () => setOrbisOpen(false));
  if (orbisForm) orbisForm.addEventListener('submit', event => {
    event.preventDefault();
    if (!orbisInput) return;
    const question = orbisInput.value.trim();
    if (!question) return;
    orbisInput.value = '';
    askOrbis(question);
  });
  document.querySelectorAll('[data-orbis-question]').forEach(button => {
    button.addEventListener('click', () => {
      const key = button.dataset.orbisQuestion;
      const prompt = (orbisCopy[currentLanguage] || orbisCopy.en).prompts[key];
      askOrbis(prompt, key);
    });
  });
  if (orbisMessages) orbisMessages.addEventListener('click', event => {
    if (event.target.closest('a')) setOrbisOpen(false);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && orbisPanel && !orbisPanel.hidden) setOrbisOpen(false);
  });
  updateOrbisLanguage();

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
  translate(currentLanguage);
  showSlide(activeSlide);
})();

/* Keep the original animated dashed links attached from the portrait to each technology icon */
(function () {
  function init() {
    var v = document.querySelector('.hero-visual');
    if (!v) return;
    var core = v.querySelector('.hero-portrait');
    var pairs = [
      ['connection-a', '.hero-tech-chip-network .hero-tech-icon'],
      ['connection-b', '.hero-tech-chip-security .hero-tech-icon'],
      ['connection-c', '.hero-tech-chip-data .hero-tech-icon'],
      ['connection-d', '.hero-tech-chip-code .hero-tech-icon']
    ].map(function (p) {
      return { line: v.querySelector('.' + p[0]), icon: v.querySelector(p[1]) };
    }).filter(function (p) { return p.line && p.icon; });
    if (!core || pairs.length !== 4) return;

    var heroVisible = true;
    var running = false;
    function tick() {
      if (!heroVisible) { running = false; return; }
      var vr = v.getBoundingClientRect();
      var scale = vr.width / (v.offsetWidth || vr.width) || 1;
      var cr = core.getBoundingClientRect();
      var cx = (cr.left + cr.width / 2 - vr.left) / scale;
      var cy = (cr.top + cr.height / 2 - vr.top) / scale;
      pairs.forEach(function (p) {
        var ir = p.icon.getBoundingClientRect();
        var ix = (ir.left + ir.width / 2 - vr.left) / scale;
        var iy = (ir.top + ir.height / 2 - vr.top) / scale;
        var dx = ix - cx;
        var dy = iy - cy;
        p.line.style.left = cx + 'px';
        p.line.style.top = (cy - 1) + 'px';
        p.line.style.width = Math.hypot(dx, dy) + 'px';
        p.line.style.transform = 'rotate(' + (Math.atan2(dy, dx) * 180 / Math.PI) + 'deg)';
      });
      requestAnimationFrame(tick);
    }
    function start() {
      if (!running && heroVisible) { running = true; requestAnimationFrame(tick); }
    }
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        heroVisible = !!entries[0].isIntersecting;
        if (heroVisible) start(); else running = false;
      }).observe(v);
    }
    if ('ResizeObserver' in window) {
      new ResizeObserver(start).observe(v);
    }
    start();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();


/* Scroll progress bar + smooth reveal-on-scroll */
(function () {
  var bar = document.createElement('div'); bar.id = 'scroll-progress'; document.body.appendChild(bar);
  var ticking = false;
  function upd() { var h = document.documentElement; var m = h.scrollHeight - h.clientHeight; bar.style.transform = 'scaleX(' + (m > 0 ? h.scrollTop / m : 0) + ')'; ticking = false; }
  addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(upd); } }, { passive: true }); upd();
  var els = document.querySelectorAll('.section-heading, .focus-card, .update-card, .approach-step, .showcase-panel, .contact-copy, .lang-card, .lang-java');
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) { els.forEach(function (e) { e.classList.add('is-in'); }); return; }
  var seen = new Map();
  els.forEach(function (e) { var n = seen.get(e.parentNode) || 0; seen.set(e.parentNode, n + 1); e.style.setProperty('--i', Math.min(n, 6)); e.classList.add('reveal'); });
  var io = new IntersectionObserver(function (list) { list.forEach(function (en) { if (!en.isIntersecting) return; var t = en.target; t.classList.add('is-in'); io.unobserve(t); setTimeout(function () { t.style.setProperty('--i', 0); }, 1300); }); }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(function (e) { io.observe(e); });
})();

/* Soft spotlight that follows the pointer on cards */
(function () {
  if (matchMedia('(hover: none)').matches) return;
  document.querySelectorAll('.approach-step, .lang-card').forEach(function (c) {
    c.addEventListener('pointermove', function (e) {
      var r = c.getBoundingClientRect();
      c.style.setProperty('--mx', (e.clientX - r.left) + 'px'); c.style.setProperty('--my', (e.clientY - r.top) + 'px');
    }, { passive: true });
  });
})();

/* Orbis bot: flies along with the scroll, leaves sparkles, greets with typed text */
(function () {
  var launcher = document.getElementById('orbis-launcher');
  if (!launcher || !launcher.parentNode) return;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fly = document.createElement('div'); fly.className = 'orbis-fly';
  launcher.parentNode.insertBefore(fly, launcher); fly.appendChild(launcher);
  var bubble = document.createElement('div'); bubble.className = 'orbis-hello'; bubble.setAttribute('aria-hidden', 'true');
  fly.insertBefore(bubble, launcher);
  bubble.addEventListener('click', function () { launcher.click(); });
  var isOpen = function () { return launcher.getAttribute('aria-expanded') === 'true'; };

  /* --- greeting with typing effect --- */
  var busy = false, lastGreet = 0, timers = [];
  function later(fn, ms) { var t = setTimeout(fn, ms); timers.push(t); }
  function hide() { bubble.classList.remove('show', 'typing'); busy = false; timers.forEach(clearTimeout); timers = []; }
  function greet() {
    if (busy || isOpen()) return;
    busy = true; lastGreet = Date.now();
    var km = document.body.classList.contains('lang-km');
    var text = km ? 'សួស្តី! តើខ្ញុំអាចជួយអ្វីបានខ្លះ? ' : 'Hello! How can I help you? ';
    var chars = (window.Intl && Intl.Segmenter) ? Array.from(new Intl.Segmenter(undefined, { granularity: 'grapheme' }).segment(text), function (s) { return s.segment; }) : Array.from(text);
    bubble.innerHTML = '<span class="t"></span>'; var t = bubble.firstChild;
    bubble.classList.add('show');
    fly.classList.remove('is-happy'); void fly.offsetWidth; if (!reduce) fly.classList.add('is-happy');
    var emoji = function () { var e = document.createElement('span'); e.className = 'emo'; e.textContent = '😊'; bubble.appendChild(e); };
    if (reduce) { t.textContent = text; emoji(); }
    else {
      bubble.classList.add('typing'); var i = 0;
      (function step() { if (isOpen()) return hide(); if (i < chars.length) { t.textContent += chars[i++]; later(step, 55); } else { bubble.classList.remove('typing'); emoji(); } })();
    }
    later(hide, reduce ? 7000 : chars.length * 55 + 6500);
  }
  later(greet, 1400);
  launcher.addEventListener('click', hide);

  /* --- draggable bot: slow, smooth glide to wherever you drop it --- */
  var widget = document.getElementById('orbis-widget') || fly.parentNode;
  var pos = { x: 0, y: 0 }, target = { x: 0, y: 0 }, vx = 0, tilt = 0, drag = null, suppress = false, lastSpark = 0, frame = 0, frac = null, M = 8;
  try { frac = JSON.parse(localStorage.getItem('orbisPos') || 'null'); } catch (e) {}
  function bounds() {
    var r = widget.getBoundingClientRect(), bl = r.left - pos.x, bt = r.top - pos.y;
    return { minX: M - bl, maxX: innerWidth - M - r.width - bl, minY: M - bt, maxY: innerHeight - M - r.height - bt };
  }
  function clamp(t) { var b = bounds(); t.x = Math.min(b.maxX, Math.max(b.minX, t.x)); t.y = Math.min(b.maxY, Math.max(b.minY, t.y)); }
  function fromFraction() {
    if (!frac) { clamp(target); return; }
    var r = widget.getBoundingClientRect();
    target.x = frac.fx * innerWidth - (r.left - pos.x + r.width / 2); target.y = frac.fy * innerHeight - (r.top - pos.y + r.height / 2); clamp(target);
  }
  function save() {
    var r = widget.getBoundingClientRect(), tx = target.x - pos.x, ty = target.y - pos.y;
    frac = { fx: (r.left + tx + r.width / 2) / innerWidth, fy: (r.top + ty + r.height / 2) / innerHeight };
    try { localStorage.setItem('orbisPos', JSON.stringify(frac)); } catch (e) {}
  }
  launcher.style.touchAction = 'none'; launcher.style.userSelect = 'none'; launcher.style.cursor = 'grab';
  launcher.addEventListener('pointerdown', function (e) {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    drag = { id: e.pointerId, sx: e.clientX, sy: e.clientY, ox: target.x, oy: target.y, lx: e.clientX, ly: e.clientY, vx: 0, vy: 0, moved: false };
  });
  addEventListener('pointermove', function (e) {
    if (!drag || e.pointerId !== drag.id) return;
    var dx = e.clientX - drag.sx, dy = e.clientY - drag.sy;
    if (!drag.moved) {
      if (Math.hypot(dx, dy) < 6) return;
      drag.moved = true; try { launcher.setPointerCapture(e.pointerId); } catch (_) {} fly.classList.add('is-dragging'); launcher.style.cursor = 'grabbing'; hide();
    }
    drag.vx += ((e.clientX - drag.lx) - drag.vx) * 0.3; drag.vy += ((e.clientY - drag.ly) - drag.vy) * 0.3; drag.lx = e.clientX; drag.ly = e.clientY;
    target.x = drag.ox + dx; target.y = drag.oy + dy; clamp(target);
  });
  function endDrag(e) {
    if (!drag || e.pointerId !== drag.id) return;
    if (drag.moved) {
      suppress = true; setTimeout(function () { suppress = false; }, 120);
      target.x += drag.vx * 14; target.y += drag.vy * 14; clamp(target); save();   /* gentle glide after release */
      fly.classList.remove('is-dragging'); launcher.style.cursor = 'grab';
    }
    drag = null;
  }
  addEventListener('pointerup', endDrag); addEventListener('pointercancel', endDrag);
  fly.addEventListener('click', function (e) { if (suppress) { e.stopPropagation(); e.preventDefault(); } }, true);
  addEventListener('resize', fromFraction);

  function place() {
    var r = widget.getBoundingClientRect(), left = r.left + r.width / 2 < innerWidth / 2, top = r.top + r.height / 2 < innerHeight / 2;
    [widget, fly].forEach(function (el) { el.classList.toggle('pos-left', left); el.classList.toggle('pos-top', top); });
    widget.style.setProperty('--orbis-avail', Math.max(280, (top ? innerHeight - r.bottom : r.top) - 30) + 'px');
  }

  var sections = Array.prototype.slice.call(document.querySelectorAll('main section[id], body > section[id]')).filter(function (s) { return s.id !== 'orbis-panel'; });
  var curSec = '', secTick = false;
  addEventListener('scroll', function () {
    if (secTick) return; secTick = true;
    requestAnimationFrame(function () {
      secTick = false; var id = ''; sections.forEach(function (s) { if (s.getBoundingClientRect().top <= innerHeight * 0.4) id = s.id; });
      if (id && id !== curSec) { curSec = id; if (Date.now() - lastGreet > 25000 && !isOpen() && !busy && !drag && scrollY > 300) greet(); }
    });
  }, { passive: true });

  function loop(now) {
    frame++;
    var k = reduce ? 1 : (drag && drag.moved ? 0.18 : 0.075);
    var px = pos.x, py = pos.y;
    pos.x += (target.x - pos.x) * k; pos.y += (target.y - pos.y) * k;
    var mx = pos.x - px, my = pos.y - py;
    vx += (mx - vx) * 0.12;
    tilt += ((reduce ? 0 : Math.max(-13, Math.min(13, vx * 1.5))) - tilt) * 0.12;
    widget.style.translate = pos.x.toFixed(2) + 'px ' + pos.y.toFixed(2) + 'px';
    fly.style.transform = reduce ? '' : 'translateY(' + (Math.sin(now / 620) * 4).toFixed(2) + 'px) rotate(' + tilt.toFixed(2) + 'deg)';
    if (frame % 8 === 0) place();
    if (!reduce && !isOpen() && Math.hypot(mx, my) > 3 && now - lastSpark > 110) {
      lastSpark = now;
      var r = launcher.getBoundingClientRect(), sp = document.createElement('span');
      sp.className = 'orbis-spark'; sp.textContent = ['✦', '✧', '✨'][Math.floor(Math.random() * 3)];
      sp.style.color = ['#e6c783', '#ff9ed2', '#9fb0ff'][Math.floor(Math.random() * 3)];
      sp.style.left = (r.left + r.width / 2 + (Math.random() - .5) * 36) + 'px'; sp.style.top = (r.top + r.height / 2 + (Math.random() - .5) * 20) + 'px';
      sp.style.setProperty('--sx', ((Math.random() - .5) * 30) + 'px');
      document.body.appendChild(sp); setTimeout(function () { sp.remove(); }, 950);
    }
    requestAnimationFrame(loop);
  }
  fromFraction(); pos.x = target.x; pos.y = target.y; place();
  requestAnimationFrame(loop);
})();
