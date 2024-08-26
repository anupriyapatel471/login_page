import "bootstrap/dist/css/bootstrap.min.css";
function LoginButton() {
  const handleOnClick = (event) => {
    console.log(event);
  };
  return (
    <button
      className="btn btn-success"
      onClick={(event) => handleOnClick("Login Button Clicked")}
    >
      Login
    </button>
  );
}
export default LoginButton;
