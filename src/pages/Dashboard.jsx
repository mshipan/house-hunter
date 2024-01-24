import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();

  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_baseApi}/user/${user?.email}`,
          {
            method: "GET",
            headers: {
              authorization: `Bearer ${localStorage.getItem("access-token")}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setFetchedData(result);
      } catch (error) {
        console.error("Error fetching data from the server", error);
      }
    };

    fetchData();
  }, [user?.email]);

  return (
    <div>
      <h1 className="text-white text-xl font-serif">Welcome to Dashboard</h1>
      <p>welcome {fetchedData?.email}</p>
      <p>Role: {fetchedData?.role}</p>
    </div>
  );
};

export default Dashboard;
