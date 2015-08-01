///<reference path='../_reference.ts' />

/**
 *
 */
module fettyBossy.Directive {
    'use strict';

    angular
        .module('fettyBossy')
        .directive('fbFileUpload', fileUpload);

    export interface IListRecipeRatingsScope extends ng.IScope {
        recipe: fettyBossy.Data.IRecipe;
        ratings: Array<fettyBossy.Data.IRating>;
    }

    function fileUpload():ng.IDirective {
        return {
            restrict: 'E',
            scope: {
                recipe: '=recipe'
            },
            templateUrl: 'js/directives/fileUpload.tpl.html',
            link: (scope, element) => {

                element.bind("change", function (changeEvent) {
                    var file = changeEvent.target.files[0];

                    // Only process image files.
                    if (!file.type.match('image.*')) {
                        alert("Kein Bild");
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
                });

            }
        };
    }
}
