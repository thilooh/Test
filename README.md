# Immobilienbewertung Landingpage

Eine conversion-optimierte Landingpage für die kostenlose Online-Bewertung von Immobilien.

## Features

### 🎯 Conversion-Optimierung
- **Klare Wertversprechen**: Kostenlos, ohne Registrierung, in 3 Minuten
- **Trust-Elemente**: Statistiken, Bewertungen, transparente Methodik
- **Progressive Formularführung**: Mehrstufiger Prozess für bessere User Experience
- **Sofortige Ergebnisse**: Direktes Feedback mit geschätztem Immobilienwert

### 🏠 Immobilientypen
- Einfamilienhaus
- Eigentumswohnung
- Doppelhaushälfte
- Reihenhaus
- Mehrfamilienhaus
- Grundstück

### 📊 Bewertungsmethoden
- **Vergleichswertverfahren**: Analyse vergleichbarer Immobilien
- **Sachwertverfahren**: Berechnung auf Basis der Baukosten
- **Ertragswertverfahren**: Bewertung basierend auf Mieteinnahmen

### 🎨 Design-Features
- Modernes, responsives Design
- Mobile-optimiert
- Smooth Scrolling & Animationen
- FAQ mit Akkordeon-Funktion
- Druckbare Bewertungsergebnisse

### 📝 Formularfelder
- Adressdaten (Straße, PLZ, Ort)
- Immobiliendetails (Wohnfläche, Grundstücksfläche, Zimmer)
- Baujahr und Renovierungsjahr
- Zustand der Immobilie
- Ausstattungsmerkmale
- Kontaktdaten

## Technologie

- **HTML5**: Semantisches Markup
- **CSS3**: Custom Properties, Grid, Flexbox, Animationen
- **Vanilla JavaScript**: Keine Abhängigkeiten, optimierte Performance

## Installation

1. Klonen Sie das Repository:
```bash
git clone <repository-url>
cd Test
```

2. Öffnen Sie `index.html` in Ihrem Browser:
```bash
open index.html
```

Oder starten Sie einen lokalen Server:
```bash
python -m http.server 8000
```

Dann öffnen Sie: `http://localhost:8000`

## Struktur

```
.
├── index.html          # Haupt-HTML-Datei
├── styles.css          # Styling und Layout
├── script.js           # Interaktivität und Bewertungslogik
└── README.md          # Dokumentation
```

## Bewertungsalgorithmus

Die Immobilienbewertung basiert auf mehreren Faktoren:

1. **Basispreis pro m²**: Regional basierend auf PLZ (vereinfachtes Modell)
2. **Immobilientyp-Multiplikator**: Unterschiedliche Bewertung je nach Typ
3. **Zustandsfaktor**: Neuwertig (1.2x) bis Sanierungsbedürftig (0.6x)
4. **Altersfaktor**: Berücksichtigung des Gebäudealters
5. **Renovierungsbonus**: Aufwertung bei kürzlicher Renovierung
6. **Ausstattungsmerkmale**: Zusätzlicher Wert für Features
7. **Grundstückswert**: Separate Bewertung des Grundstücks

**Ergebnis**: Geschätzter Wert mit ±10% Wertspanne

## Conversion-Optimierungen

### Trust-Signale
- ✓ 50.000+ durchgeführte Bewertungen
- ✓ 4.8/5 Kundenbewertung
- ✓ 15+ Jahre Erfahrung

### User Experience
- Progressive Disclosure: Schritt-für-Schritt-Führung
- Visuelles Feedback bei Auswahl
- Echtzeit-Validierung der Formulareingaben
- Klare Fortschrittsanzeige

### Call-to-Actions
- Primärer CTA: "Jetzt kostenlos bewerten"
- Sekundäre CTAs: "Termin vereinbaren", "Beratung anfordern"
- Sticky Header mit Navigation

## Anpassungen

### Farben
Passen Sie die Farbvariablen in `styles.css` an:

```css
:root {
    --primary-color: #0066cc;
    --primary-hover: #0052a3;
    /* ... weitere Farben */
}
```

### Preismodell
Aktualisieren Sie die Funktion `getBasePriceForZipcode()` in `script.js` mit echten Marktdaten.

### Analytics
Integrieren Sie Analytics in der Funktion `trackEvent()` in `script.js`:

```javascript
function trackEvent(eventName, eventData) {
    // Google Analytics
    gtag('event', eventName, eventData);

    // Facebook Pixel
    fbq('track', eventName, eventData);
}
```

## Browser-Kompatibilität

- Chrome (letzte 2 Versionen)
- Firefox (letzte 2 Versionen)
- Safari (letzte 2 Versionen)
- Edge (letzte 2 Versionen)

## Responsive Breakpoints

- Desktop: > 768px
- Mobile: ≤ 768px

## Performance

- Keine externen Abhängigkeiten
- Optimierte CSS und JavaScript
- Lazy Loading bereit
- Print-optimierte Styles

## To-Do / Erweiterungen

- [ ] Backend-Integration für Datenspeicherung
- [ ] Email-Versand der Bewertungsergebnisse
- [ ] Detaillierte Marktdaten-API-Integration
- [ ] A/B-Testing-Framework
- [ ] Multi-Language-Support
- [ ] Bildupload für Immobilienfotos
- [ ] PDF-Export mit Logo und Branding
- [ ] CRM-Integration

## Lizenz

Alle Rechte vorbehalten.
