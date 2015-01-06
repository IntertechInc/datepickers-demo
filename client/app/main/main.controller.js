'use strict';

angular.module('datePickerDemoApp').controller('MainCtrl', function ($scope) {

  	$scope.selectedDate = new Date(); //moment().format('MM/DD/YYYY');

  	$scope.bootstrap = {
  		clear: function () {
			$scope.selectedDate = null;
		},
		disabled: function(date, mode) {
			// Disable weekend selection
			return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
		},
		toggleMin: function() {
			$scope.minDate = $scope.minDate ? null : new Date();
		},
		open: function($event) {
			$event.preventDefault();
			$event.stopPropagation();
			$scope.bootstrap.opened = true;
		},
		dateOptions: {
			formatYear: 'yyyy',
			startingDay: 0
		},
		format: 'MM/dd/yyyy'
  	};
	
	$scope.bootstrap.toggleMin();
});
