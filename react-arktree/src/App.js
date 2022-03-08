import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
/* import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack'; */
import SkillRow from './SkillRows.jsx';
const App = () => {
  return (
    <div className="App">
      <Container fluid className="Book_Of_Coordination  border border-primary">
        <Row className="NavBar">NavBar</Row>

        <Row className="rowContainer_for_positioning ">
          <Col sm='1' className="SideBar">SideBar</Col>

          <Col sm='8' md='6' className="SkillRowColumn">
            <SkillRow />
            <SkillRow />
            <SkillRow />
            <SkillRow />
            <SkillRow />
            <SkillRow />
            <SkillRow />
            <SkillRow />
            <SkillRow />
            <SkillRow />
            <SkillRow />
          </Col>


          <Col sm='3' className="Triport_Container  border border-primary">
            <Col className="Triport_Container_Inside border border-primary">
              <Row className="">
                <Col>

                  {/* <Image src={require("./images/Tier1.png")} width='48' height='48'></Image> */}
                  <hr class="hr--logo"></hr>
                </Col>
              </Row>
              <Row className="Triport_tier1_row ">
                <Col className="Triport_Image_Col">
                  <Image src={require("./images/Artillerist/Tripod_Tier_1_4.png")}></Image>
                </Col>
                <Col className="Triport_Image_Col">
                  <Image src={require("./images/Artillerist/Tripod_Tier_1_4.png")}></Image>
                </Col>
                <Col className="Triport_Image_Col">
                  <Image src={require("./images/Artillerist/Tripod_Tier_1_4.png")}></Image>
                </Col>
              </Row>
              <hr class="hr--logo"></hr>
              <Row className="Triport_tier2_row">
                <Col className="Triport_Image_Col">
                  <Image src={require("./images/Artillerist/Tripod_Tier_1_4.png")}></Image>
                </Col>
                <Col className="Triport_Image_Col">
                  <Image src={require("./images/Artillerist/Tripod_Tier_1_4.png")}></Image>
                </Col>
                <Col className="Triport_Image_Col">
                  <Image src={require("./images/Artillerist/Tripod_Tier_1_4.png")}></Image>
                </Col>
              </Row>
              <hr class="hr--logo"></hr>
              <Row className="Triport_tier3_row">
                <Col className="Triport_Image_Col">
                  <Image src={require("./images/Artillerist/Tripod_Tier_1_4.png")}></Image>
                </Col>
                <Col className="Triport_Image_Col">
                  <Image src={require("./images/Artillerist/Tripod_Tier_1_4.png")}></Image>
                </Col>
                <Col className="Triport_Image_Col">
                  <Image src={require("./images/Artillerist/Tripod_Tier_1_4.png")}></Image>
                </Col>
              </Row>
              <hr class="hr--logo"></hr>
            </Col>
          </Col>









        </Row>
      </Container>
    </div>
  );
}

export default App;
