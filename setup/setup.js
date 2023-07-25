var vbat = 0.7
var vbx = 0.7
var vvl = 0.7
var vgtr = 0.7
var vprc = 0.7
var vkey = 0.7
var vsnf = 0.7
var vvoz = 0.7
var vbck = 0.7

function startup()
{
    let tk1 = document.getElementById("track1");
    tk1.volume = 1.0
    tk1.play(); 
}

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

function attValues()
{
    vbat = document.getElementById("v1").value;
    vbx = document.getElementById("v2").value;
    vvl = document.getElementById("v3").value;
    vgtr = document.getElementById("v4").value;
    vprc = document.getElementById("v5").value;
    vkey = document.getElementById("v6").value;
    vsnf = document.getElementById("v7").value;
    vvoz = document.getElementById("v8").value;
    vbck = document.getElementById("v9").value;

    document.getElementById("track1").volume = vbat;
}