import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


let addButtons = document.getElementsByClassName("add-button");
let subButtons = document.getElementsByClassName("sub-button");


const skillCounters = new Array(addButtons.length).fill(1); //initalizes skillCounter to length of amount of addButtons array and fills with 1's
const reqCounters = new Array(addButtons.length).fill(1);  //initalizes reqCounter to length of amount of addButtons array and fills with 1's
Array.from(addButtons).forEach((addBtn, i) => {
  addBtn.addEventListener('click', function (e) {
    if (skillCounters[i] < 10) {
      skillCounters[i]++;
    }
      const skillPoint = e.target.closest('.counter-component').querySelector('.skill-point')
      skillPoint.innerHTML = skillCounters[i].toString();
      const reqPoint = e.target.closest('.counter-component').querySelector('.req-point')
      reqPoint.innerHTML = req_point_change(skillCounters[i], reqCounters[i]).toString();
    
  });
});

Array.from(subButtons).forEach((subBtn, i) => {
  subBtn.addEventListener('click', function (e) {
    if (skillCounters[i] > 1) {
      skillCounters[i]--;
    }
      const skillPoint = e.target.closest('.counter-component').querySelector('.skill-point')
      skillPoint.innerHTML = skillCounters[i].toString();
      const reqPoint = e.target.closest('.counter-component').querySelector('.req-point')
      reqPoint.innerHTML = req_point_change(skillCounters[i], reqCounters[i]).toString();
    
  });
});

function req_point_change(skillCounter, reqCounter) {
  // if button is clicked code each number by changing the req_counter
  if (skillCounter === 1 || skillCounter === 2) {
    return reqCounter = 1;
  } else if (skillCounter === 3) {
    return reqCounter = 2;
  } else if (skillCounter === 4 || skillCounter === 5) {
    return reqCounter = 4;
  } else if (skillCounter === 6 || skillCounter === 7 || skillCounter === 8) {
    return reqCounter = 8;
  } else if (skillCounter === 9) {
    return reqCounter = 10;
  } else if (skillCounter === 10) {
    return reqCounter = "\u00A0";
  }
}
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