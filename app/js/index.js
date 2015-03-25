"use strict";


requirejs.config({
  urlArgs: 'v=' + (window.ria.version || new Date().getTime()),
  paths  : {
    'jquery'         : 'library/jquery/dist/jquery',
    'underscore'     : 'library/underscore/underscore'
  },
  shim   : {
    'library/underscore/underscore'                 : {
      exports: '_'
    },
    'library/jquery/dist/jquery'                 : {
      exports: '$'
    },
    'library/jquery-cookie/jquery.cookie'           : ['library/jquery/dist/jquery'],
    'library/jquery-validation/dist/jquery.validate': ['library/jquery/dist/jquery']
  }
});

require(
  [
    'configs/routes'
  ],
  function (routes) {
    require(routes, function (/* [function initialize, ...] */) {
      console.log('arguments --> ', arguments);
    });
  }
);

