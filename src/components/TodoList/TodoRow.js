
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default ({ item, handleCheck }) => {

    return (
        <Row className="p-1 item__row">
            <Col onClick={() => handleCheck(item)} >
                <div style={{ textDecoration: item.done ? 'line-through' : 'none' }}>
                    {item.title}
                </div>
            </Col>
            <Col xs={"auto"} sm={"auto"}  >
                <input type="checkbox" onChange={() => handleCheck(item)} checked={item.done} />
            </Col>
        </Row>
    )
}
