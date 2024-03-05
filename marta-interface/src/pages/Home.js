import React, { useState, useEffect } from 'react';
import LinesPage from "/Users/nithyaab/Documents/GitHub/project1-s24-nithyaa/marta-interface/src/pages/LinePage.js";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    
    return (
        <div class="body">
            <div class="header">
                <div class="aboutButton"></div>
                <div>MARTA</div>
                <button class="aboutButton" onClick={() => navigate("/about")}>About MARTA</button>
            </div>
            <div class="mainBox">
                <div class="routes">
                    <div class="routesHeader">VIEW ROUTES SCHEDULE</div>
                    <button class="routeButton" onClick={() => navigate("/lines/gold")}><span style={{color:'gold'}}>Gold</span>&#8205; Line</button>
                    <button class="routeButton" onClick={() => navigate("/lines/red")}><span style={{color:'red'}}>Red</span>&#8205; Line</button>
                    <button class="routeButton" onClick={() => navigate("/lines/blue")}><span style={{color:'blue'}}>Blue</span>&#8205; Line</button>
                    <button class="routeButton" onClick={() => navigate("/lines/green")}><span style={{color:'green'}}>Green</span>&#8205; Line</button>
                </div>
            </div>
        </div>
    );
}