import './App.css';
import SkillRow from "./SkillRow";
import TriportSkills from "./TriportSkills";
const App = () => {
  return (
    <div className="App">
      <div className="table-container">
        <SkillRow />
        <SkillRow />
        <SkillRow />
        <SkillRow />
        <SkillRow />
      </div>
    </div>
  );
}

export default App;
