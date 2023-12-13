import { Form, useActionData } from "react-router-dom";
function LoginForm() {
  const afterSubmitData = useActionData(); // not used

  return (
    <>
      <Form method="POST">
        <p>
          <label htmlFor="Login">Login</label>
          <input
            id="Login"
            type="text"
            name="Login"
            defaultValue="kminchelle"
          />
        </p>
        <p>
          <label htmlFor="Password">Password</label>
          <input
            id="Password"
            type="password"
            name="Password"
            defaultValue="0lelplR"
          />
        </p>
        <button>Log In</button>
      </Form>
    </>
  );
}

export default LoginForm;
