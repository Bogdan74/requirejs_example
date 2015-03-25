"use strict";

define('configs/routes', function () {
  var dependencies = [];
  switch (true) {
    case Boolean(location.pathname.match(/\/page1\//)):
      dependencies.push('modules/page1');
      break;
    case Boolean(location.pathname.match(/\/page2\//)):
      dependencies.push('modules/page2');
      break;
    case Boolean(location.pathname.match(/\/page3\//)):
      dependencies.push('modules/page3');
      break;
    default:
      break;
  }
  return dependencies;
});