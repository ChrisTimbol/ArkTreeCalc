
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
/* import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack'; */
import CreateRow from '../CreateRow.jsx';
import RoleButton from '../RoleButton.jsx';
import Button from 'react-bootstrap/Button'
import React, { useState} from 'react';



export default function Calculator() {
    
  const [characterRole, setCharacterRole] = useState('Artillerist');  //set by roleButton game class selector
  const [skillClicked, setSkillClicked] = useState("Enhanced Shell"); // move this 
  const [reset, setReset] = useState(1);
  const [overallCount, setOverallCount] = useState(340);
    return (
<>
  
      
     <Container  className="Book_Of_Coordination">

          <Col  className="SideBar  d-flex justify-content-center mb-1">
          <h6 className="overallCounter my-auto">{overallCount}/340</h6 >
            <Button size='sm' onClick={() => setReset(!reset)}className="Reset-Button ">⟲</Button> 
     
            <RoleButton roleSelect={characterRole} setRole={setCharacterRole} />
          </Col>
          <Col xs='12' md="10" className="SkillRowColumn">
            {CreateRow(characterRole, setSkillClicked, reset, skillClicked, overallCount, setOverallCount)}
            
          </Col>

      </Container> 


  </>
    )
  }
  