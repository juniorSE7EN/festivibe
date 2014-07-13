define(
  [ 'backbone',
    'common',
    'header-session' ],
  function( Backbone, common, HeaderSessionView ) {
    'use strict';

    return Backbone.View.extend({
      tagName: 'div',

      className: 'clearfix',

      events: {
        'click .store': 'storeOnClick',
        'click .blog' : 'blogOnClick'
      },

      template: function() {
        return ''
          + '<div class="logo">'
          +   '<img src="img/festivibe.png" alt="Festivibe logo">'
          + '</div>'
          + '<nav>'
          +   '<ul>'
          +     '<li class="store">store</li>'
          +     '<li class="blog">blog</li>'
          +     '<li class="login"></li>'
          +   '</ul>'
          + '</nav>'
          + '<div class="bar"></div>';
      },

      initialize: function() {
        this.render()
          .createLogin();
      },

      render: function() {
        this.$el.html( this.template() );
        return this;
      },

      createLogin: function() {
        this.$el
          .find( '.login' )
          .html( new HeaderSessionView().el );
        return this;
      },

      // event listeners
      storeOnClick: function( e ) {
        common.events.trigger( 'router:hashChange', { route: 'index', trigger: true } );
      },

      blogOnClick: function( e ) {
        common.events.trigger( 'router:hashChange', { route: 'blog', trigger: true } );
      }
    });
  }
);
