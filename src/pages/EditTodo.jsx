import { useContext, useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { TodoContext } from "../contexts/TodoContext";
import { useNavigate, useParams } from "react-router-dom";

export default function EditTodo() {
  const setTodos = useContext(TodoContext).setTodos;
  const todos = useContext(TodoContext).todos;
  const navigate = useNavigate();
  const id = parseInt(useParams().id);
  const currentTodo = todos.filter((todo) => todo.id === id)[0];
  const [title, setTitle] = useState(currentTodo.title);
  const [description, setDescription] = useState(currentTodo.description);
  const [completed, setCompleted] = useState(currentTodo.completed);

  function updateTodo(event) {
    event.preventDefault();
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { id, title, description, completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
    navigate("/Home");
  }

  return (
    <Container>
      <Row className="my-5">
      <Col></Col>
        <Col className="border rounded py-3 bg-info">
      <h1 className="my-3">Edit Song</h1>
      <Form onSubmit={updateTodo}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Song Title</Form.Label>
          <Form.Control
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder=""
            
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Song Lyrics</Form.Label>
          <Form.Control
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            as="textarea"
            rows={3}
            placeholder={""}
            
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