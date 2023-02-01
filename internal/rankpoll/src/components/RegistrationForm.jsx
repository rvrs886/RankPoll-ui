import { Form, Button } from 'react-bootstrap';
import '../stylesheets/RegistrationForm.css';

function RegistrationForm() {
    return (
        <div className="registration-form-div">
            <Form className="registration-form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Repeat password" />
                </Form.Group>
                <Button className="registration-form-button" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    )
}

export default RegistrationForm;