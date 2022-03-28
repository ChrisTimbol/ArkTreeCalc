import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import TripodSkill from "../TripodSkills";
import Collapse from 'react-bootstrap/Collapse';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import blanktripod from '../images/tripod.png';
import tripod1 from '../images/tripod-1.png';
import tripod2 from '../images/tripod-2.png';
import tripod3 from '../images/tripod-3.png';

function reqPointAdd(skillCounter, reqCounter, setReqCounter) {

  //1 2 3 4 5 6 7 8 9 10
  //req 1 1 2 4 4 8 8 8 12 blank
  //   339 338 336 332 328 320 312 304 292
  if (skillCounter === 1) {
    setReqCounter(reqCounter = 1);


  } else if (skillCounter === 2) {
    setReqCounter(reqCounter = 2);

  } else if (skillCounter === 3 || skillCounter === 4) {

    setReqCounter(reqCounter = 4);

  } else if (skillCounter === 5 || skillCounter === 6 || skillCounter === 7) {
    setReqCounter(reqCounter = 8);

  } else if (skillCounter === 8) {

    setReqCounter(reqCounter = 12);

  } else if (skillCounter === 9) {

    setReqCounter(reqCounter = "\u00A0");
  }

  return reqCounter;
}

//1 2 3 4 5 6 7 8 9 10
//req 1 1 2 4 4 8 8 8 12 blank
function reqPointMinus(skillCounter, reqCounter, setReqCounter, setOverallCount, overallCount) {

  if (skillCounter === 10) {
    setReqCounter(reqCounter = 12)

  } else if (skillCounter === 9) {
    setReqCounter(reqCounter = 8);

  } else if (skillCounter === 8 || skillCounter === 7) {

    setReqCounter(reqCounter = 8);
  } else if (skillCounter === 6 || skillCounter === 5) {
    setReqCounter(reqCounter = 4);

  } else if (skillCounter === 4) {
    setReqCounter(reqCounter = 2);

  } else if (skillCounter === 3) {
    setReqCounter(reqCounter = 1);

  }
  return reqCounter;
}
//1 2 3 4 5 6 7 8 9 10
//req 1 1 2 4 4 8 8 8 12 blank
//adds color to tripod based on selection of tripod tree skills
function selectTier1Image(btnGrayscale_tier1_1, btnGrayscale_tier1_2, btnGrayscale_tier1_3, btnGrayscale_tier2_1, btnGrayscale_tier2_2, btnGrayscale_tier2_3, btnGrayscale_tier3_1, btnGrayscale_tier3_2) {
  var whatTripod;
  if (btnGrayscale_tier3_1 === 'grayscale(0%)' || btnGrayscale_tier3_2 === 'grayscale(0%)') {
    whatTripod = tripod3
  }
  else if (btnGrayscale_tier2_1 === 'grayscale(0%)' || btnGrayscale_tier2_2 === 'grayscale(0%)' || btnGrayscale_tier2_3 === 'grayscale(0%)') {
    whatTripod = tripod2
  }
  else if (btnGrayscale_tier1_1 === 'grayscale(0%)' || btnGrayscale_tier1_2 === 'grayscale(0%)' || btnGrayscale_tier1_3 === 'grayscale(0%)') {
    whatTripod = tripod1
  }
  else {
    whatTripod = blanktripod
  }
  return <Image src={whatTripod} className="tripod-img" width="50px " ></Image>
}
function addOverallCount(skillCounter, setOverallCount, overallCount) {
  if (skillCounter === 1 || skillCounter === 2) {
    setOverallCount(overallCount -= 1)
  } else if (skillCounter === 3) {
    setOverallCount(overallCount -= 2)
  } else if (skillCounter === 4 || skillCounter === 5) {
    setOverallCount(overallCount -= 4)
  } else if (skillCounter === 6 || skillCounter === 7 || skillCounter === 8) {
    setOverallCount(overallCount -= 8)
  } else if (skillCounter === 9) {
    setOverallCount(overallCount -= 12)
  }
}

