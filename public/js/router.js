define(
  [ 'backbone',
    'common',
    'views/app' ],
  function( Backbone, common, AppView ) {
    'use strict';

    return Backbone.Router.extend({
      routes: {
        ''        : 'index',
        'blog'    : 'blog',
        'blog/new': 'blogNew',
        'login'   : 'login'
      },

      initialize: function() {
        this.appView = new AppView();

        this.subscribe();
      },

      subscribe: function() {
        this.listenTo( common.events, 'router:hashChange', this.hashChange );
      },

      hashChange: function( opts ) {
        if( 'index' === opts.route ) opts.route = '';

        this.navigate( opts.route, { trigger: opts.trigger } );
      },

      index: function() {
        this.appView.setView( 'store' );
      },

      blog: function() {
        this.appView.setView( 'blog' );
      },

      blogNew: function() {
        if( !common.user.get( 'username' ) ) return this.navigate( '', { trigger: true } );

        this.appView.setView( 'blogNew' );
      },

      login: function() {
        this.appView.setView( 'login' );
      }
    });
  }
);
