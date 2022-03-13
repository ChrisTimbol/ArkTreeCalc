import React from "react";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';


function ClassButton(props) {
    return <>
        <DropdownButton size='sm' title={props.classSelect}>
            <Dropdown.Item onClick={() => {props.setClass("Artillerist")}} href="#/action-1">Artillerist</Dropdown.Item>
            <Dropdown.Item onClick={() => {props.setClass("Bard")}} href="#/action-2">Bard</Dropdown.Item>
            <Dropdown.Item onClick={() => {props.setClass("Deadeye")}} href="#/action-3">Deadeye</Dropdown.Item>
            <Dropdown.Item onClick={() => {props.setClass("Deathblade")}} href="#/action-3">Deathblade</Dropdown.Item>
            <Dropdown.Item onClick={() => {props.setClass("Gunlancer")}} href="#/action-3">Gunlancer</Dropdown.Item>
            <Dropdown.Item onClick={() => {props.setClass("Gunslinger")}} href="#/action-3">Gunslinger</Dropdown.Item>
            <Dropdown.Item onClick={() => {props.setClass("Paladin")}} href="#/action-3">Paladin</Dropdown.Item>
            <Dropdown.Item onClick={() => {props.setClass("Scrapper")}} href="#/action-3">Scrapper</Dropdown.Item>
            <Dropdown.Item onClick={() => {props.setClass("Shadowhunter")}} href="#/action-3">Shadowhunter</Dropdown.Item>
            <Dropdown.Item onClick={() => {props.setClass("Sharpshooter")}} href="#/action-3">Sharpshooter</Dropdown.Item>
            <Dropdown.Item onClick={() => {props.setClass("Sorceress")}} href="#/action-3">Sorceress</Dropdown.Item>
            <Dropdown.Item onClick={() => {props.setClass("Soulfist")}} href="#/action-3">Soulfist</Dropdown.Item>
            <Dropdown.Item onClick={() => {props.setClass("Striker")}} href="#/action-3">Striker</Dropdown.Item>
            <Dropdown.Item onClick={() => {props.setClass("Wardancer")}} href="#/action-3">Wardancer</Dropdown.Item>
        </DropdownButton>
    </>
}

export default ClassButton;