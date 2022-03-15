//1. Change the span with the class `mess-with-me` to have a font size of 40px.
let spanner = document.querySelector(".mess-with-me");
spanner.style.fontSize = 40 + "px";
//2. Change the paragraph with the class `mess-with-me` to have a background color of green.
let paragraph = document.querySelector('p.mess-with-me')
paragraph.style.backgroundColor = "green";
//3. Hide the second dinosaur's image so that it's no longer visible, and so that the area below it moves up to take the space. If you're not sure of how to do this, look up the CSS rule for that!
let invisibledino = document.querySelector("#hide-me");
invisibledino.style.visibility = "hidden";
//4. Change the first dinosaur image so that the image's dimensions are 324 pixels wide.
let biggerdino = document.querySelector("#triceratops");
biggerdino.style.width = "324px";
// ## Event Listener Challenges

// 1. Add an event listener to the span with the class `mess-with-me` so that when it is clicked, the font color changes to orange.
let orangetext = document.querySelector(".mess-with-me");

orangetext.addEventListener("click", function(){
    orangetext.style.color = "orange";
})
//2. Add an event listener to the first dinosaur so that when they are clicked, they receive a red border.
biggerdino.addEventListener("click", function(){
    biggerdino.style.border =  "5px solid red";
})
//3. Add an event listener to the feathered dinosaur, so that when they are clicked, they become 50% transparent.
let feathereddino = document.querySelector("#feathers");
feathereddino.addEventListener("click", function(){
    feathereddino.style.opacity = "0.5";
} )
//4. Add an event listener to the "Switch Background Color" button so that when it is clicked, we switch the background color of the row of dinosaurs to a color of your choice.
let backgroundbutton = document.querySelector("#toggle");
let isItTrue = false;
backgroundbutton.addEventListener("click", function(){
    let dinorow = document.querySelector("#row");
   
        if(isItTrue === true){
            console.log("test");
            dinorow.style.backgroundColor = "";
            isItTrue = false;
}
         else if(isItTrue === false){
        
            dinorow.style.backgroundColor = "yellow";
            isItTrue = true;
}

})
//5. Add an event listener to the dinosaur with the id `biggify` that, when HOVERED, grows the image to 200 pixels wide. Note that this is a different event, and you'll likely need to do some research on what different string you'll need to pass. It's not gonna be `click`!
let biggifydino = document.querySelector("#biggify");

biggifydino.addEventListener("mouseenter", function(){
    
    biggifydino.style.width = "200px";
})

biggifydino.addEventListener("mouseleave", function(){

    biggifydino.style.width = "162px";
})