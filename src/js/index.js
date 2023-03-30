//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import Home from "./component/home.jsx";
let seconds = 0
setInterval(
()=>{
    seconds++;
    ReactDOM.render(<Home sec={seconds}/>, document.querySelector("#app"))
}
 , 1000);
console.log(seconds)
//render your react application
// ReactDOM.render(<Home />, document.querySelector("#app"));
