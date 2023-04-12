import React, {Component, useContext} from 'react';
import Tab from 'react-bootstrap/Tab'
import {Col, Container, Image, Nav, Row} from "react-bootstrap";
import LanguageContext from "../Components/LanguageContext";

function About() {
    const {language} = useContext(LanguageContext);

    return (
        <Container className="my-5">
            <Row>
                <Col>
                    <h1 className="text-center mb-5">
                        {
                            language === "uk" ?
                                "Про нас"
                                :
                                "About us"
                        }
                    </h1>
                    <p className="text-justify">
                        {
                            language === "uk" ?
                                "Ми - команда професіоналів з різних сфер, " +
                                "які об'єдналися, щоб надавати якісні послуги нашим клієнтам."
                                :
                                "We are a team of professionals from various fields " +
                                "who have come together to provide quality services to our clients."
                        }

                    </p>
                    <p className="text-justify">
                        {
                            language === "uk" ?
                                "Наші послуги охоплюють все: " +
                                "від розробки веб-сайтів до маркетингу та реклами, від консультацій з " +
                                "бізнесу до аудиту безпеки. Ми завжди стежимо за новинами у своїх галузях, " +
                                "щоб надавати клієнтам найактуальніші та ефективні рішення."
                                :
                                "Our services cover everything from website development to marketing and advertising, " +
                                "from business consulting to security audits. We always follow the news in " +
                                "our industries to provide our clients with the most relevant and effective solutions."
                        }

                    </p>
                    <p className="text-justify">
                        {
                            language === "uk" ?
                                "Наша мета - забезпечити успіх наших клієнтів. Ми завжди працюємо над покращенням якості наших " +
                                "послуг та створенням комфортних умов для співпраці. Якщо у вас є якісь питання або ви хочете " +
                                "дізнатись більше про нашу команду, будь ласка, зв'яжіться з нами!"
                                :
                                "Our goal is to ensure the success of our clients. " +
                                "We are always working to improve the quality of our services " +
                                "and create a comfortable environment for cooperation. " +
                                "If you have any questions or would like to know more about our team, " +
                                "please don't hesitate to contact us!"
                        }
                    </p>
                </Col>
                <Col>
                    <Image src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366" fluid/>
                </Col>
            </Row>
            <h1 className="text-center mb-5">
                {
                    language === "uk" ?
                        "Приклади наших робіт"
                        :
                        "Examples of our work"
                }

            </h1>
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
                                     src="https://i.pinimg.com/originals/aa/f0/69/aaf069dc6de7618a63de784b70ad4370.jpg"
                                     alt="picture one"
                                />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <img className="d-block w-100"
                                     src="https://jstemplate.net/_next/image?url=%2Fproducts%2Ffigma-blog-template-cover.png&w=1920&q=75"
                                     alt="picture two"
                                />
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <img className="d-block w-100"
                                     src="https://s3-alpha.figma.com/hub/file/858291939/14dda654-9bf1-47a5-ba66-904aa3003c6e-cover.png"
                                     alt="picture three"
                                />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
}

export default About;
