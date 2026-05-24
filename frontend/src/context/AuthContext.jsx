import { createContext, useState, useEffect } from "react";
import axiosInstance from "../api/axios";

export const AuthContext = createContext();

function AuthProvider({ children }) {

  // current logged in user
  const [user, setUser] = useState(null);

  // loading while auth check runs
  const [loading, setLoading] = useState(true);



  useEffect(() => {

    const checkAuth = async () => {

      try {

        // frontend backend ko /get-me request bhejta hai
        // backend cookie aur JWT token verify karta hai

        const response = await axiosInstance.get(
          "/auth/get-me"
        );

        // agar token valid hai
        // user ko state me save karo

        setUser(response.data.user);

      } catch (error) {

        // agar token invalid hai
        // user remove kar do

        setUser(null);

      } finally {

        // finally hamesha run hota hai
        // success ho ya error

        setLoading(false);

      }

    };

    checkAuth();

  }, []);




  return (

    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading
      }}
    >

      {children}

    </AuthContext.Provider>

  );

}

export default AuthProvider;




// App start hote hi useEffect run hota hai,
// frontend backend ko /get-me request bhejta hai,
// backend cookie check karta hai,
// middleware JWT token verify karta hai,
// agar token valid hota hai to user data milta hai,
// setUser() user ko state me save karta hai,
// aur frontend ko pata chal jata hai ki user already login hai.
//
// Is wajah se page refresh hone ke baad bhi user logout nahi hota.
// Isi concept ko Authentication Persistence bolte hain.