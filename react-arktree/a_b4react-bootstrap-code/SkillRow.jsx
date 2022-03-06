import React from "react";
//import skill from './images/skill.png';
//import triports from './images/triportscontrast.png';

function SkillRow() {
    return <div className="skillName">
        <div className="row-container">
            <img className="img-container" src="#" alt="" />
            <div className="combo-skill-container">
                <p className="combo-name">Point </p>
                <p className="skill-name">Spiral Tracker</p>
            </div>
            <div className="counter-component">
                <div className="skill-req-container">
                    <div className="req-container">
                        <div className="req-point">1</div>
                        <p className="req-point-name">Req. Points</p>
                    </div>
                    <div className="skill-container">
                        <div className="skill-point">1</div>
                        <p className="skill-level-name">Skill Lv.</p>
                    </div>
                </div>
                <div className="button-container">
                    <button type="button" className="add-button">+</button>
                    <button type="button" className="sub-button">-</button>
                </div>
            </div>
            <img className="triport-image-container" src=""alt="#" />
        </div>
    </div>
}

export default SkillRow;