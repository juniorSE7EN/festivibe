'use strict';

var middleware = require( '../middleware' );
var sessionController = require( '../controllers/session' );

module.exports = function( app ) {
  app.post( '/session', sessionController.create );
  app.get( '*', function( req, res ) {
    res.render( 'index' );
  });
};
