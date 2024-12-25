import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Pages
import Home from "@/pages/Home";
import Dashboard from "@/pages/Dashboard";
import LeaderBoard from "@/pages/LeaderBoard";
import Activity from "@/pages/Activity";
import NotFound from "@/pages/404";

// Import Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/markets" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/rankings" element={<LeaderBoard />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;