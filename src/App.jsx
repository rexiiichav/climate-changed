import Section from "/home/rex/repos/climate-changed/components/Section/Section.jsx";
import ProgressBar from "../components/Section Components/Progress Bar/ProgressBar";
import LiveUpdate from "/home/rex/repos/climate-changed/components/Section Components/Live Update Tracker/LiveUpdate.jsx";
import video from "/home/rex/repos/climate-changed/src/Assets/rotatingEarth.mp4";

export default function App() {
  return (
    <>
      <Section color="black" textColor="white" height="85vh">
        {/* <img
          style={{ minHeight: "6rem", maxHeight: "9rem" }}
          src="src/Assets/earth.png"
          alt="Planet Earth Logo"
        /> */}
        <video autoPlay muted playsinline loop width="350rem">
          <source src={video} type="video/mp4" />
        </video>
        <h1>Climate Changed</h1>
      </Section>
      <Section color="#018575" textColor="black">
        <h3>Rainforest</h3>
        <ProgressBar percentage="43%" color="#00bf63"></ProgressBar>
        <LiveUpdate addend={1.5} tracker="Acres Destroyed" />
        <img
          src="src/Assets/tropical-leaves.png"
          alt=""
          style={{
            position: "absolute",
            transform: "rotate(-40deg)",
            right: "-7rem",
            bottom: "5rem",
            width: "20rem",
          }}
        />
      </Section>
      <Section color="#38b6ff" textColor="black">
        <h3>Coral Reefs</h3>
        <ProgressBar percentage="50%" color="#5ce1e6"></ProgressBar>
        <LiveUpdate addend={0.01} tracker="Acres Died" />
        <img
          src="src/Assets/coral.png"
          alt=""
          style={{
            position: "absolute",
            left: "-12rem",
            bottom: "-2rem",
            width: "29rem",
          }}
        />
      </Section>
      <Section color="white" textColor="black">
        <h3>Glaciers</h3>
        <ProgressBar percentage="50%" color="#d9d9d9"></ProgressBar>
        <LiveUpdate addend={130032} tracker="Metric Tons Melted" />
        <img
          src="src/Assets/Iceberg-Underwater.png"
          alt=""
          style={{
            position: "absolute",
            right: "-12rem",
            bottom: "2rem",
            width: "25rem",
            transform: "scaleX(-1)",
          }}
        />
      </Section>
      <Section color="#00bf63" textColor="black">
        <h3>Forest</h3>
        <ProgressBar percentage="50%" color="#018575"></ProgressBar>
        <LiveUpdate addend={0.78} tracker="Acres Lost" />
        <img
          src="src/Assets/tree.png"
          alt=""
          style={{
            position: "absolute",
            left: "-12rem",
            bottom: "-1rem",
            width: "30rem",
          }}
        />
      </Section>
      <Section color="#c1ff72" textColor="black">
        <h3>Life</h3>
        <ProgressBar percentage="31%" color="#00bf63"></ProgressBar>
        <LiveUpdate addend={0.00006} tracker="New Extinct Species" />
        <img
          src="src/Assets/reindeer.png"
          alt=""
          style={{
            position: "absolute",
            right: "-12rem",
            bottom: "-2rem",
            width: "30rem",
            transform: "scaleX(-1)",
          }}
        />
      </Section>
      <Section color="black" textColor="white">
        <h2>Make a Difference</h2>
      </Section>
      <Section color="black" textColor="white">
        <div
          style={{
            position: "absolute",
            bottom: ".8rem",
            left: ".8rem",
          }}
        >
          <div>
            <h4>Sources: </h4>
            <p>Health Bars are based on pre-industrialization statistics.</p>
            <a href="http://csc.columbusstate.edu/summers/Outreach/RainSticks/fRainforestFacts.htm#:~:text=Rainforests%20once%20covered%2014%25%20of,both%20developing%20and%20industrial%20countries">
              Rainforest Health Bar
            </a>
            <a href="http://csc.columbusstate.edu/summers/Outreach/RainSticks/fRainforestFacts.htm#:~:text=Rainforests%20once%20covered%2014%25%20of,both%20developing%20and%20industrial%20countries.">
              Rainforest Live Tracker
            </a>
            <a href="https://www.cell.com/one-earth/fulltext/S2590-3322(21)00474-7">
              Coral Reefs Health Bar
            </a>
            <a href="https://gcrmn.net/wp-content/uploads/2022/05/Status-of-Coral-Reefs-of-the-World-2020-Summary-for-Policymakers.pdf">
              Coral Reefs Live Tracker
            </a>
            <a href="https://www.unep.org/resources/emerging-issues/shrinking-arctic-sea-ice">
              Glaciers Health Bar
            </a>
            <a href="https://climate.nasa.gov/vital-signs/ice-sheets/">
              Glaciers Live Tracker
            </a>
            <a href="https://www.fao.org/state-of-forests/en/">
              Forest Health Bar
            </a>
            <a href="https://www.fao.org/state-of-forests/en/">
              Forest Live Tracker
            </a>
            <a href="https://wwflpr.awsassets.panda.org/downloads/lpr_2022_full_report.pdf">
              Life Health Bar
            </a>
            <a href="https://wwf.panda.org/discover/our_focus/biodiversity/biodiversity/#:~:text=But%20if%20the%20upper%20estimate,are%20becoming%20extinct%20each%20year.">
              Life Live Tracker
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
