import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import TripodSkill from "./TripodSkills";
import Collapse from 'react-bootstrap/Collapse'
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
  const [open, setOpen] = useState(false); // state opening different skill tripods
  useEffect(() => { // resets counters when switching Roles
    setSkillCounter(1); //initalize back to 1
    setReqCounter(1); // initalize back to 1
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
  /** */

  return <div>

    <Row className= "flex-nowrap">
     
      <Col xs='7' md="7" lg="8" className="SkillRowColumn ">

        <Row onClick={() => {
          props.setSkillClicked(props.skillName)
          console.log(props.skillClicked) 
          setOpen(!open)

        }} aria-controls="example-collapse-text" aria-expanded={open} className="SkillCard mb-1  btn-outline-secondary">

          <Col sm='auto' xs={{ span: 3, order: 1 }} md={{ span: 'auto', order: 1 }} lg={{ span: 'auto', order: 1 }} className="img-container my-auto">
            <Image className="skill-img border border-dark" height='48' width='48' src={props.skillImage}  ></Image>
          </Col>
          <Col sm='3' xs={{ span: 9, order: 2 }} md={{ span: 3, order: 2 }} lg='4' className="SkillCard_skill_container my-auto ">
            <Stack className="SkillCard_skill" >
              <Col className="SkillCard_skill_type ">{props.skillType}</Col>
              <Col className="SkillCard_skill_name">{props.skillName}</Col>
            </Stack>
          </Col>
   
          <Col sm='auto' xs={{ span: 3, order: 3 }} md={{ span: 2, order: 3 }} lg='2' className="SkillCard_reqtype text-center my-auto ">
            <Stack gap='1'>
              <Col className="SkillCard_reqtype_point  ">{reqCounter}</Col>
              <Col className="SkillCard_reqtype_text h6">Req. Points</Col>
            </Stack>
          </Col>

          <Col sm='auto' xs={{ span: 3, order: 4 }} md={{ span: 2, order: 4 }} lg='2' className="SkillCard_lvltype text-center my-auto  ">
            <Stack gap='1'>
              <Col className="SkillCard_lvltype_point">{skillCounter}</Col>
              <Col className="SkillCard_lvltype_text h6">Skill Lv.</Col>
            </Stack>
          </Col>

          <Col xs={{ span: 3, order: 5 }} md={{ span: 2, order: 5 }} lg='1' className="SkillCard_buttons_container my-auto">
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

          <Col xs={{ span: 3, order: 5 }} md={{ span: 1, order: 5 }} lg='1' className="img-tripod-container my-auto d-flex  justify-content-center " >
            <Image src={require("./images/tripod.png")} className="tripod-img" width="50px " ></Image>
          </Col>
        </Row>
      </Col>

    {/*******End of SkillCard rows********************/}
      <Col xs='5' md="3" lg="" className="TripodColumn border border-primary position-static">

        {/* Collapsable tripodtree*/}
        <Collapse in={open} className="position-absolute"> 
          <div id="example-collapse-text">
            {/*******************Tripod Container***********************************************************/} 
          <Col className="Triport_Container_Inside border border-dark ">
            <Row >
                <Col className="d-flex justify-content-center">
                    <Col className="tripodline-1 "></Col>
                    <Image fluid='true' roundedCircle='true' src={require("./images/tier1.png")} className="Triport-tier1" ></Image>
                    <Col className="tripodline-2"></Col>
                </Col>
            </Row>
            {/****************Tier1*************************/}

            <Row className="Triport_tier1_row ">
                <Col className="Triport_Image_Col d-flex justify-content-center">
                    <figure>
                        <Image onClick={() => {
                            if (btnGrayscale_tier1_1 === "grayscale(100%)") {
                                setbtngrayscale_tier1_1("grayscale(0%)");
                                setbtngrayscale_tier1_2("grayscale(100%)");
                                setbtngrayscale_tier1_3("grayscale(100%)");
                            }
                            else {
                                setbtngrayscale_tier1_1("grayscale(100%)");
                                setbtngrayscale_tier1_2("grayscale(100%)");
                                setbtngrayscale_tier1_3("grayscale(100%)");
                            }
                        }} style={{ filter: btnGrayscale_tier1_1 }} src={require("./triportimages/Tripod_Tier_1_98.png")} className="Tripod-img " width='48' height='48'></Image>
                        <figcaption className="figure-caption ">{"SkillName"}</figcaption>
                    </figure>
                </Col>
                <Col className="Triport_Image_Col d-flex justify-content-center">
                    <figure>
                        <Image onClick={() => {
                            if (btnGrayscale_tier1_2 === "grayscale(100%)") {
                                setbtngrayscale_tier1_1("grayscale(100%)");
                                setbtngrayscale_tier1_2("grayscale(0%)");
                                setbtngrayscale_tier1_3("grayscale(100%)");
                            }
                            else {
                                setbtngrayscale_tier1_1("grayscale(100%)");
                                setbtngrayscale_tier1_2("grayscale(100%)");
                                setbtngrayscale_tier1_3("grayscale(100%)");
                            }
                        }} style={{ filter: btnGrayscale_tier1_2 }} src={require("./triportimages/Tripod_Tier_1_98.png")} className="Tripod-img " width='48' height='48'></Image>
                        <figcaption className="figure-caption">{"SkillName"}</figcaption>
                    </figure>
                </Col>
                <Col className="Triport_Image_Col d-flex justify-content-center">
                    <figure>
                        <Image onClick={() => {
                            if (btnGrayscale_tier1_3 === "grayscale(100%)") {
                                setbtngrayscale_tier1_1("grayscale(100%)");
                                setbtngrayscale_tier1_2("grayscale(100%)");
                                setbtngrayscale_tier1_3("grayscale(0%)");
                            }
                            else {
                                setbtngrayscale_tier1_1("grayscale(100%)");
                                setbtngrayscale_tier1_2("grayscale(100%)");
                                setbtngrayscale_tier1_3("grayscale(100%)");
                            }
                        }} style={{ filter: btnGrayscale_tier1_3 }} src={require("./triportimages/Tripod_Tier_1_98.png")} className="Tripod-img " width='48' height='48'></Image>
                        <figcaption className="figure-caption">{"SkillName"}</figcaption>
                    </figure>
                </Col>
            </Row>
            {/**********************End Of Tier1*****************/}
            {/*************************Tier 2*******************/}
            <Row >
                <Col className="d-flex justify-content-center">
                    <Col className="tripodline-1 "></Col>
                    <Image fluid='true' roundedCircle='true' src={require("./images/tier2.png")} className="Tripod-tier2" ></Image>
                    <Col className="tripodline-2"></Col>
                </Col>
            </Row>
            <Row className="Triport_tier2_row ">
                <Col className="Triport_Image_Col d-flex justify-content-center">
                    <figure>
                        <Image onClick={() => {
                            if (btnGrayscale_tier2_1 === "grayscale(100%)" && (btnGrayscale_tier1_1 === "grayscale(0%)" || btnGrayscale_tier1_2 === "grayscale(0%)" || btnGrayscale_tier1_3 === "grayscale(0%)"  ) ) {
                                setbtngrayscale_tier2_1("grayscale(0%)");
                                setbtngrayscale_tier2_2("grayscale(100%)");
                                setbtngrayscale_tier2_3("grayscale(100%)");
                            }
                            else {
                                setbtngrayscale_tier2_1("grayscale(100%)");
                                setbtngrayscale_tier2_2("grayscale(100%)");
                                setbtngrayscale_tier2_3("grayscale(100%)");
                            }
                        }} style={{ filter: btnGrayscale_tier2_1 }} src={require("./triportimages/Tripod_Tier_1_98.png")} className="Tripod-img " width='48' height='48'></Image>
                        <figcaption className="figure-caption">{"SkillName"}</figcaption>
                    </figure>
                </Col>
                <Col className="Triport_Image_Col d-flex justify-content-center">
                    <figure>
                        <Image onClick={() => {
                            if (btnGrayscale_tier2_2 === "grayscale(100%)" && (btnGrayscale_tier1_1 === "grayscale(0%)" || btnGrayscale_tier1_2 === "grayscale(0%)" || btnGrayscale_tier1_3 === "grayscale(0%)"  )) {
                                setbtngrayscale_tier2_1("grayscale(100%)");
                                setbtngrayscale_tier2_2("grayscale(0%)");
                                setbtngrayscale_tier2_3("grayscale(100%)");
                            }
                            else {
                                setbtngrayscale_tier2_1("grayscale(100%)");
                                setbtngrayscale_tier2_2("grayscale(100%)");
                                setbtngrayscale_tier2_3("grayscale(100%)");
                            }
                        }} style={{ filter: btnGrayscale_tier2_2 }}src={require("./triportimages/Tripod_Tier_1_98.png")} className="Tripod-img " width='48' height='48'></Image>
                        <figcaption className="figure-caption">{"SkillName"}</figcaption>
                    </figure>
                </Col>
                <Col className="Triport_Image_Col d-flex justify-content-center">
                    <figure>
                        <Image onClick={() => {
                            if (btnGrayscale_tier2_3 === "grayscale(100%)" && (btnGrayscale_tier1_1 === "grayscale(0%)" || btnGrayscale_tier1_2 === "grayscale(0%)" || btnGrayscale_tier1_3 === "grayscale(0%)"  )) {
                                setbtngrayscale_tier2_1("grayscale(100%)");
                                setbtngrayscale_tier2_2("grayscale(100%)");
                                setbtngrayscale_tier2_3("grayscale(0%)");
                            }
                            else {
                                setbtngrayscale_tier2_1("grayscale(100%)");
                                setbtngrayscale_tier2_2("grayscale(100%)");
                                setbtngrayscale_tier2_3("grayscale(100%)");
                            }
                        }} style={{ filter: btnGrayscale_tier2_3 }}src={require("./triportimages/Tripod_Tier_1_98.png")} className="Tripod-img " width='48' height='48'></Image>
                        <figcaption className="figure-caption">{"SkillName"}</figcaption>
                    </figure>
                </Col>
            </Row>
            {/****End of Tier2 */} 
            {/**Tier3 *********/}
            <Row >
                <Col className="d-flex justify-content-center">
                    <Col className="tripodline-1 "></Col>
                    <Image fluid='true' roundedCircle='true' src={require("./images/tier3.png")} className="Tripod-tier1" ></Image>
                    <Col className="tripodline-2"></Col>
                </Col>
            </Row>
            <Row className="Triport_tier3_row   ">
                <Col className="Triport_Image_Col   d-flex justify-content-center">
                    <figure>
                        <Image onClick={() => {
                            if (btnGrayscale_tier3_1 === "grayscale(100%)" && (btnGrayscale_tier2_1 === "grayscale(0%)" || btnGrayscale_tier2_2 === "grayscale(0%)" || btnGrayscale_tier2_3 === "grayscale(0%)"  )) {
                                setbtngrayscale_tier3_1("grayscale(0%)");
                                setbtngrayscale_tier3_2("grayscale(100%)");
                            }
                            else {
                                setbtngrayscale_tier3_1("grayscale(100%)");
                                setbtngrayscale_tier3_2("grayscale(100%)");
                            }
                        }} style={{ filter: btnGrayscale_tier3_1 }}src={require("./triportimages/Tripod_Tier_1_98.png")} className="Tripod-img " width='48' height='48'></Image>
                        <figcaption className="figure-caption">{"SkillName"}</figcaption>
                    </figure>

                </Col>

                <Col className="Triport_Image_Col  d-flex justify-content-center">
                    <figure>
                        <Image fluid='true' onClick={() => {
                            if (btnGrayscale_tier3_2 === "grayscale(100%)" && (btnGrayscale_tier2_1 === "grayscale(0%)" || btnGrayscale_tier2_2 === "grayscale(0%)" || btnGrayscale_tier2_3 === "grayscale(0%)"  )) {
                                setbtngrayscale_tier3_1("grayscale(100%)");
                                setbtngrayscale_tier3_2("grayscale(0%)");
                            }
                            else {
                                setbtngrayscale_tier3_1("grayscale(100%)");
                                setbtngrayscale_tier3_2("grayscale(100%)");
                            }
                        }} style={{ filter: btnGrayscale_tier3_2 }}src={require("./triportimages/Tripod_Tier_1_98.png")} className="Tripod-img " width='48' height='48'></Image>
                        <figcaption className="figure-caption">{"SkillName"}</figcaption>
                    </figure>
                </Col>
            </Row>
            <Row>
                <hr></hr>
            </Row>
        </Col>
          </div>
        </Collapse>
      </Col>
      {/*******************End of Tripod********************************************/} 
      </Row>
  </div>
}

export default SkillRow;