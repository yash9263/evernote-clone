import { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseContext } from "./components/hooks/ProvideAuth";

export default function useAuth() {
  return useContext(firebaseContext);
}

export function getUser() {
  return new Promise((resolve) => {
    let user = firebase.auth().currentUser;
    return user && resolve(user);
  });
}
