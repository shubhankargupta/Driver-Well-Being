import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge'


export default class SendMail extends Component
{
	render(){
	return (
    <div>
    <ListGroup>
  <ListGroup.Item variant="primary">
  <div style={{alignItems: 'right'}}>
  <Button variant="primary">
  Profile <Badge variant="light">9</Badge>
  <span className="sr-only">unread messages</span>
</Button>
  
  
  <Button className="pull-right" variant="success">
  shubhankargupta@gmail.com
  <span className="sr-only">unread messages</span>
</Button>
  </div>
  </ListGroup.Item>
  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
</ListGroup> 		
    <Form>
    <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Name</Form.Label>
    <Form.Control as="textarea" rows="1" />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
    </Form>
    <Button variant="primary" type="submit">
    Submit
  </Button>
    </div>
  );
}

}