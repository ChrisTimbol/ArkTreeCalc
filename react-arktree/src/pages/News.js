
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'

import lostarkclass from "../newsImages/lostarkclasses.png"
import patchnote1 from "../newsImages/patchnote1.jpg"
import sorcimage from "../newsImages/sorcimage.jpg"
import filler from "../newsImages/920115.jpg"
export default function News() {
  return (
    <>
      <div className="text-white text-center " style={{ backgroundImage: "url('pagebackground.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
        <h1 className="text-center text-light ">News</h1>
        <Container>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={patchnote1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className="text-primary"><strong>Competitive proving ground Season 1 Launch!</strong></h3>
                <p>Smile gate has finally announced ranked pvp for US Region.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={lostarkclass}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3 className="text-primary"><strong>PVP Ranked Team Queues are a must!</strong></h3>
                <p>List of reasons for ranked teams...</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={sorcimage}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3  className="text-primary"><strong>Is PVP even worth it in Lost ARK?</strong></h3>
                <p>Lost ark being primary focused on PVE content leads to weak PVP gameplay..</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          <Container fluid className="">
            <h3>Recent News</h3>
            <Row xs='1' lg='2'>
              <Col>
                <Card className="m-4">
                  <Card.Img variant="top" src={filler} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example
                    </Card.Text>
                    <Button variant="light">Read More</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="m-4">
                  <Card.Img variant="top" src={filler} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example
                    </Card.Text>
                    <Button variant="light">Read More</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row xs='1' lg='2'>
              <Col>
                <Card className="m-4">
                  <Card.Img variant="top" src={filler} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example
                    </Card.Text>
                    <Button variant="light">Read More</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="m-4">
                  <Card.Img variant="top" src={filler} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example
                    </Card.Text>
                    <Button variant="light">Read More</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          
        </Container>
        
      </div>
    </>
  )
}
