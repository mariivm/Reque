import React from 'react';
import Form from 'react-bootstrap/Form';

function Radio({nombreCalificacion}) {
  return (
    <Form>
        {nombreCalificacion}
        <div key={"radio"} className="mb-3">
            <Form.Check
            inline
            label="1"
            name="group1"
            type={"radio"}
            id={"radio1"}
            />
            <Form.Check
            inline
            label="2"
            name="group1"
            type={"radio"}
            id={"radio2"}
            />
            <Form.Check
            inline
            label="3"
            name="group1"
            type={"radio"}
            id={"radio3"}
            />
            <Form.Check
            inline
            label="4"
            name="group1"
            type={"radio"}
            id={"radio4"}
            />
            <Form.Check
            inline
            label="5"
            name="group1"
            type={"radio"}
            id={"radio5"}
            />
        </div>
    </Form>
  )
}

export default Radio