
import routeConfig from "angular-ui-router";

routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function routeConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/login")

    $stateProvider.state("/", {
        templateUrl: "./src/login/views/index.html",
        controller: "loginController",
        abstract: true,
        url: "/login"
    }).state("books", {
        templateUrl: "src/books/views/index.html",
        controller: "bookController",

    }).when("/details", {
        templateUrl: "./src/books/views/detail.html",
        controller: "detailController"
    });

    $locationProvider.html5Mode(false);
}

export default routeConfig;