/* =============================================
   Beckenboden Magazin – Interaktivität
   ============================================= */

'use strict';

/* -----------------------------------------------
   Artikel-Inhalte (Kurzversionen für Modal)
   ----------------------------------------------- */
const artikelInhalte = {
  'Blasenschwäche: Was wirklich hilft und was Mythos ist': {
    kategorie: 'Inkontinenz',
    autor: 'Dr. med. Marion Schreiber',
    datum: '18. Februar 2026',
    lesezeit: '8 Min.',
    inhalt: `
      <p>Harninkontinenz betrifft in Deutschland etwa 10 Millionen Menschen – und doch ist das Thema nach wie vor tabuisiert. Viele Betroffene greifen als erstes zu Einlagen oder Windeln, anstatt die Ursache behandeln zu lassen.</p>
      <h3>Was ist Blasenschwäche wirklich?</h3>
      <p>Unter Blasenschwäche (Harninkontinenz) versteht man den ungewollten Abgang von Urin. Je nach Auslöser unterscheidet man verschiedene Formen: die Belastungsinkontinenz (Urinverlust bei körperlicher Anstrengung, Husten, Lachen), die Dranginkontinenz (plötzlicher, starker Harndrang) und Mischformen.</p>
      <h3>Mythen und Wahrheiten</h3>
      <ul>
        <li><strong>Mythos:</strong> "Inkontinenz ist unvermeidlich im Alter." – Stimmt nicht: Inkontinenz ist behandelbar, unabhängig vom Alter.</li>
        <li><strong>Mythos:</strong> "Einlagen sind die beste Lösung." – Stimmt nicht: Einlagen managen Symptome, heilen nicht. Die eigentliche Behandlung liegt woanders.</li>
        <li><strong>Mythos:</strong> "Weniger trinken hilft." – Falsch: Zu wenig Trinken reizt die Blase und konzentriert den Urin.</li>
      </ul>
      <h3>Was wirklich hilft</h3>
      <p>Medizinisch belegt wirksam sind: gezieltes Beckenboden-Training, Blasentraining (schrittweise Verlängerung der Intervalle), Physiotherapie, Biofeedback-Therapie sowie – bei Bedarf – Medikamente oder operative Eingriffe. Die gute Nachricht: Mit der richtigen Behandlung erreichen die meisten Betroffenen eine deutliche oder vollständige Besserung.</p>
    `
  },
  '10 Beckenboden-Übungen für den Alltag': {
    kategorie: 'Übungen',
    autor: 'Thomas Keller',
    datum: '14. Februar 2026',
    lesezeit: '6 Min.',
    inhalt: `
      <p>Den Beckenboden zu trainieren klingt einfacher als es ist – denn die meisten Menschen wissen gar nicht, wie sie diese Muskeln gezielt ansprechen. Hier sind zehn bewährte Übungen für Einsteiger.</p>
      <h3>Schritt 1: Den Beckenboden finden</h3>
      <p>Stellen Sie sich vor, Sie halten den Urinstrahl an. Die dabei angespannten Muskeln – das ist der Beckenboden. Üben Sie das Anspannen und Loslassen zunächst in Ruhe, im Sitzen oder Liegen.</p>
      <h3>Die 10 Übungen (Kurzübersicht)</h3>
      <ul>
        <li>Kegel-Basis: 3 Sekunden anspannen, 3 Sekunden loslassen (10x wiederholen)</li>
        <li>Schnelle Kontraktionen: Kurzes, kräftiges Anspannen und sofortiges Loslassen (10x)</li>
        <li>Ausdauerspannung: 10 Sekunden halten, 10 Sekunden Pause (5x)</li>
        <li>Beckenboden im Stehen: Gleiche Übung in aufrechter Haltung</li>
        <li>Verbindung mit Ausatmung: Beim Ausatmen anspannen, beim Einatmen loslassen</li>
        <li>Brücke (Glute Bridge): Hüfte anheben, dabei Beckenboden anspannen</li>
        <li>Vierfüßlerstand: Wechselseitig Arm und Bein strecken, Beckenboden aktiviert halten</li>
        <li>Squat mit Aktivierung: Beim Aufstehen aus der Kniebeuge anspannen</li>
        <li>Seitliches Beinheben im Liegen</li>
        <li>Entspannung: Bewusstes vollständiges Loslassen aller Beckenbodenmuskeln</li>
      </ul>
      <h3>Wie oft?</h3>
      <p>Für messbare Ergebnisse trainieren Sie mindestens 3x täglich, über mindestens 12 Wochen. Regelmäßigkeit ist entscheidender als Intensität.</p>
    `
  },
  'Inkontinenz nach der Geburt: Ursachen und Rückbildung': {
    kategorie: 'Schwangerschaft',
    autor: 'Lisa Wendt',
    datum: '10. Februar 2026',
    lesezeit: '10 Min.',
    inhalt: `
      <p>Nach einer vaginalen Geburt berichten viele Frauen über ungewollten Urinverlust – beim Niesen, Lachen oder Husten. Das ist häufiger, als man denkt, und in den meisten Fällen gut behandelbar.</p>
      <h3>Warum passiert das?</h3>
      <p>Während der Schwangerschaft trägt der Beckenboden das Gewicht des wachsenden Kindes. Bei der Geburt werden Muskeln und Bindegewebe stark gedehnt oder können Mikrorisse erleiden. Das Ergebnis: eine vorübergehend geschwächte Beckenbodenmuskulatur.</p>
      <h3>Was hilft?</h3>
      <ul>
        <li>Rückbildungskurs (am besten ab der 6.–8. Woche nach der Geburt)</li>
        <li>Gezielte Beckenboden-Übungen mit einer Hebamme oder Physiotherapeutin</li>
        <li>Geduld: vollständige Erholung kann 6–12 Monate dauern</li>
        <li>Bei anhaltenden Beschwerden: Überweisung zur urogynäkologischen Sprechstunde</li>
      </ul>
      <h3>Wann zum Arzt?</h3>
      <p>Wenn die Beschwerden nach 3 Monaten Rückbildungstraining nicht besser werden oder sich verschlechtern, sollte unbedingt eine Ärztin aufgesucht werden.</p>
    `
  },
  'Beckenboden-Physiotherapie: Was erwartet mich?': {
    kategorie: 'Therapie',
    autor: 'Thomas Keller',
    datum: '5. Februar 2026',
    lesezeit: '7 Min.',
    inhalt: `
      <p>Viele Menschen zögern, einen Beckenboden-Physiotherapeuten aufzusuchen – aus Unsicherheit oder Scham. Dabei ist die Therapie in erfahrenen Händen professionell, respektvoll und sehr wirksam.</p>
      <h3>Die erste Sitzung</h3>
      <p>Zu Beginn steht ein ausführliches Gespräch über die Beschwerden, Vorerkrankungen und den Alltag. Anschließend erfolgt eine Untersuchung, die je nach Befund extern (Beobachtung von Haltung und Bewegung) oder intern (manuelle Untersuchung) sein kann. Sie haben dabei jederzeit das Recht, Nein zu sagen.</p>
      <h3>Typische Behandlungsmethoden</h3>
      <ul>
        <li>Manuelle Therapie und Massage</li>
        <li>Geführtes Beckenbodentraining</li>
        <li>Biofeedback (elektrische Messung der Muskelaktivität)</li>
        <li>Elektrostimulation (zur Aktivierung schwacher Muskeln)</li>
        <li>Atemtherapie und Körperhaltung</li>
      </ul>
      <h3>Kostenerstattung</h3>
      <p>Gesetzliche Kassen erstatten Beckenboden-Physiotherapie bei ärztlicher Verordnung in der Regel vollständig oder mit geringer Zuzahlung. Sprechen Sie Ihre Ärztin oder Ihren Arzt auf eine Überweisung an.</p>
    `
  },
  'Ernährung bei Inkontinenz: Was die Blase beruhigt': {
    kategorie: 'Ernährung',
    autor: 'Prof. Dr. Sabine Harms',
    datum: '1. Februar 2026',
    lesezeit: '5 Min.',
    inhalt: `
      <p>Was wir essen und trinken, beeinflusst die Blase direkt. Bestimmte Lebensmittel und Getränke wirken als Blasenreizstoffe – andere helfen, die Blase zu beruhigen.</p>
      <h3>Blasenreizstoffe (vermeiden oder reduzieren)</h3>
      <ul>
        <li>Koffein (Kaffee, starker Tee, Energy-Drinks)</li>
        <li>Alkohol</li>
        <li>Zitrusfrüchte und -säfte</li>
        <li>Tomaten und Tomatensaucen</li>
        <li>Scharfe Gewürze</li>
        <li>Künstliche Süßstoffe</li>
        <li>Kohlensäurehaltige Getränke</li>
      </ul>
      <h3>Was der Blase gut tut</h3>
      <ul>
        <li>Ausreichend trinken (1,5–2 Liter täglich – trotzdem wichtig!)</li>
        <li>Wasser und Kräutertees bevorzugen</li>
        <li>Ballaststoffreiche Ernährung (verhindert Verstopfung, die den Beckenboden belastet)</li>
        <li>Gesundes Körpergewicht halten (Übergewicht erhöht den Druck auf den Beckenboden)</li>
      </ul>
      <h3>Trinkprotokoll führen</h3>
      <p>Ein Blasentagebuch (wann trinken Sie wie viel, wann tritt Inkontinenz auf?) hilft Ihnen und Ihrer Ärztin, persönliche Auslöser zu identifizieren.</p>
    `
  },
  'Männer und Beckenboden: Das Tabu-Thema enttabuisiert': {
    kategorie: 'Männergesundheit',
    autor: 'Prof. Dr. Sabine Harms',
    datum: '28. Januar 2026',
    lesezeit: '9 Min.',
    inhalt: `
      <p>Inkontinenz ist kein reines Frauenthema. Besonders nach Prostataoperationen leiden viele Männer unter Harninkontinenz – und schweigen darüber.</p>
      <h3>Die männliche Anatomie</h3>
      <p>Auch Männer haben einen Beckenboden: eine Muskelplatte, die Blase, Darm und die Prostata stützt. Die Muskeln spielen eine wichtige Rolle bei der Harnkontinenz und der Erektionsfähigkeit.</p>
      <h3>Häufige Ursachen bei Männern</h3>
      <ul>
        <li>Prostataentfernung (radikale Prostatektomie) – die häufigste Ursache</li>
        <li>Strahlentherapie im Beckenbereich</li>
        <li>Übergewicht</li>
        <li>Chronischer Husten</li>
        <li>Neurologische Erkrankungen</li>
      </ul>
      <h3>Was hilft Männern konkret?</h3>
      <p>Beckenboden-Training ist für Männer genauso wirksam wie für Frauen. Idealerweise beginnen Männer vor einer geplanten Prostata-OP bereits mit präoperativem Training – das verbessert die Prognose deutlich. Physiotherapie, Biofeedback und in manchen Fällen ein artifizieller Schließmuskel können weitere Optionen sein.</p>
    `
  },
  'Dranginkontinenz vs. Belastungsinkontinenz: Der Unterschied': {
    kategorie: 'Inkontinenz',
    autor: 'Dr. med. Marion Schreiber',
    datum: '22. Januar 2026',
    lesezeit: '6 Min.',
    inhalt: `
      <p>Eine erfolgreiche Behandlung hängt davon ab, welche Art von Inkontinenz vorliegt. Die beiden häufigsten Formen sind die Belastungsinkontinenz und die Dranginkontinenz – sie haben unterschiedliche Ursachen und erfordern unterschiedliche Therapien.</p>
      <h3>Belastungsinkontinenz (Stressinkontinenz)</h3>
      <p>Urin tritt bei körperlichem Druck auf die Blase aus – beim Husten, Niesen, Lachen, Springen oder Heben. Ursache ist meist ein geschwächter Beckenboden. Behandlung: Beckenboden-Training, Physiotherapie, ggf. operative Einlage (TVT-Band).</p>
      <h3>Dranginkontinenz (Urgency-Inkontinenz)</h3>
      <p>Ein plötzlicher, starker Harndrang entsteht, dem Betroffene nicht rechtzeitig nachgeben können. Die Blase zieht sich unkontrolliert zusammen. Behandlung: Blasentraining, Verhaltenstherapie, Medikamente (Anticholinergika, Beta-3-Agonisten), Botox-Injektionen in die Blasenwand.</p>
      <h3>Mischinkontinenz</h3>
      <p>Viele Menschen haben beide Formen gleichzeitig. Hier ist eine genaue Diagnose besonders wichtig, um die Therapie richtig zu priorisieren.</p>
    `
  },
  'Beckenboden-Training mit der Atemtechnik verbinden': {
    kategorie: 'Übungen',
    autor: 'Thomas Keller',
    datum: '15. Januar 2026',
    lesezeit: '4 Min.',
    inhalt: `
      <p>Atemmuskulatur und Beckenboden sind funktionell verbunden: Beim Einatmen senkt sich das Zwerchfell und der Beckenboden gibt nach. Beim Ausatmen steigen beide wieder. Wer das versteht, kann das Training deutlich effektiver gestalten.</p>
      <h3>Grundprinzip</h3>
      <ul>
        <li>Einatmen → Beckenboden entspannen</li>
        <li>Ausatmen → Beckenboden anspannen</li>
      </ul>
      <h3>Übung für Einsteiger</h3>
      <p>Legen Sie sich auf den Rücken, Knie angewinkelt. Atmen Sie tief in den Bauch ein und spüren Sie, wie Beckenboden und Bauch sich weiten. Beim langsamen Ausatmen durch den Mund ziehen Sie den Beckenboden sanft nach oben innen. Halten Sie 3–5 Sekunden, dann vollständig loslassen. 10 Wiederholungen.</p>
      <h3>Häufiger Fehler</h3>
      <p>Viele Menschen pressen beim Training den Bauch herein oder spannen den Po an. Das ist kontraproduktiv. Ziel ist eine isolierte, sanfte Anspannung der Beckenbodenmuskulatur in Kombination mit der natürlichen Ausatmung.</p>
    `
  },
  'Biofeedback-Therapie: So lernt der Beckenboden sich selbst kennen': {
    kategorie: 'Therapie',
    autor: 'Prof. Dr. Sabine Harms',
    datum: '8. Januar 2026',
    lesezeit: '7 Min.',
    inhalt: `
      <p>Biofeedback macht das Unsichtbare sichtbar: Mit Sensoren wird die Aktivität der Beckenbodenmuskulatur gemessen und in Echtzeit auf einem Bildschirm angezeigt. Patientinnen und Patienten lernen so, die richtigen Muskeln anzusteuern.</p>
      <h3>Wie funktioniert Biofeedback?</h3>
      <p>Ein kleiner Sensor (Sonde) wird in die Scheide oder den Enddarm eingeführt. Alternativ können Oberflächen-Elektroden am Damm genutzt werden. Der Sensor misst die Muskelspannung und überträgt sie als Kurve oder grafisches Signal auf einen Monitor.</p>
      <h3>Wann ist Biofeedback sinnvoll?</h3>
      <ul>
        <li>Wenn herkömmliche Übungen keine Verbesserung bringen</li>
        <li>Wenn Betroffene unsicher sind, ob sie die richtigen Muskeln anspannen</li>
        <li>Bei hypertoner (verspannter) Beckenbodenmuskulatur</li>
        <li>In der Nachsorge nach Beckenboden-Operationen</li>
      </ul>
      <h3>Wissenschaftliche Evidenz</h3>
      <p>Mehrere Studien belegen die Wirksamkeit von Biofeedback bei Belastungsinkontinenz und Dranginkontinenz. Kombiniert mit Beckenbodentraining ist es einer der effektivsten konservativen Therapieansätze.</p>
    `
  }
};

