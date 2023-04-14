const keys = document.querySelectorAll(".row");

// doh keys
keys[0].addEventListener("click", function(){
    let audio = new Audio("./sounds/do.mp3");
    audio.play();
})

// reh keys
keys[1].addEventListener("click", function(){
    let audio = new Audio("./sounds/re.mp3");
    audio.play();
})

// mi keys
keys[2].addEventListener("click", function(){
    let audio = new Audio("./sounds/mi.mp3");
    audio.play();
})

// fa keys
keys[3].addEventListener("click", function(){
    let audio = new Audio("./sounds/fa.mp3");
    audio.play();
})

// so 
keys[4].addEventListener("click", function(){
    let audio = new Audio("./sounds/sol.mp3");
    audio.play();
})

// la keys
keys[5].addEventListener("click", function(){
    let audio = new Audio("./sounds/la.mp3");
    audio.play();
})

// ti keys
keys[6].addEventListener("click", function(){
    let audio = new Audio("./sounds/si.mp3");
    audio.play();
})

// doh keys
keys[7].addEventListener("click", function(){
    let audio = new Audio("./sounds/do.mp3");
    audio.play();
})


document.addEventListener("keydown", function(e){
    switch(e.key){
        case "d":
            audio = new Audio("./sounds/do.mp3");
    audio.play();
            break;
            case "r":
                audio = new Audio("./sounds/re.mp3");
                audio.play();
            break;
            case "m":
                audio = new Audio("./sounds/mi.mp3");
                audio.play();
            break;
            case "f":
                audio = new Audio("./sounds/fa.mp3");
                audio.play();
            break;
            case "s":
                audio = new Audio("./sounds/sol.mp3");
                audio.play();
            break;
            case "l":
                audio = new Audio("./sounds/la.mp3");
                audio.play();
            break;
            case "t":
                audio = new Audio("./sounds/si.mp3");
                audio.play();
            break;

    }
})