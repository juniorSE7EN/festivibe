define(
  [ 'backbone',
    'views/app' ],
  function( Backbone, AppView ) {
    'use strict';

    return Backbone.Router.extend({
      routes: {
        '': 'index'
      },

      initialize: function() {
        new AppView();
      },

      index: function() {
        //
      }
    });
  }
);
