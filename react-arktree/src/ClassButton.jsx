import React, { useState } from "react";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';



function ClassButton() {
    const [title, setTitle] = useState("Artillerist");
    return <>
        <DropdownButton size='sm' title={title}>
            <Dropdown.Item onClick={() => setTitle("Artillerist")} href="#/action-1">Artillerist</Dropdown.Item>
            <Dropdown.Item onClick={() => setTitle("Bard")} href="#/action-2">Bard</Dropdown.Item>
            <Dropdown.Item onClick={() => setTitle("Deadeye")} href="#/action-3">Deadeye</Dropdown.Item>
            <Dropdown.Item onClick={() => setTitle("Deathblade")} href="#/action-3">Deathblade</Dropdown.Item>
            <Dropdown.Item onClick={() => setTitle("Gunlancer")} href="#/action-3">Gunlancer</Dropdown.Item>
            <Dropdown.Item onClick={() => setTitle("Gunslinger")} href="#/action-3">Gunslinger</Dropdown.Item>
            <Dropdown.Item onClick={() => setTitle("Paladin")} href="#/action-3">Paladin</Dropdown.Item>
            <Dropdown.Item onClick={() => setTitle("Scrapper")} href="#/action-3">Scrapper</Dropdown.Item>
            <Dropdown.Item onClick={() => setTitle("Shadowhunter")} href="#/action-3">Shadowhunter</Dropdown.Item>
            <Dropdown.Item onClick={() => setTitle("Sharpshooter")} href="#/action-3">Sharpshooter</Dropdown.Item>
            <Dropdown.Item onClick={() => setTitle("Sorceress")} href="#/action-3">Sorceress</Dropdown.Item>
            <Dropdown.Item onClick={() => setTitle("Soulfist")} href="#/action-3">Soulfist</Dropdown.Item>
            <Dropdown.Item onClick={() => setTitle("Striker")} href="#/action-3">Striker</Dropdown.Item>
            <Dropdown.Item onClick={() => setTitle("Wardancer")} href="#/action-3">Wardancer</Dropdown.Item>
        </DropdownButton>
    </>
}

export default ClassButton;