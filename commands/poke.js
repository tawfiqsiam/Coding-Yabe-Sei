const Discord = require('discord.js')

exports.run = (client, message, args) => {
    let personPoke = message.mentions.members.first()
    let pokes = ['https://i.imgur.com/Ym7K7sn.gif', ' https://tenor.com/view/cowboy-bebop-edward-wake-up-anime-poke-gif-12583168 ',' https://tenor.com/view/wake-up-anime-poke-gif-11152752 ',' nor.com/view/boop-nose-anime-gif-6287077',' https://tenor.com/view/fight-anime-poke-ouch-gif-11956062',' https://tenor.com/view/anime-poke-serious-hey-gif-12583170',' https://tenor.com/view/inux-boku-ss-anime-girl-poke-gif-12872012 ',' https://tenor.com/view/mashiro-mitsumine-anime-cheeks-poke-gif-10168199 ',' https://tenor.com/view/poke-anime-gif-5015314 ',' https://tenor.com/view/poke-anime-sleeping-girl-gif-10064326 ',' https://tenor.com/view/anime-picking-nose-annoy-poke-gif-10217135 ',' https://tenor.com/search/poke-gifs',' https://tenor.com/view/anime-poke-poking-annoyed-annoying-gif-7739077 ',' https://tenor.com/view/puella-magi-madoka-magica-poke-anime-point-gif-8701034 ',' https://tenor.com/view/testament-of-sister-new-devil-shinmai-maou-no-testament-basara-anime-poke-gif-13054528 ',' A.gif', 'https://i.imgur.com/hjMRxyZ.gif', 'https://i.imgur.com/wa2dUw4.gif', 'https://i.imgur.com/1fQITL7.gif', 'https://i.imgur.com/1fQITL7.gif', 'https://i.imgur.com/yOEOe9J.gif']
    let pokesR = pokes[Math.floor(Math.random() * pokes.length)]
    let quote
    let quoteR
    if(!personPoke) {
        let personPoke = "nobody"

        let embed = new Discord.RichEmbed()
        .setDescription(`**<@${message.author.id}> just poked ${personPoke}!**`)
        .setImage(pokesR)
        .setColor(client.config.embedColor)
    
        message.channel.send(embed)
        return
    }

    let embed = new Discord.RichEmbed()
    .setDescription(`**<@${message.author.id}> just poked ${personPoke}!**`)
    .setImage(pokesR)
    .setColor(client.config.embedColor)

    message.channel.send(embed)
}

exports.help = {
    name: "poke",
    description: "The `poke` command allows you to poke your friends!",
    usage: "`!poke <person to poke>`",
}
