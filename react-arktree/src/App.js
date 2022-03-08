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
      <Container fluid className="Book_Of_Coordination  border border-primary">
        <Row className="NavBar">NavBar</Row>

        <Row className="rowContainer_for_positioning ">
          <Col sm='1' className="SideBar">SideBar</Col>

          <Col sm='8' md='6' className="SkillRowColumn">
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
          <TriportSkill />








        </Row>
      </Container>
    </div>
  );
}

export default App;
