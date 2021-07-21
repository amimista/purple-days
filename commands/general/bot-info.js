const client = require('../../src/client.js');

module.exports = {
  name: 'bot-info',
  mod: false,
  args: false,
  userMapChanges: false,
  execute (channel, tags, message, self, args)  {
    client.say(channel, 'I made this :> Hope you enjoy!');
  },
};