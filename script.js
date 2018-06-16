var app=angular.module('myApp',['ui.router']);


app.config(['$stateProvider',function($stateProvider){

  $stateProvider
  .state('cleaning-products',{
    url:'/cleaning-products/:bid',
    templateUrl:'cleaning-products.html',
    controller:'cleaningProductsCtrl',
    data:{
      constant:100
    }
  })
  .state('category',{
    url:'/category',
    templateUrl:'category.html',
    controller:'categoryCtrl',

  })

}]);

app.controller('myCtrl',['$scope','$state',function($scope,$state){

$scope.brands=[
  {typeid:1,typename:'soap'},
  {typeid:2,typename:'things'},
  {typeid:3,typename:'stain remover'},
]

$scope.do=function(typeid){

  $state.go('cleaning-products',{
    bid:typeid
  })
}

}]);


app.controller('cleaningProductsCtrl',['$scope','$state',function($scope,$state){

$scope.cleaningProducts=[
  {id:1,typeid:1,name:'pckurdu soap',price:1},
  {id:2,typeid:3,name:'mr. pckurdu',price:2},
  {id:3,typeid:1,name:'pckurdu liquid soap',price:3},
  {id:4,typeid:2,name:'mop pckurdu',price:1},
  {id:5,typeid:2,name:'pckurdu broom',price:5},
]



}]);

app.controller('categoryCtrl',['$scope','$state',function($scope,$state){

  $scope.brands=[
    {typeid:1,typename:'soap'},
    {typeid:2,typename:'things'},
    {typeid:3,typename:'stain remover'},
  ]
}]);



app.run(['$rootScope',function($rootScope){

  $rootScope.$on('$stateChangeStart',function(e,toState,toParams,fromState,fromParams,option){
    console.log(e);
    console.log(toState);
    console.log(toParams);
    console.log(fromState);
    console.log(fromParams);
    console.log(option);
  })
}])
