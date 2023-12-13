import { Link, useNavigate } from "react-router-dom";

function Nav() {
  const navigator = useNavigate();
  return (
    <>
      <div className="Nav">
        <Link to="/">Home</Link>
        {sessionStorage.getItem("user") && (
          <button
            onClick={() => {
              sessionStorage.removeItem("user");
              navigator("/");
            }}
          >
            LogOut
          </button>
        )}
      </div>
    </>
  );
}

export default Nav;
