const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js")

module.exports = {
  name: "help",
  aliases: [""],
  description: "help bot",
  usage: ["!help"],
  category: "info",
  botPermission: ["EMBED_LINKS"],
  authorPermission: ["SEND_MESSAGES"],
  cooldowns: [],
  ownerOnly: false,
  run: async (safaa, message, args, config) => {
    const db2 = require("pro.db")

    const db3 = db2.get("prefix")
    const prefix = `${config.prefix}` && db3

    let button = new Discord.MessageActionRow()
    let Helefl = new Discord.MessageEmbed()
      .setColor('AQUA')
      .setTitle(`it's order me.`)

      .setDescription(`> **Admin Commands:**\n \`${prefix}ban\` - Ban a member from the server. \n \`${prefix}unban\` - Unban a member from the server. \n \`${prefix}unban-all\` - Unban all members from the server. \n \`${prefix}kick\` - Kick a member from the server. \n \`${prefix}lock\` - Lock the chat. \n \`${prefix}unlock\` - Unlock the chat. \n \`${prefix}role\` - Add or remove a role from a member. \n \`${prefix}clear\` - Clear chat messages. \n \`${prefix}listbans\` - Show all banned members. \n \`${prefix}hide\` - Hide the chat. \n \`${prefix}show\` - Show the chat. \n \`${prefix}mute\` - Mute a member in chat. \n \`${prefix}unmute\` - Unmute a member in chat. \n \`${prefix}timeout\` - Give a member a timeout. \n \`${prefix}hide-all\` - Hide all channels. \n \`${prefix}vkick\` - Kick a member from voice channel. \n \`${prefix}role-all\` - Give a role to everyone. \n \`${prefix}setnick\` - Change someone's nickname in the server. \n \`${prefix}move\` - Move members to a voice channel. \n \`${prefix}show-all\` - Show all channels. \n \`${prefix}rooms\` - Show members in voice channels. \n \`${prefix}vmute\` - Voice mute a member. \n \`${prefix}vunmute\` - Remove voice mute. \n \`${prefix}check\` - Show members with a specific role. \n \`${prefix}role-info\` - Show information about a role. \n\n > **General Commands:** \n \`${prefix}avatar\` - Show a member's avatar. \n \`${prefix}avatar server\` - Show the server's avatar. \n \`${prefix}banner\` - Show a member's banner. \n \`${prefix}roles\` - Show all server roles. \n \`${prefix}server\` - Show server information. \n \`${prefix}user\` - Show user information. \n \`${prefix}color\` - Choose a color. \n \`${prefix}colors\` - Show color list. \n \`${prefix}invites\` - Show your invite count. \n \`${prefix}top-invites\` - Show top inviters. \n \`${prefix}link\` - Send the server invite link. \n\n > **Owner Commands:** \n \`${prefix}setavatar\` - Change the bot's avatar. \n \`${prefix}setprefix\` - Change the bot's prefix. \n \`${prefix}setname\` - Change the bot's name. \n \`${prefix}setgame\` - Change the bot's status. \n \`${prefix}embed\` - Send a message as an embed. \n \`${prefix}say\` - Send a message to a specific channel. \n \`${prefix}image\` - Send an image in chat. \n\n > **Protection Commands:** \n \`${prefix}anti-bot\` - Enable/disable bot protection. \n \`${prefix}anti-link\` - Enable/disable link protection. \n \`${prefix}anti-word\` - Enable/disable bad word protection. \n \`${prefix}show-bot\` - Show all server bots. \n\n > **Welcome Settings:** \n \`${prefix}channel-wlc\` - Set the welcome channel. \n \`${prefix}image-wlc\` - Set the welcome image. \n \`${prefix}message-wlc\` - Set the welcome message. \n \`${prefix}toggle-wlc\` - Enable/disable welcome messages. \n \`${prefix}setting wlc\` - Show all welcome settings. \n \`${prefix}test\` - Test welcome event. \n\n > **Music Commands:** \n \`${prefix}play\` - Play music. \n \`${prefix}repeat\` - Repeat the current song. \n \`${prefix}pause\` - Pause the current song. \n \`${prefix}resume\` - Resume the paused song. \n \`${prefix}queue\` - Show the music queue. \n \`${prefix}nowplaying\` - Show the currently playing song. \n \`${prefix}volume\` - Adjust the volume. \n \`${prefix}skip\` - Skip the current song. \n \`${prefix}stop\` - Stop music and clear the queue.
    `)


    // .addField(`\`${prefix}setname\` `, `change name bot.`,true)
    //.addField(`\`${prefix}setavatar\``, `change avatar bot`,true)
    //   .addField(`\`${prefix}say\``, `sends a message to the target channel`,true)
    message.author.send({ embeds: [Helefl] }).then(eem => {
      message.react("✅").catch(err => {
        message.react('❌')
      })
    })
  }
}