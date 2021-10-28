import React from "react";
import {Button, Form} from "react-bootstrap";

function CustomForm() {
    return (
        <Form className={"flex-shrink-0 w-100 px-5"}>
            <Form.Group className="mb-3" controlId="formGroupText1">
                <Form.Label>Text 1</Form.Label>
                <Form.Control type="text" placeholder="Enter Text 1"  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupText2">
                <Form.Label>Enter Text 2</Form.Label>
                <Form.Control type="text" placeholder="Enter Text 2" />
            </Form.Group>
            <Button variant={"primary"} type={"submit"} className={"shadow"} >Generate Meme</Button>
        </Form>
    )
}
export default CustomForm;