/* -----------------------------------------------
   Hilfsfunktionen
   ----------------------------------------------- */
function $(selector) { return document.querySelector(selector); }
function $$(selector) { return document.querySelectorAll(selector); }

/* -----------------------------------------------
   Navigation (Hamburger-Menü)
   ----------------------------------------------- */
function initNav() {
  const toggle = $('#nav-toggle');
  const nav    = $('#main-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('nav-open');
    toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
  });

  // Schließen bei Klick auf Link
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav-open');
      toggle.setAttribute('aria-label', 'Menü öffnen');
    });
  });

  // Schließen bei Klick außerhalb
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove('nav-open');
    }
  });
}

/* -----------------------------------------------
   Kategorie-Filter
   ----------------------------------------------- */
function initFilter() {
  const buttons = $$('.kategorie-btn');
  const cards   = $$('.artikel-karte');
  const noRes   = $('#no-results');

  function applyFilter(filter) {
    let visible = 0;
    cards.forEach(card => {
      const kat = card.getAttribute('data-kategorie');
      const show = filter === 'alle' || kat === filter;
      card.classList.toggle('filtered-out', !show);
      if (show) visible++;
    });

    buttons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-filter') === filter);
    });

    if (noRes) noRes.classList.toggle('hidden', visible > 0);
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Suchfeld zurücksetzen
      const searchInput = $('#search-input');
      if (searchInput) searchInput.value = '';
      applyFilter(btn.getAttribute('data-filter'));
      // Zur Artikelsektion scrollen
      const artikelSection = $('#artikel');
      if (artikelSection) {
        artikelSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Footer-Links verwenden auch den Filter
  $$('.footer-nav a[data-filter]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const filter = link.getAttribute('data-filter');
      applyFilter(filter);
      const artikelSection = $('#artikel');
      if (artikelSection) {
        artikelSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Reset-Button
  const resetBtn = $('#reset-search');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      const searchInput = $('#search-input');
      if (searchInput) searchInput.value = '';
      applyFilter('alle');
    });
  }
}

