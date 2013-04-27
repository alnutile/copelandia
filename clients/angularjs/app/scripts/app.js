'use strict';

var app = angular.module('app', ['resource.node', 'resource.file', 'directive.protobot']).

  config(function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/main.html'
      }).
      when('/recipes', {
        templateUrl: 'views/recipes.html'
      }).
      when('/recipe/:id', {
        templateUrl: 'views/partials/recipe_view.html',
        controller: 'RecipeView'
      }).
      otherwise({
        redirectTo: '/'
      });
  });

function RecipeView($scope, $routeParams, Node) {
    $scope.ctrl = 'RecipeView';

    var RecipeNode = $scope.recipe = Node.GetNode( {id: $routeParams.id} );
    console.log(RecipeNode);
}