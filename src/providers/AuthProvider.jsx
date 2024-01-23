import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("access-token");

    if (token) {
      const decodedUser = jwtDecode(token);
      setUser(decodedUser);
    }
  }, []);

  const logout = () => {
    setUser(null);
    localStorage.removeItem("access-token");
  };
  const authInfo = {
    user,
    logout,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
