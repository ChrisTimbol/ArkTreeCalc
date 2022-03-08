import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
function TriportSkill() {
    return <div>

        <Col className="Triport_Container_Inside border border-primary  ">
            <Row className="">
                <Col>
                    <hr class="hr--logo"></hr>
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
            <hr class="hr--logo"></hr>
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
            <hr class="hr--logo"></hr>
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
            <hr class="hr--logo"></hr>
        </Col>
    </div>
}
export default TriportSkill;