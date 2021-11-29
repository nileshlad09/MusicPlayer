console.log("hi")
const searchSong = () =>{

    let filter=document.getElementById('myInput').value.toUpperCase();
    let ul=document.getElementById('myUL');
    let li=ul.getElementsByTagName('li');

    for(var i=0;i<li.length;i++){
        let a = li[i].getElementsByTagName('a')[0];
        let textValue = a.textContent || a.innerHTML;
        if(textValue.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = '';
        }
        else{
            li[i].style.display = 'none';
        }
    }

}


let audioElement = new Audio(``);
audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progressbar.value = progress;

    let min_current = Math.floor(audioElement.currentTime / 60);
    let sec_current = Math.floor(audioElement.currentTime % 60);

    let min_duration = Math.floor(audioElement.duration / 60);
    let sec_duration = Math.floor(audioElement.duration % 60);

    if (sec_current < 10) {
        sec_current = `0${sec_current}`;
    }
    if (sec_duration < 10) {
        sec_duration = `0${sec_duration}`;
    }
    currentT.innerHTML = `0${min_current}:${sec_current}`
    TotalDuration.innerHTML = `0${min_duration}:${sec_duration}`

})

const repeatBtn = document.querySelector("#repeat-plist");
repeatBtn.addEventListener("click", ()=>{
  let getText = repeatBtn.innerText; 
  switch(getText){
    case "repeat":
      repeatBtn.innerText = "repeat_one";
      break;
    case "repeat_one":
      repeatBtn.innerText = "shuffle";
      break;
    case "shuffle":
      repeatBtn.innerText = "repeat";
      break;
  }
});

audioElement.addEventListener("ended", ()=>{
  let getText = repeatBtn.innerText; 
  switch(getText){
    case "repeat":
      nextSong(); 
      break;
    case "repeat_one":
      audioElement.currentTime = 0; 
      audioElement.play();
      break;
    case "shuffle":
        random();
      break;
  }
});
