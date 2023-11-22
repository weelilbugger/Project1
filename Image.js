import React, { Component } from "react";
import Fishy from "./imageComp.js";
 
class Image extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to my page where I display my custom compenent</h2>
        <p><Fishy/></p>
 
      </div>
    );
  }
}
 
export default Image;