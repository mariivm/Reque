import Form from 'react-bootstrap/Form';

// eslint-disable-next-line react/prop-types
function Radio({nombreCalificacion, state, setState}) {
  const onOptionChange = (e)=> {
    setState(e.target.value);
  }

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
            value={1}
            checked={state === 1}
            onChange={(e) => onOptionChange(e)}
            />
            <Form.Check
            inline
            label="2"
            name="group1"
            type={"radio"}
            id={"radio2"}
            value={2}
            checked={state === 2}
            onChange={onOptionChange}
            />
            <Form.Check
            inline
            label="3"
            name="group1"
            type={"radio"}
            id={"radio3"}
            value={3}
            checked={state === 3}
            onChange={onOptionChange}
            />
            <Form.Check
            inline
            label="4"
            name="group1"
            type={"radio"}
            id={"radio4"}
            value={4}
            checked={state === 4}
            onChange={onOptionChange}
            />
            <Form.Check
            inline
            label="5"
            name="group1"
            type={"radio"}
            id={"radio5"}
            value={5}
            checked={state === 5}
            onChange={onOptionChange}
            />
        </div>
    </Form>
  )
}

export default Radio