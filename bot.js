const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
client.on('message', message => {
   let embed = new Discord.RichEmbed()

    let args = message.content.split(' ').slice(1).join(' ');
     if(!message.channel.guild) return;
if(message.content.split(' ')[0] == 'L') {
         message.react("✔️")
          let embed = new Discord.RichEmbed()
    .setColor("#FF00FF")
    .setThumbnail(message.author.avatarURL)   
                                      .addField('تم الارسال بواسطة :', "<@" + message.author.id + ">")
                 message.channel.sendEmbed(embed);
        message.guild.members.forEach(m => {
            var bc = new Discord.RichEmbed()
.addField('**● Sender  :**', `*** → ${message.author.username}#${message.author.discriminator}***`)
            .addField('***● Server  :***', `*** → ${message.guild.name}***`)               
    .setColor('#ff0000')
                 .addField('ّ', args)
            m.send(``,{embed: bc});
        });
    }
})




client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? 🤔   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** No Invite Links 😠 !**`)
    }
}
});





client.on("ready", () => {
  function lol() {
    client.guilds.get('468780726352085002').roles.find("name", "<===master===>").setColor("RANDOM");
  };
  setInterval(lol, 10000);
});


client.on("message", message => {
    var prefix = "L";
    var args = message.content.split(' ').slice(1);
    var msg = message.content.toLowerCase();
    if( !message.guild ) return;
    if( !msg.startsWith( prefix + 'role' ) ) return;
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');
    if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
        if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
        if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
        var role = msg.split(' ').slice(2).join(" ").toLowerCase();
        var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
        if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
            message.mentions.members.first().removeRole( role1 );
            return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
        }
        if( args[0].toLowerCase() == "all" ){
            message.guild.members.forEach(m=>m.removeRole( role1 ))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
        } else if( args[0].toLowerCase() == "bots" ){
            message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
        } else if( args[0].toLowerCase() == "humans" ){
            message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
        }  
    } else {
        if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
        if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
        var role = msg.split(' ').slice(2).join(" ").toLowerCase();
        var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
        if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
            message.mentions.members.first().addRole( role1 );
            return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
        }
        if( args[0].toLowerCase() == "all" ){
            message.guild.members.forEach(m=>m.addRole( role1 ))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
        } else if( args[0].toLowerCase() == "bots" ){
            message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
        } else if( args[0].toLowerCase() == "humans" ){
            message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
        }
    }
});

client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","<===member===>"));
    });


client.on("message", message => {
    var prefix = "L";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **لا يوجد لديك صلاحية لمسح الشات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم مسح الشات",
        color: 0x06DF00,
        description: "تم مسح الرسائل ",
        footer: {
          text: "©KBOOSHDev"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});

client.on("message", message => {
 if (message.content === "Lhelp") {
        message.react("😘")
           message.react("😵")
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
-🚀 سرعه اتصال ممتازه
-😎 سهل الاستخدام 
-⚠ صيانه كل يوم
-💵 مجاني بل كامل 
-📚 البوت عربي و سيتم اضافه اللغه النكليزية
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
💎『اوامر عامة』💎
                        
💎^^server 『معلومات عن السيرفر』                      
💎^^servers 『علشان تشوف البوت بكم سيرفر اون لاين 』  
💎^^bot 『لمعرف البوت بكم سيرفر』
💎^^date 『لمعرفه التاريخ』
💎^^ping 『لمعرفه سرعه البوت』
💎^^members 『معلومات عن الاعضاء』
💎^^embed 『خاصيه غرد لكن بغير طريقه』
💎^^say 『لي يكرر الكلام الذي تقوله』
💎^^animal  『كود لي اضهار صور  للحيوانات』
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
👑『اوامر ادارية』👑
👑^^rooms 『لمعرفه عدد رومات السيرفر』
👑^^ban 『لتعطي شخص باند』
👑^^kick 『لتعطي شخص كيك』
👑^^clear 『لمسح الشات برقم』
👑^^edit  『لتعديل رساله 』
👑^^ct  مـلاحظه: الاسم انت تختاره『لي انشاء روم كتابي』
👑^^cv  مـلاحظه: الاسم انت تختاره『لي انشاء روم صوتي』
👑^^delet  『كـود يحذف الـروم سواء صوتي او كتابي』
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
🎲『القرعة』🎲
🎲^^roll 1   『القرعة من 1 الى 25』
🎲^^roll 2   『القرعة من 1 الى 50』
🎲^^roll 3   『القرعة من 1 الى 75』
🎲^^roll 4   『القرعة من 1 الى 100』
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
🎮『العاب』🎮
🎮^^كت تويت
🎮^^مريم 
🎮^^خواطر 
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
🎴『اوامر الصور』🎴
🎴^^avatar 『لي عرض صورتك او صوره اي شخص』
🎴^^image 『لي عرض صوره السيرفر』
🎴قريبا
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
🎎『انواع الترحيب』🎎
🎎 ترحيب 1 / ترحيب 2 
🎎 ترحيب 3 / ترحيب 4
🎎 ترحيب 5 / ترحيب 6 
🎎 ترحيب 7 / ترحيب 8
🎎 ترحيب 9 / ترحيب 10
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
💎『الدعم الفني والمساعدة』💎
^^invite | القسم الاول لي اضافه البوت 
^^support| القسم الثاني  الدعم الفني و المساعدة
 
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
`)


