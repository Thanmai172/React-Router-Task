import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import AllCourses from "./components/AllCourses";
import FullStack from "./components/FullStack";
import DataScience from "./components/DataScience";
import CyberSecurity from "./components/CyberSecurity";
import Career from "./components/Career";

const App = () => {
    return (
        <Router>
            <div>
                <Navigation />
                <Routes>
                    <Route path="/" element={<AllCourses />} />
                    <Route path="/fullstack" element={<FullStack />} />
                    <Route path="/datascience" element={<DataScience />} />
                    <Route path="/cybersecurity" element={<CyberSecurity />} />
                    <Route path="/career" element={<Career />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
