# Beckenboden Magazin

Eine moderne, vollständig statische HTML/CSS/JS-Website – ein Gesundheitsmagazin rund um das Thema Beckenbodengesundheit mit Schwerpunkt auf Inkontinenz, Übungen und medizinisch fundierten Ratgeberartikeln.

## Über das Projekt

Das Beckenboden Magazin bietet Betroffenen, Angehörigen und Interessierten fundierte, von (fiktiven) Fachleuten verfasste Artikel zu Themen wie:

- Harninkontinenz (Ursachen, Formen, Behandlung)
- Beckenboden-Übungen für den Alltag
- Rückbildung nach der Geburt
- Physiotherapie und Biofeedback
- Ernährung und Lebensweise
- Männergesundheit und Prostata

## Features

### Inhalt
- **9 ausführliche Artikel** in 6 Themenkategorien
- **Artikel-Modal**: Volltext wird in einem barrierefreien Dialog angezeigt
- **4 Experten-Profile** (Ärztin, Physiotherapeut, Professorin, Hebamme)
- **6 FAQ-Einträge** im Akkordeon-Format

### Funktionalität
- **Kategoriefilter**: Artikel nach Thema filtern (Inkontinenz, Übungen, Schwangerschaft, Ernährung, Männergesundheit, Therapie)
- **Volltextsuche**: Artikel nach Stichwort durchsuchen
- **Newsletter-Formular**: Mit E-Mail-Validierung und Datenschutz-Zustimmung
- **Responsives Hamburger-Menü** für mobile Geräte
- **Smooth Scrolling** für alle Anker-Links
- **Barrierefreiheit**: ARIA-Attribute, semantisches HTML, Tastaturnavigation

### Design
- Modernes, seriöses Gesundheitsmagazin-Design
- Farben: Teal/Grün als Primärfarbe (medizinisch, vertrauenswürdig)
- Vollständig responsiv (Desktop, Tablet, Mobile)
- CSS Custom Properties (leicht anpassbar)
- Animiertes Modal mit Overlay
- Farbkodierte Kategorien

## Technologie

- **HTML5**: Semantisches Markup, ARIA-Attribute
- **CSS3**: Custom Properties, Grid, Flexbox, Animationen, `clamp()`
- **Vanilla JavaScript**: Keine Abhängigkeiten, modulare Funktionen

## Struktur

```
.
├── index.html    # Haupt-HTML-Datei (alle Sektionen)
├── styles.css    # Design, Layout, Animationen
├── script.js     # Interaktivität (Filter, Suche, Modal, FAQ, Newsletter)
└── README.md     # Dokumentation
```

## Installation & Start

```bash
# Repository klonen
git clone <repository-url>
cd Test

# Im Browser öffnen (einfachste Methode)
open index.html

# Oder mit lokalem Server
python -m http.server 8000
# dann: http://localhost:8000
```

## Sektionen der Webseite

| Sektion | Beschreibung |
|---|---|
| **Header** | Sticky Navigation mit Logo und Links |
| **Hero** | Titel, Suchfeld, Statistiken, Featured-Artikel |
| **Kategorien** | Filter-Buttons für alle 6 Themenkategorien |
| **Artikel** | 9 Artikel-Karten mit Volltext-Modal |
| **Experten** | Vorstellung des Redaktionsteams |
| **FAQ** | 6 häufige Fragen im Akkordeon |
| **Newsletter** | Anmeldeformular mit Validierung |
| **Footer** | Links, Rechtliches, Disclaimer |

## Anpassungen

### Farben ändern
Passen Sie die CSS-Variablen in `styles.css` an:

```css
:root {
    --primary:       #2a7d6f;  /* Primärfarbe */
    --primary-dark:  #1e5f54;  /* Hover-Zustand */
    --primary-light: #e8f5f3;  /* Hintergründe */
    /* ... */
}
```

### Neuen Artikel hinzufügen

1. Fügen Sie in `index.html` ein neues `<article class="artikel-karte" data-kategorie="...">` hinzu
2. Tragen Sie den Volltext in `script.js` im Objekt `artikelInhalte` ein
3. Wählen Sie die passende Hintergrundklasse (z.B. `inkontinenz-bg`)

### Newsletter-Backend anbinden

Ersetzen Sie in `script.js` den Demo-Code im `submit`-Handler durch Ihren API-Aufruf:

```javascript
// Beispiel mit fetch
fetch('/api/newsletter', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, name })
});
```

## Browser-Kompatibilität

- Chrome, Firefox, Safari, Edge (jeweils letzte 2 Versionen)
- Mobile: iOS Safari, Android Chrome

## Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| > 900px | Zweispaltig (Hero, Newsletter) |
| 680–900px | Einspaltig |
| < 680px | Mobile, Hamburger-Menü |

## Lizenz

Alle Rechte vorbehalten.
