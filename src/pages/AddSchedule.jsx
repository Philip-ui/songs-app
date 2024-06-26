import { useContext, useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { TodoContext } from "../contexts/TodoContext";
import { useNavigate } from "react-router-dom";

export default function AddSchedule() {
  const [title, setTitle] = useState(""); 
  const [completed, setCompleted] = useState(false);
  const setTodoSchedules = useContext(TodoContext).setTodoSchedules;
  const todoSchedules = useContext(TodoContext).todoSchedules;
  const navigate = useNavigate();
  const [dateScheduled, setDateScheduled] = useState("");  
  const [timeScheduled, setTimeScheduled] = useState("");  

  function addSchedule(event) {
    event.preventDefault();
    setTodoSchedules([...todoSchedules, { id: Date.now(), title, dateScheduled, timeScheduled, completed }]);
    navigate("/Schedule");
  }

  return (
    <Container>
      <Row className="my-5">
      <Col></Col>
        <Col className="border rounded py-3 bg-success text-white">
      <h1 className="my-3">Add To Schedule</h1>
      <Form onSubmit={addSchedule}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Vocal Lesson Type</Form.Label>
          <Form.Control
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Bass"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="date">
          <Form.Label>Date</Form.Label>
          <Form.Control
            value={dateScheduled}
            onChange={(e) => setDateScheduled(e.target.value)}
            type="text"            
            placeholder={`12/11/23`}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="time">
          <Form.Label>Time</Form.Label>
          <Form.Control
            value={timeScheduled}
            onChange={(e) => setTimeScheduled(e.target.value)}
            type="text"            
            placeholder={`14:00`}
            required
          />
        </Form.Group>
        <Form.Check
          type="checkbox"
          id="completed"
          label="Mark as completed"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
          className="mb-3"
        />
        <Button variant="light" type="submit">
          Submit
        </Button>
      </Form>
      </Col>
      <Col></Col>
      </Row>
    </Container>
  );
}