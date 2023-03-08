import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";

function Contacts() {

    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');
    const [check, setCheck] = useState(false);
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };


    return (
        <div>
            <h1>Contact Us</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid email.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formBasicFeedback">
                    <Form.Label>Feedback</Form.Label>
                    <Form.Control
                        required
                        as="textarea"
                        rows={3}
                        placeholder="Enter feedback"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide feedback.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Check
                    required
                    type="checkbox"
                    label="Check me out"
                    value={check}
                    onChange={(e) => setCheck(e.target.value)}
                />

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Contacts;