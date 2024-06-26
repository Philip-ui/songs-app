import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const navigate = useNavigate();
  
      
  const handleLoginClick = () => {
    navigate('/');
  } 
    

  return (
    <Container>
        <h1 className="my-3">Logged Out</h1>
        <Row>
            <Col md={4}>
                <Card className='my-3'>
                    <Card.Body>                             
                    <Card.Text>You are logged out</Card.Text>      
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Button variant="primary" onClick={handleLoginClick}>Login</Button>
    </Container>
    
  )
}