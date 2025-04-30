const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config(); // To use environment variables

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// Ready event
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Message listener
client.on('messageCreate', (message) => {
    // Ignore messages from the bot itself
    if (message.author.bot) return;

    // Check for a specific command
    if (message.content === '!ping') {
        message.reply('Pong!');
    }
});

// Login to Discord with your app's token
client.login(process.env.DISCORD_TOKEN);
