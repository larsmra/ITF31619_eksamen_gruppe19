import React, { createContext, useContext, useEffect, useState } from 'react';
import { getUser } from '../utils/auth';

const AuthContext = createContext();

const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      if (user === null) {
        const { data } = await getUser();
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
