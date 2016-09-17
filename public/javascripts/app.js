angular
  .module('BoilerplateApp.About', [])
  .controller('AboutController', controller);

// ////////////////////////////////

/**
* About controller
* @returns {void}
*/
function controller() {

  var vm = this;

  vm.clicked = clicked;

  // ////////////////////////////////
  /**
  * clicked function
  * @returns {void}
  */
  function clicked() {
    alert('You clicked me!');
  }

};

angular.module('BoilerplateApp', [

  // 3rd party dependencies

  // App modules
  'BoilerplateApp.About'
]);

angular.bootstrap(document, ['BoilerplateApp']);
