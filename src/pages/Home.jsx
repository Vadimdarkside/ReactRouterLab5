import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="home">Home</div>
      <Link className="loginLink" to="login">
        Login
      </Link>
    </>
  );
}

export default Home;
