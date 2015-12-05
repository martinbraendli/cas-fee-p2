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


            SEARCH_RESULT_TITLE: 'Results',


            TEASER_TITLE_NEW: 'New recipe',
            TEASER_TITLE_BEST: 'Best recipe',
            TEASER_TITLE_NEWEST: 'Newest recipe',
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
            SEARCH_FORM_TITLE: 'Rezeptsuche',
            SEARCH_OPTIONS: 'Suchoptionen',
            SEARCH_EXPAND_1: 'wenig',
            SEARCH_EXPAND_2: 'mehr',


            SEARCH_RESULT_TITLE: 'Erbegnisse',


            TEASER_TITLE_NEW: 'Neues Rezept',
            TEASER_TITLE_BEST: 'Bestes Rezept',
            TEASER_TITLE_NEWEST: 'Neuestes Rezept',

        });
        $translateProvider.preferredLanguage('de');
    });
}