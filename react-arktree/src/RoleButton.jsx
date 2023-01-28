import React from "react";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

function RoleButton(props) {
    return <>
        <DropdownButton size='sm' className= "dropdownMenu  sticky-top"  title={props.roleSelect}>
            <Dropdown.Item className= "dropdownItem" onClick={() => {props.setRole("Artillerist")}} href="#">Artillerist</Dropdown.Item>
            <Dropdown.Item className= "dropdownItem" onClick={() => {props.setRole("Bard")}} href="#">Bard</Dropdown.Item>
            <Dropdown.Item className= "dropdownItem" onClick={() => {props.setRole("Berserker")}} href="#">Berserker</Dropdown.Item>
            <Dropdown.Item className= "dropdownItem" onClick={() => {props.setRole("Deadeye")}} href="#">Deadeye</Dropdown.Item>
            <Dropdown.Item className= "dropdownItem" onClick={() => {props.setRole("Deathblade")}} href="#">Deathblade</Dropdown.Item>
            <Dropdown.Item className= "dropdownItem" onClick={() => {props.setRole("Gunlancer")}} href="#">Gunlancer</Dropdown.Item>
            <Dropdown.Item className= "dropdownItem" onClick={() => {props.setRole("Gunslinger")}} href="#">Gunslinger</Dropdown.Item>
            <Dropdown.Item className= "dropdownItem" onClick={() => {props.setRole("Paladin")}} href="#">Paladin</Dropdown.Item>
            <Dropdown.Item className= "dropdownItem" onClick={() => {props.setRole("Scrapper")}} href="#">Scrapper</Dropdown.Item>
            <Dropdown.Item className= "dropdownItem" onClick={() => {props.setRole("Shadowhunter")}} href="#">Shadowhunter</Dropdown.Item>
            <Dropdown.Item className= "dropdownItem" onClick={() => {props.setRole("Sharpshooter")}} href="#">Sharpshooter</Dropdown.Item>
            <Dropdown.Item className= "dropdownItem" onClick={() => {props.setRole("Sorceress")}} href="#">Sorceress</Dropdown.Item>
            <Dropdown.Item className= "dropdownItem" onClick={() => {props.setRole("Soulfist")}} href="#">Soulfist</Dropdown.Item>
            <Dropdown.Item className= "dropdownItem" onClick={() => {props.setRole("Striker")}} href="#">Striker</Dropdown.Item>
            <Dropdown.Item className= "dropdownItem" onClick={() => {props.setRole("Wardancer")}} href="#">Wardancer</Dropdown.Item>
        </DropdownButton>
    </>
}
export default RoleButton;