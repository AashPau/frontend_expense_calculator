import { Container } from "react-bootstrap";
import { Footer } from "../components/Footer";
import { TopNav } from "../components/TopNav";

const Dashboard = () => {
  return (
    <div>
      {/* header */}
      <TopNav />
      {/* mainbody */}
      <Container className="main pt-2">
        <h4>Dashboard</h4>
        <hr />
      </Container>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;
