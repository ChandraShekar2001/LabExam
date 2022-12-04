import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./UserForm.css";
import { submitUserform } from "../store/actions/userform-actions";
import { useDispatch } from "react-redux";
import { useNavigate,Link } from "react-router-dom";
const UserForm = () => {
  const navigate = useNavigate();
    const [data, setData] = useState({
        gender: "",
        favcuisine: "",
        curhabits: "",
        skipbreakfast: "",
        coffeefreq: "",
    });

    const onChangeHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(submitUserform(data));
        console.log(data);
        // navigate("/surveylist")
    };
    return (
        <>
            <img src='/survey2.png' alt='' />
            <Link style={{position:"relative"}}to="/surveylist">Go to survey list</Link>
            <div className='form'>
                <h2 style={{ textAlign: "center" }}>Survey Form</h2>
                <Form onSubmit={submitHandler} method="POST">
                    <Form.Group className='mb-3 pad' controlId='formBasicEmail'>
                        <Form.Label style={{ fontWeight: "bold" }}>Gender</Form.Label>
                        <Form.Control name='gender' type='text' placeholder='Enter Gender' onChange={onChangeHandler} />
                    </Form.Group>

                    <Form.Group className='mb-3 pad' controlId='formBasicPassword'>
                        <Form.Label style={{ fontWeight: "bold" }}>Cuisine</Form.Label>
                        <Form.Control name='favcuisine' type='text' placeholder='Enter Cuisine' onChange={onChangeHandler}/>
                    </Form.Group>
                    <Form.Group className='mb-3 pad' controlId='formBasicPassword'>
                        <Form.Label style={{ fontWeight: "bold" }}>Current habits</Form.Label>
                        <Form.Control name='curhabits' type='text' placeholder='Enter Current Habits' onChange={onChangeHandler}/>
                    </Form.Group>
                    <Form.Group className='mb-3 pad' controlId='formBasicPassword'>
                        <Form.Label style={{ fontWeight: "bold" }}>Skip Breakfast</Form.Label>
                        <Form.Control
                            name='skipbreakfast'
                            type='text'
                            placeholder='How frequently do you skip breakfast?'
                            onChange={onChangeHandler}
                        />
                    </Form.Group>
                    <Form.Group className='mb-3 pad' controlId='formBasicPassword'>
                        <Form.Label style={{ fontWeight: "bold" }}>Cofee frequency</Form.Label>
                        <Form.Control
                            name='coffeefreq'
                            type='text'
                            placeholder='How frequently you drink coffee?'
                            onChange={onChangeHandler}
                        />
                    </Form.Group>

                    <Button variant='dark' type='submit' style={{ marginLeft: "41%" }}>
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    );
};

export default UserForm;
