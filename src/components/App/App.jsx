import React from "react"
import "./App.css"
import Nav from "../Nav/Nav"
import Body from "../Body/Body";
function App() {
    return (
        <div className={"bg-light"} style={{height: "100vh"}}>
            <Nav />
            <Body />
        </div>
    )
}

export default App;