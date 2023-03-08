import React, {Component, useState} from "react";
import {
    Navbar,
    Nav,
    FormControl,
    Container,
    Form,
    Button,
    Modal
} from "react-bootstrap";

import logo from "../assets/logo192.png";
import ModalBox from "./Header/ModalBox";


function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar
                fixed="top"
                collapseOnSelect
                expand="md"
                bg="dark"
                variant="dark"
            >
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height="30"
                            width="30"
                            className="d-inline-block align-top"

                            alt="Logo"
                        />{" "}
                        React Site
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/"> Home </Nav.Link>
                            <Nav.Link href="/about"> About us </Nav.Link>
                            <Nav.Link href="/contacts"> Contacts </Nav.Link>
                            <Nav.Link href="/blog"> Blog </Nav.Link>
                        </Nav>
                        <Form className="d-flex ms-auto">
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="me-sm-3"
                            />
                            <Button variant="outline-info">Search</Button>
                            <Button className="ms-2" onClick={handleShow}>Login</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div style={{height: "60px"}}></div>
            {/* <!-- здесь 60px - это высота хедера. Костыль? - правда ) -->*/}

            <ModalBox show = {show} handleShow = {handleShow} handleClose = {handleClose}/>

        </>
    );
}

export default Header;