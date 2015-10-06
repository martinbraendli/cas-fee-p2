///<reference path='_reference.ts' />

module $injects {
    export var fettyBossy:string = 'fettyBossy';

    export var $http:string = '$http';
    export var $location:string = '$location';
    export var $log:string = '$log';
    export var $q:string = '$q';
    export var $scope:string = '$scope';


    export module controllers {
        export var addeditRecipeController:string = 'addeditRecipeController';
        export var addeditRecipeRatingController:string = 'AddeditRecipeRatingController';
        export var listRecipeRatingsController:string = 'ListRecipeRatingsController';
        export var registerController:string = 'RegisterController';
        export var searchRecipeController:string = 'SearchRecipeController';
        export var sessionController:string = 'SessionController';
        export var viewRecipeController:string = 'ViewRecipeController';
    }

    export module services {
        export var messageService:string = 'MessageService';
        export var repositoryService:string = 'RepositoryService';
        export var sessionService:string = 'SessionService';

    }
}