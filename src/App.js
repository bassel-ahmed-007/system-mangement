import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import All from "./pages/All";
import Factory from "./pages/Factory";
import Login from "./pages/Login";
import Line from "./pages/Line";
import Machines from "./pages/Machines";
import Planning from "./pages/Planning";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/all" element={<All />} />
          <Route path="/factory" element={<Factory />} />
          <Route path="/line" element={<Line />} />
          <Route path="/machines" element={<Machines />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
