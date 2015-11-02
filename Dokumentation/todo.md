# Felix
- Templates @ Directive Templates
- SCSS file struktur
- GULP Sass & livereload 
- tab-system Login/ Register
- Message Feedback window: color and animate
- Start view: respond valid message with ng
- done:minimal view tablet max-width

# Martin
- UnitTests..
- Minify-Build > js.min (1x head, 1x body@end)
- Laden der Such-Seite dauert sehr lange --> Bilder kleiner speichern?
- Mehr-Filter: alle drei Kriterien implementieren
- Detail-View, anzahl Sterne eingabe fehlt
- user edit funktion mit nur 1 button zum speichern
- teaser bottom

# Bugs2Fix
- injections (bringmehome)
- EditRecipe > labeltext <-> populated text übereinander
- searchREcipe > hover state
- Message Feedback window: wann wird es engezeigt? wie alerts in fb-message includen? --> fixed (minus in index.html)

- Der erste Dialog (Login und Registrieren) sieht auf kleinen Devices nicht sehr ideal aus. 
- Login und Logout Button gleichzeitig "visible"  
- Gibt es einen Grund weshalb der "eingeloggte" Button Gelb ist? 
- Beim Registrieren kommt kein "Fehler" wenn es nicht geklappt hat. 
- F5 ist nicht unterstützt 
- "Suche" als Titel für den Main-Inhalt finde ich speziel ist ein spezieller Titel, wäre eher "Rezepte"? 
- Nach einem Login kommt man direkt auf die Übersicht 
- Placeholder Text funktioniert ab und zu nicht ideal (Titel verdeckt den Text oder Linie ist zu weit oder es gibt einen "Border" - Placeholder sichtbar im Inputfeld obwohl Text angegeben)

REST-API
- Die Nomen sollten Mehrzahl sein also nicht "recipe" sondern "recipes" 
- Bei Client sind alle REST-Routen in einem Service abgebieltet (User und Recipe) 
- Bei den Client Routes wäre es ev.- sinnvoll die Routes mit placeholders zu versehen z.B.  "/api/recipe/{id}"

# Bugs done
- Rezept erfassen mit Pflicht-Felder (MB: name, beschr)
- EditRecipe > After Edit zum ViewRecipe Redirect Screen gelangen. --> ?
- Message entfernen nach x-Sekunden oder nach click             (MB mit JavaScript)
- logger-service mit toastr -> Message-Service
- Rezept erfassen mit Pflicht-Felder (MB: name, beschr)
- Add Rating - > POST 404 /api/rating
- add rating erscheint immer auch wenn schon ein rating von mir da ist
