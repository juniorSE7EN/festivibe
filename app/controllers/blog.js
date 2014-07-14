'use strict';

module.exports = ( function() {
  function create( req, res ) {
    console.log( req.body );

    res.json( req.body );
  }

  return {
    create: create
  };
})();
