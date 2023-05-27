// 获取模型
var modal = document.getElementById('id01');

// 鼠标点击模型外区域关闭登录框
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// confirm()方法来创建一个弹窗，询问用户是否要播放音乐。
function playAudio() {
    var audioPlayer = document.getElementById("audio-player");
   
    if (audioPlayer.paused) {
        var playMusic = confirm("   是否来点音乐？\n\n   ⸂⸂⸜(രᴗര )⸝⸃⸃");
        if(playMusic){
            if (audioPlayer.paused) {
                alert("\n| ᐕ)⁾⁾\n温馨提示：\n\n1.注意一下您系统音量哦.\n2.页面调转的时候音乐会关闭.\n");
                audioPlayer.play();
            } 
        }
    } 
    else{
    //if(audioPlayer.play){
         var pauseMusic = confirm("     (๑°⌓°๑)\n是否关闭音乐？\n");
         if (pauseMusic) {
            audioPlayer.pause();
         }
    }
  }