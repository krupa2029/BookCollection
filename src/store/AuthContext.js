import React, {useContext, useEffect, useState} from 'react'
import { auth } from '../firebase';

const AuthContext = React.createContext({
    currentUser: "",
    isLoggedIn: false,
  });

export function AuthProvider(props) {
    // const [currentUser, setCurrentUser ] = useState(null);
    let currentUser = auth.currentUser;

    let isLoggedIn = false;

    useEffect(()=>{
        if(currentUser != null) {
            isLoggedIn = true;
        }else{
            isLoggedIn = false;
        }    
    },[currentUser]);

   
    const contextValue = {
        currentUser,
        isLoggedIn
    }
    return (
        <AuthContext.Provider value={contextValue}>
          {props.children}
        </AuthContext.Provider>
      );
}


export default AuthContext;