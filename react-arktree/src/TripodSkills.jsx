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
/* import createTripod from './createTripod'; */
//import Container from 'react-bootstrap/Container';



function createTripod(skillClicked) {
    var defaultImg = require("./triportimages/Tripod_Tier_1_0.png");
    var defaultTripodName = "Skill"
    var skillImages = []
    var tripodName = []

    //Artillerist
    if (skillClicked === "Enhanced Shell") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_98.png"), require("./triportimages/Tripod_Tier_1_4.png"), require("./triportimages/Tripod_Tier_1_60.png"),
            require("./triportimages/Tripod_Tier_2_0.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_6.png"),
            require("./triportimages/Tripod_Tier_3_2.png"), require("./triportimages/Tripod_Tier_3_13.png"));

        tripodName.push("Armor Destruction", "Vital Point Barrage", "Repulse",
            "Bullet Enhancement", "Law of the Jungle", "Swift Fingers",
            "Piercing Shell", "Internal Ignition")

    }
    else if (skillClicked === "Freeze Shell") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_34.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_14.png"), require("./triportimages/Tripod_Tier_2_0.png"), require("./triportimages/Tripod_Tier_2_7.png"),
            require("./triportimages/Tripod_Tier_3_53.png"), require("./triportimages/Tripod_Tier_3_43.png"));

        tripodName.push("Range Barrage", "Magick Control", "Freeze Enhancement",
            "Frost Shell", "Enhanced Shell", "Wide Explosion",
            "Chain Explosion", "Glacier Explosion")

    }
    else if (skillClicked === "Buckshot") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_21.png"), require("./triportimages/Tripod_Tier_1_60.png"), require("./triportimages/Tripod_Tier_1_33.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_2.png"), require("./triportimages/Tripod_Tier_2_7.png"),
            require("./triportimages/Tripod_Tier_3_40.png"), require("./triportimages/Tripod_Tier_3_13.png"));

        tripodName.push("Weak Point Enhancement", "Repulse", "Weak Point Detection",
            "Vital Point Hit", "Piercing Strike", "Ranged Buckshot",
            "Decimation Buckshot", "Internal Ignition")
    }
    else if (skillClicked === "Multiple Rocket Launcher") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_13.png"), require("./triportimages/Tripod_Tier_1_14.png"), require("./triportimages/Tripod_Tier_1_62.png"),
            require("./triportimages/Tripod_Tier_2_40.png"), require("./triportimages/Tripod_Tier_2_30.png"), require("./triportimages/Tripod_Tier_2_54.png"),
            require("./triportimages/Tripod_Tier_3_87.png"), require("./triportimages/Tripod_Tier_3_8.png"));

        tripodName.push("Flame Rocket", "Frost Rocket", "Giant Rocket",
            "Back Step", "Stun Effect", "Quick Barrage",
            "Laser Cannon", "Access Denied")
    }
    else if (skillClicked === "Howitzer") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_98.png"), require("./triportimages/Tripod_Tier_1_6.png"), require("./triportimages/Tripod_Tier_1_34.png"),
            require("./triportimages/Tripod_Tier_2_29.png"), require("./triportimages/Tripod_Tier_2_32.png"), require("./triportimages/Tripod_Tier_2_0.png"),
            require("./triportimages/Tripod_Tier_3_53.png"), require("./triportimages/Tripod_Tier_3_8.png"));

        tripodName.push("Armor Destruction", "Swift Fingers", "Magick Control",
            "Opportunist", "Final Barrage", "Focused Barrage",
            "Flash Shell", "Firework")
    }
    else if (skillClicked === "Summon Turret") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_56.png"), require("./triportimages/Tripod_Tier_1_51.png"), require("./triportimages/Tripod_Tier_1_98.png"),
            require("./triportimages/Tripod_Tier_2_0.png"), require("./triportimages/Tripod_Tier_2_52.png"), require("./triportimages/Tripod_Tier_2_41.png"),
            require("./triportimages/Tripod_Tier_3_36.png"), require("./triportimages/Tripod_Tier_3_18.png"));

        tripodName.push("High-Speed Recharge", "Sub Battery", "Armor Destruction",
            "Enhanced Turret", "Ranged Turret", "Quicker Dispatch",
            "Big Pack", "Laser Turret")
    }
    else if (skillClicked === "Air Raid") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_60.png"), require("./triportimages/Tripod_Tier_1_6.png"), require("./triportimages/Tripod_Tier_1_69.png"),
            require("./triportimages/Tripod_Tier_2_13.png"), require("./triportimages/Tripod_Tier_2_14.png"), require("./triportimages/Tripod_Tier_2_17.png"),
            require("./triportimages/Tripod_Tier_3_54.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Prepare to Fire", "Quickfire", "Concussion",
            "Flame Barrage", "Frost Barrage", "Lightning Barrage",
            "Ruthless Barrage", "The Big One")
    }
    else if (skillClicked === "Flamethrower") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_4.png"), require("./triportimages/Tripod_Tier_1_56.png"), require("./triportimages/Tripod_Tier_1_37.png"),
            require("./triportimages/Tripod_Tier_2_12.png"), require("./triportimages/Tripod_Tier_2_7.png"), require("./triportimages/Tripod_Tier_2_75.png"),
            require("./triportimages/Tripod_Tier_3_5.png"), require("./triportimages/Tripod_Tier_3_45.png"));

        tripodName.push("Vital Point Attack", "Quick Prep", "Firepower Control",
            "Ignore Collision", "Ranged Flame", "Shield",
            "Azure Flame", "Scorching Blaze")
    }
    else if (skillClicked === "Swing") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_34.png"), require("./triportimages/Tripod_Tier_1_22.png"), require("./triportimages/Tripod_Tier_1_41.png"),
            require("./triportimages/Tripod_Tier_2_10.png"), require("./triportimages/Tripod_Tier_2_40.png"), require("./triportimages/Tripod_Tier_2_79.png"),
            require("./triportimages/Tripod_Tier_3_0.png"), require("./triportimages/Tripod_Tier_3_44.png"));

        tripodName.push("Magick Control", "Weak Point Enhancement", "Quick Attack",
            "Advancing Hit", "Spin Attack", "Magick Extortion",
            "Enhancing Strike", "Stunner")
    }
    else if (skillClicked === "Jump Barrage") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_6.png"), require("./triportimages/Tripod_Tier_1_34.png"), require("./triportimages/Tripod_Tier_1_9.png"),
            require("./triportimages/Tripod_Tier_2_7.png"), require("./triportimages/Tripod_Tier_2_0.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_54.png"), require("./triportimages/Tripod_Tier_3_10.png"));

        tripodName.push("Quick Jump", "Magick Control", "Muscle Spasm",
            "Wide Explosion", "Enhanced Barrage", "Weak Point Detection",
            "Triple Barrage", "Rocket Jump")
    }
    else if (skillClicked === "Energy Field") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_37.png"), require("./triportimages/Tripod_Tier_1_1.png"), require("./triportimages/Tripod_Tier_1_34.png"),
            require("./triportimages/Tripod_Tier_2_75.png"), require("./triportimages/Tripod_Tier_2_51.png"), require("./triportimages/Tripod_Tier_2_56.png"),
            require("./triportimages/Tripod_Tier_3_25.png"), require("./triportimages/Tripod_Tier_3_65.png"));

        tripodName.push("Firepower Concentration", "Field Release", "Mind Concentration",
            "Shield Enhancement", "Energy Increase", "Quick Prep",
            "Solid Shield", "Energy Share")
    }
    else if (skillClicked === "Gatling Gun") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_0.png"), require("./triportimages/Tripod_Tier_1_56.png"), require("./triportimages/Tripod_Tier_1_32.png"),
            require("./triportimages/Tripod_Tier_2_58.png"), require("./triportimages/Tripod_Tier_2_23.png"), require("./triportimages/Tripod_Tier_2_25.png"),
            require("./triportimages/Tripod_Tier_3_42.png"), require("./triportimages/Tripod_Tier_3_7.png"));

        tripodName.push("Enhanced Shot", "Quick Prep", "Kill Confirmation",
            "Growth Bullet", "Tenacity", "Sturdy Armor",
            "Will of the Destroyer", "Aimed Shot")
    }
    else if (skillClicked === "Napalm Shot") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_22.png"), require("./triportimages/Tripod_Tier_1_7.png"), require("./triportimages/Tripod_Tier_1_69.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_45.png"), require("./triportimages/Tripod_Tier_2_30.png"),
            require("./triportimages/Tripod_Tier_3_8.png"), require("./triportimages/Tripod_Tier_3_58.png"));

        tripodName.push("Weak Point Enhancement", "Wide Explosion", "Target Focus",
            "Vital Point Barrage", "Fierce Heat", "Flash Explosion",
            "Chain Explosion", "Dancing Flame")
    }
    else if (skillClicked === "Forward Barrage") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_53.png"), require("./triportimages/Tripod_Tier_1_37.png"), require("./triportimages/Tripod_Tier_1_7.png"),
            require("./triportimages/Tripod_Tier_2_56.png"), require("./triportimages/Tripod_Tier_2_0.png"), require("./triportimages/Tripod_Tier_2_4.png"),
            require("./triportimages/Tripod_Tier_3_54.png"), require("./triportimages/Tripod_Tier_3_40.png"));

        tripodName.push("Coordinate Change", "Firepower Control", "Wide Explosion",
            "Quick Prep", "Enhanced Barrage", "Keen Strike",
            "Dancing Explosion", "Focused Barrage")
    }
    else if (skillClicked === "Gravity Explosion") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_72.png"), require("./triportimages/Tripod_Tier_1_0.png"), require("./triportimages/Tripod_Tier_1_30.png"),
            require("./triportimages/Tripod_Tier_2_75.png"), require("./triportimages/Tripod_Tier_2_27.png"), require("./triportimages/Tripod_Tier_2_41.png"),
            require("./triportimages/Tripod_Tier_3_81.png"), require("./triportimages/Tripod_Tier_3_71.png"));

        tripodName.push("Free Fire", "The More the Merrier", "Stun Effect",
            "Sturdy Armor", "Stabilize", "Sweeping Gravity",
            "Sweep", "Planetary Gravity")
    }
    else if (skillClicked === "Plasma Storm") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_25.png"), require("./triportimages/Tripod_Tier_1_44.png"),
            require("./triportimages/Tripod_Tier_2_11.png"), require("./triportimages/Tripod_Tier_2_51.png"), require("./triportimages/Tripod_Tier_2_7.png"),
            require("./triportimages/Tripod_Tier_3_58.png"), require("./triportimages/Tripod_Tier_3_14.png"));

        tripodName.push("Swift Fingers", "Sturdy Armor", "Stun Effect",
            "High-Speed Flight", "Sustain Enhancement", "Large Plasma",
            "Plasma Growth", "Ice Storm")
    }
    else if (skillClicked === "Homing Barrage") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else {
        return [defaultImg, defaultTripodName];
    }
    return [skillImages, tripodName]
} 

