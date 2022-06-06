
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
    }).state('login.signin', { 
        template: siginHtml,
        controller: 'loginController',
        controllerAs: 'vm',
        url: '/signin'
    }).state('book', { 
        template: bookMasterHtml,
        controller: 'bookMasterController',
        controllerAs: 'vm',
        url: '/book'
    }).state('book.list', {
        template: listBookHtml,
        controller: 'listBookController',
        controllerAs: 'vm',
        url: '/list'
    }).state('book.detail', {
        template: detailBookHtml,
        controller: 'detailBookController',
        controllerAs: 'vm',
        url: '/detail/:id'
    });

    $locationProvider.html5Mode(false);
}

export default appRouteConfig;