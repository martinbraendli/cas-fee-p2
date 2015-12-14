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
                    messageService.startMessage("IMAGE_CONVERTING");

                    var file = changeEvent.target.files[0];

                    // Only process image files.
                    if (!file.type.match('image.*')) {
                        messageService.setMessage("CREATE_IMAGE_ERROR", fettyBossy.Services.SEVERITY_WARN, "");
                        return;
                    }

                    var reader = new FileReader();

                    // Closure to capture the file information.
                    reader.onload = (function (loadedFile) {
                        return function (e) {
                            var image = <fettyBossy.Data.IImage>{};
                            image.name = loadedFile.name;

                            /**
                             * Takes a data URI and returns the Data URI corresponding to the resized image at the wanted size.
                             * @see http://stackoverflow.com/a/26884245
                             */
                            function resizedataURL(datas, wantedWidth, wantedHeight) {
                                // We create an image to receive the Data URI
                                var img = document.createElement('img');

                                // When the event "onload" is triggered we can resize the image.
                                img.onload = function () {
                                    // We create a canvas and get its context.
                                    var canvas = document.createElement('canvas');
                                    var ctx = canvas.getContext('2d');

                                    // We set the dimensions at the wanted size.
                                    canvas.width = wantedWidth;
                                    canvas.height = wantedHeight;

                                    // We resize the image with the canvas method drawImage();
                                    ctx.drawImage(this, 0, 0, wantedWidth, wantedHeight);

                                    image.src = canvas.toDataURL();

                                    scope.$apply(function () {
                                        if (!scope.recipe.images) {
                                            scope.recipe.images = [];
                                        }
                                        scope.recipe.images.push(image);
                                    });
                                };

                                // We put the Data URI in the image's src attribute
                                img.src = datas;
                            }

                            resizedataURL(e.target.result, $constants.image.maxLengthA, $constants.image.maxLengthB);
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
