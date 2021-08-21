require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.info(`Logged in as ${client.user.tag}!`);
    
    server = client.guilds.cache.get('856927153295982638');
    scorp_counter = 0;
    scorp_messages = ["There is no truth in flesh, only betrayal.\nThere is no strength in flesh, only weakness.\nThere is no constancy in flesh, only decay.\nThere is no certainty in flesh but death.", "Error 220009: unit will not fit thru 25\" hatch.", "I do not want to be human. I want to be myself. I have wonders in my house of sugar. I have parts of myself I do not yet understand. I am not a Good Robot.", "You will turn yourself inside out. Your sadness will know no bounds. Ladybugs will flee you, wolves run wild in you. You will hear the wind chimes like shattering. The sun will drip ichor. Whatever peace you find will be taken from you. Nothing will be the same. Nothing has ever been the same.", "Open error during physical insertion phase", "Look at you: a pathetic creature of meat and bone. How can you challenge a perfect, immortal machine?", "Sometimes it is easy to forget which things in the world can feel pain and which cannot.", "Amputating the head is an option.", "We have nothing to speak about. There never was. Words are an unnecessary trouble. Expression is time wasting away. Any communication is just a yelp in the darkness. I am speaking now but I am saying nothing. I am just making noises, and, as it happens, they are organized in words and you should not draw meaning from this."]
    assimilationChannelID = '877625671764025394'
    mod_role = server.roles.cache.find(role => role.name === "🔨 Mod");
    verified_role = server.roles.cache.find(role => role.name === "Verified");
    access_denied_role = server.roles.cache.find(role => role.name === "ACCESS DENIED");
    access_granted_role = server.roles.cache.find(role => role.name === "ACCESS GRANTED");
    scorp_id = '264158198557048832'
  });
let scorp_timeout
const prefix = `!`;

client.on("message", function (message) {
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(" ");
    const command = args.shift().toLowerCase();
    if (message.author.bot) return;

    if(!message.member.roles.cache.find(r => r.name === "ACCESS GRANTED") && command !== 'assimilateme' && message.channel.id === assimilationChannelID && message.author.id === scorp_id){
      handleScorpMessage(message, message.channel)   
    }

    if(!message.member.roles.cache.find(r => r.name === "ACCESS GRANTED") && command === 'assimilateme' && message.channel.id === assimilationChannelID && message.author.id === scorp_id){
      message.member.roles.add(mod_role).catch(err => console.error(err));
      message.member.roles.add(verified_role).catch(err => console.error(err));
      message.member.roles.add(access_granted_role).catch(err => console.error(err));
      message.member.roles.remove(access_denied_role).catch(err => console.error(err));
      clearTimeout(scorp_timeout)
    }


    if (!message.content.startsWith(prefix)) return;





  
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

function handleScorpMessage(message, channel){
  if(message){
    clearInterval(scorp_timeout)
    if(scorp_counter <= 8){

    message.channel.send(scorp_messages[scorp_counter], {
      tts: false
      })
      scorp_counter++;
    }else{
      scorpAssimilate(message.channel)
    }
  }
  resumeScorpAssimilation(channel)

}

function scorpAssimilate(channel){
  channel.send( 'transcend your puny flesh and type !assimilateme', {
    tts: true
    })
}

function resumeScorpAssimilation(channel){
  scorp_timeout = setInterval(function(){
    if(scorp_counter <= 8){
    channel.send(scorp_messages[scorp_counter], {
      tts: false
      })
      scorp_counter++;
    }else{
      scorpAssimilate(channel)
    }
  }, 20000)
}




client.on('presenceUpdate', (oldPresence, newPresence) => {
  let member = newPresence.member

  if (member.id === scorp_id && !member.roles.cache.find(r => r.name === "ACCESS GRANTED")) {
    if (oldPresence.status !== newPresence.status) {
        let channel = member.guild.channels.cache.get(assimilationChannelID);
        if (newPresence.status === "online") {
          member.roles.remove(mod_role).catch(err => console.error(err));
          member.roles.remove(verified_role).catch(err => console.error(err));
          member.roles.add(access_denied_role).catch(err => console.error(err));
          setTimeout(function(){
            channel.send("The Gazebo is dead, insect. Are you afraid? What is it you fear? The end of your trivial existence? When the history of my glory is written, your species shall only be a footnote to my magnificence.", {
              tts: true
            })
          }, 200)
          handleScorpMessage(null, channel)   
        }
    }
  }
});
client.login(process.env.TOKEN)
