import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import { artilleristSkillNameText } from './skillName';
/* import createTripod from './createTripod'; */
//import Container from 'react-bootstrap/Container';


  
function createTripod(skillClicked) { 
    var defaultImg = require("./triportimages/Tripod_Tier_1_0.png");
    var skillImages = []

    //Artillerist
    if (skillClicked === artilleristSkillNameText[0]) {
        skillImages.push(require("./triportimages/Tripod_Tier_1_99.png"), require("./triportimages/Tripod_Tier_1_4.png"), require("./triportimages/Tripod_Tier_1_60.png"),
        require("./triportimages/Tripod_Tier_2_0.png"), require("./triportimages/Tripod_Tier_2_61.png"),  require("./triportimages/Tripod_Tier_2_6.png"), 
        require("./triportimages/Tripod_Tier_3_2.png"),  require("./triportimages/Tripod_Tier_3_13.png"));
 
    } 
    else if (skillClicked === artilleristSkillNameText[1]){
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_34.png"), require("./triportimages/Tripod_Tier_1_47.png"),
        require("./triportimages/Tripod_Tier_2_14.png"), require("./triportimages/Tripod_Tier_2_0.png"),  require("./triportimages/Tripod_Tier_2_7.png"),
        require("./triportimages/Tripod_Tier_3_53.png"),  require("./triportimages/Tripod_Tier_3_43.png"));
    }
    else if (skillClicked === artilleristSkillNameText[2]){
        skillImages.push(require("./triportimages/Tripod_Tier_1_21.png"), require("./triportimages/Tripod_Tier_1_60.png"), require("./triportimages/Tripod_Tier_1_33.png"),
        require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_2.png"),  require("./triportimages/Tripod_Tier_2_7.png"),
        require("./triportimages/Tripod_Tier_3_40.png"),  require("./triportimages/Tripod_Tier_3_13.png"));
    }
    else if (skillClicked === artilleristSkillNameText[3]){
        skillImages.push(require("./triportimages/Tripod_Tier_1_98.png"), require("./triportimages/Tripod_Tier_1_6.png"), require("./triportimages/Tripod_Tier_1_34.png"),
        require("./triportimages/Tripod_Tier_2_29.png"), require("./triportimages/Tripod_Tier_2_32.png"),  require("./triportimages/Tripod_Tier_2_0.png"),  
        require("./triportimages/Tripod_Tier_3_2.png"),  require("./triportimages/Tripod_Tier_3_13.png"));
    }
    else if (skillClicked === artilleristSkillNameText[4]){
        skillImages.push(require("./triportimages/Tripod_Tier_1_99.png"), require("./triportimages/Tripod_Tier_1_4.png"), require("./triportimages/Tripod_Tier_1_60.png"),
        require("./triportimages/Tripod_Tier_2_0.png"), require("./triportimages/Tripod_Tier_2_61.png"),  require("./triportimages/Tripod_Tier_2_6.png"),
        require("./triportimages/Tripod_Tier_3_2.png"),  require("./triportimages/Tripod_Tier_3_13.png"));
    }
    else if (skillClicked === artilleristSkillNameText[5]){
        skillImages.push(require("./triportimages/Tripod_Tier_1_99.png"), require("./triportimages/Tripod_Tier_1_4.png"), require("./triportimages/Tripod_Tier_1_60.png"),
        require("./triportimages/Tripod_Tier_2_0.png"), require("./triportimages/Tripod_Tier_2_61.png"),  require("./triportimages/Tripod_Tier_2_6.png"),
        require("./triportimages/Tripod_Tier_3_2.png"),  require("./triportimages/Tripod_Tier_3_13.png"));
    }
    else if (skillClicked === artilleristSkillNameText[6]){
        skillImages.push(require("./triportimages/Tripod_Tier_1_99.png"), require("./triportimages/Tripod_Tier_1_4.png"), require("./triportimages/Tripod_Tier_1_60.png"),
        require("./triportimages/Tripod_Tier_2_0.png"), require("./triportimages/Tripod_Tier_2_61.png"),  require("./triportimages/Tripod_Tier_2_6.png"),  
        require("./triportimages/Tripod_Tier_3_2.png"),  require("./triportimages/Tripod_Tier_3_13.png"));
    }
    else if (skillClicked === artilleristSkillNameText[7]){
        skillImages.push(require("./triportimages/Tripod_Tier_1_99.png"), require("./triportimages/Tripod_Tier_1_4.png"), require("./triportimages/Tripod_Tier_1_60.png"),
        require("./triportimages/Tripod_Tier_2_0.png"), require("./triportimages/Tripod_Tier_2_61.png"),  require("./triportimages/Tripod_Tier_2_6.png"),  
        require("./triportimages/Tripod_Tier_3_2.png"),  require("./triportimages/Tripod_Tier_3_13.png"));
    }
    else if (skillClicked === artilleristSkillNameText[8]){
        skillImages.push(require("./triportimages/Tripod_Tier_1_99.png"), require("./triportimages/Tripod_Tier_1_4.png"), require("./triportimages/Tripod_Tier_1_60.png"),
        require("./triportimages/Tripod_Tier_2_0.png"), require("./triportimages/Tripod_Tier_2_61.png"),  require("./triportimages/Tripod_Tier_2_6.png"),  
        require("./triportimages/Tripod_Tier_3_2.png"),  require("./triportimages/Tripod_Tier_3_13.png"));
    }
    else if (skillClicked === artilleristSkillNameText[9]){
        skillImages.push(require("./triportimages/Tripod_Tier_1_99.png"), require("./triportimages/Tripod_Tier_1_4.png"), require("./triportimages/Tripod_Tier_1_60.png"),
        require("./triportimages/Tripod_Tier_2_0.png"), require("./triportimages/Tripod_Tier_2_61.png"),  require("./triportimages/Tripod_Tier_2_6.png"),  
        require("./triportimages/Tripod_Tier_3_2.png"),  require("./triportimages/Tripod_Tier_3_13.png"));
    }
    else if (skillClicked === artilleristSkillNameText[10]){
        skillImages.push(require("./triportimages/Tripod_Tier_1_99.png"), require("./triportimages/Tripod_Tier_1_4.png"), require("./triportimages/Tripod_Tier_1_60.png"),
        require("./triportimages/Tripod_Tier_2_0.png"), require("./triportimages/Tripod_Tier_2_61.png"),  require("./triportimages/Tripod_Tier_2_6.png"),  
        require("./triportimages/Tripod_Tier_3_2.png"),  require("./triportimages/Tripod_Tier_3_13.png"));
    }
    else if (skillClicked === artilleristSkillNameText[11]){
        skillImages.push(require("./triportimages/Tripod_Tier_1_99.png"), require("./triportimages/Tripod_Tier_1_4.png"), require("./triportimages/Tripod_Tier_1_60.png"),
        require("./triportimages/Tripod_Tier_2_0.png"), require("./triportimages/Tripod_Tier_2_61.png"),  require("./triportimages/Tripod_Tier_2_6.png"),  
        require("./triportimages/Tripod_Tier_3_2.png"),  require("./triportimages/Tripod_Tier_3_13.png"));
    }
    else if (skillClicked === artilleristSkillNameText[12]){
        skillImages.push(require("./triportimages/Tripod_Tier_1_99.png"), require("./triportimages/Tripod_Tier_1_4.png"), require("./triportimages/Tripod_Tier_1_60.png"),
        require("./triportimages/Tripod_Tier_2_0.png"), require("./triportimages/Tripod_Tier_2_61.png"),  require("./triportimages/Tripod_Tier_2_6.png"),  
        require("./triportimages/Tripod_Tier_3_2.png"),  require("./triportimages/Tripod_Tier_3_13.png"));
    }
    else if (skillClicked === artilleristSkillNameText[13]){
        skillImages.push(require("./triportimages/Tripod_Tier_1_99.png"), require("./triportimages/Tripod_Tier_1_4.png"), require("./triportimages/Tripod_Tier_1_60.png"),
        require("./triportimages/Tripod_Tier_2_0.png"), require("./triportimages/Tripod_Tier_2_61.png"),  require("./triportimages/Tripod_Tier_2_6.png"),  
        require("./triportimages/Tripod_Tier_3_2.png"),  require("./triportimages/Tripod_Tier_3_13.png"));
    }
    else if (skillClicked === artilleristSkillNameText[14]){
        skillImages.push(require("./triportimages/Tripod_Tier_1_99.png"), require("./triportimages/Tripod_Tier_1_4.png"), require("./triportimages/Tripod_Tier_1_60.png"),
        require("./triportimages/Tripod_Tier_2_0.png"), require("./triportimages/Tripod_Tier_2_61.png"),  require("./triportimages/Tripod_Tier_2_6.png"),  
        require("./triportimages/Tripod_Tier_3_2.png"),  require("./triportimages/Tripod_Tier_3_13.png"));
    }
    else if (skillClicked === artilleristSkillNameText[15]){
        skillImages.push(require("./triportimages/Tripod_Tier_1_99.png"), require("./triportimages/Tripod_Tier_1_4.png"), require("./triportimages/Tripod_Tier_1_60.png"),
        require("./triportimages/Tripod_Tier_2_0.png"), require("./triportimages/Tripod_Tier_2_61.png"),  require("./triportimages/Tripod_Tier_2_6.png"),  
        require("./triportimages/Tripod_Tier_3_2.png"),  require("./triportimages/Tripod_Tier_3_13.png"));
    }
    else if (skillClicked === artilleristSkillNameText[16]){
        skillImages.push(require("./triportimages/Tripod_Tier_1_99.png"), require("./triportimages/Tripod_Tier_1_4.png"), require("./triportimages/Tripod_Tier_1_60.png"),
        require("./triportimages/Tripod_Tier_2_0.png"), require("./triportimages/Tripod_Tier_2_61.png"),  require("./triportimages/Tripod_Tier_2_6.png"),  
        require("./triportimages/Tripod_Tier_3_2.png"),  require("./triportimages/Tripod_Tier_3_13.png"));
    }
    else {
        return defaultImg;
    }
    return skillImages
  }
  
  //console.log(Object.values(tripodImages)[0])
    

