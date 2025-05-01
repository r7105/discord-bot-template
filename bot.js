const { Client, GatewayIntentBits } = require('discord.js'); // Imports the discord.js system
require('dotenv').config(); // To use environment variables (this is entirely optional but if you remove this line replace (wrapped with >><<) `client.login(>>process.env.DISCORD_TOKEN<<)` with your token)

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] }); // these are generally required, do not remove this

// Ready event
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Message listener
client.on('messageCreate', (message) => { // this will run when the bot detects a message sent
    // Ignore messages from the bot itself
    if (message.author.bot) return; // this adds a check for if the user is a bot, if the user is a bot then this should return true `(message.author.>>bot<<)` if not then it will return false and continue to the next line

    // Check for a specific command
    if (message.content === '!ping') { // when a member sends a message containing '!ping' (activated by `if (message.content === ...) 
        message.reply('Pong!'); // sends a message as the bot
    }
});

// Login to Discord with your app's token
client.login(process.env.DISCORD_TOKEN); // runs the bot
