import { FaEyeSlash } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";
import css from "./LoginPage.module.css";
import InsertImg from "../components/InsertImg";
import { ContextSore } from "../store/ContextStore";
import { useContext } from "react";

function LoginPage() {
  const {
    UserName,
    setUserName,
    password,
    setPassword,
    showdata,
    checkUserDetails,
    handleReset,
    registePage,
  } = useContext(ContextSore);

  const handleOnChangeUser = (event) => {
    let value = event.target.value;
    setUserName(value);
  };
  const handleOnChangePass = (event) => {
    setPassword(event.target.value);
  };
  return (
    <>
      <div>
        <InsertImg></InsertImg>
      </div>
      <h1>Login Page</h1>;
      <div className={css.inputDiv}>
        <input
          type="text"
          placeholder="Enter UserName"
          className={css.inputBox}
          onChange={handleOnChangeUser}
          value={UserName}
          required
        ></input>
      </div>
      <div className={css.inputDiv}>
        <input
          type="password"
          placeholder="Enter Password"
          className={css.inputBox}
          onChange={handleOnChangePass}
          value={password}
          required
        ></input>
        {<FaEyeSlash />}
      </div>
      <button className="btn btn-success" onClick={checkUserDetails}>
        Login
      </button>
      <button onClick={handleReset} className="btn btn-danger">
        Reset
      </button>
      <p>
        Don't have an account <button onClick={registePage}>Register</button>
      </p>
    </>
  );
}
export default LoginPage;

// function Heading() {
//   return
// }
// export default Heading;

// import css from "./InputBox.module.css";

// function InputBox({ username, setuname, password, setupass }) {
//   const handleOnChangeUser = (event) => {
//     let value = event.target.value;
//     setuname(value);
//   };
//   const handleOnChangePass = (event) => {
//     setupass(event.target.value);
//   };

//   return (
//     <>
//       <div className={css.inputDiv}>
//         <input
//           type="text"
//           placeholder="Enter UserName"
//           className={css.inputBox}
//           onChange={handleOnChangeUser}
//           value={username}
//           required
//         ></input>
//       </div>

//       <div className={css.inputDiv}>
//         <input
//           type="password"
//           placeholder="Enter Password"
//           className={css.inputBox}
//           onChange={handleOnChangePass}
//           value={password}
//           required
//         ></input>
//         {<FaEyeSlash />}
//       </div>
//     </>
//   );
// }
// export default InputBox;

// function LoginButton({ showdata, checkUserDetails }) {
//   return (
//     <>
//       <button className="btn btn-success" onClick={checkUserDetails}>
//         Login
//       </button>
//     </>
//   );
// }
// export default LoginButton;
