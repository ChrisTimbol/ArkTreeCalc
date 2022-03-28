
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Figure from 'react-bootstrap/Figure'
import FigureImage from 'react-bootstrap/FigureImage'
import bard from "../tierlistImages/bard-head.png"
import berserker from "../tierlistImages/berserker-head.png"
import artillerist from "../tierlistImages/artillerist-head.png"
import deadeye from "../tierlistImages/deadeye-head.png"
import deathblade from "../tierlistImages/deathblade-head.png"
import gunlancer from "../tierlistImages/gunlancer-head.png"
import gunslinger from "../tierlistImages/gunslinger-head.png"
import paladin from "../tierlistImages/paladin-head.png"
import scrapper from "../tierlistImages/scrapper-head.png"
import shadowhunter from "../tierlistImages/shadowhunter-head.png"
import sharpshooter from "../tierlistImages/sharpshooter-head.png"
import sorceress from "../tierlistImages/sorceress-head.png"
import soulfist from "../tierlistImages/soulfist-head.png"
import striker from "../tierlistImages/striker-head.png"
import wardancer from "../tierlistImages/wardancer-head.png"

export default function TierList() {
  return (
    <div style={{ backgroundImage: "url('pagebackground.jpg')",  backgroundRepeat: "no-repeat", backgroundSize: "cover"  }}>

      <h1 className="text-center text-light"> PVP Season 1 3v3 Tier List </h1>

      <Container fluid className='Tier-container vh-100'>


        <Row className="S-tier d-flex justify-content-center m-1 ">
          <Col lg='1' xs='1' style={{ backgroundColor: '#ff7f7f' }} className="d-flex align-items-center justify-content-center"  >
            <h4>S</h4>
          </Col>
          <Col lg='7' xs='10' style={{ backgroundColor: '#1a1a17' }} className="">
            <Figure className='Paladin-Figure mx-2'>
              <Figure.Image src={paladin}/>
              <Figure.Caption className="text-light text-center">Paladin</Figure.Caption>
            </Figure>
            <Figure className='Bard-Figure mx-2'>
              <Figure.Image src={bard} />
              <Figure.Caption className="text-light text-center">Bard</Figure.Caption>
            </Figure>



          </Col>
        </Row>
        <Row className="A-tier d-flex justify-content-center m-1">
          <Col lg='1' xs='1' style={{ backgroundColor: '#ffbf7f' }} className="d-flex align-items-center justify-content-center"   >
            <h4>A</h4>
          </Col>
          <Col lg='7' xs='10' style={{ backgroundColor: '#1a1a17' }} className="">
          <Figure className='Deathblade-Figure mx-2'>
              <Figure.Image src={deathblade} />
              <Figure.Caption className="text-light text-center ">Deathblade</Figure.Caption>
            </Figure>
            <Figure className='Artillerist-Figure mx-2'>
              <Figure.Image src={artillerist} />
              <Figure.Caption className="text-light text-center">Artillerist</Figure.Caption>
            </Figure>

            <Figure className='Striker-Figure mx-2'>
              <Figure.Image src={striker} />
              <Figure.Caption className="text-light text-center">Striker</Figure.Caption>
            </Figure>

          </Col>
        </Row>
        <Row className="B-tier d-flex justify-content-center m-1">
          <Col lg='1' xs='1' style={{ backgroundColor: '#ffdf7f' }} className="d-flex align-items-center justify-content-center"   >
            <h4>B</h4>
          </Col>
          <Col lg='7' xs='10' style={{ backgroundColor: '#1a1a17' }} className="">
          <Figure className='Berserker-Figure mx-2'>
              <Figure.Image src={berserker} />
              <Figure.Caption className="text-light text-center">Berserker</Figure.Caption>
            </Figure>
          <Figure  className="Sorceress-Figure mx-2">
              <Figure.Image src={sorceress} />
              <Figure.Caption className="text-light text-center">Sorceress</Figure.Caption>
            </Figure>
            <Figure className="Wardancer-Figure mx-2" >
              <Figure.Image src={wardancer} />
              <Figure.Caption className="text-light text-center">Wardancer</Figure.Caption>
            </Figure>
            <Figure  className="Gunslinger-Figure mx-2">
              <Figure.Image src={gunslinger} />
              <Figure.Caption className="text-light text-center">Gunslinger</Figure.Caption>
            </Figure>
            <Figure  className="Scrapper-Figure mx-2">
              <Figure.Image src={scrapper} />
              <Figure.Caption className="text-light text-center">Scrapper</Figure.Caption>
            </Figure>
          </Col>
          
        </Row>

        <Row className="C-tier d-flex justify-content-center m-1">
          <Col lg='1' xs='1' style={{ backgroundColor: '#bfff7f' }} className="d-flex align-items-center justify-content-center"   >
            <h4>C</h4>
          </Col>
          <Col lg='7' xs='10' style={{ backgroundColor: '#1a1a17' }} className="">

            <Figure className="Soulfist-Figure mx-2" >
              <Figure.Image src={soulfist} />
              <Figure.Caption className="text-light text-center">Soulfist</Figure.Caption>
            </Figure>
            <Figure  className="Sharpshooter-Figure mx-2">
              <Figure.Image src={sharpshooter} />
              <Figure.Caption className="text-light text-center">Sharpshooter</Figure.Caption>
            </Figure>
            <Figure  className="Shadowhunter-Figure mx-2">
              <Figure.Image src={shadowhunter} />
              <Figure.Caption className="text-light text-center">Shadowhunter</Figure.Caption>
            </Figure>

            <Figure  className="Gunlancer-Figure mx-2">
              <Figure.Image src={gunlancer} />
              <Figure.Caption className="text-light text-center">Gunlancer</Figure.Caption>
            </Figure>
            <Figure  className="Deadeye-Figure mx-2">
              <Figure.Image src={deadeye} />
              <Figure.Caption className="text-light text-center">Deadeye</Figure.Caption>
            </Figure>

          </Col>
        </Row>
        <Row className="text-light text-center">
        <h3></h3> 
        
        <p> <strong> S tier</strong> In Lost Ark, S stands for support lol. Jokes aside these classes are the ones you'll see in the majority of your games and are good to familiarize
        your self with as you'll be battling with/against them a lot. </p> 
        <p> <strong> A tier</strong> These champions are relatively strong and have historically been picked more than other classes.
        </p>
        <p> <strong> B tier</strong> These classes aren't quite as popular as the rest of the champions in the first 2 tiers. </p>
        <p> <strong> C tier</strong> These classes are not bad, they just require a lot more effort and skill to use.</p>
        </Row>
      </Container>



    </div>
  )
}
