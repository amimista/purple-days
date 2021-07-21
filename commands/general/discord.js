const client = require('../../src/client.js');

module.exports = {
  name: 'discord',
  mod: false,
  args: false,
  userMapChanges: false,
  execute (channel, tags, message, self, args)  {
    client.say(channel, 'As of right now, I don\'t have a community discord. Let me know if you would like one though!');
  },
};