import { useContext, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { TodoContext } from "../contexts/TodoContext";
import  Modal  from 'react-bootstrap/Modal';

export default function TodoScheduleA({ todoSchedule }) {
  const completed = todoSchedule.completed;
  const border = completed ? "success" : "danger";
  const [timer, setTimer] = useState(0);
  const [timerInterval, setTimerInterval] = useState(null);
  const setTodoSchedules = useContext(TodoContext).setTodoSchedules;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const startTimer = () => {
    if (timerInterval === null) {
      const intervalID = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
      setTimerInterval(intervalID);
    }
  };

  const pauseTimer = () => {
    clearInterval(timerInterval);
    setTimerInterval(null);
  };

  const resetTimer = () => {
    clearInterval(timerInterval);
    setTimerInterval(null);
    setTimer(0);
  };

  const deleteTodo = () => {
    setTodoSchedules((prevTodoSchedules) =>
    prevTodoSchedules.filter((prevTodoSchedule) => prevTodoSchedule.id !== todoSchedule.id)
    );
  };

  useEffect(() => {
    return () => {
      clearInterval(timerInterval);
    };
  }, [timerInterval]);
  return (
    <>
      <Card border={border} className="my-3">
        <Card.Header>{!completed && "Not"} Completed</Card.Header>
        <Card.Body>
          <Card.Title>{todoSchedule.title}</Card.Title>
          <Card.Text>{todoSchedule.dateScheduled}</Card.Text>
          <Card.Text>{todoSchedule.timeScheduled}</Card.Text>
          <p>Timer: {timer} seconds</p>
          <Button onClick={startTimer}>
            <i className="bi bi-play"></i>
          </Button>
          <Button onClick={pauseTimer} className="ms-2">
            <i className="bi bi-pause-fill"></i>
          </Button>
          <Button onClick={resetTimer} className="ms-2">
            <i className="bi bi-arrow-clockwise"></i>
          </Button>
          <Button variant="secondary" href={`todoScheduleA/${todoSchedule.id}`} className="ms-2">
            <i className="bi bi-pencil"></i>
          </Button>
          <Button variant="danger" onClick={handleShow} className="ms-2">
            <i className="bi bi-trash3"></i>
          </Button>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this todo?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={deleteTodo} className="ms-2">
            <i className="bi bi-trash3"></i>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}



