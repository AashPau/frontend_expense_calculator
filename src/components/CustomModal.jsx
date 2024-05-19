import Modal from "react-bootstrap/Modal";
import { useUser } from "../pages/UserContext";

export const CustomModal = ({ children, title }) => {
  const { showForm, setShowForm } = useUser();

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button> */}

      <Modal
        show={showForm}
        onHide={setShowForm}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
};
