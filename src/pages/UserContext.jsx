import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { fetchTransaction } from "../util/axiosHandler";

const UserContext = createContext();
//allow any components to use the data
// export const useUser = () => useContext(UserContext);

//provides data to all comp
export const UserProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState({});
  const [transactions, setTransactions] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const userStr = localStorage.getItem("user");
    userStr && setLoggedUser(JSON.parse(userStr));
  }, []);

  const getUserTransactions = async () => {
    const { status, message, trans } = await fetchTransaction();
    console.log(trans);
    status === "error" ? toast.error(message) : setTransactions(trans);
  };

  return (
    <UserContext.Provider
      value={{
        loggedUser,
        setLoggedUser,
        transactions,
        setTransactions,
        getUserTransactions,
        showForm,
        setShowForm,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// allow any component to consume the data
export const useUser = () => useContext(UserContext);
