define(
  [ 'underscore',
    'backbone' ],
  function( _, Backbone ) {
    'use strict';

    return { events: _.extend( {}, Backbone.Events ) };
  }
);
