import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Welcome from './Pages/Welcome';
import Home from './Pages/Home';
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element={<Welcome />}/>
                <Route path = "/Home" element={<Home />}/>
                <Route path = "/Experience" element={<Experience/>}/>
                <Route path = "/Projects" element={<Projects />}/>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);