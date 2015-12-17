# Rezept-Single-Page-App

## Schritte zur Installation
1. Terminal: npm install
2. Gulp-Task "build"
3. Start "index.js" innerhalb Verzeichnis "build" 

## Besonderes
- Bilder werden vor dem Hochladen auf eine Grösse von 400x300 Pixel clientseitig verkleinert.
- Das Backend wurde selbst entwickelt
- Unittests: öffne spec/SpecRunner.html in einem Browser

## Anforderungen (Views / Sichten)

### 1. Start View (default)

- Login-Maske für bestehende Benutzer (Name, Passwort)
- Register-Formular für neue Benutzer (Name, Email, Passwort)
- Gäste-Link für Einstieg ohne Anmeldung

### 2. Alle Rezepte (searchRecipe)

- 3 Teaser (mit jeweils Titel, Bild, Link):
  - Neues Rezept erstellen
  - Anzeige des besten Rezeptes
  - Anzeige des neuesten Rezeptes

- Suche
  - Freitext-Feld
- Erweiterte Suche
  - Filter mit 6 Kategorien (Hauptmahlzeit, Dessert, ...)
  - Filter mit Zubereitungszeit (Dauer)
  - Filter mit Bewertung (Anzahl Sterne)
- Resultate
  - Default sortiert nach Erstellungsdatum (Alter des Rezeptes)
  - Sortierung nach Titel
  - Sortierung nach Bewertung
  - Sortierung nach Author

### 3. Listview der Treffer (searchResultlist)

- Bild (1.Bild) klein
- Titel 
- Bewertung (Durchschnitt aller Bewertungen zu diesem Rezept, diese werden beim Laden aus der Datenbank berechnet)
- Author


### 4. Rezept Detail (viewRecipe)

- Titel
- Beschreibung
- Zusatzinformationen (Author, Zubereitungszeit, Kochzeit, Anzahl Personen)
- Bilder als Slider
- Zutaten
- Zubereitung in Schritten
- Liste aller Bewertungen (5. Rating View)

### 5. Rating View (listRecipeRatings)

- Bewertung abgeben (falls eingeloggt und noch keine Bewertung abgegeben)
  - Rating Rezept 1-5 Sterne
  - Kommentar Rezept: Textarea
  - Username Kommentargeber automatisch
- Liste der Bewertungen zum aktuellen Rezept
  - Eigene Bewertung kann in der Liste bearbeitet werden

### 6. Rezept erfassen & bearbeiten (addeditRecipe)

Gleicher Aufbau wie die Rezeptanzeige (Detail)

- Titel (Pflichtfeld)
- Beschreibung (Pflichtfeld)
- Bilder als Slider (mindestens ein Photo ist pflicht)
- Zusatzinformationen (Author, Zubereitungszeit, Kochzeit, Anzahl Personen)
- Zubereitung in Schritten Über "nächster Schritt" können beliebig weitere Schritte hinzugefügt werden
- Zutaten können erfasst werden. Über "weitere Zutaten" können beliebig weitere Zutaten hinzugefügt werden

- Bearbeitung / Erfassen kann gespeichert oder abgebrochen werden

### 7. User View

#### 7.1 Eigene Rezepte (ebenfalls searchResultlist)

Es werden nur eigene Rezepte angezeigt. Gleiche Sortierungsmöglichkeiten wie auf der Hauptsuche.

#### 7.2 Angaben zum Benutzer

- Name: kann nicht geändert werden
- E-mail + Passwort, kann geändert werden


### Navigation

- Alle Rezepte
- Rezept erfassen (nur wenn eingeloggt)
- Benutzer (nur wenn eingeloggt)
- Sprachen (Deutsch, Englisch)
- Login/Logout


## Optionale Features (wenn Zeit reicht)

### Umgesetzt

- Mehrsprachigkeit
- Neueste 5 Rezpete in einem Splider als Teaser (nur teilweise: es wird jeweils das neueste Rezept angezeigt) 


### Offen

- Timer in Rezept-Instruktion (z.B. für Backzeit)
- Benutzerverwaltung Administrator Sicht innerhalb der Benutzerverwaltung
- Vorschau Rezeptbearbeitung 


## Technik
- Styles auf Basis von Material Design https://www.google.com/design/spec/material-design/introduction.html
- SCSS Präprozessor
- Gulp
- Angular 1.4
- NEDB
 