define(
  [ 'backbone',
    'common',
    'models/blog',
    'views/content/blog-new-tags' ],
  function( Backbone, common, Blog, BlogNewTagsView ) {
    'use strict';

    var tagMap = {
      'open-h2'     : '<h2>',
      'close-h2'    : '</h2>',
      'open-h3'     : '<h3>',
      'close-h3'    : '</h3>',
      'open-strong' : '<strong>',
      'close-strong': '</strong>'
    };

    return Backbone.View.extend({
      tagName: 'div',

      className: 'blog-new',

      events: {
        'click .blog-content': 'onClick',
        'submit form'        : 'onSubmit'
      },

      template: function() {
        return ''
          + '<form>'
          +   '<div>'
          +     '<label>title</label>'
          +     '<input type="text" name="blog-title">'
          +   '</div>'
          +   '<div>'
          +     '<label>cover image url</label>'
          +     '<input type="text" name="blog-cover-url">'
          +   '</div>'
          +   '<div class="editor">'
          +     '<label>content</label>'
          +     '<div>'
          +       '<div class="tags"></div>'
          +       '<div class="blog-content" contenteditable="true"></div>'
          +     '</div>'
          +   '</div>'
          +   '<button type="submit">create</button>'
          + '</form>';
      },

      initialize: function() {
        this.model = new Blog();

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
        this.listenTo( this.blogNewTagsView, 'tag', this.setActiveTag );
      },

      setActiveTag: function( tag ) {
        this.activeTag = tag;
      },

      onClick: function( e ) {
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
          var tag = document.createTextNode( tagMap[ this.activeTag ] );
          textNode.parentNode.insertBefore( tag, split );
        }
      },

      onSubmit: function( e ) {
        e.preventDefault();

        this.model.save({
          title   : this.$el.find( 'input[name="blog-title"]' ).val(),
          coverURL: this.$el.find( 'input[name="blog-cover-url"]' ).val(),
          content : this.$el.find( '.blog-content' ).text()
        }, { success: this.onSuccess, error: this.onError } );
      },

      onSuccess: function( model, response, options ) {
        if( response.error ) return this.handler( response.error );

        common.events.trigger( 'router:hashChange', { route: 'blog', trigger: true } );
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
