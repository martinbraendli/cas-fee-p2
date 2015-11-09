# Felix
- Default-Datenbank mit einigen Rezepten
- Templates @ Directive Templates
- SCSS file struktur
- GULP Sass & livereload server auf port 3001  - done
- tab-system Login/ Register ->tried - again soon ...
- Message Feedback window: color and animate
- Start view: respond valid message with ng -done
- minimal view tablet max-width -done

# Martin
- UnitTests..
- Minify-Build > js.min (1x head, 1x body@end)
- Laden der Such-Seite dauert sehr lange --> Bilder kleiner speichern?
- Mehr-Filter: alle drei Kriterien implementieren
- Detail-View, anzahl Sterne eingabe fehlt
- teaser bottom
- https://fonts.googleapis.com/icon?family=Material+Icons lokal
- $resource statt $http?
- $http.get mit success statt then?

# Bugs2Fix
- EditRecipe > labeltext <-> populated text übereinander
- searchREcipe > hover state

- (mgfeller) Rest: Bei Client sind alle REST-Routen in einem Service abgebieltet (User und Recipe) 
- (mgfeller) Rest: Bei den Client Routes wäre es ev.- sinnvoll die Routes mit placeholders zu versehen z.B.  "/api/recipe/{id}"
 
- (mgfeller) Der erste Dialog (Login und Registrieren) sieht auf kleinen Devices nicht sehr ideal aus. --> improved, not perfect
- (mgfeller) Gibt es einen Grund weshalb der "geloggte" Button Gelb ist? -> nein, aber als UX auszeichnung
- (mgfeller) Nach einem Login kommt man direkt auf die Übersicht  -> Programmed as specified
- (mgfeller) Placeholder Text funktioniert ab und zu nicht ideal (Titel verdeckt den Text oder Linie ist zu weit oder es gibt einen "Border" - Placeholder sichtbar im Inputfeld obwohl Text angegeben)


# Bugs done
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
