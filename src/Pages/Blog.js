import React, {Component} from 'react';
import {Container, Col, Row, Card, ListGroup} from "react-bootstrap";
import {useParams} from "react-router-dom";


function Blog(props) {
    const { link } = useParams();

    return (
        <div>
            <h2>Заголовок блога {link}</h2>
            <p>Текст блога {link}</p>
        </div>
    );
}

export default Blog;