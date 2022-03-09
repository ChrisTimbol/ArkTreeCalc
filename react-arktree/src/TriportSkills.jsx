import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
//import Container from 'react-bootstrap/Container';
function TriportSkill() {
    return <div>

        <Col className="Triport_Container_Inside border border-dark  ">
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
                        <Image  src={require("./images/Artillerist/Tripod_Tier_1_4.png")} className="Triport-img-1 " width='48' height='48'></Image>
                        <figcaption class="figure-caption">Skill</figcaption>
                    </figure>
                </Col>
                <Col className="Triport_Image_Col d-flex justify-content-center">
                    <figure>
                        <Image  src={require("./images/Artillerist/Tripod_Tier_1_4.png")} className="Triport-img-1 " width='48' height='48'></Image>
                        <figcaption class="figure-caption">Skill</figcaption>
                    </figure>
                </Col>
                <Col className="Triport_Image_Col d-flex justify-content-center">
                    <figure>
                        <Image  src={require("./images/Artillerist/Tripod_Tier_1_4.png")} className="Triport-img-1 " width='48' height='48'></Image>
                        <figcaption class="figure-caption">Skill</figcaption>
                    </figure>
                </Col>
            </Row>
            <Row >
                <Col className="d-flex justify-content-center">
                <Col className="tripodline-1 "></Col>
                <Image fluid='true' roundedCircle='true' src={require("./images/tier2.png")} className="Triport-tier1" ></Image>
                    <Col className="tripodline-2"></Col>
                </Col>
            </Row>
            <Row className="Triport_tier2_row ">
                <Col className="Triport_Image_Col d-flex justify-content-center">
                    <figure>
                        <Image  src={require("./images/Artillerist/Tripod_Tier_1_4.png")} className="Triport-img-1 " width='48' height='48'></Image>
                        <figcaption class="figure-caption">Skill</figcaption>
                    </figure>
                </Col>
                <Col className="Triport_Image_Col d-flex justify-content-center">
                    <figure>
                        <Image  src={require("./images/Artillerist/Tripod_Tier_1_4.png")} className="Triport-img-1 " width='48' height='48'></Image>
                        <figcaption class="figure-caption">Skill</figcaption>
                    </figure>
                </Col>
                <Col className="Triport_Image_Col d-flex justify-content-center">
                    <figure>
                        <Image src={require("./images/Artillerist/Tripod_Tier_1_4.png")} className="Triport-img-1 " width='48' height='48'></Image>
                        <figcaption class="figure-caption">Skill</figcaption>
                    </figure>
                </Col>
            </Row>
            <Row >
                <Col className="d-flex justify-content-center">
                <Col className="tripodline-1 "></Col>
                <Image fluid='true' roundedCircle='true' src={require("./images/tier3.png")} className="Triport-tier1" ></Image>
                    <Col className="tripodline-2"></Col>
                </Col>
            </Row>
            <Row className="Triport_tier3_row   ">
                <Col className="Triport_Image_Col   d-flex justify-content-center">
                    <figure>
                        <Image   src={require("./images/Artillerist/Tripod_Tier_1_4.png")} className="Triport-img-1 " width='48' height='48'></Image>
                        <figcaption class="figure-caption">Skill</figcaption>
                    </figure>
       
                </Col>
        
                <Col className="Triport_Image_Col  d-flex justify-content-center">
                    <figure>
                        <Image fluid='true'  src={require("./images/Artillerist/Tripod_Tier_1_4.png")} className="Triport-img-1 " width='48' height='48'></Image>
                        <figcaption class="figure-caption">Skill</figcaption>
                    </figure>
                </Col>
            </Row>
            <Row>
                <hr></hr>
            </Row>
        </Col>
    </div>
}
export default TriportSkill;