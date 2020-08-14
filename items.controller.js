(function () {
  'use strict';
  angular.module('MenuApp')
  .controller('itemsController', itemsController)

  itemsController.$inject = ['itemsList']
  function itemsController(itemsList) {
    var items = this;
    //function getAllCategories() {
      console.log("getItemsForCategory")
      items.itemsList = itemsList.data.menu_items
      items.category = itemsList.data.category.name
      //items.itemsCat =
      console.log(items.itemsList);
    //}

  }
})();
