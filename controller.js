// Controller for AngularJS app - "DoggyTerest"
// Connected to Firebase
// Author: Kevin Austin

var app = angular.module("doggyTerestApp", ["firebase"]);

app.controller("myController", function($scope, $firebase) {
  var ref = new Firebase("https://doggyterest.firebaseio.com/dogs/");
  var sync = $firebase(ref);
  $scope.dogs = sync.$asArray();
// });
// Below is the ng-repeat code//
  $scope.newDogBreed="";
  $scope.newDogClassification="";
  $scope.newDogImage="";
  $scope.newPopularity="",
  $scope.newEnergyLevel="";
// });
// This code adds a new Dog to site
  $scope.addNewDogBreed= function() {
    if( $scope.newDogBreed!="" && $scope.newDogClassification!="" && $scope.newPopularity!="" && $scope.newEnergyLevel!="") {
      $scope.dogs.$add( 
        {
          breed: $scope.newDogBreed,
          classification: $scope.newDogClassification,
          image: $scope.newDogImage,
          popularity: $scope.newPopularity,
          energyLevel: $scope.newEnergyLevel,
          selected: false
        }
      );
    }
    $scope.newDogBreed="";
    $scope.newDogClassification="";
    $scope.newDogImage="";
    $scope.newPopularity="",
    $scope.newEnergyLevel="";
  };

});