message.author.sendEmbed(embed)

}
}); 



client.on('message', message => {
    if (message.content.startsWith("Lavatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

client.on('ready',  () => {
client.user.setStatus("dnd");
});

client.on('message', function(message) {
                  if(!message.channel.guild) return;
    if(message.content ===  'Lcolor 50') {
        if(message.member.hasPermission('MANAGE_ROLES')) {
            setInterval(function(){})
            message.channel.send('جاري عمل الالوان |✅')
        }else{
            message.channel.send('ما معاك البرمشن المطلوب  |❌')
            }
    }
});

client.on('message', message=>{
    if (message.content ===  'Lcolor 50'){
              if(!message.channel.guild) return;
            if (message.member.hasPermission('MANAGE_ROLES')){
                setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 1; x < 51; x++){
            message.guild.createRole({name:x,
            color: 'RANDOM'})
            }
            }
    }
});


client.on('message', function(message) {
                  if(!message.channel.guild) return;
    if(message.content ===  'Lcolor 100') {
        if(message.member.hasPermission('MANAGE_ROLES')) {
            setInterval(function(){})
            message.channel.send('جاري عمل الالوان |✅')
        }else{
            message.channel.send('ما معاك البرمشن المطلوب  |❌')
            }
    }
});

client.on('message', message=>{
    if (message.content ===  'Lcolor 100'){
              if(!message.channel.guild) return;
            if (message.member.hasPermission('MANAGE_ROLES')){
                setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 1; x < 101; x++){
            message.guild.createRole({name:x,
            color: 'RANDOM'})
            }
            }
    }
});


client.on('message', function(message) {
                  if(!message.channel.guild) return;
    if(message.content ===  'Lcolor 140') {
        if(message.member.hasPermission('MANAGE_ROLES')) {
            setInterval(function(){})
            message.channel.send('جاري عمل الالوان |✅')
        }else{
            message.channel.send('ما معاك البرمشن المطلوب  |❌')
            }
    }
});

client.on('message', message=>{
    if (message.content ===  'Lcolor 140'){
              if(!message.channel.guild) return;
            if (message.member.hasPermission('MANAGE_ROLES')){
                setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 1; x < 141; x++){
            message.guild.createRole({name:x,
            color: 'RANDOM'})
            }
            }
    }
});



  client.on('message', (message) => {
    if (message.content.startsWith('Lkick')) {
        var member= message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(member.displayName + ' تم طرد هذا الشخص من السيرفر');
        }).catch(() => {
            message.channel.send(":x:");
        });
    }
}); 



client.on('message', (message) => {
    if (message.content.startsWith('Lban ')) {
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('هذا الخاصية للدارة فقط');
        var member= message.mentions.members.first();
        member.ban().then((member) => {
         message.channel.send(member.displayName + 'تم طرد هذا الشخص من السيرفر');
        }).catch(() => {
            message.channel.send('Error :_:');
        });
    }
});

