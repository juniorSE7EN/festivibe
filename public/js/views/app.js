define(
  [ 'backbone',
    'views/header',
    'views/footer' ],
  function( Backbone, HeaderView, FooterView ) {
    'use strict';

    return Backbone.View.extend({
      el: '#festivibe',

      template: function() {
        return ''
          + '<header></header>'
          + '<div class="content"></div>'
          + '<footer></footer>';
      },

      initialize: function() {
        this.render()
          .createHeader()
          .createFooter();
      },

      render: function() {
        this.$el.html( this.template() );
        return this;
      },

      createHeader: function() {
        this.$el
          .find( 'header' )
          .html( new HeaderView().el );
        return this;
      },

      createFooter: function() {
        this.$el
          .find( 'footer' )
          .html( new FooterView().el );
        return this;
      }
    });
  }
);
