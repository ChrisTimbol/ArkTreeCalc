import React from "react";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

function SkillRow() {
  return <div>
  <Container fluid className="SkillRows">
    <Row  className="SkillCard flex-nowrap "> {/* sm<576px xs >=576 */}
      <Col sm='auto' xs='auto' className="img-container my-auto">
        <Image className="skill-img border border-dark" height='48' width='48' src={require("./images/Artillerist/BS_Skill_01_0.png")}  ></Image>
      </Col>
      <Col sm='3' xs='2' className="SkillCard_skill_container my-auto border border-primary">
        <Stack className="SkillCard_skill" >
          <Col className="SkillCard_skill_type ">Point</Col>
          <Col className="SkillCard_skill_name  ">Spiral Tracker</Col>
        </Stack>
      </Col>

      <Col sm='auto' xs='auto' className="SkillCard_reqtype text-center my-auto border border-primary">
        <Stack gap='1'>
          <Col className="SkillCard_reqtype_point  ">1</Col>
          <Col className="SkillCard_reqtype_text h6">Req. Points</Col>
        </Stack>
      </Col>

      <Col sm='auto' xs='auto' className="SkillCard_lvltype_lvl text-center my-auto border border-primary ">
        <Stack gap='1'>
          <Col className="SkillCard_lvltype_point">1</Col>
          <Col className="SkillCard_lvltype_text h6">Skill Lv.</Col>
        </Stack>
      </Col>

      <Col  xs='auto' className="SkillCard_buttons_container my-auto mx-auto border border-primary">
        <Stack >
          <Button size='sm' className="SkillCard_buttons_plus fw-bold border border-dark d-flex justify-content-center">+</Button>
          <Button size='sm' className="SkillCard_buttons_minus fw-bold border border-dark d-flex justify-content-center">-</Button>
        </Stack>
      </Col>

      <Col sm='auto' xs='auto' className="img-tripod-container my-auto  d-flex justify-content-center  border border-primary" >
        <Image src={require("./images/tripod.png")} className="tripod-img " ></Image>
      </Col>
    </Row>
  </Container>
  </div>
}

export default SkillRow;