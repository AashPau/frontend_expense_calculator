import { Button, Col, Container, Row } from "react-bootstrap";
import { Footer } from "../components/Footer";
import { AuthComp } from "../components/AuthComp";
import { TopNav } from "../components/TopNav";
import { NewTransForm } from "../components/NewTransForm";
import { TransactionTable } from "../components/TransactionTable";
import { fetchTransaction } from "../util/axiosHandler";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { CustomModal } from "../components/CustomModal";

const Dashboard = ({ loggedUser }) => {
  const [transactions, setTransactions] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    getUserTransactions();
  }, []);

  const getUserTransactions = async () => {
    const { status, message, trans } = await fetchTransaction();

    console.log(trans);
    status === "error" ? toast.error(message) : setTransactions(trans);
  };
  return (
    <AuthComp loggedUser={loggedUser}>
      {/* console.log(loggedUser) */}
      {/* header */}
      <TopNav loggedUser={loggedUser} />
      {/* mainbody */}
      <Container className="main pt-2">
        <h4>Dashboard | Welcome Back {loggedUser?.name}</h4>
        <hr />
        <CustomModal
          title="add new transaction"
          show={showForm}
          setShowForm={setShowForm}
        >
          <NewTransForm
            getUserTransactions={getUserTransactions}
            setShowForm={setShowForm}
          />
        </CustomModal>
        <Row>
          <Col className="text-end">
            <Button onClick={() => setShowForm(true)}>
              Add New Transaction
            </Button>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <TransactionTable transactions={transactions} />
          </Col>
        </Row>
      </Container>
      {/* footer */}
      <Footer />
    </AuthComp>
  );
};

export default Dashboard;
