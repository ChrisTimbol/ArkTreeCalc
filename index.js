const reqPoint = document.getElementsByClassName("req-point");
const skillPoint = document.getElementsByClassName("skill-point");
const addButton = document.getElementsByClassName("add-button");
const subButton = document.getElementsByClassName("sub-button");
var skillCounter = 1;
var reqCounter = 1;
function req_point_change(skillPoint) {
    // if button is clicked code each number by changing the req_counter
    if (skillCounter == 1 || skillCounter == 2) {
        reqCounter = 1;
    } else if (skillCounter == 3) {
        reqCounter = 2;
    } else if (skillCounter == 4 || skillCounter == 5) {
        reqCounter = 4;
    } else if (skillCounter == 6 || skillCounter == 7 || skillCounter == 8) {
        reqCounter = 8;
    } else if (skillCounter == 9) {
        reqCounter = 10;
    } else if (skillCounter == 10) {
        reqCounter = "\u00A0";
    } else {
        return;
    }
}

addButton[0].addEventListener("click", function () {
    if (parseInt(skillCounter) < 10) {
        skillCounter++;
        req_point_change(skillCounter);
        reqPoint[0].innerHTML = reqCounter.toString();
        skillPoint[0].innerHTML = skillCounter.toString();
    }
});

subButton[0].addEventListener("click", function () {
    if (parseInt(skillCounter) > 1) {
        skillCounter--;
        req_point_change(skillCounter);
        reqPoint[0].innerHTML = reqCounter.toString();
        skillPoint[0].innerHTML = skillCounter.toString();
    }
});


//req count order 1 1 2 4 4 8 8 8 12 blank
//css grid is for layout, flexbox is for alignment
//          <p class="combo-name">Point </p>

// add skillpoint navbar /340
// bottom bar  with 3 buttons
// turn html to react components
// study react tutorial real quick
//fix row  so they all work individually.. w/ react.
//get test image for triport tree
// photoshop the codex for each tree and put a line break under it. or just take whole line thing.
// get images for each row and store in array folder
// get images for triports
//https://lostark.fandom.com/wiki/Lost_Ark_Wiki
//https://lostark.fandom.com/wiki/Dual_Buckshot
//https://lostark.wiki.fextralife.com/Triple+Fist