///<reference path='_reference.ts' />

/**
 *
 */
module fettyBossy {
    'use strict';

    angular.module($injects.fettyBossy, [
        'ngRoute',
        'toastr',
        'pascalprecht.translate'
    ]);

    /**
     * configure i18n
     */
    angular.module($injects.fettyBossy).config(function ($translateProvider) {
        $translateProvider.translations('en', {
            SWITCH_LANG: 'Switch language',
            BUTTON_LANG_EN: 'english',
            BUTTON_LANG_DE: 'german',
            BUTTON_SAVE: 'save',
            BUTTON_FIND: 'find',
            BUTTON_TO_RECIPE: 'view recipe',
            BUTTON_LOGON_GUEST: 'Guest - Login',
            BUTTON_REGISTER: 'register',
            BUTTON_CREATE: 'create',

            MENU_ALL: 'all recipes',
            MENU_CREATE: 'create recpie',
            MENU_LOGIN: 'login',
            MENU_LOGOUT: 'logout',
            MENU_USER: 'user',

            USER_LOGIN_DETAILS_TITLE: 'User Login Details',
            USERDETAIL_NAME: 'Name: <br/>(can not be changed)',
            PASSWORD: 'change Password',
            EMAIL: 'change Email',

            LOGIN_TITLE: 'Login for members',
            LOGIN_NAME: 'Username',
            LOGIN_PW: 'Password',
            LOGIN_GUEST: 'Logon for guests',

            REGISTER_TITLE: 'New registration',
            MISSING_PW: 'Please enter password.',
            MISSING_EMAIL: 'Please enter your email address.',
            INVALID_EMAIL: 'This is <i>not</i> a valid email address.',
            MISSING_NAME: 'Please enter your name.',

            SEARCH_RECIPES: 'search recipes',
            SEARCH_TITLE: 'Choose recipe',
            SEARCH_SUBTITLE: 'Find and choose recipe',
            SEARCH_FORM_TITLE: 'Recipe search',
            SEARCH_OPTIONS: 'Special Search Filters',
            SEARCH_EXPAND_1: 'few',
            SEARCH_EXPAND_2: 'more',
            SEARCH_CATEGORY: 'Choose category',
            CATEGORY_APPETIZER: 'Appetizer',
            CATEGORY_MAIN: 'Main course',
            CATEGORY_DESSERT: 'Dessert',
            CATEGORY_SNACK: 'Snack',
            SEARCH_RATING_TITLE: 'Rating',
            SEARCH_RATING_TEXT: 'find by rating',
            SEARCH_PREP_TIME_TITLE: 'Preparation time',
            SEARCH_PREP_TIME_OPT_1: '10 - 20 min',
            SEARCH_PREP_TIME_OPT_2: '20 - 30 min',
            SEARCH_PREP_TIME_OPT_3: '30 - 40 min',
            SEARCH_PREP_TIME_OPT_4: '40 - 50 min',
            SEARCH_PREP_TIME_OPT_5: '1h and more',

            CREATE_IMAGE_ERROR: 'Wrong type of file (must be image)',

            VIEW_USER_TITLE: 'My account',
            VIEW_USER_RECIPES: 'My recipes',

            VIEW_RECIPE_TITLE: 'Recipes',
            VIEW_RECIPE_SUBTITLE: 'read and cook',
            VIEW_RECIPE_BTN_EDIT: 'edit this recipe',
            VIEW_RECIPE_BTN_DELETE: 'delete this recipe',
            VIEW_RECIPE_DESCRIPTION: 'Description',
            VIEW_RECIPE_DATAS: 'Recipe datas',
            VIEW_RECIPE_DATA_1: 'Recipe:',
            VIEW_RECIPE_DATA_2: 'Author:',
            VIEW_RECIPE_DATA_3: 'Number of person:',
            VIEW_RECIPE_DATA_4: 'Baking time:',
            VIEW_RECIPE_DATA_5: 'Preparation time:',
            VIEW_RECIPE_PREP_TITLE: 'Preparation: Ingredients',
            VIEW_RECIPE_PREP_SBS: 'Preparation step by step',
            VIEW_RECIPE_PREP_STEP: 'Step ',

            EDIT_RECIPE_TITLE_EDIT: 'Edit recipe',
            EDIT_RECIPE_TITLE_ADD: 'Add recipe',
            EDIT_RECIPE_BTN_SAVE: 'Save recipe',
            EDIT_RECIPE_BTN_CANCEL: 'Cancel',
            EDIT_RECIPE_BTN_DELETE: 'Delete',
            EDIT_RECIPE_PHOTO: '1. Photo',
            EDIT_RECIPE_PHOTO_MISSING: 'Add at least one photo',
            EDIT_RECIPE_NAME: '2. Name of the recipe',
            EDIT_RECIPE_NAME_LABEL: 'Name of the recipe',
            EDIT_RECIPE_NAME_LABEL_MISSING: 'Please enter the name of the recipe',
            EDIT_RECIPE_DESCR_LABEL: 'Description of the menu in some sentences',
            EDIT_RECIPE_DESCR_LABEL_MISSING: 'Please enter the description',
            EDIT_RECIPE_PERSON: 'Person',
            EDIT_RECIPE_PERSON_INPUT: 'Number of person',
            EDIT_RECIPE_CATEGORY: 'Category',
            EDIT_RECIPE_BAKING_TIME: 'Cooking time',
            EDIT_RECIPE_BAKING_TIME_NO: 'No cooking',
            EDIT_RECIPE_PREPARATION_TIME: 'Preparation time',
            EDIT_RECIPE_PREPARATION_TIME_SHORT: 'Very short',
            EDIT_RECIPE_PREPARATION: '3. Preparation',
            EDIT_RECIPE_PREPARATION_TEXT: 'Descripe <strong>step by step</strong> the preparation of the recipe',
            EDIT_RECIPE_PREPARATION_NEXT_STEP: 'Next step',
            EDIT_RECIPE_INGREDIENTS: '4. Ingredients',
            EDIT_RECIPE_INGREDIENTS_TEXT: 'Add all required <strong>Ingredients</strong> for the recipe',
            EDIT_RECIPE_INGREDIENT: 'Ingredient',
            EDIT_RECIPE_INGREDIENT_ADD: 'Add ingredient',
            EDIT_RECIPE_INGREDIENT_AMOUNT: 'Amount',
            EDIT_RECIPE_INGREDIENT_UNIT: 'Unit',

            RATING_TITLE: 'All ratings for:',
            RATING_USER_1: 'User ',
            RATING_USER_2: ' wrote:',

            ADD_EDIT_RATING_TITLE: 'Rate this recipe',
            ADD_EDIT_RATING_SUBTITLE: 'in stars',
            ADD_EDIT_RATING_COMMENT: 'Your comment',
            ADD_EDIT_RATING_COMMENT_LABEL: 'Comment',
            ADD_EDIT_RATING_BTN_SAVE: 'Save rating',

            SEARCH_RESULT_TITLE: 'Results',
            SEARCH_RESULT_LIST_HEAD_RECIPE: 'Recipe',
            SEARCH_RESULT_LIST_HEAD_RATING: 'Rating',
            SEARCH_RESULT_LIST_HEAD_AUTHOR: 'Author',
            SEARCH_RESULT_LIST_FOUND_MORE_1: 'More then ',
            SEARCH_RESULT_LIST_FOUND_MORE_2: ' recipe found',
            SEARCH_RESULT_LIST_BTN_SHOW_MORE: 'show 10 more',
            SEARCH_RESULT_LIST_NO_ENTRIES: 'No recipes for given filter found',

            ERROR_LOAD_RECIPE: 'Error during loading recipe',
            ERROR_LOAD_RECIPES: 'Error during loading recipes',
            ERROR_LOAD_RATING: 'Error during loading ratings',
            ERROR_NOT_LOGGED_IN: 'Not logged in!',
            RECIPE_SAVE_OK: 'Recipe saved',
            RECIPE_SAVE_FAILED: 'Recipe could not be saved',
            RATING_SAVE_OK: 'Rating saved',
            RATING_SAVE_FAILED: 'Rating could not be saved',
            USER_REGISTER_OK: 'User registered',
            USER_REGISTER_FAILED: 'User could not be registered',
            USER_SAVE_OK: 'User saved',
            USER_SAVE_FAILED: 'User could not be saved',
            RECIPE_DELETE_OK: 'Recipe deleted',
            RECIPE_DELETE_FAILED: 'Recipe could not be deleted',

            TEASER_TITLE_NEW: 'Your own',
            TEASER_TITLE_NEW_TEXT: 'Registered user can create their own recipes',
            TEASER_TITLE_BEST: 'Best recipe',
            TEASER_TITLE_NEWEST: 'Newest recipe',

            ERROR_LOGIN_FAILED: 'Login failed',
            IMAGE_CONVERTING: 'Image resize in progress'
        });
        $translateProvider.translations('de', {
            SWITCH_LANG: 'Sprache wechseln',
            BUTTON_LANG_EN: 'englisch',
            BUTTON_LANG_DE: 'deutsch',
            BUTTON_SAVE: 'Speichern',
            BUTTON_FIND: 'Finden',
            BUTTON_TO_RECIPE: 'zum Rezept',
            BUTTON_LOGON_GUEST: 'Gast - Login',
            BUTTON_REGISTER: 'Registrieren',
            BUTTON_CREATE: 'erfassen',

            MENU_ALL: 'Alle Rezepte',
            MENU_CREATE: 'Rezepte erfassen',
            MENU_LOGIN: 'Einloggen',
            MENU_LOGOUT: 'Abmelden',
            MENU_USER: 'Benutzer',

            USER_LOGIN_DETAILS_TITLE: 'Benutzerdetails',
            USERDETAIL_NAME: 'Name: <br/>(kann nicht geändert werden)',
            PASSWORD: 'Passwort ändern',
            EMAIL: 'E-Mail ändern',

            LOGIN_TITLE: 'Anmeldung für Mitglieder',
            LOGIN_NAME: 'Benutzername',
            LOGIN_PW: 'Passwort',
            LOGIN_GUEST: 'Login für Gäste',

            REGISTER_TITLE: 'Neu registrieren',
            MISSING_PW: 'Bitte geben Sie ein Passwort ein.',
            MISSING_EMAIL: 'Bitte geben Sie ein Passwort ein.',
            INVALID_EMAIL: 'Das ist <i>keine</i> gültige E-mail Adresse.',
            MISSING_NAME: 'Bitte geben Sie ihren Namen ein.',

            SEARCH_RECIPES: 'Rezepte suchen',
            SEARCH_TITLE: 'Rezepte auswählen',
            SEARCH_SUBTITLE: 'Suchen und auswählen',
            SEARCH_FORM_TITLE: 'Ich suche nach',
            SEARCH_OPTIONS: 'Suche mit Filter',
            SEARCH_EXPAND_1: 'wenig',
            SEARCH_EXPAND_2: 'mehr',
            SEARCH_CATEGORY: 'Kategorie auswählen',
            CATEGORY_APPETIZER: 'Vorspeise',
            CATEGORY_MAIN: 'Hauptgang',
            CATEGORY_DESSERT: 'Dessert',
            CATEGORY_SNACK: 'Snack',
            SEARCH_RATING_TITLE: 'Bewertung',
            SEARCH_RATING_TEXT: 'suchen Sie nach Bewertung',
            SEARCH_PREP_TIME_TITLE: 'Zubereitungszeit',
            SEARCH_PREP_TIME_OPT_1: '10 - 20 min',
            SEARCH_PREP_TIME_OPT_2: '20 - 30 min',
            SEARCH_PREP_TIME_OPT_3: '30 - 40 min',
            SEARCH_PREP_TIME_OPT_4: '40 - 50 min',
            SEARCH_PREP_TIME_OPT_5: '1h und mehr',

            CREATE_IMAGE_ERROR: 'Datei nicht vom Typ \'Bild\'',

            VIEW_USER_TITLE: 'Mein Account',
            VIEW_USER_RECIPES: 'Meine Rezepte:',

            VIEW_RECIPE_TITLE: 'Rezepte',
            VIEW_RECIPE_SUBTITLE: 'lesen und Kochen',
            VIEW_RECIPE_BTN_EDIT: 'Dieses Rezept bearbeiten',
            VIEW_RECIPE_BTN_DELETE: 'Dieses Rezept löschen',
            VIEW_RECIPE_DESCRIPTION: 'Beschreibung',
            VIEW_RECIPE_DATAS: 'Rezeptdaten',
            VIEW_RECIPE_DATA_1: 'Rezept:',
            VIEW_RECIPE_DATA_2: 'Author:',
            VIEW_RECIPE_DATA_3: 'Anzahl Personen:',
            VIEW_RECIPE_DATA_4: 'Backzeit:',
            VIEW_RECIPE_DATA_5: 'Vorbereitungszeit:',
            VIEW_RECIPE_PREP_TITLE: 'Vorbereitung: Zutaten',
            VIEW_RECIPE_PREP_SBS: 'Zubereitung Schritt für Schritt',
            VIEW_RECIPE_PREP_STEP: 'Schritt ',

            EDIT_RECIPE_TITLE_EDIT: 'Rezept bearbeiten',
            EDIT_RECIPE_TITLE_ADD: 'Rezept hinzufügen',
            EDIT_RECIPE_BTN_SAVE: 'Menu speichern',
            EDIT_RECIPE_BTN_CANCEL: 'Abbrechen',
            EDIT_RECIPE_BTN_DELETE: 'Löschen',
            EDIT_RECIPE_PHOTO: '1. Foto',
            EDIT_RECIPE_PHOTO_MISSING: 'Bitte mindestens ein Photo hochladen',
            EDIT_RECIPE_NAME: '2. Rezeptname',
            EDIT_RECIPE_NAME_LABEL: 'Name des Rezepts',
            EDIT_RECIPE_NAME_LABEL_MISSING: 'Bitte eine Beschreibung erfassen',
            EDIT_RECIPE_DESCR_LABEL: 'Beschreibung des Menus in ein paar Sätzen',
            EDIT_RECIPE_DESCR_LABEL_MISSING: 'Bitte alle Angaben vollständig ausfüllen',
            EDIT_RECIPE_PERSON: 'Personen',
            EDIT_RECIPE_PERSON_INPUT: 'Anzahl Personen',
            EDIT_RECIPE_CATEGORY: 'Kategorie',
            EDIT_RECIPE_BAKING_TIME: 'Kochzeit',
            EDIT_RECIPE_BAKING_TIME_NO: 'Keine Kochzeit',
            EDIT_RECIPE_PREPARATION_TIME: 'Zubereitungszeit',
            EDIT_RECIPE_PREPARATION_TIME_SHORT: 'ganz kurz',
            EDIT_RECIPE_PREPARATION: '3. Zubereitung',
            EDIT_RECIPE_PREPARATION_TEXT: 'Beschreibe hier <strong>Schritt für Schritt</strong> den Ablauf des Rezeptes',
            EDIT_RECIPE_PREPARATION_NEXT_STEP: 'Nächster Schritt',
            EDIT_RECIPE_INGREDIENTS: '4. Zutaten',
            EDIT_RECIPE_INGREDIENTS_TEXT: 'Nenne alle notwendigen <strong>Zutaten</strong> für des Rezeptes',
            EDIT_RECIPE_INGREDIENT: 'Zutat',
            EDIT_RECIPE_INGREDIENT_ADD: 'weitere Zutaten',
            EDIT_RECIPE_INGREDIENT_AMOUNT: 'Menge',
            EDIT_RECIPE_INGREDIENT_UNIT: 'Einheit',

            RATING_TITLE: 'Alle Bewertungen für: ',
            RATING_USER_1: 'Benutzer ',
            RATING_USER_2: ' schrieb:',

            ADD_EDIT_RATING_TITLE: 'Bewerten Sie dieses Rezept',
            ADD_EDIT_RATING_SUBTITLE: 'in Sternen',
            ADD_EDIT_RATING_COMMENT: 'Ihr Kommentar',
            ADD_EDIT_RATING_COMMENT_LABEL: 'Kommentar',
            ADD_EDIT_RATING_BTN_SAVE: 'Rating Speichern',

            SEARCH_RESULT_TITLE: 'Ergebnisse',
            SEARCH_RESULT_LIST_HEAD_RECIPE: 'Rezept',
            SEARCH_RESULT_LIST_HEAD_RATING: 'Bewertung',
            SEARCH_RESULT_LIST_HEAD_AUTHOR: 'Author',
            SEARCH_RESULT_LIST_FOUND_MORE_1: 'Mehr als ',
            SEARCH_RESULT_LIST_FOUND_MORE_2: ' Rezepte gefunden',
            SEARCH_RESULT_LIST_BTN_SHOW_MORE: 'weitere 10 anzeigen',
            SEARCH_RESULT_LIST_NO_ENTRIES: 'Keine Rezepte zum gesetzten Filter gefunden',

            TEASER_TITLE_NEW: 'Dein Rezept',
            TEASER_TITLE_NEW_TEXT: 'Registrierte Benutzer können ihre eigenen Rezepte erfassen',
            TEASER_TITLE_BEST: 'Bestes Rezept',
            TEASER_TITLE_NEWEST: 'Neuestes Rezept',

            ERROR_LOAD_RECIPE: 'Fehler beim Laden des Rezepts',
            ERROR_LOAD_RECIPES: 'Fehler beim Laden von Rezepten',
            ERROR_LOAD_RATING: 'Fehler beim Laden von Rezepten',
            ERROR_NOT_LOGGED_IN: 'Nicht eingeloggt!',
            RECIPE_SAVE_OK: 'Rezept gespeichert',
            RECIPE_SAVE_FAILED: 'Rezept konnte nicht gespeichert werden',
            RATING_SAVE_OK: 'Bewertung gespeichert',
            RATING_SAVE_FAILED: 'Bewertung konnte nicht gespeichert werden',
            USER_REGISTER_OK: 'Benutzer erfolgreich registriert',
            USER_REGISTER_FAILED: 'Benutzer konnte nicht registriert werden',
            USER_SAVE_OK: 'Benutzer gespeichert',
            USER_SAVE_FAILED: 'Benutzer konnte nicht gespeichert werden',
            RECIPE_DELETE_OK: 'Rezept gelöscht',
            RECIPE_DELETE_FAILED: 'Löschen fehlgeschlagen',

            ERROR_LOGIN_FAILED: 'Login fehlgeschlagen',
            IMAGE_CONVERTING: 'Bild in Bearbeitung'
        });
        $translateProvider.preferredLanguage('de');
    });
}