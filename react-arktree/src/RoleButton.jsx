import React from "react";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

function RoleButton(props) {
    return <>
        <DropdownButton size='sm' className= "dropdownMenu  sticky-top"   title={props.roleSelect}>
            <Dropdown.Item className= "dropdownItem" onClick={() => {
                props.setOverallCount(340) 
                props.setRole("Artillerist")}} href="#">Artillerist</Dropdown.Item>
            <Dropdown.Item className= "dropdownItem" onClick={() => {
                props.setOverallCount(340) 
                props.setRole("Bard")}} href="#">Bard</Dropdown.Item>
            <Dropdown.Item className= "dropdownItem" onClick={() => {
                props.setOverallCount(340) 
                props.setRole("Berserker")}} href="#">Berserker</Dropdown.Item>
            <Dropdown.Item className= "dropdownItem" onClick={() => {
                props.setOverallCount(340) 
                props.setRole("Deadeye")}} href="#">Deadeye</Dropdown.Item>
            <Dropdown.Item className= "dropdownItem" onClick={() => {
                props.setOverallCount(340) 
                props.setRole("Deathblade")}} href="#">Deathblade</Dropdown.Item>
            <Dropdown.Item className= "dropdownItem" onClick={() => {
                props.setOverallCount(340) 
                props.setRole("Gunlancer")}} href="#">Gunlancer</Dropdown.Item>
            <Dropdown.Item className= "dropdownItem" onClick={() => {
                props.setOverallCount(340) 
                props.setRole("Gunslinger")}} href="#">Gunslinger</Dropdown.Item>
            <Dropdown.Item className= "dropdownItem" onClick={() => {
                props.setOverallCount(340) 
                props.setRole("Paladin")}} href="#">Paladin</Dropdown.Item>
            <Dropdown.Item className= "dropdownItem" onClick={() => {
                props.setOverallCount(340) 
                props.setRole("Scrapper")}} href="#">Scrapper</Dropdown.Item>
            <Dropdown.Item className= "dropdownItem" onClick={() => {
                props.setOverallCount(340) 
                props.setRole("Shadowhunter")}} href="#">Shadowhunter</Dropdown.Item>
            <Dropdown.Item className= "dropdownItem" onClick={() => {
                props.setOverallCount(340) 
                props.setRole("Sharpshooter")}} href="#">Sharpshooter</Dropdown.Item>
            <Dropdown.Item className= "dropdownItem" onClick={() => {
                props.setOverallCount(340) 
                props.setRole("Sorceress")}} href="#">Sorceress</Dropdown.Item>
            <Dropdown.Item className= "dropdownItem" onClick={() => {
                props.setOverallCount(340) 
                props.setRole("Soulfist")}} href="#">Soulfist</Dropdown.Item>
            <Dropdown.Item className= "dropdownItem" onClick={() => {
                props.setOverallCount(340) 
                props.setRole("Striker")}} href="#">Striker</Dropdown.Item>
            <Dropdown.Item className= "dropdownItem" onClick={() => {
                props.setOverallCount(340) 
                props.setRole("Wardancer")}} href="#">Wardancer</Dropdown.Item>
        </DropdownButton>
    </>
}
export default RoleButton;