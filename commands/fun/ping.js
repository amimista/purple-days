const client = require('../../src/client.js');

module.exports = {
  name: 'ping',
  mod: false,
  args: false,
  userMapChanges: false,
  execute (channel, tags, message, self, args)  {
    client.say(channel, 'Pong!');
  },
};