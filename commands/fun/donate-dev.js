const client = require('../../src/client.js');

module.exports = {
  name: 'donate-dev',
  mod: false,
  args: false,
  userMapChanges: false,
  execute (channel, tags, message, self, args)  {
    client.say(channel, 'DONATE TO ME! paypal link hehe');
  },
};