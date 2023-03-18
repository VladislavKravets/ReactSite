import React, {Component, useState} from 'react';
import {Container, Col, Row, Card, ListGroup} from "react-bootstrap";
import {Link} from "react-router-dom";

const categories = [
    {category: "Всі записи"},
    {category: "Тільки туризм"},
    {category: "Тільки програмування"},
];

const blogs = [
    {
        id: "1",
        img: "https://emgotas.files.wordpress.com/2016/11/what-is-a-team.jpg",
        blogTitle: "Blogs post 1",
        blogText: "Test blog 2",
        category: categories[0].category,
    },
    {
        id: "2",
        img: "https://emgotas.files.wordpress.com/2016/11/what-is-a-team.jpg",
        blogTitle: "Blogs post 2",
        blogText: "Test blog 2",
        category: categories[1].category,
    },
    {
        id: "3",
        img: "https://emgotas.files.wordpress.com/2016/11/what-is-a-team.jpg",
        blogTitle: "Blogs post 3",
        blogText: "Test blog 3",
        category: categories[2].category,
    },
];

function Blogs() {
    const [activeBtn, setActiveBtn] = useState(categories[0].category);
    return (
        <Container>
            Blog
            <Row>
                <Col md="9">
                    {
                        blogs.map((item, index) => {
                            return <Link key={item.id} to={`/blog/${item.id}`}>
                                <div className="d-flex align-items-center me-5" key={index}>
                                    <div className="flex-shrink-0">
                                        <img
                                            width={150}
                                            height={150}
                                            className="mr-3"
                                            src={item.img}
                                            alt="photo"
                                        />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h5>{item.blogTitle}</h5>
                                        <p>
                                            {item.blogText}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        })
                    }

                </Col>
                <Col md="3">
                    <h5 className="text-center mt-5">Категорії</h5>

                    <Card>
                        <ListGroup variant="flush">
                            {
                                categories.map((item, index) => {
                                    return <>
                                        <ListGroup.Item style={{textAlign: "left"}}>
                                            <button
                                                key={index}
                                                style={{
                                                    fontWeight:
                                                        activeBtn === item.category
                                                            ? "bold" : "normal",
                                                    background: "none",
                                                    outline: "none",
                                                    border: "none"
                                                }}
                                                onClick={
                                                    () => {
                                                        setActiveBtn(item.category);
                                                    }
                                                }
                                                //className={activeBtn === item.category ? 'active' : null}>
                                                >
                                                {item.category}
                                            </button>
                                        </ListGroup.Item>
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

export default Blogs;