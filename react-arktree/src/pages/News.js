
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image';
import lostarkclass from "../newsImages/lostarkclasses.png"
import patchnote1 from "../newsImages/patchnote1.jpg"
import sorcimage from "../newsImages/sorcimage.jpg"
import filler from "../newsImages/920115.jpg"
import Badge from 'react-bootstrap/Badge'
import Figure from 'react-bootstrap/Figure'
import FigureCaption from 'react-bootstrap/FigureCaption'

export default function News() {
  return (
    <Container className="text-white text-center " >
      <h1 className="display-3 text-center text-light ">Headline</h1>


      <Row>
        <Col className=" d-flex">
          <Carousel className="news-image">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={patchnote1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className="text-danger"><strong>Competitive proving ground Season 1 Launch!</strong></h3>
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
                <h3 className="text-danger"><strong>PVP Ranked Team Queues are a must!</strong></h3>
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
                <h3 className="text-danger"><strong>Is PVP even worth it in Lost ARK?</strong></h3>
                <p>Lost ark being primary focused on PVE content leads to weak PVP gameplay..</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <Col xs="4" md="4">
   
              <Image className="news-image bg-light" fluid src={patchnote1} />
            <h6 className="text-danger">Recent Update <Badge bg="danger">New!</Badge></h6>  
           
            <Image className="news-image" fluid src={patchnote1} />
            <h6 className="text-danger">Recent arena info <Badge bg="danger">New!</Badge> </h6>  
          </Col>
        </Col>


      </Row>
      <h3 className="display-3">Recent News</h3>
      <hr className="bg-light"></hr>
      <Container fluid className="text-start">

        <Row xs='1' lg='2'>
          <Col>
            <Card className="m-4 news-image">
              <Card.Img variant="top" src={filler} />
              <Card.Body>
                <Card.Title className="text-primary">Card Title</Card.Title>
                <Card.Text className="text-primary">
                  Some quick example
                </Card.Text>
                <Card.Text className="text-primary">
                  insert
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="m-4 news-image">
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
            <Card className="m-4 news-image">
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
            <Card className="m-4 news-image">
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
  )
}
