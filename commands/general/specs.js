const client = require('../../src/client.js');

module.exports = {
  name: 'specs',
  mod: false,
  args: false,
  userMapChanges: false,
  execute (channel, tags, message, self, args)  {
    client.say(channel, 'R7 3700x, GTX 1060 6Gb, 16Gb (3600MHz) RAM');
  },
};