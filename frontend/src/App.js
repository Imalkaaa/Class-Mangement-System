import Header from "./components/Header";
import AddStudent from "./components/AddStudent"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllStudent from"./components/AllStudent";

function App() {
  return (
    <Router>
      <div>
        <Header />
        

        <Routes>
          <Route path="/add" element={<AddStudent />} />
          <Route path="/" element={<AllStudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
