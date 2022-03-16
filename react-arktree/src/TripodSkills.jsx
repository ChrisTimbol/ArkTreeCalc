import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import { artilleristSkillNameText } from './skillName';
/* import createTripod from './createTripod'; */
//import Container from 'react-bootstrap/Container';


  
function createTripod(skillClicked) { 
    var skillImages = []
    if (skillClicked === artilleristSkillNameText[0]) {
        skillImages.push(require("./triportimages/Tripod_Tier_1_99.png"), require("./triportimages/Tripod_Tier_1_4.png"));
        return skillImages;
    }
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
                        <Image src={require("./triportimages/Tripod_Tier_1_99.png")} className="Tripod-img-3 " width='48' height='48'></Image>
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
                        <Image src={require("./triportimages/Tripod_Tier_1_99.png")} className="Tripod-img-4 " width='48' height='48'></Image>
                        <figcaption className="figure-caption">Skill</figcaption>
                    </figure>
                </Col>
                <Col className="Triport_Image_Col d-flex justify-content-center">
                    <figure>
                        <Image src={require("./triportimages/Tripod_Tier_1_99.png")} className="Tripod-img-5 " width='48' height='48'></Image>
                        <figcaption className="figure-caption">Skill</figcaption>
                    </figure>
                </Col>
                <Col className="Triport_Image_Col d-flex justify-content-center">
                    <figure>
                        <Image src={require("./triportimages/Tripod_Tier_1_99.png")} className="Tripod-img-6 " width='48' height='48'></Image>
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
                        <Image src={require("./triportimages/Tripod_Tier_1_99.png")} className="Tripod-img-7 " width='48' height='48'></Image>
                        <figcaption className="figure-caption">Skill</figcaption>
                    </figure>

                </Col>

                <Col className="Triport_Image_Col  d-flex justify-content-center">
                    <figure>
                        <Image fluid='true' src={ require("./triportimages/Tripod_Tier_1_99.png")} className="Tripod-img-8 " width='48' height='48'></Image>
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