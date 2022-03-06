import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
//require.context('./images/Artillerist', false, /\.(png|jpe?g|svg)$/)
const App = () => {
  return (
    <div className="App">
      <Container className="Book_of_coordination border border-danger">
        <Row className="SkillCard">
          <Col md={1} className="border border-primary">
            <Image src={require("./images/Artillerist/BS_Skill_01_0.png")} className="img-container" width={48} height={48}></Image>
          </Col>
          <Col className="border border-primary">
            <Col className="SkillCard_skill">
              <Col className="SkillCard_skill_type">Point</Col>
              <Col className="SkillCard_skill_name">Spiral Tracker</Col>
            </Col>
          </Col>

            <Col md={2} className="SkillCard_leveltype border border-primary">
              <Col className="SkillCard_leveltype_req">
                <Col className="SkillCard_leveltype_req_point">1</Col>
                <Col className="SkillCard_leveltype_req_text">Req. Points</Col>
              </Col>
            </Col>

            <Col md={2} className="SkillCard_leveltype_lvl">
              <Col className="SkillCard_leveltype_lvl_point">1</Col>
              <Col className="SkillCard_leveltype_lvl_text">Skill Lv.</Col>
            </Col>

          <Col md={1} className="border border-primary">Triport Image</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
