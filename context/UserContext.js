import { createContext, useState, useRef } from "react";
//import { users } from "../data/data";
import { router } from "expo-router";

export const UserContext = createContext();

export function UserProvider({ children }) {
  
  // user: null if not logged in
  // { name: string, lastLogin: Date }
  const [user, setUser] = useState(null);//useState({'email':'test','password':'12345','name':'test','userid':'123456785'});
  const responseData = useRef(null)
  function login(name, password) {

  const options = {
    method: 'POST',
/*        
    headers: {
      'X-RapidAPI-Key': 'cee3bd1e22msheedb98e87dec740p196316jsn6d22f5917037',
      'X-RapidAPI-Host': 'quotes-by-api-ninjas.p.rapidapi.com'
    }
*/        
  };

//      console.log('https://prj-backend-mini-library.onrender.com/user/'+name)
  
//      try {
    
    const response = fetch('https://prj-backend-mini-library.onrender.com/user/' + name, options)
    .then(response => response.json())
    .then(data => { 
      console.log(data)
      console.log(data.name,name,'&&',data.password,password)
      if( (data.name==name || data.email==name) && data.password == password){
        setUser(
          {
            name: data.name,
            email: data.email,
            userid: data.id,
          }
        );
        router.push('');        
      }else{
        alert('Wrong Email or Password!')
      }
    })
    .catch(error => console.error(error));
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
