module.exports = async (msg) => {
  await msg.channel.send(`Hello ${msg.author}!`)
  console.log('Hello msg sent')
}
