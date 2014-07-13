'use strict';

var users = {
  nick: { username: 'nick', password: 'vibe' },
  robby: { username: 'robby', password: 'jr' }
};

module.exports = ( function() {
  function findOne( username ) {
    return users[ username ];
  }

  return {
    findOne: findOne
  };
})();
