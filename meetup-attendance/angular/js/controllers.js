angular.module('mainController', [])
    
    .controller('postController', ['$scope','$http', '$routeParams', 'postService', function($scope, $http, $routeParams, postService) {
        $scope.event_id = $routeParams.event_id;
        $scope.$on('$viewContentLoaded', function(){
            $scope.home();
        });

        $scope.home = function(){
            postService.getRoster($scope.event_id).success(function(data) {

                $scope.response = data;
                window.console.log("$scope.response:",$scope.response);
                // if ($scope.response != null){
                // }
                // else{
                //     alert("No Data Available");
                // }
                    $(document).ready(function(){

        $('input.typeahead').typeahead({

          name: 'accounts',

          local: ['Audi', 'BMW', 'Bugatti', 'Ferrari', 'Ford', 'Lamborghini', 'Mercedes Benz', 'Porsche', 'Rolls-Royce', 'Volkswagen']

        });

    });

                    
            });
        }

        $scope.submitName = function(){
            console.log("inside submitName function")
        }
    }]);
