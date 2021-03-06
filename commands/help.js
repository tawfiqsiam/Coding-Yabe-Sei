const Discord = require("discord.js");
const fs = require("fs");

exports.run = (client, message, args) => {
    if (args[0]) {
        fs.readdir("./commands/", (err, files) => {
            if (err) console.error(err);

            try {
                files.forEach(file => {
                    let commands = [];
                    let props = require(`./${file}`);
                    let cmdName = props.help.name;
                    let cmdDescription = props.help.description;
                    let cmdUsage = props.help.usage;
                    commands.push(cmdName);

                    if (commands.includes(args[0])) {
                        if (args[0] == file.split('.')[0]) {
                            const embed = new Discord.RichEmbed()
                                .addField(`**${cmdName[0].toUpperCase() + cmdName.slice(1)} Command**`, cmdDescription)
                                .addField('Usage', cmdUsage)
                                .setColor(client.config.embedColor)

                                message.channel.send(embed);
                            }
                    }
                });
            } catch (err) {
                message.channel.send("An error has occured while processing your request. if this persists send a bug report using ` hope`");
            }
        });
    } else {
        const embed = new Discord.RichEmbed()
            .setColor(client.config.embedColor)
            .addField("**Changelog**", "You can check the latest changes with `skrrt changelog`")
            .addField("**Commands**", "List of all available commands\nFor additional help with a command, type `skrrt help <command name>`\nThank you for using My bot! i  hope you will Love it!")
            .addField("**Moderation** *`each require certain perms`*", "`say` `kick` `ban` `rem`")
            .addField("**Fun**", "`meme` `poke` `slap`")
            .addField("**Games**", "`games are coming very soon!`")
            .addField("**Learning**", "`just dont try tp learn codes just buy bots from me Join our [Discord](https://discord.gg/62EbKEV)")
            .addField("**Random**", "`roles` `roll` `addrole` `ping` `help` `serverinfo` `info` `bug` `invite` `whois` `avatar` `changelog` `translate` `uptime` `osu`")
            .setFooter("Created by Jacob")
            .setTimestamp()
    
        message.channel.send(embed)
    }
}

exports.help = {
    name: "help",
    description: "The `help` command displays a help menu, which contains a list of commands and a way to find further help.",
    usage: "`!help`"
}
