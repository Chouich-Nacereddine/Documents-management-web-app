import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  const login = (token) => {
    if (token) {
      localStorage.setItem("token", token);
      setAuthenticated(true);
    } else {
      // Handle failed login here
      console.log("Invalid token");
    }
  };

  const logout = (token) => {
    // Implement your logout logic here.
    // Clear token  from localStorage and reset authentication
    localStorage.removeItem("token");
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
