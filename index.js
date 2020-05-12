const discord = require("discord.js");
const token = "";
const prefix = "!";
var fortunes = [
  "Yes",
  "No",
  "Maybe",
  "Give GoDKillAhh UBHPs, that will awnser your question!"
]

var whatBag = [
    "Whitebag",
    "Pbag",
    "Mark lol"

]

var Classes = [
  "Ninja",
  "Wizard",
  "Necro",
  "Mystic",
  "Rogue",
  "Archer",
  "Priest",
  "Warrior",
  "KNIGHT PPE BTW EKS DEE",
  "Trickster",
  "Sorcerer",
  "Huntress",
  "Paladin"
]



var bot = new discord.Client();

bot.on("ready", function()
{
    console.log("Ready");
});

bot.on("guildMemberAdd", function(member)
{
   member.send("Welcome to our discord, Don't forget to verify!!!");
   member.addRole(member.guild.roles.find("name", "unverified"));
});





bot.on("message", function(message)
{
   if(message.author.equals(bot.user)) return;
   
   if(!message.content.startsWith(prefix)) return;
   
   var args = message.content.substring(prefix.length).split(" ");
   
   switch (args[0].toLowerCase())
   {
      case "ping":
          message.channel.send("pong");
          break;


      case "8ball":
      if(args[1]) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
      else message.channel.send("Can't understand that sawwy");
      break;

      case "class":
      message.channel.send(Classes[Math.floor(Math.random() * Classes.length)])
      break;

      case "help":
      var helpembed = new discord.RichEmbed()
        .addField("!8ball [Question]", "Predict the future!")
        .addField("!class", "The bot chooses your next class")
        .addField("!loot", "Tells you what lootbag you will get next")
        .addField("!Poll [Question]", "Bot reacts with voting for and against")
        .setColor("RED")
        .setFooter("Created by: GoDKillAhh aka MrMModder")
        .setThumbnail(message.author.avatarURL)
        
        message.channel.send(new discord.RichEmbed(helpembed));
      break;

      case "loot":
      message.channel.send("You're next loot bag wil be a : " + whatBag[Math.floor(Math.random() * whatBag.length)])
      break;  

      case "poll":
      message.react("👆🏼");
      message.react("👇🏼");
      break;

   
      default:
      message.channel.send("INVALID COMMAND EKS DEE");
      break;
   }
});

bot.login(token);
