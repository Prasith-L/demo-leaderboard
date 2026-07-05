import LeaderBoard from "./components/LeaderBoard";
import Lightfall from "./components/Lightfall";

function App() {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          position: "fixed",
          top: 0,
          zIndex: -1,
        }}
      >
        <Lightfall
          colors={["#A6C8FF", "#5227FF", "#FF9FFC"]}
          backgroundColor="#0A29FF"
          speed={0.3}
          streakCount={1}
          streakWidth={0.8}
          streakLength={1}
          glow={3}
          density={0.6}
          twinkle={0.1}
          zoom={2}
          backgroundGlow={2.5}
          opacity={1}
          mouseInteraction
        />
      </div>
      <LeaderBoard />
    </>
  );
}

export default App;