client.on('message', message => {
    if (message.content === "Lserver") {
        if (!message.channel.guild) return
        var verificationLevel = message.guild.verificationLevel;
        const verificationLevels = ['None','Low','Meduim','High','Extreme'];
        var Y1 = message.guild.createdAt.getFullYear() - 2000
        var M2 = message.guild.createdAt.getMonth()
        var D3 = message.guild.createdAt.getDate()
        const xNiTRoZ = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setColor('RANDOM')
         .setTimestamp()
         .setTitle(message.guild.name,message.guild.iconURL)
         .addField(':id: اي دي السيرفر',`${message.guild.id}`,true)
         .addField(':date: أنشئت في',D3 + '.' + M2 + '.' + Y1,true)             
         .addField(':crown: اونر السيرفر',`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)             
         .addField(':busts_in_silhouette: الاعضاء ' + ` ${message.guild.memberCount} `,'Online '+`[ ${message.guild.members.filter(m=>m.presence.status == 'online','idle','dnd').size} ]`+ ','+'Offline '+`[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]`,true)
         .addField(':speech_balloon: قنوات' +' '+message.guild.channels.size+' ',`Text [ ${message.guild.channels.filter(m => m.type === 'text').size} ]`+', '+`Voice [ ${message.guild.channels.filter(m => m.type === 'voice').size} ]`,true)
         .addField(':earth_asia: الدوله',message.guild.region)
         .addField(':ribbon: ايموجي السيرفر',`${message.guild.emojis.size}`,true)
         .addField(':construction: مستوى التحقق',`${verificationLevels[message.guild.verificationLevel]}`,true)
         .addField(':closed_lock_with_key: الرتب  '+message.guild.roles.size+' ','Type `.roles` To See The Server Roles!')
         message.channel.send({embed:xNiTRoZ});
     }
    });
    

client.on('message', message => {
     if (message.content === "Lbot") {
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**Servers:**" , client.guilds.size)
  .addField("**Users:**", client.users.size)
  .addField("**channels:**", client.channels.size)
  .setTimestamp()
message.channel.sendEmbed(embed);
    }
});




client.on('message', message => {
if (message.content === "Lhelp") {
message.reply("**Done | تــم**")
message.reply("**تم ارسال اوامر البوت في الخاص**")
message.react("📩")

}
});

client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
      if(!message.member.hasPermission('ADMINISTRATOR'))
        message.delete()
    return message.reply(`** يمنع نشر الروابط ! **`)
    }
});



    client.on('message', message => {
     if (message.content === "L
Lid") {
     let embed = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)  
  .setAuthor(message.author.username)
.setDescription("معلومات عن الحــساب")
               .setFooter(`Desert Bot.`, '')
  .setColor("#9B59B6")
  .addField("اســـم الحســاب", `${message.author.username}`)
  .addField('كود الحساب الخاص', message.author.discriminator)
  .addField("الرقـــم الشـــخصي", message.author.id)
  .addField('بــــوت', message.author.bot)
  .addField("تاريخ التسجيل", message.author.createdAt)
     
     
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
     if (message.content === "Lservers") {
     let embed = new Discord.RichEmbed()
  .setColor("#0000FF")
  .addField("**Server: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
if (message.content === 'Lhelp') {
         let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
      .addField("** 🎶 اوامر الميوزك**","** **")
      .addField("***play :musical_note:**","**لـ تشغيل المطلوب**")
      .addField("***stop  :musical_keyboard:**","**لـ ايقاف المطلوب**")
      .addField("***pause :musical_score:**","**لـ ايقاف المطوب مؤقت**")
      .addField("***resume :mute: **","**لـ تشغيل المطوب بعد التوقيف**")
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});

client.on('message', message => {
     if (message.content === ".servers") {
     let embed = new Discord.RichEmbed()
  .setColor("#0000FF")
  .addField("**Server: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
if (message.content === 'Lhelp') {
         let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
      .addField("**:radioactive: أوامر الأداره**","** **")
      .addField("***bc  :mega:**","**لـ البرودكاست**")
      .addField("***clear :octagonal_sign:**","**لـ مسح الشات**")
	  .addField("***createcolors :cyclone:**","** لـ اضافة 110 لون**")
      .addField("***kick  :outbox_tray:**","**لـ طرد الأعضاء**")
      .addField("***ban  :no_entry:**","**لـ حظر الأعضاء**")
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});

client.on('message', message => {
     if (message.content === ".servers") {
     let embed = new Discord.RichEmbed()
  .setColor("#0000FF")
  .addField("**Server: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
if (message.content === 'Lhelp') {
         let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
      .addField("**:globe_with_meridians: الأوامر العامه**","** **")
      .addField("***ping :stopwatch:**","**لـ سرعة إتصالك**")
      .addField("***id :chart_with_downwards_trend:**","**عرض سرعه اتصال البوت**")
      .addField("***avatar :camping:**","**لـ صور الشخص المختار**")
      .addField("***roll :1234:**","**لـ القرعه من 1 - 100**")
      .addField("***server :recycle:**","**لـ معلومات السيرفر**")
      .addField("***roles :medal: **","**مسح محادثات الشات**")
      .addField("***say :arrows_counterclockwise:**","**لـ يكرر الكلام اللى تقوله**")
      .addField("***time :alarm_clock:**","**لـ معرفة الساعة**")
      .addField("***date **","**لـ معرفة التاريخ**")
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});



client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', '♛『𝓦𝓔𝓛𝓒𝓞𝓜𝓔』♛');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('PURPLE')
        .setThumbnail(memberavatar)
        .addField('🎽 | name :  ',`${member}`)
        .addField('📢 | اطلق من دخل' , `Welcome to the server, ${member}`)
        .addField('🆔 | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter(`${member.guild.name}`)
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });
   
    client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`بس بعرف وين رحت؟؟؟ :raised_hand::skin-tone-1: :pensive:`)
        .setDescription(`مع السلامه تشرفنا بك :raised_hand::skin-tone-1: :pensive: `)
        .addField('👤   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('PURPLE')
        .setFooter(`====اهلا السيرفر نور بيك و الله====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
   
    var channel =member.guild.channels.find('name', 'welcome')
    if (!channel) return;
    channel.send({embed : embed});
 
    });


client.on('message', message => {
    var prefix = "L"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
 
  message.guild.member(user).kick();
 
  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("PURPLE")
  .setTimestamp()
  .addField("**اء تم اعطا طرد لي:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**بواسطة:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});


client.on('message', message => {
    var prefix = "L"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
 
  message.guild.member(user).ban(7, user);
 
  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("PURPLE")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});

client.on('message', message => {
	var prefix = "L";
    if(message.author.bot) return;
    var name1 = message.mentions.users.first();
    var reason = message.content.split(' ').slice(2).join(' ');
    if(message.content.startsWith(prefix + 'report')) {
        if(message.author.bot) return;
        if(!message.guild.channels.find('name', 'report')) return message.channel.send('**نرجو عمل روم باسم report**').then(msg => msg.delete(5000));
    if(!name1) return message.reply('**:innocent:منشن:innocent:**').then(msg => msg.delete(3000))
        message.delete();
    if(!reason) return message.reply('**:innocent:وش سوى؟:innocent:**').then(msg => msg.delete(3000))
        message.delete();
    var abod = new Discord.RichEmbed()
    .setTitle(`بلاغ من قبل: ${message.author.tag}`)
    .addField('**المجرم:**', `${name1}`, true)
    .addField('**بروم:**', `${message.channel.name}`, true)
    .addField('**البلاغ:**', `${reason}`, true)
    .setFooter(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
    .setTimestamp()
        message.guild.channels.find('name', 'report').sendEmbed(abod)
    message.reply('**:sunglasses:بنأخذ حقك:sunglasses:**').then(msg => msg.delete(3000));
    }
});

 
client.on("message", message => {
    var prefix = "L";
 if (message.content === "-help") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000")
      .setDescription(`
     
             Please Chose:
 
             
${prefix}help-public ⇏ اوامر عامة
 
${prefix}help-admin ⇏ اوامر ادارة السيرفر
             
${prefix}help-games ⇏ اوامر الالعاب
 
${prefix}help-music ⇏ اوامر الموسيقى
 
      `)
   message.channel.sendEmbed(embed)
   
   }
   });
 
 
client.on("message", message => {
    var prefix = "L";
 if (message.content === "-help-public") {
     message.channel.send('**تم ارسالك في الخاص** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed()
      .setColor("#000000")
      .setDescription(`
              اوامر عامة
❖-allbots ~ لعرض جميع البوتات الي بالسيرفر
❖-server ~يعرض لك معلومات عن السيرفر
❖-bot ~ يعرض لك كل معلومات البوت
❖-skin <name> ~ يعرض لك سكنك بماين كرافت
❖-count ~ يعرض لك عدد الاشخاص بالسيرفر بدون بوتات
❖-invites ~ يعرض لك  عدد انفايتاتك بالسيرفر
❖-invite-codes ~ يعرض لك روابط الانفايتات حكك في السيرفر
❖-cal ~ اله حاسبة
❖-trans <language> <any thing> ~ يترجم لك الي تبيه من اي لغة
❖-short ~ يختصر لك رابط كبير الى رابط صغير
❖-tag ~ يكتب لك الكلمة بشكل جميل وكبير
❖-google ~ للبحث في قوقل عن طريق الدسكورد
❖-perms ~ يعرض لك برمشناتك بالسيرفر
❖-za5 ~ يزخرف لك كلمة او جملة
❖-rooms ~ يعرض لك كل الرومات الي بالسيرفر مع عددها
❖-roles ~ يعرض لك كل الرانكات بالسيرفر بشكل جميل
❖-emojilist ~ يعرض لك كل الايموجيات الي بالسيرفر
❖-say ~ يكرر الكلام الي تكتبو
❖-image ~ صورة السيرفر
❖-members ~ يعرض لك عدد كل حالات الاشخاص وعدد البوتات وعدد الاشخاص
❖-id ~ معلومات عنك
❖-bans ~ عدد الاشخاص المبندة
❖-avatar ~ صورتك او صورة الي تمنشنو
❖-embed ~ يكرر الي تقولو بشكل حلو
❖-emoji <any things> ~ لتحويل اي كلمه تقولها الي ايموجي
❖-inv ~ لدعوة البوت الى سيرفرك
❖-support ~ سيرفر الدعم
❖-contact ~ ارسال اقتراح او لمراسلة صاحب البوت
`)
   message.author.sendEmbed(embed)
   
   }
   });
   
   client.on("message", message => {
    var prefix = "L";
 if (message.content === "-help-admin") {
      message.channel.send('**تم ارسالك في الخاص** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed()
      .setColor("#000000")
      .setDescription(`
          اوامر ادارة السيرفر
❖-move @user ~  لسحب الشخص الى روومك
❖-bc ~ رسالة جماعية الى كل اعضاء السيرفر
❖-role @user <rank> ~ لأعطاء رتبة لعضو معين
❖-roleremove @user <rank> ~ لازالة الرتبة من شخص معين
❖-role all <rank> ~ لأعطاء رتبة للجميع
❖-role humans <rank> ~ لأعطاء رتبة للاشخاص فقط
❖-role bots <rank> ~ لأعطاء رتبة لجميع البوتات
❖-hchannel ~ اخفاء الشات
❖-schannel ~ اضهار الشات المخفية
❖-clr <numbr> ~ مسح الشات بعدد
❖-clear ~ مسح الشات
❖-mute @user <reason> ~ اعطاء العضو ميوت لازم رتبة <Muted>
❖-unmute @user ~ لفك الميوت عن الشخص
❖-kick @user <reason> ~ طرد الشخص من السيرفر
❖-ban @user <reason> ~ حضر الشخص من السيرفر
❖-mutechannel ~ تقفيل الشات
❖-unmutechannel ~ فتح الشات
❖-dc ~ مسح كل الرومات
❖-dr ~ <مسح كل الرانكات <لازم تكون رانك البوت فوق كل الرانكات
❖-ct <name> ~ انشاء شات
❖-cv <name> ~ انشاء رووم فويس
❖-delet <name> ~ مسح الشات او الرووم فويس
❖-ccolors <number> ~ ينشا لك الوان مع كم الوان تبي
`)
   message.author.sendEmbed(embed)
   
   }
   });
 
   client.on("message", message => {
    var prefix = "L";
 if (message.content === "-help-games") {
      message.channel.send('**تم ارسالك في الخاص** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed()
      .setColor("#000000")
      .setDescription(`
          اوامر الالعاب
❖-rps ~ حجر ورقة مقص
❖-speed ~ اسرع كتابة
❖-quas ~ اسئلة عامة
❖-نكت ~ نكت
❖-لعبة فكك ~ فكك
❖-عواصم عشوائية ~ عواصم
❖-لعبة كت تويت ~ كت تويت
❖-roll <number> ~ قرعة
❖-لو خيروك بطريقة حلوة ~ لو خيروك
❖-لعبة مريم ~ مريم
❖-فوائد ونصائح  ~ هل تعلم
❖-يعطيك عقابات قاسية ~ عقاب   `)
   message.author.sendEmbed(embed)
   
   }
   });
             
client.on("message", message => {
    var prefix = "-";
 if (message.content === "-help-music") {
      message.channel.send('**تم ارسالك في الخاص** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed()
      .setColor("#000000")
      .setDescription(`
            اوامر الموسيقى
❖${prefix}play ~ لتشغيل أغنية برآبط أو بأسم
❖${prefix}skip ~ لتجآوز الأغنية الحآلية
❖${prefix}pause ~ إيقآف الأغنية مؤقتا
❖${prefix}resume ~ لموآصلة الإغنية بعد إيقآفهآ مؤقتا
❖${prefix}vol ~ لتغيير درجة الصوت 100 - 0
❖${prefix}stop ~ لإخرآج البوت من الروم
❖${prefix}np ~ لمعرفة الأغنية المشغلة حآليا
❖${prefix}queue ~ لمعرفة قآئمة التشغيل
 
 `)
   message.author.sendEmbed(embed)
   
   }
   });
client.login(process.env.BOT_TOKEN);  
