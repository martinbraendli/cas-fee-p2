///<reference path='_reference.ts' />

module $injects {
    export var fettyBossy:string = 'fettyBossy';

    export var $http:string = '$http';
    export var $location:string = '$location';
    export var $log:string = '$log';
    export var $q:string = '$q';
    export var $route:string = '$route';
    export var $scope:string = '$scope';
    export var $timeout:string = '$timeout';
    export var toastr:string = 'toastr';
    export var $translate:string = '$translate';


    export module controllers {
        export var addeditRecipeController:string = 'addeditRecipeController';
        export var addeditRecipeRatingController:string = 'AddeditRecipeRatingController';
        export var listRecipeRatingsController:string = 'ListRecipeRatingsController';
        export var registerController:string = 'RegisterController';
        export var searchRecipeController:string = 'SearchRecipeController';
        export var sessionController:string = 'SessionController';
        export var viewRecipeController:string = 'ViewRecipeController';
        export var viewUserController:string = 'ViewUserController';
    }

    export module filter {
        export var searchRecipeFilter:string = 'SearchRecipeFilter';
        export var minutesToHoursMinutes:string = 'minutesToHoursMinutes';
    }

    export module services {
        export var messageService:string = 'MessageService';
        export var repositoryService:string = 'RepositoryService';
        export var sessionService:string = 'SessionService';
        export var userService:string = 'UserService';
    }
}