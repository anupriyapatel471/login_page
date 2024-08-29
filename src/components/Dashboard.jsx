function Dashboard() {
  const storedUserData = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <h2>{`Hi ${storedUserData.nameE}`}</h2>
      <h2>Welcome To Your DashBoard</h2>
    </>
  );
}
export default Dashboard;
