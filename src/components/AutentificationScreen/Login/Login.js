import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Login() {
  return (
    <Form className="form-custom">
      <h2>Prihlásenie</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Používateľské meno</Form.Label>
        <Form.Control type="text" placeholder="username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Heslo</Form.Label>
        <Form.Control type="password" placeholder="Heslo" />
      </Form.Group>

      <Button variant="primary" type="submit" className="autentification-cta">
        Prihlásiť sa
      </Button>
    </Form>
  );
}

export default Login;
