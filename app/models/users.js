'use strict';

var users = {
  nick: { username: 'nick', password: 'vibe' }
};

module.exports = ( function() {
  function getAll() {
    return users;
  }

  return {
    getAll: getAll
  };
})();
