import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

function Homepage() {
  return (
    <div>
      <PageNav />
      <h2>WiseWorld</h2>
      <Link to={"/pricing"}>Pricing</Link>
    </div>
  );
}

export default Homepage;
