import { useState } from "react";
import { Card, Form, Col, InputGroup, Button } from "react-bootstrap";
export default function CityDisplayInput() {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_OPEN_WEATHER_MAP_API_URL}?q=${city}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_MAP_API_KEY}`
      );
      const data = await res.json();
      console.log(data)
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };
  return (
    <Card border="0">
      <Card.Body>
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group as={Col} controlId="validationCustomUsername">
            <InputGroup>
              <InputGroup.Text
                id="inputGroupPrepend"
                className=" input-group-text rounded-pill bg-transparent border-0  ml-n5 "
              >
                <i className="fa fa-search"></i>
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="City"
                aria-describedby="inputGroupPrepend"
                required
                className="rounded-pill py-2 pr-5 mr-1 "
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mt-3 ">
            <div className="text-center ">
              <Button
                type="submit"
                className="btn btn-primary btn-lg btn-block w-75"
                disabled={loading}
              >
                {loading ? "Loading..." : "Display Weather"}
              </Button>
            </div>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}
