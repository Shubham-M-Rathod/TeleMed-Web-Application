
import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {useState} from 'react'
import './Patient.css'
import CloseButton from 'react-bootstrap/CloseButton'
import MessgModal from './MessgModal'

const temp = [
    {
        startDate : 1000,
        endDate : 2000,
        name : 'medicine 1',
        by : 'Dr. Abc',
        priority: 'blue',
    },
    {
        startDate : 2000,
        endDate : 3000,
        name : 'medicine 2',
        by : 'Dr. Def',
        priority: 'red',
    },
    {
        startDate:1500,
        endDate:2500,
        name : 'medicine 3',
        by: 'Dr. Def',
        priority: 'red',
    }
]

temp.sort((a, b) => a.endDate - b.endDate)
const Patient = () => {
  const [med, setMed] = useState(temp)
  const [done, setDone] = useState([])

  const handler = (idx) => 
{
    const temp2 = [...med];
    let ele = temp2.splice(idx, 1);
    console.log(ele);
    setMed(temp2);    
    setDone([...done, ele[0]])
}
  return (
    <div className="bohot-outer">
    <div className='patient-outer'>
    <Row>
    <Col>
    <h1>Patient</h1></Col>
    <Col>
    <MessgModal/></Col></Row>

    <Row>
        <Col>
            {
            med.length >0 && 
            <div className='reminder'>   
            <h3>Reminder</h3>
            {med.map((item, i)=>
            (
                <Row>
                <Col>
                <p className='text-center' style={{color:item.priority}}>
                    {item.name}<br/>
                    <small className='text-center'>{item.by}</small>
                </p></Col>
                <Col>
                <CloseButton variant="white" onClick={()=>handler(i)}/></Col>
                <hr/>
                </Row>
            ))}
            </div>
            }
        </Col>
        <Col>
            {
            done.length >0 && 
            <div className='completed'>
            <h3>Completed</h3>
            {done.map((item, i)=>
            (
                <Row>
                <Col>
                <p className='text-center' style={{color:item.priority}}>
                    {item.name}<br/>
                    <small className='text-center'>{item.by}</small>
                </p></Col>
                <hr/>
                </Row>
            ))}
            </div>
            }
        </Col>
    </Row>
    </div>
    </div>
  )
}

export default Patient