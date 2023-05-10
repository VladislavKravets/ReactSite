import React, {useContext, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import LanguageContext from "../Components/LanguageContext";

function Contacts() {
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');
    const [check, setCheck] = useState(false);
    const [validated, setValidated] = useState(false);

    const {language} = useContext(LanguageContext) || {};

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
            <h1>
                {
                    language === "uk" ?
                        "Зв'яжіться з нами"
                        :
                        "Contact Us"
                }
            </h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>
                        {language === "uk" && "Email адреса"}
                        {language === "en" && "Email address"}
                    </Form.Label>
                    <Form.Control
                        required
                        type="email"
                        placeholder =
                            {language === "uk" ? "Введіть Email" : "Enter email"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                        {language === "uk" && "Перевірте валідність email адреси."}
                        {language === "en" && "Please provide a valid email."}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formBasicFeedback">
                    <Form.Label>
                        {
                            language === "uk" ?
                                "Відгук"
                                :
                                "Feedback"
                        }
                    </Form.Label>
                    <Form.Control
                        required
                        as="textarea"
                        rows={3}
                        placeholder= {language === "uk" ? "Введіть відгук" : "Enter feedback"}
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                        {language === "uk" && "Будь ласка, залиште відгук."}
                        {language === "en" && "Please provide feedback."}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Check
                    required
                    type="checkbox"
                    label= {language === "uk" ? "Заціни мене" : "Check me out"}
                    value={check}
                    onChange={(e) => setCheck(e.target.value)}
                />

                <Button variant="primary" type="submit">
                    {language === "uk" ? "Відправити" : "Submit"}
                </Button>
            </Form>
        </div>
    );
}

export default Contacts;