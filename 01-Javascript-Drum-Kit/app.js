function playSound(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key =document.querySelector(`div[data-key="${e.keyCode}"]`);
  if(!audio)
  return ;
  key.classList.add('playing');
  if(e.keyCode === 32)
  {
    //console.log("ya");
    if(!audio.paused)
    audio.pause();
    else {

      audio.currentTime = 0;
      audio.play();
    }
    return;
  }
  audio.currentTime = 0;
  audio.play();
}

function removeTransition(e){
  if( e.propertyName !== 'transform' ) return ;
  e.target.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
