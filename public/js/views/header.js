define(
  [ 'backbone',
    'events' ],
  function( Backbone, events ) {
    'use strict';

    return Backbone.View.extend({
      tagName: 'div',

      className: 'clearfix',

      events: {
        'click.blog': 'blogOnClick'
      },

      template: function() {
        return ''
          + '<div class="logo">'
          +   '<img src="img/festivibe.png" alt="Festivibe logo">'
          + '</div>'
          + '<nav>'
          +   '<ul>'
          +     '<li>blog</li>'
          +     '<li>login</li>'
          +   '</ul>'
          + '</nav>';
      },

      initialize: function() {
        this.render();
      },

      render: function() {
        this.$el.html( this.template() );
      },

      // event listeners
      blogOnClick: function( e ) {
        events.trigger( 'router:hashChange', { route: 'blog', trigger: true } );
      }
    });
  }
);
