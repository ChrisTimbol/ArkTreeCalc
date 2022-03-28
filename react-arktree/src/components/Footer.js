import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
export default function Footer() {

    return (

        <footer className="footer  bg-dark"  >
            <Row className="d-flex justify-content-center text-white" >
                <Col onClick={() => {}} lg='1'>Contact info</Col>
                <Col onClick={() => {}} lg='1'>Discord</Col>
                <Col onClick={() => {}} lg='1'>About us</Col>
                <Col onClick={() => {}} lg='1'>Privacy Policy</Col>
                <Col onClick={() => {}} lg='1'>Copyright Policy</Col>
                <Col onClick={() => {}} lg='1'>Links</Col>
            </Row>
            </footer>
   
    )
}