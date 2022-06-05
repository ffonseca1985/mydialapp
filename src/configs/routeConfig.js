
import loginMasterHTML from "../master/login.html"
import siginHTML from  "../login/views/index.html"

appRouteConfig.$inject = ['$stateProvider', "$urlRouterProvider", '$locationProvider'];

function appRouteConfig($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/login/signin');
    
    $stateProvider.state("login", {
        template: loginMasterHTML,
        controller: "loginController",
        abstract: true,
        url: "/login"
    }).state('login.signin', { //Padrão: 'master.pagina'
        // a url ficará assim: /login/signin//
        template: siginHTML,
        controller: 'loginController',
        controllerAs: 'vm',//colocamos alias, pois estamos usando o this na controller
        url: '/signin'
    });

    $locationProvider.html5Mode(false);
}

export default appRouteConfig;