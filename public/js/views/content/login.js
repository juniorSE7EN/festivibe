define(
  [ 'backbone',
    'common',
    'models/session' ],
  function( Backbone, common, Session ) {
    'use strict';

    return Backbone.View.extend({
      tagName: 'div',

      className: 'login-form',

      events: {
        'submit form': 'onSubmit'
      },

      template: function() {
        return ''
          + '<form>'
          +   '<div>'
          +     '<input type="text" name="username" placeholder="username">'
          +   '</div>'
          +   '<div>'
          +     '<input type="password" name="password" placeholder="password">'
          +   '</div>'
          +   '<button type="submit">login</button>'
          + '</form>';
      },

      initialize: function() {
        common.user = new Session();

        this.render();
      },

      render: function() {
        this.$el.html( this.template() );
      },

      onSubmit: function( e ) {
        e.preventDefault();

        common.user.save({
          username: this.$el.find( 'input[name="username"]' ),
          password: this.$el.find( 'input[name="password"]' )
        }, { success: this.onSuccess, error: this.onError } );
      },

      onSuccess: function( model, response, options ) {
        console.log( model, response, options );
      },

      onError: function( model, response, options ) {
        console.log( model, response, options );
      }
    });
  }
);
