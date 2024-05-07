import { useState } from "react";
import { CustomInput } from "../components/CustomInput";
import { Footer } from "../components/Footer";
import { TopNav } from "../components/TopNav";
import { Col, Container, Form, Row, Button, Alert } from "react-bootstrap";
import { postNewUser } from "../util/axiosHandler";

const initialState = {
  name: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};
const Signup = ({ loggedUser }) => {
  const [form, setForm] = useState(initialState);
  const [response, setResponse] = useState({});
  const inputs = [
    {
      label: "Name",
      name: "name",
      type: "text",
      placeholder: "Enter your name",
      required: true,
      value: form.name,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter email",
      required: true,
      value: form.email,
    },
    {
      label: "Phone",
      name: "phone",
      type: "number",
      placeholder: "0400000000",
      required: true,
      value: form.phone,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "********",
      required: true,
      value: form.password,
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "********",
      required: true,
      value: form.confirmPassword,
    },
  ];

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { confirmPassword, ...rest } = form;

    if (confirmPassword !== rest.password) {
      return alert("Passwords do not match. Please check the password");
    }

    //call axioshandler
    const result = await postNewUser(rest);

    console.log(result);
    setResponse(result);
    if (result.status === "success") {
      setForm(initialState);
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <div>
      {/* header */}
      <TopNav loggedUser={loggedUser} />
      {/* mainbody */}
      <Container className="main" fluid>
        <Row>
          <Col
            md={6}
            className="bg-info main vh-md-100 p-5 d-flex justify-content-center align-items-center"
          >
            <div className="shadow-lg rounded p-3 text-white">
              <h1>Join our community</h1>
              <p>
                Join millions of users who are beniffiting the expenses
                regulator
              </p>
            </div>
          </Col>
          <Col
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="shadow-lg p-5 rounded border w-75 mt-5 mb-5">
              <h2 className="text-center">Signup Now</h2>
              <hr />
              {response?.message && (
                <Alert
                  variant={
                    response?.status === "success" ? "success" : "danger"
                  }
                >
                  {response.message}
                </Alert>
              )}
              <Form onSubmit={handleOnSubmit}>
                {inputs.map((item, i) => (
                  //spread the item for the name, types and placeholder
                  <CustomInput onChange={handleOnChange} key={i} {...item} />
                ))}
                <div className="d-grid">
                  <Button variant="primary" type="submit">
                    Sign Up
                  </Button>
                </div>
              </Form>

              <p className="text-end mt-3">
                Alerady have an account <a href="/">Login</a> now
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

export default Signup;
