(function() {
'use strict';
angular.module('MenuApp', ['DataApp', 'ui.router'])
//.controller('MenuAppController', MenuAppController)
angular.module('MenuApp')
.config(function () {
  console.log("MenuApp config fired.");
})
.run(function () {
  console.log("MenuApp run fired.");
});
}
)();
