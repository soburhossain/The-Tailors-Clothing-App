import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const homeContext = createContext();
const HomeProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin123") {
      navigate("/admin");
    } else {
      setErrorMessage("Invalid username or password");
    }
  };
  return (
    <homeContext.Provider
      value={{
        setUsername,
        setPassword,
        errorMessage,
        setErrorMessage,
        handleSubmit,
        username,
        password,
      }}
    >
      {children}
    </homeContext.Provider>
  );
};
export { homeContext, HomeProvider };