// Display tripod as grey until clicked
// Coloring for Combo
// stic
function selectTier1Image(btnGrayscale_tier_1, btnGrayscale_tier_2, btnGrayscale_tier_3) {
    if (btnGrayscale_tier_1 === 'grayscale(0%)' || btnGrayscale_tier_2 === 'grayscale(0%)'|| btnGrayscale_tier_3 === 'grayscale(0%)'){
        return <Image fluid='true' roundedCircle='true' src={tier1color}className="Triport-tier1-img" ></Image>
    }
    else {
        return <Image fluid='true' roundedCircle='true' src={tier1img}className="Triport-tier1-img" ></Image>
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
    //moved these states later for resetting when switching classes etc
    const [btnGrayscale_tier1_1, setbtngrayscale_tier1_1] = useState('grayscale(100%)');
    const [btnGrayscale_tier1_2, setbtngrayscale_tier1_2] = useState('grayscale(100%)');
    const [btnGrayscale_tier1_3, setbtngrayscale_tier1_3] = useState('grayscale(100%)');
    const [btnGrayscale_tier2_1, setbtngrayscale_tier2_1] = useState('grayscale(100%)');
    const [btnGrayscale_tier2_2, setbtngrayscale_tier2_2] = useState('grayscale(100%)');
    const [btnGrayscale_tier2_3, setbtngrayscale_tier2_3] = useState('grayscale(100%)');
    const [btnGrayscale_tier3_1, setbtngrayscale_tier3_1] = useState('grayscale(100%)');
    const [btnGrayscale_tier3_2, setbtngrayscale_tier3_2] = useState('grayscale(100%)');
  
    return <>
       <Col className="Triport_Container_Inside border border-dark ">
            <Row >
                <Col className="d-flex justify-content-center">
                    <Col className="tripodline-1 "></Col>
                    {selectTier1Image(btnGrayscale_tier1_1,btnGrayscale_tier1_2,btnGrayscale_tier1_3)}
                    <Col className="tripodline-2"></Col>
                </Col>
            </Row>
            {/****************Tier1*************************/}

            <Row className="Triport_tier1_row ">
          {/*       {console.log(createTripod(props.skillClicked))} */}
                <Col  className="Triport_Image_Col d-flex justify-content-center">
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
                        }} style={{ filter: btnGrayscale_tier1_1 }} src={createTripod(props.skillClicked)[0][0]}className="Tripod-img d-flex justify-content-center" width='48' height='48'></Image>
                        <figcaption className="figure-caption d-flex justify-content-center">{createTripod(props.skillClicked)[1][0]}</figcaption>
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
                        }} style={{ filter: btnGrayscale_tier1_2 }} src={createTripod(props.skillClicked)[0][1]} className="Tripod-img d-flex justify-content-center" width='48' height='48'></Image>
                        <figcaption className="figure-caption d-flex justify-content-center">{createTripod(props.skillClicked)[1][1]}</figcaption>
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
                        }} style={{ filter: btnGrayscale_tier1_3 }} src={createTripod(props.skillClicked)[0][2]} className="Tripod-img  d-flex justify-content-center" width='48' height='48'></Image>
                        <figcaption className="figure-caption d-flex justify-content-center">{createTripod(props.skillClicked)[1][2]}</figcaption>
                    </figure>
                </Col>
            </Row>
            {/**********************End Of Tier1*****************/}
            {/*************************Tier 2*******************/}
            <Row >
                <Col className="d-flex justify-content-center">
                    <Col className="tripodline-1 "></Col>
                    {selectTier2Image(btnGrayscale_tier2_1,btnGrayscale_tier2_2,btnGrayscale_tier2_3)}
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
                        }} style={{ filter: btnGrayscale_tier2_1 }} src={createTripod(props.skillClicked)[0][3]} className="Tripod-img" width='48' height='48'></Image>
                        <figcaption className="figure-caption">{createTripod(props.skillClicked)[1][3]}</figcaption>
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
                        }} style={{ filter: btnGrayscale_tier2_2 }}src={createTripod(props.skillClicked)[0][4]} className="Tripod-img d-flex justify-content-center" width='48' height='48'></Image>
                        <figcaption className="figure-caption d-flex justify-content-center">{createTripod(props.skillClicked)[1][4]}</figcaption>
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
                        }} style={{ filter: btnGrayscale_tier2_3 }}src={createTripod(props.skillClicked)[0][5]} className="Tripod-img d-flex justify-content-center" width='48' height='48'></Image>
                        <figcaption className="figure-caption d-flex justify-content-center">{createTripod(props.skillClicked)[1][5]}</figcaption>
                    </figure>
                </Col>
            </Row>
            {/****End of Tier2 */} 
            {/**Tier3 *********/}
            <Row >
                <Col className="d-flex justify-content-center">
                    <Col className="tripodline-1 "></Col>
                    {selectTier3Image(btnGrayscale_tier3_1,btnGrayscale_tier3_2)}
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
                        }} style={{ filter: btnGrayscale_tier3_1 }}src={createTripod(props.skillClicked)[0][6]} className="Tripod-img " width='48' height='48'></Image>
                        <figcaption className="figure-caption">{createTripod(props.skillClicked)[1][6]}</figcaption>
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
                        }} style={{ filter: btnGrayscale_tier3_2 }}src={createTripod(props.skillClicked)[0][7]} className="Tripod-img " width='48' height='48'></Image>
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