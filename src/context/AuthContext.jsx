import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (username, password) => {
    const hardcodedUsername = "shreeharsh";
    const hardcodedPassword = "12345678";

    if (username === hardcodedUsername && password === hardcodedPassword) {
      setUser({ username });
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  const logout = () => {
    setUser(null);
    navigate("/"); 
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
