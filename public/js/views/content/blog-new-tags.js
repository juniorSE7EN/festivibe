define(
  [ 'backbone' ],
  function( Backbone ) {
    'use strict';

    return Backbone.View.extend({
      tagName: 'ul',

      template: function() {
        return ''
          + '<li data-tag="open-h2">h2</li>'
          + '<li data-tag="close-h2">/h2</li>'
          + '<li data-tag="open-h3">h3</li>'
          + '<li data-tag="close-h3">/h3</li>'
          + '<li data-tag="open-strong">s</li>'
          + '<li data-tag="close-strong">/s</li>';
      },

      initialize: function() {
        this.render()
          .cacheSelectors()
          .addEventListeners();
      },

      render: function() {
        this.$el.html( this.template() );
        return this;
      },

      cacheSelectors: function() {
        this.cache = {
          $li: this.$el.find( 'li' )
        };
        return this;
      },

      addEventListeners: function() {
        var that = this;
        Array.prototype.slice.call( this.cache.$li )
          .forEach( function( el ) {
            var $el = $( el );

            $el.on( 'click', function( e ) {
              var active = !( $el.hasClass( 'active' ) );

              that.cache.$li.removeClass( 'active' );
              $el.toggleClass( 'active', active );
              that.trigger( 'tag', active ? $el.data( 'tag' ) : null );
            });
          });
        return that;
      }
    });
  }
);
