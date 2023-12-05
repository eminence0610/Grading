var song = "Audio/songA.mp3"
var songToPlay = new Audio(song)
var song = "Audio/songB.mp3"
var B = new Audio(song)
var song = "Audio/songC.mp3"
var C = new Audio(song)
var song = "Audio/songD.mp3"
var D = new Audio(song)
var song = "Audio/mumu.mp3"
var E = new Audio(song)
var song = "Audio/fucx.mp3"
var F = new Audio(song)

function check() {
    if(enter.value != ""){
        if(enter.value >= 0 && enter.value < 40) {
        console.log("F-Fail")
        result.innerHTML = "F-Fail🤪😡"
        F.play()
    }else if(enter.value < 0){
        console.log("Dey play")
        result.innerHTML = "Dey play😛😜"
        E.play()
    }else if(enter.value >= 40 && enter.value < 45){
        console.log("E")
        result.innerHTML = "E-Fair😛😜"
        E.play()
    }else if(enter.value >= 45 && enter.value < 50){
        console.log("D")
        result.innerHTML = "D-Pass😣🙄"
        D.play()
    }else if(enter.value >= 50 && enter.value < 60){
        console.log("C")
        result.innerHTML = "C-Good😅"
        C.play()
    }else if(enter.value >= 60 && enter.value < 70){
        console.log("B")
        result.innerHTML = "B-Very good🥰"
        B.play()
    }else if(enter.value >= 70 && enter.value <= 100){
        console.log("A")
        result.innerHTML = "A-Exellent❤"
        songToPlay.play()
    }else if(enter.value > 100){
        console.log("Enter your correct score")
        result.innerHTML = "Enter your correct score"
        E.play()
    }
 }
 if(enter.value == ""){
    console.log("INVALID")
    result.innerHTML = "INVALID"
 }
}