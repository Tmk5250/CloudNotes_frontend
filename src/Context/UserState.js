import React, { createContext, useState } from "react";


export const UserContext = createContext();
const osTheme =()=>{
  let colour = true
  if ( window.matchMedia('(prefers-color-scheme: dark)').matches) {
    colour=false
  } 
  return colour
}

const UserState = (props) => {
 
    const [newUser, setnewUser] = useState({name:"",email:"",password:""})
    const [user, setuser] = useState({email:"",password:""})
    const [theme, settheme] = useState(osTheme())
    const [loginState, setloginState] = useState(false)
    
 
    return (
    <UserContext.Provider value={{newUser,setnewUser,user,setuser,theme, settheme,loginState,setloginState}}>{props.children}</UserContext.Provider>
  );
};

export default UserState;
