'use strict';

// app.js
    // create angular app
var validationApp = angular.module('validationApp', []);

    //create custom directive
    validationApp.directive('pwCheck', [function () {
        return {
            require: 'ngModel',
            link: function(scope, elem, attrs, ctrl){
                var firstPassword = '#' + attrs.pwCheck;

                //confirmpasssword key up
                elem.on('keyup', function() {
                scope.$apply(function() {
                    var isMatch = elem.val() === $(firstPassword).val();
                    ctrl.$setValidity('pwMatch', isMatch);
                });
            });

            //password key up
            $(firstPassword).on('keyup', function(){
                scope.$apply(function() {
                    var isMatch = elem.val() === $(firstPassword).val();
                    ctrl.$setValidity('pwMatch', isMatch);
                });
            });
        }
    };
}]);


// create angular controller
validationApp.controller('mainCtrl', function($scope) {

    

    $scope.countryList = [
        {countryId: '1', name: 'China'},
        {countryId: '2', name: 'USA'}
    ];

    $scope.cityList = [];

    $scope.$watch('country', function(newVal){

        if(newVal === '1'){
            $scope.cityList = [
                { CountryId: '1', CityId: '1', Name: 'Beijing' },
                { CountryId: '1', CityId: '2', Name: 'Shanghai' }
            ];
        }
        else if (newVal === '2'){
            $scope.cityList = [
                { CountryId: '2', CityId: '3', Name: 'Synnyvale' },
                { CountryId: '2', CityId: '4', Name: 'Phoenix' }
            ];
        }
        else{
            $scope.cityList = [];
        } 
    });

    // function to submit the form after all validation has occured
    $scope.submitForm = function(isValid) {

        //check to make sure the form is completely valid
        if(isValid) {
            alert('You have successfully completed the form!');
        }
    };

  });
