import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";


export default function Hello() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [checker,setChecker] = useState(false);

  function handleClick(e) {
    setChecker(true);
    e.preventDefault();
    console.log(e);
    axios
      .post("/users", { name: name, email: email })
      .then((response) => console.log(response))
      .catch((err) => console.error(err));

    // return <Alert>User is successfully added to the database!</Alert>;
  }
  return (
    <div>
      {checker && <Alert variant="success">User is successfully added to the database!</Alert>}
      <Form onSubmit={handleClick} >
        <Form.Group
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-3"
          controlId="formBasicTextField"
        >
          <Form.Label>Name </Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-3"
          controlId="formBasicEmail"
        >
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email " />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
