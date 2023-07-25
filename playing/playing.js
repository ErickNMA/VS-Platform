function playaudio()
{
    let tk1 = document.getElementById("track1");
    tk1.volume = 1.0
    tk1.play();
}

function pauseaudio()
{
    let tk1 = document.getElementById("track1");
    let tk2 = document.getElementById("track2");
    let tk3 = document.getElementById("track3");
    let tk4 = document.getElementById("track4");
    tk1.pause();
    tk2.pause();
    tk3.pause();
    tk4.pause();
}   