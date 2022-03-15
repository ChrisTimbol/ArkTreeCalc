import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
/* import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack'; */
import CreateRow from './CreateRow';
import TripodSkill from './TripodSkills.jsx';
import RoleButton from './RoleButton.jsx';
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react';
/*    Destroyer =  const skillNameText = ["Heavy Crush","Gravity Impact","Full Swing","Earth Smasher","One-Man Army","Neutralizer","Dreadnaught","Terra break","Seismic Hammer","Endure Pain","Earth Eater","Jumping Smash","Perfect Swing","Power Strike","Gravity Compression","Gravity Force","Running Crash","Power Shoulder","Big Bang"]
*/

const App = () => {

  const [characterRole, setCharacterRole] = useState('Artillerist');  //set by roleButton game class selector
  const [skillClicked, setSkillClicked] = useState("Enhanced Shell");
  // if skillClicked === ArtilleristSkillNameText[i] then TriportImage = triportlist1
  return (

    <div className="App" >
      <Container fluid className="Book_Of_Coordination  ">
        <Row className="NavBar">NavBar</Row>
        <Row className="rowContainer_for_positioning">
          <Col sm='1' md="1" className="SideBar  d-flex justify-content-end mb-1">
            <Button size='sm' className="Reset-Button ">⟲</Button>
           
            <RoleButton roleSelect={characterRole} setRole={setCharacterRole} />
          </Col>
          <Col xs='7' md="7" className="SkillRowColumn">
            {CreateRow(characterRole, setSkillClicked)}
          </Col>
          <Col xs='5' md="3" className="TripodColumn">
            <TripodSkill tripodImage = ""/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
