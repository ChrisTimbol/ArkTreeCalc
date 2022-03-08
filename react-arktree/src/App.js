import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
/* import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack'; */
import SkillRow from './SkillRows.jsx';
import TriportSkill from './TriportSkills.jsx';
const App = () => {
  return (
    <div className="App">
      <Container fluid className="Book_Of_Coordination  ">
        <Row className="NavBar">NavBar</Row>

        <Row className="rowContainer_for_positioning ">
          <Col sm='1' className="SideBar">SideBar</Col>

          <Col  xs='7' className="SkillRowColumn border border-primary">
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
