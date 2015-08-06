export function configure(aurelia) {
"use strict";
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-animator-css');
  console.log("test");

  aurelia.start().then(a => a.setRoot());
}
