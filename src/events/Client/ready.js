const { prefix } = require("../../config.js");

module.exports = async (client) => {
    client.manager.init(client.user.id);
    client.logger.log(`${client.user.username} online!`, "ready");
    client.logger.log(`Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`, "ready");

    //Game
    let statuses = [
        `${prefix}help`, 
        `${prefix}play`,
        `${prefix}invite`,
        `${prefix}ping`,
        `${prefix}status`,
        `${prefix}24/7`,
        `Prefix ${prefix}`,
        '24/7 in VC',
        'Music',
        'With everyone',
        `With ${client.guilds.cache.size} servers!`,
        `With ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} users!`,
        `With ${client.channels.cache.size} channels!`

    ];
    setInterval(function() {
  		let status = statuses[Math.floor(Math.random()*statuses.length)];
  		client.user.setActivity(status, {type: "STREAMING", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"});
  	}, 5000)

}
