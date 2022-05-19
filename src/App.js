import Homepage from "./screens/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MembershipPage from "./screens/MembershipPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/membership" element={<MembershipPage />} />
      </Routes>
    </Router>
  );
}

export default App;
