import React from "react";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';


function ClassButton(props) {
    return <>
        <DropdownButton size='sm' title={props.classSelect}>
            <Dropdown.Item onClick={() => {props.setClass("Artillerist")}} href="#">Artillerist</Dropdown.Item>
            <Dropdown.Item onClick={() => {props.setClass("Bard")}} href="#">Bard</Dropdown.Item>
            <Dropdown.Item onClick={() => {props.setClass("Berserker")}} href="#">Berserker</Dropdown.Item>
            <Dropdown.Item onClick={() => {props.setClass("Deadeye")}} href="#">Deadeye</Dropdown.Item>
            <Dropdown.Item onClick={() => {props.setClass("Deathblade")}} href="#">Deathblade</Dropdown.Item>
            <Dropdown.Item onClick={() => {props.setClass("Gunlancer")}} href="#">Gunlancer</Dropdown.Item>
            <Dropdown.Item onClick={() => {props.setClass("Gunslinger")}} href="#">Gunslinger</Dropdown.Item>
            <Dropdown.Item onClick={() => {props.setClass("Paladin")}} href="#">Paladin</Dropdown.Item>
            <Dropdown.Item onClick={() => {props.setClass("Scrapper")}} href="#">Scrapper</Dropdown.Item>
            <Dropdown.Item onClick={() => {props.setClass("Shadowhunter")}} href="#">Shadowhunter</Dropdown.Item>
            <Dropdown.Item onClick={() => {props.setClass("Sharpshooter")}} href="#">Sharpshooter</Dropdown.Item>
            <Dropdown.Item onClick={() => {props.setClass("Sorceress")}} href="#">Sorceress</Dropdown.Item>
            <Dropdown.Item onClick={() => {props.setClass("Soulfist")}} href="#">Soulfist</Dropdown.Item>
            <Dropdown.Item onClick={() => {props.setClass("Striker")}} href="#">Striker</Dropdown.Item>
            <Dropdown.Item onClick={() => {props.setClass("Wardancer")}} href="#">Wardancer</Dropdown.Item>
        </DropdownButton>
    </>
}

export default ClassButton;