function TripodSkill(props) {
    

    return <>

        <Col className="Triport_Container_Inside border border-dark ">
            <Row >
                <Col className="d-flex justify-content-center">
                    <Col className="tripodline-1 "></Col>
                    <Image fluid='true' roundedCircle='true' src={require("./images/tier1.png")} className="Triport-tier1" ></Image>
                    <Col className="tripodline-2"></Col>
                </Col>
            </Row>
            <Row className="Triport_tier1_row ">
                <Col className="Triport_Image_Col d-flex justify-content-center">
                    <figure>
                        <Image src={createTripod(props.skillClicked)[0]} className="Tripod-img-1 " width='48' height='48'></Image>
                        <figcaption className="figure-caption">Skill</figcaption>
                    </figure>
                </Col>
                <Col className="Triport_Image_Col d-flex justify-content-center">
                    <figure>
                        <Image src={ createTripod(props.skillClicked)[1]} className="Tripod-img-2 " width='48' height='48'></Image>
                        <figcaption className="figure-caption">Skill</figcaption>
                    </figure>
                </Col>
                <Col className="Triport_Image_Col d-flex justify-content-center">
                    <figure>
                        <Image src={createTripod(props.skillClicked)[2]} className="Tripod-img-3 " width='48' height='48'></Image>
                        <figcaption className="figure-caption">Skill</figcaption>
                    </figure>
                </Col>
            </Row>
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
                        <Image src={createTripod(props.skillClicked)[3]} className="Tripod-img-4 " width='48' height='48'></Image>
                        <figcaption className="figure-caption">Skill</figcaption>
                    </figure>
                </Col>
                <Col className="Triport_Image_Col d-flex justify-content-center">
                    <figure>
                        <Image src={createTripod(props.skillClicked)[4]} className="Tripod-img-5 " width='48' height='48'></Image>
                        <figcaption className="figure-caption">Skill</figcaption>
                    </figure>
                </Col>
                <Col className="Triport_Image_Col d-flex justify-content-center">
                    <figure>
                        <Image src={createTripod(props.skillClicked)[5]} className="Tripod-img-6 " width='48' height='48'></Image>
                        <figcaption className="figure-caption">Skill</figcaption>
                    </figure>
                </Col>
            </Row>
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
                        <Image src={createTripod(props.skillClicked)[6]} className="Tripod-img-7 " width='48' height='48'></Image>
                        <figcaption className="figure-caption">Skill</figcaption>
                    </figure>

                </Col>

                <Col className="Triport_Image_Col  d-flex justify-content-center">
                    <figure>
                        <Image fluid='true' src={createTripod(props.skillClicked)[7]} className="Tripod-img-8 " width='48' height='48'></Image>
                        <figcaption className="figure-caption">Skill</figcaption>
                    </figure>
                </Col>
            </Row>
            <Row>
                <hr></hr>
            </Row>
        </Col>
    </>
}
export default TripodSkill;