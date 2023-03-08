import React, {useEffect, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";

function ModalBox(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState( false)
    const [passwordDirty, setPasswordDirty] = useState( false)
    const [emailError, setEmailError] = useState( 'Email не може бути порожнім')
    const [passwordError, setPasswordError] = useState( 'Пароль не може бути порожнім')
    const [formValid, setFormValid] = useState(false)

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!re.test(String(e.target.value.toLowerCase()))) {
            setEmailError('Некоректний email')
        } else {
            setEmailError('')
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 3 || e.target.length > 8) {
            setPasswordError('Пароль повинен мати не менше 3 і не більше 8 символів')
            if (!e.target.value) {
                setPasswordError('Пароль не може бути порожнім')
            }
        } else {
            setPasswordError('')
        }
    }
    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }

    //якщо помилка не порожня, то будемо щось робити
    useEffect ( () => {
        if (emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    },[emailError, passwordError])


    return (
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Log in</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="fromBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            {(emailDirty && emailError) && <div style={{color:"red"}}>{emailError}</div>}
                            <Form.Control onChange={e => emailHandler(e)} name="email" value={email} onBlur={e => blurHandler(e)} type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>


                        <Form.Group controlId="fromBasicPassword">
                            <Form.Label>Password</Form.Label>
                            {(passwordError && passwordDirty) && <div style={{color:"red"}}>{passwordError}</div>}
                            <Form.Control onChange={e => passwordHandler(e)} name="password" value={password} onBlur={e => blurHandler(e)} type="password" placeholder="Enter password">
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="fromBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me"/>
                        </Form.Group>

                        <Button disabled={!formValid} variant="primary" type="submit">
                            Submit
                        </Button>

                    </Form>
                </Modal.Body>
            </Modal>
    );
}

export default ModalBox;