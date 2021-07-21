const tmi = require('tmi.js');
const config = require('../config.json');
const client = new tmi.Client({
  options: { debug: true, messagesLogLevel: "info" },
  identity: {
    username: config.username,
    password: config.oauth
  },
  connection: {
    reconnect: true
  },
  channels: [
    'amimista', 'no7bullet', 'prixhylian'
  ]
});

module.exports = client;