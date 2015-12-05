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

            MENU_ALL: 'all recipes',
            MENU_CREATE: 'create recpie',
            MENU_USER: 'user: ',
            MENU_LOGIN: 'login',
            MENU_LOGOUT: 'logout',
            MENU_USER: 'User',

            USER_LOGIN_DETAILS_TITLE: 'User Login Details',
            USERDETAIL_NAME: 'Name: <br/>(can not be changed)',
            PASSWORD: 'Password',
            EMAIL: 'email',

            LOGIN_TITLE: 'Login for members',
            LOGIN_NAME: 'Username',
            LOGIN_PW: 'Password',

            SEARCH_RECIPES: 'search recipes'

        });
        $translateProvider.translations('de', {
            SWITCH_LANG: 'Sprache wechseln',
            BUTTON_LANG_EN: 'englisch',
            BUTTON_LANG_DE: 'deutsch',
            BUTTON_SAVE: 'Speichern',
            BUTTON_FIND: 'Finden',
            BUTTON_TO_RECIPE: 'zum Rezept',

            MENU_ALL: 'Alle Rezepte',
            MENU_CREATE: 'Rezepte erfassen',
            MENU_USER: 'user: ',
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

            SEARCH_RECIPES: 'Rezepte suchen'
        });
        $translateProvider.preferredLanguage('de');
    });
}