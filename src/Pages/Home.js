import React, {Component} from 'react';
import CarouselComponent from "../Components/CarouselComponent";
import {Button, Card, CardImg, Container} from "react-bootstrap";

const cardInfo = [
    {
        img: 'https://img.freepik.com/free-vector/teamwork-of-tiny-people-with-gears-and-cogwheels-team-of-partners-working-on-upgrade-repair-improving-skills-and-client-service-flat-vector-illustration-business-organization-cooperation-concept_74855-20950.jpg?w=360',
        title: 'Developers', text: 'Команда 1'
    },
    {
        img: 'https://cdn.vox-cdn.com/thumbor/Ndb49Uk3hjiquS041NDD0tPDPAs=/0x169:1423x914/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/7342855/microsoftteams.0.jpg',
        title: 'Природознавці', text: 'Команда 2'
    },
    {
        img: 'https://www.kv.by/sites/default/files/pictures/userpictures/2019/11/29/2359/foto6_1.jpg',
        title: 'Маркетологи', text: 'Команда 3'
    },
]

class Home extends Component {
    render() {
        return (
            <>
                Home
                <CarouselComponent/>
                <Container>
                    <h2 className="text-center m-4">Our team</h2>
                    <div className="row">
                            {
                                cardInfo.map((item, index) => {
                                    return <>
                                        <div className="col" key = {index}>
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
                                    </>
                                })
                            }
                        </div>
                </Container>
            </>
        );
    }
}

export default Home;