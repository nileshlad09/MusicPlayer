let songIndex=0;
let audioElement=new Audio('SONGS/trending/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let songItemplay=document.getElementsByClassName('songItemplay')
let progressbar=document.getElementById('progressbar');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');
let gif = document.getElementById('gif');
const TotalDuration=document.getElementById('TotalDuration');
let currentT=document.getElementById('currentT')
let songs=[
    
    {songName:"BANSURI", filePath:"SONGS/trending/1.mp3"},
    {songName:"RATA LAMBIYAN", filePath:"SONGS/trending/2.mp3"},
    {songName:"AAJ SE TERI", filePath:"SONGS/trending/3.mp3"},
    {songName:"NADIYAON PAAR", filePath:"SONGS/trending/4.mp3"},
    {songName:"AILA RE AILA", filePath:"SONGS/trending/5.mp3"},
    {songName:"KHOYA PAYA", filePath:"SONGS/trending/6.mp3"}, 
]



masterPlay.addEventListener('click',()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
      audioElement.play();
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
      gif.style.opacity = 1;    
  }
  else{
    audioElement.pause();
    masterPlay.classList.add('fa-play-circle');
    masterPlay.classList.remove('fa-pause-circle');
    gif.style.opacity = 0;

  }
})


audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressbar.value=progress;  
    const TotalDuration=document.getElementById('TotalDuration');
    let currentT=document.getElementById('currentT')
    
    let min_current=Math.floor(audioElement.currentTime/60);
    let sec_current=Math.floor(audioElement.currentTime % 60);

    let min_duration=Math.floor(audioElement.duration/60);
    let sec_duration=Math.floor(audioElement.duration % 60);
    
    if(sec_current<10)
    {
      sec_current=`0${sec_current}`;   
    }


    currentT.innerHTML=`0${min_current}:${sec_current}`
    TotalDuration.innerHTML=`0${min_duration}:${sec_duration}`
    
    if (audioElement.currentTime == audioElement.duration) {
        if (songIndex >= 5) {
          songIndex = 0;
        } else {
          songIndex += 1;
          makeAllPlays();
        }
        audioElement.src = `/SONGS/trending/${songIndex + 1}.mp3`;
        audioElement.play();
        masterSongName.innerText = songs[songIndex].songName;
      }
})
progressbar.addEventListener('change',()=>{
    audioElement.currentTime =progressbar.value*audioElement.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    })

}
Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
       songIndex =parseInt(e.target.id);
       makeAllPlays();
       masterSongName.innerText = songs[songIndex].songName;
    audioElement.src=`SONGS/trending/${songIndex+1}.mp3`;   
    audioElement.currentTime=0;
    gif.style.opacity = 1;
    audioElement.play();    
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');   
    })
})

 const makeAllPlays_1=()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{

    })

}
 document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=5){
        songIndex = 0
    }
    else{
        songIndex += 1;
        makeAllPlays();    
    }
    audioElement.src = `SONGS/trending/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    makeAllPlays();
    gif.style.opacity = 1;
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
        makeAllPlays();
    }
    audioElement.src = `SONGS/trending/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    makeAllPlays();
    gif.style.opacity = 1;
})
