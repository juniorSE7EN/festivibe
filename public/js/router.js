define(
  [ 'backbone',
    'events',
    'views/app' ],
  function( Backbone, events, AppView ) {
    'use strict';

    return Backbone.Router.extend({
      routes: {
        '': 'index',
        'blog': 'blog'
      },

      initialize: function() {
        this.appView = new AppView();

        this.subscribe();
      },

      subscribe: function() {
        this.listenTo( events, 'router:hashChange', this.hashChange );
      },

      hashChange: function( opts ) {
        this.navigate( opts.route, { trigger: opts.trigger } );
      },

      index: function() {
        console.log( 'index' );
      },

      blog: function() {
        console.log( 'blog' );
      }
    });
  }
);