function subOverallCount(skillCounter, setOverallCount, overallCount) {
  if (skillCounter === 10) {
    setOverallCount(overallCount += 12)
  } else if (skillCounter === 9 || skillCounter === 8 || skillCounter === 7) {
    setOverallCount(overallCount += 8)
  } else if (skillCounter === 6 || skillCounter === 5) {
    setOverallCount(overallCount += 4)
  } else if (skillCounter === 4) {
    setOverallCount(overallCount += 2)
  } else if (skillCounter === 3 || skillCounter === 2) {
    setOverallCount(overallCount += 1)
  }
}
function SkillRow(props) {
  //  props.setOverallCount(props.overallCount = reqCounter)
  const [skillCounter, setSkillCounter] = useState(1);
  const [reqCounter, setReqCounter] = useState(1);
  const [open, setOpen] = useState(false); // state opening different skill tripods


  useEffect(() => { // resets counters when switching Roles or reset button
    setSkillCounter(1); //initalize back to 1
    setReqCounter(1); // initalize back to 1
    setbtngrayscale_tier1_1('grayscale(100%)');
    setbtngrayscale_tier1_2('grayscale(100%)');
    setbtngrayscale_tier1_3('grayscale(100%)');
    setbtngrayscale_tier2_1('grayscale(100%)');
    setbtngrayscale_tier2_2('grayscale(100%)');
    setbtngrayscale_tier2_3('grayscale(100%)');
    setbtngrayscale_tier3_1('grayscale(100%)');
    setbtngrayscale_tier3_2('grayscale(100%)');

  }, [props.characterRole, props.reset]); // follows the state of characterRole , which is selected by RoleButton
  /**Tripod states */
  const [btnGrayscale_tier1_1, setbtngrayscale_tier1_1] = useState('grayscale(100%)');
  const [btnGrayscale_tier1_2, setbtngrayscale_tier1_2] = useState('grayscale(100%)');
  const [btnGrayscale_tier1_3, setbtngrayscale_tier1_3] = useState('grayscale(100%)');
  const [btnGrayscale_tier2_1, setbtngrayscale_tier2_1] = useState('grayscale(100%)');
  const [btnGrayscale_tier2_2, setbtngrayscale_tier2_2] = useState('grayscale(100%)');
  const [btnGrayscale_tier2_3, setbtngrayscale_tier2_3] = useState('grayscale(100%)');
  const [btnGrayscale_tier3_1, setbtngrayscale_tier3_1] = useState('grayscale(100%)');
  const [btnGrayscale_tier3_2, setbtngrayscale_tier3_2] = useState('grayscale(100%)');
  /***********/
  return <div>

    <Row aria-expanded={open} className="SkillCard mb-1 btn-outline-secondary">

      <Col sm='auto' xs={{ span: 2, order: 1 }} md={{ span: 'auto', order: 1 }} lg={{ span: 'auto', order: 1 }} className="img-container my-auto ">
        <OverlayTrigger placement="bottom-end" delay={{ show: 100, hide: 300 }}
          overlay={
            <Tooltip id="button-tooltip" >
              <Image className="skill-img border border-dark" height='48' width='48' src={props.skillImage}  ></Image>
              {props.skillName}
              {props.SkillDescription }
            </Tooltip>}
        >
          <Image className="skill-img border border-dark" height='48' width='48' src={props.skillImage}  ></Image>
        </OverlayTrigger>

      </Col>
      {/* onClick on col's makes Name/Points the only clickable area to open tripod*/}
      <Col onClick={() => {
        props.setSkillClicked(props.skillName)
        console.log(props.skillName)
        setOpen(!open)
      }} aria-controls="example-collapse-text" sm='3' xs={{ span: 3, order: 2 }} md={{ span: 3, order: 2 }} lg='4' className="SkillCard_skill_container my-auto ">
        <Stack className="SkillCard_skill" >
          <Col className="SkillCard_skill_type small " style={{ color: props.skillTypeColor }}>{props.skillType}</Col>
          <Col className="SkillCard_skill_name h6">{props.skillName}</Col>
        </Stack>
      </Col>

      <Col onClick={() => {
        props.setSkillClicked(props.skillName)
        console.log(props.skillName)
        setOpen(!open)
      }} aria-controls="example-collapse-text" sm='auto' xs={{ span: 1, order: 3 }} md={{ span: 2, order: 3 }} lg='2' className="SkillCard_reqtype text-center mx-auto my-auto ">
        <Stack gap='1'>
          <Col className="SkillCard_reqtype_point ">{reqCounter}</Col>
          <Col className="SkillCard_reqtype_text h6 small ">Req. Points</Col>
        </Stack>
      </Col>

      <Col onClick={() => {
        props.setSkillClicked(props.skillName)
        console.log(props.skillName)
        setOpen(!open)
      }} aria-controls="example-collapse-text" sm='auto' xs={{ span: 1, order: 4 }} md={{ span: 2, order: 4 }} lg='2' className="SkillCard_lvltype text-center mx-auto my-auto  ">
        <Stack gap='1'>
          <Col className="SkillCard_lvltype_point">{skillCounter}</Col>
          <Col className="SkillCard_lvltype_text h6 small">Skill Lv.</Col>
        </Stack>
      </Col>

      <Col xs={{ span: 2, order: 5 }} md={{ span: 1, order: 5 }} lg='1' className="SkillCard_buttons_container my-auto">
        <Stack >
          <Button size='sm' onClick={() => {
            if (skillCounter < 10) {
              setSkillCounter(skillCounter + 1);
              reqPointAdd(skillCounter, reqCounter, setReqCounter, props.setOverallCount, props.overallCount);
              addOverallCount(skillCounter, props.setOverallCount, props.overallCount)
              //damage function

            }
          }} className="SkillCard_buttons_plus fw-bold border border-dark d-flex justify-content-center">+</Button>

          <Button size='sm' onClick={() => {
            if (skillCounter > 1) {
              setSkillCounter(skillCounter - 1);
              reqPointMinus(skillCounter, reqCounter, setReqCounter, props.setOverallCount, props.overallCount);
              subOverallCount(skillCounter, props.setOverallCount, props.overallCount)
            }

          }} className="SkillCard_buttons_minus fw-bold border border-dark d-flex justify-content-center">-</Button>
        </Stack>
      </Col>

      <Col xs={{ span: 2, order: 5 }} md={{ span: 1, order: 5 }} lg='1' className="img-tripod-container mx-auto my-auto d-flex  justify-content-center" >
        {selectTier1Image(btnGrayscale_tier1_1, btnGrayscale_tier1_2, btnGrayscale_tier1_3, btnGrayscale_tier2_1, btnGrayscale_tier2_2, btnGrayscale_tier2_3, btnGrayscale_tier3_1, btnGrayscale_tier3_2)}
      </Col>
    </Row >
    <Collapse in={open} className=" mb-3 ">
      <Row>
        <TripodSkill skillClicked={props.skillName} btnGrayscale_tier1_1={btnGrayscale_tier1_1} btnGrayscale_tier1_2={btnGrayscale_tier1_2} btnGrayscale_tier1_3={btnGrayscale_tier1_3}
          btnGrayscale_tier2_1={btnGrayscale_tier2_1} btnGrayscale_tier2_2={btnGrayscale_tier2_2} btnGrayscale_tier2_3={btnGrayscale_tier2_3} btnGrayscale_tier3_1={btnGrayscale_tier3_1}
          btnGrayscale_tier3_2={btnGrayscale_tier3_2} setbtngrayscale_tier1_1={setbtngrayscale_tier1_1} setbtngrayscale_tier1_2={setbtngrayscale_tier1_2} setbtngrayscale_tier1_3={setbtngrayscale_tier1_3} setbtngrayscale_tier2_1={setbtngrayscale_tier2_1} setbtngrayscale_tier2_2={setbtngrayscale_tier2_2} setbtngrayscale_tier2_3={setbtngrayscale_tier2_3}
          setbtngrayscale_tier3_1={setbtngrayscale_tier3_1} setbtngrayscale_tier3_2={setbtngrayscale_tier3_2}
        />
      </Row>
    </Collapse>


  </div>
}

export default SkillRow;