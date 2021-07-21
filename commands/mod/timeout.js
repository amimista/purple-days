const client = require('../../src/client.js');

module.exports = {
  name: 'timeout',
  mod: true,
  args: true,
  usage: "<target> <seconds> <reason>",
  userMapChanges: true,
  execute (channel, tags, message, self, args)  {
    let reason = '';
    for(let i = 2; i < args.length; i++)  {
      reason+=args[i];
      reason+=' ';
      // return reason
    }

    // console.log(`${channel} ${args[0]} ${args[1]} '${reason}'`);
    client.timeout(channel, args[0], args[1], reason);
  },
};