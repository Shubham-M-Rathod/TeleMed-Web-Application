import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './SignUp.css';

const SignUp = () => {

  const [state, setState] = React.useState('Doctor');

  return (
    <div className="bohot-outer">
    <div className="signup-outer">
    <Form className='SignUp'>
    <Form.Group className="mb-3">
      <Form.Label>Select</Form.Label>
      <Form.Check type='radio' label="Doctor" checked={state==='Doctor'} onChange={()=>setState('Doctor')}/>
      <Form.Check type='radio' label="Patient" checked={state==='Patient'} onChange={()=>setState('Patient')}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" />
      </Form.Group>
      <Row>
      <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="City" />
      </Form.Group>
      {state === 'Patient' &&
      <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
        <Form.Label>Blood Group</Form.Label>
        <Form.Control type="text" placeholder="Blood Group" />
      </Form.Group>
      }
      {state === 'Doctor' &&
      <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
        <Form.Label>Specialization</Form.Label>
        <Form.Control type="text" placeholder="Specialization" />
      </Form.Group>
      }
      </Row>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary">
        SignUp
      </Button>
    </Form>
    </div>
    </div>
  )
}

export default SignUp;