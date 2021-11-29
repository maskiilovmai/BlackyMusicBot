const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
    name: "about",
    category: "Information",
    aliases: [ "botinfo" ],
    description: "See description about this project",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
     
    const row = new MessageActionRow()
			.addComponents(
        new MessageButton()
    .setLabel("Invite")
    .setStyle("LINK")
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot`),
			new MessageButton()
    .setLabel("Lava Music's GitHub")
    .setStyle("LINK")
    .setURL("https://github.com/brblacky/lavamusic"),
    new MessageButton()
    .setLabel("Sakura-Chan's GitHub")
    .setStyle("LINK")
    .setURL("https://github.com/maskiilovmai/BlackyMusicBot"),
    new MessageButton()
    .setLabel("Support")
    .setStyle("LINK")
    .setURL("https://discord.io/MaskiilovCnD")
			);

      const mainPage = new MessageEmbed()
            .setAuthor(`${client.user.username}`, client.user.displayAvatarURL())
            .setThumbnail(client.user.displayAvatarURL())
            .setColor('#303236')
            .addField('Creator', '[Blacky#6618](https://github.com/brblacky) And [Venom#9718](https://github.com/Venom9718/)', true)
            .addField('Edited by', '[Maskiilov Mai](https://github.com/maskiilovmai)', true)
            .addField('Repository', `[${client.user.username}](https://github.com/maskiilovmai/BlackyMusicBot) Or [Lava Music](https://github.com/brblacky/lavamusic)`, true)
            .addField('\u200b',
                `This [Music BOT](https://github.com/maskiilovmai/BlackyMusicBot) is using the source code of [Lava Music](https://github.com/brblacky/lavamusic). Edited and operated by [Maskiilov Mai](https://github.com/maskiilovmai).`)
            .addField('\u200b',
                `[Lava Music](https://github.com/brblacky/lavamusic) is [Blacky](https://github.com/brblacky) and [Venom](https://github.com/Venom9718)'s Was created by blacky and Venom. He really wants to make his first open source project ever. Because he wants more for coding experience. In this project, he was challenged to make project with less bugs. Hope you enjoy using this Music BOT!`
            )
        return message.reply({embeds: [mainPage], components: [row]});
    }
}