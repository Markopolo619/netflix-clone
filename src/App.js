import "./Components/Header"
import Header from "./Components/Header";
import FirstSection from "./Components/FirstSection";


function App() {
  return (
    <div className="App">
      <Header/>
      <hr 
        style={{
          border: "8px solid #222",}}
      />
      <FirstSection/>
    </div>
  );
}

export default App;
