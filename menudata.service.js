(function () {
angular.module('DataApp')
.service('MenuDataService', MenuDataService)

  MenuDataService.$inject = ['$http', '$q']

  function MenuDataService($http, $q) {

  var service = this

  promiseCat = $http ({
  method: "GET",
  url: 'https://davids-restaurant.herokuapp.com/categories.json'
  }
  );

  categories = promiseCat.then (function(promiseCat) {
    return promiseCat.data
  }
)

  service.getAllCategories = function () {

    console.log("se ejecuta getAllCategories del servicio")
      return categories
    }

    service.getItemsForCategory = function (categoryShortName) {
    return $http ({
    method: "GET",
    url: 'https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName,
    params: {
      short_name: categoryShortName
    }
    }
  )
  }
}
})
();
