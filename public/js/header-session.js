define(
  [ 'backbone',
    'common' ],
  function( Backbone, common ) {
    'use strict';

    return Backbone.View.extend({
      tagName: 'div',

      events: {
        'click .no-session': 'loginOnClick'
      },

      loginTemplate: function() {
        return '<div class="no-session">login</div>';
      },

      userTemplate: function() {
        return ''
          + '<div class="session">'
          +   '<span>' + common.user.get( 'username' ) + '</span>'
          + '</div>';
      },

      initialize: function() {
        this.render()
          .subscribe();
      },

      render: function() {
        this.$el.html( common.user.get( 'username' ) ? this.userTemplate() : this.loginTemplate() );
        return this;
      },

      subscribe: function() {
        this.listenTo( common.user, 'session', this.render );
        return this;
      },

      loginOnClick: function( e ) {
        common.events.trigger( 'router:hashChange', { route: 'login', trigger: true } );
      }
    });
  }
);
