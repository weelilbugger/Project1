import React, { Component } from "react";
import{
    Route, Routes, NavLink, HashRouter
} from "react-router-dom";
import Home from "./Home";
import Image from "./Image";
import Contact from "./Contact";
 
class Main extends Component {
  render() {
    return (
    <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink exact to="/image">Image</NavLink></li>
            <li><NavLink exact to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/image" element={<Image />}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;