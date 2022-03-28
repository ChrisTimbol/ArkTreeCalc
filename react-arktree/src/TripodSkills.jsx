import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import tier1img from "./images/tier1.png"
import tier2img from "./images/tier2.png"
import tier3img from "./images/tier3.png"
import tier1color from "./images/tier1color.png"
import tier2color from "./images/tier2color.png"
import tier3color from "./images/tier3color.png"
import createTripod from './skillName.js'
/* import createTripod from './createTripod'; */
//import Container from 'react-bootstrap/Container';





// Display tripod as grey until clicked
// Coloring for Combo
// stic
function selectTier1Image(btnGrayscale_tier_1, btnGrayscale_tier_2, btnGrayscale_tier_3) {
    if (btnGrayscale_tier_1 === 'grayscale(0%)' || btnGrayscale_tier_2 === 'grayscale(0%)'|| btnGrayscale_tier_3 === 'grayscale(0%)'){
        return <Image fluid='true' roundedCircle='true' src={tier1color} className="Triport-tier1-img" ></Image>
    }
    else {
        return <Image fluid='true' roundedCircle='true' src={tier1img} className="Triport-tier1-img" ></Image>
    }
}

function selectTier2Image(btnGrayscale_tier_1, btnGrayscale_tier_2, btnGrayscale_tier_3) {
    if (btnGrayscale_tier_1 === 'grayscale(0%)' || btnGrayscale_tier_2 === 'grayscale(0%)'|| btnGrayscale_tier_3 === 'grayscale(0%)'){
        return <Image fluid='true' roundedCircle='true' src={tier2color}className="Triport-tier1-img" ></Image>
    }
    else {
        return <Image fluid='true' roundedCircle='true' src={tier2img}className="Triport-tier1-img" ></Image>
    }
}

