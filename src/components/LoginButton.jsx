import "bootstrap/dist/css/bootstrap.min.css";
function LoginButton({ showdata, checkUserDetails }) {
  return (
    <>
      <button className="btn btn-success" onClick={checkUserDetails}>
        Login
      </button>
    </>
  );
}
export default LoginButton;
