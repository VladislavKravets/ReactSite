import React, {Component} from 'react';
import Tab from 'react-bootstrap/Tab'
import {Col, Container, Image, Nav, Row} from "react-bootstrap";

export class About extends Component {
    render() {
        return (
            <Container className="my-5">
                <Row>
                    <Col>
                        <h1 className="text-center mb-5">Про нас</h1>
                        <p className="text-justify">
                            Ми - команда професіоналів з різних сфер, які об'єдналися, щоб надавати якісні послуги нашим клієнтам.
                        </p>
                        <p className="text-justify">
                            Наші послуги охоплюють все: від розробки веб-сайтів до маркетингу та реклами, від консультацій з бізнесу до аудиту безпеки. Ми завжди стежимо за новинами у своїх галузях, щоб надавати клієнтам найактуальніші та ефективні рішення.
                        </p>
                        <p className="text-justify">
                            Наша мета - забезпечити успіх наших клієнтів. Ми завжди працюємо над покращенням якості наших послуг та створенням комфортних умов для співпраці. Якщо у вас є якісь питання або ви хочете дізнатись більше про нашу команду, будь ласка, зв'яжіться з нами!
                        </p>
                    </Col>
                    <Col>
                        <Image src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366" fluid />
                    </Col>
                </Row>
                <h1 className="text-center mb-5">Приклади наших робіт</h1>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Program</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <img className="d-block w-100"
                                         src="https://i.pinimg.com/originals/aa/f0/69/aaf069dc6de7618a63de784b70ad4370.jpg" alt="picture one"/>
                                    <p>
                                        Lorem
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img className="d-block w-100"
                                         src="https://jstemplate.net/_next/image?url=%2Fproducts%2Ffigma-blog-template-cover.png&w=1920&q=75" alt="picture two"/>
                                    <p>
                                        Lorem
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img className="d-block w-100"
                                         src="https://s3-alpha.figma.com/hub/file/858291939/14dda654-9bf1-47a5-ba66-904aa3003c6e-cover.png" alt="picture three"/>
                                    <p>
                                        Lorem
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}

export default About;
