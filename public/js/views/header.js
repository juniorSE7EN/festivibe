define(
  [ 'backbone',
    'common' ],
  function( Backbone, common ) {
    'use strict';

    return Backbone.View.extend({
      tagName: 'div',

      className: 'clearfix',

      events: {
        'click .blog' : 'blogOnClick',
        'click .login': 'loginOnClick'
      },

      template: function() {
        return ''
          + '<div class="logo">'
          +   '<img src="img/festivibe.png" alt="Festivibe logo">'
          + '</div>'
          + '<nav>'
          +   '<ul>'
          +     '<li class="blog">blog</li>'
          +     '<li class="login">login</li>'
          +   '</ul>'
          + '</nav>'
          + '<div class="bar"></div>';
      },

      initialize: function() {
        this.render();
      },

      render: function() {
        this.$el.html( this.template() );
      },

      // event listeners
      blogOnClick: function( e ) {
        common.events.trigger( 'router:hashChange', { route: 'blog', trigger: true } );
      },

      loginOnClick: function( e ) {
        common.events.trigger( 'router:hashChange', { route: 'login', trigger: true } );
      }
    });
  }
);
