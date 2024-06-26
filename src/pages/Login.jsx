import { useContext, useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../AuthContext";
import { LoginoutContext } from '../LoginoutContext';

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");    
    const [userId, setUserId] = useState(0);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);
    const loginoutContext = useContext(LoginoutContext);    

    function Login() {
        const isCorrectUser = username === "chong";
        const isCorrectPassword = password === "password123";
        setIsLoggedIn(!isLoggedIn);        
        if (isCorrectUser && isCorrectPassword) {
            setUserId(userId+1);
            authContext.setToken('1234');
            loginoutContext.setIsLoggedIn(true);         
            navigate('/Home');            
        }
        else {
            navigate('/Login');
        }
    }
    
          
    return (
        <Container>
            <Row>
                <Col></Col>
                  <Col className="bg-light mt-3 py-4 rounded" style={{ border: "1px solid lightgrey" }}>
                    <h1 className="my-1">Login to your account</h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <Form.Text className="text-muted">
                            Username: chong
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlID="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            /> 
                            <Form.Text className="text-muted">
                            Password: password123
                            </Form.Text>                   
                        </Form.Group>
                        <Button variant="primary" onClick={Login}>Login</Button>
                    </Form>
                  </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}