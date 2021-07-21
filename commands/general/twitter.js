const client = require('../../src/client.js');

module.exports = {
  name: 'twitter',
  mod: false,
  args: false,
  userMapChanges: false,
  execute (channel, tags, message, self, args)  {
    client.say(channel, 'Here\'s my twitter! https://twitter.com/amimista_ttyl TooSpicy');
  },
};