import Form from "react-bootstrap/Form";

export const CustomInput = ({ label, ...rest }) => {
  return (
    <Form.Group className="mb-3">
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control {...rest} />
    </Form.Group>
  );
};

export const CustomSelect = ({ label, options, ...rest }) => {
  return (
    <Form.Group className="mb-3">
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Select {...rest}>
        <option>-- Select --</option>
        {options.map((option, i) => {
          <option key={i} value={option.value}>
            {option.text}
          </option>;
        })}
        <option value="income">Income</option>
        <option value="expenses">Expenses</option>
      </Form.Select>
    </Form.Group>
  );
};
