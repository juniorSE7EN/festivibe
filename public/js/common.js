define(
  [ 'underscore',
    'backbone',
    'models/session' ],
  function( _, Backbone, Session ) {
    'use strict';

    return {
      user  : new Session(),
      events: _.extend( {}, Backbone.Events )
    };
  }
);
