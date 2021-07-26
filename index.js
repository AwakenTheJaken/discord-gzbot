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
    const verbs = ['Ineptly','Incompetently','Weakly','Poorly','Frantically','Disinterestedly', 'Ineffectively', 'Incorrectly', 'Mechanically','Compassionately', 'Calmly', 'Gently', 'Nonchalantly', 'Mildly', 'Politely', 'Provocatively']
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)]
    const actions = ['juggles', 'pushes','pulls','tenderises','pinches','pokes','punches','rubs', 'strokes', 'massages', 'caresses', 'pats']
    const randomAction = actions[Math.floor(Math.random() * actions.length)]
    const bodyParts = ['spine','ribs','liver','hair','ear','calves','knee','temporal lobe','weenis','calcaneus','sacrum','iliac crest','second metatarsal','humerus','eyes', 'nose', 'funny bone','fingernails', 'femur', 'septum', 'spleen','pancreas', 'elbow', 'big toe']
    const randomBodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)]
    if(message.mentions.members.first()){
      var targetUser =  message.mentions.members.first().user
    }else{
      var targetUser = message.author
    }
    client.channels.cache.get(message.channel.id).send(`${randomVerb} ${randomAction} ${targetUser}'s ${randomBodyPart}`);

  }

  if (command === '8ball') {
    const predictions = ["It is certain", "Without a doubt","You may rely on it","Yes definitely","It is decidedly so","As I see it, yes","Most likely","Yes","Outlook good","Signs point to yes","Reply hazy try again","Better not tell you now","Ask again later","Cannot predict now","Concentrate and ask again","Don’t count on it","Outlook not so good","My sources say no","Very doubtful","My reply is no"]
    const randomPrediction = predictions[Math.floor(Math.random() * predictions.length)]
    const userQuestion = message.content.split('!8ball')
    console.log(userQuestion)
    console.log(userQuestion)
    if(userQuestion[1].length){
      client.channels.cache.get(message.channel.id).send(`${randomPrediction}`);
    }else{
      client.channels.cache.get(message.channel.id).send(`Please ask a question!`);
    }
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
    const crayonColors = ["Mahogany", "Fuzzy Wuzzy Brown", "Chestnut", "Red Orange", "Sunset Orange", "Bittersweet", "Melon", "Outrageous Orange", "Vivid Tangerine", "Burnt Sienna", "Brown", "Sepia", "Orange", "Burnt Orange", "Copper", "Mango Tango", "Atomic Tangerine", "Beaver", "Antique Brass", "Desert Sand", "Raw Sienna", "Tumbleweed", "Tan", "Peach", "Macaroni and Cheese", "Apricot", "Neon Carrot", "Almond", "Yellow Orange", "Gold", "Shadow", "Banana Mania", "Sunglow", "Goldenrod", "Dandelion", "Yellow", "Green Yellow", "Spring Green", "Olive Green", "Laser Lemon", "Unmellow Yellow", "Canary", "Yellow Green", "Inch Worm", "Asparagus", "Granny Smith Apple", "Electric Lime", "Screamin Green", "Fern", "Forest Green", "Sea Green", "Green", "Mountain Meadow", "Shamrock", "Jungle Green", "Caribbean Green", "Tropical Rain Forest", "Pine Green", "Robin Egg Blue", "Aquamarine", "Turquoise Blue", "Sky Blue", "Outer Space", "Blue Green", "Pacific Blue", "Cerulean", "Cornflower", "Midnight Blue", "Navy Blue", "Denim", "Blue", "Periwinkle", "Cadet Blue", "Indigo", "Wild Blue Yonder", "Manatee", "Blue Bell", "Blue Violet", "Purple Heart", "Royal Purple", "Purple Mountains’ Majesty", "Violet (Purple)", "Wisteria", "Vivid Violet", "Fuchsia", "Shocking Pink", "Pink Flamingo", "Plum", "Hot Magenta", "Purple Pizzazz", "Razzle Dazzle Rose", "Orchid", "Red Violet", "Eggplant", "Cerise", "Wild Strawberry", "Magenta", "Lavender", "Cotton Candy", "Violet Red", "Carnation Pink", "Razzmatazz", "Piggy Pink", "Jazzberry Jam", "Blush", "Tickle Me Pink", "Pink Sherbet", "Maroon", "Red", "Radical Red", "Mauvelous", "Wild Watermelon", "Scarlet", "Salmon", "Brick Red", "White", "Timberwolf", "Silver", "Gray", "Black"]
    const randomCrayonColor = crayonColors[Math.floor(Math.random() * crayonColors.length)]
    const crayons = ['a single', 'a handful of', 'one', 'a box of']
    var randomCrayon = crayons[Math.floor(Math.random() * crayons.length)]
    const crayonTypes = [' suspicious',' rocket-shaped',' long',' short', ' jumbo sized',' borrowed',' unwrapped',' warm',' freshly sharpened',' rehypothecated',' broken',' chewed', ' crushed', ' melted', '']
    const randomCrayonType = crayonTypes[Math.floor(Math.random() * crayonTypes.length)]
    switch (randomCrayon) {
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
    randomCrayon = randomCrayon + randomCrayonType
    if(message.mentions.members.first()){
      var targetUser =  message.mentions.members.first().user
    }else{
      var targetUser = message.channel.guild.members.cache.filter(member => member.presence.status !== 'offline' && member.user.id !== message.member.user.id && member.roles.cache.some(role => role.name !== 'botsquad' || role.name !== 'Botsquad') || member.user.username != 'GZBOT').random()
      console.log( message.channel.guild.members.cache.filter(member => member.presence.status !== 'offline' && member.user.id !== message.member.user.id && member.roles.cache.some(role => role.name !== 'botsquad' || role.name !== 'Botsquad') || member.user.username != 'GZBOT'))
    }
    client.channels.cache.get(message.channel.id).send(`Passes ${targetUser} ${randomCrayon} ${randomCrayonColor.toLowerCase()} ${crayon}.`);

  }

  
});
client.login(process.env.TOKEN)
