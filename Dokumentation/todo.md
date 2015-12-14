# Open
## Felix
- Default-Datenbank mit einigen Rezepten
- SCSS file struktur
- Toastr-Meldung nicht modal -> in einem container im index.html eingelagert. aktionen wärend toast-anzeige möglich. problem fixed?
- Placeholder bei Bewertung [(mgfeller) Placeholder Text funktioniert ab und zu nicht ideal (Titel verdeckt den Text oder Linie ist zu weit oder es gibt einen "Border" - Placeholder sichtbar im Inputfeld obwohl Text angegeben)]
- user test durchführen -> skeleton für Usertests im Dokumentation Folder.
- viewUser-View: Layout mit liste der Rezepte + grösse des editUser-Formulars -> grösse geändert. User Filter funtioniert nicht im Template. -> tbd
- focus auf alle Buttons

## Martin
- UnitTests.. (server: mocka + chai, protractor for E2E; https://github.com/fxberry/BringMeHome.Test/blob/master/Client.UnitTests/specs/services/Strings.ts)
- user test durchführen
- spinner während bearbeiten
- anzahl-input: keine number

# Closed

## Unklar
- (mgfeller) Rest: Bei den Client Routes wäre es ev.- sinnvoll die Routes mit placeholders zu versehen z.B.  "/api/recipe/{id}"

## Works as designed
- (mgfeller) Gibt es einen Grund weshalb der "geloggte" Button Gelb ist? -> nein, aber als UX auszeichnung
- (mgfeller) Nach einem Login kommt man direkt auf die Übersicht  -> Programmed as specified

## Bugs done
- toastr-text: save recipe zu lang
- injections (bringmehome)
- Rezept erfassen mit Pflicht-Felder (MB: name, beschr)
- EditRecipe > After Edit zum ViewRecipe Redirect Screen gelangen. --> ?
- Message entfernen nach x-Sekunden oder nach click             (MB mit JavaScript)
- logger-service mit toastr -> Message-Service
- Rezept erfassen mit Pflicht-Felder (MB: name, beschr)
- Add Rating - > POST 404 /api/rating
- add rating erscheint immer auch wenn schon ein rating von mir da ist
- Message Feedback window: wann wird es engezeigt? wie alerts in fb-message includen? --> fixed (minus in index.html)
- (mgfeller) Login und Logout Button gleichzeitig "visible"  
- (mgfeller) "Suche" als Titel für den Main-Inhalt finde ich speziel ist ein spezieller Titel, wäre eher "Rezepte"? 
- (mgfeller) Beim Registrieren kommt kein "Fehler" wenn es nicht geklappt hat. 
- jquery für materialize in eigene libs aufnehmen
- (mgfeller) F5 ist nicht unterstützt
- (mgfeller) Rest: Die Nomen sollten Mehrzahl sein also nicht "recipe" sondern "recipes" 
- user edit funktion mit nur 1 button zum speichern
- Laden der Such-Seite dauert sehr lange --> Bilder kleiner speichern?
- GULP Sass & livereload server auf port 3001  - done
- Start view: respond valid message with ng -done
- minimal view tablet max-width -done
- error handling für backend-call error's
- Detail-View, anzahl Sterne eingabe fehlt
- Mehr-Filter: alle drei Kriterien implementieren
- (mgfeller) Der erste Dialog (Login und Registrieren) sieht auf kleinen Devices nicht sehr ideal aus. --> improved, not perfect
- (mgfeller) Rest: Bei Client sind alle REST-Routen in einem Service abgebieltet (User und Recipe) 
- EditRecipe > labeltext <-> populated text übereinander -> fixed
- searchRecipe > hover state ->fixed
- ViewUser Safe-button: Fehler bei Speichern. Button inactive setzen?
- beim eingeloggtem User sollte editUser geladen werden um pw oder email zu ändern. keine Editiermöglichkeit.
- tab-system Login/ Register ->tried - again soon ...
- Message Feedback window: color and animate
- edit recipe > cancel
- addRecipe: photoupload wird nicht im überprüft, ob new file selected. Wenn schwierig- > lassenwirsein... mind 1 pflicht!
- viewRecipe: Ingredients + Steps anzeigen -> done
- AddRecipe: Zutaten min gt 0, keine minuswerte - done
- rating in user's recipes, edit + add gleichzeitig!
- Minify-Build > js.min (1x head, 1x body@end)
- login nach user-change schlägt fehl (viele users in db?)
- editUser: Name kein Input-Feld + UserId nicht anzeigen -> done
- font und titel anpassen. -> done
- searchlist limit to 10 and button for more
- searchList with stars
- teaser bottom
- neuestes rezept ist das beste!!
- avg-recipe rating berechnung! (unittest)
- neuestes Rezept falsch
- sort searchlist
- Rezept löschen
- Toastr --> Style!
- multi lang
- Safe Password: Error bei neuen User. Passwort ändern hat bei neuen Usern fehler gegeben. 
- Nach Edit Recipe: +1 Zutat, +1 Step; wenn man ein Rezept editiert, kommt immer ein weiterer Step und eine Zutat dazu
- label active wird nach oben rechts translated. -> done
- Toastr-Meldung nicht modal -> in einem container im index.html eingelagert. aktionen wärend toast-anzeige möglich. problem fixed?
