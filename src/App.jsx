import "./App.css";
import React from "react";
import Home from "./pages/Home";
import Navbar from "./Componet/Navbar";
import About from "./pages/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDetail from "./Context/UserDetail";
import Order from "./pages/Order";
import Position from "./pages/Position";
import Holding from "./pages/Holding";
import Fund from "./pages/Fund";
import ShareDetails from "./Context/ShareDetails";
import DayHistory from "./Context/DayHistory";
import OrederExecute from "./Context/OrederExecute";
import OpenOrder from "./Context/OpenOrder";
import RealTimeData from "./Context/RealTimeData";

function App() {
  return (
    <div style={{ height: "100%" }} className="background-radial-gradient ">
      <RealTimeData>
        <DayHistory>
          <OrederExecute>
            <ShareDetails>
              <OpenOrder>
                <UserDetail>
                  <Router>
                    <Navbar />
                    <Routes>
                      <Route exact path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/register" element={<Register />} />
                      <Route path="/order" element={<Order />} />
                      <Route path="/position" element={<Position />} />
                      <Route path="/holding" element={<Holding />} />
                      <Route path="/fund" element={<Fund />} />
                    </Routes>
                  </Router>
                </UserDetail>
              </OpenOrder>
            </ShareDetails>
          </OrederExecute>
        </DayHistory>
      </RealTimeData>
    </div>
  );
}

export default App;
