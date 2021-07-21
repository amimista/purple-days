const client = require('../../src/client.js');

module.exports = {
  name: 'echo',
  mod: true,
  args: true,
  execute (channel, tags, message, self, args)  {
    client.say(channel, `${message.slice((this.name + 2).length)}`);
  },
};