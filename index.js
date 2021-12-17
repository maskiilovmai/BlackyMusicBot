const MusicBot = require("./src/structures/MusicClient");
const client = new MusicBot();

const keepAlive = require("./server")

client.connect()

module.exports = client; 

keepAlive()