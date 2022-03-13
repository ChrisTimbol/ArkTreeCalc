import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
/* import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack'; */
import SkillRow from './SkillRows.jsx';
import TriportSkill from './TriportSkills.jsx';
import ClassButton from './ClassButton.jsx'; 
import Button from 'react-bootstrap/Button'


function importImages(r) {
  let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const artilleristImages = importImages(require.context('../src/images/Artillerist', false, /\.(png)$/));
const bardImages = importImages(require.context('../src/images/Bard', false, /\.(png)$/));
const berserkerImages = importImages(require.context('../src/images/Berserker', false, /\.(png)$/));
const deadeyeImages = importImages(require.context('../src/images/Deadeye', false, /\.(png)$/));
const deathbladeImages = importImages(require.context('../src/images/Deathblade', false, /\.(png)$/));
const gunlancerImages = importImages(require.context('../src/images/GunLancer', false, /\.(png)$/));
const gunslingerImages = importImages(require.context('../src/images/Gunslinger', false, /\.(png)$/));
const paladinImages = importImages(require.context('../src/images/Paladin', false, /\.(png)$/));
const scrapperImages = importImages(require.context('../src/images/Scrapper', false, /\.(png)$/));
const shadowhunterImages = importImages(require.context('../src/images/Shadowhunter', false, /\.(png)$/));
const sharpshooterImages = importImages(require.context('../src/images/Sharpshooter', false, /\.(png)$/));
const sorceressImages = importImages(require.context('../src/images/Sorceress', false, /\.(png)$/));
const soulfistImages = importImages(require.context('../src/images/Soulfist', false, /\.(png)$/));
const strikerImages = importImages(require.context('../src/images/Striker', false, /\.(png)$/));
const wardancerImages = importImages(require.context('../src/images/Wardancer', false, /\.(png)$/));
{/*     <img src={artilleristImages["Artillerist_Skill_01_1.png"]}  alt="alt" /> */}

const App = () => {
  return (
    <div className="App">
      <Container fluid className="Book_Of_Coordination  ">
        <Row className="NavBar">NavBar</Row>

        <Row className="rowContainer_for_positioning">
          <Col sm='1' className="SideBar  d-flex justify-content-end mb-1">
          <Button size='sm' className="Reset-Button ">⟲</Button>
          {/* on click get DropdownButton property title and then set it on click of a item*/}
          {/* Do this to change all images to depending on click */}
          {/* Rename images  */}
          {/* https://www.codegrepper.com/code-examples/javascript/react+import+multiple+images+from+folder */}
          {/* Best way to import different images? props.title */}
           <ClassButton />  
          </Col>

          <Col xs='7' className="SkillRowColumn">
        
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
          <Col xs='5' className="">
            <TriportSkill />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
