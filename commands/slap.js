const Discord = require('discord.js')

exports.run = (client, message, args) => {
    let slaps = ['https://tenor.com/view/anime-slap-gif-5122897 ',' https://tenor.com/view/animepound-slam-gif-4880762 ',' https://tenor.com/view/mad-angry-pissed-upset-slap-gif-4436362',' https://tenor.com/view/anime-slap-horse-slap-funny-gif-8562186 ',' https://tenor.com/view/oreimo-gif-10937029 ',' https://tenor.com/view/money-stare-cash-slap-fight-gif-12342551 ',' https://tenor.com/view/anime-slap-gif-7602649 ',' https://tenor.com/view/hair-slap-anime-cry-gif-12812324 ',' https://tenor.com/view/anime-slap-smack-this-is-you-getting-slapped-gif-11612096 ',' https://tenor.com/view/slap-anime-bro-gang-squad-gif-4703404 ',' https://tenor.com/view/slap-blood-anime-gif-4961067 ',' https://tenor.com/search/happy-gifs ',' https://tenor.com/view/sick-slap-jealous-anime-get-qell-gif-12444851 ',' https://tenor.com/view/miku-hatsune-slap-smack-anime-gif-11610001 ',' https://tenor.com/view/relationship-anime-fight-arguing-gif-9778017 ',' https://tenor.com/view/naruto-uzumaki-book-slap-funny-gif-4867262 ',' https://tenor.com/view/gintama-gintoki-sataka-anime-gif-9214430 ',' https://tenor.com/view/mm-anime-emu-emu-paper-fan-slap-gif-7962727 ',' https://tenor.com/view/fuuka-anime-cartoon-japanese-slap-gif-7527933 ',' https://tenor.com/view/no-angry-anime-slap-gif-7355956 ',' https://steamusercontent-a.akamaihd.net/ugc/850473950842117246/8C83635F86CE09C683D511622D7ED2B85BAD3ADD/ ',' https://i.imgur.com/4iPCfVO.gif', 'https://i.imgur.com/8g6t0a3.gif', 'https://i.imgur.com/u7bKmq0.gif', 'https://i.imgur.com/v1u3DpJ.gif', 'https://i.imgur.com/T7npUHy.gif', 'https://i.imgur.com/rDSHdbw.gif', 'https://i.imgur.com/VtbV4HW.gif', 'https://i.imgur.com/lzc81Yw.gif', 'https://i.imgur.com/MnfAJbs.gif']
    let slapR = slaps[Math.floor(Math.random() * slaps.length)]
    let personslap = message.mentions.members.first()
    let quote = ['Oof', 'Ouch', 'That hurt', 'Wow', 'LOL', 'Yeet']
    let quoter = quote[Math.floor(Math.random() * quote.length)]

    if(!personslap) {
        let personslap = 'nobody'

        let embed = new Discord.RichEmbed()
        .setDescription(`**<@${message.author.id}> just slapped ${personslap}! ${quoter}!**`)
        .setImage(slapR)
        .setColor(client.config.embedColor)
    
        message.channel.send(embed)
        return
    }

    let embed = new Discord.RichEmbed()
    .setDescription(`**<@${message.author.id}> just slapped ${personslap}! ${quoter}!**`)
    .setImage(slapR)
    .setColor(client.config.embedColor)

    message.channel.send(embed)
}

exports.help = {
    name: "slap",
    description: "The `slap` command allows you to slap your friends to show your disdain for them! :)",
    usage: "`!slap <person to slap>`",
}
