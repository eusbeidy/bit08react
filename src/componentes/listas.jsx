import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Listas = () => {
  const [lista, setList] = useState("")

  const handleChange = (e) => {
    setList(e.target.value)
  }

  const handleSutmit = (e) => {
    e.preventDefault()
    console.log('evento', e)

  }
  return (
    <Form onSubmit={handleSutmit}>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Lista de compras </Form.Label>
        <Form.Control type="text" placeholder="Ingresa un articulo" value={lista} onChange={handleChange}/>
      </Form.Group>
      <Button variant="info" type="submit">
        Guardar
      </Button>
    </Form>

  );
}



