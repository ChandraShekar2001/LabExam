import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './UserForm.css'

const UserForm = () => {
  return (
    <>
    <img src="/survey2.png" alt=""/>
    <div className='form'>
      <h2 style={{textAlign:'center'}}>Survey Form</h2>
    <Form>
      <Form.Group className="mb-3 pad" controlId="formBasicEmail">
        <Form.Label style={{fontWeight:'bold'}}>Gender</Form.Label>
        <Form.Control type="text" placeholder="Enter Gender" />
      </Form.Group>

      <Form.Group className="mb-3 pad" controlId="formBasicPassword">
        <Form.Label style={{fontWeight:'bold'}}>Cuisine</Form.Label>
        <Form.Control type="text" placeholder="Enter Cuisine" />
      </Form.Group>
      <Form.Group className="mb-3 pad" controlId="formBasicPassword">
        <Form.Label style={{fontWeight:'bold'}}>Current habits</Form.Label>
        <Form.Control type="text" placeholder="Enter Current Habits" />
      </Form.Group>
      <Form.Group className="mb-3 pad" controlId="formBasicPassword">
        <Form.Label style={{fontWeight:'bold'}}>Skip Breakfast</Form.Label>
        <Form.Control type="text" placeholder="How frequently do you skip breakfast?" />
      </Form.Group>
      <Form.Group className="mb-3 pad" controlId="formBasicPassword">
        <Form.Label style={{fontWeight:'bold'}}>Cofee frequency</Form.Label>
        <Form.Control type="password" placeholder="How frequently you drink coffee?" />
      </Form.Group>
     


      <Button variant="dark" type="submit" style={{marginLeft: '41%'}}>
        Submit
      </Button>
    </Form>

    </div>
    </>
  )
}

export default UserForm