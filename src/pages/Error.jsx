import Nav from "../components/Nav";
import { useRouteError } from "react-router-dom";
function Error() {
  const error = useRouteError();
  let title = "An error occured";
  let message = "Something went wrong";
  if (error.status === 400) {
    title = "Шось точно не так";
    message = JSON.parse(error.data).message;
  }
  return (
    <>
      <Nav />
      <div>{title}</div>
      <div>{message}</div>
    </>
  );
}

export default Error;
