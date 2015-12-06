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
            PASSWORD: 'Password',
            EMAIL: 'Email',

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
            SEARCH_OPTIONS: 'Search options',
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

            TEASER_TITLE_NEW: 'New recipe',
            TEASER_TITLE_NEW_TEXT: 'Registered user can create their own recipes',
            TEASER_TITLE_BEST: 'Best recipe',
            TEASER_TITLE_NEWEST: 'Newest recipe',

            ERROR_LOGIN_FAILED: 'Login failed   ',

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
            PASSWORD: 'Passwort',
            EMAIL: 'E-Mail',

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
            SEARCH_OPTIONS: 'Suchoptionen',
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

            SEARCH_RESULT_TITLE: 'Erbegnisse',
            SEARCH_RESULT_LIST_HEAD_RECIPE: 'Rezept',
            SEARCH_RESULT_LIST_HEAD_RATING: 'Bewertung',
            SEARCH_RESULT_LIST_HEAD_AUTHOR: 'Author',
            SEARCH_RESULT_LIST_FOUND_MORE_1: 'Mehr als ',
            SEARCH_RESULT_LIST_FOUND_MORE_2: ' Rezepte gefunden',
            SEARCH_RESULT_LIST_BTN_SHOW_MORE: 'weitere 10 anzeigen',
            SEARCH_RESULT_LIST_NO_ENTRIES: 'Keine Rezepte zum gesetzten Filter gefunden',

            TEASER_TITLE_NEW: 'Neues Rezept',
            TEASER_TITLE_NEW_TEXT: 'Registrierte Benutzer können ihre eigenen Rezepte erfassen',
            TEASER_TITLE_BEST: 'Bestes Rezept',
            TEASER_TITLE_NEWEST: 'Neuestes Rezept',

            ERROR_LOAD_RECIPE: 'Fehler beim Laden des Rezepts',
            ERROR_LOAD_RECIPES: 'Fehler beim Laden von Rezepten',
            ERROR_LOAD_RATING: 'Fehler beim Laden von Rezepten',
            ERROR_NOT_LOGGED_IN: 'Nicht eingeloggt!',
            RECIPE_SAVE_OK: 'Rezept erfolgreich gespeichert',
            RECIPE_SAVE_FAILED: 'Rezept konnte nicht gespeichert werden',
            RATING_SAVE_OK: 'Bewertung erfolgreich gespeichert',
            RATING_SAVE_FAILED: 'Bewertung konnte nicht gespeichert werden',
            USER_REGISTER_OK: 'Benutzer erfolgreich registriert',
            USER_REGISTER_FAILED: 'Benutzer konnte nicht registriert werden',
            USER_SAVE_OK: 'Benutzer gespeichert',
            USER_SAVE_FAILED: 'Benutzer konnte nicht gespeichert werden',
            RECIPE_DELETE_OK: 'Rezept erfolgreich gelöscht',
            RECIPE_DELETE_FAILED: 'Löschen fehlgeschlagen',

            ERROR_LOGIN_FAILED: 'Login fehlgeschlagen',

        });
        $translateProvider.preferredLanguage('de');
    });
}