import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

function reqPointChange(skillCounter, reqCounter, setReqCounter) {
  if (skillCounter === 1 || skillCounter === 2) {
    return setReqCounter(reqCounter = 1);
  } else if (skillCounter === 3) {
    return setReqCounter(reqCounter = 2);
  } else if (skillCounter === 4 || skillCounter === 5) {
    return setReqCounter(reqCounter = 4);
  } else if (skillCounter === 6 || skillCounter === 7 || skillCounter === 8) {
    return setReqCounter(reqCounter = 8);
  } else if (skillCounter === 9) {
    return setReqCounter(reqCounter = 10);
  } else if (skillCounter === 10) {
    return setReqCounter(reqCounter = 10);
  }
}

function SkillRow(props) {
  const [skillCounter, setSkillCounter] = useState(1);
  const [reqCounter, setReqCounter] = useState(1);
  
  useEffect(() => { // resets counters when switching Roles
    setSkillCounter(1); //initalize back to 1
    setReqCounter(1); // initalize back to 1
  },[props.characterRole, props.reset]); // follows the state of characterRole , which is selected by RoleButton
  return <div>


    <Row  onClick={() => {props.setSkillClicked(props.skillName)}} className="SkillCard mb-1  btn-outline-secondary">
     
      <Col sm='auto' xs={{ span: 3, order: 1 }} md={{span: 'auto', order: 1}} lg= {{span: 'auto', order: 1}} className="img-container my-auto">
        <Image className="skill-img border border-dark" height='48' width='48' src={props.skillImage}  ></Image>
      </Col>                                                                                      
      <Col sm='3' xs={{ span: 9, order: 2 }} md={{span: 3, order: 2}} lg='4'  className="SkillCard_skill_container my-auto ">
        <Stack className="SkillCard_skill" >
          <Col className="SkillCard_skill_type ">{props.skillType}</Col>
          <Col className="SkillCard_skill_name">{props.skillName}</Col>
        </Stack>
      </Col>
      {/* d-none d-sm-block*/}
      <Col sm='auto' xs={{ span: 3, order: 3 }} md={{span: 2, order: 3}} lg='2' className="SkillCard_reqtype text-center my-auto ">
        <Stack gap='1'>
          <Col className="SkillCard_reqtype_point  ">{reqCounter}</Col>
          <Col className="SkillCard_reqtype_text h6">Req. Points</Col>
        </Stack>
      </Col>

      <Col sm='auto' xs={{ span: 3, order: 4 }} md={{span: 2, order: 4}}  lg='2' className="SkillCard_lvltype text-center my-auto  ">
        <Stack gap='1'>
          <Col className="SkillCard_lvltype_point">{skillCounter}</Col>
          <Col className="SkillCard_lvltype_text h6">Skill Lv.</Col>
        </Stack>
      </Col>

      <Col xs={{ span: 3, order: 5 }} md={{span: 2, order: 5}}  lg = '1' className="SkillCard_buttons_container my-auto">
        <Stack >
          <Button size='sm' onClick={() => {
            if (skillCounter < 10) {
              setSkillCounter(skillCounter + 1);
              reqPointChange(skillCounter, reqCounter, setReqCounter);
            }
          }} className="SkillCard_buttons_plus fw-bold border border-dark d-flex justify-content-center">+</Button>

          <Button size='sm' onClick={() => {
            if (skillCounter > 1) {
              setSkillCounter(skillCounter - 1);
              reqPointChange(skillCounter, reqCounter, setReqCounter);
            }
          }} className="SkillCard_buttons_minus fw-bold border border-dark d-flex justify-content-center">-</Button>
        </Stack>
      </Col>

      <Col xs={{ span: 3, order: 5}} md={{span: 1, order: 5}} lg = '1' className="img-tripod-container my-auto d-flex  justify-content-center " >
        <Image src={require("./images/tripod.png")} className="tripod-img" width="50px " ></Image>
      </Col>
    </Row>
  </div>
}

export default SkillRow;