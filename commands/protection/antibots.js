const { MessageEmbed } = require("discord.js")
const db = new require("pro.db");  // (:
module.exports = {
  name: "anti-bot",
  aliases: [""],
  description: "Anti-Bot Protection",
  usage: `{prefix}anti-bot off/on`,
  category: "owner",
  botPermission: [],
  authorPermission: [],
  cooldowns: [],
  ownerOnly: true,
  run: async (client, message, args, config) => {
    
  var _0x3460=["\x2A\x2A\x20\uD83D\uDE44\x20\x50\x6C\x65\x61\x73\x65\x20\x50\x72\x6F\x76\x69\x64\x65\x20\x4D\x65\x20\x5C\x60\x6F\x6E\x5C\x60\x20\x4F\x72\x20\x5C\x60\x6F\x66\x66\x5C\x60\x20\x53\x74\x61\x74\x65\x6D\x65\x6E\x74\x20\x2A\x2A","\x72\x65\x70\x6C\x79","\x6F\x6E","\x61\x6E\x74\x69\x5F","\x69\x64","\x67\x75\x69\x6C\x64","\x5F\x62\x6F\x74","\x73\x65\x74","\x3E\x20\x3A\x77\x68\x69\x74\x65\x5F\x63\x68\x65\x63\x6B\x5F\x6D\x61\x72\x6B\x3A\x20\x2A\x2A\x54\x68\x65\x20\x61\x6E\x74\x69\x62\x6F\x74\x20\x69\x73\x20\x6F\x6E\x20\x5C\x60","\x5C\x60\x20\x69\x6E\x20\x79\x6F\x75\x72\x20\x73\x65\x72\x76\x65\x72\x20\x2A\x2A","\x6F\x66\x66","\x3E\x20\x3A\x77\x68\x69\x74\x65\x5F\x63\x68\x65\x63\x6B\x5F\x6D\x61\x72\x6B\x3A\x20\x2A\x2A\x54\x68\x65\x20\x61\x6E\x74\x69\x62\x6F\x74\x20\x69\x73\x20\x6F\x66\x66\x20\x5C\x60"];let dogeguild=args[0];if(!dogeguild){return message[_0x3460[1]](`${_0x3460[0]}`)};if(dogeguild== _0x3460[2]){ await db[_0x3460[7]](`${_0x3460[3]}${message[_0x3460[5]][_0x3460[4]]}${_0x3460[6]}`,true);return message[_0x3460[1]](`${_0x3460[8]}${args[0]}${_0x3460[9]}`)}else {if(dogeguild== _0x3460[10]){ await db[_0x3460[7]](`${_0x3460[3]}${message[_0x3460[5]][_0x3460[4]]}${_0x3460[6]}`,false);return message[_0x3460[1]](`${_0x3460[11]}${args[0]}${_0x3460[9]}`)}}
  }
}