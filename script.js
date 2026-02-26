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
  },
  'Beckenboden in den Wechseljahren: Wenn Östrogen fehlt': {
    kategorie: 'Inkontinenz',
    datum: '20. Februar 2026',
    lesezeit: '7 Min.',
    inhalt: `
      <p>In den Wechseljahren sinkt der Östrogenspiegel deutlich. Das betrifft nicht nur die Gebärmutter – auch das Bindegewebe im Beckenbereich und die Muskulatur des Beckenbodens reagieren auf den Hormonabfall. Die Folge: Gewebe verliert an Elastizität und Stabilität, was Inkontinenz und Senkungsbeschwerden begünstigt.</p>
      <h3>Was Östrogen mit dem Beckenboden macht</h3>
      <p>Östrogen hält Schleimhäute feucht, stärkt Kollagenfasern im Bindegewebe und unterstützt die Muskeldurchblutung. Fällt der Spiegel, werden Blasenschleimhaut und Harnröhre empfindlicher, das Bindegewebe verliert Tonus und die Muskulatur erschöpft schneller.</p>
      <h3>Typische Beschwerden</h3>
      <ul>
        <li>Häufiger oder plötzlicher Harndrang (Dranginkontinenz)</li>
        <li>Urinverlust beim Husten, Niesen oder Lachen (Belastungsinkontinenz)</li>
        <li>Wiederkehrende Harnwegsinfekte</li>
        <li>Trockenheitsgefühl und Reizung in der Scheide</li>
        <li>Druckgefühl im Unterleib (Senkung)</li>
      </ul>
      <h3>Was hilft</h3>
      <ul>
        <li><strong>Beckenbodentraining:</strong> Auch in und nach den Wechseljahren wirksam – Muskeln lassen sich in jedem Alter trainieren.</li>
        <li><strong>Lokale Östrogentherapie:</strong> Niedrig dosierte Östrogenpräparate (Creme, Zäpfchen) direkt in der Scheide stärken das lokale Gewebe ohne nennenswerte systemische Wirkung. Besprechen Sie dies mit Ihrer Ärztin.</li>
        <li><strong>Physiotherapie:</strong> Gezielte Behandlung von Muskeln und Bindegewebe.</li>
        <li><strong>Ausreichend trinken:</strong> Trotz Inkontinenz mind. 1,5 Liter täglich, da konzentrierter Urin die Schleimhaut reizt.</li>
      </ul>
      <h3>Wichtig: Beschwerden ansprechen</h3>
      <p>Viele Frauen halten Inkontinenz in den Wechseljahren für „normal" und sagen nichts. Doch die meisten Beschwerden sind gut behandelbar. Sprechen Sie Ihre Ärztin oder Ihren Arzt offen darauf an.</p>
    `
  },
  'Laufen mit Beckenbodenschwäche: So trainieren Sie sicher': {
    kategorie: 'Übungen',
    datum: '17. Februar 2026',
    lesezeit: '6 Min.',
    inhalt: `
      <p>Laufen gehört zu den beliebtesten Sportarten – und zu jenen, die bei Beckenbodenschwäche am häufigsten gemieden werden. Denn der Aufprall beim Laufen erzeugt Druckspitzen im Bauchraum, die ungewollten Urinverlust auslösen können. Das muss aber kein Grund sein, ganz aufs Laufen zu verzichten.</p>
      <h3>Warum Laufen den Beckenboden belastet</h3>
      <p>Bei jedem Schritt wirkt das Zwei- bis Dreifache des Körpergewichts auf den Boden – und damit auch auf Blase, Darm und Beckenboden. Ist die Beckenbodenmuskulatur nicht stark genug, um diese Stöße abzufangen, kommt es zum Urinverlust.</p>
      <h3>Grundvoraussetzung: Erst trainieren, dann laufen</h3>
      <p>Wer unter Belastungsinkontinenz leidet, sollte zuerst gezielt Beckenbodentraining aufbauen – mindestens 6–8 Wochen – bevor mit dem Laufen begonnen oder fortgefahren wird. Eine Physiotherapeutin kann prüfen, ob die Muskelkraft ausreichend ist.</p>
      <h3>Praktische Tipps</h3>
      <ul>
        <li><strong>Schrittfrequenz erhöhen:</strong> Kürzere, schnellere Schritte reduzieren die Aufprallkraft.</li>
        <li><strong>Auf weichem Untergrund starten:</strong> Waldboden oder Tartanbahn sind schonender als Asphalt.</li>
        <li><strong>Geh-Lauf-Wechsel:</strong> Intervalle mit Gehpausen reduzieren die Gesamtbelastung.</li>
        <li><strong>Beckenboden beim Aufprall aktivieren:</strong> Trainieren Sie, den Beckenboden kurz vor dem Aufprall anzuspannen.</li>
        <li><strong>Starke Blase vor dem Laufen:</strong> Kurz vorher die Blase entleeren – aber kein übermäßiges „Sicherheitstoilettengehen".</li>
        <li><strong>Geeignete Einlage als Übergangslösung:</strong> Speziell für Sport konzipierte dünne Einlagen können während der Trainingsphase Sicherheit geben.</li>
      </ul>
      <h3>Wann auf Laufen verzichten?</h3>
      <p>Direkt nach einer Geburt (mind. 3 Monate warten), nach Beckenboden-Operationen (Rücksprache mit Arzt) oder bei starken Senkungsbeschwerden sollte Laufen zunächst pausiert werden.</p>
    `
  },
  'Pessare bei Senkungsbeschwerden: Was sie leisten und wie sie sitzen': {
    kategorie: 'Therapie',
    datum: '3. Februar 2026',
    lesezeit: '5 Min.',
    inhalt: `
      <p>Ein Pessar ist ein medizinisches Hilfsmittel aus weichem Silikon, das in die Scheide eingesetzt wird. Es stützt abgesenktes Gewebe – etwa die Blase, den Darm oder die Gebärmutter – mechanisch von innen und kann dabei Inkontinenz und Druckgefühl deutlich lindern.</p>
      <h3>Für wen ist ein Pessar geeignet?</h3>
      <ul>
        <li>Frauen mit Blasen- oder Gebärmuttersenkung</li>
        <li>Belastungsinkontinenz, die auf konservative Therapie nicht ausreichend anspricht</li>
        <li>Als Überbrückung, wenn eine Operation nicht oder noch nicht möglich ist</li>
        <li>Als dauerhafte Alternative zur Operation (für viele Frauen gut geeignet)</li>
      </ul>
      <h3>Wie funktioniert das?</h3>
      <p>Das Pessar wird von einer Ärztin oder einem Arzt angepasst – es gibt viele Formen (Ring, Würfel, Schale) und Größen. Nach der Anpassung kann das Pessar selbst eingesetzt, getragen und entfernt werden. Viele Frauen spüren es bei richtiger Passform kaum.</p>
      <h3>Was Pessare leisten – und was nicht</h3>
      <p>Pessare lindern Symptome effektiv, beheben aber nicht die zugrunde liegende Schwäche von Muskeln und Bindegewebe. Daher ist begleitendes Beckenbodentraining wichtig. Regelmäßige Kontrollen beim Arzt sind notwendig, um Druckstellen oder Infektionen frühzeitig zu erkennen.</p>
      <h3>Kostenübernahme</h3>
      <p>Pessare werden bei ärztlicher Indikation von den gesetzlichen Krankenkassen in der Regel erstattet. Fragen Sie Ihre Ärztin oder Ihren Arzt nach einer Verordnung.</p>
    `
  },
  'Stress und Blase: Warum Anspannung häufigen Harndrang verursacht': {
    kategorie: 'Inkontinenz',
    datum: '25. Januar 2026',
    lesezeit: '5 Min.',
    inhalt: `
      <p>Viele Menschen kennen das Phänomen: Kurz vor einer Prüfung, einem wichtigen Gespräch oder in einer angespannten Situation drängt die Blase plötzlich stärker. Dieser Zusammenhang ist kein Einbildung – er ist biologisch gut erklärbar.</p>
      <h3>Wie Stress die Blase beeinflusst</h3>
      <p>Das vegetative Nervensystem steuert sowohl die Stressreaktion als auch die Blasenfunktion. In Stresssituationen schüttet der Körper Adrenalin und Kortisol aus. Diese Botenstoffe erhöhen die Wachsamkeit – und können dabei auch die Blasenmuskulatur in erhöhte Bereitschaft versetzen, was zu übermäßiger Reizbarkeit führt.</p>
      <h3>Der Teufelskreis</h3>
      <p>Wer einmal in einer stressigen Situation Harndrang erlebt, beginnt oft, die Blase zu beobachten und häufig vorsorglich die Toilette aufzusuchen. Das trainiert die Blase paradoxerweise darauf, bei immer kleineren Füllmengen zu melden – ein klassischer Lernprozess, der den Drang verstärkt.</p>
      <h3>Was hilft</h3>
      <ul>
        <li><strong>Blasentraining:</strong> Schrittweise die Intervalle zwischen den Toilettengängen verlängern, um die Blasenkapazität wieder zu steigern.</li>
        <li><strong>Entspannungstechniken:</strong> Atemübungen, progressive Muskelentspannung oder Achtsamkeitstraining können das vegetative Nervensystem beruhigen.</li>
        <li><strong>Drangaufschub üben:</strong> Bei Drang bewusst kurz warten (10–30 Sekunden), tief durchatmen, Beckenboden leicht anspannen – der Drang ebbt dann oft ab.</li>
        <li><strong>Koffein und Alkohol reduzieren:</strong> Beide wirken blasenreizend und verstärken stressbedingten Drang.</li>
      </ul>
      <h3>Wann professionelle Hilfe suchen?</h3>
      <p>Wenn stressbedingter Harndrang den Alltag stark einschränkt oder mit tatsächlichem Urinverlust verbunden ist, lohnt sich eine Abklärung beim Arzt sowie gegebenenfalls eine Begleitung durch Physiotherapie oder Verhaltenstherapie.</p>
    `
  },
  'Magnetfeldtherapie für den Beckenboden: Wie funktioniert das?': {
    kategorie: 'Therapie',
    datum: '15. Februar 2026',
    lesezeit: '7 Min.',
    inhalt: `
      <p>Magnetfeldbasierte Beckenbodentherapie klingt nach Science-Fiction – ist aber ein etabliertes Verfahren in der Rehabilitation. Das Prinzip: Magnetfeldimpulse dringen durch Kleidung und Haut bis in die Muskelschichten und lösen dort unwillkürliche Kontraktionen aus.</p>
      <h3>Das physikalische Prinzip</h3>
      <p>Eine Magnetfeldspule – meist in einem speziellen Trainingsstuhl verbaut – erzeugt pulsierende Magnetfelder. Diese induzieren im umliegenden Gewebe schwache elektrische Ströme, die die motorischen Nerven reizen und so Muskelzuckungen auslösen. Der Vorgang ist schmerzfrei und erfordert keine aktive Körperanstrengung.</p>
      <h3>Was passiert in einer Sitzung?</h3>
      <p>Man sitzt vollständig bekleidet auf dem Gerät, entspannt sich und lässt die Technologie arbeiten. Pro Sitzung (typischerweise 20–22 Minuten) können mehrere Tausend Muskelkontraktionen erzeugt werden – weit mehr, als durch willkürliches Training erreichbar wäre.</p>
      <h3>Für wen ist es geeignet?</h3>
      <ul>
        <li>Personen, die den Beckenboden nicht willentlich ansteuern können (z.&thinsp;B. nach Operationen)</li>
        <li>Menschen mit starker Schamhemmung gegenüber körpernahen Therapien</li>
        <li>Ergänzung zu klassischem Beckenbodentraining</li>
        <li>Rückbildung nach der Geburt</li>
        <li>Begleittherapie bei Belastungsinkontinenz</li>
      </ul>
      <h3>Einschränkungen und Kontraindikationen</h3>
      <p>Magnetfeldtherapie ist nicht für jeden geeignet. Kontraindikationen sind unter anderem Herzschrittmacher, implantierte Metallteile im Beckenbereich, Schwangerschaft sowie bestimmte neurologische Erkrankungen. Vor Beginn einer Behandlung sollte immer Rücksprache mit einer Ärztin oder einem Arzt gehalten werden.</p>
      <h3>Ergänzung, kein Ersatz</h3>
      <p>Die Magnetfeldtherapie aktiviert Muskeln – sie trainiert aber nicht Koordination, Körperwahrnehmung und bewusstes Ansteuern. Daher empfehlen Physiotherapeutinnen und Physiotherapeuten, sie mit aktivem Beckenbodentraining zu kombinieren, um langfristig Kontrolle und Muskelgedächtnis aufzubauen.</p>
    `
  },
  'Magnetfeldtherapie nach Prostata-OP: Schneller wieder kontinent': {
    kategorie: 'Männergesundheit',
    datum: '12. Februar 2026',
    lesezeit: '8 Min.',
    inhalt: `
      <p>Eine Prostataentfernung (radikale Prostatektomie) ist für viele Männer ein einschneidender Eingriff – nicht nur medizinisch, sondern auch für die Kontinenz. In den ersten Wochen und Monaten nach der Operation leiden die meisten Betroffenen unter Harninkontinenz, weil der innere Schließmuskel durch den Eingriff beeinträchtigt wird.</p>
      <h3>Warum der Beckenboden nach der OP so wichtig ist</h3>
      <p>Nach Entfernung der Prostata übernimmt der äußere Schließmuskel – gesteuert durch den Beckenboden – die gesamte Kontinenzfunktion. Je schneller und gezielter dieser Muskelbereich trainiert wird, desto kürzer ist in der Regel die Phase der Inkontinenz.</p>
      <h3>Das Problem mit klassischen Übungen</h3>
      <p>Unmittelbar nach der Operation sind viele Männer körperlich eingeschränkt, erschöpft oder haben Schmerzen. Hinzu kommt, dass der Beckenboden durch den Eingriff „aus dem Bewusstsein gefallen" sein kann – die Patienten spüren ihn kaum noch und können ihn schwer willentlich anspannen.</p>
      <h3>Wo Magnetfeldtherapie helfen kann</h3>
      <p>Magnetfeldbasiertes Training setzt genau hier an: Es aktiviert die Beckenbodenmuskulatur, ohne dass der Patient aktiv mitarbeiten muss. Der Muskel wird trainiert – auch wenn er sich der Betroffene noch nicht bewusst anspannen kann. Das erleichtert den Wiedereinstieg in aktives Training erheblich.</p>
      <ul>
        <li>Frühzeitige Muskelaktivierung, noch bevor aktive Übungen möglich sind</li>
        <li>Kombination mit Physiotherapie für optimale Ergebnisse</li>
        <li>Möglicher Einsatz bereits wenige Wochen nach dem Eingriff (nach ärztlicher Freigabe)</li>
        <li>Bequeme Anwendung im Sitzen ohne körperliche Anstrengung</li>
      </ul>
      <h3>Realistische Erwartungen</h3>
      <p>Magnetfeldtherapie beschleunigt die Rückbildung – garantiert aber keine vollständige Heilung. Die Prognose hängt von vielen Faktoren ab: Art des Eingriffs, präoperativer Beckenbodentonus, Alter und Begleiterkrankungen. In Kombination mit regelmäßiger Physiotherapie berichten viele Männer jedoch über deutlich schnellere Fortschritte als ohne unterstützende Behandlung.</p>
      <h3>Wichtiger Hinweis</h3>
      <p>Sprechen Sie vor Beginn jeder Therapie mit Ihrer behandelnden Ärztin oder Ihrem Arzt – auch für die Magnetfeldtherapie gilt, dass sie individuell angepasst und ärztlich begleitet werden sollte.</p>
    `
  },
  'Magnetfeldstuhl vs. klassische Kegel-Übungen: Was leistet was?': {
    kategorie: 'Übungen',
    datum: '8. Februar 2026',
    lesezeit: '6 Min.',
    inhalt: `
      <p>„Bis zu 25.000 Muskelkontraktionen in einer einzigen Sitzung" – solche Versprechen klingen beeindruckend. Doch was steckt wirklich dahinter, und wie schneidet die Technologie im Vergleich zu altbewährten Kegel-Übungen ab?</p>
      <h3>Was klassische Kegel-Übungen leisten</h3>
      <p>Kegel-Übungen sind das Gold-Standard-Verfahren bei Beckenbodentraining. Ihre Stärken: Sie trainieren Koordination und Körperwahrnehmung, sind kostenlos, jederzeit und überall durchführbar und bauen langfristig Muskelgedächtnis auf. Studien zeigen bei konsequenter Anwendung über 12 Wochen deutliche Verbesserungen bei Belastungsinkontinenz.</p>
      <h3>Was Magnetfeldstühle leisten</h3>
      <p>Magnetfeldgestützte Geräte aktivieren passiv die Beckenbodenmuskulatur. Die hohe Anzahl automatisierter Kontraktionen kann helfen, Muskeln aufzubauen, die willentlich kaum noch ansteuerbar sind. Das ist besonders nach Operationen oder bei stark geschwächter Muskulatur ein Vorteil.</p>
      <h3>Direkter Vergleich</h3>
      <ul>
        <li><strong>Körperwahrnehmung:</strong> Kegel ✔ | Magnetfeld ✗ (kein Lerneffekt fürs bewusste Ansteuern)</li>
        <li><strong>Muskelaufbau bei starker Schwäche:</strong> Kegel eingeschränkt | Magnetfeld ✔</li>
        <li><strong>Zugänglichkeit:</strong> Kegel überall | Magnetfeld nur in Studios oder mit eigenem Gerät</li>
        <li><strong>Kosten:</strong> Kegel kostenlos | Magnetfeld kostenpflichtig (Sitzungsgebühren)</li>
        <li><strong>Zeitaufwand pro Einheit:</strong> Kegel 5–15 Min. | Magnetfeld ca. 20–22 Min.</li>
        <li><strong>Eignung bei Körperhemmungen:</strong> Kegel neutral | Magnetfeld bekleidet, berührungsfrei ✔</li>
      </ul>
      <h3>Fazit</h3>
      <p>Beide Ansätze schließen sich nicht aus – im Gegenteil: Viele Physiotherapeutinnen und Physiotherapeuten setzen Magnetfeldtherapie gezielt als Einstieg oder Ergänzung ein, wenn aktive Übungen noch nicht möglich sind oder die Wahrnehmung für den Beckenboden fehlt. Wer bereits gut trainieren kann, ist mit regelmäßigen Kegel-Übungen meist gut beraten – und spart dabei auch Kosten.</p>
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
        ${daten.datum} &middot; ${daten.lesezeit} Lesezeit
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
  initQuiz();
});

/* -----------------------------------------------
   HIFEM-Quiz
   ----------------------------------------------- */
function initQuiz() {
  const wrap = document.getElementById('quiz-wrap');
  if (!wrap) return;

  const fragen = [
    {
      frage: 'Was beschreibt Ihre aktuelle Situation am besten?',
      optionen: [
        { id: 'belastung', text: 'Ich verliere Urin beim Husten, Niesen, Lachen oder Sport (Belastungsinkontinenz).' },
        { id: 'drang',     text: 'Ich habe plötzlichen, starken Harndrang – manchmal mit Urinverlust (Dranginkontinenz).' },
        { id: 'op',        text: 'Ich habe Beschwerden nach einer Operation (z.\u202fB. Prostata- oder Gebärmutterentfernung).' },
        { id: 'vorbeugung',text: 'Ich habe keine akuten Beschwerden und möchte vorbeugend trainieren.' },
      ]
    },
    {
      frage: 'Haben Sie bereits Beckenbodenübungen oder Physiotherapie versucht?',
      optionen: [
        { id: 'nein',       text: 'Nein, noch nicht.' },
        { id: 'kein-erfolg',text: 'Ja – aber ich spüre die richtigen Muskeln kaum oder habe keinen merklichen Erfolg gesehen.' },
        { id: 'maessig',    text: 'Ja – mit mäßigem Erfolg; ich suche eine ergänzende Methode.' },
        { id: 'gut',        text: 'Ja – mit gutem Erfolg; die Beschwerden haben sich deutlich gebessert.' },
      ]
    },
    {
      frage: 'Liegt bei Ihnen einer der folgenden Punkte vor?',
      optionen: [
        { id: 'herzschrittmacher', text: 'Herzschrittmacher oder anderes implantiertes elektronisches Gerät.' },
        { id: 'metall',            text: 'Metallimplantat im Becken- oder Hüftbereich (z.\u202fB. Hüftprothese mit Metallanteilen).' },
        { id: 'schwanger',         text: 'Ich bin schwanger.' },
        { id: 'keine',             text: 'Keiner der genannten Punkte trifft auf mich zu.' },
      ]
    },
    {
      frage: 'Wie stark beeinträchtigen die Beschwerden Ihren Alltag?',
      optionen: [
        { id: 'kaum',             text: 'Kaum – nur in wenigen, bestimmten Situationen.' },
        { id: 'spuerbar',         text: 'Spürbar – mehrmals pro Woche.' },
        { id: 'stark',            text: 'Deutlich – täglich; ich meide bestimmte Aktivitäten.' },
        { id: 'keine-beschwerden',text: 'Ich habe keine Beschwerden (nur Vorbeugung).' },
      ]
    }
  ];

  const ergebnisse = {
    nicht_geeignet: {
      css: 'ergebnis-orange',
      icon: '&#9888;',
      titel: 'Magnetfeldtherapie ist für Sie derzeit nicht geeignet',
      text: 'Aufgrund eines der genannten Faktoren (Herzschrittmacher, Metallimplantat im Beckenbereich oder Schwangerschaft) wird von HIFEM-basierter Magnetfeldtherapie abgeraten. Sprechen Sie bitte mit Ihrer Ärztin oder Ihrem Arzt über alternative Behandlungswege, die für Ihre Situation sicher sind.',
    },
    erst_uebungen: {
      css: 'ergebnis-blau',
      icon: '&#9432;',
      titel: 'Starten Sie zunächst mit gezieltem Beckenbodentraining',
      text: 'Gezielte Beckenbodenübungen und – bei Bedarf – Physiotherapie sind der empfohlene erste Schritt. Wenn nach 8–12 Wochen konsequentem Training kein ausreichender Erfolg eintritt, kann Magnetfeldtherapie als ergänzende Maßnahme in Betracht kommen.',
    },
    baustein_moeglich: {
      css: 'ergebnis-gruen',
      icon: '&#10003;',
      titel: 'Magnetfeldtherapie könnte ein sinnvoller Ergänzungsbaustein sein',
      text: 'Wenn der Beckenboden sich kaum willentlich ansteuern lässt oder klassische Übungen bisher nicht ausreichend geholfen haben, kann HIFEM-basiertes Training ergänzend unterstützen. Lassen Sie sich von einer Physiotherapeutin oder Ärztin beraten, ob und in welchem Rahmen diese Methode für Ihre konkrete Situation geeignet ist.',
    },
    kein_bedarf: {
      css: 'ergebnis-blau',
      icon: '&#9432;',
      titel: 'Ihr Beckenbodentraining wirkt gut',
      text: 'Da Sie mit klassischen Übungen bereits gute Fortschritte machen, ist Magnetfeldtherapie in der Regel nicht notwendig. Setzen Sie Ihr Training fort. Bei neuen oder veränderten Beschwerden wenden Sie sich an Ihre Ärztin oder Ihren Arzt.',
    }
  };

  let aktuelleFrageIdx = 0;
  const antworten = {};

  function berechneErgebnis() {
    const q3 = antworten[2];
    if (q3 === 'herzschrittmacher' || q3 === 'metall' || q3 === 'schwanger') {
      return ergebnisse.nicht_geeignet;
    }
    const q1 = antworten[0];
    const q2 = antworten[1];
    if (q1 === 'vorbeugung' || q2 === 'nein') {
      return ergebnisse.erst_uebungen;
    }
    if (q2 === 'gut') {
      return ergebnisse.kein_bedarf;
    }
    return ergebnisse.baustein_moeglich;
  }

  function renderFrage() {
    const frage = fragen[aktuelleFrageIdx];
    const gesamt = fragen.length;
    const fortschritt = Math.round((aktuelleFrageIdx / gesamt) * 100);
    const gewaehlt = antworten[aktuelleFrageIdx];

    wrap.innerHTML = `
      <div class="quiz-progress">
        <div class="quiz-progress-label">
          <span>Frage ${aktuelleFrageIdx + 1} von ${gesamt}</span>
          <span>${fortschritt}\u202f% abgeschlossen</span>
        </div>
        <div class="quiz-progress-bar">
          <div class="quiz-progress-fill" style="width:${fortschritt}%"></div>
        </div>
      </div>
      <div class="quiz-card">
        <p class="quiz-frage">${frage.frage}</p>
        <div class="quiz-optionen">
          ${frage.optionen.map(opt => `
            <button class="quiz-option${gewaehlt === opt.id ? ' selected' : ''}" data-id="${opt.id}">
              <span class="quiz-option-dot"></span>
              <span>${opt.text}</span>
            </button>
          `).join('')}
        </div>
        <div class="quiz-nav">
          ${aktuelleFrageIdx > 0 ? '<button class="quiz-btn-back">Zurück</button>' : ''}
          <button class="quiz-btn-next" ${gewaehlt ? '' : 'disabled'}>
            ${aktuelleFrageIdx < gesamt - 1 ? 'Weiter' : 'Ergebnis anzeigen'}
          </button>
        </div>
      </div>
    `;

    wrap.querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('click', () => {
        antworten[aktuelleFrageIdx] = btn.dataset.id;
        wrap.querySelectorAll('.quiz-option').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        wrap.querySelector('.quiz-btn-next').disabled = false;
      });
    });

    const backBtn = wrap.querySelector('.quiz-btn-back');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        aktuelleFrageIdx--;
        renderFrage();
      });
    }

    wrap.querySelector('.quiz-btn-next').addEventListener('click', () => {
      if (!antworten[aktuelleFrageIdx]) return;
      if (aktuelleFrageIdx < fragen.length - 1) {
        aktuelleFrageIdx++;
        renderFrage();
      } else {
        renderErgebnis();
      }
    });
  }

  function renderErgebnis() {
    const e = berechneErgebnis();
    wrap.innerHTML = `
      <div class="quiz-ergebnis ${e.css}">
        <span class="quiz-ergebnis-icon">${e.icon}</span>
        <h3>${e.titel}</h3>
        <p>${e.text}</p>
        <p class="quiz-hinweis">Diese Einschätzung ersetzt keine ärztliche oder physiotherapeutische Beratung.</p>
        <button class="quiz-restart-btn">Quiz neu starten</button>
      </div>
    `;
    wrap.querySelector('.quiz-restart-btn').addEventListener('click', () => {
      aktuelleFrageIdx = 0;
      Object.keys(antworten).forEach(k => delete antworten[k]);
      renderFrage();
    });
  }

  renderFrage();
}
