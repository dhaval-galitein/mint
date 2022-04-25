import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const ToDo = () => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  const [todosArr, setTodosArr] = React.useState([]);

  const handleAddTodo = () => {
    setTodosArr([...todosArr, { id: uuidv4(), title, description }]);
    setTitle('');
    setDescription('');
  };

  const handleRemoveTodo = (id) => {
    setTodosArr(todosArr.filter((todo) => todo.id !== id));
  };

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={title}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Desc</Form.Label>
          <Form.Control
            type="textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
        </Form.Group>
        <Button variant="primary" type="button" onClick={handleAddTodo}>
          Submit
        </Button>
      </Form>

      <Row className="mx-0">
        {todosArr.map(({ id, title, description }) => (
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Button variant="primary" onClick={() => handleRemoveTodo(id)}>
                Delete
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
};

export default ToDo;
