import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
/* import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack'; */
import CreateRow from './CreateRow';
import RoleButton from './RoleButton.jsx';
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react';
import Home from '../src/pages/Home.js'
import { Route, Routes } from "react-router-dom";
import { HashRouter, Switch } from "react-router-dom";
import Calculator from "../src/pages/Calculator.js";
import News from "../src/pages/News.js";
import PatchNotes from "./pages/PatchNotes.js";
import TierList from "./pages/TierList.js";
/*    Destroyer =  const skillNameText = ["Heavy Crush","Gravity Impact","Full Swing","Earth Smasher","One-Man Army","Neutralizer","Dreadnaught","Terra break","Seismic Hammer","Endure Pain","Earth Eater","Jumping Smash","Perfect Swing","Power Strike","Gravity Compression","Gravity Force","Running Crash","Power Shoulder","Big Bang"]
*/

// add correct color to combotype
// add data
// add tooltip/data

const App = () => {



  // createTripod(skillClicked)
  // if skillClicked === ArtilleristSkillNameText[i] then TriportImage = triportlist1
  return (

    <div className="App" >

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/news" element={<News />} />
        <Route path="/patchnotes" element={<PatchNotes />} />
        <Route path="/tierlist" element={<TierList />} />
      </Routes>

    </div>

  );
}

export default App;
