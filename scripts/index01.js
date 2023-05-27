/**导航栏跟随页面滚动 */
// var nav = document.querySelector('nav');
// var content = document.querySelector('#content');
// var navHeight = nav.offsetHeight;
// var contentTop = content.offsetTop;

// window.addEventListener('scroll', function() {
//   if (window.pageYOffset >= contentTop - navHeight) {
//     nav.classList.add('fixed');
//   } else {
//     nav.classList.remove('fixed');
//   }
// });

// 侧边导航栏
function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
  document.getElementById("导航").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.7)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("导航").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}
//确定退出弹窗
function confirmLeave() {
  var confirmLeave = confirm("确定要退出吗？\n\n不再看看吗？真的不再看看吗？(っ╥╯﹏╰╥c)");
  if (confirmLeave) {
    var con = confirm("\n真的不再看看吗？(っ╥╯﹏╰╥c)\n\n(让我再挽留一下下)");
    if(con){window.location.href = ".//index.html";} // 修改跳转的链接
    else{ window.location.href = "#";}
  }
  else{
    window.location.href = "#";
  }
}
// const Video_web01 = document.getElementById("Video_web01");
// const audioPlayer = document.getElementById("audio-player");



// Video_web01.addEventListener('volumechange', () => {
//   if (audioPlayer.volume>0) {
//     // 当指定的视频不处于静音状态时
//     audioPlayer.pause();
//   } 
// });
//  function video_01_muted(){
//    var Video_web01 = document.getElementById("背景视频");
//    if(Video_web01.volume>0){
//      var audioPlayer = document.getElementById("audio-player");
//      audioPlayer.pause();
//   }
 
 //}

 function video_01_muted_try(){
   var Video_web01 = document.getElementById("Video_web01");
   var audioPlayer = document.getElementById("audio-player");
   if(Video_web01.muted){
   }
  else if(Video_web01.volume>0 && audioPlayer.volume>0 ){
    //开mp4时，实现关闭mp3音乐
    if(!audioPlayer.paused ){
      audioPlayer.pause();
        alert("已将其他音频静音");

    }
 }
}

// confirm()方法来创建一个弹窗，询问用户是否要播放音乐。
function playAudio() {
  var audioPlayer = document.getElementById("audio-player");
 
  if (audioPlayer.paused||audioPlayer.volume===0||audioPlayer.muted==='true') {
      var playMusic = confirm("   是否来点音乐？\n\n   ⸂⸂⸜(രᴗര )⸝⸃⸃\n\n");
      if(playMusic){
        
        alert("| ᐕ)⁾⁾\n\n温馨提示:\n\n1.注意一下您系统音量哦.\n2.页面调转的时候音乐会关闭.\n3.如果有其他背景音乐，则该音乐会被调成静音.");
        audioPlayer.muted=false;
        audioPlayer.play();       
            var Video = document.getElementById("Video_web01");
            if ( Video.volume > 0) {              
              Video.muted=true;            
            }
      }
  } 
  else{
       var pauseMusic = confirm("     (๑°⌓°๑)\n是否关闭音乐？\n");
       if (pauseMusic) {
          audioPlayer.pause();
       }
  }
}
////
function click_新海诚(){
	alert("\n     新海诚,原名新津诚,1973年2月9日出生于日本长野县南佐久郡小海町,日本动画导演、编剧、漫画作家，毕业于日本长野县野泽北高等学校、日本中央大学文学部日本文学系。\n\n   1997年,执导了黑白短片《遥远世界》,该片获得了eAT金沢 98にて特别赏。2000年,执导了黑白动画短片《她和她的猫》,该片获得了第12届DoGA CG动画大赛最优秀奖。2002年,执导的动画电影《星之声》。2004年11月20日,执导的个人首部长篇电影《云之彼端,约定的地方》上映,该片获得了第59届日本每日映画大奖动画奖。2007年3月3日,编导的爱情动画电影《秒速5厘米》上映,该片获得了亚洲太平洋电影节最佳动画电影奖。\n\n    2011年5月7日,执导的奇幻冒险动画电影《追逐繁星的孩子》上映。2013年5月31日,自编自导的爱情动画电影《言叶之庭》上映,该片获得了斯图加特国际动画电影节长篇部门最优秀奖。2016年,编导了动画电影《你的名字。》,凭借该片获得了第40届日本电影学院奖最佳编剧奖及第26届日本电影评论家大奖最佳导演奖。2018年,执导了动画长片《天气之子》。2019年11月,新海诚制作的动画电影《天气之子》获得第44届报知电影奖最佳动画影片奖。");
}
function click_铃芽(){
  alert("\n     岩户铃芽是日本九州的17岁女高中生，和姨妈环两个人一起生活在九州的一个安静的小镇上。经常会梦见在广阔的废墟中，年幼的自己在草原上徘徊。\n\n    在偶然的一天，铃芽在上学路上遇见为了寻找“门”而处于旅途的长发男青年，追随着青年的脚步，来到了山上的一片废墟之地，这里静静伫立着一扇古老的门，仿佛是坍塌中存留的遗迹。铃芽仿佛被什么不知名力量吸引了一般，推开了那扇门，从此开启了她的冒险之旅，人生轨迹也随之变化。");
}
function click_About(){
  alert("\n 制作小组：期末全都对\n\n 组员：林雅钦 彭瑞怡 杨慧莹 王林茜 汪洋 汪雨婷\n\n(✧∇✧)    (✧∇✧)     (✧∇✧)     (✧∇✧)     (✧∇✧)\n\n`来自计算机专业的六人女子小队，梦想是期末全都对？！！\n`虽然是平凡的人，但是有不平凡的心(doge)，努力成为堪当大任的社会主义新青年。");
}
function click_footer(){
  alert("\n\n点进来的同志：\n\nwhile(TRUE)  { 运气++; }        ❛‿˂̵✧\n\n期末考试，做的题目都对哦！！！");
}
function click_footer2(){
  alert("         ┗|｀O′|┛ 嗷~~\n\n         你的好运被我吸走了\n\n          n(*≧▽≦*)n         n(*≧▽≦*)n");
}
function click_footer12(){
  alert("一起来看看可爱的东西：\n\n✧*｡ (ˊᗜˋ*) ✧*｡      ✧*｡ (ˊᗜˋ*) ✧*｡\n\nｷｭｰｰ(⌯˃̶᷄ ⁻̫ ˂̶᷄⌯)ｰｰﾝ♡       ｷｭｰｰ(⌯˃̶᷄ ⁻̫ ˂̶᷄⌯)ｰｰﾝ♡\n\n~●～●～●biu~ චᆽච ⚆_⚆");
}
function click_footer02(){
  alert("\n点进来的同志：\n\nwhile(TRUE)  { 知识++; 脑子++;}  \n\n   ˗ˋˏ♡ˎˊ˗      ˗ˋˏ♡ˎˊ˗ ");
}