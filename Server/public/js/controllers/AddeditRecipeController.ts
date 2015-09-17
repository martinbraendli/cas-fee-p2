///<reference path='../_reference.ts' />

/**
 *
 */
module fettyBossy.Controllers {
    'use strict';

    export class AddeditRecipeController {

        recipe:fettyBossy.Data.IRecipe;

        public static $inject = ['$log', 'RepositoryService', '$location', 'recipe'];

        constructor(private $log:ng.ILogService,
                    private repository:fettyBossy.Services.IRepository,
                    private $location:ng.ILocationService,
                    recipe:fettyBossy.Data.IRecipe) {
            this.$log.debug('AddeditRecipeController constructor');

            this.recipe = recipe;
            this.addPreparationStep(); // add initial step
            this.addIngredient(); // add initial ingredient
        }

        addPreparationStep() {
            if (!this.recipe.preparationSteps) {
                this.recipe.preparationSteps = [];
            }
            var emptyPreparationStep:fettyBossy.Data.IPreparationStep = <fettyBossy.Data.IPreparationStep>{
                position: this.recipe.preparationSteps.length + 1
                //text: "next..."
            };
            this.recipe.preparationSteps.push(emptyPreparationStep);
        }

        addIngredient() {
            if (!this.recipe.ingredients) {
                this.recipe.ingredients = [];
            }
            var emptyIngredient:fettyBossy.Data.IIngredient = {
                name: null,
                unit: null,
                denomination: 1
            };
            this.recipe.ingredients.push(emptyIngredient);
        }

        deleteIngredient(index:number) {
            this.recipe.ingredients.splice(index, 1);
        }

        /**
         * save recipe from current form
         */
        save() {
            var $location = this.$location;
            this.repository.saveRecipe(this.recipe)
                .then(function (result:fettyBossy.Services.ISaveRecipeResult) {
                    if (result.successful) {
                        alert("Save ok");
                        $location.path("/viewRecipe/" + result.savedRecipe._id);
                    } else {
                        alert("Save failed");
                    }
                });
        }
    }


    angular
        .module('fettyBossy')
        .controller('AddeditRecipeController', AddeditRecipeController);
}