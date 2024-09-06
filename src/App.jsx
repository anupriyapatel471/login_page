import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./components/Heading";
import InputBox from "./components/InputBox";
import LoginButton from "./components/LoginButton";
import InsertImg from "./components/InsertImg";
import { useState } from "react";
import RegisterPage from "./components/RegisterPage";
import Dashboard from "./components/Dashboard";
import { Route, Routes } from "react-router-dom";

//import pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Contact from "./Pages/Contact";
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
      alert("login successfully");
    } else {
      alert("Please enter valid username or password");
      handleReset();
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <Routes>
          <Route
            path="/"
            element={<Dashboard setCurrentValue={setCurrentValue} />}
          ></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
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
