(function () {
  'use strict'

  angular.module('MenuApp')
  .controller('MenuAppController', MenuAppController);

  MenuAppController.$inject = ['DataApp', 'categoriesComponent', 'itemsComponent', 'MenuDataService']
  function MenuAppController() {
    var menuapp = this;

    menuapp.categories = function() {
      MenuDataService.getAllCategories();
    }
  }

}
)
