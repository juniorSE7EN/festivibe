define(
  [ 'backbone',
    'common' ],
  function( Backbone, common ) {
    'use strict';

    return Backbone.Model.extend({
      idAttribute: '_id',

      urlRoot: '/session',

      initialize: function() {
        this.on( 'change', this.onChange, this );
      },

      onChange: function() {
        this.trigger( 'session' );
      }
    });
  }
);
