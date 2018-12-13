const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let embed = new Discord.RichEmbed()

    .setColor(client.config.embedColor)
    .setDescription(`[Click here to invite me to your server :3](https://discord.gg/FmPM6ha)`)

    message.channel.send(embed)
}

exports.help = {
    name: "invite",
    description: "The `invite` command sends an instant invite for Yabe straight to your own server(s).",
    usage: "`yabe invite`",
}
