import { Button, Col, Container, Row } from "react-bootstrap";
import { Footer } from "../components/Footer";
import { AuthComp } from "../components/AuthComp";
import { TopNav } from "../components/TopNav";
import { NewTransForm } from "../components/NewTransForm";
import { TransactionTable } from "../components/TransactionTable";

import { CustomModal } from "../components/CustomModal";
import { useUser } from "./UserContext";

const Dashboard = () => {
  const { loggedUser, setShowForm } = useUser();

  return (
    <AuthComp>
      {/* console.log(loggedUser) */}
      {/* header */}
      <TopNav />
      {/* mainbody */}
      <Container className="main pt-2">
        <h4>Dashboard | Welcome Back {loggedUser?.name}</h4>
        <hr />
        <CustomModal
          title="add new transaction"
          //  show={showForm}
        >
          <NewTransForm
          // setShowForm={setShowForm}
          // getUserTransactions={getUserTransactions}
          />
        </CustomModal>
        <Row>
          <Col className="text-end">
            <Button
              onClick={() => {
                setShowForm(true);
              }}
            >
              Add New Transactions
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="mt-5">
            <TransactionTable
            // transactions={transactions}
            />
          </Col>
        </Row>
      </Container>
      {/* footer */}
      <Footer />
    </AuthComp>
  );
};

export default Dashboard;
