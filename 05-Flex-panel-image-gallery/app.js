const panels = document.querySelectorAll('.panel');

function toggle(){
    this.classList.toggle('open');
}

function toggleWords(e){
    
    if(e.propertyName.includes('flex'))
    {
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click', toggle));

panels.forEach(panel => panel.addEventListener('transitionend', toggleWords));