const client = require('../../src/client.js');

module.exports = {
  name: 'youtube',
  mod: false,
  args: false,
  userMapChanges: false,
  execute (channel, tags, message, self, args)  {
    client.say(channel, 'Here\'s my youtube channel: https://www.youtube.com/channel/UCu8jdrMDJjzVrLW4PIpPNeQ PogChamp');
  },
};