import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div>
      <h1>Dashboard Page</h1>
      <p>welcome {user?.email}</p>
    </div>
  );
};

export default Dashboard;
