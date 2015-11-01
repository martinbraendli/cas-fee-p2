///<reference path='../_reference.ts' />

/**
 *
 */
module fettyBossy.Directive {
    'use strict';

    export interface IListRecipeRatingsScope extends ng.IScope {
        recipe: fettyBossy.Data.IRecipe;
        ratings: Array<fettyBossy.Data.IRating>;
    }

    class FileUploadDirective implements ng.IDirective {
        restrict = 'E';
        scope = {
            recipe: '=recipe'
        };
        templateUrl = 'js/directives/fileUpload.tpl.html';
        messageService:fettyBossy.Services.IMessageService;

        constructor(messageService:fettyBossy.Services.IMessageService) {
            this.messageService = messageService;
        }

        link = (scope, element) => {
            var messageService = this.messageService;
            element.bind("change", function (changeEvent) {
                    var file = changeEvent.target.files[0];

                    // Only process image files.
                    if (!file.type.match('image.*')) {
                        messageService.setMessage("Datei nicht vom Typ 'Bild'", fettyBossy.Services.SEVERITY_WARN);
                        return;
                    }

                    var reader = new FileReader();

                    // Closure to capture the file information.
                    reader.onload = (function (loadedFile) {
                        return function (e) {
                            var image = <fettyBossy.Data.IImage>{};
                            image.src = e.target.result;
                            image.name = loadedFile.name;

                            scope.$apply(function () {
                                if (!scope.recipe.images) {
                                    scope.recipe.images = [];
                                }
                                scope.recipe.images.push(image);
                            });
                        };
                    })(file);

                    // Read in the image file as a data URL.
                    reader.readAsDataURL(file);
                }
            );
        }
    }

    angular
        .module($injects.fettyBossy)
        .directive('fbFileUpload',
        [$injects.services.messageService, (MessageService) =>  new FileUploadDirective(MessageService)]);
}
