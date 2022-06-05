
import loginMasterHtml from "../master/login.html";
import bookMasterHtml from "../master/book/book.html";
import siginHtml from  "../login/views/index.html";
import listBookHtml from "../books/views/list.html";
import detailBookHtml from "../books/views/detail.html";


appRouteConfig.$inject = ['$stateProvider', "$urlRouterProvider", '$locationProvider'];

function appRouteConfig($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/login/signin');
    
    $stateProvider.state("login", {
        template: loginMasterHtml,
        controller: "loginController",
        abstract: true,
        url: "/login"
    }).state('login.signin', { //Padrão: 'master.pagina'
        // a url ficará assim: /login/signin//
        template: siginHtml,
        controller: 'loginController',
        controllerAs: 'vm',//colocamos alias, pois estamos usando o this na controller
        url: '/signin'
    }).state('book', { //Padrão: 'master.pagina'
        // a url ficará assim: /login/signin//
        template: bookMasterHtml,
        controller: 'bookMasterController',
        controllerAs: 'vm',//colocamos alias, pois estamos usando o this na controller
        url: '/book'
    }).state('book.list', { //Padrão: 'master.pagina'
        // a url ficará assim: /login/signin//
        template: listBookHtml,
        controller: 'listBookController',
        controllerAs: 'vm',//colocamos alias, pois estamos usando o this na controller
        url: '/list'
    }).state('book.detail', { //Padrão: 'master.pagina'
        // a url ficará assim: /login/signin//
        template: detailBookHtml,
        controller: 'detailBookController',
        controllerAs: 'vm',//colocamos alias, pois estamos usando o this na controller
        url: '/detail:id'
    });

    $locationProvider.html5Mode(false);
}

export default appRouteConfig;