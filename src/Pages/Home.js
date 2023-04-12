import React, {useContext} from 'react';
import CarouselComponent from "../Components/CarouselComponent";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import LanguageContext from "../Components/LanguageContext";

const cardInfo = [
    {
        img: 'https://plus.unsplash.com/premium_photo-1661700093968-b538c5a9f539?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        titleUA: 'Наші творці',
        titleEN: 'Our creators',
        textUA: 'Які знають як правильно передати емоції в фотографіях',
        textEN: 'Those who know how to properly convey emotions in photos'
    },
    {
        img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        titleUA: 'Розробники',
        titleEN: 'Developers',
        textUA: 'Які знають як правильно написати любу цікаву роботу для кожного користувача',
        textEN: 'Who know how to write any interesting work for each user'
    },
    {
        img: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        titleUA: 'Маркетологи',
        titleEN: 'Marketers',
        textUA: 'Які знають як правильно займатися просуванням продуктів',
        textEN: 'Those who know how to properly promote products'
    },
]

const tour = [
    {
        img: "https://picsum.photos/id/10/800/400",
        titleUA: "Найкращі тури",
        titleEN: "Best tour",
        textUA: "Пориньте у світ пригод і відкрийте для себе найкращі місця на землі з нашими турами.",
        textEN: "Immerse yourself in the world of adventure and discover the best places on earth with our tours.",
    },
    {
        img: "https://picsum.photos/id/20/800/400",
        titleUA: "Відпочинок на морі",
        titleEN: "Rest at sea",
        textUA: "Розслабтеся та відчуйте морський бриз, відпочиваючи на одному з наших чудових курортів.",
        textEN: "Relax and feel the sea breeze as you unwind at one of our beautiful resorts.",
    },
    {
        img: "https://picsum.photos/id/30/800/400",
        titleUA: "Екзотичні тури",
        titleEN: "Exotic tours",
        textUA: "Відвідайте найбільш екзотичні країни світу та відкрийте для себе нові культури та традиції.",
        textEN: "Visit the most exotic countries in the world and discover new cultures and traditions.",
    },

]

function Home() {
    const {language} = useContext(LanguageContext);

    return (
        <>
            <div className="bg-light py-5">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="display-4 text-center mb-4">
                                {language === "uk" && "Відкрийте для себе світ з подорожами"}
                                {language === "en" && "Discover the world with travel"}
                            </h1>
                            <p className="lead text-center">
                                {language === "uk" && "Незабутні враження, захоплива атмосфера та нові " +
                                    "відкриття чекають на вас з нашими подорожами."}
                                {language === "en" && "Unforgettable impressions, an exciting " +
                                    "atmosphere and new discoveries await you with our travels."}

                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <CarouselComponent/>
            <Container>
                <h2 className="text-center m-4">
                    {language === "uk" && "Наша команда" }
                    {language === "en" && "Our team"}
                </h2>
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
                                        <Card.Title>
                                            {
                                                language === "uk" ? item.titleUA : item.titleEN
                                            }
                                        </Card.Title>
                                        <Card.Text>
                                            {
                                                language === "uk" ? item.titleUA : item.titleEN
                                            }
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
                        <h1 className="text-center">
                            { language === "uk" && "Досліджуйте світ з нами" }
                            { language === "en" && "Explore the world with us" }
                        </h1>
                    </Col>
                </Row>
                {
                    tour.map((item, index) => {
                        return <>
                            <Row className="mb-5" key={index}>
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src={item.img}/>
                                        <Card.Body>
                                            <Card.Title>{
                                                language === "uk" ? item.titleUA : item.titleEN
                                            }</Card.Title>
                                            <Card.Text>
                                                {
                                                    language === "uk" ? item.textUA : item.textEN
                                                }
                                            </Card.Text>
                                            <Button variant="primary">
                                                { language === "uk" ? "Переглянути" : "View" }
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </>
                    })
                }
            </Container>
        </>
    );
}

export default Home;