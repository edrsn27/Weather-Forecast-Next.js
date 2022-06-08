import { Card, Form, Col, InputGroup, Button } from "react-bootstrap";
export default function FormExample() {
  return (
    <Card border="0">
      <Card.Body>
        <Form noValidate>
          <Form.Group as={Col} controlId="validationCustomUsername">
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">
                <i class="fa fa-search" aria-hidden="true"></i>
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="City"
                aria-describedby="inputGroupPrepend"
                required
              />
            </InputGroup>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}
