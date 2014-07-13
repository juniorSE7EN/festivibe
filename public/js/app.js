define(
  [ 'jquery',
    'underscore',
    'backbone' ],
  function( $, _, Backbone ) {
    'use strict';

    function init() {
      console.log( $ );
      console.log( _ );
      console.log( Backbone );
    }

    return { init: init };
  }
);
