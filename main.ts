//Metronom (Gibt den rhytmus an)
music.setTempo(800);
let temp=500;
let play = false;
let Volume =0;
basic.forever(function() {

        if(input.buttonIsPressed(Button.B) && temp>0){
            temp-=100;
       
    } 
    if (input.buttonIsPressed(Button.A)) {
        temp += 100;
       
    }
            if(input.soundLevel()<50){
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `)
            }
    if (input.soundLevel() > 50 && input.soundLevel()<100) {
        basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . . # . .
        `)
    
    }
    if (input.soundLevel() > 100 && input.soundLevel() < 150) {
        basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        `)
    } if (input.soundLevel() > 150 && input.soundLevel() < 200) {
        basic.showLeds(`
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    }
    if (input.soundLevel() > 200 && input.soundLevel() < 255) {
        basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    }
    if(play){
       
    music.playTone(Note.C3, music.beat(100))
   
    basic.pause(temp);
    }
    
})

input.onButtonEvent(Button.AB, input.buttonEventClick(), function() {
    if(!play){
        play =true;
    }
    else{
        play = false;
    }
})