define(
  [ 'backbone' ],
  function( Backbone ) {
    'use strict';

    return Backbone.View.extend({
      tagName: 'div',

      className: 'store',

      template: function() {
        return '';
      },

      initialize: function() {
        this.render();
      },

      render: function() {
        this.$el.html( this.template() );
      }
    });
  }
);
