const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "invite",
    category: "Information",
    aliases: [ "addme" ],
    description: "invite the bot to your server",
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
    .setLabel("Sakura-Chan's Github")
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
            .addField(`Invite ${client.user.username}`, `[Here](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot)`, true)
           message.reply({embeds: [mainPage], components: [row]})
    }
				}