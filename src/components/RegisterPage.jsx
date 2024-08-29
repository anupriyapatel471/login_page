import css from "./InputBox.module.css";
import "../App.css";
import { useRef } from "react";

function RegisterPage({ loginPageClick }) {
  const nameElement = useRef();
  const userNameElement = useRef();
  const passwordElement = useRef();

  const handleOnclick = (event) => {
    event.preventDefault();

    console.log("regiter button clicked");

    const nameE = nameElement.current.value;
    const userNameE = userNameElement.current.value;
    const passwordE = passwordElement.current.value;

    // to save data in a local storage
    localStorage.setItem(
      "user",
      JSON.stringify({ nameE, userNameE, passwordE })
    );

    //Clear the form inputs after saving
    nameElement.current.value = "";
    userNameElement.current.value = "";
    passwordElement.current.value = "";
    loginPageClick();
  };

  return (
    <>
      <h1>Register Here</h1>
      <form onSubmit={handleOnclick}>
        <div>
          <input
            type="text"
            placeholder="Enter Name"
            ref={nameElement}
            className={css.inputBox}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter UserName"
            ref={userNameElement}
            className={css.inputBox}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter Password"
            ref={passwordElement}
            className={css.inputBox}
            required
          />
        </div>

        <div>
          <button className="btn btn-success">Register</button>
        </div>
      </form>
      <p>
        If already have an Account{" "}
        <button onClick={loginPageClick}>Login Page</button>
      </p>
    </>
  );
}
export default RegisterPage;
