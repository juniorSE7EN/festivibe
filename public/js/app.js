define(
  [ 'backbone',
    'router' ],
  function( Backbone, Router ) {
    'use strict';

    function init() {
      new Router();
      Backbone.history.start( { pushState: false } );
    }

    return { init: init };
  }
);
