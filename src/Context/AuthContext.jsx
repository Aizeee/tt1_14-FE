import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // user state
  const [user, setUser] = useState({
    data: null,
    loading: true,
    error: null,
  });

  // Before fetching response from /me, we need to make sure token is inside of header
  const token = localStorage.getItem("token");

  // If token exists, sets all of our request headers to have the Bearer token
  if (token) {
    axios.defaults.headers.common["authorization"] = `Bearer ${token}`;
  }

  const fetchUser = async () => {
    const { data: response } = await axios.get("https://localhost:4000");

    // If data exists, update User state, else Error
    if (response.data) {
      setUser({
        data: null,
        loading: false,
        error: null,
      });
    } else if (response.data && response.data.errors.length) {
      setUser({
        data: null,
        loading: false,
        error: response.errors,
      });
    }
    console.log("fetch success");
  };

  // on page load, if token exists, we run FetchUser. Else, we set user to initial state.
  useEffect(() => {
    if (token) {
      fetchUser();
    } else {
      setUser({
        data: null,
        loading: false,
        error: null,
      });
    }
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
