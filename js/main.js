/**
 * Main AngularJS
 */
var app = angular.module('spazioprova', [
  'ngRoute'
]);

/**
 * Configurazione ROTTE
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "pages/home.html", controller: "PageCtrl"})
      // else 404
    .otherwise("/404", {templateUrl: "pages/404.html", controller: "PageCtrl"});
}]);

/**
 * Controller per le Pagine del body
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Pages Controller log.");
});
