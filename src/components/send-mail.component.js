import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import * as emailjs from 'emailjs-com';



export default class SendMail extends Component
{
   constructor(props){
        super(props);
        this.state={
            email:'',
            message:''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }





    handleSubmit(event) 
    {
        console.log(this.state.email);
        console.log(this.state.message);

        event.preventDefault();

        alert('Mail sent successfully');

        
    let templateParams = {
      from_name: this.state.email,
      to_name: "shubhankargupta@gmail.com",
      subject: "Hello",
      message_html: this.state.message,
     }
     emailjs.send(
      'gmail',
      'template_6xORTsAZ',
       templateParams,
      'user_1eQPnKbW6xEv8P5xLJC4K'
     )

     /*Email.send({
    Host : "smtp.yourisp.com",
    Username : "shubhankargupta@hotmail.com",
    Password : "Shalini@12345",
    To : this.state.email,
    From : "shubhankargupta@hotmail.com",
    Subject : "Sample subject",
    Body : this.state.message
}).then(
  message => alert(message)
);*/

    
 

     this.resetForm()
        

    }


    resetForm() {
    this.setState({
      email: '',
      message: ''
    })
  }



	render(){
	return (
    <div>

     <Alert variant="success">
  <p>Hey, would you like to ask one of these supporters to help you out with goals?</p>
  </Alert>
    
    <br/>
    <br/>
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
  <Row>
    <Col sm={4}>
      <ListGroup>
        <ListGroup.Item action href="#link1">
          Samuel Lionel <Badge variant="success">12</Badge>
        </ListGroup.Item>
        <ListGroup.Item action href="#link2">
          Katherine Jones  <Badge variant="success">11</Badge>
        </ListGroup.Item>
      <ListGroup.Item action href="#link3">
          Derek Beth  <Badge variant="success">9</Badge>
        </ListGroup.Item>
      </ListGroup>
    </Col>
    <Col sm={8}>
      <Tab.Content>
        <Tab.Pane eventKey="#link1">
          <h3> samuel@yahoo.com </h3>
        </Tab.Pane>
        <Tab.Pane eventKey="#link2">
          <h3> katherinej@gmail.com </h3>
        </Tab.Pane>
        <Tab.Pane eventKey="#link3">
          <h3> derekb@gmail.com </h3>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container> 
<br/>
<br/>		
    <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" onChange = {(event) => this.setState({email: event.target.value })} placeholder="Enter email" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" placeholder="Hi, Could you help out with my goals? Go to the url (http://localhost:3000/) to access my profile." onChange = {(event) => this.setState({message: event.target.value })} rows="3"/>
  </Form.Group>
    </Form>
    <Button variant="primary" type="submit" onClick={(event) => this.handleSubmit(event)}>
    Send
  </Button>
    </div>
  );
}

}