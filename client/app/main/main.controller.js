'use strict';

angular.module('datePickerDemoApp').controller('MainCtrl', function ($scope) {

  	$scope.selectedDate = new Date();

  	var disabledDates = [
  		(new Date()).setDate($scope.selectedDate.getDate() + 1)
  	].map(function(value) {
  	    return (new Date(value)).toDateString();
  	});

  	$scope.angularDatePicker = {
  	    dateFilter: function (d) {
  	        if (!d) return true;

  	        // disable weekends
  	        var dayIdx = d.getDay();
  	        if (dayIdx === 0 || dayIdx === 6) {
  	            return false;
  	        }
  	        if (disabledDates.indexOf(d.toDateString()) > -1) {
  	            return false;
  	        }
  	        return true;
  	    }
  	};

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