/* -----------------------------------------------
   Suche
   ----------------------------------------------- */
function initSearch() {
  const searchInput = $('#search-input');
  const searchBtn   = $('#search-btn');
  const cards       = $$('.artikel-karte');
  const noRes       = $('#no-results');
  const katButtons  = $$('.kategorie-btn');

  function doSearch(query) {
    const q = query.trim().toLowerCase();
    if (!q) {
      // Alles anzeigen
      cards.forEach(c => c.classList.remove('filtered-out'));
      katButtons.forEach(b => b.classList.toggle('active', b.getAttribute('data-filter') === 'alle'));
      if (noRes) noRes.classList.add('hidden');
      return;
    }

    // Kategorie-Buttons deaktivieren
    katButtons.forEach(b => b.classList.remove('active'));

    let visible = 0;
    cards.forEach(card => {
      const text = card.innerText.toLowerCase();
      const show = text.includes(q);
      card.classList.toggle('filtered-out', !show);
      if (show) visible++;
    });

    if (noRes) noRes.classList.toggle('hidden', visible > 0);

    const artikelSection = $('#artikel');
    if (artikelSection) {
      artikelSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      doSearch(searchInput ? searchInput.value : '');
    });
  }

  if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') doSearch(searchInput.value);
    });
  }
}

