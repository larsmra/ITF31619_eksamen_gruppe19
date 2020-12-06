import React, { createContext, useContext, useEffect, useState } from 'react';
import { getUser } from '../utils/auth';

const AuthContext = createContext();

const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      console.log(user);
      if (user === null) {
        const { data } = await getUser();
        console.log(data);
        if (data?.success) {
          setUser(data.data);
        } else {
          setUser(null);
        }
      }
    };
    fetchUserData();
  }, [user]);

  return (
    <Provider value={{ isLoggedIn: !!user, user, setUser }}>
      {children}
    </Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;
