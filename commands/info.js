const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const version = client.config.botVersion;
    let embed = new Discord.RichEmbed()
    .setTitle("**Who is Coding Yabe Sei?**")
    .setDescription("Codied as a gift to my Friend Jala Owner of Skrrt Server ")
    .addField("Created by:", "- ,`Jacob | ♂ , ♡#9900\n\nJoin our [Discord](https://discord.gg/62EbKEV) To ask if you can get your own botn\n")
    .setTimestamp()
    .setFooter(`Version:  ${version} | Currently on ${client.guilds.size} servers with ${client.users.size} users.`)
    .setColor(client.config.embedColor)

    message.channel.send(embed)
}

exports.help = {
    name: "info",
    description: "The `info` command displays info about Yabe Sei, and the creators of Yabe.",
    usage: "`!info",
}
