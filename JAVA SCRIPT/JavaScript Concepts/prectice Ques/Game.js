let favMovie = "avatar";

let guess = prompt("Guess My Fevorite Movie:");

// while ((guess !=favMovie)&&(guess!='quit')) {
//     guess = prompt("wrong guess. Please try Again");

// }

while((guess != favMovie)) {
if (guess == "quit")
    console.log("You quit");
    break;
}
    
if(guess == favMovie) {
    console.log("congrats!!");
    }
    // else {
//     console.log("You quit");
// }