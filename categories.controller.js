(function () {
  'use strict';
  angular.module('MenuApp')
  .controller('categoriesController', categoriesController)

  categoriesController.$inject = ['catList']
  function categoriesController(catList) {
    var cat = this;
    //function getAllCategories() {
      console.log("se activa getAllCategories en categoriesComponentController")
      cat.catList = catList;
      console.log(cat.catList);
    //}

  }
})();
