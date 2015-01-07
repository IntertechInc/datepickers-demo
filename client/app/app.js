'use strict';

angular.module('datePickerDemoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'datePicker',
  'ui.date',
  'ngQuickDate'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, ngQuickDateDefaultsProvider) {
      $urlRouterProvider
        .otherwise('/');

      $locationProvider.html5Mode(true);

      return ngQuickDateDefaultsProvider.set({
          closeButtonHtml: "<i class='fa fa-times'></i>",
          buttonIconHtml: "<i class='fa fa-calendar'></i>",
          nextLinkHtml: "<i class='fa fa-chevron-right'></i>",
          prevLinkHtml: "<i class='fa fa-chevron-left'></i>"
      });
  });