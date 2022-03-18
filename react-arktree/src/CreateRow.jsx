import SkillRow from './SkillRow.jsx';
import React from 'react';
import  { artilleristSkillNameText, bardSkillNameText, berserkerSkillNameText,
  deadeyeSkillNameText, deathbladeSkillNameText, gunlancerSkillNameText, gunslingerSkillNameText,
  paladinSkillNameText, scrapperSkillNameText, shadowhunterSkillNameText, sharpshooterSkillNameText,
  sorceressSkillNameText, soulfistSkillNameText, strikerSkillNameText, wardancerSkillNameText} from './skillName.js'; 
// Imports images from file directory
function importImages(r) {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  

// Creates rows based on amount of images
function CreateRow(characterRole, setSkillClicked, reset, skillClicked, overallCount, setOverallCount) {
    var skillTypeText; 

    // create and set SkillRow data 
    if (characterRole === "Artillerist") {   
      const artilleristImages = importImages(require.context('../src/images/Artillerist', false, /\.(png)$/));
      return Object.keys(artilleristImages).map((image, index) => {
        if (index === 7 || index === 14) {
          skillTypeText = "Combo"
        } else {
          skillTypeText = "Normal"
        }
        // pass setState/setSkillClicked as prop because it is generated dynamically
        return <SkillRow  overallCount = {overallCount} setOverallCount={setOverallCount} skillClicked ={skillClicked} reset={reset} characterRole={characterRole} setSkillClicked={setSkillClicked} key={Element+[index]} skillImage={artilleristImages[image]} skillType={skillTypeText} skillName={artilleristSkillNameText[index]} />
      })
  
    } else if (characterRole === "Bard") {
      const bardImages = importImages(require.context('../src/images/Bard', false, /\.(png)$/));
      return Object.keys(bardImages).map((image, index) => {
        if (index === 7 || index === 9) {
          skillTypeText = "Charge";
        } else if (index === 16) {
          skillTypeText = "Combo"
        } else {
          skillTypeText = "Normal"
        }
        return <SkillRow  overallCount = {overallCount} setOverallCount={setOverallCount} reset={reset} characterRole={characterRole} setSkillClicked={setSkillClicked} key={Element+[index]}  skillImage={bardImages[image]} skillType={skillTypeText} skillName={bardSkillNameText[index]} />
      })
  
    } else if (characterRole === "Berserker") {
      const berserkerImages = importImages(require.context('../src/images/Berserker', false, /\.(png)$/));
      return Object.keys(berserkerImages).map((image, index) => {
        if (index === 4) {
          skillTypeText = "Combo"
        } else if (index === 5) {
          skillTypeText = "Charge"
        } else if (index === 6) {
          skillTypeText = "Holding"
        } else {
          skillTypeText = "Normal"
        }
        return <SkillRow overallCount = {overallCount} setOverallCount={setOverallCount} reset={reset} characterRole={characterRole} setSkillClicked={setSkillClicked} key={Element+[index]}  skillImage={berserkerImages[image]} skillType={skillTypeText} skillName={berserkerSkillNameText[index]} />
      })
  
    } else if (characterRole === "Deadeye") {
      const deadeyeImages = importImages(require.context('../src/images/Deadeye', false, /\.(png)$/));
      return Object.keys(deadeyeImages).map((image, index) => {
        if (index === 0 || index === 1 || index === 14) {
          skillTypeText = "Chain"
        } else if (index === 4 || index === 19) {
          skillTypeText = "New Type: 12"
        } else if (index === 5 || index === 6 || index === 8 || index === 20) {
          skillTypeText = "Combo"
        } else {
          skillTypeText = "Normal"
        }
        return <SkillRow overallCount = {overallCount} setOverallCount={setOverallCount} reset={reset} characterRole={characterRole} setSkillClicked={setSkillClicked} key={Element+[index]}  skillImage={deadeyeImages[image]} skillType={skillTypeText} skillName={deadeyeSkillNameText[index]} />
      })
  
    } else if (characterRole === "Deathblade") {
      const deathbladeImages = importImages(require.context('../src/images/Deathblade', false, /\.(png)$/));
      return Object.keys(deathbladeImages).map((image, index) => {
        if (index === 5) {
          skillTypeText = "NEW TYPE: 12"
        } else if (index === 6) {
          skillTypeText = "Combo"
        } else if (index === 7 || index === 14 || index === 16) {
          skillTypeText = "Holding"
        } else if (index === 8) {
          skillTypeText = "Chain"
        } else {
          skillTypeText = "Normal"
        }
        return <SkillRow overallCount = {overallCount} setOverallCount={setOverallCount} reset={reset} characterRole={characterRole} setSkillClicked={setSkillClicked} key={Element+[index]}  skillImage={deathbladeImages[image]} skillType={skillTypeText} skillName={deathbladeSkillNameText[index]} />
      })
  
    } else if (characterRole === "Gunlancer") {
      const gunlancerImages = importImages(require.context('../src/images/Gunlancer', false, /\.(png)$/));
      return Object.keys(gunlancerImages).map((image, index) => {
        if (index === 2 || index === 15) {
          skillTypeText = "Combo"
        } else if (index === 5 || index === 11) {
          skillTypeText = "Chain"
        } else if (index === 16) {
          skillTypeText = "Holding"
        } else {
          skillTypeText = "Normal"
        }
        return <SkillRow overallCount = {overallCount} setOverallCount={setOverallCount} reset={reset} characterRole={characterRole} setSkillClicked={setSkillClicked} key={Element+[index]} skillImage={gunlancerImages[image]} skillType={skillTypeText} skillName={gunlancerSkillNameText[index]} />
      })
  
    } else if (characterRole === "Gunslinger") {
      const gunslingerImages = importImages(require.context('../src/images/Gunslinger', false, /\.(png)$/));
      return Object.keys(gunslingerImages).map((image, index) => {
        if (index === 0 || index === 1 || index === 4 || index === 14 || index === 19) {
          skillTypeText = "Chain"
        } else if (index === 5 || index === 6 || index === 13 || index === 20) {
          skillTypeText = "Combo"
        } else {
          skillTypeText = "Normal"
        }
        return <SkillRow overallCount = {overallCount} setOverallCount={setOverallCount} reset={reset} characterRole={characterRole} setSkillClicked={setSkillClicked} key={Element+[index]}  skillImage={gunslingerImages[image]} skillType={skillTypeText} skillName={gunslingerSkillNameText[index]} />
      })
  
    } else if (characterRole === "Paladin") {
  
      const paladinImages = importImages(require.context('../src/images/Paladin', false, /\.(png)$/));
      return Object.keys(paladinImages).map((image, index) => {
        if (index === 6 || index === 10) {
          skillTypeText = "Combo"
        } else if (index === 7) {
          skillTypeText = "Charge"
        } else if (index === 13) {
          skillTypeText = "Chain"
        } else {
          skillTypeText = "Normal"
        }
        return <SkillRow overallCount = {overallCount} setOverallCount={setOverallCount} reset={reset} characterRole={characterRole} setSkillClicked={setSkillClicked} key={Element+[index]}  skillImage={paladinImages[image]} skillType={skillTypeText} skillName={paladinSkillNameText[index]} />
      })
  
    } else if (characterRole === "Scrapper") {
  
      const scrapperImages = importImages(require.context('../src/images/Scrapper', false, /\.(png)$/));
      return Object.keys(scrapperImages).map((image, index) => {
        if (index === 5 || index === 15 || index === 16) {
          skillTypeText = "Chain"
        } else if (index === 12 || index === 14) {
          skillTypeText = "Combo"
        } else if (index === 13) {
          skillTypeText = "Holding"
        } else {
          skillTypeText = "Normal"
        }
        return <SkillRow overallCount = {overallCount} setOverallCount={setOverallCount} reset={reset} characterRole={characterRole} setSkillClicked={setSkillClicked} key={Element+[index]}  skillImage={scrapperImages[image]} skillType={skillTypeText} skillName={scrapperSkillNameText[index]} />
      })
  
    } else if (characterRole === "Shadowhunter") {
      const shadowhunterImages = importImages(require.context('../src/images/Shadowhunter', false, /\.(png)$/));
      return Object.keys(shadowhunterImages).map((image, index) => {
        if (index === 7) {
          skillTypeText = "Holding"
        } else if (index === 13 || index === 14 || index === 15) {
          skillTypeText = "Chain"
        } else {
          skillTypeText = "Normal"
        }
        return <SkillRow overallCount = {overallCount} setOverallCount={setOverallCount} reset={reset} characterRole={characterRole} setSkillClicked={setSkillClicked} key={Element+[index]}  skillImage={shadowhunterImages[image]} skillType={skillTypeText} skillName={shadowhunterSkillNameText[index]} />
      })
  
    } else if (characterRole === "Sharpshooter") {
      const sharpshooterImages = importImages(require.context('../src/images/Sharpshooter', false, /\.(png)$/));
      return Object.keys(sharpshooterImages).map((image, index) => {
        if (index === 7) {
          skillTypeText = "Holding"
        } else if (index === 17) {
          skillTypeText = "Chain"
        } else {
          skillTypeText = "Normal"
        }
        return <SkillRow overallCount = {overallCount} setOverallCount={setOverallCount} reset={reset} characterRole={characterRole} setSkillClicked={setSkillClicked} key={Element+[index]}  skillImage={sharpshooterImages[image]} skillType={skillTypeText} skillName={sharpshooterSkillNameText[index]} />
      })
    } else if (characterRole === "Sorceress") {
      const sorceressImages = importImages(require.context('../src/images/Sorceress', false, /\.(png)$/));
      return Object.keys(sorceressImages).map((image, index) => {
        if (index === 4) {
          skillTypeText = "Chain"
        } else if (index === 7 || index === 13 || index === 15) {
          skillTypeText = "Charge"
        } else if (index === 9) {
          skillTypeText = "NEW TYPE: 12"
        } else if (index === 10 || index === 14) {
          skillTypeText = "Combo"
        } else {
          skillTypeText = "Normal"
        }
        return <SkillRow overallCount = {overallCount} setOverallCount={setOverallCount} reset={reset} characterRole={characterRole} setSkillClicked={setSkillClicked} key={Element+[index]} skillImage={sorceressImages[image]} skillType={skillTypeText} skillName={sorceressSkillNameText[index]} />
      })
  
    } else if (characterRole === "Soulfist") {
      const soulfistImages = importImages(require.context('../src/images/Soulfist', false, /\.(png)$/));
      return Object.keys(soulfistImages).map((image, index) => {
        if (index === 0 || index === 7 || index === 8) {
          skillTypeText = "Combo"
        } else if (index === 15) {
          skillTypeText = "NEW TYPE: 12"
        } else {
          skillTypeText = "Normal"
        }
        return <SkillRow overallCount = {overallCount} setOverallCount={setOverallCount} reset={reset} characterRole={characterRole} setSkillClicked={setSkillClicked} key={Element+[index]}  skillImage={soulfistImages[image]} skillType={skillTypeText} skillName={soulfistSkillNameText[index]} />
      })
  
    } else if (characterRole === "Striker") {
      const strikerImages = importImages(require.context('../src/images/Striker', false, /\.(png)$/));
      return Object.keys(strikerImages).map((image, index) => {
        if (index === 4 || index === 11 || index === 14 || index === 17) {
          skillTypeText = "Chain"
        } else if (index === 8 || index === 15) {
          skillTypeText = "Combo"
        } else if (index === 9) {
          skillTypeText = "NEW TYPE: 12"
        } else {
          skillTypeText = "Normal"
        }
        return <SkillRow overallCount = {overallCount} setOverallCount={setOverallCount} reset={reset} characterRole={characterRole} setSkillClicked={setSkillClicked} key={Element+[index]}  skillImage={strikerImages[image]} skillType={skillTypeText} skillName={strikerSkillNameText[index]} />
      })
  
    } else if (characterRole === "Wardancer") {
      const wardancerImages = importImages(require.context('../src/images/Wardancer', false, /\.(png)$/));
      return Object.keys(wardancerImages).map((image, index) => {
        if (index === 4 || index === 11 || index === 14 || index === 17) {
          skillTypeText = "Chain"
        } else if (index === 8 || index === 15) {
          skillTypeText = "Combo"
        } else {
          skillTypeText = "Normal"
        }
        return <SkillRow overallCount = {overallCount} setOverallCount={setOverallCount} reset={reset} characterRole={characterRole} setSkillClicked={setSkillClicked} key={Element+[index]}  skillImage={wardancerImages[image]} skillType={skillTypeText} skillName={wardancerSkillNameText[index]} />
      })
    }
  }

  export default CreateRow;