import { Form, Button } from 'react-bootstrap';
import '../stylesheets/LoginForm.css';

function LoginForm() {

    return (
        <div className="login-form-div">
            <Form className="login-form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button className="login-form-button" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    )
}

export default LoginForm;