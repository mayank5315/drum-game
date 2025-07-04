for(var i=0;i<document.querySelectorAll("button").length;i++){


document.querySelectorAll("button")[i].addEventListener("click",function(){
var ok=this.innerHTML;
animation(ok);
clicked(ok);
});
}
document.addEventListener("keypress",function(event){
    var a=event.key;
    animation(a);
    clicked(a);
})
function clicked(ok){
    
    
    switch(ok){
        case "w":
            var audio=new Audio('./sounds/tom-1.mp3');
    audio.play();
    break;
    case "a":
        var audio=new Audio('./sounds/tom-2.mp3');
    audio.play();
    break;
    case "s":
        var audio=new Audio('./sounds/tom-3.mp3');
    audio.play();
    break;
    case "d":
        var audio=new Audio('./sounds/tom-4.mp3');
    audio.play();
    break;
    case "j":
        var audio=new Audio('./sounds/snare.mp3');
    audio.play();
    break;
    case "k":
        var audio=new Audio('./sounds/crash.mp3');
    audio.play();
    break;
    case "l":
        var audio=new Audio('./sounds/kick-bass.mp3');
    audio.play();
    break;
    default: console.log(ok);


    }
    

    

    
    
    
}
function animation(hi){
        var bi=document.querySelector("."+hi);
        bi.classList.add("pressed");

        setTimeout(function(){
            bi.classList.remove("pressed");
        },100);
    }
