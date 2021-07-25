require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.info(`Logged in as ${client.user.tag}!`);
});
const prefix = `!`;
client.on("message", function (message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(" ");
  const command = args.shift().toLowerCase();

  if (command === 'rubbot') {
    const verbs = ['Ineptly','Incompetently','Weakly','Poorly','Frantically','Disinterestedly', 'Ineffectively', 'Incorrectly', 'Mechanically','Compassionately', 'Calmly', 'Gently', 'Nonchalantly', 'Mildly', 'Politely', 'Provacativley']
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)]
    const actions = ['juggles', 'pushes','pulls','tenderises','pinches','pokes','punches','rubs', 'strokes', 'massages', 'caresses', 'pats']
    const randomAction = actions[Math.floor(Math.random() * actions.length)]
    const bodyParts = ['weenis','calcaneus','sacrum','iliac crest','second metatarsal','humerus','eyes', 'nose', 'funny bone','fingernails', 'femur', 'septum', 'spleen','pancreas', 'elbow', 'big toe']
    const randomBodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)]
    if(message.mentions.members.first()){
      var targetUser =  message.mentions.members.first().user
    }else{
      var targetUser = message.author
    }
    client.channels.cache.get(message.channel.id).send(`${randomVerb} ${randomAction} ${targetUser}'s ${randomBodyPart}`);

  }

  if (command === 'ama') {
    const userQuestion = message.content.split('!ama')
    const questionAskedConfirmation = `${message.member.displayName} asked: ${userQuestion[1]}`
    if (userQuestion[1].length) {
      message.reply(`Your question has been received! It will automatically be removed in 30 seconds!`).then(botReply => {
        message.delete({
          timeout: 30000
        })
        botReply.delete({
          timeout: 8000 /*time unitl delete in milliseconds*/
        });
      })
      client.channels.cache.find(channel => channel.name === '🎤-ama-questions').send(questionAskedConfirmation);
    }
  }

  if (command === 'crayon') {
    const crayonColors = ["red", "yellow", "blue", "brown", "orange", "green", "violet", "black", "carnation pink", "yellow orange", "blue green", "red violet", "red orange", "yellow green", "blue violet", "white", "violet red", "dandelion", "cerulean", "apricot", "scarlet", "green yellow", "indigo", "gray"]
    const randomCrayonColor = crayonColors[Math.floor(Math.random() * crayonColors.length)]
    const crayonTypes = ['a single chewed', 'a handful of', 'one', 'the', 'a box of']
    const randomcrayonType = crayonTypes[Math.floor(Math.random() * crayonTypes.length)]
    switch (randomcrayonType) {
      case 'a box of':
        var crayon = "crayons"
        break;
      case 'a handful of':
        var crayon = "crayons"
        break;   
      default:
        var crayon = "crayon"
        break;
    }

    if(message.mentions.members.first()){
      var targetUser =  message.mentions.members.first().user
    }else{
      var targetUser = message.channel.guild.members.cache.filter(member => member.presence.status == 'online' && member != message.member && member.roles.cache.some(role => role.name !== 'botsquad' || role.name !== 'Botsquad') || member.displayName != 'GZBOT').random()
    }
    client.channels.cache.get(message.channel.id).send(`Passes ${targetUser} ${randomcrayonType} ${randomCrayonColor} colored ${crayon}.`);

  }

  
});
client.login(process.env.TOKEN)
