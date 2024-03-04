import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  // user: null if not logged in
  // { name: string, lastLogin: Date }
  const [user, setUser] = useState(null);
  function login(name, password) {
    // => check login on server
    setUser({ name });
  }
  function logout() {
    setUser(null);
  }
  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
