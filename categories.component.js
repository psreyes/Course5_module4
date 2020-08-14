(function() {
  'use strict';
  angular.module('MenuApp')
  .component('categoriesComponent', {
      templateUrl: 'categories.html',
      //controller: categoriesController,
      bindings: {
      catList: '<',
      //   //onAction: '&'
      }
  });


})
();
