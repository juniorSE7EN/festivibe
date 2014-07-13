'use strict';

var session = require( 'express-session' );
var users = require( '../models/users' );

module.exports = ( function() {
  function create( req, res ) {
    var username = req.body.username;
    var password = req.body.password;

    var user = users.findOne( username );
    if( !user ) return res.json( { error: 'invalid username' } );
    if( user.password !== password ) return res.json( { error: 'invalid password' } );

    req.session.regenerate( function( err ) {
      if( err ) return res.json( { error: 'authentication failed' } );

      req.session.user = user.username;
      return res.json( user );
    });
  }

  function destroy( req, res ) {
    req.session.destroy( function( err ) {
      //
    });
  }

  return {
    create : create,
    destroy: destroy
  };
})();
