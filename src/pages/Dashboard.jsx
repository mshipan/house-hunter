import useAuth from "../hooks/useAuth";
import { useGetUserByEmailQuery } from "../redux/features/api/usersApi";

const Dashboard = () => {
  const { user } = useAuth();

  const {
    data: filteredUser,
    isLoading,
    isError,
  } = useGetUserByEmailQuery(user?.email);
  if (isLoading) {
    return <p className="text-lg text-black font-mono">Loading...</p>;
  }
  if (isError) {
    return (
      <p className="text-lg text-black font-mono">Error Loading data...</p>
    );
  }

  return (
    <div>
      <h1 className="text-white text-xl font-serif">Welcome to Dashboard</h1>
      <p>welcome {filteredUser?.email}</p>
      <p>Role: {filteredUser?.role}</p>
    </div>
  );
};

export default Dashboard;
