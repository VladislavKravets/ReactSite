import React, {Component, useContext, useState} from "react";
import {
    Navbar,
    Nav,
    FormControl,
    Container,
    Form,
    Button,
    Modal
} from "react-bootstrap";

import logo from "../assets/logo.png";
import ModalBox from "./Header/ModalBox";
import LanguageSelector from "./LanguageSelector";
import LanguageContext from "./LanguageContext";


function Header() {
    const logoText = 'Tourism'
    const [show, setShow] = useState(false);
    const {language} = useContext(LanguageContext);


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
                        {logoText}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/"> Home </Nav.Link>
                            <Nav.Link href="/about"> About us </Nav.Link>
                            <Nav.Link href="/contacts"> Contacts </Nav.Link>
                            <Nav.Link href="/blogs"> Blogs </Nav.Link>
                        </Nav>
                        <Form className="d-flex ms-auto">
                            <LanguageSelector/>
                            <FormControl
                                type="text"
                                placeholder={
                                    language === "uk" ?
                                        "Пошук"
                                        :
                                        "Search"
                                }
                                className="me-sm-3"
                            />
                            <Button variant="outline-info">
                                {
                                    language === "uk" ?
                                        "Пошук"
                                        :
                                        "Search"
                                }
                            </Button>
                            <Button className="ms-2" onClick={handleShow}>Login</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div style={{height: "60px"}}></div>
            {/* <!-- здесь 60px - это высота хедера. Костыль? - правда ) -->*/}
            <ModalBox show={show} handleShow={handleShow} handleClose={handleClose}/>

        </>
    );
}

export default Header;