function selectTier3Image(btnGrayscale_tier_1, btnGrayscale_tier_2) {
    if (btnGrayscale_tier_1 === 'grayscale(0%)' || btnGrayscale_tier_2 === 'grayscale(0%)'){
        return <Image fluid='true' roundedCircle='true' src={tier3color}className="Triport-tier1-img" ></Image>
    }
    else {
        return <Image fluid='true' roundedCircle='true' src={tier3img}className="Triport-tier1-img" ></Image>
    }
}
/* if (btnGrayscale_tier1_1 !== "grayscale(0%)" || btnGrayscale_tier1_2 === "grayscale(0%)" || btnGrayscale_tier1_3 === "grayscale(0%)") { */
function TripodSkill(props) {


  
    return <>
       <Col className="Triport_Container_Inside border border-dark ">
            <Row >
                <Col className="d-flex justify-content-center">
                    <Col className="tripodline-1 "></Col>
                    {selectTier1Image(props.btnGrayscale_tier1_1,props.btnGrayscale_tier1_2,props.btnGrayscale_tier1_3)}
                    <Col className="tripodline-2"></Col>
                </Col>
            </Row>
            {/****************Tier1*************************/}

            <Row className="Triport_tier1_row ">
          {/*       {console.log(createTripod(props.skillClicked))} */}
                <Col  className="Triport_Image_Col d-flex justify-content-center">
                    <figure>
                        <Image onClick={() => {
                            if (props.btnGrayscale_tier1_1 === "grayscale(100%)") {
                                props.setbtngrayscale_tier1_1("grayscale(0%)");
                                props.setbtngrayscale_tier1_2("grayscale(100%)");
                                props.setbtngrayscale_tier1_3("grayscale(100%)");
                            }
                            else {
                                props.setbtngrayscale_tier1_1("grayscale(100%)");
                                props.setbtngrayscale_tier1_2("grayscale(100%)");
                                props.setbtngrayscale_tier1_3("grayscale(100%)");
                            }
                        }} style={{ filter: props.btnGrayscale_tier1_1 }} src={createTripod(props.skillClicked)[0][0]}className="Tripod-img d-flex justify-content-center" width='48' height='48'></Image>
                        <figcaption className="figure-caption d-flex justify-content-center">{createTripod(props.skillClicked)[1][0]}</figcaption>
                    </figure>
                </Col>
                <Col className="Triport_Image_Col d-flex justify-content-center">
                    <figure>
                        <Image onClick={() => {
                            if (props.btnGrayscale_tier1_2 === "grayscale(100%)") {
                                props.setbtngrayscale_tier1_1("grayscale(100%)");
                                props.setbtngrayscale_tier1_2("grayscale(0%)");
                                props.setbtngrayscale_tier1_3("grayscale(100%)");
                            }
                            else {
                                props.setbtngrayscale_tier1_1("grayscale(100%)");
                                props.setbtngrayscale_tier1_2("grayscale(100%)");
                                props.setbtngrayscale_tier1_3("grayscale(100%)");
                            }
                        }} style={{ filter: props.btnGrayscale_tier1_2 }} src={createTripod(props.skillClicked)[0][1]} className="Tripod-img d-flex justify-content-center" width='48' height='48'></Image>
                        <figcaption className="figure-caption d-flex justify-content-center">{createTripod(props.skillClicked)[1][1]}</figcaption>
                    </figure>
                </Col>
                <Col className="Triport_Image_Col d-flex justify-content-center">
                    <figure>
                        <Image onClick={() => {
                            if (props.btnGrayscale_tier1_3 === "grayscale(100%)") {
                                props.setbtngrayscale_tier1_1("grayscale(100%)");
                                props.setbtngrayscale_tier1_2("grayscale(100%)");
                                props.setbtngrayscale_tier1_3("grayscale(0%)");
                            }
                            else {
                                props.setbtngrayscale_tier1_1("grayscale(100%)");
                                props.setbtngrayscale_tier1_2("grayscale(100%)");
                                props.setbtngrayscale_tier1_3("grayscale(100%)");
                            }
                        }} style={{ filter: props.btnGrayscale_tier1_3 }} src={createTripod(props.skillClicked)[0][2]} className="Tripod-img  d-flex justify-content-center" width='48' height='48'></Image>
                        <figcaption className="figure-caption d-flex justify-content-center">{createTripod(props.skillClicked)[1][2]}</figcaption>
                    </figure>
                </Col>
            </Row>
            {/**********************End Of Tier1*****************/}
            {/*************************Tier 2*******************/}
            <Row >
                <Col className="d-flex justify-content-center">
                    <Col className="tripodline-1 "></Col>
                    {selectTier2Image(props.btnGrayscale_tier2_1,props.btnGrayscale_tier2_2,props.btnGrayscale_tier2_3)}
                    <Col className="tripodline-2"></Col>
                </Col>
            </Row>
            <Row className="Triport_tier2_row ">
                <Col className="Triport_Image_Col d-flex justify-content-center">
                    <figure>
                        <Image onClick={() => {
                            if (props.btnGrayscale_tier2_1 === "grayscale(100%)" && (props.btnGrayscale_tier1_1 === "grayscale(0%)" || props.btnGrayscale_tier1_2 === "grayscale(0%)" || props.btnGrayscale_tier1_3 === "grayscale(0%)"  ) ) {
                                props.setbtngrayscale_tier2_1("grayscale(0%)");
                                props.setbtngrayscale_tier2_2("grayscale(100%)");
                                props.setbtngrayscale_tier2_3("grayscale(100%)");
                            }
                            else {
                                props.setbtngrayscale_tier2_1("grayscale(100%)");
                                props.setbtngrayscale_tier2_2("grayscale(100%)");
                                props.setbtngrayscale_tier2_3("grayscale(100%)");
                            }
                        }} style={{ filter: props.btnGrayscale_tier2_1 }} src={createTripod(props.skillClicked)[0][3]} className="Tripod-img" width='48' height='48'></Image>
                        <figcaption className="figure-caption">{createTripod(props.skillClicked)[1][3]}</figcaption>
                    </figure>
                </Col>
                <Col className="Triport_Image_Col d-flex justify-content-center">
                    <figure>
                        <Image onClick={() => {
                            if (props.btnGrayscale_tier2_2 === "grayscale(100%)" && (props.btnGrayscale_tier1_1 === "grayscale(0%)" || props.btnGrayscale_tier1_2 === "grayscale(0%)" || props.btnGrayscale_tier1_3 === "grayscale(0%)"  )) {
                                props.setbtngrayscale_tier2_1("grayscale(100%)");
                                props.setbtngrayscale_tier2_2("grayscale(0%)");
                                props.setbtngrayscale_tier2_3("grayscale(100%)");
                            }
                            else {
                                props.setbtngrayscale_tier2_1("grayscale(100%)");
                                props.setbtngrayscale_tier2_2("grayscale(100%)");
                                props.setbtngrayscale_tier2_3("grayscale(100%)");
                            }
                        }} style={{ filter: props.btnGrayscale_tier2_2 }}src={createTripod(props.skillClicked)[0][4]} className="Tripod-img d-flex justify-content-center" width='48' height='48'></Image>
                        <figcaption className="figure-caption d-flex justify-content-center">{createTripod(props.skillClicked)[1][4]}</figcaption>
                    </figure>
                </Col>
                <Col className="Triport_Image_Col d-flex justify-content-center">
                    <figure>
                        <Image onClick={() => {
                            if (props.btnGrayscale_tier2_3 === "grayscale(100%)" && (props.btnGrayscale_tier1_1 === "grayscale(0%)" || props.btnGrayscale_tier1_2 === "grayscale(0%)" || props.btnGrayscale_tier1_3 === "grayscale(0%)"  )) {
                                props.setbtngrayscale_tier2_1("grayscale(100%)");
                                props.setbtngrayscale_tier2_2("grayscale(100%)");
                                props.setbtngrayscale_tier2_3("grayscale(0%)");
                            }
                            else {
                                props.setbtngrayscale_tier2_1("grayscale(100%)");
                                props.setbtngrayscale_tier2_2("grayscale(100%)");
                                props.setbtngrayscale_tier2_3("grayscale(100%)");
                            }
                        }} style={{ filter: props.btnGrayscale_tier2_3 }}src={createTripod(props.skillClicked)[0][5]} className="Tripod-img d-flex justify-content-center" width='48' height='48'></Image>
                        <figcaption className="figure-caption d-flex justify-content-center">{createTripod(props.skillClicked)[1][5]}</figcaption>
                    </figure>
                </Col>
            </Row>
            {/****End of Tier2 */} 
            {/**Tier3 *********/}
            <Row >
                <Col className="d-flex justify-content-center">
                    <Col className="tripodline-1 "></Col>
                    {selectTier3Image(props.btnGrayscale_tier3_1,props.btnGrayscale_tier3_2)}
                    <Col className="tripodline-2"></Col>
                </Col>
            </Row>
            <Row className="Triport_tier3_row   ">
                <Col className="Triport_Image_Col   d-flex justify-content-center">
                    <figure>
                        <Image onClick={() => {
                            if (props.btnGrayscale_tier3_1 === "grayscale(100%)" && (props.btnGrayscale_tier2_1 === "grayscale(0%)" || props.btnGrayscale_tier2_2 === "grayscale(0%)" || props.btnGrayscale_tier2_3 === "grayscale(0%)"  )) {
                                props.setbtngrayscale_tier3_1("grayscale(0%)");
                                props.setbtngrayscale_tier3_2("grayscale(100%)");
                            }
                            else {
                                props.setbtngrayscale_tier3_1("grayscale(100%)");
                                props.setbtngrayscale_tier3_2("grayscale(100%)");
                            }
                        }} style={{ filter: props.btnGrayscale_tier3_1 }}src={createTripod(props.skillClicked)[0][6]} className="Tripod-img " width='48' height='48'></Image>
                        <figcaption className="figure-caption">{createTripod(props.skillClicked)[1][6]}</figcaption>
                    </figure>

                </Col>

                <Col className="Triport_Image_Col  d-flex justify-content-center">
                    <figure>
                        <Image fluid='true' onClick={() => {
                            if (props.btnGrayscale_tier3_2 === "grayscale(100%)" && (props.btnGrayscale_tier2_1 === "grayscale(0%)" || props.btnGrayscale_tier2_2 === "grayscale(0%)" || props.btnGrayscale_tier2_3 === "grayscale(0%)"  )) {
                                props.setbtngrayscale_tier3_1("grayscale(100%)");
                                props.setbtngrayscale_tier3_2("grayscale(0%)");
                            }
                            else {
                                props.setbtngrayscale_tier3_1("grayscale(100%)");
                                props.setbtngrayscale_tier3_2("grayscale(100%)");
                            }
                        }} style={{ filter: props.btnGrayscale_tier3_2 }}src={createTripod(props.skillClicked)[0][7]} className="Tripod-img " width='48' height='48'></Image>
                        <figcaption className="figure-caption">{createTripod(props.skillClicked)[1][7]}</figcaption>
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