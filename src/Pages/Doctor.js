import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DoctorMssg from './DoctorMssg';
import './Doctor.css'
import NavBar from './NavBar';

const Doctor = () => {

  const handleSubmit = (event) => 
  {
    event.preventDefault();
    console.log("Submitting");
  }

  return (
    <>
    <NavBar/>
    <div className="bohot-outer">
    <div className='doctor-outer'>
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3 w-50" controlId='patient'>
      <Form.Label>Patient</Form.Label>
      <Form.Select>
        <option>Select</option>
        <option value="1">Patient 1</option>
        <option>Patient 2</option>
        <option>Patient 3</option>
        <option>Patient 4</option>
        <option>Patient 5</option>
      </Form.Select>
      </Form.Group>
      <hr/>
      <Row>
        <Col sm={4}>
      <Form.Group className='mb-3 medicine'>
      <Form.Label>Medicine</Form.Label>
      <Form.Select>
        <option>Select</option>
        <option>m1</option>
        <option>m2</option>
        <option>m3</option>
      </Form.Select>
      </Form.Group>
        </Col>
      <div className='dose'>
      <Form.Group>
      <Form.Group className="mb-3">
      <Form.Label>Select</Form.Label>
      <Row>
      <Form.Check className='w-50' type='checkbox' label="Before Lunch" />
      <Form.Check className='w-50' type='checkbox' label="After Lunch" />
      <Form.Check className='w-50' type='checkbox' label="Before Dinner" />
      <Form.Check className='w-50' type='checkbox' label="After Dinner"/>
      </Row>
      </Form.Group>
      </Form.Group>
      </div>
      </Row>
      <hr/>
      Duration
      <Row>
        <Col>
        <Form.Control type="date" controlId='startDate'/>
        </Col>
        to
        <Col>
        <Form.Control type="date" controlId='endDate'/>
        </Col>
      </Row>
      {/* <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Other Stuff</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group> */}
      <hr/>
      <Row>
      <Col><Button type='submit' variant='primary' id='submit'>Submit</Button></Col>
      <Col><DoctorMssg/></Col>
      </Row>
      </Form>
      </div>
      </div>
      </>
  )
}

export default Doctor;