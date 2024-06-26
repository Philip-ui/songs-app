import { useContext } from "react";
import { Col, Container, Row, Nav, Navbar } from "react-bootstrap";
import { Outlet} from 'react-router-dom';
import TodoScheduleA from "../components/TodoScheduleA";
import { TodoContext } from "../contexts/TodoContext";

export default function Schedule() {
  const todoSchedules = useContext(TodoContext).todoSchedules;
  return (
    <>
    <Row className="my-5">
      <Col></Col>
          <Col className="border rounded" sm={6}>
    <Navbar bg="light" variant="light" className="border rounded mt-2">
        <Container>
          <Navbar.Brand href="/layout">Vocals Learning Tracker</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>           
            <Nav.Link href="/addschedule">Add Schedule</Nav.Link> 
            <Nav.Link href="/logout">Logout</Nav.Link>                      
          </Nav>          
        </Container>
      </Navbar>
      <Outlet />      
    <Container className="border rounded my-2">
      <h1 className="my-3">Schedule</h1>
      <Row>
        <CardGroup todoSchedules={todoSchedules} />
      </Row>
    </Container>
    </Col>
   <Col></Col>
   </Row> 
    </>
  );
}

function CardGroup({ todoSchedules }) {
  return todoSchedules.map((todoSchedule) => {
    return (
      <Col md={4} key={todoSchedule.id}>
        <TodoScheduleA todoSchedule={todoSchedule} />
      </Col>
    );
  });
}
