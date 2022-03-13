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
          {/* Best way to import different images? props.title */}
           <ClassButton />  
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
