const client = require('../../src/client.js');

module.exports = {
  name: 'lurk',
  mod: false,
  args: false,
  userMapChanges: true,
  execute (channel, tags, message, self, args)  {
    client.say(channel, `Thanks for sticking around, @${tags.username}. See ya later!`);
  },
};