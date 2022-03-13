import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
/* import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack'; */
import SkillRow from './SkillRows.jsx';
import TriportSkill from './TriportSkills.jsx';
import ClassButton from './ClassButton.jsx';
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react';

function importImages(r) {
  let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}




{/*     <img src={artilleristImages["Artillerist_Skill_01_1.png"]}  alt="alt" /> */ }

function createRows(characterClass) {
  if (characterClass === "Artillerist") {
    const artilleristImages = importImages(require.context('../src/images/Artillerist', false, /\.(png)$/));
    return Object.keys(artilleristImages).map((image) => <SkillRow />)

 
  } else if(characterClass === "Bard") {
    const bardImages = importImages(require.context('../src/images/Bard', false, /\.(png)$/));
    return Object.keys(bardImages).map((image) => <SkillRow />)

  } else if(characterClass === "Berserker") {
    const berserkerImages = importImages(require.context('../src/images/Berserker', false, /\.(png)$/));
    return Object.keys(berserkerImages).map((image) => <SkillRow />)

  } else if(characterClass === "Deadeye") {
    const deadeyeImages = importImages(require.context('../src/images/Deadeye', false, /\.(png)$/));
    return Object.keys(deadeyeImages).map((image) => <SkillRow />)

  } else if(characterClass === "Deathblade") {
    const deathbladeImages = importImages(require.context('../src/images/Deathblade', false, /\.(png)$/));
    return Object.keys(deathbladeImages).map((image) => <SkillRow />)

  } else if(characterClass === "Gunlancer") {
    const gunlancerImages = importImages(require.context('../src/images/GunLancer', false, /\.(png)$/));
    return Object.keys(gunlancerImages).map((image) => <SkillRow />)

  } else if(characterClass === "Gunslinger") {
    const gunslingerImages = importImages(require.context('../src/images/Gunslinger', false, /\.(png)$/));
    return Object.keys(gunslingerImages).map((image) => <SkillRow />)

  } else if(characterClass === "Paladin") {
    const paladinImages = importImages(require.context('../src/images/Paladin', false, /\.(png)$/));
    return Object.keys(paladinImages).map((image) => <SkillRow />)

  } else if(characterClass === "Scrapper") {
    const scrapperImages = importImages(require.context('../src/images/Scrapper', false, /\.(png)$/));
    return Object.keys(scrapperImages).map((image) => <SkillRow />)

  } else if(characterClass === "Shadowhunter") {
    const shadowhunterImages = importImages(require.context('../src/images/Shadowhunter', false, /\.(png)$/));
    return Object.keys(shadowhunterImages).map((image) => <SkillRow />)

  } else if(characterClass === "Sharpshooter") {
    const sharpshooterImages = importImages(require.context('../src/images/Sharpshooter', false, /\.(png)$/));
    return Object.keys(sharpshooterImages).map((image) => <SkillRow />)

  } else if(characterClass === "Sorceress") {
    const sorceressImages = importImages(require.context('../src/images/Sorceress', false, /\.(png)$/));
    return Object.keys(sorceressImages).map((image) => <SkillRow />)

  } else if(characterClass === "Soulfist") { 
    const soulfistImages = importImages(require.context('../src/images/Soulfist', false, /\.(png)$/));
    return Object.keys(soulfistImages).map((image) => <SkillRow />)

  } else if(characterClass === "Striker") {
    const strikerImages = importImages(require.context('../src/images/Striker', false, /\.(png)$/));
    return Object.keys(strikerImages).map((image) => <SkillRow />)

  } else if(characterClass === "Wardancer") {
    const wardancerImages = importImages(require.context('../src/images/Wardancer', false, /\.(png)$/));
    return Object.keys(wardancerImages).map((image) => <SkillRow />)
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
            {/* if characterClass == classSelected then set amount of rows to the amount of skill Images */}

            {createRows(characterClass)}
          </Col>
          <Col xs='5' className="">
            <TriportSkill />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
