

import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import {  Route } from "react-router-dom";
import lostArkFront from "../homeImages/lostarkfront.jpg"
import newsIcon from "../homeImages/news.png"
import tierIcon from "../homeImages/list.png"
import noteIcon from "../homeImages/note.png"
import calcIcon from "../homeImages/calculator.png"
import imageBackground from "../pageImages/pagebackground.jpg"
import { useNavigate } from "react-router-dom";
export default function Home() {
  let navigate = useNavigate();
  return (
    <>

{/* 
        <div className="vh-100  " style={{ backgroundImage: ("../src/pageImages/pagebackground.jpg"),  backgroundRepeat: "no-repeat", backgroundSize: "cover" }}> */}
        <Container className='page-container text-center' >

          <h4 className="text-light"> Lost Ark PVP Fansite</h4>
          <h1 className="text-danger"> WELCOME TO ARKARENA </h1>
          <Image className="rounded-circle" src={lostArkFront} width="1200" fluid />
    
    <Row lg='2' className="d-flex justify-content-center">

           
            <Row onClick={() => {
               navigate("/news");
            }} className="row-link d-flex align-items-center bg-dark m-2 rounded-pill" >
             <Col xs='1' lg='2' >
                <Image src={newsIcon} width="60" />
              </Col>
              <Col xs='4' lg='4' className='text-light'>
                <h6>News</h6>
              </Col>
            </Row>
         
       
          
        
            <Row  onClick={() => {
               navigate("/calculator");
            }}className="row-link d-flex align-items-center bg-dark m-2 rounded-pill" >
              <Col xs='1' lg='2' >
                <Image src={calcIcon} width="60" />
              </Col>
              <Col xs='4' lg='4' className='text-light'>
                <h6>Skill Calculator</h6>
              </Col>
            </Row>
       

        
            <Row onClick={() => {
               navigate("/tierlist");
            }}className="row-link d-flex align-items-center bg-dark m-2 rounded-pill">
              <Col xs='1' lg='2'>
                <Image src={tierIcon} width="60" />
              </Col>
              <Col xs='4' lg='4' className='text-light'>
                <h6>Tier List</h6>
              </Col>
            </Row>
       

            <Row onClick={() => {
               navigate("/patchnotes");
            }}className="row-link d-flex align-items-center bg-dark m-2 rounded-pill">
              <Col xs='1' lg='2'>
                <Image src={noteIcon} width="60" />
              </Col>
              <Col xs='4' lg='4' className='text-light'>
                <h6>Patch Notes</h6>
              </Col>
            </Row>
      

          </Row> 
        </Container>
{/*  </div>  */}

    </>
  )
}