/* -----------------------------------------------
   Artikel-Modal
   ----------------------------------------------- */
function initModal() {
  const overlay  = $('#modal-overlay');
  const closeBtn = $('#modal-close');
  const inhalt   = $('#modal-inhalt');

  if (!overlay || !closeBtn || !inhalt) return;

  function openModal(titel) {
    const daten = artikelInhalte[titel];
    if (!daten) return;

    inhalt.innerHTML = `
      <span class="modal-kategorie">${daten.kategorie}</span>
      <h2 id="modal-title">${titel}</h2>
      <div class="modal-meta">
        Von <strong>${daten.autor}</strong> &middot; ${daten.datum} &middot; ${daten.lesezeit} Lesezeit
      </div>
      ${daten.inhalt}
      <div class="modal-hinweis">
        <strong>Medizinischer Hinweis:</strong> Dieser Artikel dient der allgemeinen Information und ersetzt keine individuelle ärztliche Beratung. Bei Beschwerden wenden Sie sich bitte an Ihre Ärztin oder Ihren Arzt.
      </div>
    `;

    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeModal() {
    overlay.hidden = true;
    document.body.style.overflow = '';
  }

  // "Artikel lesen"-Buttons
  $$('.artikel-lesen-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const karte = btn.closest('.artikel-karte');
      if (!karte) return;
      const titel = karte.querySelector('h3') ? karte.querySelector('h3').textContent.trim() : '';
      openModal(titel);
    });
  });

  // Featured-Card-Button
  const featuredBtn = $('.featured-card .btn-primary');
  if (featuredBtn) {
    featuredBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal('Blasenschwäche: Was wirklich hilft und was Mythos ist');
    });
  }

  closeBtn.addEventListener('click', closeModal);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !overlay.hidden) closeModal();
  });
}

