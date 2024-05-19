import { useState } from "react";
import { CustomInput, CustomSelect } from "../components/CustomInput";
import { postNewTransaction } from "../util/axiosHandler";
import { toast } from "react-toastify";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useUser } from "../pages/UserContext";

export const NewTransForm = () => {
  const [form, setForm] = useState({});
  const { getUserTransactions, setShowForm } = useUser();

  const inputs = [
    {
      name: "type",
      // type: "text",
      placeholder: "type",
      required: true,
      elmType: "select",
      options: [
        {
          value: "income",
          text: "Income",
        },
        {
          value: "expenses",
          text: "expenses",
        },
      ],
    },
    {
      name: "title",
      type: "text",
      placeholder: "Please enter title",
      required: true,
    },

    {
      name: "amount",
      type: "number",
      placeholder: "Please enter Amount",
      required: true,
    },
    {
      name: "date",
      type: "date",
      required: true,
    },
  ];
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = async (e) => {
    //dont reload the browser .

    e.preventDefault();
    const { status, message } = await postNewTransaction(form);
    toast[status](message);
    status == "success" && getUserTransactions() && setShowForm(false);
  };
  return (
    // <Form>
    //   {inputs.map((item, i) => (
    //     <CustomInput onChange={handleOnChange} key={i} {...item} />
    //   ))}
    //   <Button variant="primary" type="submit">
    //     Submit
    //   </Button>
    // </Form>

    <Form className="shadow-lg p-3 border rounded" onSubmit={handleOnSubmit}>
      <Row>
        {inputs.map(({ elmType, ...item }, i) => (
          <Col md={2} key={i}>
            {elmType === "select" ? (
              <CustomSelect {...item} onChange={handleOnChange} />
            ) : (
              <CustomInput {...item} onChange={handleOnChange} />
            )}
          </Col>
        ))}
        <Col className="mb-3">
          <Button variant="primary" type="submit" className="w-100">
            Add transaction
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
