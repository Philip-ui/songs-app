import { Container, Row, Col, Card } from 'react-bootstrap';
//import { useNavigate } from 'react-router-dom';
//import { useContext } from 'react';
//import { LoginoutContext } from '../LoginoutContext';
//import { AuthContext } from '../AuthContext';


export default function Profile() {  
   
  return (
    <Container>
        <h1 className="my-3">User Profile</h1>
        <Row>
            <Col md={4}>
                <Card className='my-3'>
                    <Card.Body>
                        <Card.Text>Name: Kok Onn</Card.Text>
                        <Card.Text>Email: kokonn@sigmascholl.co</Card.Text>                 
                        
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    
  )
}
