import css from "./InputBox.module.css";
function InputBox() {
  const handleOnChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <div className={css.inputDiv}>
        <input
          type="text"
          placeholder="Enter UserName"
          className={css.inputBox}
          onChange={handleOnChange}
        ></input>
      </div>

      <div className={css.inputDiv}>
        <input
          type="password"
          placeholder="Enter Password"
          className={css.inputBox}
          onChange={handleOnChange}
        ></input>
      </div>
    </>
  );
}
export default InputBox;
