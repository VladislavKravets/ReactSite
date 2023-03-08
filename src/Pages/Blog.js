import React, {Component} from 'react';
import {Container, Col, Row, Card, ListGroup} from "react-bootstrap";

const blogs = [
    { img: "https://emgotas.files.wordpress.com/2016/11/what-is-a-team.jpg" ,
        blogTitle: "Blog post", blogText: "Lorem"},
    { img: "https://emgotas.files.wordpress.com/2016/11/what-is-a-team.jpg" ,
        blogTitle: "Blog post", blogText: "Lorem"},
    { img: "https://emgotas.files.wordpress.com/2016/11/what-is-a-team.jpg" ,
        blogTitle: "Blog post", blogText: "Lorem"},
];

const categories = [
    { category: "категорія 1"},
    { category: "категорія 2"},
    { category: "категорія 3"},
    { category: "категорія 4"},
    { category: "категорія 5"},
];

class Blog extends Component {
    render() {
        return (
            <Container>
                Blog
                <Row>
                    <Col md="9">
                        {
                            blogs.map((item,index) => {
                                return <>
                                    <div className="d-flex align-items-center me-5" key = {index}>
                                        <div className="flex-shrink-0">
                                            <img
                                                width={150}
                                                height={150}
                                                className="mr-3"
                                                src={item.img}
                                                alt="photo" />
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h5>{item.blogTitle}</h5>
                                            <p>
                                                {item.blogText}
                                            </p>
                                        </div>
                                    </div>
                                </>
                            })
                        }

                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-5">Категорії</h5>

                        <Card>
                            <ListGroup variant="flush">
                                {
                                    categories.map((item,index) => {
                                        return <>
                                            <ListGroup.Item key = {index}> { item.category } </ListGroup.Item>
                                        </>
                                    })
                                }

                            </ListGroup>
                        </Card>

                        <Card className="mt-3 bg-light">
                            <Card.Body>
                                <Card.Title>Slide widget</Card.Title>
                                <Card.Text>
                                    Lorem
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Blog;