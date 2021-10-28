import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App/App";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

const root = document.getElementById("root")
const app = <App/>
ReactDOM.render(app, root);