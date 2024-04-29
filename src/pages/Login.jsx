import { CustomInput } from "../components/CustomInput";
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
      {/* mainbody */}
      <Container className="main" fluid>
        <Row>
          <Col
            md={6}
            className="bg-primary main vh-100 p-5 d-flex justify-content-center align-items-center"
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
            <div className="shadow-lg p-5 rounded border w-75 mt-5 mb-5">
              <h2 className="text-center">Login Now</h2>
              <hr />
              <Form>
                {inputs.map((item, i) => (
                  //spread the item for the name, types and placeholder
                  <CustomInput key={i} {...item} />
                ))}
                <div className="d-grid">
                  <Button variant="primary">login Now</Button>
                </div>
              </Form>
              <p className="text-end mt-3">
                Are you new? <a href="/signup">Signup</a> now
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Login;
