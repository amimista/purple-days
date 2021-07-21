// dependancies
const fs = require('fs');
const chalk = require('chalk');

// user made dependancies
const client = require('./client.js');
const { prefix } = require('../config.json');

const userMap = new Map();

/**
 * This is most similar to Discord.Collection(), as it extends Map(). Works pretty much the same aswell.
 */
const commands = new Map();

const commandFolders = fs.readdirSync('./commands');
for (const folder of commandFolders) {
  const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
  for (const file of commandFiles) {
    const command = require(`../commands/${folder}/${file}`);
    commands.set(command.name, command);
    console.log(chalk.blueBright("LOADER"), `${command.name} has been loaded`);
  }
}
console.log(chalk.greenBright("INFO"), "All commands loaded");

client.connect();

// connected even listener
client.once('connected', (channel) => {
  console.log(chalk.greenBright("INFO"), "Bot is ready!");
});

// subscription event listener
client.on('subscription', async (channel, tags, self) => {
  client.say(channel, `${tags.username} just subscribed! KonCha`)
});

// raid event listener
client.on('raided', async (channel, tags, self) => {
  client.say(channel, `${tags.username} is raiding ${channel.slice(0, 1)}!`);
});

// message event listener
client.on('message', async (channel, tags, message, self, args) => {

  if (self) return; // if account effected worte the message

  // userMap changes (mostly for the lurking)
  if (userMap.has(tags.username) == true) {
    if (userMap.get(tags.username).lurking == true) {
      userMap.set(tags.username, { lurking: false });
      client.say(channel, `Welcome Back ${tags.username}! I missed you :>`);
    }
  }

  if (!message.startsWith(prefix)) return; // if it doesn't start with the prefix, its forfeit

  args = message.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  if (!commands.has(commandName)) return; // looking for the command, and if not there, not worth the processing.

  const command = commands.get(commandName);

  // constraints
  if (command.args && !args.length) { // args
    return client.say(channel, `You haven't input any arguments. The correct usage is '${prefix}${command.name} ${command.usage}'`);
  }

  if ((!tags.mod || tags.username != channel.slice(1)) && command.mod == true) { // moderator privilages
    return client.say(channel, `You need to be mod on this channel, @${tags.username}`);
  }

  // userMap changes based on the commands run.
  if (command.userMapChanges) {
    switch (command.name) {
      case "lurk":
        userMap.set(tags.username, { lurking: true });
        // console.log(userMap.get(tags.username));
        break;
      default:
        break;
    }
  }

  // actual execution
  try {
    command.execute(channel, tags, message, self, args);
  } catch (error) {
    console.error(chalk.yellowBright('ERROR'), error);
    client.say(channel, `There was an internal problem trying to execute that command, @${tags.username}`);
  }

});
