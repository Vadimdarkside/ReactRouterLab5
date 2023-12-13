import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const user = sessionStorage.getItem("user");
  if (user) {
    console.log(user);
    navigate("/user");
  }
  return (
    <>
      <div>Login Page</div>
      <LoginForm />
    </>
  );
}

export default Login;

export async function action({ request, params }) {
  const formData = await request.formData();
  const Login = formData.get("Login");
  const Password = formData.get("Password");
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: Login,
      password: Password,
    }),
  }).then((res) => res.json());

  console.log(response);
  if (response.message) {
    console.log("error");
    throw new Response(JSON.stringify({ message: response.message }), {
      status: 400,
    });
  } else {
    sessionStorage.setItem("user", JSON.stringify(response));
  }
  return response;
}
