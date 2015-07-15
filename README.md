# Rezept-Single-Page-App

## Anforderungen (Views / Sichten)

### 1. Start View
Fullscreen

Login Username / PW
- link Login
- link Register New User
- Guest View
- eventuell: Slider mit 3 Neuen Rezepten (Titel, Bild, Link)


### 2. Search View

- Search Field (Text) 
- Filter mit 6 Kategorien
- Filter mit Zubereitungszeit
- Filter mit Bewertung
- Sotierung nach Bewertung
- Sortierung nach Zubereitungszeit
- Neueste Rezepte


### 3. Listview der Treffer (Scrollable)

- Bild (1.Bild) klein
- Titel 
- Zubereitungszeit
- Bewertung


### 4. Rezept Detail

- Titel Rezept
- Name des Authors
- Anzahl Personen
- Bilder (Slider?) Rezept
- Zutaten
- Zubereitung 

- Backzeit
- Zubereitungszeit
-	Buttons: Link -> Print Rezept
		            -> print Einkaufsliste
	              (Backzeit -> Timer)
- Gesammtwertung Rating (durchschnitt)

### 5.Rating View

Button: Add Feedback 
(beinhaltet Rating & Comment und username)

- Liste Feedback
- Wenn User= rezeptOwner/ Admin -> Button 'Edit' 'Delete'
- Rating Rezept 1-5 Sterne
- Kommentar Rezept: Textarea
- Username Kommentargeber automatisch

### 6. Rezept add & Edit View

- Titel Rezept Textfield
- Descritpion Rezept - Textarea
- Kategorie Auswahl zwingend!
- Bild 1 zwingend
- (Bild 2 -3 optional)  
- Anzahl Personen (1-4)
- Zutaten: 
	Liste: Menge + Einheit (dropdown, optional)  + Zutat
	(zB: 2 TL Thymian)
	+ weitere Zutaten erfassen

- Steps: 
	1.Step: Textarea
	2.Step: Textarea
	+ weitere Steps
- Zubereitungszeit  integer field
- Backzeit 	    Minuten Dropdown 
- Buttons: Cancel 
	  Save 
	  (Preview Rezept)


### 7 User View
7.1 Add new user:

- Name: Textfield
- Passwort: Textfield hidden
- E-mail: textfield

7.2 Edit user

- Name: Textfield
- Passwort: Textfield hidden
- E-mail: textfield

Liste meine Rezepte:
Rezept 1 Edit / Delete
(falls Superuser: Liste mit allen Usern: Edit /Delete )



### Navigation

- Login/Logout
- User (wenn eingeloggt)
- Add-Menu (-> please Login notification)
- Search


## Optionale Features (wenn Zeit reicht)
- Timer in Rezept-Instruktion (z.B. für Backzeit)
- Benutzerverwaltung Administrator Sicht innerhalb der Benutzerverwaltung
- Vorschau Rezeptbearbeitung 
- Mehrsprachigkeit
- Neueste 5 Rezpete in einem Splider als Teaser


## Technik
- Style auf Basis von Material Design Lite  http://www.getmdl.io/index.html
- SCSS Präprozessor
- Gulp
- Angular 1.4
- NEDB
 
