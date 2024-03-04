import { createContext, useState } from "react";
import { users } from "../data/data";

export const UserContext = createContext();

export function UserProvider({ children }) {
  // user: null if not logged in
  // { name: string, lastLogin: Date }
  const [user, setUser] = useState({'email':'test','password':'12345','name':'test','userid':'123456785'});
  function login(name, password) {

    let user_temp = users.filter(
      (person) => {
        if(person.email==name && person.password==password){
          return {name: person.email, userid: person.suerId};
        }else{
          return null;
        }
      }
    )
    //console.log(user_temp)
    if(user_temp.length<=0){
      user_temp = null;
    }else{
      setUser(
        {
          name: user_temp[0].name,
          email: user_temp[0].email,
          userid: user_temp[0].suerId,
        }
      );
    }

    

    return user_temp;

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
