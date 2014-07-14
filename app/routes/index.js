'use strict';

var middleware = require( '../middleware' );
var sessionController = require( '../controllers/session' );
var blogController = require( '../controllers/blog' );

module.exports = function( app ) {
  app.post( '/session', sessionController.create );
  app.post( '/blog', blogController.create );
  app.get( '*', function( req, res ) {
    res.render( 'index' );
  });
};
