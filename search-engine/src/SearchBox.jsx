import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faMicrophone, faCamera } from '@fortawesome/free-solid-svg-icons'


export const SearchBox = () => {

  return (
    <>
      <div className='title'>
        <span className='first'>G</span>
        <span className='second'>o</span>
        <span className='third'>o</span>
        <span className='fourth'>g</span>
        <span className='fifth'>l</span>
        <span className='sixth'>e</span>
      </div>
      <InputGroup >

        <div style={{ "margin-left": "34%", "width": "27%", display: "flex" }}>
          <div className='magnifying'><FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#d6dce5", }} /></div>

          <Form.Control
            aria-label="Username"
            aria-describedby="basic-addon1"
            className="input-box"
            type="text"
            placeholder="    Search Google or type a URL"
          />
          <div style={{  display: "flex" }} className='micro-camera'>
            <FontAwesomeIcon icon={faMicrophone} />
            <FontAwesomeIcon icon={faCamera} style={{ color: "#bfcadf", }} />
          </div>
        </div>
      </InputGroup>
    </>
  )

}

export default SearchBox;