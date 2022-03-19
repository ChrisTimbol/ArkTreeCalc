import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
/* import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack'; */
import CreateRow from './CreateRow';
import RoleButton from './RoleButton.jsx';
import Button from 'react-bootstrap/Button'
import React, { useState, useEffect } from 'react';
/*    Destroyer =  const skillNameText = ["Heavy Crush","Gravity Impact","Full Swing","Earth Smasher","One-Man Army","Neutralizer","Dreadnaught","Terra break","Seismic Hammer","Endure Pain","Earth Eater","Jumping Smash","Perfect Swing","Power Strike","Gravity Compression","Gravity Force","Running Crash","Power Shoulder","Big Bang"]
*/

// add correct color to combotype
// add data
// add tooltip/data

const App = () => {

  const [characterRole, setCharacterRole] = useState('Artillerist');  //set by roleButton game class selector
  const [skillClicked, setSkillClicked] = useState("Enhanced Shell"); // move this 
  const [reset, setReset] = useState(1);
  const [overallCount, setOverallCount] = useState(340);

 // createTripod(skillClicked)
  // if skillClicked === ArtilleristSkillNameText[i] then TriportImage = triportlist1
  return (

    <div className="App" >

      <Container fluid className="Book_Of_Coordination  ">
        <Row className="NavBar">NavBar</Row>
          <Col  className="SideBar  d-flex justify-content-start mb-1">
          <h6 className="overallCounter my-auto">{overallCount}/340</h6 >
            <Button size='sm' onClick={() => setReset(!reset)}className="Reset-Button ">⟲</Button> 
     
            <RoleButton roleSelect={characterRole} setRole={setCharacterRole} />
          </Col>
          <Col xs='12' md="10" className="SkillRowColumn">
            {CreateRow(characterRole, setSkillClicked, reset, skillClicked, overallCount, setOverallCount)}
            
          </Col>
      </Container>
    </div>
  );
}

export default App;
