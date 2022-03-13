import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
/* import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack'; */
import SkillRow from './SkillRows.jsx';
import TriportSkill from './TriportSkills.jsx';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
const App = () => {
  return (
    <div className="App">
      <Container fluid className="Book_Of_Coordination  ">
        <Row className="NavBar">NavBar</Row>

        <Row className="rowContainer_for_positioning">
          <Col sm='1' className="SideBar border border-primary d-flex justify-content-end mb-1">
          <Button size='sm' className="Reset-Button ">⟲</Button>
          {/* on click get DropdownButton property title and then set it on click of a item*/}
          {/* Do this to change all images to depending on click */}
          {/* Rename images  */}
          {/* https://www.codegrepper.com/code-examples/javascript/react+import+multiple+images+from+folder */}
          {/* Best way to import different images? */}
          <DropdownButton  aria-haspopup="true" aria-expanded="false" size='sm' id="dropdown-basic-button " title="Test">
              <Dropdown.Item href="#/action-1">Artillerist</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Bard</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Deadeye</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Deathblade</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Gunlancer</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Gunslinger</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Paladin</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Scrapper</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Shadowhunter</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Sharpshooter</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Sorceress</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Soulfist</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Striker</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Wardancer</Dropdown.Item>
            </DropdownButton>
        
          </Col>

          <Col xs='7' className="SkillRowColumn border border-primary">

            <SkillRow />
            <SkillRow />
            <SkillRow />
            <SkillRow />
            <SkillRow />
            <SkillRow />
            <SkillRow />
            <SkillRow />
            <SkillRow />
            <SkillRow />
            <SkillRow />

          </Col>
          <Col xs='5' className=" border border-primary">
            <TriportSkill />
          </Col>









        </Row>
      </Container>
    </div>
  );
}

export default App;
