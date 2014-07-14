define(
  [ 'backbone',
    'views/content/blog-new-tags' ],
  function( Backbone, BlogNewTagsView ) {
    'use strict';

    return Backbone.View.extend({
      tagName: 'div',

      className: 'blog-new',

      events: {
        'click .blog-content': 'onClick'
      },

      template: function() {
        return ''
          + '<form>'
          +   '<div class="blog-cover-img"></div>'
          +   '<input type="text" name="blog-title">'
          +   '<div class="editor">'
          +     '<div class="blog-content" contenteditable="true"></div>'
          +     '<div class="tags"></div>'
          +   '</div>'
          + '</form>';
      },

      initialize: function() {
        this.render()
          .createTagsView()
          .subscribe();
      },

      render: function() {
        this.$el.html( this.template() );
        return this;
      },

      createTagsView: function() {
        this.blogNewTagsView = new BlogNewTagsView();

        this.$el
          .find( '.tags' )
          .html( this.blogNewTagsView.el );
        return this;
      },

      subscribe: function() {
        this.listenTo( this.blogNewTagsView, 'tag:active', this.setActiveTag );
        this.listenTo( this.blogNewTagsView, 'tag:inactive', this.setActiveTag );
      },

      setActiveTag: function( tag ) {
        this.activeTag = tag;
      },

      onClick: function( e ) {
        this.activeTag = '<strong>';
        if( !this.activeTag ) return false;

        var range, textNode, offset;

        if( document.caretRangeFromPoint ) {
          range = document.caretRangeFromPoint( e.clientX, e.clientY );
          textNode = range.startContainer;
          offset = range.startOffset;
        } else if( document.caretPositionFromPoint ) {
          range = document.caretPositionFromPoint( e.clientX, e.clientY );
          textNode = range.offsetNode;
          offset = range.offset;
        } else {
          return false;
        }

        if( 3 === textNode.nodeType ) {
          var split = textNode.splitText( offset );
          var tag = document.createTextNode( this.activeTag );
          textNode.parentNode.insertBefore( tag, split );
        }
      }
    });
  }
);
