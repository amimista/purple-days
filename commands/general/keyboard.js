const client = require('../../src/client.js');

module.exports = {
  name: 'keyboard',
  mod: false,
  args: false,
  userMapChanges: false,
  execute (channel, tags, message, self, args)  {
    client.say(channel, 'Khail Box Blacks (Krytox 205g0) with TADA67 Plastic Case. Cheap keycaps off of amazon.');
  },
};