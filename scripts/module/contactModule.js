var contactModule = angular.module("contactModule",['ui.router'])

contactModule.config(function($stateProvider,$urlRouterProvider) {
    $stateProvider 
        .state('home', { 
            url : '/',
            templateUrl:"list.html"
        }) 
        .state('addUpdateContact', { 
            url : '/addUpdateContact',
            templateUrl: "addUpdateContact.html"
        }) 
        .state('list', { 
            url : '/list',
            templateUrl:"list.html"
        }) 

        $urlRouterProvider.otherwise("/");

    
    
});