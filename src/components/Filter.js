import React from 'react'
import {InputGroup,FormControl} from 'react-bootstrap';
function Filter() {
    return (
        <div>
            <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1"><i class="fas fa-search"></i></InputGroup.Text>
    <FormControl
      placeholder="Search By Name"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
        </div>
    )
}

export default Filter
