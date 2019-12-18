import React, { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ViewBase from './components/ViewBase';
import InputForm from './components/InputForm';
import TodoList from './components/TodoList';
import Divider from './components/Divider';

function App() {
  const todoListRef = useRef();

  const addItem = (todoItemTitle) => {
    todoListRef.current.addItem(todoItemTitle); // Calling child method so it doesn't rerender whole app, but just the list.
  }

  return (
    <ViewBase>
      <Container className="col-lg-8 box__grayBorder">
        <Row className="p-1 pt-3 pb-3">
          <Col>
            <InputForm onSubmit={addItem} />
          </Col>
        </Row>
        <Divider />
        <TodoList ref={todoListRef} initalItems={[{ id: 1, title: 'Buy lemons', done: false }]} />
      </Container>
    </ViewBase>
  );
}

export default App;
