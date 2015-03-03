angular.module('todo', ['ngRoute'])
.config(['$routeProvider',
 function($routeProvider) {
   $routeProvider.when('/', {
     templateUrl: 'templates/main.html',
     controller: 'listOfTodos'

     }).
     when('/list/:title', {
       templateUrl: 'templates/list.html',
       controller: 'eachTodo'
     }).
     otherwise({
       redirectTo: '/'
     });
 }
]);
