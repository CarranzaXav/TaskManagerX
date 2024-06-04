import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ***********Routes**********//
import Dashboard from "./pages/Dashboard";
import TicketSubmit from "./pages/TicketSubmit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/TicketSubmit" element={<TicketSubmit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
