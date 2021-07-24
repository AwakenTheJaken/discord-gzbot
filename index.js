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
    const verbs = ['Ineptly','Incompetently','Weakly','Poorly','Frantically','Disinterestedly', 'Ineffectively', 'Incorrectly', 'Mechanically','Compassionately', 'Camly', 'Gently', 'Nonchalantly', 'Mildly', 'Politely', 'Provacativley']
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
});
client.login(process.env.TOKEN)