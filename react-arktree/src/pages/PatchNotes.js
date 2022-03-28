
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup'
import patchnote1 from "../newsImages/patchnote1.jpg"
import season1reward from "../patchnoteImages/season1reward.png"
export default function PatchNotes() {
  return (
    <div style={{ backgroundImage: "url('pagebackground.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className="vh-100 text-light text-center">
      <Container className="text-center ">
        <h1 className="text-center">PVP Patch Notes</h1>
      </Container>
      <Container className="bg-dark pt-3">
      <h3>Competitive Proving Grounds Season 1 </h3> 
        <Row lg='2' className="d-flex justify-content-center">
          <Image src={patchnote1} height="300" />
        </Row>
     
        <Row lg='2' className="d-flex justify-content-center mt-2" >
          
          <p>
           Begins after the March 24 players will be able to queue solo for the 'Team Deathmatch' mode,
            As you win and lose Competitive matches throughout the season, you can track your 'Competitive Match Average Score'.
            Your rank is determined by your score, as are the rewards you receive when the season ends. To participate, players will need to reach Tier 1 in Proving Grounds.
            Competitive Match Average Score will decay if a player doesn't participate in Competitive matches for 2 weeks.
          Similar to existing Proving Grounds modes and other activities with matchmaking, Competitive matches will use region-based matchmaking,
           alongside using skill-based matchmaking to create balanced games. For those searching for glory in addition to the rewards, the top 200 players 
           in each region will be viewable on a Competitive Match Leaderboard in-game!
          </p>

        </Row>
        <Row>
          <Col className="d-flex justify-content-end ">
            <Image src={season1reward} />
          </Col>
          <Col className="d-flex justify-content-start">
            <ListGroup className="bg-dark">
              <ListGroup.Item action variant="dark"> Grand Master: Top 30 players in the region - 2300+</ListGroup.Item>
              <ListGroup.Item action variant="dark">Master: Top 31 - 100 players in the region - 2300+</ListGroup.Item>
              <ListGroup.Item action variant="dark">Diamond: 2100+</ListGroup.Item>
              <ListGroup.Item action variant="dark">Platinum: 1900 - 2099</ListGroup.Item>
              <ListGroup.Item action variant="dark">Gold: 1700 - 1899</ListGroup.Item>
              <ListGroup.Item action variant="dark">Silver: 1500 - 1699</ListGroup.Item>
              <ListGroup.Item action variant="dark">Bronze: 1499 or below</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  )
}


  // main page with  featured news etc
  // other stuff below
  // 