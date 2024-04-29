import { CustonInput } from "../components/CustomInput";
import { Footer } from "../components/Footer";
import { TopNav } from "../components/TopNav";
import { Col, Container, Form, Row, Button } from "react-bootstrap";

const Login = () => {
  const inputs = [
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter email",
      required: true,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "********",
      required: true,
    },
  ];
  return (
    <div>
      {/* header */}
      <TopNav />
      <Container className="main" fluid>
        <Row>
          <Col
            md={6}
            className="bg-primary main vh-100 d-flex justify-content-center align-items-center"
          >
            <div className="shadow-lg rounded p-3 text-white">
              <h1>Welcome Back!</h1>
              <p>Login to take control of you finances</p>
            </div>
          </Col>
          <Col
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="shadow-lg p-3 rounded border w-75">
              <h2 className="text-center">Login Now</h2>
              <hr />
              <Form>
                {inputs.map((item, i) => (
                  //spread the item for the name, types and placeholder
                  <CustonInput key={i} {...item} />
                ))}
                <div className="d-grid">
                  <Button variant="primary">login Now</Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      {/* mainbody */}

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Login;
