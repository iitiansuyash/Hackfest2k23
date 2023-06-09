import {  useState } from "react";
import {createContext} from'react';

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;