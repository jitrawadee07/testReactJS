import React from 'react';
import './App.css';
import {
    Routes,
    Route
} from "react-router-dom";
import Home from "./home";
import About from "./about";
import Todo from "./todo";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/todo" element={<Todo/>}/>
                </Routes>
            </header>
        </div>
    );
}

export default App;