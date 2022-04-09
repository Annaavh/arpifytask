import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Page1 from "./components/Page1/Page1";
import Page2 from "./components/Page2/Page2";

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Page1/>} />
        <Route path="/login" element={<Page2/>} />
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
