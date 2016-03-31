var myApp = angular.module('MobileKart',["ngRoute"]);

myApp.config(function($routeProvider){
    $routeProvider
        .when("/mobiles", {
            templateUrl: "html-templates/mobile-list.html",
            controller: "MobileListCtrl"
        })
        .when("/kart", {
            templateUrl: "html-templates/kart-list.html",
            controller: "KartListCtrl"
        })
        .otherwise({
            redirectTo: "/mobiles"
        })
    
});
myApp.controller('HeaderCtrl', ['$scope', function($scope) {
  $scope.appDetails = {
    title:"MobileKart",
    tagline:"We have 1 Millon Mobiles"
  };
}]);

myApp.controller('MobileListCtrl', ['$scope', function($scope) {
    $scope.mobiles = [
    {
        imageUrl: "iphone6.jpg",
        name: "Iphone 6s",
        price: 45000,
        rating: 5,
        manufacturer: 'Apple',
        details: "Iphone 6s is the latest trendy phone"
    }, {
        imageUrl: "Samsung.jpg",
        name: "Samsung",
        price: 60000,
        rating: 4,
        manufacturer: 'Samsung',
        details: "Samsung is one of the latest trendy phone"
    }];
    
    $scope.addToKart = function(book){
        console.log(book);
    };
}]);

myApp.controller('KartListCtrl', ['$scope', function($scope) {
    $scope.kart=[]
  $scope.buy = function(book){
      console.log(book);
  };
}]);
