const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('열어졌어요');
  console.log('열어짐');

});
 
client.on('message', message => {
  if (message.content === '관리자봇님'){
    message.channel.send('네');
  }
  if (message.content === '봇님'){
    message.channel.send('네');
  }
  if (message.content === '봇'){
    message.channel.send('네');
  }
  if (message.content === '@서버시간'){
    message.channel.send('몰라요하지만오후10시에는열어져요!');
  }
  if (message.content === '@시간'){
    message.channel.send('몰라요하지만오후10시에는열어져요!');
  }
  if (message.content === '관리자봇'){
    message.channel.send('네');
  }
  if (message.content === '@도움말'){
    message.channel.send('저의서버는반야생서버입니다친절하게해드릴게요(더이상은말해드릴수없어요)');
  }
  if (message.content === '출저'){
    message.channel.send('출저는wldh서버(마인크래프트)입니다');
	message.channel.send('재미있는 서버?! 는제코드를주었습니다재미있는 서버?! 도저의서비스를이용합니다');
  }
  if (message.content === '!유튜브 채널'){
    message.channel.send(' https://www.youtube.com/channel/UCMf0B39AJThcGpkft5O1gdw');
	
  }
  if (message.content === '!봇 정보'){
    message.channel.send('이봇은 node.js를 기반으로 제작한 디스코드 봇 입니다. 이 봇을 만든사람은 wldh서버(마인크래프트) 입니다');
	
  }
  if (message.content === '!영어'){
    message.channel.send('english 영어(휘핑 채널출저)');
	
  }
  if (message.content === '!도움말'){
    message.channel.send('설정을안했네요');
  }
  if (message.content === '!도움'){
    message.channel.send(' ^봇 정보=봇의정보표시 ^테스트=테스트 ^영어=영어를 표시함. ^샌즈=샌즈아시는구나 ^고마운사람=이 봇을 만들면서 고마운사람을 말합니다! ^유튜브채널=제작자의 유튜브채널. ^웹사이트=제작자의 웹사이트. ^봇 초대링크=봇초대링크(휘핑 채널출저)');
  }
  if (message.content === '!샌즈'){
    message.channel.send('샌즈아시는군아!(휘핑 채널출저)');
  }
  if (message.content === '!테스트'){
    message.channel.send('테스트!!!(휘핑 채널출저)');
  }
  if (message.content === '!고마운사람'){
    message.channel.send('재미있는 서버(디스코드) !휘핑의 채널님 감사합니다(첫봇사용자)');
  }
  if (message.content === '!공지사항'){
    message.channel.send('없어요 다중에다시해보세요!');
  }
  if (message.content === 'wldh봇가져가기'){
    message.channel.send('https://discord.com/api/oauth2/authorize?client_id=705762324648165416&permissions=8&scope=bot    (이용하는대신   https://www.youtube.com/channel/UCMf0B39AJThcGpkft5O1gdw     여기가서구독하세요)');
  }
  if (message.content === '!wldh봇가져가기'){
    message.channel.send('https://discord.com/api/oauth2/authorize?client_id=705762324648165416&permissions=8&scope=bot      (이용하는대신   https://www.youtube.com/channel/UCMf0B39AJThcGpkft5O1gdw    여기가서구독하세요)');
  }
  if (message.content === '!유튜브'){
    message.channel.send(' https://www.youtube.com/channel/UCMf0B39AJThcGpkft5O1gdw');
	
  }
  if (message.content === '!채널'){
    message.channel.send(' https://www.youtube.com/channel/UCMf0B39AJThcGpkft5O1gdw');
	
  }
  if (message.content === '!해야할것'){
    message.channel.send(' https://www.youtube.com/channel/UCMf0B39AJThcGpkft5O1gdw');
	
  }
  if (message.content === '!홍보'){
    message.channel.send(' https://www.youtube.com/channel/UCMf0B39AJThcGpkft5O1gdw   로들어가구독해보세요!');
	
  }
  if (message.content === 'wldh'){
    message.channel.send('명령어:!홍보,!해야할것,!채널,!유튜브,!wldh봇가져가기,!공지사항,!고마운사람(휘핑 채널출저) ,!샌즈 (더있어요!)');
	
  }
  if (message.content === '출처'){
    message.channel.send('출저는wldh서버(마인크래프트)입니다');
	message.channel.send('재미있는 서버?! 는제코드를주었습니다재미있는 서버?! 도저의서비스를이용합니다');
  }
  if (message.content === '!wldh봇'){
    message.channel.send('네?');
  }
});



client.login('process.env.TOKEN');
