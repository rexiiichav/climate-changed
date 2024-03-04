import Section from "/home/rex/repos/climate-changed/components/Section/Section.jsx";
import ProgressBar from "../components/Section Components/Progress Bar/ProgressBar";

export default function App() {
  return (
    <>
      <Section color="black" textColor="white">
        <img
          style={{ minHeight: "100px", maxHeight: "125px" }}
          src="src/Assets/earth.png"
          alt="Planet Earth Logo"
        />
        <h1>Climate Changed</h1>
      </Section>
      <Section color="#018575" textColor="black">
        <h3>Rainforest</h3>
        <ProgressBar percentage="36%" color="#00bf63"></ProgressBar>
      </Section>
      <Section color="#38b6ff" textColor="black">
        <h3>Coral Reefs</h3>
        <ProgressBar percentage="44%" color="#5ce1e6"></ProgressBar>
      </Section>
      <Section color="white" textColor="black">
        <h3>Glaciers</h3>
        <ProgressBar percentage="60%" color="#d9d9d9"></ProgressBar>
      </Section>
      <Section color="#00bf63" textColor="black">
        <h3>Forest</h3>
        <ProgressBar percentage="65%" color="#018575"></ProgressBar>
      </Section>
      <Section color="#c1ff72" textColor="black">
        <h3>Life</h3>
        <ProgressBar percentage="31%" color="#00bf63"></ProgressBar>
      </Section>
      <Section color="black" textColor="white">
        <h2>Make a Difference</h2>
      </Section>
    </>
  );
}
