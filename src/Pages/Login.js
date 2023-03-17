import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';
import './Login.css';

const Login = () => {

  const [state, setState] = React.useState('Doctor');

  return (
    <div className="bohot-outer">
    <div className="login-outer">
    <Form className='login'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Label>Select</Form.Label>
      <Form.Check type='radio' label="Doctor" checked={state==='Doctor'} onChange={()=>setState('Doctor')}/>
      <Form.Check type='radio' label="Patient" checked={state==='Patient'} onChange={()=>setState('Patient')}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
      <Link to="/signup">
      <Button variant="primary">
        SignUp
      </Button>
      </Link>
    </Form>
    </div>
    </div>
  )
}

export default Login