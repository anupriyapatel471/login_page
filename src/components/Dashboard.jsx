import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = ({ setCurrentValue }) => {
  const storedUserData = JSON.parse(localStorage.getItem("user"));
  const handleLogout = () => {
    setCurrentValue(true);
    console.log("logout button clicked");
  };

  return (
    <>
      <Navbar></Navbar>
      <h2>{`Hi ${storedUserData.nameE}`}</h2>
      <h2>Welcome To Your DashBoard</h2>
      <p>
        For logout click here <button onClick={handleLogout}>Logout</button>
      </p>
    </>
  );
};
export default Dashboard;
