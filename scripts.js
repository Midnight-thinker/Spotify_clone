console.log("Welcome to spotify");

var songIndex = 0;
var song=new Audio('songs/1.mp3');
var masterPlay=document.getElementById('masterPlay');
var myProgressBar=document.getElementById('myProgressBar');
var gif=document.getElementById('gif');
var masterSName = document.getElementById('masterSName');
var songItems = Array.from(document.getElementsByClassName('songItem'));

var arr=[
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible ", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE ", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src=arr[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = arr[i].songName; 
})

//handle the play pause button

masterPlay.addEventListener('click',function(){
    if(song.paused || song.currentTime<=0){
        song.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        song.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

//timestamp update
song.addEventListener('timeupdate',function(){
    progress=parseInt((song.currentTime/song.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change', ()=>{
    song.currentTime = myProgressBar.value * song.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        song.src = `songs/${songIndex+1}.mp3`;
        masterSName.innerText = arr[songIndex].songName;
        song.currentTime = 0;
        song.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    song.src = `songs/${songIndex+1}.mp3`;
    masterSName.innerText = arr[songIndex].songName;
    song.currentTime = 0;
    song.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    song.src = `songs/${songIndex+1}.mp3`;
    masterSName.innerText = arr[songIndex].songName;
    song.currentTime = 0;
    song.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})