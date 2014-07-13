define(
  [ 'backbone',
    'common' ],
  function( Backbone, common ) {
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
        this.render();
      },

      render: function() {
        this.$el.html( this.template() );
      },

      onSubmit: function( e ) {
        e.preventDefault();

        common.user.save({
          username: this.$el.find( 'input[name="username"]' ).val(),
          password: this.$el.find( 'input[name="password"]' ).val()
        }, { success: this.onSuccess, error: this.onError } );
      },

      onSuccess: function( model, response, options ) {
        if( response.error ) return this.handler( response.error );

        for( var prop in response ) {
          model.set( prop, response[ prop ] );
        }

        common.events.trigger( 'router:hashChange', { route: 'index', trigger: true } );
      },

      onError: function( model, response, options ) {
        console.log( model, response, options );
      },

      handler: function( err ) {
        console.log( err );
      }
    });
  }
);
