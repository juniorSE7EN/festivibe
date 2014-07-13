define(
  [ 'underscore',
    'backbone',
    'router' ],
  function( _, Backbone, Router ) {
    'use strict';

    function init() {
      new Router();
      Backbone.history.start( { pushState: false } );
    }

    return { init: init };
  }
);
