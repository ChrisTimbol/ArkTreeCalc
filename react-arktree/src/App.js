import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import SkillRow from './SkillRows.jsx';
const App = () => {
  return (
    <div className="App">
      <Container fluid className="Book_Of_Coordination ">
        <Row className="NavBar">NavBar</Row>

        <Row className="rowContainer_for_positioning">
          <Col  className="SideBar">SideBar</Col>

          <Col className="SkillRowColumn">
            <SkillRow />
            </Col>


          <Col  className="Triport_Container">
            <Col className="Triport_Container_Inside">
                <Row> 
                  <Button>1</Button>
                  <Button>2</Button>
                  <Button>3</Button>
                </Row>
                <Row> 
                  <Button>1</Button>
                  <Button>2</Button>
                  <Button>3</Button>
                </Row>
                <Row> 
                  <Button>1</Button>
                  <Button>2</Button>
                  <Button>3</Button>
                </Row>
            </Col>
          </Col>









        </Row>
      </Container>
    </div>
  );
}

export default App;
