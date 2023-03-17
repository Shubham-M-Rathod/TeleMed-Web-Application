import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './MessgModal.css'

const mssgs=
[{
    messg:'message',
    detail: 'detailsadkjabfkjankjankajnkacnasckancksacnkjancasc',
    by:'abc'
},
{
    messg:'message1',
    detail: 'detailsadkjabfkjankjankajnkacnasckancksacnkjancasc',
    by:'def'
},
{
    messg:'message2',
    detail: 'detailsadkjabfkjankjankajnkacnasckancksacnkjancasc',
    by:'ghi'
}
]
const MessgModal = () => {
    const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
<>
    <button id='main' onClick={handleShow}>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-envelope" viewBox="0 0 16 16"
    style={{marginTop:'15px'}}>
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
</svg><br/>My Messages</button>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center'>Messages</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {
            mssgs.map((item,index)=>(
                <div className='messages'>
                <h2>By {item.by}</h2>
                <p>{item.detail}</p>
                <hr/>
                </div>
            ))
        }
        </Modal.Body>
      </Modal>
</>
  )
}

export default MessgModal