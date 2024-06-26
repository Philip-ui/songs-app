import { useContext, useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { TodoContext } from "../contexts/TodoContext";
import { useNavigate } from "react-router-dom";

export default function AddTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  const setTodos = useContext(TodoContext).setTodos;
  const todos = useContext(TodoContext).todos;
  const navigate = useNavigate();

  function addTodo(event) {
    event.preventDefault();
    setTodos([...todos, { id: Date.now(), title, description, completed }]);
    navigate("/Home");
  }

  return (
    <Container>
      <Row className="my-5">
      <Col></Col>
        <Col className="border rounded py-3 bg-info">
          <h1 className="my-2">Add Song To Learn</h1>
          <Form onSubmit={addTodo}>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Song Title</Form.Label>
              <Form.Control
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Summer Love"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Song Lyrics</Form.Label>
              <Form.Control
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                as="textarea"
                rows={3}
                placeholder={`Summertime and I'm feeling fine \nKissed by the sun in the sky`}
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
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      <Col></Col>
      </Row>
    </Container>
  );
}