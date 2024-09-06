import css from "./InputBox.module.css";
import { FaEyeSlash } from "react-icons/fa6";

function InputBox({ username, setuname, password, setupass }) {
  const handleOnChangeUser = (event) => {
    let value = event.target.value;
    setuname(value);
  };
  const handleOnChangePass = (event) => {
    setupass(event.target.value);
  };

  return (
    <>
      <div className={css.inputDiv}>
        <input
          type="text"
          placeholder="Enter UserName"
          className={css.inputBox}
          onChange={handleOnChangeUser}
          value={username}
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
      </div>
    </>
  );
}
export default InputBox;
