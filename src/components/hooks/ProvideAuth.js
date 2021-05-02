import { createContext, useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
export const firebaseContext = createContext();

export default function ProvideAuth({ children }) {
  const [user, setUser] = useState(firebase.auth().currentUser);
  useEffect(() => {
    const unsub = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsub();
  }, [user]);
  return (
    <firebaseContext.Provider value={user}>{children}</firebaseContext.Provider>
  );
}