/* -----------------------------------------------
   FAQ-Akkordeon
   ----------------------------------------------- */
function initFAQ() {
  const fragen = $$('.faq-frage');

  fragen.forEach(frage => {
    frage.addEventListener('click', () => {
      const antwort  = frage.nextElementSibling;
      const expanded = frage.getAttribute('aria-expanded') === 'true';

      // Alle anderen schließen
      fragen.forEach(f => {
        f.setAttribute('aria-expanded', 'false');
        const a = f.nextElementSibling;
        if (a) a.hidden = true;
      });

      // Dieses öffnen/schließen
      frage.setAttribute('aria-expanded', String(!expanded));
      if (antwort) antwort.hidden = expanded;
    });
  });
}

/* -----------------------------------------------
   Newsletter-Formular
   ----------------------------------------------- */
function initNewsletter() {
  const form      = $('#newsletter-form');
  const emailInput = $('#nl-email');
  const emailError = $('#email-error');
  const success   = $('#form-success');

  if (!form) return;

  function validateEmail(val) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email     = emailInput ? emailInput.value.trim() : '';
    const datenschutz = form.querySelector('#nl-datenschutz');

    let valid = true;

    if (!validateEmail(email)) {
      if (emailError) emailError.textContent = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
      if (emailInput) emailInput.focus();
      valid = false;
    } else {
      if (emailError) emailError.textContent = '';
    }

    if (!datenschutz || !datenschutz.checked) {
      alert('Bitte stimmen Sie der Datenschutzerklärung zu.');
      valid = false;
    }

    if (!valid) return;

    // Erfolgsmeldung anzeigen (Demo – kein echtes Backend)
    form.querySelectorAll('input, button').forEach(el => {
      el.disabled = true;
    });
    if (success) success.classList.remove('hidden');
  });

  if (emailInput && emailError) {
    emailInput.addEventListener('input', () => {
      if (emailError.textContent) emailError.textContent = '';
    });
  }
}

/* -----------------------------------------------
   Smooth Scroll für Anker-Links
   ----------------------------------------------- */
function initSmoothScroll() {
  $$('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const hash = link.getAttribute('href');
      if (hash === '#') return;
      const target = document.querySelector(hash);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* -----------------------------------------------
   Initialisierung
   ----------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initFilter();
  initSearch();
  initModal();
  initFAQ();
  initNewsletter();
  initSmoothScroll();
});
