import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
//require.context('./images/Artillerist', false, /\.(png|jpe?g|svg)$/)
const App = () => {
  return (
    <div className="App">
      <Container md={'auto'} className="Book_of_coordination">
        <Row sm={'auto'} xs={'auto'} md={'auto'} className="SkillCard row-cols-6">
          <Col className="border border-primary">
            <Image src={require("./images/Artillerist/BS_Skill_01_0.png")} className="img-container" ></Image>
          </Col>
          <Col sm={'auto'} xs={'auto'} md={'4'} className="border border-primary">
            <Col className="SkillCard_skill justify-content-sm-start">
              <Col className="SkillCard_skill_type ">Point</Col>
              <Col className="SkillCard_skill_name  ">Spiral Tracker</Col>
            </Col>
          </Col>

          <Col md={'auto'} className="SkillCard_reqtype border border-primary">
            <Col className="SkillCard_reqtype_point">1</Col>
            <Col className="SkillCard_reqtype_text">Req. Points</Col>
          </Col>

          <Col sm={'1'}  md={'auto'} className="SkillCard_lvltype_lvl">
            <Col className="SkillCard_lvltype_point">1</Col>
            <Col className="SkillCard_lvltype_text">Skill Lv.</Col>
          </Col>
          <Col sm={'1'} md={'auto'} className="SkillCard_buttons_container border border-primary ">
            <Row className="SkillCard_buttons_container">
              <Button size={'sm'} className="SkillCard_buttons_plus fw-bold" >+</Button>
              <Button size={'sm'} className="SkillCard_buttons_minus fw-bold ">-</Button>
            </Row>
          </Col>
          <Col  className="img-tripod-container border border-primary" >
            <Image src={require("./images/tripod.png")} className="tripod-img" ></Image>
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default App;
