import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Stack from 'react-bootstrap/Stack';
//require.context('./images/Artillerist', false, /\.(png|jpe?g|svg)$/)
const App = () => {
  return (
    <div className="App">
      <Container className="Book_of_coordination ">
        <Row x sm='6' xs='6' className="SkillCard "> {/* sm<576px xs >=576 */}
          <Col sm='auto' xs='auto' className="img-container my-auto">
            <Image className="skill-img border border-dark" height='44' width='44' src={require("./images/Artillerist/BS_Skill_01_0.png")}  ></Image>
          </Col>
          <Col sm='3' xs='2' className="border border-primary my-auto">
            <Stack className="SkillCard_skill" >
              <Col className="SkillCard_skill_type ">Point</Col>
              <Col className="SkillCard_skill_name  ">Spiral Tracker</Col>
            </Stack>
          </Col>

          <Col sm='1' xs='1' className="SkillCard_reqtype text-center my-auto">
            <Stack>
              <Col className="SkillCard_reqtype_point ">1</Col>
              <Col className="SkillCard_reqtype_text">Req. Points</Col>
            </Stack>
          </Col>

          <Col sm='1' xs='1' className="SkillCard_lvltype_lvl text-center my-auto">
            <Stack >
              <Col className="SkillCard_lvltype_point ">1</Col>
              <Col className="SkillCard_lvltype_text">Skill Lv.</Col>
            </Stack>
          </Col>

          <Col sm='auto' xs='1' className="SkillCard_buttons_container border border-primary my-auto ">
            <Stack >
              <Button size='sm' className="SkillCard_buttons_plus fw-bold border border-dark">+</Button>
              <Button size='sm' className="SkillCard_buttons_minus fw-bold border border-dark">-</Button>
            </Stack>
          </Col>
          <Col sm='1' xs='1' className="img-tripod-container border border-primary text-center" >
            <Image src={require("./images/tripod.png")} className="tripod-img" width='44' height='44' ></Image>
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default App;
