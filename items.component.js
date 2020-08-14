(function () {
  'use strict';
  angular.module('MenuApp')
  .component('itemsComponent', {
    templateUrl: 'itemsComponent.html',
    // controller: itemsComponentController,
    bindings: {
      itemsList: '<',
      categoryShortName: '<'
      //onAction: '&'
    }
  });

  // itemsComponentController.$inject = ['$rootScope', '$q', 'MenuDataService']
  // function itemsComponentController($rootScope, $q, MenuDataService) {
  //   var $ctrl = this;
  //   function getItemsForCategory(searchTerm) {
  //     $ctrl.listItems = MenuDataService.getItemsForCategory(searchTerm)
  //   }
  // }

})
();
