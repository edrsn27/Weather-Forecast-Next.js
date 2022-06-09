import { useState } from "react";
import { Card, Form, Col, InputGroup, Button } from "react-bootstrap";
import { useQuery } from "../../context/WeatherProvider";
import { useRouter } from "next/router";
export default function CityDisplayInput() {
  const { getWeather, setLoading, loading, city, setCity } = useQuery();

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const query = await getWeather();
      if (query.cod === "401") {
        router.push("/weather");
      } else {
        alert(query.message);
      }
    } catch (error) {
      alert(error.message);
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
