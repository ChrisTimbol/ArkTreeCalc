import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
/* import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack'; */
import SkillRow from './SkillRow.jsx';
import TripodSkill from './TripodSkills.jsx';
import ClassButton from './ClassButton.jsx';
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react';
/*    Destroyer =  const skillNameText = ["Heavy Crush","Gravity Impact","Full Swing","Earth Smasher","One-Man Army","Neutralizer","Dreadnaught","Terra break","Seismic Hammer","Endure Pain","Earth Eater","Jumping Smash","Perfect Swing","Power Strike","Gravity Compression","Gravity Force","Running Crash","Power Shoulder","Big Bang"]
*/

function importImages(r) {
  let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

function createRows(characterClass) {
  var skillTypeText;

  if (characterClass === "Artillerist") {
    const skillNameText = ["Enhanced Shell","Freeze Shell","Buckshot","Multiple Rocket Launcher","Howitzer","Summon Turret","Air Raid","Flamethrower","Swing","Jump Barrage","Energy Field","Gatling Gun","Napalm Shot","Forward Barrage","Gravity Explosion","Plasma Storm","Homing Barrage"]
    const artilleristImages = importImages(require.context('../src/images/Artillerist', false, /\.(png)$/));
    return Object.keys(artilleristImages).map((image, index) => {
      if (index === 7 || index === 14) {
        skillTypeText = "Combo"
      } else {
        skillTypeText = "Normal"
      }
      return <SkillRow skillImage={artilleristImages[image]} skillType={skillTypeText} skillName={skillNameText[index]} />
    })

  } else if (characterClass === "Bard") {
    const skillNameText = ["Sound Shock","Conviction Core","Sound Wave","Dissonance","Wind of Music","Prelude of Storm","Stigma","Note Bundle","Soundholic","Rhythm Buckshot","Heavenly Tune","Sonic Vibration","Harp of Rhythm","Prelude of Death","Guardian Tune","Rhapsody of Light","March"]
    const bardImages = importImages(require.context('../src/images/Bard', false, /\.(png)$/));
    return Object.keys(bardImages).map((image, index) => {
      if (index === 7 || index === 9) {
        skillTypeText = "Charge";
      } else if (index === 16) {
        skillTypeText = "Combo"
      } else {
        skillTypeText = "Normal"
      }
      return <SkillRow skillImage={bardImages[image]} skillType={skillTypeText} skillName={skillNameText[index]} />
    })

  } else if (characterClass === "Berserker") {
    const skillNameText = ["Power Break","Crime Hazard","Shoulder Charge","Whirlwind","Hell Blade","Strike Wave","Double Slash","Assault Blade","Red Dust","Tempest Slash","Diving Slash","Mountain Crash","Finish Strike","Aura Blade","Chain Sword","Sword Storm","Wind Blade","Maelstrom"]
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
      return <SkillRow skillImage={berserkerImages[image]} skillType={skillTypeText} skillName={skillNameText[index]} />
    })

  } else if (characterClass === "Deadeye") {
    const skillNameText = ["Enforce Execution","Sign of Apocalypse","Hour of Judgement","Spiral Flame","Triple Explosion","Catastrophe","Death Fire","Meteor Stream","Shotgun Dominator","AT02 Grenade","Plasma Bullet","Shotgun Rapid Fire","Spiral Tracker","Cruel Tracker","Dexterous Shot","Somersault Shot","Equilibrium","Last Request","Aimed Shot","Quick Shot","Perfect Shot"]
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
      return <SkillRow skillImage={deadeyeImages[image]} skillType={skillTypeText} skillName={skillNameText[index]} />
    })

  } else if (characterClass === "Deathblade") {
    const skillNameText = ["Surprise Attack","Wind Cut","Upper Slash","Earth Cleaver","Death Sentence","Twin Shadows","Blade Dance","Soul Absorber","Spincutter","Turning Slash","Moonlight Sonic","Dark Axel","Maelstrom","Polestar","Void Strike","Fatal Wave","Blitz Rush","Head Hunt"]
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
      return <SkillRow skillImage={deathbladeImages[image]} skillType={skillTypeText}  skillName={skillNameText[index]} />
    })

  } else if (characterClass === "Gunlancer") {
    const skillNameText = ["Sharp Gunlance","Bash","Shield Charge","Fire Bullet","Rising Gunlance","Dash Upper Fire","Hook Chain","Shield Shock","Leap Attack","Nellasia's Energy","Guardian's Thunderbolt","Shield Bash","Gunlance Shot","Shout of Hatred","Counter Gunlance","Surge Cannon","Charged Stinger"]
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
      return <SkillRow skillImage={gunlancerImages[image]} skillType={skillTypeText} skillName={skillNameText[index]} />
    })

  } else if (characterClass === "Gunslinger") {
    const skillNameText = ["Quick Step","Dual Buckshot","Hour of Judgement","Spiral Flame","Target Down","Catastrophe","Death Fire","Meteor Stream","Sharpshooter","AT02 Grenade","Plasma Bullet","Shotgun Rapid Fire","Spiral Tracker","Bullet Rain","Dexterous Shot","Somersault Shot","Equilibrium","Last Request","Focused Shot","Peacekeeper","Perfect Shot"]
    const gunslingerImages = importImages(require.context('../src/images/Gunslinger', false, /\.(png)$/));
    return Object.keys(gunslingerImages).map((image, index) => {
      if (index === 0 || index === 1 || index === 4 || index === 14 || index === 19) {
        skillTypeText = "Chain"
      } else if (index === 5 || index === 6 || index === 13 || index === 20) {
        skillTypeText = "Combo"
      } else {
        skillTypeText = "Normal"
      }
      return <SkillRow skillImage={gunslingerImages[image]} skillType={skillTypeText} skillName={skillNameText[index]}/>
    })

  } else if (characterClass === "Paladin") {
    
    const skillNameText = ["Spin Slash","Flash Thrust","Light Shock","Light of Judgement","Charge","Sword of Justice","Flash Shash","Holy Explosion","Punishment","Holy Area","Dash Slash","Holy Protection ","Godsent Law","Executor's Sword","Wrath of God","Execution of Justice","Holy Sword","Heavenly Blessings"]
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
      return <SkillRow skillImage={paladinImages[image]} skillType={skillTypeText} skillName={skillNameText[index]}/>
    })

  } else if (characterClass === "Scrapper") {

    const skillNameText = ["Charging Blow","Dragon Advent","Judgement","Earthquake Chain","Chain of Resonance","Crushing Smite","Chain Destruction Fist","Death Rattle","Supernova","Instant Hit","Roundup Sweep","Fierce Tiger Strike","Continuous Push","Critical Blow","Battering Fists","Iron Cannon Blow","True Rising Fist","Shredding Strike"]
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
      return <SkillRow skillImage={scrapperImages[image]} skillType={skillTypeText} skillName={skillNameText[index]}/>
    })

  } else if (characterClass === "Shadowhunter") {
    const skillNameText = ["Demonic Slash","Nimble Cut","Slasher","Brutal Cross","Demon's Grip","Rising Claw","Piercing Thorn","Demon Vision","Grind Chain","Spinning Dive","Howl","Cruel Cutter","Thrust Impact","Demonic Clone","Demolition","Spinning Weapon","Decimate","Sharpened Cut"]
    const shadowhunterImages = importImages(require.context('../src/images/Shadowhunter', false, /\.(png)$/));
    return Object.keys(shadowhunterImages).map((image, index) => {
      if (index === 7) {
        skillTypeText = "Holding"
      } else if (index === 13 || index === 14 || index === 15) {
        skillTypeText = "Chain"
      } else {
        skillTypeText = "Normal"
      }
      return <SkillRow skillImage={shadowhunterImages[image]} skillType={skillTypeText} skillName={skillNameText[index]}/>
    })

  } else if (characterClass === "Sharpshooter") {
    const skillNameText = ["Rapid Shot","Salvo","Atomic Arrow","Electric Nova","Smokescreen Arrow","Arrow Wave","Arrow Shower","Charged Shot","Evasive Fire","Sharp Shooter","DM-42","Deadly Slash","Moving Slash","Blade Storm","Claymore Mine","Shadow Arrow","Stalker","Snipe"]
    const sharpshooterImages = importImages(require.context('../src/images/Sharpshooter', false, /\.(png)$/));
    return Object.keys(sharpshooterImages).map((image, index) => {
      if (index === 7) {
        skillTypeText = "Holding"
      } else if (index === 17) {
        skillTypeText = "Chain"
      } else {
        skillTypeText = "Normal"
      }
      return <SkillRow skillImage={sharpshooterImages[image]} skillType={skillTypeText} skillName={skillNameText[index]}/>
    })
  } else if (characterClass === "Sorceress") {
    const skillNameText = ["Blaze","Lightning Vortex","Ice Shower","Inferno","Energy Discharge","Rime Arrow","Esoteric Reaction","Punishing Strike","Reverse Gravity","Elegian's Touch","Lightning Bolt","Squall","Seraphic Hail","Explosion","Frost's Call","Doomsday"]
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
      return <SkillRow skillImage={sorceressImages[image]} skillType={skillTypeText} skillName={skillNameText[index]} />
    })

  } else if (characterClass === "Soulfist") {
    const skillNameText = ["Energy Blast","Venomous Fist","Lightning Palm","Energy Bullet","Palm Burst","Heavenly Squash","Crippling Barrier","Magnetic Palm","Pulverizing Palm","Tempest Blast","Shadowbreaker","Merciless Pummel","Bolting Crash","Force Orb","Flash Step","Energy Release","Deadly Finger"]
    const soulfistImages = importImages(require.context('../src/images/Soulfist', false, /\.(png)$/));
    return Object.keys(soulfistImages).map((image, index) => {
      if (index === 0 || index === 7 || index === 8) {
        skillTypeText = "Combo"
      } else if (index === 15) {
        skillTypeText = "NEW TYPE: 12"
      } else {
        skillTypeText = "Normal"
      }
      return <SkillRow skillImage={soulfistImages[image]} skillType={skillTypeText} skillName={skillNameText[index]}/>
    })

  } else if (characterClass === "Striker") {
    const skillNameText = ["Esoteric Skill: Blast Formation","Esoteric Skill: Spiral Impact","Esoteric Skill: Tiger Emerges","Flash Heat Fang","Sleeping Ascent Celebration","Lightning Whisper","Berserk Circle","Esoteric Skill: Lightning Tiger Strike","Esoteric Skill: Call the Wind God","Storm Dragon Awakening","Phoenix Advent","Sky Shattering Blow","Lightning Kick","Triple Fist","Moon Flash Kick","Swift Wind Kick","Violent Tiger","Sweeping Kick"]
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
      return <SkillRow skillImage={strikerImages[image]} skillType={skillTypeText} skillName={skillNameText[index]}/>
    })

  } else if (characterClass === "Wardancer") {
    const skillNameText = ["Esoteric Skill: Blast Formation","Esoteric Skill: Spiral Impact","Esoteric Skill: Rising Fire Dragon","Flash Heat Fang","Sleeping Ascent Celebration","Roar of Courage","Seismic Strike","Esoteric Skill: Lightning Strike","Esoteric Skill: Call of the Wind God","Wind's Whisper","Phoenix Advent","Sky Shattering Blow","Lightning Kick","Triple Fist","Moon Flash Kick","Swift Wind Kick","Energy Combustion","Sweeping Kick"]
    const wardancerImages = importImages(require.context('../src/images/Wardancer', false, /\.(png)$/));
    return Object.keys(wardancerImages).map((image, index) => {
      if (index === 4 || index === 11 || index === 14 || index === 17) {
        skillTypeText = "Chain"
      } else if (index === 8 || index === 15) {
        skillTypeText = "Combo"
      } else {
        skillTypeText = "Normal"
      }
      return <SkillRow skillImage={wardancerImages[image]} skillType={skillTypeText} skillName={skillNameText[index]}/>
    })
  }
}

const App = () => {

  const [characterClass, setCharacterClass] = useState('Artillerist');  //set by Classbutton game class selector

  return (

    <div className="App">
      <Container fluid className="Book_Of_Coordination  ">

        <Row className="NavBar">NavBar</Row>
        <Row className="rowContainer_for_positioning">
          <Col sm='1' className="SideBar  d-flex justify-content-end mb-1">
            <Button size='sm' className="Reset-Button ">⟲</Button>
            <ClassButton classSelect={characterClass} setClass={setCharacterClass} />
          </Col>

          <Col xs='7' className="SkillRowColumn">
            {createRows(characterClass) /* creates rows based on amount of images */}
          </Col>
          <Col xs='5' className="TripodColumn">
            <TripodSkill />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
