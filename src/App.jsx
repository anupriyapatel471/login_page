import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./components/Heading";
import InputBox from "./components/InputBox";
import LoginButton from "./components/LoginButton";
import InsertImg from "./components/InsertImg";
import { useState } from "react";
import RegisterPage from "./components/RegisterPage";
import Dashboard from "./components/Dashboard";

function App() {
  const storedUserData = JSON.parse(localStorage.getItem("user"));

  let [UserName, setUserName] = useState("");
  let [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [currentValue, setCurrentValue] = useState(true);
  // for connecting to registe component

  function showdata() {
    const data = {
      name: UserName,
      password: password,
    };
    console.log(data);
  }
  const handleReset = () => {
    setUserName("");
    setPassword("");
  };
  const registePage = () => {
    setCurrentValue(false);
  };
  const loginPageClick = () => {
    setCurrentValue(true);
  };

  const checkUserDetails = () => {
    if (
      storedUserData.userNameE === UserName &&
      storedUserData.passwordE === password
    ) {
      setIsLoggedIn(true);
      alert("login Succesful");
    } else {
      alert("Please enter valid username or password");
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <Dashboard />
      ) : currentValue ? (
        <>
          <div>
            <InsertImg></InsertImg>
          </div>
          <Heading></Heading>
          <InputBox
            username={UserName}
            setuname={setUserName}
            password={password}
            setupass={setPassword}
          ></InputBox>
          <LoginButton
            showdata={showdata}
            checkUserDetails={checkUserDetails}
          ></LoginButton>
          <button onClick={handleReset} className="btn btn-danger">
            Reset
          </button>
          <p>
            Don't have an account{" "}
            <button onClick={registePage}>Register</button>
          </p>
        </>
      ) : (
        <>
          <RegisterPage loginPageClick={loginPageClick}></RegisterPage>
        </>
      )}
    </>
  );
}

export default App;
