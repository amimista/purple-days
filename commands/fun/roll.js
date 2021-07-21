const client = require('../../src/client.js');

module.exports = {
  name: 'roll',
  mod: false,
  args: false,
  userMapChanges: false,
  execute (channel, tags, message, self, args)  {
    client.say(channel, `You rolled a ${Math.floor((Math.random() * 10) + 1)}`);
  },
};