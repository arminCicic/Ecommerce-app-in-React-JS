import React, { createContext, useContext, useState, useEffect } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import db from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";

const AppContext = createContext();

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState();

  const [searchTerm, setSearchTerm] = useState("");

  const [user, setUser] = useState({});

  const [userLoggedIn, setUserLoggedIn] = useState(false);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logout = async () => {
    await signOut(auth);
  };

  useEffect(
    () =>
      onSnapshot(collection(db, "products"), (snapshot) =>
        setProducts(snapshot.docs.map((doc) => doc.data()))
      ),

    []
  );

  const [products, setProducts] = useState([]);

  return (
    <AppContext.Provider
      value={{
        cart,
        setCart,
        products,
        searchTerm,
        setSearchTerm,
        user,
        setUser,
        userLoggedIn,
        setUserLoggedIn,
        logout,
        total,
        setTotal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const AppState = () => {
  return useContext(AppContext);
};

export default Context;
