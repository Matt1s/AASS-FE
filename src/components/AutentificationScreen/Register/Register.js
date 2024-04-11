import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Register() {
  return (
    <Form className="form-custom">
      <h2>Registrácia</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Používateľské meno</Form.Label>
        <Form.Control type="text" placeholder="username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Heslo</Form.Label>
        <Form.Control type="password" placeholder="Heslo" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicRepeatPassword">
        <Form.Label>Potvrdenie hesla</Form.Label>
        <Form.Control type="password" placeholder="Zopakujte heslo" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Register;
