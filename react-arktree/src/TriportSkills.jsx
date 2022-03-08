import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
function TriportSkill() {
    return <div>
        <Container fluid className="Triport-Container">
            <Col sm='3' className="Triport_Col border border-primary ">
                <Col className="Triport_Container_Inside border border-primary  ">
                    <Row className="">
                        <Col>
                            <hr class="hr--logo"></hr>
                        </Col>
                    </Row>
                    <Row className="Triport_tier1_row ">
                        <Col className="Triport_Image_Col d-flex justify-content-center">
                            <Image src={require("./images/Artillerist/Tripod_Tier_1_4.png")} className="Triport-img-1 d-flex"></Image>
                        </Col>
                        <Col className="Triport_Image_Col d-flex justify-content-center">
                            <Image src={require("./images/Artillerist/Tripod_Tier_1_4.png")} className="Triport-img-2 d-flex"></Image>
                        </Col>
                        <Col className="Triport_Image_Col d-flex justify-content-center">
                            <Image src={require("./images/Artillerist/Tripod_Tier_1_4.png")} className="Triport-img-3 d-flex"></Image>
                        </Col>
                    </Row>
                    <hr class="hr--logo"></hr>
                    <Row className="Triport_tier2_row ">
                        <Col className="Triport_Image_Col d-flex justify-content-center">
                            <Image src={require("./images/Artillerist/Tripod_Tier_1_4.png")} className="Triport-img-4 d-flex"></Image>
                        </Col>
                        <Col className="Triport_Image_Col d-flex justify-content-center">
                            <Image src={require("./images/Artillerist/Tripod_Tier_1_4.png")} className="Triport-img-5 d-flex"></Image>
                        </Col>
                        <Col className="Triport_Image_Col d-flex justify-content-center">
                            <Image src={require("./images/Artillerist/Tripod_Tier_1_4.png")} className="Triport-img-6 d-flex"></Image>
                        </Col>
                    </Row>
                    <hr class="hr--logo"></hr>
                    <Row className="Triport_tier3_row">
                        <Col className="Triport_Image_Col d-flex justify-content-center">
                            <Image src={require("./images/Artillerist/Tripod_Tier_1_4.png")} className="Triport-img-7 d-flex"></Image>
                        </Col>
                        <Col className="Triport_Image_Col d-flex justify-content-center">
                            <Image src={require("./images/Artillerist/Tripod_Tier_1_4.png")} className="Triport-img-8 d-flex"></Image>
                        </Col>
                    </Row>
                    <hr class="hr--logo"></hr>
                </Col>
            </Col>
        </Container>
    </div>
}
export default TriportSkill;