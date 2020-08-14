(function () {
'use strict';
angular.module('DataApp', ['ui.router'])
.config(function () {
    console.log("ejecutandose data module")
})
.run(function () {
    console.log("corriendo data module")
});
}
)();
