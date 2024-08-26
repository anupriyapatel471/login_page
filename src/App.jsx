import "./App.css";
import Heading from "./components/Heading";
import InputBox from "./components/InputBox";
import LoginButton from "./components/LoginButton";
import InsertImg from "./components/InsertImg";

function App() {
  return (
    <>
      <div>
        <InsertImg></InsertImg>
      </div>
      <Heading></Heading>
      <InputBox></InputBox>
      <LoginButton></LoginButton>
    </>
  );
}

export default App;
