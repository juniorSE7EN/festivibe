'use strict';

var users = require( '../models/users' );

module.exports = ( function() {
  function auth( req, res, next ) {
    var username = req.body.username;
    var password = req.body.password;

    var user = users.getAll()[ username ];
    if( !user ) return res.json( { error: 'invalid username' } );
    if( user.password !== password ) return res.json( { error: 'invalid password' } );

    next();
  }

  return {
    auth: auth
  };
})();
