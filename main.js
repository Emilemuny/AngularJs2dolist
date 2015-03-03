//our two controllers, listOfTodos and eachTodo.

angular.module("todo")
.service('ListService', function() {
  this.list = {};
  this.getList = function() { return this.list; };
  this.saveList = function(list) { this.list = list;};
 })

.controller("listOfTodos", ["$scope", "$location", "$routeParams", "ListService",
  function($scope, $location, $routeParams, ListService) {
  document.getElementsByTagName("input")[0].focus();
  $scope.lists = ListService.getList();
  $scope.createList = function() {
    if(!!$scope.viewTitle !== false) {
      $scope.lists[$scope.viewTitle] = [];
      $scope.viewTitle = "";
    }
  document.getElementById("todoTitle").focus();
  ListService.saveList($scope.lists);
  };
     $scope.gotoList = function(title) {
      $location.path("/list/" + title);
    };
$scope.deleteList = function(title) {
  delete $scope.lists[title];
  ListService.saveList($scope.lists);
}

 }])

.controller("eachTodo", ["$scope", "$location", "$routeParams", "ListService",
  function($scope, $location, $routeParams, ListService) {
  document.getElementsByTagName("input")[0].focus();
  $scope.listTitle = $routeParams.title;
  $scope.lists = ListService.getList();
  $scope.createItem = function() {
    var alreadyExists = false;
    for(i in $scope.lists[$scope.listTitle])
      if($scope.lists[$scope.listTitle][i] === $scope.item)
      alreadyExists = true;
      if (!alreadyExists)
        $scope.lists[$scope.listTitle].push($scope.item);
        $scope.item = "";
        document.getElementById("todoItem").focus();
  }
 $scope.deleteItem = function(item) {
   var currentList = $scope.lists[$scope.listTitle];
   currentList.splice(currentList.indexOf(item), 1);
   ListService.saveList($scope.lists);
 }
 }]);
