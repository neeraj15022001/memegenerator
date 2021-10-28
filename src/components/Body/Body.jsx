import React from "react";
import {Container} from "react-bootstrap";
import CustomForm from "../CustomForm/CustomForm";
import DropZone from "../DropZone/DropZone";

function Body() {
    return(
        <Container className={"d-flex align-items-center justify-content-center overflow-auto"} style={{height: "calc(100% - 56px)"}} fluid>
            <Container className={"shadow row overflow-auto bg-white rounded-3"} style={{height: "85vh"}}>
                <Container className={"h-100 col-12 col-sm-12 col-md-6 p-5 bg-white "} fluid><DropZone /></Container>
                <Container className={"h-100 col-12 col-sm-12 col-md-6 d-flex align-items-center justify-content-start bg-white"} fluid><CustomForm /></Container>
            </Container>
        </Container>
    )
}
export default Body