import React, {Component} from 'react';
import CarouselComponent from "../Components/CarouselComponent";
import { Button, Card, CardImg, Col, Container, Row} from "react-bootstrap";

const cardInfo = [
    {
        img: 'https://plus.unsplash.com/premium_photo-1661700093968-b538c5a9f539?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        title: 'Наші творці',
        text: 'Які знають як правильно передати емоції в фотографіях'
    },
    {
        img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        title: 'Розробники',
        text: 'Які знають як правильно написати любу цікаву роботу для кожного користувача'
    },
    {
        img: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        title: 'Маркетологи',
        text: 'Які знають як правильно займатися просуванням продуктів'
    },
]

class Home extends Component {
    render() {
        return (
            <>
                <div className="bg-light py-5">
                    <Container>
                        <Row>
                            <Col>
                                <h1 className="display-4 text-center mb-4">Відкрийте для себе світ з подорожами</h1>
                                <p className="lead text-center">
                                    Незабутні враження, захоплива атмосфера та нові відкриття чекають на вас з нашими подорожами.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <CarouselComponent/>
                <Container>
                    <h2 className="text-center m-4">Наша команда</h2>
                    <div className="row">
                        {
                            cardInfo.map((item, index) => {
                                return <div className="col" key={index}>
                                    <Card className="m-4 text-center" bg="light">
                                        <Card.Img
                                            variant="top"
                                            src={item.img}
                                        />
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text>
                                                {item.text}
                                            </Card.Text>
                                            <Button variant="primary">About team</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            })
                        }
                    </div>
                    <Row className="my-5">
                        <Col>
                            <h1 className="text-center">Досліджуйте світ з нами</h1>
                        </Col>
                    </Row>
                    <Row className="mb-5">
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="https://picsum.photos/id/10/800/400" />
                                <Card.Body>
                                    <Card.Title>Найкращі тури</Card.Title>
                                    <Card.Text>
                                        Пориньте у світ пригод і відкрийте для себе найкращі місця на землі з нашими турами.
                                    </Card.Text>
                                    <Button variant="primary">Переглянути</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="mb-5">
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="https://picsum.photos/id/20/800/400" />
                                <Card.Body>
                                    <Card.Title>Відпочинок на морі</Card.Title>
                                    <Card.Text>
                                        Розслабтеся та відчуйте морський бриз, відпочиваючи на одному з наших чудових курортів.
                                    </Card.Text>
                                    <Button variant="primary">Переглянути</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="mb-5">
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="https://picsum.photos/id/30/800/400" />
                                <Card.Body>
                                    <Card.Title>Екзотичні тури</Card.Title>
                                    <Card.Text>
                                        Відвідайте найбільш екзотичні країни світу та відкрийте для себе нові культури та традиції.
                                    </Card.Text>
                                    <Button variant="primary">Переглянути</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Home;