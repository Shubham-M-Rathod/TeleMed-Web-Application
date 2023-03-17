import React from 'react'
import NavBar from './NavBar'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DoctorMssg from './DoctorMssg';
import './DoctorPatient.css'

const patients = [
{
    name: 'Abc',
    status: 0,
    issue: 'HeadAche',
},
{
    name: 'Def',
    status: 1,
    issue: 'Amnesia',
},
{
    name: 'John Doe',
    status: 1,
    issue: 'Fever',
},]

const DoctorPatient = () => {
  return (
    <>
    <NavBar/>
    <div className='dp-outer bohot-outer'>
        {patients.map((patient, index) => 
        <>
            <Card>
            <Row>
            <Col>
            <h4 style={{color: patient.status===1 ? 'blue' : 'green'}}>{patient.name}</h4>
            </Col>
            <Col>
            <DoctorMssg to={patient.name}/>
            </Col>
            </Row>
            <h5>{patient.issue}</h5>
            </Card>
        </>
            )
        }
    </div>
    </>
  )
}

export default DoctorPatient