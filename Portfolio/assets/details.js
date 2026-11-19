(() => {
  const DATA = {
    support: {
      en: {
        tag: 'FOUNDATION · 01', title: 'IT Systems & Support',
        intro: 'Keeping computers, and the people who use them, productive. I focus on understanding how a system works, finding the real cause of a problem, and fixing it in a clear, repeatable way.',
        workTitle: 'What I focus on',
        work: [
          'Setting up and configuring computers (Windows and Linux basics)',
          'Operating-system fundamentals: user accounts, files, permissions and updates',
          'Troubleshooting hardware and software problems step by step',
          'User support: listening, asking the right questions, and explaining in plain language',
          'Documenting issues and solutions so the next fix is faster'
        ],
        stepsTitle: 'How I troubleshoot',
        steps: ['Identify the problem', 'Form a theory', 'Test it', 'Fix it', 'Document it'],
        chipsTitle: 'Topics & tools',
        chips: ['Windows', 'Linux basics', 'Drivers & updates', 'Remote support', 'Issue documentation', 'Backup basics']
      },
      km: {
        tag: 'មូលដ្ឋាន · 01', title: 'ប្រព័ន្ធ IT និងការគាំទ្រ',
        intro: 'ធ្វើឱ្យកុំព្យូទ័រ និងអ្នកប្រើប្រាស់អាចធ្វើការបានរលូន។ ខ្ញុំផ្តោតលើការយល់ពីរបៀបដែលប្រព័ន្ធដំណើរការ រកមូលហេតុពិតនៃបញ្ហា និងដោះស្រាយតាមវិធីច្បាស់លាស់ អាចធ្វើឡើងវិញបាន។',
        workTitle: 'អ្វីដែលខ្ញុំផ្តោតលើ',
        work: [
          'ដំឡើង និងកំណត់រចនាសម្ព័ន្ធកុំព្យូទ័រ (មូលដ្ឋាន Windows និង Linux)',
          'មូលដ្ឋានប្រព័ន្ធប្រតិបត្តិការ៖ គណនីអ្នកប្រើ ឯកសារ សិទ្ធិ និងការអាប់ដេត',
          'ដោះស្រាយបញ្ហា Hardware និង Software ជាជំហានៗ',
          'គាំទ្រអ្នកប្រើប្រាស់៖ ស្តាប់ សួរសំណួរត្រឹមត្រូវ និងពន្យល់ដោយភាសាងាយយល់',
          'កត់ត្រាបញ្ហា និងដំណោះស្រាយ ដើម្បីឱ្យការដោះស្រាយលើកក្រោយលឿនជាងមុន'
        ],
        stepsTitle: 'របៀបដោះស្រាយបញ្ហា',
        steps: ['កំណត់បញ្ហា', 'ដាក់សម្មតិកម្ម', 'សាកល្បង', 'ដោះស្រាយ', 'កត់ត្រា'],
        chipsTitle: 'ប្រធានបទ និងឧបករណ៍',
        chips: ['Windows', 'មូលដ្ឋាន Linux', 'Drivers និង Updates', 'ជំនួយពីចម្ងាយ', 'ការកត់ត្រាបញ្ហា', 'មូលដ្ឋាន Backup']
      }
    },
    network: {
      en: {
        tag: 'INFRASTRUCTURE · 02', title: 'Networks & Connectivity',
        intro: 'Understanding how devices talk to each other, from a local network (LAN) to figuring out exactly why a connection is not working.',
        workTitle: 'What I focus on',
        work: [
          'LAN fundamentals and the OSI / TCP-IP models',
          'IP addressing and subnetting',
          'Switch and router configuration (VLAN and routing basics)',
          'DHCP and DNS basics',
          'Diagnosing connectivity with ping, tracert and ipconfig',
          'Wi-Fi, cabling and basic network security'
        ],
        stepsTitle: 'How I diagnose a connection',
        steps: ['Cable & link', 'IP address', 'Gateway', 'DNS', 'Service'],
        chipsTitle: 'Topics & tools',
        chips: ['TCP/IP', 'Subnetting', 'VLAN', 'Switching & routing', 'DHCP & DNS', 'Ping & traceroute']
      },
      km: {
        tag: 'ហេដ្ឋារចនាសម្ព័ន្ធ · 02', title: 'បណ្តាញ និងការតភ្ជាប់',
        intro: 'យល់ពីរបៀបដែលឧបករណ៍ទាក់ទងគ្នា ចាប់ពីបណ្តាញក្នុងតំបន់ (LAN) រហូតដល់ការរកឱ្យឃើញច្បាស់ថាហេតុអ្វីបានជាការតភ្ជាប់មិនដំណើរការ។',
        workTitle: 'អ្វីដែលខ្ញុំផ្តោតលើ',
        work: [
          'មូលដ្ឋាន LAN និងម៉ូដែល OSI / TCP-IP',
          'អាសយដ្ឋាន IP និងការបែងចែក Subnet',
          'ការកំណត់រចនាសម្ព័ន្ធ Switch និង Router (VLAN និង Routing មូលដ្ឋាន)',
          'មូលដ្ឋាន DHCP និង DNS',
          'ពិនិត្យការតភ្ជាប់ដោយប្រើ ping, tracert និង ipconfig',
          'មូលដ្ឋាន Wi-Fi ខ្សែបណ្តាញ និងសុវត្ថិភាពបណ្តាញ'
        ],
        stepsTitle: 'របៀបវិភាគការតភ្ជាប់',
        steps: ['ខ្សែ និង Link', 'អាសយដ្ឋាន IP', 'Gateway', 'DNS', 'សេវាកម្ម'],
        chipsTitle: 'ប្រធានបទ និងឧបករណ៍',
        chips: ['TCP/IP', 'Subnetting', 'VLAN', 'Switching និង Routing', 'DHCP និង DNS', 'Ping និង Traceroute']
      }
    },
    code: {
      en: {
        tag: 'DEVELOPMENT · 03', title: 'Code, Data & AI',
        intro: 'Building a problem-solving mindset through Python, SQL and data analysis, and researching AI tools that are genuinely useful.',
        workTitle: 'What I focus on',
        work: [
          'Python fundamentals: logic, loops and functions',
          'Breaking a big problem into small, testable steps',
          'Simple automation scripts for everyday tasks',
          'Database concepts and SQL queries',
          'Cleaning, summarizing and interpreting data',
          'Researching AI tools and evaluating information carefully'
        ],
        stepsTitle: 'How I approach a coding problem',
        steps: ['Understand it', 'Break it down', 'Write the code', 'Test it', 'Improve it'],
        chipsTitle: 'Topics & tools',
        chips: ['Python', 'SQL', 'Data analysis', 'Automation', 'Logical thinking', 'AI tools']
      },
      km: {
        tag: 'ការអភិវឌ្ឍ · 03', title: 'កូដ ទិន្នន័យ និង AI',
        intro: 'កសាងរបៀបគិតដោះស្រាយបញ្ហា តាមរយៈ Python, SQL និងការវិភាគទិន្នន័យ ព្រមទាំងស្រាវជ្រាវឧបករណ៍ AI ដែលមានប្រយោជន៍ពិតប្រាកដ។',
        workTitle: 'អ្វីដែលខ្ញុំផ្តោតលើ',
        work: [
          'មូលដ្ឋាន Python៖ តក្កវិជ្ជា Loop និង Function',
          'បំបែកបញ្ហាធំជាជំហានតូចៗដែលអាចសាកល្បងបាន',
          'ស្គ្រីបស្វ័យប្រវត្តិកម្មសាមញ្ញៗសម្រាប់ការងារប្រចាំថ្ងៃ',
          'គំនិតមូលដ្ឋានទិន្នន័យ និងសំណួរ SQL',
          'សម្អាត សង្ខេប និងបកស្រាយទិន្នន័យ',
          'ស្រាវជ្រាវឧបករណ៍ AI និងវាយតម្លៃព័ត៌មានដោយប្រុងប្រយ័ត្ន'
        ],
        stepsTitle: 'របៀបដោះស្រាយបញ្ហាកូដ',
        steps: ['យល់បញ្ហា', 'បំបែកបញ្ហា', 'សរសេរកូដ', 'សាកល្បង', 'កែលម្អ'],
        chipsTitle: 'ប្រធានបទ និងឧបករណ៍',
        chips: ['Python', 'SQL', 'ការវិភាគទិន្នន័យ', 'ស្វ័យប្រវត្តិកម្ម', 'ការគិតតក្កវិជ្ជា', 'ឧបករណ៍ AI']
      }
    }
  };
  const UI = {
    en: { close: 'Close', ask: 'Ask me about this', all: 'See all focus areas', note: 'These are learning and practice areas, not claims of professional expertise.' },
    km: { close: 'បិទ', ask: 'សួរខ្ញុំអំពីបញ្ហានេះ', all: 'មើលផ្នែកផ្តោតទាំងអស់', note: 'ទាំងនេះជាផ្នែកសិក្សា និងអនុវត្ត មិនមែនជាការអះអាងអំពីជំនាញវិជ្ជាជីវៈទេ។' }
  };
  const ORDER = ['support', 'network', 'code'];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const lang = () => document.body.classList.contains('lang-km') ? 'km' : 'en';

  const overlay = document.createElement('div');
  overlay.className = 'detail-overlay';
  overlay.hidden = true;
  overlay.innerHTML = '<div class="detail-dialog" role="dialog" aria-modal="true" aria-labelledby="detail-title" tabindex="-1"></div>';
  document.body.appendChild(overlay);
  const dialog = overlay.firstElementChild;
  let current = null, lastFocus = null;

  function render() {
    if (!current) return;
    const d = DATA[current][lang()], u = UI[lang()];
    dialog.innerHTML =
      '<button class="detail-close" type="button" aria-label="' + esc(u.close) + '">×</button>' +
      '<header class="detail-head"><span class="detail-tag">' + esc(d.tag) + '</span>' +
      '<h3 id="detail-title">' + esc(d.title) + '</h3><p>' + esc(d.intro) + '</p></header>' +
      '<div class="detail-body">' +
        '<section><h4>' + esc(d.workTitle) + '</h4><ul class="detail-list">' + d.work.map(i => '<li>' + esc(i) + '</li>').join('') + '</ul></section>' +
        '<section><h4>' + esc(d.stepsTitle) + '</h4><ol class="detail-steps">' + d.steps.map(i => '<li><span>' + esc(i) + '</span></li>').join('') + '</ol></section>' +
        '<section><h4>' + esc(d.chipsTitle) + '</h4><div class="detail-chips">' + d.chips.map(i => '<span>' + esc(i) + '</span>').join('') + '</div></section>' +
      '</div>' +
      '<footer class="detail-foot"><p>' + esc(u.note) + '</p><div class="detail-actions">' +
        '<a class="button button-gold" href="#contact" data-close>' + esc(u.ask) + '</a>' +
        '<a class="button button-outline" href="#focus" data-close>' + esc(u.all) + '</a></div></footer>';
  }
  function open(key, trigger) {
    current = key; lastFocus = trigger || document.activeElement; render();
    overlay.hidden = false; document.body.classList.add('detail-open');
    dialog.scrollTop = 0; dialog.focus();
  }
  function close() {
    overlay.hidden = true; document.body.classList.remove('detail-open'); current = null;
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  overlay.addEventListener('click', e => {
    if (e.target === overlay || e.target.closest('.detail-close') || e.target.closest('[data-close]')) close();
  });
  document.addEventListener('keydown', e => {
    if (overlay.hidden) return;
    if (e.key === 'Escape') { close(); return; }
    if (e.key === 'Tab') {
      const f = dialog.querySelectorAll('a[href], button');
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  new MutationObserver(render).observe(document.body, { attributes: true, attributeFilter: ['class'] });

  document.querySelectorAll('.update-card .card-link').forEach((link, i) => {
    const key = ORDER[i]; if (!key) return;
    link.setAttribute('href', '#focus-' + key);
    link.setAttribute('role', 'button');
    link.addEventListener('click', e => { e.preventDefault(); open(key, link); });
  });
})();
